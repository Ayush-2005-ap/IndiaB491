import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/*  Section 1: Hero Editorial Header  */}
        <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-12 pb-12 flex flex-col items-center text-center">
          <div className="w-full max-w-container-max">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-hairline w-12 bg-secondary opacity-50"></div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">Archival Series • Part I</span>
              <div className="h-hairline w-12 bg-secondary opacity-50"></div>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary mb-4 italic">
              The Summer of 1991: <br className="hidden lg:block" /> India on the Brink
            </h1>
            <p className="font-caption text-caption text-outline mb-12">JUNE 1991 — JULY 1991</p>
          </div>
          {/*  Featured Archival Image with Matting  */}
          
        </section>
        {/*  Section 2: Narrative Content  */}
        <section className="w-full bg-surface pt-8 pb-24 px-margin-mobile lg:px-0">
          
            {/*  Center Column: The Story  */}
            <div className="max-w-[720px] mx-auto flex flex-col gap-12">
              <div className="space-y-8">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed first-letter:text-7xl first-letter:font-display-lg first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                  Towards the end of the 1980s, India was facing a Balance of Payments (BoP) crisis due to unsustainable borrowing and high expenditure. The Current Account Deficit (3.5 percent) in 1990-91 massively weakened the ability to finance the deficit.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The macroeconomic indicators were grim. The trade deficit increased from Rs. 12,400 crore in 1989-90 to Rs. 16,900 crore in 1990-91. Simultaneously, the current account deficit jumped from Rs. 11,350 crore to Rs. 17,350 crore. The fiscal deficit to GDP ratio remained above 7 percent for two consecutive years. By late 1990, foreign exchange reserves, once sufficient to cover two years of imports, were barely enough to cover two and a half months.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Inflation crossed 10 percent in 1990-91 and surged past 13 percent in 1991-92, while the GDP growth rate declined from 6.5 percent to 5.5 percent. India’s foreign exchange reserves stood at Rs. 5,277 crore on December 31, 1989, but halved to Rs. 2,152 crore by the end of 1990.
                </p>
              </div>
              {/*  Pull Quote  */}
              <div className="py-12 border-y border-outline-variant my-8">
                <blockquote className="font-display-lg text-headline-md text-primary italic relative">
                  <span className="absolute -top-6 -left-8 text-6xl text-secondary opacity-20 font-serif">“</span>
                  The immediate cause of the loss of reserves beginning in September 1990 was a sharp rise in the imports of oil and petroleum products.
                  <cite className="block mt-6 font-label-caps text-label-caps text-outline not-italic">— ECONOMIC SURVEY, 1991-92</cite>
                </blockquote>
              </div>
              <div className="space-y-8">
                <h3 className="font-headline-md text-primary">Main Causes of the 1990-91 Crisis</h3>
                <ul className="list-disc pl-6 space-y-4 font-body-lg text-body-lg text-on-surface leading-relaxed">
                  <li>
                    <strong>Break-up of the Soviet Bloc:</strong> Rupee trade with the Soviet Bloc was an important element of India’s total trade. The introduction of Glasnost and Perestroika and the break-up of Eastern European countries abruptly terminated several rupee payment agreements, reducing exports to Eastern Europe from 19.3% in 1989 to 10.9% in 1991-92.
                  </li>
                  <li>
                    <strong>Iraq-Kuwait War:</strong> The Gulf crisis in August 1990 rapidly pushed crude oil prices from $15 to $35 per barrel. With Iraq and Kuwait being major sources of India’s oil, the country was forced to buy from the spot market, increasing the oil import bill by about 60%.
                  </li>
                  <li>
                    <strong>Slow Growth of Trading Partners:</strong> Export markets weakened as global growth declined from 4.5% in 1988 to 2.25% in 1991. The U.S., India’s largest export destination, saw its growth fall to -1% in 1991.
                  </li>
                  <li>
                    <strong>Political Uncertainty:</strong> Between November 1989 and May 1991, India saw three coalition governments and three Prime Ministers. This delayed action on the crisis and led to a loss of investor confidence.
                  </li>
                  <li>
                    <strong>Loss of Investors’ Confidence:</strong> Rating agencies like Standard & Poor’s and Moody’s downgraded India’s long-term foreign debt rating to the bottom of the investment grade. Short-term external debt outflows began, and commercial bank financing dried up.
                  </li>
                  <li>
                    <strong>Fiscal Indiscipline:</strong> The gross fiscal deficit of the Central Government remained over 8 percent of GDP since 1985–86, reflecting increasing macroeconomic imbalance.
                  </li>
                  <li>
                    <strong>Increase in Non-oil Imports:</strong> The trends in imports and exports show that imports rose much faster than exports during the eighties. Imports increased by 2.3 percent of GDP, while exports increased by only 0.3 percent of GDP. As a consequence, trade deficit increased from an average of 1.2 percent of GDP in the seventies, to 3.2 percent of GDP in eighties.
                  </li>
                </ul>

                <div className="my-10 space-y-4">
                  <h4 className="font-label-caps text-label-caps font-bold text-on-surface">Oil and Non-Oil Imports (In Rs. Crores)</h4>
                  <div className="overflow-x-auto border border-outline-variant rounded-md">
                    <table className="w-full text-left font-body-md text-on-surface">
                      <thead className="bg-surface-container-low border-b border-outline-variant font-label-caps text-label-caps">
                        <tr>
                          <th className="py-3 px-4 border-r border-outline-variant">Period</th>
                          <th className="py-3 px-4 text-right border-r border-outline-variant">Oil Imports</th>
                          <th className="py-3 px-4 text-right border-r border-outline-variant">Non-Oil Imports</th>
                          <th className="py-3 px-4 text-right">Total Imports</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        <tr className="hover:bg-surface-container-lowest">
                          <td className="py-3 px-4 border-r border-outline-variant whitespace-nowrap">1981-82 to<br/>1985-86</td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">26041.61<br/><span className="text-on-surface-variant text-sm">(32.00)</span></td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">54491.03<br/><span className="text-on-surface-variant text-sm">(68.00)</span></td>
                          <td className="py-3 px-4 text-right">80532.64<br/><span className="text-on-surface-variant text-sm">(100.00)</span></td>
                        </tr>
                        <tr className="hover:bg-surface-container-lowest">
                          <td className="py-3 px-4 border-r border-outline-variant whitespace-nowrap">1986-87 to<br/>1990-91</td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">28299.75<br/><span className="text-on-surface-variant text-sm">(19.00)</span></td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">120796.18<br/><span className="text-on-surface-variant text-sm">(81.00)</span></td>
                          <td className="py-3 px-4 text-right">149095.93<br/><span className="text-on-surface-variant text-sm">(100.00)</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col gap-1 font-caption text-caption text-on-surface-variant italic">
                    <span>Note: Figures in brackets are percent to total.</span>
                    <span>Source: Reserve Bank of India — Handbook of Statistics on Indian Economy, 2005-06</span>
                  </div>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-8">
                  The crisis was heavily fueled by a rise in external debt, which had been funneled into financing the government’s deficit through costlier private sources like external commercial borrowings (ECBs) and NRI deposits. Concessional assistance from multilateral sources declined from 89% in 1980 to 35% in 1990.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  With reserves at a dangerously low $1.2 billion in January 1991, India was on the verge of default. The government’s immediate response was an emergency loan of $2.2 billion from the IMF, secured by pledging 67 tons of gold. The RBI airlifted 47 tons of gold to the Bank of England and 20 tons to the Union Bank of Switzerland. These desperate moves helped tide over the crisis and kick-started P.V. Narasimha Rao’s economic reform process.
                </p>
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
                  <img className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A scanned image of an old Indian newspaper headline from 1991. The paper is yellowed with age, showing 'Rupee Devalued' in bold, black serif typeface. Other smaller articles are visible in the background, creating a layered archival feel. Low saturation, high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0sC1Jbj5v-7uzgSpN3xOSLrv6AR2-flMnpaDPuxayNch8hOgdQdYePoapnTlhdmy0hwRJT87z4uyWGiDgvHf_id5oVLmOwcaqz6NNAAT9z2KtQG7ylTp9Rl2ZBcQ1yvma9j_XZNRjTCLapWx3uBosGrQTVmWk08O6ywe_Yi8JOOjRbP4LoOq78ybcjko03z6-fCo_TlEwrw2szYKSpFt7xMf9ygY9FYNKJbQb42xAdWCioI02Ea9FgsbGdFEcKrYM6mX6Geq1F-0" />
                </div>
                <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block mb-2">DOCUMENT • 01.07.1991</span>
                <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">The Rupee Devaluation Telex</h4>
              </div>
              {/*  Card 2  */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-surface mb-6 p-6 border border-outline-variant flex items-center justify-center transition-all group-hover:bg-white">
                  <img className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A vintage photograph of Dr. Manmohan Singh in 1991, looking solemn at a desk covered with thick files and a rotary phone. The photo is desaturated with deep blacks and ivory whites. He is wearing a simple turban and glasses. The atmosphere is heavy with the burden of office." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjrgE6Pgz5BWMytFH-BMQbc8XE-SPWiSa5F9aO3QG_i36ifVWq3z38YrFEAQrAP5HADW7Hioqe8hc74dNbXlc-94HOk1rGfunqSiZyC37hP6zffRxCrWS19yUogL2-hJXt_3AHRVsN77pmCN0iRoz4kcR96j9N7FzoNX9kcQisEgT2kn_dlv4DbKiwHgsn3unbbkSLGnSum7A9Fb8oNDlpA-fCtfNIx1Oz38QxBqpj1bU2C42aGtiZjig8mwCb6-3tcr5aKCi3tbA" />
                </div>
                <span className="font-label-caps text-[10px] text-outline uppercase tracking-widest block mb-2">PHOTOGRAPH • 22.06.1991</span>
                <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">First Day at North Block</h4>
              </div>
              {/*  Card 3  */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-surface mb-6 p-6 border border-outline-variant flex items-center justify-center transition-all group-hover:bg-white">
                  <img className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A macro shot of a 1991 Indian gold coin or a bar of gold with official government stamps. The image is shot in a museum style, very close up, with shallow depth of field. The lighting is golden but muted, with a dark, moody background. Desaturated colors except for a hint of metallic gold." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGS1K0s_QuFNsQH9khhhgXSWnsOhPb5lSJHRRKUrmLJrnTk-GhBiknR0yVkhxQzK_cwyn-NuXpxvBonNdjQIN41p5wqt3xeGGaGJfxfVLbaipl8PsIU3eL7O4dClu0YKEJAzDWLiQ_hFm3lzqq4jKgtnEG05hGHDDYQvtZBxZ3NN1yzZO7oN-ACyxSOFqCbwYhsFc2ykKtTIjQ8oOdgdUY7l96CJSPUMVtUzJA0bHiq8Et_gzj4-xLx3O6bIQK-5kd-w8j22X8E5c" />
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
