"use client";

import React, { useState } from "react";
import Link from "next/link";
import svgPaths from "@/lib/svg/svg2";
import svgPaths1 from "@/lib/svg/svg1";
import content from "./content.json";

// --- Types ---

interface IntroStep {
    id: string;
    layout: "diagram" | "roles" | "objective" | "instructions";
    slideInfo: string;
    common: {
        title: string;
        description: string;
    };
    specific: {
        title: string;
        description: string;
        listItems?: string[];
        roles?: { name: string; imageIndex: number }[];
        rolesList?: { role: string; description: string }[];
        buttonText: string;
    };
    images: string[];
    svg_paths: string[];
}

// --- Shared Components ---

function SvgIcon({ path, className, viewBox = "0 0 32 32" }: { path: string; className?: string; viewBox?: string }) {
    return (
        <svg className={className} fill="none" preserveAspectRatio="none" viewBox={viewBox}>
            <path d={path} fill="currentColor" />
        </svg>
    );
}

function NextButton({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button onClick={onClick} className="bg-white h-[48px] relative rounded-[46px] shrink-0 text-left">
            <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[24px] pr-[22px] py-[14px] relative rounded-[inherit]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-nowrap whitespace-pre">
                    {text}
                </p>
                <div className="bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center overflow-clip p-[8px] relative rounded-[60px] shrink-0 w-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p1c64ef80} fill="#000001" />
                    </svg>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(225,228,235,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[47px]" />
        </button>
    );
}

function SlideIndicator({ text }: { text: string }) {
    return (
        <div className="absolute bg-[rgba(255,255,255,0.5)] left-[calc(41.67%+32px)] rounded-[33px] top-[756px] w-[168px]">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] w-[168px]">
                <div className="bg-neutral-50 relative rounded-[100px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_3px_0px_rgba(183,183,183,0.25)]" />
                    <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex gap-[11px] items-center px-[11px] py-[6px] relative w-full">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">
                                {text}
                            </p>
                            {/* Dots indicator - simplified for now */}
                            <div className="h-[6px] relative shrink-0 w-[54px] flex gap-1 items-center">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(221,223,225,0.6)] border-solid inset-0 pointer-events-none rounded-[33px]" />
        </div>
    );
}

function CommonHeader({ title, description }: { title: string; description: string }) {
    return (
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[659px]">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <path d={svgPaths.p198f6b80} fill="#000001" />
                    </svg>
                </div>
                <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#202326] text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre">
                    {title}
                </p>
            </div>
            <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#202326] text-[16px] w-[min-content]">
                {description}
            </p>
        </div>
    );
}

function GameTitle() {
    return (
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g>
                        <path d={svgPaths1.p198f6b80} fill="#000001" />
                        <path d={svgPaths1.ped2e900} fill="#000001" />
                        <path d={svgPaths1.p1e193b00} fill="#000001" />
                        <path d={svgPaths1.p238402c0} fill="#000001" />
                        <path d={svgPaths1.p27d7c380} fill="#000001" />
                        <path d={svgPaths1.p1a1f980} fill="#000001" />
                        <path d={svgPaths1.p31f42cf0} fill="#000001" />
                        <path d={svgPaths1.p13864600} fill="#000001" />
                        <path d={svgPaths1.p2b83b600} fill="#000001" />
                        <path d={svgPaths1.p1e8e2580} fill="#000001" />
                        <path d={svgPaths1.p2c77300} fill="#000001" />
                    </g>
                </svg>
            </div>
            <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#202326] text-[32px] text-nowrap tracking-[-0.32px] whitespace-pre">Beer Game</p>
        </div>
    );
}

function RoleBadge() {
    return (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal h-[19px] leading-[normal] not-italic relative shrink-0 text-[#202326] text-[14px] w-[33px]">Role:</p>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="bg-neutral-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[99px] shadow-[0px_0px_0px_1px_#e1e4eb,0px_3px_8px_-1px_rgba(0,0,0,0.06)] shrink-0">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[12px] text-nowrap">
                        <p className="leading-[16px] whitespace-pre">Wholesaler</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
                            <g>
                                <path d={svgPaths1.p15bf9900} fill="#000001" />
                                <path d={svgPaths1.p2a8bfc00} fill="#000001" />
                                <path d={svgPaths1.p106cae80} fill="#000001" />
                                <path d={svgPaths1.p146d0b00} fill="#000001" />
                                <path d={svgPaths1.p1c12b980} fill="#000001" />
                                <path d={svgPaths1.p9e80700} fill="#000001" />
                                <path d={svgPaths1.p1abc8700} fill="#000001" />
                                <path d={svgPaths1.pd021900} fill="#000001" />
                                <path d={svgPaths1.pbae5600} fill="#000001" />
                                <path d={svgPaths1.p2817d300} fill="#000001" />
                                <path d={svgPaths1.p284d8700} fill="#000001" />
                                <path d={svgPaths1.p391f9200} fill="#000001" />
                                <path d={svgPaths1.p6cb6b00} fill="#000001" />
                                <path d={svgPaths1.p2051d720} fill="#000001" />
                                <path d={svgPaths1.p19fd6680} fill="#000001" />
                                <path d={svgPaths1.p20bc900} fill="#000001" />
                                <path d={svgPaths1.p3eef8200} fill="#000001" />
                                <path d={svgPaths1.p3ac4ef00} fill="#000001" />
                                <path d={svgPaths1.p99f1000} fill="#000001" />
                            </g>
                        </svg>
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_#ffffff]" />
                </div>
            </div>
        </div>
    );
}

function GameHeader() {
    return (
        <div className="absolute content-stretch flex h-[40px] items-center justify-between left-1/2 top-[55px] translate-x-[-50%] w-[1128px] z-10">
            <GameTitle />
            <RoleBadge />
        </div>
    );
}

// --- Layout: Diagram (Intro 1) ---

function LayoutDiagram({ step, onNext }: { step: IntroStep; onNext: () => void }) {
    return (
        <div className="absolute content-stretch flex flex-col gap-[28px] items-center justify-center left-[112px] top-[40px] w-[1288px]">
            <CommonHeader title={step.common.title} description={step.common.description} />

            <div className="bg-[rgba(255,255,255,0.6)] h-[585px] relative rounded-[16px] shrink-0 w-full">
                <div className="h-[585px] overflow-clip relative rounded-[inherit] w-full">
                    {/* Diagram Content */}
                    <div className="absolute content-stretch flex gap-[122px] items-center left-[90px] top-[74px]">
                        {/* Left Text Column */}
                        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[589px]">
                            <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center leading-[normal] relative shrink-0 text-[#202326] w-full">
                                    <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] text-nowrap whitespace-pre">{step.specific.title}</p>
                                    <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[16px] w-[566px]">{step.specific.description}</p>
                                </div>
                                <div className="content-stretch flex flex-col font-normal gap-[16px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#202326] text-[16px] text-nowrap w-full">
                                    {step.specific.listItems?.map((item, i) => (
                                        <ul key={i} className="[white-space-collapse:collapse] block font-['Inter:Regular',sans-serif] relative shrink-0">
                                            <li className="ms-[24px]"><span className="leading-[normal]">{item}</span></li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                            <NextButton text={step.specific.buttonText} onClick={onNext} />
                        </div>

                        {/* Right Grid (Roles) */}
                        <div className="gap-[64px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[437px] relative shrink-0 w-[376px]">
                            {step.specific.roles?.map((role, i) => (
                                <div key={i} className="content-stretch flex flex-col gap-[16px] items-center relative self-start shrink-0 w-[146px]">
                                    <div className="bg-[#262626] h-[152px] relative rounded-[24px] shrink-0 w-full">
                                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                            <div className="box-border content-stretch flex gap-[8px] h-[152px] items-center justify-center pl-[24px] pr-[20px] py-[14px] relative w-full">
                                                <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex h-[98px] items-center justify-center overflow-clip p-[24.5px] relative rounded-[91.875px] shrink-0">
                                                    {/* Role Icon */}
                                                    <div className="overflow-clip relative shrink-0 size-[48px]">
                                                        <img
                                                            src={step.images[role.imageIndex]}
                                                            alt={role.name}
                                                            className="block size-full object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_8px_1px_inset_rgba(20,20,20,0.5)]" />
                                        <div aria-hidden="true" className="absolute border border-[#616161] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
                                    </div>
                                    <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202326] text-[18px] text-center tracking-[-0.18px] w-full">{role.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
            </div>
        </div>
    );
}

// --- Layout: Roles (Intro 2) ---

function LayoutRoles({ step, onNext }: { step: IntroStep; onNext: () => void }) {
    return (
        <div className="absolute content-stretch flex flex-col gap-[28px] items-center justify-center left-[112px] top-[40px] w-[1288px]">
            <CommonHeader title={step.common.title} description={step.common.description} />

            <div className="bg-[rgba(255,255,255,0.6)] h-[584px] relative rounded-[16px] shrink-0 w-full">
                <div className="h-[584px] overflow-clip relative rounded-[inherit] w-full">
                    <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-1/2 top-[calc(50%+7px)] translate-x-[-50%] translate-y-[-50%] w-[1028px]">
                        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
                            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[#202326]">
                                <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] text-nowrap whitespace-pre">{step.specific.title}</p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[16px] w-[566px]">{step.specific.description}</p>
                            </div>
                            <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0">
                                {step.specific.rolesList?.map((role, i) => (
                                    <div key={i} className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[14px] text-nowrap">
                                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f172b]">
                                            <p className="leading-[normal] text-nowrap whitespace-pre">{role.role}</p>
                                        </div>
                                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202326] whitespace-pre">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Image */}
                        {step.images[0] && (
                            <div className="h-[227px] relative shrink-0 w-[546.936px]">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <img alt="" className="absolute h-[240.94%] left-0 max-w-none top-[-75.53%] w-full" src={step.images[0]} />
                                </div>
                            </div>
                        )}
                        <NextButton text={step.specific.buttonText} onClick={onNext} />
                    </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
            </div>
        </div>
    );
}

// --- Layout: Objective (Intro 3) ---

function LayoutObjective({ step, onNext }: { step: IntroStep; onNext: () => void }) {
    return (
        <div className="absolute content-stretch flex flex-col gap-[28px] items-center justify-center left-[112px] top-[40px] w-[1288px]">
            <CommonHeader title={step.common.title} description={step.common.description} />

            <div className="bg-[rgba(255,255,255,0.6)] h-[584px] relative rounded-[16px] shrink-0 w-full">
                <div className="h-[584px] overflow-clip relative rounded-[inherit] w-full">
                    <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-1/2 top-[calc(50%+7px)] translate-x-[-50%] translate-y-[-50%] w-[1028px]">
                        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
                            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[#202326]">
                                <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] text-nowrap whitespace-pre">{step.specific.title}</p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[16px] w-[566px]">{step.specific.description}</p>
                            </div>
                        </div>
                        <NextButton text={step.specific.buttonText} onClick={onNext} />
                    </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
            </div>
        </div>
    );
}

// --- Layout: Instructions (From TrainingIntro) ---

function LayoutInstructions({ step, onNext }: { step: IntroStep; onNext: () => void }) {
    return (
        <div className="absolute content-stretch flex flex-col gap-[28px] items-center justify-center left-[112px] top-[40px] w-[1288px]">
            <CommonHeader title={step.common.title} description={step.common.description} />

            <div className="bg-[rgba(255,255,255,0.6)] h-[585px] relative rounded-[16px] shrink-0 w-full">
                <div className="h-[585px] overflow-clip relative rounded-[inherit] w-full">
                    <GameHeader />
                    <div className="absolute content-stretch flex gap-[105px] items-center left-[80px] top-[135px]">
                        <div className="content-stretch flex gap-[74px] items-start relative shrink-0">
                            <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-[589px]">
                                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 text-[#202326] w-full">
                                    <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre">{step.specific.title}</p>
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] w-[566px]">
                                        {step.specific.description}
                                    </p>
                                </div>
                                <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-[428px]">
                                    {/* Role Badge */}
                                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                                        <div className="overflow-clip relative shrink-0 size-[23px]">
                                            <svg className="block size-full" fill="none" viewBox="0 0 23 21">
                                                <path d={svgPaths1.p8ac8370} fill="#000001" />
                                                <path d={svgPaths1.p3f7034b0} fill="#000001" />
                                                <path d={svgPaths1.p367e6800} fill="#000001" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0f172b] text-[24px] text-nowrap tracking-[-0.288px]">
                                            <p className="leading-[normal] whitespace-pre">Wholesaler</p>
                                        </div>
                                    </div>
                                    {/* List Items */}
                                    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#202326] text-[16px] text-nowrap w-full">
                                        {step.specific.listItems?.map((item, i) => (
                                            <ul key={i} className="[white-space-collapse:collapse] block relative shrink-0">
                                                <li className="ms-[24px]"><span className="leading-[normal]">{item}</span></li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image */}
                        {step.images[0] && (
                            <div className="h-[301px] relative shrink-0 w-[434px]">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <img alt="" className="absolute h-[100.11%] left-0 max-w-none top-[-0.06%] w-[104.15%]" src={step.images[0]} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="absolute left-[80px] bottom-[40px]">
                        <NextButton text={step.specific.buttonText} onClick={onNext} />
                    </div>
                </div>
                <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
            </div>
        </div>
    );
}

// --- Main Component ---

export default function BeerGamePage() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const introContent = content as IntroStep[];
    const currentStep = introContent[currentStepIndex];

    const handleNext = () => {
        if (currentStepIndex < introContent.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        } else {
            // Handle end of intro - maybe redirect or loop?
            // For now, just log or stay on last step
            console.log("Intro completed");
        }
    };

    if (!currentStep) return null;

    return (
        <div className="bg-[#eff2f4] relative size-full min-h-screen" data-name="Training Intro">
            {currentStep.layout === "instructions" && <LayoutInstructions step={currentStep} onNext={handleNext} />}
            {currentStep.layout === "diagram" && <LayoutDiagram step={currentStep} onNext={handleNext} />}
            {currentStep.layout === "roles" && <LayoutRoles step={currentStep} onNext={handleNext} />}
            {currentStep.layout === "objective" && <LayoutObjective step={currentStep} onNext={handleNext} />}

            <SlideIndicator text={currentStep.slideInfo} />
        </div>
    );
}
