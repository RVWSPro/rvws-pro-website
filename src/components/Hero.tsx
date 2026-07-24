import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WA_LINKS } from '@/lib/site';
import { useLang } from '@/lib/LanguageContext';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function Hero() {
  const { t } = useLang();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const LINK_DIST = 130;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;

    const buildParticles = () => {
      const count = Math.min(110, Math.floor((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width / 2,
        height * 0.42,
        0,
        width / 2,
        height * 0.42,
        Math.max(width, height) * 0.55
      );
      grad.addColorStop(0, 'rgba(59,130,246,0.10)');
      grad.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147,170,255,0.55)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < LINK_DIST_SQ) {
            const alpha = (1 - distSq / LINK_DIST_SQ) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="top"
      className="hero-section relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent to-black" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <span className="eyebrow mb-7">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          <span className="text-[#4285F4]">{t.hero.eyebrow[0]}</span>{' '}
          <span className="text-[#FBBC05]">{t.hero.eyebrow[1]}</span>{' '}
          <span className="text-[#34A853]">{t.hero.eyebrow[2]}</span>
        </span>

        <h1 className="text-balance text-4xl font-extrabold uppercase leading-[0.9] tracking-[0.02em] text-white sm:text-5xl lg:text-[64px] xl:text-[72px]">
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </h1>

        <p className="mt-7 max-w-[560px] text-base leading-relaxed text-slate-muted sm:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={WA_LINKS.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline group"
          >
            <MessageCircle className="h-4 w-4 text-blue-400" />
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
