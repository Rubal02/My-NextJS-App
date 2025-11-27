"use client";

import { useState } from "react";
import content from "./content.json";

// Inline Icons to avoid external dependencies
const Icons = {
  Package: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-10"/></svg>
  ),
  Info: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  Tag: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-5-5z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
  ),
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
  ArrowRight: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  RefreshCcw: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
  )
};

interface OrderFlowItem {
  title: string;
  value: string;
  time: string;
  badge?: string;
}

interface StatItem {
  id: string;
  title: string;
  value: string;
  subtext?: string;
  unit?: string;
  icon: string;
}

interface ScreenContent {
  id: string;
  layout: string;
  title: string;
  header?: {
    title: string;
    role: string;
    round: string;
  };
  stats?: StatItem[];
  chart?: {
    title: string;
    yAxis: string[];
    xAxis: string;
  };
  decision?: {
    title: string;
    inputValue: number;
    buttonText: string;
    infoText: string;
    tabs: string[];
    orderFlow: OrderFlowItem[];
  };
  supplyChain?: {
    title: string;
    stages: string[];
  };
}

export default function ScreentestPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = content as ScreenContent[];
  const currentStep = steps[currentStepIndex];

  if (!currentStep) return null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-8 font-sans text-[#202326]">
        {currentStep.layout === "dashboard" && (
             <Dashboard screen={currentStep} />
        )}
         {currentStep.layout === "confirmation" && (
            <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl font-bold">Order Confirmation Screen (Placeholder)</h1>
            </div>
        )}
    </div>
  );
}

function Dashboard({ screen }: { screen: ScreenContent }) {
  return (
    <div className="max-w-[1440px] mx-auto space-y-6">
      {/* Header */}
      <Header data={screen.header} />

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Stats & Chart */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {screen.stats?.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

          {/* Chart Section */}
          <ChartSection data={screen.chart} />
        </div>

        {/* Right Column: Decisions & Order Flow */}
        <div className="col-span-12 lg:col-span-6">
             <DecisionPanel data={screen.decision} />
        </div>
      </div>

      {/* Bottom Section: Supply Chain Overview */}
      <SupplyChainOverview data={screen.supplyChain} />
    </div>
  );
}

function Header({ data }: { data: ScreenContent["header"] }) {
  if (!data) return null;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <Icons.Store className="w-5 h-5" />
        </div>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border flex items-center gap-2">
            <span className="text-sm font-semibold">{data.role}</span>
            <Icons.Users className="w-4 h-4 text-gray-500" />
        </div>
         <div className="bg-white/50 border px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">{data.round}</span>
        </div>
      </div>
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

function ChartSection({ data }: { data: ScreenContent["chart"] }) {
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

function DecisionPanel({ data }: { data: ScreenContent["decision"] }) {
    if (!data) return null;
  return (
    <div className="space-y-6">
      {/* Decision Input */}
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

      {/* Tabs & Order Flow */}
      <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm min-h-[400px]">
         <div className="bg-gray-100 p-1 rounded-full flex gap-2 mb-6">
             {data.tabs.map((tab, idx) => (
                 <button 
                    key={idx}
                    className={`flex-1 py-2 rounded-full text-lg font-medium transition-colors ${idx === 0 ? 'bg-white shadow-sm text-[#003737]' : 'text-gray-500 hover:bg-white/50'}`}
                 >
                     {tab}
                 </button>
             ))}
         </div>

         <div className="space-y-4">
             <div className="pl-4 border-l-4 border-gray-200 space-y-8">
                {data.orderFlow.map((item, idx) => (
                    <div key={idx} className="relative">
                        <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center z-10">
                             <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl flex justify-between items-center">
                            <div>
                                <p className="text-gray-400 text-sm">{item.title}</p>
                                <p className="text-lg font-medium text-[#0f172b]">{item.value}</p>
                            </div>
                            <div className="text-right">
                                {item.badge && (
                                    <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs mb-1">{item.badge}</span>
                                )}
                                <p className="text-xs text-gray-500">{item.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </div>
    </div>
  );
}

function SupplyChainOverview({ data }: { data: ScreenContent["supplyChain"] }) {
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
