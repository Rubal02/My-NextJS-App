import svgPaths from "@/lib/svg/svg3";
import imgGeneratedImageSeptember042025228Pm1 from "@/public/08f90744dcb59bff1b4202b3075224941b341327.png";
import Link from "next/link";

interface Content {
  texts: string[];
  images: string[];
  svg_paths?: string[];
}

interface Props {
  content: Content;
}

function Group() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.p198f6b80} fill="var(--fill-0, #000001)" id="Vector" />
          <path d={svgPaths.ped2e900} fill="var(--fill-0, #000001)" id="Vector_2" />
          <path d={svgPaths.p1e193b00} fill="var(--fill-0, #000001)" id="Vector_3" />
          <path d={svgPaths.p238402c0} fill="var(--fill-0, #000001)" id="Vector_4" />
          <path d={svgPaths.p27d7c380} fill="var(--fill-0, #000001)" id="Vector_5" />
          <path d={svgPaths.p1a1f980} fill="var(--fill-0, #000001)" id="Vector_6" />
          <path d={svgPaths.p31f42cf0} fill="var(--fill-0, #000001)" id="Vector_7" />
          <path d={svgPaths.p13864600} fill="var(--fill-0, #000001)" id="Vector_8" />
          <path d={svgPaths.p2b83b600} fill="var(--fill-0, #000001)" id="Vector_9" />
          <path d={svgPaths.p1e8e2580} fill="var(--fill-0, #000001)" id="Vector_10" />
          <path d={svgPaths.p2c77300} fill="var(--fill-0, #000001)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Frame11({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Group />
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#202326] text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre">{text}</p>
    </div>
  );
}

function Frame2({ title, description }: { title: string; description: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[659px]">
      <Frame11 text={title} />
      <p className="font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#202326] text-[16px] w-[min-content]">{description}</p>
    </div>
  );
}

function Frame5({ title, description }: { title: string; description: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[#202326]">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold relative shrink-0 text-[32px] text-nowrap whitespace-pre">{title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[16px] w-[566px]">{description}</p>
    </div>
  );
}

function Frame8({ role, description }: { role: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[14px] text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f172b]">
        <p className="leading-[normal] text-nowrap whitespace-pre">{role}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202326] whitespace-pre">{description}</p>
    </div>
  );
}

function Frame7({ role, description }: { role: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f172b] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">{role}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202326] text-[14px] whitespace-pre">{description}</p>
    </div>
  );
}

function Frame6({ role, description }: { role: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f172b] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">{role}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202326] text-[14px] whitespace-pre">{description}</p>
    </div>
  );
}

function Frame4({ role, description }: { role: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f172b] text-[12px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">{role}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#202326] text-[14px] whitespace-pre">{description}</p>
    </div>
  );
}

function Frame12({ content }: { content: Content }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0">
      <Frame8 role={content.texts[4]} description={content.texts[5]} />
      <Frame7 role={content.texts[6]} description={content.texts[7]} />
      <Frame6 role={content.texts[8]} description={content.texts[9]} />
      <Frame4 role={content.texts[10]} description={content.texts[11]} />
    </div>
  );
}

function Frame9({ content }: { content: Content }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
      <Frame5 title={content.texts[2]} description={content.texts[3]} />
      <Frame12 content={content} />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-[15.24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 1707482493">
          <path d={svgPaths.p1c64ef80} fill="var(--fill-0, #000001)" id="Vector" />
          <path d={svgPaths.p444ba00} fill="var(--fill-0, #000001)" id="Vector_2" />
          <path d={svgPaths.p33ae4100} fill="var(--fill-0, #000001)" id="Vector_3" />
          <path d={svgPaths.pd1e7d80} fill="var(--fill-0, #000001)" id="Vector_4" />
          <path d={svgPaths.p2e98c5a0} fill="var(--fill-0, #000001)" id="Vector_5" />
          <path d={svgPaths.pcd1800} fill="var(--fill-0, #000001)" id="Vector_6" />
          <path d={svgPaths.p5ac7900} fill="var(--fill-0, #000001)" id="Vector_7" />
          <path d={svgPaths.p3a816300} fill="var(--fill-0, #000001)" id="Vector_8" />
          <path d={svgPaths.p171c5800} fill="var(--fill-0, #000001)" id="Vector_9" />
          <path d={svgPaths.p2aedd80} fill="var(--fill-0, #000001)" id="Vector_10" />
          <path d={svgPaths.p15d4be00} fill="var(--fill-0, #000001)" id="Vector_11" />
          <path d={svgPaths.p33acc100} fill="var(--fill-0, #000001)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] box-border content-stretch flex gap-[10px] h-[22px] items-center justify-center overflow-clip p-[8px] relative rounded-[60px] shrink-0 w-[24px]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "15.234375", "--transform-inner-height": "15.234375" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Button({ text }: { text: string }) {
  return (
    <Link href="/intro3">
      <div className="bg-white h-[48px] relative rounded-[46px] shrink-0" data-name="Button">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center overflow-clip pl-[24px] pr-[22px] py-[14px] relative rounded-[inherit]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-nowrap whitespace-pre">{text}</p>
          <Frame />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(225,228,235,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[47px]" />
      </div>
    </Link>
  );
}

function Frame13({ content }: { content: Content }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-center left-1/2 top-[calc(50%+7px)] translate-x-[-50%] translate-y-[-50%] w-[1028px]">
      <Frame9 content={content} />
      <div className="h-[227px] relative shrink-0 w-[546.936px]" data-name="Generated Image September 04, 2025 - 2_28PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[240.94%] left-0 max-w-none top-[-75.53%] w-full" src={imgGeneratedImageSeptember042025228Pm1.src} />
        </div>
      </div>
      <Button text={content.texts[12]} />
    </div>
  );
}

function BackgroundBorderShadow({ content }: { content: Content }) {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[584px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="h-[584px] overflow-clip relative rounded-[inherit] w-full">
        <Frame13 content={content} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
    </div>
  );
}

function Frame3({ content }: { content: Content }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center justify-center left-[112px] top-[40px] w-[1288px]">
      <Frame2 title={content.texts[0]} description={content.texts[1]} />
      <BackgroundBorderShadow content={content} />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[6px] relative shrink-0 w-[54px]">
      <div className="absolute inset-[-50%_-1.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 12">
          <g id="Frame 2147225273">
            <g id="Shape">
              <circle cx="4" cy="6" fill="var(--fill-0, #969696)" r="3" />
              <circle cx="4" cy="6" r="3.5" stroke="var(--stroke-0, #B4B6B5)" strokeOpacity="0.25" />
            </g>
            <g id="Shape_2">
              <circle cx="16" cy="6" fill="var(--fill-0, black)" r="3" />
              <circle cx="16" cy="6" r="4.5" stroke="var(--stroke-0, #616161)" strokeOpacity="0.25" strokeWidth="3" />
            </g>
            <g id="Shape_3">
              <circle cx="28" cy="6" fill="var(--fill-0, #969696)" r="3" />
              <circle cx="28" cy="6" r="3.5" stroke="var(--stroke-0, #B4B6B5)" strokeOpacity="0.25" />
            </g>
            <g id="Shape_4">
              <circle cx="40" cy="6" fill="var(--fill-0, #969696)" r="3" />
              <circle cx="40" cy="6" r="3.5" stroke="var(--stroke-0, #B4B6B5)" strokeOpacity="0.25" />
            </g>
            <g id="Shape_5">
              <circle cx="52" cy="6" fill="var(--fill-0, #969696)" r="3" />
              <circle cx="52" cy="6" r="3.5" stroke="var(--stroke-0, #B4B6B5)" strokeOpacity="0.25" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container({ text }: { text: string }) {
  return (
    <div className="bg-neutral-50 relative rounded-[100px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_3px_0px_rgba(183,183,183,0.25)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11px] items-center px-[11px] py-[6px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-nowrap whitespace-pre">{text}</p>
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame1({ text }: { text: string }) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] left-[calc(41.67%+32px)] rounded-[33px] top-[756px] w-[168px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] w-[168px]">
        <Container text={text} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(221,223,225,0.6)] border-solid inset-0 pointer-events-none rounded-[33px]" />
    </div>
  );
}

export default function Intro2({ content }: Props) {
  return (
    <div className="bg-[#eff2f4] relative size-full" data-name="Training Intro">
      <Frame3 content={content} />
      <Frame1 text={content.texts[13]} />
    </div>
  );
}
