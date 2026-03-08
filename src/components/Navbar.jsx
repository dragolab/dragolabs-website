import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Morphing effect: transparent at top, glassmorphic past hero
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: {
                    className: 'glass',
                    targets: navRef.current
                }
            });
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: {
                    className: 'bg-transparent',
                    targets: navRef.current
                },
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

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
            <div
                ref={navRef}
                className="flex items-center justify-between px-6 py-3 rounded-full bg-transparent border border-transparent transition-all duration-500 ease-out"
            >
                <div className="flex items-center gap-3">
                    <Link to="/" className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                        <img src="/img/logo-dragolabs.png" alt="Drago Labs Logo" className="w-full h-full object-cover" />
                    </Link>
                    <Link to="/" className="font-sans font-bold text-lg tracking-wide hidden sm:block">Drago Labs</Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-lg font-medium hover:text-drago-accent transition-colors">Home</Link>
                    <Link to="/chi-sono" className="text-lg font-medium hover:text-drago-accent transition-colors">Chi sono</Link>
                    <Link to="/servizi" className="text-lg font-medium hover:text-drago-accent transition-colors">Servizi</Link>
                    <Link to="/portfolio" className="text-lg font-medium hover:text-drago-accent transition-colors">Portfolio</Link>
                    <Link to="/blog" className="text-lg font-medium hover:text-drago-accent transition-colors">Blog</Link>
                    <Link to="/contatti" className="text-lg font-medium hover:text-drago-accent transition-colors">Contatti</Link>
                </div>

                <div className="flex items-center gap-4">
                    <a href="mailto:info.dragolabs@gmail.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-drago-accent hover:bg-drago-accent/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
                        Consulenza Gratuita
                    </a>
                    <button className="md:hidden p-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
