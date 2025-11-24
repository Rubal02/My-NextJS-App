import svgPaths from "@/lib/svg/svg5";

function Group() {
  return (
    <div className="absolute bottom-[4.77%] left-0 right-0 top-[4.77%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g id="Group">
          <path d={svgPaths.p15bf9900} fill="var(--fill-0, #000001)" id="Vector" />
          <path d={svgPaths.p2a8bfc00} fill="var(--fill-0, #000001)" id="Vector_2" />
          <path d={svgPaths.p106cae80} fill="var(--fill-0, #000001)" id="Vector_3" />
          <path d={svgPaths.p146d0b00} fill="var(--fill-0, #000001)" id="Vector_4" />
          <path d={svgPaths.p1c12b980} fill="var(--fill-0, #000001)" id="Vector_5" />
          <path d={svgPaths.p9e80700} fill="var(--fill-0, #000001)" id="Vector_6" />
          <path d={svgPaths.p1abc8700} fill="var(--fill-0, #000001)" id="Vector_7" />
          <path d={svgPaths.pd021900} fill="var(--fill-0, #000001)" id="Vector_8" />
          <path d={svgPaths.pbae5600} fill="var(--fill-0, #000001)" id="Vector_9" />
          <path d={svgPaths.p2817d300} fill="var(--fill-0, #000001)" id="Vector_10" />
          <path d={svgPaths.p284d8700} fill="var(--fill-0, #000001)" id="Vector_11" />
          <path d={svgPaths.p391f9200} fill="var(--fill-0, #000001)" id="Vector_12" />
          <path d={svgPaths.p6cb6b00} fill="var(--fill-0, #000001)" id="Vector_13" />
          <path d={svgPaths.p2051d720} fill="var(--fill-0, #000001)" id="Vector_14" />
          <path d={svgPaths.p19fd6680} fill="var(--fill-0, #000001)" id="Vector_15" />
          <path d={svgPaths.p20bc900} fill="var(--fill-0, #000001)" id="Vector_16" />
          <path d={svgPaths.p3eef8200} fill="var(--fill-0, #000001)" id="Vector_17" />
          <path d={svgPaths.p3ac4ef00} fill="var(--fill-0, #000001)" id="Vector_18" />
          <path d={svgPaths.p99f1000} fill="var(--fill-0, #000001)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function MultipleUserStreamlinePixel() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="multiple-user--Streamline-Pixel">
      <Group />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[8px] relative rounded-[99px] shadow-[0px_0px_0px_1px_#e1e4eb,0px_3px_8px_-1px_rgba(0,0,0,0.06)] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Wholeseller</p>
      </div>
      <MultipleUserStreamlinePixel />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-neutral-50 h-[34px] left-1/2 rounded-[100px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px] shadow-[0px_2px_3px_0px_rgba(183,183,183,0.25)]" />
      <div className="absolute left-[12px] size-[6px] top-[14px]" data-name="Shape">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="Shape">
              <circle cx="6" cy="6" fill="var(--fill-0, #00BF6F)" r="3" />
              <circle cx="6" cy="6" r="4.5" stroke="var(--stroke-0, #00BF6F)" strokeOpacity="0.25" strokeWidth="3" />
            </g>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[26px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[5px] whitespace-pre">Round 3/15</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[42px] relative rounded-[33px] shrink-0 w-[128px]">
      <div className="h-[42px] overflow-clip relative rounded-[inherit] w-[128px]">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(221,223,225,0.6)] border-solid inset-0 pointer-events-none rounded-[33px]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container />
      <Margin />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#202326] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">Order Submitted</p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Outfit:SemiBold',sans-serif] font-semibold gap-[16px] items-center relative shrink-0">
      <p className="leading-[normal] relative shrink-0 text-[#202326] text-[32px] whitespace-pre">You have Successfully ordered</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#0f172b] text-[40px]">
        <p className="leading-[16px] text-nowrap whitespace-pre">20 units</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 text-nowrap">
      <Frame8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#202326] text-[16px] whitespace-pre">Now 20 units will reach you in 2 weeks preplan accordingly for next order</p>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-neutral-50 box-border content-stretch flex gap-[10px] h-[24px] items-center justify-center left-[719px] px-[8px] py-[4px] rounded-[99px] shadow-[0px_0px_0px_1px_#e1e4eb,0px_-4px_8px_-1px_rgba(0,0,0,0.06)] top-[7px] w-[56px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[10px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">20 units</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Line() {
  return (
    <div className="absolute h-[4px] left-[117px] top-[77px] w-[852px]" data-name="Line">
      <div className="absolute inset-[-50%_-0.35%_-100%_-0.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 858 10">
          <g id="Line">
            <g filter="url(#filter0_di_31_334)" id="Line 169">
              <path d="M3 6L855 2" shapeRendering="crispEdges" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.1" strokeWidth="4" />
            </g>
            <g filter="url(#filter1_d_31_334)" id="Line 171">
              <path d="M464 3L633 3.00002" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10" id="filter0_di_31_334" width="858" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_31_334" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_31_334" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_31_334" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6.00001" id="filter1_d_31_334" width="175" x="461" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_31_334" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_31_334" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[35.65%_26.74%_43.27%_70.67%]" data-name="Group">
      <div className="absolute inset-[-4.13%_-26.13%_-61.89%_-33.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 41">
          <g filter="url(#filter0_d_31_338)" id="Group">
            <path d={svgPaths.pdd6f970} fill="var(--fill-0, #000001)" id="Vector" />
            <path d={svgPaths.pba49780} fill="var(--fill-0, #000001)" id="Vector_2" />
            <path d={svgPaths.p14349500} fill="var(--fill-0, #000001)" id="Vector_3" />
            <path d={svgPaths.p1da49180} fill="var(--fill-0, #000001)" id="Vector_4" />
            <path d={svgPaths.p37d83b00} fill="var(--fill-0, #000001)" id="Vector_5" />
            <path d={svgPaths.p375eac70} fill="var(--fill-0, #000001)" id="Vector_6" />
            <path d={svgPaths.p14b70600} fill="var(--fill-0, #000001)" id="Vector_7" />
            <path d={svgPaths.p3d173080} fill="var(--fill-0, #000001)" id="Vector_8" />
            <path d={svgPaths.pe8e4df0} fill="var(--fill-0, #000001)" id="Vector_9" />
            <path d={svgPaths.p3953a280} fill="var(--fill-0, #000001)" id="Vector_10" />
            <path d={svgPaths.p18aa99c0} fill="var(--fill-0, #000001)" id="Vector_11" />
            <path d={svgPaths.p1fc87300} fill="var(--fill-0, #000001)" id="Vector_12" />
            <path d={svgPaths.p2f3aad00} fill="var(--fill-0, #000001)" id="Vector_13" />
            <path d={svgPaths.p3ab2780} fill="var(--fill-0, #000001)" id="Vector_14" />
            <path d={svgPaths.p26015c0} fill="var(--fill-0, #000001)" id="Vector_15" />
            <path d={svgPaths.p2e23e700} fill="var(--fill-0, #000001)" id="Vector_16" />
            <path d={svgPaths.p143e0880} fill="var(--fill-0, #000001)" id="Vector_17" />
            <path d={svgPaths.p29795b00} fill="var(--fill-0, #000001)" id="Vector_18" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40.2375" id="filter0_d_31_338" width="42.791" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-1" dy="7" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_31_338" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_31_338" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ShoppingShippingDeliveryTruckStreamlinePixel() {
  return (
    <div className="[grid-area:1_/_1] h-[115px] ml-0 mt-0 relative w-[1038px]" data-name="shopping-shipping-delivery-truck--Streamline-Pixel">
      <Background1 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[723px] not-italic text-[#0f172b] text-[12px] text-nowrap top-[99px] translate-y-[-50%]">
        <p className="leading-[16px] whitespace-pre">2 weeks</p>
      </div>
      <Line />
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-[2.38%] right-[2.37%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 48">
        <g id="Group">
          <path d={svgPaths.p1923a380} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pbcc2f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p17874780} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3b95d700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p73ca300} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pbecb900} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1f069800} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p18503dc0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1f920b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.pc4c2400} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p22a22100} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p32520090} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p9ac1100} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p20fcc000} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1f964b80} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function BuildingRealEastateStorageStreamlinePixel() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="building-real-eastate-storage--Streamline-Pixel">
      <Group2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center overflow-clip p-[24.5px] relative rounded-[91.875px] shrink-0 size-[98px]">
      <BuildingRealEastateStorageStreamlinePixel />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[152px] relative rounded-[24px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 146 152\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0000010166 21.714 -20.678 -11.507 73 -57)\\'><stop stop-color=\\'rgba(87,87,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(62,62,62,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[152px] items-center justify-center pl-[24px] pr-[20px] py-[14px] relative w-full">
          <Frame />
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[0px_0px_8px_1px_inset_rgba(20,20,20,0.5)]" />
      <div aria-hidden="true" className="absolute border border-[#616161] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[146px]">
      <Button />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202326] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Distributor</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[4.77%] left-0 right-0 top-[4.77%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 44">
        <g id="Group">
          <path d={svgPaths.p2fbfea00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p350ad400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e321a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p23e93a00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1130fd00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3f3b8700} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3de54540} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p16f78c00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p33900980} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3904a900} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p229a6c00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p378bd030} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p14063000} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.pa956900} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1a033800} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.pf5b9a70} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p35b57f00} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p24ce2f00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.pbc3b700} fill="var(--fill-0, white)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function MultipleUserStreamlinePixel1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="multiple-user--Streamline-Pixel">
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center overflow-clip p-[24.5px] relative rounded-[91.875px] shrink-0">
      <MultipleUserStreamlinePixel1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[152px] relative rounded-[24px] shrink-0 w-[146px]" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 146 152\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0000010166 21.714 -20.678 -11.507 73 -57)\\'><stop stop-color=\\'rgba(87,87,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(62,62,62,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div className="box-border content-stretch flex gap-[8px] h-[152px] items-center justify-center overflow-clip pl-[24px] pr-[20px] py-[14px] relative rounded-[inherit] w-[146px]">
        <Frame1 />
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[0px_0px_8px_1px_inset_rgba(20,20,20,0.5)]" />
      <div aria-hidden="true" className="absolute border border-[#616161] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0">
      <Button1 />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202326] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Wholesaler</p>
    </div>
  );
}

function ShoppingShippingShopStreamlinePixel() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="shopping-shipping-shop--Streamline-Pixel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Group">
          <path d={svgPaths.p17645fb0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2729a000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1539b400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3d0f2080} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3254c500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3700c900} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p16a0f380} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p35603680} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1b4df680} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1608a00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p16a69cc0} fill="var(--fill-0, white)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center overflow-clip p-[24.5px] relative rounded-[91.875px] shrink-0">
      <ShoppingShippingShopStreamlinePixel />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[152px] relative rounded-[24px] shrink-0 w-[146px]" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 146 152\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0.0000010166 21.714 -20.678 -11.507 73 -57)\\'><stop stop-color=\\'rgba(87,87,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(62,62,62,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div className="box-border content-stretch flex gap-[8px] h-[152px] items-center justify-center overflow-clip pl-[24px] pr-[20px] py-[14px] relative rounded-[inherit] w-[146px]">
        <Frame2 />
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[0px_0px_8px_1px_inset_rgba(20,20,20,0.5)]" />
      <div aria-hidden="true" className="absolute border border-[#616161] border-solid inset-[-1px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-end relative shrink-0">
      <Button2 />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202326] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre">Retailer</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[300px] items-center ml-0 mt-[7px] relative">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ShoppingShippingDeliveryTruckStreamlinePixel />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[51px] items-center relative shrink-0 w-full">
      <Frame7 />
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-7.5%_-6.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
          <g id="Group 1707482490">
            <path d={svgPaths.p1501e100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p3f8c3540} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="arrow-left-02">
      <div className="absolute flex inset-[17.14%_17.15%_17.15%_17.15%] items-center justify-center">
        <div className="flex-none h-[8.333px] rotate-[135deg] w-[10.251px]">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[60px] shrink-0 size-[32px]">
      <ArrowLeft />
    </div>
  );
}

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative rounded-[46px] shrink-0" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 118 60\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.2165e-7 8.5714 -16.713 -4.5424 59 -22.5)\\'><stop stop-color=\\'rgba(87,87,87,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(62,62,62,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(38,38,38,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[24px] pr-[20px] py-[14px] relative rounded-[inherit]">
        <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{`Next `}</p>
        <Frame3 />
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[0px_0px_8px_1px_inset_rgba(20,20,20,0.5)]" />
      <div aria-hidden="true" className="absolute border border-[#616161] border-solid inset-[-1px] pointer-events-none rounded-[47px]" />
    </button>
  );
}

function Frame16({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">We are waiting for other players to submit their reqeuest</p>
      </div>
      <Button3 onClick={onClose} />
    </div>
  );
}

function Frame14({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1038px]">
      <Frame13 />
      <Frame16 onClose={onClose} />
    </div>
  );
}

function Frame15({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-[40px] top-[53px] w-[1088px]">
      <Frame5 />
      <Frame14 onClose={onClose} />
    </div>
  );
}

export default function OrderConfirmationModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Modal Content */}
      <div className="bg-white relative rounded-[15.053px] w-full max-w-[1200px] h-[700px]" data-name="Background+Border+Shadow">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Frame15 onClose={onClose} />
        </div>
        <div aria-hidden="true" className="absolute border-[1.416px] border-solid border-white inset-0 pointer-events-none rounded-[15.053px] shadow-[0px_2.509px_10.035px_0px_rgba(255,255,255,0)]" />
      </div>
    </div>
  );
}
