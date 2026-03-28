import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DummyPage from './pages/DummyPage';
import Contact from './pages/Contact';
import About from './pages/About';
import CalcioLive from './pages/CalcioLive';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Global cleanups if necessary
  useEffect(() => {
    // Refresh ScrollTrigger after all components mounted
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Router>
      <div className="bg-drago-bg min-h-screen text-drago-contrast font-sans selection:bg-drago-accent/30 selection:text-white flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<About />} />
            <Route path="/servizi" element={<DummyPage title="Servizi" />} />
            <Route path="/portfolio" element={<DummyPage title="Portfolio" />} />
            <Route path="/blog" element={<DummyPage title="Blog" />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/calcio-live" element={<CalcioLive />} />
          </Routes>
        </main>

        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
