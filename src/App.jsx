import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Seo from './components/Seo';
import CookieConsent from './components/CookieConsent';

const DummyPage = lazy(() => import('./pages/DummyPage'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const CalcioLive = lazy(() => import('./pages/CalcioLive'));
const Terms = lazy(() => import('./pages/Terms'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    let frame;
    let timer;
    let active = true;

    const refresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const scheduleRefresh = () => {
      refresh();
      clearTimeout(timer);
      timer = setTimeout(refresh, 250);
    };

    // Lazy routes replace the direct child of main after the initial mount.
    const observer = new MutationObserver(scheduleRefresh);
    if (mainRef.current) observer.observe(mainRef.current, { childList: true });

    const refreshWhenVisible = () => {
      if (!document.hidden) scheduleRefresh();
    };

    scheduleRefresh();
    window.addEventListener('load', scheduleRefresh);
    window.addEventListener('pageshow', scheduleRefresh);
    document.addEventListener('visibilitychange', refreshWhenVisible);
    document.fonts?.ready.then(() => {
      if (active) scheduleRefresh();
    });

    return () => {
      active = false;
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener('load', scheduleRefresh);
      window.removeEventListener('pageshow', scheduleRefresh);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, []);

  return (
    <Router>
      <div className="bg-drago-bg min-h-screen text-drago-contrast font-sans selection:bg-drago-accent/30 selection:text-white flex flex-col">
        <Seo />
        <Navbar />

        <main ref={mainRef} className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chi-sono" element={<About />} />
              <Route path="/servizi" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<DummyPage title="Blog" />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/calcio-live" element={<CalcioLive />} />
              <Route path="/termini-e-condizioni" element={<Terms />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
