import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-sm">
      <div className="h-20 max-w-[1120px] mx-auto px-margin-mobile lg:px-0 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="IndiaBefore91 Logo" 
              width={250} 
              height={50} 
              className="w-auto h-12 object-contain" 
              priority 
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <Link href="/reforms" className="font-body-md text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1 py-4">
                1991 Reforms <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-surface shadow-lg border border-outline-variant min-w-[220px] z-50">
                <Link href="/reforms/1980-1990" className="px-4 py-3 font-body-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant">1980-1990</Link>
                <Link href="/reforms/license-raj" className="px-4 py-3 font-body-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant">The License Raj</Link>
                <Link href="/reforms/1991-crisis" className="px-4 py-3 font-body-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant">1991 Crisis</Link>
                <Link href="/reforms/1991-economic-reforms" className="px-4 py-3 font-body-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors border-b border-outline-variant">Economic Reforms</Link>
                <Link href="/reforms/impact-of-reforms" className="px-4 py-3 font-body-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors">Impact of Reforms</Link>
              </div>
            </div>
            <Link href="/videos" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Video Stories</Link>
            <Link href="/news" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Archival News</Link>
            <Link href="/cartoons" className="font-body-md text-on-surface-variant hover:text-primary transition-colors">Cartoons & Ads</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/submit" className="px-6 py-2 border border-secondary text-secondary font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary transition-all block">
            SUBMIT YOUR STORY
          </Link>
          <Link href="/admin" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
