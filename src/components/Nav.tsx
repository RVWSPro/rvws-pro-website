import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WA_LINKS } from '@/lib/site';
import { useLang } from '@/lib/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const SECTION_IDS = ['how', 'pricing', 'why', 'faq'] as const;

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
  setOpen(false);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
};

const LINKS = SECTION_IDS.map((s) => ({
  label: t.nav[s === 'how' ? 'how' : s === 'pricing' ? 'products' : s === 'why' ? 'why' : 'faq'],
  id: s,
}));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-10">
        {/* Logo */}
      <a onClick={() => scrollTo('top')} style={{ cursor: 'pointer' }} className="flex items-center">
          <span
            style={{
              display: 'inline-block',
              position: 'relative',
              width: '190px',
              height: '58px',
              overflow: 'hidden',
            }}
          >
            <img
              src="RVWS_Pro_Minimal_Wordmark_Logo.svg"
              alt="RVWS Pro"
              style={{
                position: 'absolute',
                width: '560px',
                maxWidth: 'none',
                height: 'auto',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
         {LINKS.map((l) => (
  <a
    key={l.id}
    onClick={() => scrollTo(l.id)}
    style={{ cursor: 'pointer' }}
    className="group relative text-sm font-medium text-slate-muted transition-colors duration-300 hover:text-white"
  >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop right: language toggle + CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <LanguageToggle />
          <a href={WA_LINKS.visit} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5">
          {LINKS.map((l) => (
  <a
    key={l.id}
    onClick={() => scrollTo(l.id)}
    style={{ cursor: 'pointer' }}
    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-muted transition-colors hover:bg-white/5 hover:text-white"
  >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINKS.visit}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-2 w-full"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
