"use client";

import React from "react";

const Icons = {
  Factory: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
  ),
  Users: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Store: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
  ),
  Truck: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
  ),
  RefreshCcw: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
  )
};

interface SupplyChainData {
  title: string;
  stages: string[];
}

interface StatusViewProps {
  data: SupplyChainData;
}

export default function StatusView({ data }: StatusViewProps) {
    if(!data) return null;
  return (
    <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
             <h3 className="text-2xl font-semibold">{data.title}</h3>
             <button className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white hover:bg-gray-50">
                 <span className="text-sm text-gray-500">Refresh</span>
                 <Icons.RefreshCcw className="w-4 h-4 text-gray-500" />
             </button>
        </div>

        <div className="relative flex justify-between items-center px-12 py-8">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-24 right-24 h-1 bg-gray-300 -z-10"></div>

            {data.stages.map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 bg-transparent">
                    <div className={`w-36 h-36 rounded-3xl border flex items-center justify-center bg-white/20 backdrop-blur-sm
                        ${stage === "Wholesaler" ? 'border-blue-400 bg-blue-50/30 shadow-lg scale-110' : 'border-gray-400'}
                    `}>
                         {stage === "Factory" && <Icons.Factory className="w-12 h-12 text-gray-700" />}
                         {stage === "Distributor" && <Icons.Store className="w-12 h-12 text-gray-700" />}
                         {stage === "Wholesaler" && <Icons.Users className="w-12 h-12 text-gray-700" />}
                         {stage === "Retailer" && <Icons.Store className="w-12 h-12 text-gray-700" />}
                    </div>
                    <span className="font-bold text-lg">{stage}</span>
                </div>
            ))}

             {/* Truck Overlay Mockup */}
             <div className="absolute top-1/4 left-[70%] bg-white px-3 py-1 rounded-full shadow border flex items-center gap-2">
                 <span className="text-xs font-semibold">20 units</span>
                 <Icons.Truck className="w-4 h-4 text-gray-500" />
             </div>
        </div>
    </div>
  );
}

