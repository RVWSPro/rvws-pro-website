import { useLang } from '@/lib/LanguageContext';
import type { Lang } from '@/lib/i18n';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const cls = (l: Lang) =>
    `text-sm font-medium transition-colors duration-200 ${
      lang === l ? 'text-white' : 'text-slate-500 hover:text-slate-300'
    }`;

  return (
    <div className="flex items-center gap-2 select-none">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={cls('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        type="button"
        onClick={() => setLang('es')}
        className={cls('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
    </div>
  );
}
