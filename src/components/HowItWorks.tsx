import { Settings2, FlaskConical, TrendingUp } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

const ICONS = [Settings2, FlaskConical, TrendingUp];

export default function HowItWorks() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="how" className="how-it-works-section relative py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">{t.how.label}</span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.how.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-muted sm:text-lg">
            {t.how.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Connecting line — desktop (horizontal, card center to center) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4285F4]/40 to-transparent md:block"
          />
          {/* Connecting line — mobile (vertical, card to card) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#4285F4]/40 to-transparent md:hidden"
          />
          {t.how.steps.map((s, i) => {
            const Icon = ICONS[i];
            const num = `0${i + 1}`;
            return (
              <article
                key={s.title}
                className="glass glass-hover reveal group relative z-10 overflow-hidden p-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-extrabold tracking-tighter text-white/10 transition-colors duration-500 group-hover:text-blue-500/30">
                    {num}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400 drop-shadow-[0_0_6px_rgba(66,133,244,0.4)]" />
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-muted">{s.body}</p>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-600/0 blur-3xl transition-all duration-500 group-hover:bg-blue-600/20" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
