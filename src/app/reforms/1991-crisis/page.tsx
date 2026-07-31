import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/*  Section 1: Hero Editorial Header  */}
        <section className="relative w-full px-margin-mobile lg:px-margin-desktop pt-12 pb-12 flex flex-col items-center text-center">
          
          {/*  Featured Archival Image with Matting  */}
          
        </section>
        {/*  Section 2: Narrative Content  */}
        <section className="w-full bg-surface pt-8 pb-24 px-margin-mobile lg:px-0">
          
            {/*  Center Column: The Story  */}
            <div className="max-w-[720px] mx-auto flex flex-col gap-12">
              <div className="space-y-8">
                <h1 className="font-display-lg text-4xl text-primary font-bold">1991 Crisis</h1>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Towards the end of 1980s, India was facing a Balance of Payments (BoP) crisis, due to unsustainable borrowing and high expenditure. The Current Account Deficit (3.5 percent) in 1990-91 massively weakened the ability to finance deficit.
                </p>

                <h3 className="font-headline-md text-primary font-bold">Macroeconomic Indicators and Balance of Payments Situation in 1990-1991:</h3>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The trade deficit increased from Rs. 12,400 crore in 1989-90 to Rs. 16,900 crore in 1990-91.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The current account deficit increased from Rs. 11,350 crore in 1989-90 to Rs. 17,350 crore in 1990-91.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The CAD/GDP ratio increased from 2.3 in 1989-90 to 3.1 percent in 1990-91. Besides this, the fiscal deficit to GDP ratio was more than 7 percent during the two years 1989-90 and 1990-91. The foreign exchange reserves, meant to cover import costs for two years (1989-1991),were just sufficient to cover close to two and half months of imports.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The average rate of inflation was 7.5 percent in 1989-90, which went up to 10 percent in the year 1990-91. In 1991-92, it crossed 13 percent. The GDP growth rate which was 6.5 percent in 1989-90, went down to 5.5 percent in 1990-91.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The Balance of Payments crisis also affected the performance of industrial sector. The average industrial growth rate was 8 percent in the second half of 1980s. In 1989-90, it was 8.6 percent and in 1990-91 it was 8.2 percent.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  India's foreign exchange reserves stood at Rs. 5,277 crore on 31 December 1989, which declined to Rs. 2,152 crore by the end of December 1990. Between May and July 1991, these reserves ranged between Rs. 2,500 crore to 3,300 crore.
                </p>
                
                <h3 className="font-headline-md text-primary font-bold mt-12">1991 Economic Crisis:</h3>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  The main causes behind the Balance of Payments crisis of 1990-91 were as follows:
                </p>
                <ul className="list-disc pl-6 space-y-4 font-body-lg text-body-lg text-on-surface leading-relaxed">
                  <li>
                    <strong>Break-up of the Soviet Bloc:</strong> Rupee trade (payment for trade was made in rupees) with the Soviet Bloc was an important element of India's total trade up to the 1980s. However, the introduction of Glasnost and Perestroika and the break-up of the Eastern European countries led to termination of several rupee payment agreements in 1990-91. As a consequence, the flow of new rupee trade credits declined abruptly in 1990-91. Further, there was also a decline in our exports to Eastern Europe—these exports constituted 22.1 percent of total exports in 1980 and 19.3 percent in 1989; but they declined to 17.9 percent in 1990-91 and further to 10.9 percent in 1991-92.
                  </li>
                  <li>
                    <strong>Iraq-Kuwait War:</strong> The Gulf crisis began with the invasion of Kuwait by Iraq at the beginning of August 1990. Crude oil prices rose rapidly thereafter—from USD 15 per barrel in July 1990 to USD 35 per barrel in October 1990. Iraq and Kuwait were the major sources of India's oil imports and the war made it necessary to buy oil from the spot market. Short term purchases from the spot market had to be followed up by new long term contracts at higher prices. As a result, the oil import bill increased by about 60 percent in 1990-91 and remained 40 percent above the 1989-90 level the next year. As noted in Economic Survey (1991-92):
                    <div className="mt-2 italic">"The immediate cause of the loss of reserves beginning in September 1990 was a sharp rise in the imports of oil and petroleum products (from an average of $ 287 million in June-August 1990, petroleum products imports rose sharply to $ 671 million in 6 months). This accounted for rise in trade deficit from an average of $ 356 million per month in June-August 1990 to $ 677 million per month in the following 6 months."</div>
                  </li>
                  <li>
                    <strong>Slow Growth of Important Trading Partners:</strong> The deterioration of the current account was also induced by slow growth in economies of important trading partners. Export markets were weak in the period leading up to India's crisis, as the world growth declined steadily from 4.5 percent in 1988 to 2.25 percent in 1991. The decline was even greater for the U.S., India's single largest export destination. In the United States, growth fell from 3.9 percent in 1988 to 0.8 percent in 1990 and to -1 percent in 1991.
                  </li>
                  <li>
                    <strong>Political Uncertainty and Instability:</strong> The period from November 1989 to May 1991 was marked with political uncertainty and instability in India. In fact, within a span of one and half years there were three coalition governments and three Prime Ministers. This led to delay in tackling the ongoing balance of payment crisis, and also led to a loss of investor confidence.
                  </li>
                  <li>
                    <strong>Loss of Investors' Confidence:</strong> The widening current account deficits and reserve losses contributed to low investor confidence, which was further weakened by political uncertainty. This was aggravated by the downgrade of India's credit rating by credit rating agencies. By March 1991, the international Credit Rating agencies Standard & Poor's, and Moody's, had downgraded India's long term foreign debt rating to the bottom of investment grade. Due to the loss of investors' confidence, commercial bank financing became hard to obtain, and outflows began to take place on short-term external debt, as creditors became reluctant to roll over maturing loans.
                  </li>
                  <li>
                    <strong>Fiscal Indiscipline:</strong> The Economic Survey (1991-92) had categorically remarked that:
                    <div className="mt-2 italic">"Throughout the eighties, all the important indicators of fiscal imbalances were on the rise. These were the conventional budgetary deficit, the revenue deficit, the monetized deficit and gross fiscal deficit. Moreover, the concept of fiscal deficit is a more complete measure of macroeconomic imbalance as it reflects the indebtedness of the Government. This gross fiscal deficit of the Central Government has been more than 8 percent of GDP since 1985 – 86, as compared with 6 percent in the beginning of 1980s and 4 percent in the mid – 1970s."</div>
                  </li>
                  <li>
                    <strong>Increase in Non-oil Imports:</strong> The trends in imports and exports show that imports rose much faster than exports during the eighties. Imports increased by 2.3 percent of GDP, while exports increased by only 0.3 percent of GDP. As a consequence, trade deficit increased from an average of 1.2 percent of GDP in the seventies, to 3.2 percent of GDP in eighties.
                  </li>
                </ul>

                <div className="my-10 space-y-4">
                  <h4 className="font-label-caps text-label-caps font-bold text-on-surface">Oil and Non- Oil Imports (In Rs. Crores)</h4>
                  <div className="overflow-x-auto border border-outline-variant rounded-md">
                    <table className="w-full text-left font-body-md text-on-surface">
                      <thead className="bg-surface-container-low border-b border-outline-variant font-label-caps text-label-caps">
                        <tr>
                          <th className="py-3 px-4 border-r border-outline-variant">Period</th>
                          <th className="py-3 px-4 text-right border-r border-outline-variant">Oil Imports</th>
                          <th className="py-3 px-4 text-right border-r border-outline-variant">Non – Oil Imports</th>
                          <th className="py-3 px-4 text-right">Total Imports</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        <tr className="hover:bg-surface-container-lowest">
                          <td className="py-3 px-4 border-r border-outline-variant whitespace-nowrap">1981- 82 to<br/>1985 - 86</td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">26041.61<br/><span className="text-on-surface-variant text-sm">(32.00)</span></td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">54491.03<br/><span className="text-on-surface-variant text-sm">(68.00)</span></td>
                          <td className="py-3 px-4 text-right">80532.64<br/><span className="text-on-surface-variant text-sm">(100.00)</span></td>
                        </tr>
                        <tr className="hover:bg-surface-container-lowest">
                          <td className="py-3 px-4 border-r border-outline-variant whitespace-nowrap">1986 – 87 to<br/>1990 - 91</td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">28299.75<br/><span className="text-on-surface-variant text-sm">(19.00)</span></td>
                          <td className="py-3 px-4 text-right border-r border-outline-variant">120796.18<br/><span className="text-on-surface-variant text-sm">(81.00)</span></td>
                          <td className="py-3 px-4 text-right">149095.93<br/><span className="text-on-surface-variant text-sm">(100.00)</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col gap-1 font-caption text-caption text-on-surface-variant">
                    <span>Note: Figures in brackets are percent to total .</span>
                    <span>Source: Reserve Bank of India – Handbook of Statistics on Indian Economy, <br/>2005 – 06</span>
                  </div>
                </div>

                <ul className="list-disc pl-6 space-y-4 font-body-lg text-body-lg text-on-surface leading-relaxed">
                  <li>
                    <strong>Rise in External Debt:</strong> In the second half of the 1980s, the current account deficit was showing a rising trend and was becoming unsustainable. An important issue was the way in which this deficit was being financed. The current account deficit was mainly financed with costly sources of external finance such as external commercial borrowings, NRI deposits, etc.<br/>
                    In the context of external debt the following observations are worth considering:0
                    <ul className="list-circle pl-6 mt-2 space-y-2 text-base" style={{ listStyleType: "circle" }}>
                      <li>The period of eighties was marked by a reduction in flows of concessional assistance to India, principally from the World Bank Group. In 1980, disbursements on concessional terms constituted more than 89 percent of assistance to India from multilateral sources; in 1990, this proportion declined to about 35 percent</li>
                      <li>Due to a decline in concessional assistance there was a rise in average interest cost of external borrowing</li>
                      <li>There was a change in the composition of debt as it shifted from official (like bilateral sources) to private sources like external commercial borrowings (ECBs) and NRI deposits. These private sources were costlier</li>
                      <li>The external debt was funneled into financing the government's deficit</li>
                      <li>India's external debt increased from Rs. 194.70 crore (USD 23.50 billion) in 1980-81 to Rs. 459.61 crore (USD 37.50 billion) in 1985 – 86. It went up to Rs. 1,003.76 crore (USD 58.63 billion) in 1989-90. In 1990-91, it was Rs. 1,229.50 crore (USD 63.40 billion)</li>
                    </ul>
                  </li>
                </ul>

                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Thus, the balance of payments situation came to the verge of collapse in 1991, mainly because the current account deficits were mainly financed by borrowing from abroad. The economic situation of India was critical; the government was close to default. With India's foreign exchange reserves at USD 1.2 billion in January 1991 and depleted by half by June, an amount barely enough to cover roughly three weeks of essential imports, India was only weeks way from defaulting on its external balance of payment obligations.
                </p>

                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Government of India's immediate response was to secure an emergency loan of USD 2.2 billion from the International Monetary Fund by pledging 67 tons of India's gold reserves as collateral. The Reserve Bank of India had to airlift 47 tons of gold to the Bank of England and 20 tons of gold to the Union Bank of Switzerland to raise USD 600 million.
                </p>

                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  These moves helped tide over the balance of payment crisis temporarily and kick-started P V Narasimha Rao's economic reform process.
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
