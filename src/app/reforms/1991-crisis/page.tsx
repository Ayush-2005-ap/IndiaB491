import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Section 1: Hero Editorial Header  */}
<section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-12 pb-24 flex flex-col items-center text-center">
<div className="w-full max-w-container-max">
<div className="flex items-center justify-center gap-4 mb-6">
<div className="h-hairline w-12 bg-secondary opacity-50"></div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">Archival Series • Part I</span>
<div className="h-hairline w-12 bg-secondary opacity-50"></div>
</div>
<h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary mb-4 italic">
        The Summer of 1991: <br className="hidden lg:block"/> India on the Brink
      </h1>
<p className="font-caption text-caption text-outline mb-12">JUNE 1991 — JULY 1991</p>
<div className="w-full h-hairline bg-outline-variant mb-20"></div>
</div>
{/*  Featured Archival Image with Matting  */}
<div className="w-full max-w-[900px] group">
<div className="p-4 border border-outline-variant bg-surface-container-lowest">
<div className="relative overflow-hidden aspect-[16/9]">
<img className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000" data-alt="A grainy, high-contrast black and white archival photograph from 1991 showing the exterior of the Reserve Bank of India in Mumbai. The lighting is harsh, midday sun, creating deep shadows. Pedestrians in 90s attire walk past, and vintage Ambassador cars are parked nearby. The image has a slight sepia tint and film grain texture to evoke a sense of historical urgency and gravity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5h5-4MlhKMWlqsrEUP-M3BO3k6G6DOUBUyncnmazJESkJxlcH-Zwgm5maeQUrFvONB3w42JqkJp8aVz9kygNxHP-Ablqo1kzHNixDTLJhDC7lakiGlO39_frrMGaD6aUFbRm7tG2XtIsa3L3Pc_X1lOqNb7CzlLdL9GnY5FliBER94FDaO0hBOAXGp-X--YjoqpbaXJP4UXwOz6a-ko8eGyDiTTqxuNSKzDFXtwrm0Z57kqR5u_sB378loytRp5Uvz2mS7Dgeduk"/>
<div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
</div>
</div>
<p className="mt-4 font-caption text-caption text-outline italic text-left">The Reserve Bank of India, Mumbai. Foreign exchange reserves had plummeted to $1.2 billion—barely enough for two weeks of essential imports.</p>
</div>
</section>
{/*  Section 2: Narrative Content  */}
<section className="w-full bg-surface py-24 px-margin-mobile lg:px-0">
<div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Column: Metadata & Sidebar labels  */}
<div className="lg:col-span-3 hidden lg:block">
<div className="sticky top-32 space-y-12">
<div>
<span className="font-label-caps text-label-caps text-outline block mb-2 uppercase">Subject</span>
<span className="font-body-md text-body-md text-primary">Balance of Payments Crisis</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-outline block mb-2 uppercase">Key Figures</span>
<ul className="font-body-md text-body-md text-primary space-y-1">
<li>P.V. Narasimha Rao</li>
<li>Dr. Manmohan Singh</li>
<li>I.G. Patel</li>
</ul>
</div>
<div className="pt-8">
<div className="[writing-mode:vertical-rl] rotate-180 font-label-caps text-[10px] text-secondary tracking-widest opacity-40 uppercase">
              Preserving the 1991 Ledger
            </div>
</div>
</div>
</div>
{/*  Center Column: The Story  */}
<div className="lg:col-span-7 flex flex-col gap-12">
<div className="space-y-8">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed first-letter:text-7xl first-letter:font-display-lg first-letter:mr-3 first-letter:float-left first-letter:text-primary">
            By mid-1991, the Indian economy stood at a precipice. The combination of a widening current account deficit, the impact of the Gulf War on oil prices, and a sudden drying up of remittances had triggered a collapse in investor confidence. The nation was staring at a sovereign default—a humiliation previously unthinkable for the young republic.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            The situation was so dire that the government had to physically airlift 47 tonnes of gold to the Bank of England as collateral for a loan. This "Gold Run" became the visceral symbol of a nation's economic desperation, a moment that would eventually force a radical reimagining of India's socialist framework.
          </p>
</div>
{/*  Pull Quote  */}
<div className="py-12 border-y border-outline-variant my-8">
<blockquote className="font-display-lg text-headline-md text-primary italic relative">
<span className="absolute -top-6 -left-8 text-6xl text-secondary opacity-20 font-serif">“</span>
            The movement of gold was not just a financial necessity; it was a psychological trauma that forced the political class to accept that the old ways had failed.
            <cite className="block mt-6 font-label-caps text-label-caps text-outline not-italic">— ARCHIVAL DISPATCH, JUNE 1991</cite>
</blockquote>
</div>
<div className="space-y-8">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            As the foreign exchange reserves dwindled to less than $1 billion, the new government led by P.V. Narasimha Rao took the oath of office. His choice for Finance Minister, Dr. Manmohan Singh, was an unconventional one—a technocrat tasked with dismantling the 'License Raj' that had defined Indian industry for four decades.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            What followed in the next 48 hours would change the course of a billion lives. Two sharp devaluations of the Rupee and the preparation of a revolutionary budget were the first steps in a desperate gamble to save the union.
          </p>
</div>
</div>
</div>
</section>
{/*  Section 3: Related Archival Records  */}
<section className="w-full bg-surface-container-low py-24 px-margin-mobile lg:px-0 border-y border-outline-variant">
<div className="max-w-[1120px] mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">Exhibits</span>
<h3 className="font-headline-md text-headline-md text-primary">Related Archival Records</h3>
</div>
<a className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors" href="#">VIEW ALL RECORDS</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface mb-6 p-6 border border-outline-variant flex items-center justify-center transition-all group-hover:bg-white">
<img className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A scanned image of an old Indian newspaper headline from 1991. The paper is yellowed with age, showing 'Rupee Devalued' in bold, black serif typeface. Other smaller articles are visible in the background, creating a layered archival feel. Low saturation, high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0sC1Jbj5v-7uzgSpN3xOSLrv6AR2-flMnpaDPuxayNch8hOgdQdYePoapnTlhdmy0hwRJT87z4uyWGiDgvHf_id5oVLmOwcaqz6NNAAT9z2KtQG7ylTp9Rl2ZBcQ1yvma9j_XZNRjTCLapWx3uBosGrQTVmWk08O6ywe_Yi8JOOjRbP4LoOq78ybcjko03z6-fCo_TlEwrw2szYKSpFt7xMf9ygY9FYNKJbQb42xAdWCioI02Ea9FgsbGdFEcKrYM6mX6Geq1F-0"/>
</div>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block mb-2">DOCUMENT • 01.07.1991</span>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">The Rupee Devaluation Telex</h4>
</div>
{/*  Card 2  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface mb-6 p-6 border border-outline-variant flex items-center justify-center transition-all group-hover:bg-white">
<img className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A vintage photograph of Dr. Manmohan Singh in 1991, looking solemn at a desk covered with thick files and a rotary phone. The photo is desaturated with deep blacks and ivory whites. He is wearing a simple turban and glasses. The atmosphere is heavy with the burden of office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjrgE6Pgz5BWMytFH-BMQbc8XE-SPWiSa5F9aO3QG_i36ifVWq3z38YrFEAQrAP5HADW7Hioqe8hc74dNbXlc-94HOk1rGfunqSiZyC37hP6zffRxCrWS19yUogL2-hJXt_3AHRVsN77pmCN0iRoz4kcR96j9N7FzoNX9kcQisEgT2kn_dlv4DbKiwHgsn3unbbkSLGnSum7A9Fb8oNDlpA-fCtfNIx1Oz38QxBqpj1bU2C42aGtiZjig8mwCb6-3tcr5aKCi3tbA"/>
</div>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block mb-2">PHOTOGRAPH • 22.06.1991</span>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">First Day at North Block</h4>
</div>
{/*  Card 3  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface mb-6 p-6 border border-outline-variant flex items-center justify-center transition-all group-hover:bg-white">
<img className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A macro shot of a 1991 Indian gold coin or a bar of gold with official government stamps. The image is shot in a museum style, very close up, with shallow depth of field. The lighting is golden but muted, with a dark, moody background. Desaturated colors except for a hint of metallic gold." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGS1K0s_QuFNsQH9khhhgXSWnsOhPb5lSJHRRKUrmLJrnTk-GhBiknR0yVkhxQzK_cwyn-NuXpxvBonNdjQIN41p5wqt3xeGGaGJfxfVLbaipl8PsIU3eL7O4dClu0YKEJAzDWLiQ_hFm3lzqq4jKgtnEG05hGHDDYQvtZBxZ3NN1yzZO7oN-ACyxSOFqCbwYhsFc2ykKtTIjQ8oOdgdUY7l96CJSPUMVtUzJA0bHiq8Et_gzj4-xLx3O6bIQK-5kd-w8j22X8E5c"/>
</div>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block mb-2">RECORD • 04.07.1991</span>
<h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">The Gold Transit Registry</h4>
</div>
</div>
</div>
</section>
{/*  Section 4: Narrative Navigation  */}
<section className="w-full py-32 px-margin-mobile lg:px-0">
<div className="max-w-[1120px] mx-auto flex flex-col items-end">
<div className="w-full lg:w-1/2 text-right">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-4">Up Next</span>
<a className="group block" data-path="reforms-1991" href="#">
<h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary group-hover:text-secondary transition-colors duration-500 mb-8 leading-tight">
            1991: The Era of Economic Reforms →
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md ml-auto">
            Discover how a crisis was transformed into a catalyst for India's integration with the global economy.
          </p>
</a>
<div className="mt-16 flex justify-end gap-12">
<button className="flex items-center gap-2 group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">share</span>
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary uppercase">Share Exhibit</span>
</button>
<button className="flex items-center gap-2 group">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">bookmark</span>
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary uppercase">Save to Archive</span>
</button>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
