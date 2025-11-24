import re
import json
import os

# File path
file_path = r"c:\Users\Dell\my-app\components\intro1\training1.tsx"
output_path = r"c:\Users\Dell\my-app\content.json"

def extract_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        extracted_data = {
            "texts": [],
            "images": []
        }
        
        # Extract text from p tags (handling both direct text and template literals)
        # Pattern matches <p ...>{`text`}</p> OR <p ...>text</p>
        p_pattern = r"<p[^>]*>(?:{`([^`]+)`}|([^<]+))</p>"
        p_matches = re.findall(p_pattern, content)
        
        for match in p_matches:
            # match is a tuple (template_literal_content, direct_content)
            text = match[0] if match[0] else match[1]
            if text.strip():
                extracted_data["texts"].append(text.strip())
                
        # Extract text from span tags
        span_pattern = r"<span[^>]*>(?:{`([^`]+)`}|([^<]+))</span>"
        span_matches = re.findall(span_pattern, content)
        
        for match in span_matches:
            text = match[0] if match[0] else match[1]
            if text.strip():
                extracted_data["texts"].append(text.strip())
                
        # Extract background images (handling escaped quotes)
        # Pattern matches backgroundImage: "url('...')" handling \' inside
        img_pattern = r"backgroundImage:\s*\"url\('((?:[^'\\]|\\.)*)'\)\""
        img_matches = re.findall(img_pattern, content)
        
        for match in img_matches:
            extracted_data["images"].append(match)

        # Extract svg paths usage
        svg_pattern = r"svgPaths\.([a-zA-Z0-9_]+)"
        svg_matches = re.findall(svg_pattern, content)
        
        if svg_matches:
            extracted_data["svg_paths"] = list(set(svg_matches))
            
        return extracted_data

    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python extract_content.py <input_file> <output_file>")
        sys.exit(1)
        
    file_path = sys.argv[1]
    output_path = sys.argv[2]
    
    data = extract_content(file_path)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    print(f"Extraction complete. Data saved to {output_path}")
    print(json.dumps(data, indent=2))
