import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';
import Faq from '@/components/Faq';
import AiAutomation from '@/components/AiAutomation';
import CtaFooter from '@/components/CtaFooter';
import Privacy from '@/components/Privacy';
import Terms from '@/components/Terms';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';

function Home() {
  const { lang } = useLang();

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Nav />
      <main
        key={lang}
        className="animate-fade-in"
      >
        <Hero />
        <HowItWorks />
        <Pricing />
        <WhyUs />
        <Faq />
        <AiAutomation />
        <CtaFooter />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/rvws-pro-website">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <FloatingWhatsApp />
      </BrowserRouter>
    </LanguageProvider>
  );
}
