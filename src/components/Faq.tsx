import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

export default function Faq() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-black py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">{t.faq.label}</span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.faq.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-muted sm:text-lg">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="reveal mt-14 flex flex-col">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-white/20 first:border-t"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300"
                >
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.q}
                  </span>
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/20 text-blue-400 transition-colors duration-300 group-hover:border-blue-400/50">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    )}
                  </span>
                </button>

                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-slate-muted sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
