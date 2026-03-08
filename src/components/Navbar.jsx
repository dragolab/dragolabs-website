import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { to: '/', label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { to: '/chi-sono', label: 'Chi sono' },
    { to: '/servizi', label: 'Servizi' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/blog', label: 'Blog' },
    { to: '/contatti', label: 'Contatti' },
];

export default function Navbar() {
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);

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
                        navRef.current.classList.remove('bg-transparent', 'border-transparent');
                    } else {
                        navRef.current.classList.add('bg-transparent', 'border-transparent');
                    }
                }
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

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

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">

            {/* ── Pill bar ── always pill-shaped */}
            <div
                ref={navRef}
                className="flex items-center justify-between px-6 py-3 rounded-full bg-transparent border border-transparent transition-all duration-500 ease-out"
            >
                {/* Logo + Name */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                        onClick={() => setMobileOpen(false)}
                    >
                        <img src="/img/logo-dragolabs.png" alt="Drago Labs Logo" className="w-full h-full object-cover" />
                    </Link>
                    <Link
                        to="/"
                        className="font-sans font-bold text-lg tracking-wide"
                        onClick={() => setMobileOpen(false)}
                    >
                        Drago Labs
                    </Link>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={link.onClick}
                            className="text-lg font-medium hover:text-drago-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <a
                        href="mailto:info.dragolabs@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block bg-drago-accent hover:bg-drago-accent/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
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
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => { link.onClick?.(); setMobileOpen(false); }}
                            className="px-4 py-3 text-lg font-medium hover:text-drago-accent hover:bg-white/5 rounded-xl transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="px-2 pt-3 pb-1">
                        <a
                            href="mailto:info.dragolabs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-drago-accent hover:bg-drago-accent/90 text-white px-5 py-3 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95"
                            onClick={() => setMobileOpen(false)}
                        >
                            Consulenza Gratuita
                        </a>
                    </div>
                </div>
            </div>

        </nav>
    );
}
