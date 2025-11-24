import UnifiedIntro from "@/components/intro/UnifiedIntro";
import content from "./intro-content.json";

export default function IntroPage() {
    return (
        <main>
            <UnifiedIntro content={content as any} />
        </main>
    );
}
