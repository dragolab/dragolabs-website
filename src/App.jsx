import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Seo from './components/Seo';
import CookieConsent from './components/CookieConsent';
import ClickSpark from './components/ClickSpark';
import { LanguageProvider } from './context/LanguageContext';

const CalcioLive = lazy(() => import('./pages/CalcioLive'));
const Terms = lazy(() => import('./pages/Terms'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

gsap.registerPlugin(ScrollTrigger);

// Helper component to handle smooth scroll on hash changes or redirects
function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return null;
}

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
    <LanguageProvider>
      <Router>
        <ScrollToAnchor />
        <ClickSpark sparkColor="#00E5FF" sparkCount={8} sparkRadius={26} />
        <div className="bg-drago-bg min-h-screen text-drago-contrast font-sans selection:bg-drago-accent/30 selection:text-white flex flex-col">
          <Seo />
          <Navbar />

          <main ref={mainRef} className="flex-grow">
            <Suspense fallback={null}>
              <Routes>
                {/* Core Monopagina */}
                <Route path="/" element={<Home />} />

                {/* Redirects from old routes to single-page anchors */}
                <Route path="/chi-sono" element={<Navigate to="/#chi-sono" replace />} />
                <Route path="/servizi" element={<Navigate to="/#servizi" replace />} />
                <Route path="/portfolio" element={<Navigate to="/#progetti" replace />} />
                <Route path="/blog" element={<Navigate to="/#hero" replace />} />
                <Route path="/contatti" element={<Navigate to="/#contatti" replace />} />

                {/* Hidden direct route for Calcio Live */}
                <Route path="/calcio-live" element={<CalcioLive />} />

                {/* Legal & Compliance Routes */}
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
    </LanguageProvider>
  );
}

export default App;
