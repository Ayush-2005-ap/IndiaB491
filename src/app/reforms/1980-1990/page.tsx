import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Header Section  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 pt-24 pb-16">
<div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-8">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4">The Decadent Decade</span>
<h1 className="font-display-lg text-display-lg lg:text-[80px] text-primary leading-none">1980–1990</h1>
</div>
<div className="mt-8 md:mt-0 md:text-right">
<p className="font-label-caps text-label-caps text-outline uppercase">Archive Reference</p>
<p className="font-body-md text-on-surface-variant italic">Vol. IV: The Twilight of the License Raj</p>
</div>
</div>
</section>
{/*  Content Section  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 grid grid-cols-12 gap-gutter relative">
{/*  Vertical Sidebar Label  */}
<div className="hidden lg:block col-span-1 relative">
<div className="sticky top-32 [writing-mode:vertical-rl] rotate-180 flex items-center gap-4">
<span className="w-px h-12 bg-secondary/30"></span>
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">Chronicle of Reform</span>
</div>
</div>
{/*  Main Editorial Text  */}
<div className="col-span-12 lg:col-span-8 lg:col-start-3 max-w-[720px]">
<article className="space-y-12">
<div className="space-y-6">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed first-letter:text-7xl first-letter:font-display-lg first-letter:float-left first-letter:mr-4 first-letter:text-primary">
            The GDP growth rate improved (from an average of 2.9 percent in 1970s to 5.6 percent in 1980s) during the 1980s. This was primarily due to two reasons: Liberalisation of industry and trade (reforms of 1980s), and borrowing from abroad alongside rising government expenditure at home.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            During the 1980s, the investment-to-GDP ratio rose—investment went from about 19 percent of GDP in the early 1970s to nearly 25 percent in the early 1980s—exclusively in the public sector, while it fell in the private sector. The external borrowing helped bridge the considerable gap between exports and imports and raise the total GDP growth rate. Thus, foreign borrowing made a positive contribution to growth. However, it also led to a rapid accumulation of foreign debt, which rose from USD 20.6 billion in 1980–81 to USD 64.4 billion in 1989–90.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            From the fiscal year 1979-80, India started facing the Balance of Payment (BoP) crisis. By the end of the 6th five-year plan in 1985, India’s BoP deficit rose to Rs. 11,384 crores (from a BoP surplus of Rs. 3082 crores during the 5th five-year plan ending in 1978). The second oil shock of 1979 occurred due to decreased oil output in the wake of the Iranian revolution, pushing up oil prices.
          </p>
</div>
{/*  Pull Quote  */}
<div className="py-12 border-y border-outline-variant/50 my-16">
<blockquote className="font-headline-md text-headline-md italic text-primary text-center lg:px-12 leading-snug">
            “In 1980, following the outbreak of the Iran-Iraq War, oil production in Iran nearly stopped... pushing prices further up. The value of imports for India almost doubled between 1978-79 and 1981-82.”
          </blockquote>
</div>
<div className="space-y-6">
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            From 1980 to 1983, there was a global recession and India’s exports suffered. To offset the BoP, a number of measures were taken, including external assistance in the form of loans and aids, withdrawal of SDR (Special Drawing Rights, the currency of the IMF), and borrowing from the IMF under the extended facility arrangement. During the mid-1980s, the BoP issue occupied a central position in India’s macroeconomic management policy.
          </p>
<div className="relative w-full aspect-[16/9] mb-12 group overflow-hidden">
<div className="absolute inset-0 border border-primary p-4 z-10 pointer-events-none"></div>
<img className="w-full h-full object-cover filter grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700" data-alt="A desaturated, high-contrast archival photograph of a busy street in 1980s Mumbai. The image features vintage Premier Padmini cars, old-style billboard advertisements for Air India and HMT watches, and people in period-appropriate attire. The lighting is cinematic with long shadows, captured in a grainy, film-stock aesthetic that feels like a preserved historical document." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMA_YTctgxmS5vBX1U7t1R8Jb2kshxcinM6Uz_pG7LgjMrfYVuMP8NNX5HNwY_6tY05XUAf8768HBhGZSUr22eizptsE8bDUtHv7oTZLLxYx8KYeXxSbEO5U2lU1TiZidJ20M7ypDUIi1uID2-eVuCC0Pku8tUUAkUOATlVaAqsX60PE3VyPBO1pjpqE1wXDv5VF4JM4Y4bZnAa8WnT-0omeZLsKo41WrmVgndIphrhby1H1QU1HdSLQILmiDob5kPNrUdZevfLo4"/>
<div className="absolute bottom-6 right-6 bg-surface px-3 py-1 font-label-caps text-[10px] z-20">PLATE NO. 82-A</div>
</div>
<h3 className="font-headline-md text-primary mt-8 mb-4">Major Reforms of the 1980s</h3>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-4">
            Broadly, the reforms of the 1980s, which were largely in place by early 1988, can be divided into five categories (India in the 1980s and 1990s, Arvind Panagariya):
          </p>
<ul className="list-disc pl-6 space-y-4 font-body-lg text-body-lg text-on-surface leading-relaxed">
            <li>
              <strong>First, the OGL (Open General License List) was steadily expanded:</strong> The inclusion of an item was usually accompanied by an “exemption”, amounting to a reduction in import tariff. Capital goods in the OGL increased from 79 in 1976 to 1,329 in April 1990.
            </li>
            <li>
              <strong>Second, decline in the share of canalised imports:</strong> Canalisation (monopoly rights of the government for importing certain items) declined from 67% to 27% of total imports between 1980–81 and 1986–87. This was due to increased domestic production of POL, the Green Revolution's success, and decanalisation of various items.
            </li>
            <li>
              <strong>Third, export incentives were introduced:</strong> Especially after 1985, replenishment licenses (REP) were given to exporters. These could be freely traded on the market and directly relaxed constraints on some imports.
            </li>
            <li>
              <strong>Fourth, relaxation of industrial controls:</strong> This included foreign exchange availability considerations and removing extra layers of regulation on imports.
            </li>
            <li>
              <strong>Fifth, setting the exchange rate:</strong> The exchange rate was set at a level that reduced the bias against traded goods. It steadily depreciated from 12.36 rupees to a dollar in 1985 to 17.50 rupees in 1990.
            </li>
          </ul>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-8">
            Towards the end of 1980s, despite these measures, external debt was rising. While the borrowing helped the economy grow, it was also pushing the country steadily towards a crash. High current expenditures proved unsustainable, manifesting in extremely large fiscal deficits.
          </p>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            These factors led to a buildup of very substantial public debt with interest payments accounting for a large proportion of government revenues. They inevitably fed into the current account deficits (CAD), which kept rising steadily until they reached 3.5 percent of GDP and 43.8 percent of exports in 1990–91. The outcome of these developments was the June 1991 crisis.
          </p>
</div>
</article>
{/*  Navigation  */}
<div className="mt-24 pt-12 border-t border-outline-variant flex justify-end">
<a className="group flex flex-col items-end gap-2" data-path="reforms-1991" href="#">
<span className="font-label-caps text-label-caps text-outline uppercase tracking-widest group-hover:text-primary transition-colors">The Next Chapter</span>
<div className="flex items-center gap-3">
<span className="font-headline-sm text-headline-sm text-primary group-hover:mr-2 transition-all">Continue to 1991 Crisis</span>
<span className="material-symbols-outlined text-primary">arrow_forward_ios</span>
</div>
</a>
</div>
</div>
</section>
{/*  Related Content Strip  */}
<section className="bg-surface-container-low mt-32 py-24">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
<h3 className="font-label-caps text-label-caps text-outline uppercase tracking-[0.3em] mb-12">Related Evidence</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface border border-outline-variant p-2 mb-6 transition-colors group-hover:border-primary">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500" data-alt="A vintage 1980s television advertisement for a classic Indian brand like Thums Up or Maggi. The image is grainy, slightly desaturated with warm yellowish tones, capturing a moment of suburban family life in a well-to-do Indian household of the era. High-end archival quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANE_0cqC1pgENavYR5nS06lxo6Nb6XslR26-5LGpxiZbkwrJ4N-dZg_R65V8CkJ5jEBshnydhNfqk7AuV2AHoJ59NWu0wbZkilaLcEph8EZ3Q0fZnhWAlsxYAGXsMKlsbGmddNkgOCT24pLt1YS4g6JN9nRLEbQGaAkJnvSxDpLm7c8QUOhiOepJYpMp66k9TcveCrkVpCfHPL_cFJvaFHdlvSc3IVt4thd4gI5ZDtNpeHKiLmM9MrwcCq1pYVfUdiOU-0jvLodLo"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Multimedia</span>
<h4 className="font-headline-sm text-headline-sm text-primary mt-2">The Ad Wars of '84</h4>
<p className="font-caption text-caption text-on-surface-variant mt-2 line-clamp-2">How television changed the Indian consumer landscape before the markets opened.</p>
</div>
{/*  Card 2  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface border border-outline-variant p-2 mb-6 transition-colors group-hover:border-primary">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500" data-alt="A close-up photograph of a vintage 1980s newspaper clipping from The Times of India. The paper is yellowed with age, showing a headline about industrial licensing or a major budget speech. The typography is classic, sharp, and the texture of the old newsprint is visible. Archival style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXCyj_0ujrLSKh5wfIkKpaMKctC4e5FP4ay0urWqK5OjHuvo_Cb_r5eJQzBdqbJgEJIIKwXUznClWXEg5ATyimxX84mOCCtVUFqDu1bM5_NL34CJcXI-UtOC1yBRCxIdFinn7zl7FRiuOp6Pl6B_2SdhS4CCflzzwId5d8jjXiPvqi5ENQULM8ZJ4Hq-ee8qFrNzZEFVf0kyfBSJDnMVvA8BHrOzH0Jf1wFHubsb6nMDZMRP18sBuhZy0cd6wB7Au3iO5G8Nrlhk"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Archival News</span>
<h4 className="font-headline-sm text-headline-sm text-primary mt-2">The Licensing Ledger</h4>
<p className="font-caption text-caption text-on-surface-variant mt-2 line-clamp-2">Direct scans of the 1988 industrial policy memos that hinted at the coming storm.</p>
</div>
{/*  Card 3  */}
<div className="group cursor-pointer">
<div className="aspect-square bg-surface border border-outline-variant p-2 mb-6 transition-colors group-hover:border-primary">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500" data-alt="A minimalist political cartoon from a 1980s Indian journal. Sharp black ink lines on aged cream paper, depicting a bureaucratic figure entangled in literal red tape, sitting behind a massive wooden desk. Satirical, intellectual, and sophisticated artistic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFMqsk8t84v1FaXtiaF6Db89s6zhLI2JZkcja7pv3gyuJwgdFyTb_Ly9O3c_Wtsn0_UB7p0smUAIUYlYsv_PSyteW5NPRkVQ3yGrTuj6LW5unED0Z7N98YdEDdzQDhoOzuG0htmd90YH7Js0hqj25pnH9Me-edI_x3Mi2nRkhVbYTtkV3-A8mMdR6QC69BJlgK-kOIYHxyMhvIkyJ9G5ymyqO3NQW1Dju2MBEfXvJXkl2YCqjVq9Jwogeu-woyipqK0W69XQAyCg"/>
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Satire</span>
<h4 className="font-headline-sm text-headline-sm text-primary mt-2">Laxman's Common Man</h4>
<p className="font-caption text-caption text-on-surface-variant mt-2 line-clamp-2">A curated collection of cartoons reflecting the quiet frustrations of the decade.</p>
</div>
</div>
</div>
</section>

</div>
    </>
  );
}
