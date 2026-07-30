import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-16 mt-16">
      <div className="max-w-[1120px] mx-auto px-margin-mobile lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="/about" className="font-body-md text-caption text-on-surface-variant hover:text-primary">About Us</Link>
            <Link href="/contact" className="font-body-md text-caption text-on-surface-variant hover:text-primary">Contact Us</Link>
            <Link href="/ccs" className="font-body-md text-caption text-on-surface-variant hover:text-primary">CCS Attribution</Link>
          </nav>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">history_edu</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">mail</span>
          </div>
        </div>
        <div className="mt-12 text-center md:text-left font-body-md text-caption text-outline">
          © 2024 India Before &apos;91 Digital Archive. A Centenary Preservation Project.
        </div>
      </div>
    </footer>
  );
}
