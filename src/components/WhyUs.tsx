import { HandHeart, Gem, Minimize2 } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

const ICONS = [HandHeart, Gem, Minimize2];

export default function WhyUs() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="why" className="relative py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">{t.why.label}</span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.why.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-muted sm:text-lg">
            {t.why.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.why.values.map((v, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={v.title}
                className="reveal glass glass-hover group relative overflow-hidden p-9 text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" strokeWidth={1.5} />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/0 blur-xl transition-all duration-500 group-hover:bg-blue-500/10" />
                </div>

                <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-muted">
                  {v.body}
                </p>

                <div className="pointer-events-none absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-600/0 blur-3xl transition-all duration-500 group-hover:bg-blue-600/15" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
