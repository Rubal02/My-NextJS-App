"use client";

import { useState } from "react";
import content from "./content.json";
import ScreenTest from "@/components/screentest1/screentest1";
import OrderConfirmationModal from "@/components/screentest2/screentest2";

interface ScreenStep {
    id: string;
    layout: string;
    title: string;
}

export default function ScreentestPage() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const steps = content as ScreenStep[];
    const currentStep = steps[currentStepIndex];

    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        } else {
            console.log("Screentest completed");
        }
    };

    if (!currentStep) return null;

    return (
        <div className="relative w-full h-full">
            {currentStep.layout === "dashboard" && (
                <div className="relative">
                    <ScreenTest />
                    {/* Floating Next Button for Dashboard since it might not have one */}
                    <div className="fixed bottom-8 right-8 z-50">
                        <button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            )}

            {currentStep.layout === "confirmation" && (
                <OrderConfirmationModal onClose={handleNext} />
            )}
        </div>
    );
}
