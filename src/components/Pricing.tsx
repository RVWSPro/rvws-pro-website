import { Check, Sparkles } from 'lucide-react';
import { WA_LINKS } from '@/lib/site';
import { useReveal } from '@/lib/useReveal';
import { useLang } from '@/lib/LanguageContext';

const PRODUCT_META = [
  {
    name: 'RVWS Pro Solo',
    price: '€25',
    cadence: '/ one-time',
    image: 'images/rvws_solo_closeup.png',
    href: WA_LINKS.standard,
  },
  {
    name: 'RVWS Pro Duo',
    price: '€50',
    cadence: '/ one-time',
    image: 'images/rvws_duo_closeup.png',
    href: WA_LINKS.premium,
    featured: true,
  },
  {
    name: 'RVWS Pro Business',
    price: 'Custom Inquiry',
    cadence: '',
    image: 'images/rvws_business_closeup.png',
    href: WA_LINKS.custom,
  },
];

export default function Pricing() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[140px]" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-5">{t.products.label}</span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.products.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-muted sm:text-lg">
            {t.products.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 items-stretch gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-6">
          {PRODUCT_META.map((product, i) => {
            const data = t.products.items[i];
            return (
              <div
                key={product.name}
                className="reveal relative flex h-full flex-col"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <article
                  className="glass glass-hover relative flex flex-1 flex-col overflow-hidden"
                  style={{ background: '#000000' }}
                >
                  {/* Image showcase zone — radial gradient backdrop, no hard frame */}
                  <div
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{
                      aspectRatio: '4 / 3',
                      background:
                        product.featured
                          ? 'radial-gradient(ellipse at 50% 45%, rgba(59,130,246,0.10) 0%, rgba(17,17,17,0) 70%)'
                          : 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.05) 0%, rgba(17,17,17,0) 70%)',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative z-[1] h-[65%] w-[65%] object-contain"
                      style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.55))' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Text body */}
                  <div className="flex flex-1 flex-col px-8 pb-8">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>

                    <div className="pricing-head mt-4 flex h-[128px] flex-col">
                      <div className="pricing-price-row flex items-end gap-1.5">
                        <span className="text-4xl font-extrabold tracking-tight text-white">{product.price}</span>
                        {product.cadence && (
                          <span className="pb-1 text-sm text-slate-muted">{product.cadence}</span>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-muted">{data.blurb}</p>
                    </div>

                    <ul
                      className={`pricing-features product-features flex flex-col items-start justify-start pb-3 ${
                        i === 2 ? 'mt-4' : 'mt-2'
                      }`}
                    >
                      {data.features.map((f) => (
                        <li key={f} className="pricing-row flex h-9 items-center gap-3 text-sm text-slate-200">
                          <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-white/70">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="feature-text flex-1 min-w-0">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline product-card-button mt-auto w-full cursor-pointer group"
                    >
                      {data.cta}
                    </a>
                  </div>

                </article>

                {product.featured && (
                  <span className="absolute -top-4 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200 backdrop-blur-md">
                    <Sparkles className="h-3 w-3" />
                    {t.products.popular}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
