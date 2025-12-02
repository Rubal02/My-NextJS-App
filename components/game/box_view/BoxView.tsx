"use client";

import React from "react";

const Icons = {
  Package: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-10"/></svg>
  ),
  Info: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  Tag: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-5-5z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
  )
};

interface StatItem {
  id: string;
  title: string;
  value: string;
  subtext?: string;
  unit?: string;
  icon: string;
}

interface BoxViewProps {
  data: StatItem[];
}

export default function BoxView({ data }: BoxViewProps) {
  if (!data) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  const getIcon = (iconName: string) => {
      switch(iconName) {
          case 'box': return <Icons.Package className="w-6 h-6 text-gray-600" />;
          case 'info': return <Icons.Info className="w-6 h-6 text-blue-600" />;
          case 'tag': return <Icons.Tag className="w-6 h-6 text-gray-600" />;
          default: return <Icons.Info className="w-6 h-6" />;
      }
  }

  return (
    <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-500 text-base font-normal">{stat.title}</h3>
             {stat.icon === 'info' && <Icons.Info className="w-4 h-4 text-gray-400" />}
          </div>
          <div>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-[#202326]">{stat.value}</span>
                {stat.unit && <span className="text-[#027474] text-base">{stat.unit}</span>}
            </div>
            {stat.subtext && <p className="text-[#c65252] text-sm mt-1">{stat.subtext}</p>}
          </div>
        </div>
        <div>{getIcon(stat.icon)}</div>
      </div>
    </div>
  );
}

