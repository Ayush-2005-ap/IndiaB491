import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="flex flex-col w-full">
{/*  Decorative Header Section  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 pt-16 pb-24">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase mb-4 block">Contributor Registry</span>
<h1 className="font-display-lg text-display-lg text-primary mb-6">Submit Your Story</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
          Help us preserve the nuances of life in India prior to the 1991 reforms. Your memories, photographs, and artifacts are the primary documents of our collective history.
        </p>
</div>
<div className="hidden lg:block pb-2">
<div className="h-px w-32 bg-outline-variant mb-4"></div>
<span className="font-caption text-caption text-outline italic">Est. Archive 2024</span>
</div>
</div>
</section>
{/*  Main Form Section  */}
<section className="w-full bg-surface-container-low py-24">
<div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Sidebar Guidance  */}
<div className="lg:col-span-4 flex flex-col gap-12">
<div className="p-8 bg-surface-container border-l-2 border-secondary">
<h3 className="font-headline-sm text-headline-sm text-primary mb-4">Archival Standards</h3>
<ul className="flex flex-col gap-6">
<li className="flex gap-4">
<span className="font-label-caps text-label-caps text-secondary">01</span>
<p className="font-caption text-caption text-on-surface-variant">Focus on personal anecdotes that highlight daily life, economic constraints, or cultural milestones.</p>
</li>
<li className="flex gap-4">
<span className="font-label-caps text-label-caps text-secondary">02</span>
<p className="font-caption text-caption text-on-surface-variant">Provide as much context as possible regarding the location and specific year of the record.</p>
</li>
<li className="flex gap-4">
<span className="font-label-caps text-label-caps text-secondary">03</span>
<p className="font-caption text-caption text-on-surface-variant">High-resolution scans are preferred for physical photographs or documents.</p>
</li>
</ul>
</div>
<div className="relative aspect-[4/5] w-full overflow-hidden grayscale contrast-125 opacity-80 group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A vintage 1980s black and white photograph of an Indian marketplace, captured with a soft grain and high contrast. The scene shows old Ambassador cars, street vendors with hand-painted signs, and people in traditional attire. The lighting is bright afternoon sun with long, dramatic shadows. 1980s archival aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZ6ssBKt-9vleQcrbR-42X72Sa4t6tJdvvFni6QM9NKGe3YiW-RHzVdXocvwcmj0PAcsNKXfcf5OX6Yg8hzhP689ETHb10UUfEaEJr-BLeUxNmsC6qy6hGxhPrOK_7SkMZAmswJDM4J4-yhMo4tobBq1b4P4t1awPmk24ELD89Txn-GxcHlIt604ZIr7GscKwqMmnPdfJjNaYpkGX99cLEUkmGaZxeeNz1gx_0RUJaQUFGtPjNk8oc9Pel179lNCXAqaUXigUJls"/>
<div className="absolute inset-0 border-[16px] border-surface-container-low/30 pointer-events-none"></div>
</div>
</div>
{/*  Form Component  */}
<form className="lg:col-span-8 flex flex-col gap-16" id="submissionForm">
{/*  Identity Group  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="relative group">
<label className="font-label-caps text-label-caps text-outline uppercase mb-2 block transition-colors group-focus-within:text-primary">Full Name</label>
<input className="w-full bg-transparent border-b border-outline py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline-variant" placeholder="E.g. Dr. Amitabh Varma" type="text"/>
</div>
<div className="relative group">
<label className="font-label-caps text-label-caps text-outline uppercase mb-2 block transition-colors group-focus-within:text-primary">Primary Location</label>
<input className="w-full bg-transparent border-b border-outline py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline-variant" placeholder="City, State" type="text"/>
</div>
</div>
{/*  Taxonomy Group  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="relative group">
<label className="font-label-caps text-label-caps text-outline uppercase mb-2 block transition-colors group-focus-within:text-primary">Economic Sector</label>
<select defaultValue="" className="w-full bg-transparent border-b border-outline py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
<option disabled value="">Select Sector</option>
<option>Agriculture & Rural Life</option>
<option>Manufacturing & Industry</option>
<option>Public Infrastructure</option>
<option>Trade & Commerce</option>
<option>Telecommunications</option>
<option>Domestic Lifestyle</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-4 text-outline pointer-events-none">expand_more</span>
</div>
<div className="relative group">
<label className="font-label-caps text-label-caps text-outline uppercase mb-2 block transition-colors group-focus-within:text-primary">Submission Format</label>
<select defaultValue="" className="w-full bg-transparent border-b border-outline py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
<option disabled value="">Select Type</option>
<option>Written Narrative</option>
<option>Archival Photograph</option>
<option>Physical Artifact Scan</option>
<option>Audio Recording</option>
<option>Home Video Clip</option>
</select>
<span className="material-symbols-outlined absolute right-0 bottom-4 text-outline pointer-events-none">expand_more</span>
</div>
</div>
{/*  Narrative Field  */}
<div className="relative group">
<label className="font-label-caps text-label-caps text-outline uppercase mb-2 block transition-colors group-focus-within:text-primary">The Narrative</label>
<textarea className="w-full bg-transparent border-b border-outline py-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline-variant resize-none" placeholder="Describe the memory, the item, or the historical context in detail..." rows="6"></textarea>
</div>
{/*  Upload Area  */}
<div className="relative group border-2 border-dashed border-outline-variant p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-colors" id="dropZone">
<input className="hidden" id="fileInput" type="file"/>
<span className="material-symbols-outlined text-4xl text-outline mb-4">upload_file</span>
<p className="font-headline-sm text-headline-sm text-primary mb-2">Upload Archival Assets</p>
<p className="font-caption text-caption text-on-surface-variant">Drag and drop high-resolution files (JPG, PDF, MP4 up to 50MB)</p>
</div>
{/*  Submit Button  */}
<div className="flex justify-start pt-8">
<button className="group relative px-12 py-5 bg-secondary text-on-secondary overflow-hidden transition-all hover:bg-on-secondary-container" type="submit">
<span className="relative z-10 font-headline-sm text-headline-sm uppercase tracking-widest flex items-center gap-4">
                Finalize Submission
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
</span>
</button>
</div>
</form>
</div>
</div>
</section>
{/*  Legal & Privacy Footnote  */}
<section className="max-w-[1120px] mx-auto w-full px-margin-mobile lg:px-0 py-16">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 opacity-60">
<div className="max-w-md">
<p className="font-caption text-caption text-outline">
          By submitting, you grant the "India Before &apos;91" Archive a non-exclusive license to preserve, display, and share your contribution for educational and research purposes.
        </p>
</div>
<div className="flex gap-12">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Protocol ID</span>
<span className="font-body-md text-body-md">CCS-91-REG</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Processing</span>
<span className="font-body-md text-body-md">4-6 Weeks</span>
</div>
</div>
</div>
</section>

</div>
    </>
  );
}
