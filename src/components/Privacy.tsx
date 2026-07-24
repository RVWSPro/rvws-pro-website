import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '@/components/Nav';
import CtaFooter from '@/components/CtaFooter';
import { useLang } from '@/lib/LanguageContext';

export default function Privacy() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t.privacy.title} — RVWS Pro`;
  }, [t.privacy.title]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Nav />
      <main key={t.privacy.title} className="animate-fade-in">
        <section className="relative w-full overflow-hidden bg-black pt-32 sm:pt-36 lg:pt-40">
          <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 lg:px-10">
            <span className="eyebrow mb-7">{t.privacy.eyebrow}</span>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {t.privacy.title}
            </h1>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-muted">
              {t.privacy.updated}
            </p>

            <div className="mt-12 space-y-12">
              {t.privacy.sections.map((s, i) => (
                <section key={i}>
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {s.h}
                  </h2>
                  {s.p && (
                    <p className="mt-4 text-base leading-relaxed text-slate-muted">
                      {s.p}
                    </p>
                  )}
                  {s.list && (
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-muted">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.p2 && (
                    <p className="mt-4 text-base leading-relaxed text-slate-muted">
                      {s.p2}
                    </p>
                  )}
                </section>
              ))}

              <div className="pt-4">
                <Link to="/" className="btn btn-outline group">
                  {t.privacy.back}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaFooter />
    </div>
  );
}
