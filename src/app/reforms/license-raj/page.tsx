import Link from 'next/link';

export default function ReformPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/*  Header Section  */}
        <section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 pt-16 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-secondary mb-4 tracking-[0.2em] uppercase">The Era of Control</span>
              <h1 className="font-display-lg text-display-lg text-primary">License Raj</h1>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="font-caption text-caption text-outline mb-1 italic">Chronicle Phase I</span>
              <span className="font-body-md text-headline-sm text-on-surface-variant border-b border-secondary/30 pb-1">Pre-1980</span>
            </div>
          </div>
          <div className="w-full h-hairline bg-secondary-fixed-dim mt-8 opacity-40"></div>
        </section>
        {/*  Main Editorial Content  */}
        <section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 grid grid-cols-12 gap-gutter">
          {/*  Left Column: Editorial Content  */}
          <article className="col-span-12 lg:col-span-8 lg:col-start-3 max-w-[680px] mx-auto">
            <div className="font-body-lg text-body-lg text-on-surface space-y-8 leading-relaxed">
  <p className="first-letter:text-7xl first-letter:font-display-lg first-letter:mr-3 first-letter:float-left first-letter:text-primary">
    In 1947, India was a new country racked by pains of the Partition and the dire poverty of her people. Nonetheless, the Indian Constitution bestowed the right to vote to every adult, making her the first democracy to guarantee universal adult franchise at birth. The Constitution protected basic personal freedoms of movement, assembly, conscience and expression. So in terms of political and personal freedoms, India was a constitutional republic or a liberal democracy from her birth. This was a great achievement.
  </p>
  <p>
    For economic arrangements, the Constitutional Assembly considered the idea of declaring India a socialist nation. However it rejected the idea, largely on the argument by Dr Ambedkar that economic system should be left free to adjust to the changing demands of the people and the Assembly should not bind the people to any one type economic system forever.
  </p>
  <p>
    However, socialism was not just in the air but also in the hearts and minds of most intellectuals and political leaders. Unlike in the Soviet Union and China that abolished private property and put the government directly in charge of all economic affairs, India followed a middle path. The Indian state implemented central planning with myriad controls over prices and quantities to achieve a “socialist pattern of society.”
  </p>

  <blockquote className="my-16 pl-8 border-l-2 border-secondary py-4">
    <p className="font-headline-md text-headline-md italic text-primary leading-tight">
      Rajaji, the founder of the first market friendly political party, the Swatantra Party, in late 1950s coined the term “Quota-Permit-License Raj” to describe the Indian model of socialism.
    </p>
  </blockquote>

  <h2 className="font-headline-md text-primary mt-12 mb-6">Development of the License Raj</h2>
  <ul className="list-disc pl-6 space-y-4">
    <li><strong>Industrial Policy Resolution, 1948:</strong> government monopoly was established in armaments, atomic energy, railroads, minerals, iron & steel industries, aircraft, manufacturing, ship building and telephone and telegraph equipment.</li>
    <li><strong>Industrial Policy Resolution, 1956:</strong> extended the preserve of the government from 17 industries to a further 12 industries.</li>
    <li><strong>1956:</strong> Life Insurance business nationalized.</li>
    <li><strong>1969:</strong> Large commercial banks nationalized.</li>
    <li><strong>Monopolies and Restrictive Trade Practices Act, 1970:</strong> designed to provide the government with additional information on the structure and investments of all firms with assets of more than Rs 200 million, to strengthen the licensing system. This was done in order to decrease the concentration of private economic power, and to place restraints on business practices considered contrary to public interest.</li>
    <li><strong>1973:</strong> General Insurance business nationalized.</li>
    <li>Over the years, the central and state governments formed agencies and companies engaged in finance, trading, mineral exploitation, manufacturing, utilities and transportation like Hindustan Insecticides, Ashoka Hotel Corporation, Tyre Corporation of India, Air India, GAIL, SAIL, ONGC, etc.</li>
  </ul>

  <h2 className="font-headline-md text-primary mt-12 mb-6">Key features of the License Raj</h2>
  <ul className="list-disc pl-6 space-y-4">
    <li>Licenses were required for starting new companies, for producing new products or expanding production capacities.</li>
    <li>Businesses had to have government approval for laying off workers and for shutting down.</li>
    <li>Virtually shut off imports with high tariffs, low import quotas and outright banning of import of certain products. For example, the import tariff for cars was around 125% in 1960.</li>
    <li>India in 1985 had the highest level of tariffs in the world. Nominal tariff rates as percentage of values in 1985 were: 146.4 percent for intermediate goods; 107.3 percent for capital goods; 140.9 percent for consumer goods and 137.7 percent on manufacturing goods.</li>
    <li>In addition to over-regulating the private sector the Government of India nationalized heavy industry (the commanding heights of the economy) and built new state-owned enterprises (SOEs) in areas as diverse as jute mills to hotels to steel plants.</li>
  </ul>

  <h2 className="font-headline-md text-primary mt-12 mb-6">Impact of the License Raj</h2>
  <p className="mb-4">The following table shows the difference in growth rate of the Indian economy as compared to that of other countries in Asia:</p>

  <div className="overflow-x-auto my-8">
    <table className="w-full text-left border-collapse border border-outline-variant">
      <thead className="bg-surface-container-low font-label-caps text-label-caps uppercase text-outline">
        <tr>
          <th className="border border-outline-variant p-4 font-normal text-on-surface-variant" rowSpan={2}>Country</th>
          <th className="border border-outline-variant p-4 font-normal text-center text-on-surface-variant" colSpan={2}>Growth Rate of Industrial Production (%)</th>
          <th className="border border-outline-variant p-4 font-normal text-center text-on-surface-variant" colSpan={2}>GDP (%)</th>
        </tr>
        <tr>
          <th className="border border-outline-variant p-2 font-normal text-center text-on-surface-variant">1960-1980</th>
          <th className="border border-outline-variant p-2 font-normal text-center text-on-surface-variant">1980-1988</th>
          <th className="border border-outline-variant p-2 font-normal text-center text-on-surface-variant">1960-1980</th>
          <th className="border border-outline-variant p-2 font-normal text-center text-on-surface-variant">1980-1988</th>
        </tr>
      </thead>
      <tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant">
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4 font-semibold text-primary">India</td><td className="border border-outline-variant p-4 text-center">4.6</td><td className="border border-outline-variant p-4 text-center">7.6</td><td className="border border-outline-variant p-4 text-center">3.5</td><td className="border border-outline-variant p-4 text-center">5.4</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">South Korea</td><td className="border border-outline-variant p-4 text-center">15.2</td><td className="border border-outline-variant p-4 text-center">12.6</td><td className="border border-outline-variant p-4 text-center">8.8</td><td className="border border-outline-variant p-4 text-center">10.1</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Taiwan</td><td className="border border-outline-variant p-4 text-center">12.8</td><td className="border border-outline-variant p-4 text-center">7.2</td><td className="border border-outline-variant p-4 text-center">9.6</td><td className="border border-outline-variant p-4 text-center">7.4</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Singapore</td><td className="border border-outline-variant p-4 text-center">12.1</td><td className="border border-outline-variant p-4 text-center">4.5</td><td className="border border-outline-variant p-4 text-center">9.2</td><td className="border border-outline-variant p-4 text-center">6.9</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Pakistan</td><td className="border border-outline-variant p-4 text-center">8.0</td><td className="border border-outline-variant p-4 text-center">7.2</td><td className="border border-outline-variant p-4 text-center">4.4</td><td className="border border-outline-variant p-4 text-center">6.3</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Thailand</td><td className="border border-outline-variant p-4 text-center">10.3</td><td className="border border-outline-variant p-4 text-center">6.6</td><td className="border border-outline-variant p-4 text-center">7.4</td><td className="border border-outline-variant p-4 text-center">6.5</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Hong Kong</td><td className="border border-outline-variant p-4 text-center">10.3</td><td className="border border-outline-variant p-4 text-center">7.5</td><td className="border border-outline-variant p-4 text-center">9.9</td><td className="border border-outline-variant p-4 text-center">7.4</td></tr>
        <tr className="hover:bg-surface-container transition-colors"><td className="border border-outline-variant p-4">Indonesia</td><td className="border border-outline-variant p-4 text-center">8.9</td><td className="border border-outline-variant p-4 text-center">5.1</td><td className="border border-outline-variant p-4 text-center">5.9</td><td className="border border-outline-variant p-4 text-center">5.7</td></tr>
      </tbody>
    </table>
  </div>
</div>
            {/*  Navigation Link  */}
            <div className="mt-24 pt-8 border-t border-outline-variant flex justify-end">
              <a className="group flex items-center gap-4 hover:gap-6 transition-all duration-300" href="#">
                <div className="text-right">
                  <span className="block font-label-caps text-label-caps text-outline uppercase tracking-widest">Next Chapter</span>
                  <span className="block font-headline-sm text-headline-sm text-primary">Continue to 1980–1990</span>
                </div>
                <span className="material-symbols-outlined text-3xl text-secondary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>
          </article>
        </section>
        {/*  Related Content Section  */}
        <section className="w-full bg-surface-container-lowest mt-32 py-24 border-t border-outline-variant">
          <div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-hairline w-12 bg-secondary"></div>
              <h3 className="font-label-caps text-label-caps tracking-[0.3em] uppercase text-primary">From the Archives</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/*  Card 1  */}
              <div className="flex flex-col gap-6 group">
                <div className="aspect-[4/5] overflow-hidden border border-outline-variant p-4 bg-white">
                  <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
                    <img className="w-full h-full object-cover" data-alt="A desaturated, high-contrast archival photograph of a vintage Indian factory floor from the 1970s. Workers in traditional attire operate heavy machinery. The lighting is dramatic, with dust motes caught in shafts of sunlight. The style is classic photojournalism, reminiscent of mid-century life magazine spreads." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9-YoBeqDbgKJU37SHiCC_UM1FFFk7W28Rzdp7ZJPD5kkS0AODgxdNfeoNFF96g9VSvICsv7aEeGWHFF37f9cqq7WMRXeWG776bV595al23iOBbB19CpwjykGqOl53fPeX7Jp2qNJ7V9Jf5ZkeTWbDhkF5GqFwY3KF0zc7uNHmUrxPIwgJmqO3EAI53VTbqctUZYa_dbFh3FYDxG3rSTyW0PmVzykULfhfuL_7qx_SUekRGqQMA08EVKGByIf1GqY9LF_mZttWLGY" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-tighter">Photography • 1972</span>
                  <h4 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors">The Steel Plants of Bhilai</h4>
                  <p className="font-caption text-caption text-on-surface-variant line-clamp-2">A visual study of the state-led industrial giants that defined the public sector's commanding heights.</p>
                </div>
              </div>
              {/*  Card 2  */}
              <div className="flex flex-col gap-6 group">
                <div className="aspect-[4/5] overflow-hidden border border-outline-variant p-4 bg-white">
                  <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
                    <img className="w-full h-full object-cover" data-alt="An old, yellowing government application form from the 1960s with several official red ink stamps and handwritten signatures in fountain pen. The paper has deckled edges and a visible grain. The composition is flat-lay, emphasizing the complexity of bureaucratic paperwork." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXlVQ2KS0sBVVLG_hQX0eG37ZoLfUUQwlplaYNUFQvpP5Ck-RxcFqrL2mncjpTdCbK2tRxeHDpl16tCmlFSv0ZtLAMCL0xth2LIGGxu2KYr0IOGST38uv9LvxswOlqsae87itd5Qvmk3yWnsIG3nBGADj9bY1Yo3kxIoAoig45wJw-R-gEzCuj6BiIZtt5sqDlf112H1yjeCk__zoVI46EvQHn7uJ5Ro0yHYtKYk-4RLLPTJ-vThi34L8mvgCwAj8--22iVfELezA" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-tighter">Document • 1968</span>
                  <h4 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors">The Paperwork of Progress</h4>
                  <p className="font-caption text-caption text-on-surface-variant line-clamp-2">Exploring the 14-page application required just to import basic specialized industrial components.</p>
                </div>
              </div>
              {/*  Card 3  */}
              <div className="flex flex-col gap-6 group">
                <div className="aspect-[4/5] overflow-hidden border border-outline-variant p-4 bg-white">
                  <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700">
                    <img className="w-full h-full object-cover" data-alt="A grainy, black and white street scene of 1970s New Delhi. A long queue of people stands patiently outside a government distribution office. Classic Ambassador cars and cycles line the road. The atmosphere is quiet, orderly, and characterized by the patience of a bygone era." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVzJNAwrmWWqe0ZXg6gjkfKxHMJ5GMwxDxigQpcVUBEN_Xyi5zJYzMfp-oSKf2XArlJpbIuIJ_dSUwnDQRaoiBCzN_U7shvPYuKut9D9WRkZllGQahwszdtmHu_6MW0N-sV3lLeszuUuWOQF6Mt-Fbe2__iA9L5aUI8BfwJoehQTkSutlx8_ddWJTocJ_mR_stoSGQQzYr7IbCuJslP5sZHbIVSHxI0dGg0Ff2fK14pSRhVenCaZ8XcXOVIaummhOLOCX_lc3VJao" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-tighter">Social History • 1975</span>
                  <h4 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors">The Long Wait</h4>
                  <p className="font-caption text-caption text-on-surface-variant line-clamp-2">Candid street photography capturing the ubiquitous 'queuing culture' of the pre-reform years.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive Scroll Progress  */}
        <div className="fixed bottom-0 left-0 h-1 bg-secondary z-50 transition-all duration-150" id="scroll-progress" style={{ width: "0%" }}></div>

      </div>
    </>
  );
}
