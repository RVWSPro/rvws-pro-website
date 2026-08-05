import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

const AI_URL =
  'https://wa.me/34659604482?text=Hi%20RVWS%20Pro%2C%20I%20want%20to%20know%20more%20about%20AI%20Automation%20for%20my%20business.';

export default function AiAutomation() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="ai" className="relative py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — message + CTA */}
          <div className="flex flex-col justify-center">
            <div className="available-label-wrap">
              <span className="eyebrow mb-5 self-start">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                {t.ai.label}
              </span>
            </div>

            <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.ai.headline}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg">
              {t.ai.paragraph}
            </p>

            <div className="mt-9">
              <a
                href={AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline group px-7 py-3.5 hover:border-blue-400/50 hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.45)]"
              >
                {t.ai.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right — service points */}
          <div className="glass glass-hover group relative overflow-hidden p-8 sm:p-10">
            <ul className="flex flex-col divide-y divide-white/10">
              {t.ai.services.map((s) => (
                <li key={s} className="feature-item py-4 first:pt-0 last:pb-0">
                  <span className="feature-icon flex h-6 w-6 flex-none items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6.5l2.5 2.5L10 3.5" />
                    </svg>
                  </span>
                  <span className="ai-feature-text font-medium text-white">{s}</span>
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-blue-600/0 blur-3xl transition-all duration-500 group-hover:bg-blue-600/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
