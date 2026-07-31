"use client";

import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Section: Header & Meta  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-16 border-b border-outline-variant">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-[0.2em]">CHRONICLES OF A CHANGING NATION</span>
<h1 className="font-display-lg text-display-lg text-primary italic">Archival News Stories</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-6 leading-relaxed">
          A curated repository of press clippings, editorials, and front-page dispatches from 1947 to 1991. Explore the narratives that shaped public discourse before the era of liberalization.
        </p>
</div>
<div className="flex items-center gap-4 pb-2">
<div className="text-right">
<span className="block font-label-caps text-[10px] text-outline uppercase">Archive Volume</span>
<span className="font-headline-sm text-headline-sm text-primary">IV // 1991</span>
</div>
<div className="w-px h-12 bg-outline-variant"></div>
<div className="text-right">
<span className="block font-label-caps text-[10px] text-outline uppercase">Total Records</span>
<span className="font-headline-sm text-headline-sm text-primary">12,482</span>
</div>
</div>
</div>
</section>
{/*  Section: Filter Bar (Reading Room Controls)  */}
<section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant">
<div className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 h-16 flex items-center justify-between">
<div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors">ERA: ALL TIMES</span>
<span className="material-symbols-outlined text-sm text-outline">expand_more</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors">TOPIC: ECONOMY</span>
<span className="material-symbols-outlined text-sm text-outline">expand_more</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors">PUBLICATION</span>
<span className="material-symbols-outlined text-sm text-outline">expand_more</span>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<div className="relative">
<input className="bg-transparent border-b border-outline-variant focus:border-primary outline-none py-1 font-body-md text-sm w-48 transition-all focus:w-64" placeholder="Search the headlines..." type="text"/>
<span className="material-symbols-outlined absolute right-0 top-1 text-outline text-sm">search</span>
</div>
</div>
</div>
</section>
{/*  Section: Timeline Layout  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-12">
<div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-12">
{/*  Timeline Column 1: July 1991  */}
<div className="hidden md:block">
<div className="sticky top-44">
<span className="font-label-caps text-label-caps text-primary block border-b border-primary pb-2 mb-2">JULY 1991</span>
<span className="font-caption text-caption text-outline">The Shift Begins</span>
</div>
</div>
<div className="flex flex-col gap-16">
{/*  Entry 1  */}
<article className="group grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
<div className="flex flex-col">
<div className="flex items-center gap-4 mb-4">
<span className="font-label-caps text-[11px] text-secondary border border-secondary px-2 py-0.5">FRONT PAGE</span>
<span className="font-caption text-caption text-outline italic">The Economic Times • July 24, 1991</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors cursor-pointer leading-tight">
              A Giant Leap: Dr. Manmohan Singh Unveils the New Industrial Policy
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 line-clamp-3 leading-relaxed">
              In a historic budget session, the Union Finance Minister announced sweeping changes to the licensing regime, effectively ending the 'License Raj'. The policy aims to integrate India into the global economy through radical deregulation and foreign investment incentives.
            </p>
<div className="mt-8 flex items-center gap-6">
<button className="font-label-caps text-label-caps text-primary border-b border-transparent hover:border-primary transition-all flex items-center gap-2">
                READ FULL TRANSCRIPT <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</button>
<button className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors flex items-center gap-2">
                VIEW ORIGINAL <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
<div className="relative overflow-hidden group/img">
<div className="p-4 border border-outline-variant bg-surface-container-lowest transition-all group-hover/img:bg-surface-container">
<img className="w-full h-48 object-cover grayscale opacity-80 group-hover:opacity-100 transition-all" data-alt="A vintage, yellowed newspaper clipping from July 1991. The headline is bold and black, titled 'Economic Reforms'. The photo is a desaturated, high-contrast black and white image of a busy Indian stock exchange floor. The paper has slight creases and archival ink bleed, framed with a thin dark navy border." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQsTeN8t-Fkobqz2hq_aKZRmFbVyTDdgz582piYn1g36bsGvpEzOr7LH4C5Y30j6tzVpR6nTOQ88lPqvxQA0RQ94ACPZP-b8VsAgbEWjY9k-JUG9LlJdlt4TCAotGiOGLtgKGxlIjYnmF3td7GjJ1xP0xePbOa-GXJ1yDp0NZmLTgo_q1AvcAj59hl_GRjmI231k7oo0kkJUtPGMjqBsQFQQwPILhLlMEtBRONevzVXNmNRO7_2El7OdHrqbOpqOImykjkgnF3y_U"/>
</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-primary bg-surface/80 p-1">zoom_in</span>
</div>
</div>
</article>
<div className="h-px w-full bg-outline-variant"></div>
{/*  Entry 2  */}
<article className="group grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
<div className="flex flex-col">
<div className="flex items-center gap-4 mb-4">
<span className="font-label-caps text-[11px] text-secondary border border-secondary px-2 py-0.5">EDITORIAL</span>
<span className="font-caption text-caption text-outline italic">The Statesman • July 18, 1991</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors cursor-pointer leading-tight">
              The Gold Standard: Pledging the Nation's Reserves to the IMF
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 line-clamp-3 leading-relaxed">
              As foreign exchange reserves dwindle to a mere two weeks of imports, the airlift of 47 tonnes of gold to London marks a somber moment in India's fiscal history. Is this the cost of years of protectionist insulation?
            </p>
<div className="mt-8 flex items-center gap-6">
<button className="font-label-caps text-label-caps text-primary border-b border-transparent hover:border-primary transition-all flex items-center gap-2">
                READ FULL TRANSCRIPT <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</button>
<button className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors flex items-center gap-2">
                VIEW ORIGINAL <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
<div className="relative overflow-hidden group/img">
<div className="p-4 border border-outline-variant bg-surface-container-lowest transition-all group-hover/img:bg-surface-container">
<img className="w-full h-48 object-cover grayscale opacity-80 group-hover:opacity-100 transition-all" data-alt="Close-up of a classic 1990s typewritten editorial note on aged stationery. The paper is ivory with visible grain. A single ink-stained stamp of a government seal is visible in the corner. Desaturated sepia tones with sharp focus on the metallic type-slug imprints of the letters." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4RERDoLFdXDZ2cEnsNwuBvw2jAowMBbd04DX17LtxPQI6GJX5TQioscDi-jqIEIbVPhOcrY_NueFNpQ9p5fV0XtCs8Q_E15paKXx_doe0YCGAMgflmkEmDFx6_Rex_YucU3uI7HOgcJjNrBsH7dEr6LKPpBjHvdlgHKHlAJWTIUdJATr6jRSPWp5vNXaSBzbEnnkKaadzvXGQnY8ve6K7negGDlhuSl-jPbIqNMsuj7cSjZwPzeSlasKO_ckoJiCPjUimijV46X8"/>
</div>
</div>
</article>
</div>
</div>
{/*  Timeline Column 2: Early 1991  */}
<div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-12 mt-24">
<div className="hidden md:block">
<div className="sticky top-44">
<span className="font-label-caps text-label-caps text-primary block border-b border-primary pb-2 mb-2">MARCH 1991</span>
<span className="font-caption text-caption text-outline">The Crisis Peak</span>
</div>
</div>
<div className="flex flex-col gap-16">
{/*  Entry 3  */}
<article className="group grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
<div className="flex flex-col">
<div className="flex items-center gap-4 mb-4">
<span className="font-label-caps text-[11px] text-secondary border border-secondary px-2 py-0.5">NEWS DISPATCH</span>
<span className="font-caption text-caption text-outline italic">Indian Express • March 05, 1991</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors cursor-pointer leading-tight">
              Fuel Shortages Grip Major Metros as Import Credit Freezes
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 line-clamp-3 leading-relaxed">
              Long queues at petrol pumps have become the new normal as the balance of payments crisis hits the essential commodities sector. Reports of panic buying and rationing emerge from Delhi and Bombay.
            </p>
<div className="mt-8 flex items-center gap-6">
<button className="font-label-caps text-label-caps text-primary border-b border-transparent hover:border-primary transition-all flex items-center gap-2">
                READ FULL TRANSCRIPT <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</button>
<button className="font-label-caps text-label-caps text-outline hover:text-primary transition-colors flex items-center gap-2">
                VIEW ORIGINAL <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
<div className="relative overflow-hidden group/img">
<div className="p-4 border border-outline-variant bg-surface-container-lowest transition-all group-hover/img:bg-surface-container">
<img className="w-full h-48 object-cover grayscale opacity-80 group-hover:opacity-100 transition-all" data-alt="A gritty, grain-heavy black and white photograph of a 1991 gas station in Mumbai. Vintage Ambassadors and Padmini taxis are lined up in a hazy, smog-filled street. The lighting is harsh afternoon sun with deep shadows. Archival quality, low saturation, focused on the textures of the old vehicles and pavement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM1_zHx_1PvFcrZqe1s9eRBqsn0BbNPwiwpT7yTT7Q3brfSlFkNbldQJT4uINPX7eFYevp69na_y3ArGp4W-zjTnl71lPSqezZrL-O-ocSlQpOE4bKYLNzaoteI7BMSzse6k6ajGQYWjJYcJr5ALA9LEmWIFOgK9v8Ua4S-qSOtJBmFhAfSyrDOc_IN6rEcorXFHTdDYNHntsR59g5-oB3_C3dmGf_qYegrB0kQxpM1Qa63Emu2KYE3bNMgSp3lIWu1NkG06736DM"/>
</div>
</div>
</article>
</div>
</div>
</section>
{/*  Section: Pagination / Load More  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-24 flex justify-center">
<div className="flex flex-col items-center gap-6">
<div className="w-16 h-px bg-outline-variant"></div>
<button className="px-12 py-4 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all tracking-widest">
        ARCHIVE REEL: 1990 - 1985
      </button>
<span className="font-caption text-caption text-outline">Viewing 1-15 of 12,482 Entries</span>
</div>
</section>
{/*  Floating Archive Detail Sidebar (Mock Interaction)  */}
<div className="fixed right-0 top-0 h-full w-[450px] bg-surface-container-lowest border-l border-outline-variant translate-x-full transition-transform duration-500 z-[60] shadow-2xl p-12 overflow-y-auto hidden lg:block" id="detail-pane">
<div className="flex justify-between items-start mb-12">
<span className="font-label-caps text-label-caps text-outline">DOCUMENT REF: ET-91-0724</span>
<button className="material-symbols-outlined text-on-surface hover:text-secondary" onClick={() => document.getElementById('detail-pane').classList.add('translate-x-full')}>close</button>
</div>
<div className="aspect-[3/4] bg-surface-container mb-8 p-6 border border-outline-variant">
<img className="w-full h-full object-contain grayscale" data-alt="Highly detailed close up of newsprint texture, showing the individual dots of ink from a 1990s printing press. The text is slightly blurred at the edges, giving it an authentic archival feel. Off-white paper with slight yellowing at the edges." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDyz3sZ_5Un_HX1J44Bb5cbLnezZ69bXxq_kBpO7078Z98O0gFqbvZqVDS4iJ0tf8tA7mecr-4179BH0KCCWCOALl5PwFrrAdHsNZLvh6EX60elksCx6RdMWHyYw73f7LgKvv2t-QJqxblMxsyjPvO1P8umMAUjBCM3y4aQcJg-oUp29KkWr-4Uy96Fmjpj-HMBiyxhxueYvgcWGlHbitQI_kgR97-mLmY1d1xee8KvhXRuh2SUtMeOifUGt4wBV_Z9sdXxVZnkBw"/>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-4">Metadata Analysis</h3>
<div className="grid grid-cols-2 gap-y-4 gap-x-8">
<div>
<span className="block font-label-caps text-[10px] text-outline uppercase">Keywords</span>
<span className="font-body-md text-sm text-on-surface-variant">LPG, IMF, Manmohan Singh, Budget 1991</span>
</div>
<div>
<span className="block font-label-caps text-[10px] text-outline uppercase">OCR Confidence</span>
<span className="font-body-md text-sm text-on-surface-variant">98.4%</span>
</div>
<div>
<span className="block font-label-caps text-[10px] text-outline uppercase">Archive Source</span>
<span className="font-body-md text-sm text-on-surface-variant">National Library, Kolkata</span>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant">
<button className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest">DOWNLOAD HIGH-RES PDF</button>
</div>
</div>
</div>

    </>
  );
}
