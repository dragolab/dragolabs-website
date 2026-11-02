import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2
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
            className="relative min-h-[90svh] md:min-h-screen flex flex-col items-center pt-24 pb-8 md:pb-12 overflow-hidden"
        >
            {/* Flexible top spacer */}
            <div className="flex-[0.55] md:flex-1" />

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                <div ref={textRef} className="space-y-6 max-w-4xl flex flex-col items-center">
                    
                    {/* Status Badge */}
                    <div className="stagger-text inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 font-mono text-xs text-drago-accent mb-2 shadow-[0_0_15px_rgba(0,115,160,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="tracking-wider">DRAGO LABS · LABORATORIO DIGITALE</span>
                    </div>

                    <h1 className="stagger-text font-sans font-bold text-6xl md:text-8xl lg:text-[6rem] leading-tight text-balance text-drago-contrast">
                        Drago Labs
                    </h1>

                    <h2 className="stagger-text font-sans font-light text-xl md:text-2xl lg:text-3xl leading-tight text-balance mt-3 text-drago-contrast">
                        Soluzioni per la <span className="text-drago-accent">crescita online</span> del tuo business
                    </h2>

                    <p className="stagger-text font-sans font-light text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed text-balance">
                        Sviluppo web, applicativi su misura, e-commerce e <span className="text-drago-accent">automazioni AI</span> con tecnologie all'avanguardia
                    </p>

                    <div className="stagger-text pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                        {/* Prima consulenza gratuita — smooth scroll to #contatti */}
                        <a
                            href="#contatti"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 overflow-hidden shadow-[0_0_20px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Prima consulenza gratuita
                                <span className="cta-arrow-pulse">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </span>
                        </a>

                        {/* Guarda i progetti — smooth scroll to #progetti */}
                        <a
                            href="#progetti"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Guarda i progetti
                                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* Quick AI shortcut */}
                    <div className="stagger-text pt-4">
                        <a
                            href="#chi-sono"
                            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-drago-accent transition-colors py-1 px-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-drago-accent animate-spin-slow" />
                            <span>Hai una domanda al volo? Parla con l'assistente Argo</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Flexible bottom spacer */}
            <div className="flex-[0.35] md:flex-1" />

            {/* Scroll indicator */}
            <a
                href="#progetti"
                className="stagger-text relative z-10 flex flex-col items-center gap-2 md:gap-3 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Scorri verso i progetti"
            >
                <div className="animate-bounce">
                    <ArrowDown className="w-5 h-5 text-white" />
                </div>
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent" />
            </a>
        </section>
    );
}
