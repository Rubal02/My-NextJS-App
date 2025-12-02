"use client";

import React from "react";

const Icons = {
  ArrowRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
};

interface DecisionData {
  title: string;
  inputValue: number;
  buttonText: string;
  infoText: string;
}

interface DecisionViewProps {
  data: DecisionData;
}

export default function DecisionView({ data }: DecisionViewProps) {
    if (!data) return null;
  return (
      <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6">{data.title}</h2>
        <div className="bg-white/50 border rounded-xl p-4">
             <div className="flex gap-4 items-center">
                 <div className="flex-1 relative">
                     <input 
                        type="number" 
                        defaultValue={data.inputValue}
                        className="w-full h-[60px] text-center text-xl font-bold rounded-full border border-cyan-400 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                     />
                 </div>
                 <button className="bg-[#0e3a3e] text-white px-8 py-4 rounded-full font-normal flex items-center gap-2 hover:bg-[#0b2d30] transition-colors">
                     {data.buttonText}
                     <Icons.ArrowRight className="w-5 h-5" />
                 </button>
             </div>
             <p className="text-center text-gray-500 text-sm mt-4">{data.infoText}</p>
        </div>
      </div>
  );
}

