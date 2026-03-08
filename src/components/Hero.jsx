import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

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

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/img/background.png"
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-drago-bg" />
            </div>

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                <div ref={textRef} className="space-y-6 max-w-4xl">
                    <h1 className="stagger-text font-sans font-bold text-6xl md:text-8xl lg:text-[6rem] leading-tight text-balance text-drago-contrast">
                        Drago Labs
                    </h1>

                    <h2 className="stagger-text font-sans font-light text-xl md:text-2xl lg:text-3xl leading-tight text-balance mt-4 text-drago-contrast">
                        Soluzioni per la <span className="text-drago-accent">crescita online</span> del tuo business
                    </h2>

                    <p className="stagger-text font-sans font-light text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed text-balance">
                        Sviluppo web, e-commerce, e <span className="text-drago-accent">assistenza tech su misura</span> con tecnologie all'avanguardia
                    </p>

                    <div className="stagger-text pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="mailto:info.dragolabs@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 overflow-hidden shadow-[0_0_20px_rgba(0,115,160,0.5)] w-full sm:w-auto">
                            <span className="relative z-10 flex items-center gap-2">
                                Prima consulenza gratuita
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                        <a href="#portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto">
                            <span className="relative z-10 flex items-center gap-2">
                                Vedi portfolio
                                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="stagger-text absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 md:gap-4 opacity-50">
                <div className="animate-bounce">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
