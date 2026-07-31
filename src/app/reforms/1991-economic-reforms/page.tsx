import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Hero Section with Immersive Archival Backdrop  */}
<section className="relative w-full h-[716px] flex items-end overflow-hidden">
<div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10"></div>
<div className="absolute inset-0 z-0" data-alt="A cinematic, desaturated archival photograph of the Indian Parliament building in New Delhi, 1991. The image has a heavy grain, high contrast, and a sepia-tinted monochrome palette. Soft light filters through monsoon clouds, casting long shadows across the stone architecture. The aesthetic is somber, historic, and evokes a sense of monumental change." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkiD3IwxcKKMrPR9re0b8YI9VD1jP0Fn8tVBGj6Fy_StbLTeKBBAH112Vi7BILI6Jm4fl2h8w05jgGlImoLyet-e0WknRBz41LPTk69LNg9_FPDSmlbyAoXfp4eWD4wItET4YBeK0cgERxqCbVeuhWa0gos6aTMQpCFRrcRRb0C3kNIDSmDuTbid_yDdhhptGKJRxwzs5Ml2avvGEE72sYkfvT4vuuyZTuFw2vnsRHXTC8HogIsvJW__vDkTuYM6Hph1uAdDqEOL8')" }}></div>
<div className="relative z-20 max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 pb-20">
<div className="max-w-3xl">
<span className="font-label-caps text-label-caps text-primary-fixed mb-4 block tracking-[0.2em] uppercase">The Turning Point</span>
<h1 className="font-display-lg text-display-lg text-surface-container-lowest mb-6 leading-none">1991: The Great Liberalization</h1>
<div className="flex items-center gap-4 text-primary-fixed-dim">
<span className="font-label-caps text-label-caps">JULY 24, 1991</span>
<div className="w-12 h-hairline bg-primary-fixed-dim/30"></div>
<span className="font-label-caps text-label-caps text-secondary-fixed">ECONOMIC REFORM SERIES VOL. 01</span>
</div>
</div>
</div>
</section>
{/*  Editorial Content Layout  */}
<section className="w-full bg-surface py-24">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Sidebar Metadata (Left)  */}
<div className="hidden lg:block lg:col-span-3 border-r border-outline-variant pr-8">
<div className="sticky top-32">
<div className="mb-12">
<p className="font-label-caps text-label-caps text-outline uppercase mb-4">The Context</p>
<p className="font-body-md text-on-surface-variant italic">A nation on the brink of default, with foreign exchange reserves barely enough to last two weeks.</p>
</div>
<div className="space-y-8">
<div>
<p className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-2">Key Architect</p>
<p className="font-headline-sm text-headline-sm text-primary">Dr. Manmohan Singh</p>
</div>
<div>
<p className="font-label-caps text-[10px] text-outline uppercase tracking-widest mb-2">Policy Shift</p>
<p className="font-headline-sm text-headline-sm text-primary">LPG Model</p>
</div>
</div>
</div>
</div>
{/*  Main Narrative (Center)  */}
<div className="lg:col-span-6 flex flex-col gap-12">
<article className="prose prose-slate max-w-none">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed first-letter:text-7xl first-letter:font-headline-sm first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                        The year was 1991. India stood at a crossroads that would define its destiny for the next century. The balance of payments crisis had reached a fever pitch, forcing the government to airlift 47 tonnes of gold to London as collateral for an IMF loan. It was against this backdrop of desperation that a silent revolution was born.
                    </p>
<p className="font-body-lg text-body-lg text-on-surface mt-8 leading-relaxed">
                        On July 24, Finance Minister Dr. Manmohan Singh rose in the Lok Sabha. His speech was not merely an accounting of figures; it was a manifesto for a new India. "Let the world hear it loud and clear," he proclaimed, "India is now wide awake. We shall prevail. We shall overcome."
                    </p>
{/*  Pull Quote  */}
<div className="my-16 relative">
<div className="absolute -left-8 top-0 text-secondary-fixed text-6xl font-headline-sm opacity-50">"</div>
<blockquote className="font-headline-md text-headline-md text-primary leading-tight border-l-2 border-secondary pl-8">
                            No power on earth can stop an idea whose time has come.
                        </blockquote>
<cite className="block mt-4 font-label-caps text-label-caps text-on-surface-variant not-italic">— VICTOR HUGO, QUOTED BY DR. SINGH</cite>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                        The reforms dismantled the 'License Raj'—the intricate system of licenses, regulations, and accompanying red tape that had stifled Indian entrepreneurship since independence. By opening the doors to Foreign Direct Investment (FDI) and reducing import duties, the government signaled a shift from a closed, socialist-leaning economy to a globally integrated market.
                    </p>
<div className="my-12 w-full p-8 bg-surface-container border-l-4 border-primary">
<h4 className="font-headline-sm text-headline-sm text-primary mb-4">The Three Pillars</h4>
<ul className="space-y-4">
<li className="flex gap-4 items-start">
<span className="font-label-caps text-primary pt-1">01.</span>
<p className="font-body-md text-on-surface"><strong>Liberalization:</strong> Removing government control and opening the door to private enterprise.</p>
</li>
<li className="flex gap-4 items-start">
<span className="font-label-caps text-primary pt-1">02.</span>
<p className="font-body-md text-on-surface"><strong>Privatization:</strong> Reducing the role of the public sector in core industries.</p>
</li>
<li className="flex gap-4 items-start">
<span className="font-label-caps text-primary pt-1">03.</span>
<p className="font-body-md text-on-surface"><strong>Globalization:</strong> Integrating the domestic economy with the world trade network.</p>
</li>
</ul>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                        Critics at the time feared a sell-out to foreign interests, but the immediate results were undeniable. Foreign reserves began to stabilize, inflation cooled, and a new generation of Indian startups—though the term didn't exist then—began to find their footing in a competitive landscape.
                    </p>
</article>
{/*  Archival Gallery Component  */}
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="flex flex-col gap-2">
<div className="aspect-[4/5] bg-surface-container-high p-4">
<img className="w-full h-full object-cover grayscale brightness-90 contrast-125" data-alt="A vintage, grainy black and white photograph of a 1991 Indian newspaper front page with the headline 'Rupee Devalued'. The paper is aged, with yellowed edges and sharp typography typical of early 90s broadsheets." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDck_e1U_mDT7btytVgwAxWwLMZaxrA51tGr2rjRy-D1zB_aGDEAkTdZ4nIGF4UH9K-CHqaWmiGQYR6gWQ-G2eyVoDfCF0FC7bUXOS6M0-BDQFu7X_4tMmnjNpTm6rCPWAhSA9XwjTPD2X2uOC7TMtNeAco9Q15sbHtaU0epYA-qGCLE4Pe0uEPRWhY9SDKoPKCFEs7T6DpIoTI7jlixGo6KnX6BYq6Xysn-Adu1bHFvCQIwteacIcb5o0vohgIrd4nePiNjl1vocU"/>
</div>
<span className="font-caption text-caption text-outline italic">July 1991 Headline Archive</span>
</div>
<div className="flex flex-col gap-2 mt-12">
<div className="aspect-[4/5] bg-surface-container-high p-4">
<img className="w-full h-full object-cover grayscale brightness-90 contrast-110" data-alt="An archival photograph of long queues outside a government office in 1980s India, representing the License Raj. Desaturated, high grain, documentary style photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_7TEn0HvCUnUTn-wy4S3KK6X5q-zUjJCO7ZdqtgSeP2pX7OWNKxG2AtmQyoDYve45SP5vFeupfH6LmMl1kM4EOgqrpCUA0qGH7h9DO1egBBcw0reiyoUXj-0eeBuhzFnnA_-ugKSze4t3i4kQkjWtTWDodL0JWgX0kcOi3KfM88X19IOLuOx2EYWL0NGe_-jJSRC7uh5TEs80eQY96xHmrCwwfoqwBHh-T3oQLy7HMt9NRLH-_XErXQM8onBYItI6bilrEV5WBY"/>
</div>
<span className="font-caption text-caption text-outline italic">The Era of Queues</span>
</div>
</div>
</div>
{/*  Right-aligned Section Navigation  */}
<div className="lg:col-span-3 lg:pl-8">
<div className="sticky top-32 flex flex-col gap-12">
<div>
<p className="font-label-caps text-label-caps text-outline uppercase mb-6 tracking-widest">Next Chapter</p>
<a className="group block" href="#">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-4">Impact of Reforms</h3>
<p className="font-body-md text-on-surface-variant mb-6">How the 1991 shift created the Indian Middle Class.</p>
<div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
<span className="font-label-caps text-label-caps">CONTINUE READING</span>
<span className="material-symbols-outlined">arrow_right_alt</span>
</div>
</a>
</div>
<div className="pt-12 border-t border-outline-variant">
<p className="font-label-caps text-label-caps text-outline uppercase mb-6 tracking-widest">Related Media</p>
<div className="space-y-6">
<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-16 h-16 bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Small archival thumbnail of an 80s television set." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1zid14o0-fjai6kaf0Sz5RzScWbWk8NLK8-I-Iuk3GdQz7o5KUhpbEgnNKiwxbkZDgjPyIqS6xgbcjtD6vvDljL5otP2gnikcllph4yNmWl5PQs0iSGXh9FIS6BWqWt7VJ5TwM6eunisB1JyWclj1_-cri4qqrDU0nX-hXncwqcMVKZmPSKHtHASfTrY03hbAaol55fXWz_QBKD6vKmskeG2ZCtKjHGDhHeG4z3xu0-j8Jgueaet7J2M675PkAqpZgPsFQK11Ab0"/>
</div>
<span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">Video: The Gold Airlift Secret</span>
</div>
<div className="flex gap-4 items-center group cursor-pointer">
<div className="w-16 h-16 bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity" data-alt="Small archival thumbnail of a political cartoon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf4oW3twaf444auXA4xfHtu8q-NjELliGeUrpoQTtOtAu6Ncd3TYbOUvhY-TE2NF1R0Um3IqbcZL0oiXSX7KqqeX765p2BEZhiA1eVtcEWThI_Qv_ZoPhIg_z3eXN7Oix_letoy-c8mCqbD_bYEnFOWC4kd5vGiG2j5A70joF7M8GCfooZVI5CbDy7Y65xD5ifA3TE8l0xF4Q7qh4eAQ4n_0Gl6lOgUAr2IFlZyg1-E_zikLCjSLVOvj22UPX7cKEi9X1t4VzD2Bc"/>
</div>
<span className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors">Gallery: Cartoons of the Crisis</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Reading Progress Indicator  */}
<div className="fixed top-20 left-0 h-1 bg-secondary z-[60] transition-all duration-150" id="progress-bar" style={{ width: "0%" }}></div>
{/*  Related Content Cards (Bottom Mosaic)  */}
<section className="w-full bg-surface-container-low py-24 border-t border-outline-variant">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
<h2 className="font-headline-md text-headline-md text-primary mb-12">The Digital Archive</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1  */}
<div className="group cursor-pointer">
<div className="aspect-video bg-surface p-2 mb-6 border border-outline-variant group-hover:border-primary transition-colors">
<div className="w-full h-full overflow-hidden">
<img className="w-full h-full object-cover grayscale scale-100 group-hover:scale-105 transition-transform duration-700" data-alt="Archival document scan with official stamps and signatures. High resolution, sepia tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJknrdTWSmyjYjrhUR-UEe4lCZc8quoDpYRQdyxZazb0XffQtAqE2cB1JS1Afdfw6w1HBx67y49nJHHVl4CDmF2kxtdRcjwbgADEeu_K2i9qH9sZVO7cS2bZyTH0ns5AOLo4GLWTXDfCZcbo8JFSUyqaFOiptynM8_gjvdE6Z1OqmCU38zxP1y0Fg-Iw8g1ecUnQ_EJnXtU0Tgvw34PubZnh2KcTzoh-YSqfIG7uwmdzmLzAYDbnJ1SRd6eSg-9zHPt13pfG9eC8"/>
</div>
</div>
<p className="font-label-caps text-[10px] text-secondary uppercase mb-2">Document #882</p>
<h4 className="font-headline-sm text-headline-sm text-primary mb-2">The IMF Memorandum</h4>
<p className="font-caption text-caption text-on-surface-variant line-clamp-2">The original terms of the emergency loan that triggered the reforms.</p>
</div>
{/*  Card 2  */}
<div className="group cursor-pointer">
<div className="aspect-video bg-surface p-2 mb-6 border border-outline-variant group-hover:border-primary transition-colors">
<div className="w-full h-full overflow-hidden">
<img className="w-full h-full object-cover grayscale scale-100 group-hover:scale-105 transition-transform duration-700" data-alt="A portrait of an early 90s entrepreneur in a Mumbai office. Desaturated, soft focus background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9rF8FEXMHxGSZZs1bzoq62pe7_L5NoGuJ-FWF3ud95bjWwSyG_1zcLa2y7pUa1H_IrqG8y0U4IMjeeTVMPBx7S9qFVlrV4dlfT2SIc4_GQ-JUk_R4HrOO5_HfldKMGl_8IaKjJyA8G1c6FQSN8nxvcUDwyP_gU1081nTZl2IvlJp87lvcdkzimbTflgbIXqLw_Da-RbPV8C4xf54kDXgdmHwbCYqdsHIDcKgXz6iCR6jloPo_ePrb4nLgkIRXpSW1hjuBnCMa5cU"/>
</div>
</div>
<p className="font-label-caps text-[10px] text-secondary uppercase mb-2">Oral History</p>
<h4 className="font-headline-sm text-headline-sm text-primary mb-2">Voices of Industry</h4>
<p className="font-caption text-caption text-on-surface-variant line-clamp-2">Interviews with business leaders who survived the transition.</p>
</div>
{/*  Card 3  */}
<div className="group cursor-pointer">
<div className="aspect-video bg-surface p-2 mb-6 border border-outline-variant group-hover:border-primary transition-colors">
<div className="w-full h-full overflow-hidden">
<img className="w-full h-full object-cover grayscale scale-100 group-hover:scale-105 transition-transform duration-700" data-alt="Street scene in 1991 Delhi, with billboard advertising appearing for the first time. Grainy, vintage color palette (muted reds and blues)." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrcaUq5bm6FaJNfiZB3nHKcjYL4fNows8XIGdE3_P2cUFw1IDEBFkmCueV41FVIaReVrKOzLZlQ7XLO5xFl_wdQXyPGTuwxShaCCwVH46y8Sw-nqoDwMqwUrmKciy4kViyM9Jd1rWuWyme_ypMd3j437uuoibLCvBuwQwQ17x3oN63PuOuQD8dVjStc95-g8vbL3ur3cL8NynLpplnNZv-H2ivPyQH80DenztjUUWqvyqnbMmhlhkNOWDWa16uF-vU4cYgJsaupA"/>
</div>
</div>
<p className="font-label-caps text-[10px] text-secondary uppercase mb-2">Visual Story</p>
<h4 className="font-headline-sm text-headline-sm text-primary mb-2">A City Transformed</h4>
<p className="font-caption text-caption text-on-surface-variant line-clamp-2">A photographic study of urban landscapes pre and post liberalization.</p>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
