"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import content from "./content.json";
import HistoryView from "../../../../components/game/history_view/HistoryView";

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
  ),
  Clock: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  CheckCircle: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  )
};

interface OrderFlowItem {
    title: string;
  value: string;
  time: string;
  badge?: string;
}

interface RoundHistoryItem {
  round: string;
  inventory: string;
  incoming: string;
  outgoing: string;
  backorders: string;
  totalCost: string;
}

interface StatItem {
  id?: string;
  title: string;
  value: string;
  subtext?: string;
  unit?: string;
  icon: string;
  image?: string;
}

interface ScreenContent {
  id: string;
  layout: string;
  title: string;
  header?: {
    title: string;
    role: string;
    round?: string;
  };
  images?: {
    [key: string]: string | undefined;
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
    roundHistory?: RoundHistoryItem[];
  };
  supplyChain?: {
    title: string;
    stages: (string | { name: string; image?: string })[];
  };
  // Confirmation Screen Properties
  successMessage?: {
      title: string;
      amount: string;
      subtext: string;
  };
  transit?: {
      amount: string;
      duration: string;
      source: string;
      destination: string;
  };
  waiting?: {
      text: string;
      buttonText: string;
  };
  // New properties for ResultsScreen
  teamPerformance?: {
    title: string;
    stats: StatItem[];
  };
  individualPerformance?: {
    title: string;
    tableHeaders: string[];
    tableRows: {
      metric: string;
      retailer: string;
      wholesaler: string;
      distributor: string;
      manufacturer: string;
    }[];
  };
  bullwhipEffect?: {
    title: string;
    chartTitle1: string;
    chartSubtitle1: string;
    chartTitle2: string;
    chartSubtitle2: string;
    legend1: string[];
    legend2: string[];
  };
  experienceSummary?: {
    title: string;
    description: string;
    sections: {
      heading: string;
      subsections: {
        title: string;
        description: string;
      }[];
    }[];
  };
  exportActions?: {
    title: string;
    buttons: {
      text: string;
      subtext: string;
      icon: string;
    }[];
    backToLobbyButton: string;
    playAgainButton: string;
  };
}

export default function ScreentestPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [orderValue, setOrderValue] = useState(20); // State to hold the order input
  const [playerRole, setPlayerRole] = useState("Wholesaler");

  useEffect(() => {
      const storedRole = localStorage.getItem("beerGame_playerRole");
      if (storedRole) setPlayerRole(storedRole);
  }, []);

  // Dynamically update role in steps
  const steps = (content as ScreenContent[]).map(step => {
      const newStep = { ...step };
      if (newStep.header) {
          newStep.header = { ...newStep.header, role: playerRole };
      }
      return newStep;
  });
  
  const currentStep = steps[currentStepIndex];

  const handleNext = (inputValue?: number) => {
      if (inputValue !== undefined) {
          setOrderValue(inputValue);
      }

      if (currentStepIndex < steps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1);
      } else {
          // Loop back to start or finish
          setCurrentStepIndex(0);
      }
  }

  if (!currentStep) return null;

    return (
    <div className="min-h-screen bg-[#f8f9fa] p-8 font-sans text-[#202326]">
        {currentStep.layout === "dashboard" && (
             <Dashboard screen={currentStep} onNext={handleNext} />
        )}
         {currentStep.layout === "confirmation" && (
             <ConfirmationScreen screen={currentStep} onNext={() => handleNext()} orderValue={orderValue} />
        )}
        {currentStep.layout === "summary" && (
            <SummaryScreen screen={currentStep} onNext={() => handleNext()} />
        )}
        {currentStep.layout === "results" && (
            <ResultsScreen screen={currentStep} onNext={() => handleNext()} />
        )}
        </div>
    );
}

function SummaryScreen({ screen, onNext }: { screen: ScreenContent; onNext: () => void }) {
    return (
        <div className="max-w-[1440px] mx-auto space-y-8">
            {screen.header && <Header data={screen.header} />}

             <div className="max-w-5xl mx-auto space-y-12 pt-8">
                <div className="grid grid-cols-3 gap-6">
                    {screen.stats?.map((stat, idx) => (
                         <div key={idx} className="bg-[rgba(244,244,244,0.6)] border border-[#f2e6e6] p-8 rounded-2xl shadow-[0px_0px_10px_16px_rgba(250,238,238,0.2)] flex items-center justify-between">
                             <div className="space-y-4">
                                 <h3 className="text-[#606569] text-base font-normal">{stat.title}</h3>
                                 <span className="text-4xl font-semibold text-[#202326]">
                                     {stat.value}
                                 </span>
                            </div>
                             <div className="w-12 h-12 bg-transparent flex items-center justify-center">
                                {stat.icon === 'package' && <Icons.Package className="w-8 h-8 text-gray-600" />}
                                {stat.icon === 'box' && <Icons.Package className="w-8 h-8 text-gray-600" />}
                                {stat.icon === 'truck' && <Icons.Truck className="w-8 h-8 text-gray-600" />}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6 pt-8">
                    <p className="text-gray-500">{screen.waiting?.text}</p>
                    <button 
                        onClick={onNext}
                        className="bg-[#0e3a3e] text-white px-12 py-4 rounded-full font-medium hover:bg-[#0b2d30] transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        {screen.waiting?.buttonText}
                        <div className="bg-white/20 rounded-full p-1">
                            <Icons.ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
             </div>
        </div>
    )
}

function Dashboard({ screen, onNext }: { screen: ScreenContent; onNext: (val: number) => void }) {
  const [inputValue, setInputValue] = useState(screen.decision?.inputValue || 0);

    return (
    <div className="max-w-[1440px] mx-auto space-y-6">
      {/* Header */}
      {screen.header && <Header data={screen.header} />}

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
             <DecisionPanel 
                data={screen.decision} 
                onNext={() => onNext(inputValue)} 
                inputValue={inputValue}
                setInputValue={setInputValue}
             />
        </div>
            </div>

      {/* Bottom Section: Supply Chain Overview */}
      <SupplyChainOverview data={screen.supplyChain} />
        </div>
    );
}

function ConfirmationScreen({ screen, onNext, orderValue }: { screen: ScreenContent; onNext: () => void; orderValue: number }) {
    return (
        <div className="max-w-[1440px] mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold">{screen.header?.title}</h1>
                <div className="bg-white px-4 py-2 rounded-full shadow-sm border flex items-center gap-2">
                    <span className="text-sm font-semibold">{screen.header?.role}</span>
                    <Icons.Users className="w-4 h-4 text-gray-500" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto space-y-8 pt-12">
                {/* Success Message */}
                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-3 text-3xl font-semibold">
                        <span>{screen.successMessage?.title}</span>
                        <span className="text-[#027474]">{orderValue} units</span>
            </div>
                    <p className="text-gray-500">
                        {screen.successMessage?.subtext.replace(/\d+ units/, `${orderValue} units`)}
                    </p>
        </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {screen.stats?.map((stat, idx) => (
                         <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                             <div>
                                 <h3 className="text-gray-500 mb-2">{stat.title}</h3>
                                 <span className="text-4xl font-semibold">
                                     {stat.title === "Order Sent" ? orderValue : stat.value}
                                 </span>
        </div>
                             <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                                {stat.icon === 'truck' && <Icons.Truck className="w-6 h-6 text-gray-600" />}
                                {stat.icon === 'package' && <Icons.Package className="w-6 h-6 text-gray-600" />}
                                {stat.icon === 'clock' && <Icons.Clock className="w-6 h-6 text-gray-600" />}
        </div>
        </div>
                    ))}
        </div>

                {/* Transit Visualization */}
                <div className="bg-white border border-gray-100 p-12 rounded-2xl shadow-sm relative overflow-hidden">
                     <div className="flex justify-between items-center relative z-10">
                         {/* Distributor Node */}
                         <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                                <Icons.Store className="w-12 h-12 text-gray-400" />
        </div>
                            <span className="font-semibold text-gray-500">{screen.transit?.source}</span>
        </div>

                         {/* Truck Animation Area */}
                         <div className="flex-1 mx-12 relative h-20">
                             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
                             {/* Moving Truck */}
                             <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                 <div className="bg-white border shadow-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                     {orderValue} units
        </div>
                                 <Icons.Truck className="w-10 h-10 text-[#027474]" />
                                 <span className="text-xs font-medium text-[#027474] bg-[#027474]/10 px-2 py-0.5 rounded">
                                     {screen.transit?.duration}
                                 </span>
        </div>
        </div>

                         {/* Wholesaler Node */}
                         <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 rounded-2xl border-2 border-[#027474] flex items-center justify-center bg-[#027474]/5 shadow-lg">
                                <Icons.Users className="w-12 h-12 text-[#027474]" />
                </div>
                            <span className="font-semibold text-[#027474]">{screen.transit?.destination}</span>
            </div>

                         {/* Retailer Node (faded) */}
                         <div className="flex flex-col items-center gap-4 opacity-40">
                            <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                                <Icons.Store className="w-12 h-12 text-gray-400" />
        </div>
                            <span className="font-semibold text-gray-500">Retailer</span>
        </div>
        </div>
        </div>

                {/* Footer Action */}
                <div className="flex flex-col items-center gap-6 pt-8">
                    <p className="text-gray-500">{screen.waiting?.text}</p>
                    <button 
                        onClick={onNext}
                        className="bg-[#0e3a3e] text-white px-12 py-4 rounded-full font-medium hover:bg-[#0b2d30] transition-colors shadow-lg hover:shadow-xl"
                    >
                        {screen.waiting?.buttonText}
                    </button>
        </div>
        </div>
        </div>
    )
}

function Header({ data }: { data: NonNullable<ScreenContent["header"]> }) {
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
        {data.round && (
             <div className="bg-white/50 border px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">{data.round}</span>
        </div>
        )}
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
          case 'checkCircle': return <Icons.CheckCircle className="w-6 h-6 text-green-600" />;
          case 'clock': return <Icons.Clock className="w-6 h-6 text-gray-600" />;
          default: return <Icons.Info className="w-6 h-6" />;
      }
  }

  // Calculate subtext dynamically for inventory and backlog
  let subtext = stat.subtext;
  if (stat.id === 'inventory' || stat.id === 'backlog') {
      const numericVal = parseInt(stat.value.replace(/[^0-9]/g, '') || '0', 10);
      subtext = `Cost: Rs ${(numericVal * 1000).toLocaleString()}`;
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
            {subtext && <p className="text-[#c65252] text-sm mt-1">{subtext}</p>}
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

function DecisionPanel({ data, onNext, inputValue, setInputValue }: { 
    data: ScreenContent["decision"]; 
    onNext: () => void;
    inputValue: number;
    setInputValue: (val: number) => void;
}) {
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
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        className="w-full h-[60px] text-center text-xl font-bold rounded-full border border-cyan-400 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                     />
        </div>
                 <button 
                    onClick={onNext}
                    className="bg-[#0e3a3e] text-white px-8 py-4 rounded-full font-normal flex items-center gap-2 hover:bg-[#0b2d30] transition-colors"
                 >
                     {data.buttonText}
                     <Icons.ArrowRight className="w-5 h-5" />
                 </button>
        </div>
             <p className="text-center text-gray-500 text-sm mt-4">{data.infoText}</p>
        </div>
        </div>

      {/* Tabs & Order Flow / Round History */}
      <HistoryView data={data} />
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

            {data.stages.map((stageItem, idx) => {
                const stageName = typeof stageItem === 'string' ? stageItem : stageItem.name;
                const stageImage = typeof stageItem === 'object' ? stageItem.image : undefined;
                
    return (
                <div key={idx} className="flex flex-col items-center gap-4 bg-transparent">
                    <div className={`w-36 h-36 rounded-3xl border flex items-center justify-center bg-white/20 backdrop-blur-sm relative overflow-hidden
                        ${stageName === "Wholesaler" ? 'border-blue-400 bg-blue-50/30 shadow-lg scale-110' : 'border-gray-400'}
                    `}>
                         {stageImage ? (
                             // eslint-disable-next-line @next/next/no-img-element
                             <img src={stageImage} alt={stageName} className="w-full h-full object-cover" />
                         ) : (
                             <>
                                {stageName === "Factory" && <Icons.Factory className="w-12 h-12 text-gray-700" />}
                                {stageName === "Distributor" && <Icons.Store className="w-12 h-12 text-gray-700" />}
                                {stageName === "Wholesaler" && <Icons.Users className="w-12 h-12 text-gray-700" />}
                                {stageName === "Retailer" && <Icons.Store className="w-12 h-12 text-gray-700" />}
                             </>
                         )}
            </div>
                    <span className="font-bold text-lg">{stageName}</span>
        </div>
            )})}

             {/* Truck Overlay Mockup */}
             <div className="absolute top-1/4 left-[70%] bg-white px-3 py-1 rounded-full shadow border flex items-center gap-2">
                 <span className="text-xs font-semibold">20 units</span>
                 <Icons.Truck className="w-4 h-4 text-gray-500" />
        </div>
                </div>
        </div>
    );
}

function ResultsScreen({ screen, onNext }: { screen: ScreenContent; onNext: () => void }) {
  const router = useRouter();
  return (
    <div className="max-w-[1440px] mx-auto space-y-8">
      {screen.header && <Header data={screen.header} />}

      <div className="space-y-12 pt-8">
        {/* Team Performance */}
        {screen.teamPerformance && (
          <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{screen.teamPerformance.title}</h2>
            <div className="grid grid-cols-4 gap-4">
              {screen.teamPerformance.stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} />
              ))}
            </div>
          </div>
        )}

        {/* Individual Performance */}
        {screen.individualPerformance && (
          <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{screen.individualPerformance.title}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {screen.individualPerformance.tableHeaders.map((header, idx) => (
                      <th key={idx} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {screen.individualPerformance.tableRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.metric}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.retailer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.wholesaler}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.distributor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.manufacturer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* The Bullwhip Effect */}
        {screen.bullwhipEffect && (
          <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{screen.bullwhipEffect.title}</h2>
            <div className="space-y-8">
              {/* Chart 1 */}
              <div className="min-h-[300px]">
                <h3 className="text-xl font-semibold mb-2">{screen.bullwhipEffect.chartTitle1}</h3>
                <p className="text-gray-500 text-sm mb-4">{screen.bullwhipEffect.chartSubtitle1}</p>
                {/* Placeholder for Chart 1 */}
                <div className="relative h-[220px] w-full flex items-end gap-2 px-4 pb-8 border-b border-l border-gray-300">
                  {/* Y-axis labels (mock) */}
                  <div className="absolute -left-8 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
                    <span>140</span>
                    <span>105</span>
                    <span>70</span>
                    <span>35</span>
                    <span>0</span>
                  </div>
                  {/* X-axis labels (mock) */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  {/* Mock Bars (Orders) */}
                  {[60, 70, 50, 80, 40, 90, 75, 65, 85, 95, 100, 110].map((h, i) => (
                    <div key={`bar-${i}`} className="flex-1 flex gap-1 items-end h-full relative">
                      <div className="w-full bg-blue-400/60 rounded-t-md" style={{ height: `${h / 1.4}%` }}></div>
                    </div>
                  ))}
                  {/* Mock Line (Demand) */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline fill="none" stroke="#027474" strokeWidth="2" points="
                      0,70 8.3,60 16.6,65 24.9,55 33.2,70 41.5,40 49.8,50 58.1,30 66.4,45 74.7,20 83,25 91.3,35 100,40
                    "/>
                  </svg>
                </div>
                <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-400/60 rounded"></div> {screen.bullwhipEffect.legend1[0]}</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 border border-[#027474] rounded"></div> {screen.bullwhipEffect.legend1[1]}</div>
                </div>
              </div>

              {/* Chart 2 */}
              <div className="min-h-[300px]">
                <h3 className="text-xl font-semibold mb-2">{screen.bullwhipEffect.chartTitle2}</h3>
                <p className="text-gray-500 text-sm mb-4">{screen.bullwhipEffect.chartSubtitle2}</p>
                {/* Placeholder for Chart 2 */}
                <div className="relative h-[220px] w-full flex items-end gap-2 px-4 pb-8 border-b border-l border-gray-300">
                  {/* Y-axis labels (mock) */}
                  <div className="absolute -left-8 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
                    <span>120</span>
                    <span>90</span>
                    <span>60</span>
                    <span>30</span>
                    <span>0</span>
                  </div>
                  {/* X-axis labels (mock) */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  {/* Mock Bars (Stock) */}
                  {[80, 70, 60, 50, 40, 30, 20, 10, 5, 0, 10, 20].map((h, i) => (
                    <div key={`bar2-${i}`} className="flex-1 flex gap-1 items-end h-full relative">
                      <div className="w-full bg-green-400/60 rounded-t-md" style={{ height: `${h / 1.2}%` }}></div>
                    </div>
                  ))}
                  {/* Mock Line (Demand) */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline fill="none" stroke="#027474" strokeWidth="2" points="
                      0,70 8.3,60 16.6,65 24.9,55 33.2,70 41.5,40 49.8,50 58.1,30 66.4,45 74.7,20 83,25 91.3,35 100,40
                    "/>
                  </svg>
                </div>
                <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-400/60 rounded"></div> {screen.bullwhipEffect.legend2[0]}</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 border border-[#027474] rounded"></div> {screen.bullwhipEffect.legend2[1]}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Summary */}
        {screen.experienceSummary && (
          <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{screen.experienceSummary.title}</h2>
            <p className="text-gray-500 mb-8">{screen.experienceSummary.description}</p>
            <div className="space-y-6">
              {screen.experienceSummary.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold mb-4">{section.heading}</h3>
                  <div className="space-y-4">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                        <h4 className="font-semibold text-lg mb-2">{sub.title}</h4>
                        <p className="text-gray-600 text-sm">{sub.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export & Actions */}
        {screen.exportActions && (
          <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{screen.exportActions.title}</h2>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {screen.exportActions.buttons.map((button, idx) => (
                <button key={idx} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                  {button.icon === 'download' && <Icons.Package className="w-6 h-6 text-gray-600" />} {/* Reusing Package icon for download */}
                  {button.icon === 'mail' && <Icons.Info className="w-6 h-6 text-gray-600" />} {/* Reusing Info icon for mail */}
                  {button.icon === 'share' && <Icons.Tag className="w-6 h-6 text-gray-600" />} {/* Reusing Tag icon for share */}
                  <div>
                    <span className="font-medium text-gray-800 block">{button.text}</span>
                    <span className="text-sm text-gray-500 block">{button.subtext}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => router.push("/games/beer_game/intro")}
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
              >
                <Icons.Store className="w-5 h-5" />
                {screen.exportActions.backToLobbyButton}
              </button>
              <button 
                onClick={onNext} // Assuming onNext leads to playing again or next round
                className="bg-[#0e3a3e] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0b2d30] transition-colors flex items-center gap-2"
              >
                {screen.exportActions.playAgainButton}
                <div className="bg-white/20 rounded-full p-1">
                  <Icons.ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
