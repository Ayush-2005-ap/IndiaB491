import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Header Section  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-16 lg:py-24">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant pb-12">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">Archive Collection</span>
<h1 className="font-display-lg text-display-lg text-primary mb-6">Video Stories</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          A living record of personal narratives and oral histories. These testimonies capture the lived experience of India's economic landscape prior to the 1991 liberalization, preserved in high-fidelity digital clarity.
        </p>
</div>
<div className="flex flex-col items-end">
<span className="font-label-caps text-label-caps text-outline mb-2">Total Records</span>
<span className="font-headline-md text-headline-md text-primary">1,284</span>
</div>
</div>
</section>
{/*  Filter Bar  */}
<section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0 py-6">
<div className="flex flex-wrap items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-12">
{/*  State Dropdown  */}
<div className="group relative cursor-pointer">
<div className="flex items-center gap-2 pb-1 border-b border-outline group-hover:border-primary transition-colors">
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary uppercase">State</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
</div>
{/*  Sector Dropdown  */}
<div className="group relative cursor-pointer">
<div className="flex items-center gap-2 pb-1 border-b border-outline group-hover:border-primary transition-colors">
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary uppercase">Sector</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
</div>
{/*  Decade Dropdown  */}
<div className="group relative cursor-pointer">
<div className="flex items-center gap-2 pb-1 border-b border-outline group-hover:border-primary transition-colors">
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary uppercase">Decade</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="font-label-caps text-[10px] text-outline uppercase mr-2">Active Filters:</span>
<div className="px-3 py-1 border border-primary flex items-center gap-2 rounded-full">
<span className="font-label-caps text-[11px] text-primary">Maharashtra</span>
<span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
</div>
<div className="px-3 py-1 border border-outline flex items-center gap-2 rounded-full">
<span className="font-label-caps text-[11px] text-on-surface-variant">Manufacturing</span>
<span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
</div>
<button className="text-label-caps font-label-caps text-outline hover:text-primary transition-colors underline underline-offset-4 ml-4">Clear All</button>
</div>
</div>
</div>
</section>
{/*  Video Grid  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
{/*  Video Card 1  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="A desaturated, cinematic archival-style video still of an elderly man sitting in a sun-drenched library in Pune. The lighting is soft and directional, casting long shadows. 1980s aesthetic, grainy texture, high contrast, muted earth tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBihqazliqpuJREao12G1qB4kYJSJuBVw8Hcz6SfYaHZpyWS_mPASkbZyaRVb4tT9MjT7i0dt-lGN5VTS28N7foQS6clMLMq_T7oyxGfPPDGzpi3gmaONonQ664Fvk0so8tl1GNy_Pdiro_MD-eys2OSpOSnTSt0Itozx_ua3wrxeLmdegIwmJtAxs_wHs0k14AzuhJyeJf2mzfnomq_VwOTB7W35qi_duA2mxTX6nUvoMI7AQynNSs0FQrDiOY__dhvZs_5ezm3s0"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">12:42</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">The License Raj in Textile Mills</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Dr. Ramesh Kulkarni</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Maharashtra</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1970s</span>
</div>
</div>
</div>
</div>
{/*  Video Card 2  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="A grainy, black and white archival still of a bustling marketplace in old Delhi. High contrast sunlight, people in traditional 1980s attire. Shadows are deep, highlights are soft. Muted grey tones with a hint of warm sepia." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKnd-ycLx-f8f7Fw_XxDdkWW-Npq0Es2LqZvjSy9yFNxPqSWQl62iALZx1fhp53vFweGMSv_76gM6zrVv7CKfQ3EuMD5pJu9lUyBrjQiGzDF7deDrDCrJgtUI6z7onEeHaH1htKLaRi43Nn9tvq8pGadx2MG7JkWfhh_RKP13xuTgRKtuqYdbnNqA_x-ZkfezJ5uMgLPpbcMc-shcqhJAO0DvoN6RpL-LfPhiHa40rlQA4Z1hyr48eqN389h7GyF4POe6r4x1Np_E"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">08:15</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Trading Under Quotas</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Sushila Devi</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Delhi</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1980s</span>
</div>
</div>
</div>
</div>
{/*  Video Card 3  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="A nostalgic archival video frame showing a family gathered around a first-generation television set. Warm, soft indoor lighting from the 1960s. Desaturated colors, predominantly beige and wood tones. Film grain and slight vignetting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ht40SG26_Ynz5iQJz1eCCR9YRiv1pawANMppgYOhPBIQA43-iFi7CypWqsvzPJoqdcLMvLfIF8FnUIiFMJSMNaLrMdoTx19KMtj3cMVRHTaBw-Lvsu4AJxD8d7PSrCjuzgoSbxuZgKqFGPOvIRGugz6jReUUw8F18LCI1rf1Pcd_Dz269zJ-rCqoSdudU-mLYBosVAnEIaXlzZzfzWW8MQs5vRl43N70J8X2FM-A34rfCSu-YmLUBaNMCNe94uRTveAU4pqW20s"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">15:00</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Early Broadcast Limitations</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Anand Verma</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Karnataka</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1960s</span>
</div>
</div>
</div>
</div>
{/*  Video Card 4  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="A portrait-style video still of a former bank manager in a crisp white shirt, sitting in an office with heavy wooden furniture. Desaturated 1970s color palette, focus on texture of paper and ink. Sharp contrast, archival film look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsLNseecjcDnm24XR4hk40AvFebUCStQ7_4I8WF-hi1GrwvTPDz9z52FCanULa_E4F55EEJCWucprS7Y9XYrGe2LyngA1q7ceY0_F7CTuF1rp9XwSSf7Yakniy5NzB_LIibyrE6nwidLWA_IQKlZDaPDQ1A8-dqmgFbGwOuuAFIMDuZR9x3n3AmHaKAfaf6k_xUsdoVE2_ZX7Wto4lxWtx9FqYK3eh2yQNvFm7iZvji62NkTdipxUpX4nmEl1OH82ZjMDFESRLp0I"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">21:10</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Banking Before Digitalization</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Mr. P.V. Menon</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Kerala</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1970s</span>
</div>
</div>
</div>
</div>
{/*  Video Card 5  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="Wide shot of a dockyard in the 1950s. Desaturated, heavy grain, vintage film aesthetic. Silhouette of a ship against a hazy sky. Harsh industrial lighting, deep blacks, high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBBzxuIJY6-QRWvQgzT1AHcNTOIvngtOID4Ew8n7dl9_i6-N1HyWUoHjQvyp8WnDoBRENMOkZE4PuZOMuZksea4BgzJM56pDukDbyvBZQ33HyOut_2GZZE1_c-gc7YuiIOzYZBwZQsTeJkiMBDNAPxt9GSJ2kYRe91thYuhe7GGNOAXKpwndBUHFplzCUw615IKoc3nd59EIfYqhLgqpRiFpZmf2Oh7SqbXHj8sK9td6OCedLVXr_dKRXGIOojbC3PG-QbIH2suoI"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">18:35</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Maritime Trade & Customs</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Capt. Somnath Sen</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">West Bengal</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1950s</span>
</div>
</div>
</div>
</div>
{/*  Video Card 6  */}
<div className="group cursor-pointer">
<div className="relative aspect-video mb-6 overflow-hidden bg-surface-container border border-outline-variant p-3">
<div className="w-full h-full overflow-hidden relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" data-alt="Close up of a woman's hands working a vintage typewriter. 1980s office setting. Muted colors, shallow depth of field. Soft, warm natural light from a window. Grainy film texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EXwvSDBIDAPljv2I5AyiJbv63WeIBkrHFGs6i6Lqj4bJ7TuCEcknh9E2rBZUDQij6gomlMLwHb82hFiMb8wl96PSQHK_rwtmPnhsKQEimlI6kI7bq4rfplXWtgm7mmwd4jM7PDetlsiRiNu7zvsaZTVlZWBluT9I4EkBn7m2Z5gUR2xWyP09qle_e-FhRlS_U8VpN-hsDQncQ1u5aPtW5Ojo9cuOLLk3Q24lHrfPCWWYe9BcF0d93rXWWmmARJYgSBVT_RI3rIM"/>
<div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-transparent transition-colors">
<div className="w-12 h-12 rounded-full border border-on-primary/50 flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-primary text-on-primary px-2 py-1 font-label-caps text-[10px]">09:45</div>
</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary">Bureaucracy and Carbon Paper</h3>
<div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
<span className="font-headline-sm text-[16px] text-on-surface italic">Leela Rajan</span>
<div className="flex gap-2">
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">Tamil Nadu</span>
<span className="text-outline text-[10px]">•</span>
<span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">1980s</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Pagination  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-12 border-t border-outline-variant mb-20">
<div className="flex items-center justify-center gap-8">
<button className="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer">chevron_left</button>
<div className="flex gap-6 items-center">
<span className="font-label-caps text-label-caps text-primary border-b border-primary pb-1">01</span>
<span className="font-label-caps text-label-caps text-outline hover:text-primary cursor-pointer transition-colors pb-1 border-b border-transparent">02</span>
<span className="font-label-caps text-label-caps text-outline hover:text-primary cursor-pointer transition-colors pb-1 border-b border-transparent">03</span>
<span className="font-label-caps text-label-caps text-outline pb-1">...</span>
<span className="font-label-caps text-label-caps text-outline hover:text-primary cursor-pointer transition-colors pb-1 border-b border-transparent">12</span>
</div>
<button className="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer">chevron_right</button>
</div>
</section>
</div>

    </>
  );
}
