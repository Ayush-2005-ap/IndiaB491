import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Hero Section  */}
<section className="relative px-margin-mobile lg:px-0 max-w-[1120px] mx-auto pt-32 pb-24 lg:pt-48 lg:pb-40">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
<div className="w-full lg:w-[55%] z-10 relative">
<h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary mb-10 max-w-2xl">
          A Digital Ledger of Life <br className="hidden lg:block"/> 
          During the <span className="italic text-secondary">License Raj</span>.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          India Before &apos;91 is a curated repository dedicated to preserving the domestic realities of a pre-liberalized economy. Through personal narratives and archival artifacts, we document the era of scarcity, resilience, and the singular cultural fabric that preceded the 1991 reforms.
        </p>
</div>
<div className="w-full lg:w-[45%] relative flex justify-end">
<div className="relative w-full max-w-md bg-surface-container border border-outline-variant p-3 lg:p-4 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 z-10">
<img src="/IndiaB491.png" alt="India Before 1991 Collage" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
</div>
<div className="hidden lg:block absolute -right-12 top-12 [writing-mode:vertical-rl] text-outline font-label-caps text-label-caps uppercase tracking-[0.3em] opacity-40 z-0">
          ESTABLISHED MMXXIV — ARCHIVAL PRESERVATION
        </div>
</div>
</div>
</section>
{/*  Stat Counters  */}
<section className="border-y border-outline-variant bg-surface-container-low">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-outline-variant">
<div className="py-12 px-8 flex flex-col gap-2">
<span className="font-display-lg text-display-lg text-primary" data-counter="842">0</span>
<span className="font-label-caps text-label-caps text-on-secondary-fixed-variant uppercase tracking-widest">Video Stories</span>
</div>
<div className="py-12 px-8 flex flex-col gap-2 border-r lg:border-r-0">
<span className="font-display-lg text-display-lg text-primary" data-counter="3150">0</span>
<span className="font-label-caps text-label-caps text-on-secondary-fixed-variant uppercase tracking-widest">News Clippings</span>
</div>
<div className="py-12 px-8 flex flex-col gap-2 border-t lg:border-t-0">
<span className="font-display-lg text-display-lg text-primary" data-counter="128">0</span>
<span className="font-label-caps text-label-caps text-on-secondary-fixed-variant uppercase tracking-widest">Cartoons & Ads</span>
</div>
<div className="py-12 px-8 flex flex-col gap-2 border-t lg:border-t-0">
<span className="font-display-lg text-display-lg text-primary" data-counter="28">0</span>
<span className="font-label-caps text-label-caps text-on-secondary-fixed-variant uppercase tracking-widest">States Represented</span>
</div>
</div>
</div>
</section>
{/*  Featured Story  */}
<section className="py-32 px-margin-mobile lg:px-0 max-w-[1120px] mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-24">
<div className="w-full lg:w-1/2 relative">
<div className="p-4 bg-surface-container border border-outline-variant">
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90" data-alt="A desaturated, high-contrast black and white archival photograph of an elderly Indian man sitting on a wooden bench outside a government office in 1980. The lighting is harsh, casting deep shadows. He is holding a stack of worn papers. The image has a subtle film grain and a 1px navy border matting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAykkDUF4mmNN1An6KrNkBu05tc7Rd1kk_4z0CylFrL9DjIx67GEKjKl3Jcm14-dlQIQPE5xPvI8xwd-xjKB8fwKhr2KtecyFq665-Nqm97JxUYOv9_kYdRNMlGuPs7DkPtZVnwVtTXyfJSB1jE0o-RX-TaqrQ6Lo1vzXAgKUP6FnMdfnoCYDmtDOlWKu9JXr3csiv5aWO_J1yuZn_0ffaffNDgjwzBYyHYCaY2phRPW6oqA7dLs1FhHUSWCybvSWHSLdCJozp-TzQ"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-8 hidden lg:block">
<span className="font-label-caps text-label-caps uppercase block mb-2 opacity-70">Featured Contributor</span>
<p className="font-headline-sm text-headline-sm">Mr. Arvind Kejriwal (Retd.)</p>
</div>
</div>
<div className="w-full lg:w-1/2 flex flex-col gap-8">
<div className="w-16 h-px bg-secondary"></div>
<h2 className="font-headline-md text-headline-md text-primary italic">"The two-year wait for a telephone connection taught us a different kind of patience."</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant italic">
          "I remember walking to the local P&T office every month for eighteen months, just to check my status on the registry. We didn't complain; we simply understood that the state moved at its own pace. The day the instrument arrived was like a festival in our neighborhood."
        </p>
<a className="flex items-center gap-4 group" href="#">
<span className="font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-1">Read the full testimony</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
</a>
</div>
</div>
</section>
{/*  Explore the Archive  */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
<div className="flex justify-between items-end mb-16">
<h2 className="font-display-lg text-display-lg-mobile lg:text-headline-md text-primary">Explore the Archive</h2>
<span className="font-label-caps text-label-caps text-outline uppercase pb-2">By Format</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
{/*  Tile 1  */}
<a className="group block" href="#">
<div className="mb-6 overflow-hidden bg-surface-dim">
<img className="w-full aspect-video object-cover grayscale group-hover:scale-105 transition-transform duration-700" data-alt="A muted, sepia-toned still from a 1970s 8mm home movie showing an Indian family celebrating a birthday. The image is blurry, nostalgic, and framed with a 1px hairline border. 10% saturation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1mT33tm7P8gxGMPQ4mqm_nerKmHr6Bmfpc-SPBb-_h3ilkqyGiua-Fi7fx4gwACHYvVquEk4HBQZu1HzSWlt1o_vMQvBM2G-Idk-CZ9Fp_9Px94YL86c_holK8O7fiZigccinLCjmIU5aeS8Dhc65Zic1QBxkTKy5w8Dd_CMm9HS20V-tiES3KTDsVU8MRkoQd4MBmQ1_UhIS9Sx6oca-qnGq1JFo_yRoHLP2XHEoonyhBtOKsVGKNKQSvgpm6ho_i586lh2m8uM"/>
</div>
<h3 className="font-headline-sm text-headline-sm mb-3 group-hover:text-secondary transition-colors">Video Stories</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Oral histories captured on film, documenting personal struggles and triumphs within the bureaucratic maze.</p>
</a>
{/*  Tile 2  */}
<a className="group block" href="#">
<div className="mb-6 overflow-hidden bg-surface-dim">
<img className="w-full aspect-video object-cover grayscale group-hover:scale-105 transition-transform duration-700" data-alt="Close up of a yellowed newspaper clipping from The Times of India, dated 1984. The headline mentions import restrictions. Sharp focus on the typography of the era. Desaturated tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWsYSZNVPKbEgwnYa1AOQjO_i_JFr52zUtRUHK424Lca6SFkaNwpYT5grzaAhC3Zw22LZ6QLH3XgpXOpo87MHVP6UiLgh9oGYtZUYgRAbERZoKjpwSdIeXWT9vIaVxWdHqyVFnuqTye8byugK5axN4TXD4uHn6dpUz6eWud0DRAqcC4kUonUthaGc8r7rCShu1NLrQCZ0aOESLP8IeOZ9nt7xzhR5BiyNPHbkngBrKPRLCUy3WlKtMuEVb-hNLi1GjjDQ84QeqcE"/>
</div>
<h3 className="font-headline-sm text-headline-sm mb-3 group-hover:text-secondary transition-colors">News Clippings</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Scanning the headlines of a controlled economy—from policy shifts to the daily price of essential commodities.</p>
</a>
{/*  Tile 3  */}
<a className="group block" href="#">
<div className="mb-6 overflow-hidden bg-surface-dim">
<img className="w-full aspect-video object-cover grayscale group-hover:scale-105 transition-transform duration-700" data-alt="A vintage Indian print advertisement for a Vespa scooter or an Ambassador car from 1975. Muted colors, classic serif typography, and a hand-drawn illustration style. Desaturated aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGLEVMvubpYDhhDbTQiV-uWaaBU5vwIkm-VbrVWQqWlgeBDyM4bh3DCjoblCtfaHMgryl1YAE97pyT-d1Qcj1kAbmQ403QJ0aDptsznwc5GyExgvMjL-RP1c7qdDu1gGr_6hlAwCWfqMIp7baK2_PcfF_92tiHjq7GydzmhOolJfFrjstEiuMteXBX9rJKkYf6kpq7AeCk-npnSHSLoB3mMMf4e_fTN9bJOT-QPZ9Hr06dMMtiNDAE7qzE23DNYQtExZd6_vhqEw4"/>
</div>
<h3 className="font-headline-sm text-headline-sm mb-3 group-hover:text-secondary transition-colors">Cartoons & Ads</h3>
<p className="font-body-md text-body-md text-on-surface-variant">The wit of R.K. Laxman and the aspirational marketing of a limited marketplace, preserved in high resolution.</p>
</a>
</div>
</div>
</section>
{/*  Understand the Era  */}
<section className="py-16 border-t border-outline-variant">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-6">
<span className="font-label-caps text-label-caps text-outline uppercase">Contextual Essays</span>
<div className="h-px w-12 bg-outline-variant"></div>
<a className="font-body-lg text-body-lg text-primary hover:text-secondary flex items-center gap-3 transition-colors" href="#">
          Why the year 1991 changed everything
          <span className="material-symbols-outlined text-sm">north_east</span>
</a>
</div>
<a className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors" href="#">
        View Full Timeline
        <span className="material-symbols-outlined">trending_flat</span>
</a>
</div>
</section>

</div>
    </>
  );
}
