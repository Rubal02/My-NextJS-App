"use client";

import { useState } from "react";
import content from "./game.json";
import BoxView from "@/components/game/box_view/BoxView";
import GraphicalView from "@/components/game/graphical_view/GraphicalView";
import DecisionView from "@/components/game/decision_view/DecisionView";
import HistoryView from "@/components/game/history_view/HistoryView";
import StatusView from "@/components/game/status_view/StatusView";

// Icons for Header
const HeaderIcons = {
  Users: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Store: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
  )
};

export default function PlayPage() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    // @ts-ignore - content is untyped
    const steps = content;
    const currentStep = steps[currentStepIndex];

    if (!currentStep) return null;

    return (
        <div className="min-h-screen bg-[#f8f9fa] p-8 font-sans text-[#202326]">
             <div className="max-w-[1440px] mx-auto space-y-6">
                {/* Header */}
                {currentStep.header && <Header data={currentStep.header} />}

                <div className="grid grid-cols-12 gap-6">
                    {/* Left Column: Stats & Chart */}
                    <div className="col-span-12 lg:col-span-6 space-y-6">
                        {currentStep.stats && <BoxView data={currentStep.stats} />}
                        {currentStep.chart && <GraphicalView data={currentStep.chart} />}
                    </div>

                    {/* Right Column: Decisions & History */}
                    <div className="col-span-12 lg:col-span-6 space-y-6">
                        {currentStep.decision && <DecisionView data={currentStep.decision} />}
                        {currentStep.decision && (
                            <HistoryView 
                                data={{
                                    tabs: currentStep.decision.tabs,
                                    orderFlow: currentStep.decision.orderFlow
                                }} 
                            />
                        )}
                    </div>
                </div>

                {/* Bottom Section: Supply Chain Overview */}
                {currentStep.supplyChain && <StatusView data={currentStep.supplyChain} />}
             </div>
        </div>
    );
}

function Header({ data }: { data: any }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <HeaderIcons.Store className="w-5 h-5" />
        </div>
        <h1 className="text-3xl font-semibold">{data.title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border flex items-center gap-2">
            <span className="text-sm font-semibold">{data.role}</span>
            <HeaderIcons.Users className="w-4 h-4 text-gray-500" />
        </div>
         <div className="bg-white/50 border px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">{data.round}</span>
        </div>
      </div>
    </div>
  );
}

