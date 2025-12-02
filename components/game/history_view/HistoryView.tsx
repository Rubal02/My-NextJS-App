"use client";

import React, { useState } from "react";

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

interface HistoryData {
  tabs: string[];
  orderFlow: OrderFlowItem[];
  roundHistory?: RoundHistoryItem[];
}

interface HistoryViewProps {
  data: HistoryData;
}

export default function HistoryView({ data }: HistoryViewProps) {
  const [activeTab, setActiveTab] = useState(data?.tabs[0] || "Order Flow");

  if (!data) return null;

  return (
    <div className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm backdrop-blur-sm min-h-[400px]">
      <div className="bg-gray-100 p-1 rounded-full flex gap-2 mb-6">
        {data.tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-full text-lg font-medium transition-colors ${
              activeTab === tab
                ? "bg-white shadow-sm text-[#003737]"
                : "text-gray-500 hover:bg-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {activeTab === "Order Flow" && (
          <div className="pl-4 border-l-4 border-gray-200 space-y-8">
            {data.orderFlow.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">{item.title}</p>
                    <p className="text-lg font-medium text-[#0f172b]">
                      {item.value}
                    </p>
                  </div>
                  <div className="text-right">
                    {item.badge && (
                      <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs mb-1">
                        {item.badge}
                      </span>
                    )}
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Round History" && data.roundHistory && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left text-sm font-normal text-gray-500">
                    Round
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-normal text-gray-500">
                    Inventory
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-normal text-gray-500">
                    Incoming Orders
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-normal text-gray-500">
                    Outgoing Orders
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-normal text-gray-500">
                    Backorders
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-normal text-gray-500">
                    Total Costs
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.roundHistory.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 last:border-0 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-left text-sm text-gray-800">
                      {row.round}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-800">
                      {row.inventory}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-800">
                      {row.incoming}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-800">
                      {row.outgoing}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-800">
                      {row.backorders}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-800">
                      {row.totalCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
