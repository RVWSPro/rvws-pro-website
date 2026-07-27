import { Link } from 'react-router-dom';
import { MessageCircle, Star, ArrowUpRight } from 'lucide-react';
import { WA_LINKS, WHATSAPP_PHONE } from '@/lib/site';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

export default function CtaFooter() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

 const FOOTER_NAV = [
    { label: t.footer.nav[0].label, id: 'pricing' },
    { label: t.footer.nav[1].label, id: 'faq' },
    { label: t.footer.nav[2].label, href: WA_LINKS.general, external: true },
    { label: t.footer.nav[3].label, to: '/privacy' },
    { label: t.footer.nav[4].label, to: '/terms' },
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* CTA block */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div
          className="reveal glass relative overflow-hidden p-10 text-center sm:p-16"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% -20%, #1a3a6e 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, #0a0f1e 0%, #000000 100%)',
          }}
        >
          {/* subtle grid overlay */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-50 bg-grid-faint"
              style={{ backgroundSize: '48px 48px' }}
            />
          </div>

          <span className="eyebrow mx-auto mb-6">{t.cta.label}</span>

          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.cta.headline}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg">
            {t.cta.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA_LINKS.visit}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glow group px-7 py-3.5"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta.primary}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#pricing" className="btn btn-outline px-7 py-3.5">
              {t.cta.secondary}
            </a>
          </div>

          {/* trust line */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-muted"
            style={{ gap: '24px' }}
          >
            {t.cta.trust.map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" strokeWidth={0} />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row lg:px-10 lg:py-12">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center transition-opacity duration-300 hover:opacity-80">
            <span
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '180px',
                height: '56px',
                overflow: 'hidden',
              }}
            >
              <img
                src="RVWS_Pro_Minimal_Wordmark_Logo.svg"
                alt="RVWS Pro"
                style={{
                  position: 'absolute',
                  width: '520px',
                  maxWidth: 'none',
                  height: 'auto',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </span>
          </a>

          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-muted transition-colors hover:text-white"
          >
            +{WHATSAPP_PHONE}
          </a>
        </div>

        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-2">
            {FOOTER_NAV.map((l) =>
              'to' in l ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-xs uppercase tracking-wider text-slate-muted transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ) : 'href' in l ? (
                <a
                  key={l.href}
                  href={l.href}
                  {...(l.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className="text-xs uppercase tracking-wider text-slate-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(l.id!);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs uppercase tracking-wider text-slate-muted transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        </nav>

        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 py-6 text-center sm:px-8 lg:px-10">
            <p className="text-xs text-slate-muted/70">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
