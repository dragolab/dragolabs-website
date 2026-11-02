import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, Code2, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 40,
                opacity: 0,
                duration: 1.1,
                stagger: 0.09,
                ease: 'power3.out',
                delay: 0.15
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
            className="relative min-h-[92svh] md:min-h-screen flex flex-col items-center pt-28 pb-10 md:pb-14 overflow-hidden"
        >
            {/* Top spacer */}
            <div className="flex-[0.45] md:flex-1" />

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                <div ref={textRef} className="space-y-6 max-w-4xl flex flex-col items-center">
                    
                    {/* Atmospheric Tag / Studio Metadata */}
                    <div className="stagger-text inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 font-mono text-xs text-drago-accent shadow-[0_0_20px_rgba(0,115,160,0.18)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="tracking-wider">GIANLUCA DRAGONE · DRAGO LABS</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-300">STUDIO & DIGITAL LAB 2026</span>
                    </div>

                    {/* Main Headline: Vision-focused */}
                    <h1 className="stagger-text font-sans font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.08] text-balance text-drago-contrast">
                        Dalla logica classica <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-drago-accent">
                            all'ingegneria del software.
                        </span>
                    </h1>

                    {/* Subtitle: The Craft & Story */}
                    <p className="stagger-text font-sans font-light text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
                        Progetto e sviluppo prodotti web ad alte prestazioni. Siti istituzionali, applicativi su misura e workflow con intelligenza artificiale: <span className="text-white font-normal">nessun template preconfezionato, nessun codice superfluo</span>. Solo architetture veloci, pulite e pensate per durare.
                    </p>

                    {/* Vision Pillars Chips */}
                    <div className="stagger-text flex flex-wrap justify-center gap-2 pt-2 text-xs font-mono text-gray-300">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <GraduationCap className="w-3.5 h-3.5 text-drago-accent" />
                            <span>Informatica UniBa</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Code2 className="w-3.5 h-3.5 text-drago-accent" />
                            <span>Architetture Sartoriali</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Cpu className="w-3.5 h-3.5 text-drago-accent" />
                            <span>Lighthouse 95+ First</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Layers className="w-3.5 h-3.5 text-drago-accent" />
                            <span>AI Agent Argo Integrato</span>
                        </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="stagger-text pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                        <a
                            href="#progetti"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 overflow-hidden shadow-[0_0_25px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Esplora i Casi Studio
                                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </a>

                        <a
                            href="#contatti"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Parliamo del tuo progetto
                                <span className="cta-arrow-pulse">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>

                    {/* Quick interactive assistant link */}
                    <div className="stagger-text pt-3">
                        <a
                            href="#chi-sono"
                            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors py-1.5 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-drago-accent animate-pulse" />
                            <span>Vuoi scoprire cosa faccio? Fai una domanda ad <strong>Argo AI</strong></span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom spacer */}
            <div className="flex-[0.45] md:flex-1" />

            {/* Scroll indicator */}
            <a
                href="#metodo"
                className="stagger-text relative z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Scorri verso il metodo"
            >
                <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">Scorri per scoprire</span>
                <div className="animate-bounce">
                    <ArrowDown className="w-4 h-4 text-white" />
                </div>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
            </a>
        </section>
    );
}
