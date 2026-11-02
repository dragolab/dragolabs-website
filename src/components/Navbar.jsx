import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'progetti', label: 'Progetti' },
    { id: 'servizi', label: 'Servizi' },
    { id: 'chi-sono', label: 'Team & Argo' },
    { id: 'contatti', label: 'Contatti' },
];

export default function Navbar() {
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();

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
    }, [location.pathname]);

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

    const handleNavClick = (e, sectionId) => {
        setMobileOpen(false);
        if (location.pathname === '/') {
            e.preventDefault();
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else if (sectionId === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">

            {/* ── Pill bar ── always pill-shaped */}
            <div
                ref={navRef}
                className="flex items-center justify-between px-6 py-3 rounded-full bg-transparent border border-transparent transition-all duration-500 ease-out"
            >
                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                    <a
                        href="/#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                    >
                        <img src="/img/optimized/logo-dragolabs-256.webp" width="256" height="256" alt="Drago Labs Logo" className="w-full h-full object-cover" />
                    </a>
                    <a
                        href="/#hero"
                        onClick={(e) => handleNavClick(e, 'hero')}
                        className="font-sans font-bold text-lg tracking-wide hover:text-drago-accent transition-colors"
                    >
                        Drago Labs
                    </a>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === '/' && activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={`/#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`text-sm font-medium transition-colors ${
                                    isActive ? 'text-drago-accent font-semibold' : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Right side CTA */}
                <div className="flex items-center gap-3">
                    <a
                        href="/#contatti"
                        onClick={(e) => handleNavClick(e, 'contatti')}
                        className="hidden md:inline-flex items-center gap-2 bg-drago-accent hover:bg-drago-accent/90 text-white px-5 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,115,160,0.4)]"
                    >
                        Consulenza Gratuita
                    </a>
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown — separate panel below the pill ── */}
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
                                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                                    isActive ? 'text-drago-accent bg-white/5 font-semibold' : 'text-gray-200 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    <div className="px-2 pt-3 pb-1">
                        <a
                            href="/#contatti"
                            onClick={(e) => handleNavClick(e, 'contatti')}
                            className="block w-full text-center bg-drago-accent hover:bg-drago-accent/90 text-white px-5 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,115,160,0.4)]"
                        >
                            Consulenza Gratuita
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
