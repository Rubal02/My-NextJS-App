"use client";

import React from "react";

interface ChartData {
  title: string;
  yAxis: string[];
  xAxis: string;
}

interface GraphicalViewProps {
  data: ChartData;
}

export default function GraphicalView({ data }: GraphicalViewProps) {
    if (!data) return null;
  return (
    <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm min-h-[300px]">
      <h3 className="text-xl font-semibold mb-6">{data.title}</h3>
      {/* Placeholder for Chart - Visual representation based on Figma */}
      <div className="relative h-[220px] w-full flex items-end gap-2 px-4 pb-8 border-b border-l border-gray-300">
          {/* Y-axis labels (mock) */}
           <div className="absolute -left-8 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
               <span>400</span>
               <span>200</span>
               <span>0</span>
           </div>

           {/* Mock Bars */}
          {[40, 60, 55, 70, 45, 80, 60, 50, 65, 75, 85, 90].map((h, i) => (
              <div key={i} className="flex-1 flex gap-1 items-end h-full group relative">
                  <div className="w-full bg-green-400/60 rounded-t-md" style={{ height: `${h}%` }}></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">{i+1}</span>
              </div>
          ))}
      </div>
       <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-2"><div className="w-3 h-3 border border-blue-500 rounded"></div> Stock</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 border border-red-500 rounded"></div> Backlog</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded"></div> Order</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-500 rounded"></div> Total cost</div>
       </div>
    </div>
  );
}

