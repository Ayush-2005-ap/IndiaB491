import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Section: Header & Context  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">Visual Archives</span>
<h1 className="font-display-lg text-display-lg text-primary leading-none">Cartoons & Ads</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-6 leading-relaxed">
          A curated collection of visual culture from pre-liberalization India. These artifacts mirror the social anxieties, aspirations, and the distinct aesthetic of a closed economy.
        </p>
</div>
<div className="flex flex-col items-end">
<span className="font-label-caps text-label-caps text-outline mb-2">ARCHIVE REF.</span>
<span className="font-body-md text-body-md text-primary tracking-widest">SERIES_CA_1947_91</span>
</div>
</div>
{/*  Minimal Hairline Divider  */}
<div className="w-full h-hairline bg-outline-variant mt-12"></div>
{/*  Filter Bar  */}
<div className="flex flex-wrap items-center justify-between py-6 gap-6">
<div className="flex items-center gap-12">
<div className="group cursor-pointer relative">
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary transition-colors flex items-center gap-2">
            DECADE <span className="material-symbols-outlined text-[14px]">expand_more</span>
</span>
<div className="absolute top-full left-0 mt-2 bg-surface border border-outline-variant hidden group-hover:block z-10 w-40">
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">1950s</div>
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">1960s</div>
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">1970s</div>
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer border-l-2 border-primary">1980s</div>
</div>
</div>
<div className="group cursor-pointer relative">
<span className="font-label-caps text-label-caps text-outline group-hover:text-primary transition-colors flex items-center gap-2">
            TYPE <span className="material-symbols-outlined text-[14px]">expand_more</span>
</span>
<div className="absolute top-full left-0 mt-2 bg-surface border border-outline-variant hidden group-hover:block z-10 w-48">
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">Political Cartoons</div>
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">Consumer Print Ads</div>
<div className="p-3 font-body-md text-caption hover:bg-surface-container cursor-pointer">Government PSAs</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-label-caps text-label-caps text-outline">VIEWING 12 OF 482 ITEMS</span>
</div>
</div>
<div className="w-full h-hairline bg-outline-variant"></div>
</section>
{/*  Gallery Grid  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
{/*  Item 1  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="A vintage 1970s print advertisement for an Indian automobile, likely the Ambassador or Padmini. The style is highly desaturated, almost monochrome, with grainy film texture. The layout is clean and Swiss-inspired, with a sharp black border. The lighting is soft, overhead studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLuKRz725VLEqzdFRuWfWp8aBOT4G8BddypvQ2sjdDcXiDfYdGbSH75lqvZYebwQfJ35n3E-pH8uXxrSdP2Nq7KzWh9RuhxLaIqs1HDThCvhzolGwPKMGzCe9_mljpSUqUi_n_2uLcgp6YBtM7IIURoiV8YrvGpHLapnaqlq4nLhl-e2sQ_l0ooxFaaBMjKGdvlZNvlr8GeaPt-OK8_8G0yletLCmELlwNvs-T3RJTMEMHSn_rSsmIXl5FaArWEeU1wDeggPaD_8"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">The Sovereign Commute</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">The Times of India, 1974</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #AD-091</span>
</div>
</div>
</div>
{/*  Item 2  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="A hand-drawn political cartoon from 1980s India. The line work is sharp, black ink on aged yellowed paper. The subject is a satirical take on the License Raj, showing a bureaucratic labyrinth. The aesthetic is archival, high contrast, no colors except for sepia tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0VuGFuVKWZUIs8EsQnTGakABVqnLLm-SejGTFUH4KvsU6a9xs6HJoQCj4KuIF-UH2U2wyUliKlVCsHP974NIsmO00fTVqJFr251da95llzBddHhCplzt8vlIbMQPaHfy_3lcmExVwus_26DAjk6_nukePPWe0CeN-BGeuBNFuwpj0N7CTQbi2bURIu_snsi_6RUw9zHX6EGX6aEvOV_hPhTP660v10D_KkSe0B5A6iXhYP3hmyzT_6zmObWt0EH-IL62G0UlxdEc"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Labyrinth of Permits</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">Laxman Collection, 1982</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #CT-442</span>
</div>
</div>
</div>
{/*  Item 3  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Vintage print ad for a state-run airline. Features a stylized map of India with elegant typographic flight paths. Desaturated blues and ivory colors. 1960s modernist design aesthetic. High grain, slightly distressed edges around the frame." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY2ildlJpyr5Lyz-mIBknR-2Hz1kkoBCm0dPPmIst2r_OBUYIt-0nHn6GKu46ujNB56FapMvBvtv-TM4d0afPbjXkFaAY4JlLT4AHx-Ul7PMAV273vAcCOcKJVECfhR9EaLblqM1Hy6MYYXtWlc7-o5llV9yCmzFXU2Xg9LeO4uXJIAyEN5KfnA7TI3C31wmnuk4fppYZiLYuuOWvTmeuVXB_Kkn6mad_OV8t5MPy-Bb_nnWKiYMpjN3uBQ3vZiwJ6dSt-irs7OpQ"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Wings of the State</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">Air India Archives, 1968</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #AD-210</span>
</div>
</div>
</div>
{/*  Item 4  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="An advertisement for a heavy engineering company. Massive industrial gears and cogs shown in a dramatic low angle. Dark, moody black and white photography. Brutalist layout with bold, serif lettering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEfHl2HVKUA5IPSctgptFgJu5h2nIj_m3SJVUQfW1shCLWZ6GwG5kzEYI6gr2mtgUFo0NhHlY5Rff1_PYNXdPAbfvREtDRp58bDcMpDzM80eKc77bemyYlkmbY0aaJRSnWJitodKi2Sg223ky_tbkDUFdT6CBajjiMqyUTp3uYJ5D0nD2D6f5uny4O_JTkZD3acAXb0aFplOvwSr3YEmKSiEfuuoINNeJUpwdmSmYqGYuxSY60tY4BjvaXebtEX7MDhi3ndyNuZu8"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Foundations of Steel</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">Public Sector Unit, 1959</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #AD-551</span>
</div>
</div>
</div>
{/*  Item 5  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="A vintage electronics ad for a radio set. The image focuses on the tactile knobs and the wooden finish of the radio. Highly desaturated warm tones. A middle-class living room setting from the 1970s is hinted in the blurred background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-VgJ7ephozD_bcKtmqdE3qJl7Ktg8TjrM-We1HWhLd6LWDyD92_0SumuL91A5z7X1DriUf59BJhnQjgdbcLV7vZqVK6gx_Ezu5N6bdOmBKwb3-WQ9PSRealWBHNXYn1rLBzUDf1DVtEnZxIQS2D9MmFGD6Md9aY2EQ3owLBM2i7ZB6YoLablXaTcmNWYd5g4FRef5MCy_SooFrzyD49gRXLaU_5DxAGb88eF3R4MEy6H2wCHsgy26sE7wizjW9S_-zZFPSA4NYNA"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">Transistor Dreams</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">Bombay Herald, 1971</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #AD-882</span>
</div>
</div>
</div>
{/*  Item 6  */}
<div className="flex flex-col group cursor-crosshair">
<div className="aspect-[4/5] bg-surface-container p-4 border border-outline-variant transition-colors group-hover:border-primary overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105" data-alt="Satirical cartoon showing a man standing in a long line for a ration card. The characters are expressive with exaggerated features. Pencil sketch style on off-white paper. Detailed background of a government office with stacked files." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD57Pn6AsXNrv4u-hINnXShIi0iKxfnJ-M9MN2sp0CSmdHAZK0Ha76QJoyQ_rT002-Q8ar__Hp7qYsQDESvrVAE_sKW9ZhqzoP_n9BXs1nBMP07I4Kbbv_uryhi-3b6zMc_9x8zz0lMsxVaG43vFjDmbMCt0ej1XJY9J-WvSJ_tF45B3bcEZ1RYivzI886HYGnPcV11pE5a5_UITWethL3bxWgj1sJpqwQJCIpyjkQ2NGh1FuQ5vjLvComXiP-igyWQa7mNLQs5FDQ"/>
</div>
<div className="mt-6">
<h3 className="font-headline-sm text-headline-sm text-primary mb-1">The Queue</h3>
<div className="flex justify-between items-baseline">
<span className="font-caption text-caption text-on-surface-variant italic">Shankar's Weekly, 1964</span>
<span className="font-label-caps text-[10px] tracking-tighter text-outline">REF: #CT-009</span>
</div>
</div>
</div>
</div>
{/*  Pagination  */}
<div className="mt-24 flex items-center justify-center gap-8">
<button className="flex items-center gap-2 font-label-caps text-label-caps text-outline hover:text-primary transition-colors disabled:opacity-30" disabled="">
<span className="material-symbols-outlined text-[16px]">arrow_back</span> PREVIOUS
      </button>
<div className="flex gap-4">
<span className="font-body-md text-body-md text-primary underline underline-offset-4">01</span>
<span className="font-body-md text-body-md text-outline hover:text-primary cursor-pointer">02</span>
<span className="font-body-md text-body-md text-outline hover:text-primary cursor-pointer">03</span>
<span className="font-body-md text-body-md text-outline">...</span>
<span className="font-body-md text-body-md text-outline hover:text-primary cursor-pointer">14</span>
</div>
<button className="flex items-center gap-2 font-label-caps text-label-caps text-outline hover:text-primary transition-colors">
        NEXT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</section>
{/*  Detail Interaction Overlay (Hidden by default)  */}
<div className="fixed inset-0 bg-surface/95 backdrop-blur-sm z-[100] opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-margin-desktop" id="image-overlay">
<button className="absolute top-8 right-8 text-primary" id="close-overlay">
<span className="material-symbols-outlined text-4xl">close</span>
</button>
<div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-2/3 border border-outline-variant p-4 bg-white">
<img className="w-full h-auto grayscale" id="overlay-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR3b3djl9P9iBspH8VQZC2xSb88mBdu-epJVXQFJmgc3DrGg8rDFv8oRPY3BmYuAJ3LCuKqv0-E_kx8PhwZ_rUgjMO_vfisK06YkeANu6Elrc3OYAL3McOCzsza_LuWJcmrYX_9jPsDR82LdfR6cr_LksKeMXW59k-6aHVnUWQbjjFCuckew0RpAZHufuaeSGpu7twvJqiQtlckTS850A4rp5rmY4O4dF-WT-kydJgEWquV9jr19oWXFswfGO1bN_Nwqat7Ks8uGc"/>
</div>
<div className="w-full md:w-1/3">
<span className="font-label-caps text-label-caps text-secondary">ARCHIVAL PLATE</span>
<h2 className="font-display-lg text-display-lg text-primary mt-2" id="overlay-title"></h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-6 italic" id="overlay-desc"></p>
<div className="mt-8 pt-8 border-t border-outline-variant">
<div className="flex flex-col gap-4">
<div>
<div className="font-label-caps text-label-caps text-outline">PUBLICATION</div>
<div className="font-body-md text-body-md text-primary" id="overlay-pub"></div>
</div>
<div>
<div className="font-label-caps text-label-caps text-outline">IDENTIFIER</div>
<div className="font-body-md text-body-md text-primary" id="overlay-ref"></div>
</div>
</div>
<button className="mt-12 px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps w-full">DOWNLOAD REPRODUCTION</button>
</div>
</div>
</div>
</div>

</div>
    </>
  );
}
