import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();
    const { isEn, toggleLanguage, t } = useLanguage();

    const navLinks = useMemo(() => [
        { id: 'hero', label: t.nav.hero },
        { id: 'metodo', label: t.nav.metodo },
        { id: 'progetti', label: t.nav.progetti },
        { id: 'servizi', label: t.nav.servizi },
        { id: 'chi-sono', label: t.nav.chiSono },
        { id: 'contatti', label: t.nav.contatti },
    ], [t.nav]);

    // GSAP scroll → glass morphing on the pill
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: { className: 'glass', targets: navRef.current }
            });
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: { className: 'bg-transparent', targets: navRef.current },
                onToggle: (self) => {
                    if (self.isActive) {
                        navRef.current?.classList.remove('bg-transparent', 'border-transparent');
                    } else {
                        navRef.current?.classList.add('bg-transparent', 'border-transparent');
                    }
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    // IntersectionObserver to highlight currently visible section
    useEffect(() => {
        if (location.pathname !== '/') return;

        const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, [location.pathname, navLinks]);

    // Animate dropdown open/close with GSAP
    useEffect(() => {
        const el = dropdownRef.current;
        if (!el) return;
        if (mobileOpen) {
            gsap.set(el, { display: 'flex', height: 'auto' });
            const h = el.scrollHeight;
            gsap.fromTo(el,
                { height: 0, opacity: 0 },
                { height: h, opacity: 1, duration: 0.35, ease: 'power2.out' }
            );
        } else {
            gsap.to(el, {
                height: 0,
                opacity: 0,
                duration: 0.28,
                ease: 'power2.in',
                onComplete: () => gsap.set(el, { display: 'none' })
            });
        }
    }, [mobileOpen]);

    // Close on outside click
    useEffect(() => {
        if (!mobileOpen) return;
        const handler = (e) => {
            const pill = navRef.current?.parentElement;
            if (pill && !pill.contains(e.target)) setMobileOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [mobileOpen]);

    // Click handler with immediate feedback & smooth offset scroll
    const handleNavClick = (e, sectionId) => {
        setMobileOpen(false);
        setActiveSection(sectionId);

        if (location.pathname === '/') {
            e.preventDefault();
            const target = document.getElementById(sectionId);
            if (target) {
                const navOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else if (sectionId === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1340px] transition-all duration-300">

            {/* ── Pill bar ── always pill-shaped */}
            <div
                ref={navRef}
                className="flex items-center justify-between px-5 sm:px-7 py-3 rounded-full bg-transparent border border-transparent transition-all duration-500 ease-out"
            >
                {/* Logo + Name + Language Switcher right next to Drago Labs */}
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <a
                        href="/#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform active:scale-90"
                    >
                        <img src="/img/optimized/logo-dragolabs-256.webp" width="256" height="256" alt="Drago Labs Logo" className="w-full h-full object-cover" />
                    </a>
                    <a
                        href="/#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="font-sans font-extrabold text-lg sm:text-2xl tracking-tight text-white hover:text-white transition-transform active:scale-95"
                    >
                        Drago Labs
                    </a>

                    {/* Language Switcher Selector directly to the right of Drago Labs */}
                    <button
                        onClick={toggleLanguage}
                        className="ml-1 px-2.5 py-1 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 text-xs font-mono font-bold text-gray-200 hover:text-white transition-all flex items-center gap-1.5 active:scale-90 shadow-sm"
                        title={isEn ? 'Passa alla lingua Italiana' : 'Switch to English Language'}
                        aria-label="Language Selector"
                    >
                        <Globe className="w-3 h-3 text-drago-accent" />
                        <span className={!isEn ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>IT</span>
                        <span className="text-white/20">|</span>
                        <span className={isEn ? 'text-white font-extrabold' : 'text-gray-400 font-normal'}>EN</span>
                    </button>
                </div>

                {/* Desktop links — High tactile click response */}
                <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-7">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === '/' && activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`/#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`text-[16px] lg:text-[17px] font-bold tracking-tight transition-all duration-200 rounded-full px-3.5 py-1.5 active:scale-90 ${
                                    isActive
                                        ? 'text-white bg-white/15 border border-white/25 shadow-sm scale-105'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Right side CTA */}
                <div className="flex items-center gap-2.5">
                    <a
                        href="/#contatti"
                        onClick={(e) => handleNavClick(e, 'contatti')}
                        className="hidden md:inline-flex items-center gap-2 bg-drago-accent hover:bg-drago-accent/90 text-white px-6 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,115,160,0.5)]"
                    >
                        {t.nav.cta}
                    </a>
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors active:scale-90"
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown ── */}
            <div
                ref={dropdownRef}
                className="md:hidden mt-2 rounded-[1.5rem] glass border border-white/10 flex-col overflow-hidden"
                style={{ display: 'none', height: 0, opacity: 0 }}
            >
                <div className="flex flex-col py-3 px-3">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === '/' && activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`/#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`px-4 py-3 text-lg font-bold rounded-xl transition-all active:scale-95 ${
                                    isActive ? 'text-white bg-white/15 font-bold border border-white/20' : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <div className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between px-3">
                        <span className="text-xs font-mono text-gray-400">Lingua / Language</span>
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5"
                        >
                            <span>{isEn ? 'Switch to Italiano' : 'Passa a English'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
