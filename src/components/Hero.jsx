import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, Terminal, Code2, Cpu, ArrowUpRight } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 35,
                opacity: 0,
                duration: 1.1,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return undefined;
        const observer = new IntersectionObserver(([entry]) => {
            element.classList.toggle('is-in-viewport', entry.isIntersecting);
        }, { threshold: 0.1 });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative min-h-[92svh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1520px] mx-auto overflow-hidden"
        >
            {/* Top spacer */}
            <div className="hidden lg:block h-6" />

            {/* Main Stage */}
            <div ref={textRef} className="relative z-10 w-full flex flex-col items-center text-center my-auto">
                
                {/* Main Headline — High-impact, wide, tight tracking */}
                <h1 className="stagger-text font-display font-extrabold text-5xl sm:text-7xl lg:text-[6rem] xl:text-[6.8rem] tracking-[-0.035em] leading-[1.04] text-balance max-w-6xl text-white">
                    Dalla logica classica <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-drago-contrast to-drago-accent">
                        all'ingegneria del software.
                    </span>
                </h1>

                {/* Subtitle Statement */}
                <p className="stagger-text font-sans font-light text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mt-6 sm:mt-8 leading-relaxed text-balance">
                    Progetto e sviluppo prodotti digitali ad alte prestazioni. Siti web veloci, piattaforme su misura e automazioni intelligenti: <span className="text-white font-normal">nessun template prefabbricato, nessun codice superfluo</span>. Solo architetture pulite, veloci e costruite per durare.
                </p>

                {/* Actions & Interactive Elements */}
                <div className="stagger-text pt-8 sm:pt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-md sm:max-w-none">
                    <a
                        href="#progetti"
                        className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 font-sans font-bold text-base text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 overflow-hidden shadow-[0_0_30px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            Esplora i Progetti
                            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#contatti"
                        className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 font-sans font-bold text-base text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-full hover:scale-105 border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.04)] w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            Inizia un Progetto
                            <ArrowUpRight className="w-4 h-4 text-drago-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </a>
                </div>

                {/* Interactive Argo prompt badge */}
                <div className="stagger-text pt-6 sm:pt-7">
                    <a
                        href="#chi-sono"
                        className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-mono text-gray-300 hover:text-white hover:border-drago-accent/50"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <Sparkles className="w-3.5 h-3.5 text-drago-accent group-hover:rotate-12 transition-transform" />
                        <span>Chiedi qualsiasi cosa ad <strong>Argo</strong>, l'assistente del Lab</span>
                        <span className="text-drago-accent group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>

            {/* Bottom Telemetry & Navigation Dock — Widescreen, responsive */}
            <div className="stagger-text relative z-10 w-full pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-drago-accent" />
                        <span className="text-gray-300">CORE: REACT 19 · TYPESCRIPT · GSAP</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-drago-accent" />
                        <span className="text-gray-300">PERFORMANCE: LIGHTHOUSE 98+</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-drago-accent" />
                        <span className="text-gray-300">ARCHITETTURE: ZERO BUILDER PESANTI</span>
                    </div>
                </div>

                <a
                    href="#metodo"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                    <span className="uppercase tracking-widest text-[11px]">Scopri il Metodo</span>
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-drago-accent group-hover:text-white transition-colors">
                        <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                    </div>
                </a>
            </div>
        </section>
    );
}
