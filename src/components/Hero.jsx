import { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroAtmosphere from './HeroAtmosphere';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { t } = useLanguage();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 35,
                opacity: 0,
                duration: 1.1,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.1,
                clearProps: 'transform'
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
            className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#030508]"
        >
            {/* Distinct Hero Atmospheric Lighting & Interactive Particle Constellation */}
            <HeroAtmosphere />

            {/* Content Container constrained and centered */}
            <div className="relative z-10 w-full max-w-[1520px] mx-auto flex-1 flex flex-col justify-between pt-28 md:pt-36 pb-10 md:pb-14 px-4 sm:px-8 lg:px-12 xl:px-16">
                {/* Top spacer */}
                <div className="hidden lg:block h-6" />

                {/* Main Stage */}
                <div ref={textRef} className="relative z-10 w-full flex flex-col items-center text-center my-auto">
                
                {/* Main Headline */}
                <h1 className="stagger-text font-display font-extrabold text-5xl sm:text-7xl lg:text-[6.2rem] xl:text-[7.2rem] tracking-[-0.035em] leading-[1.06] max-w-6xl text-white">
                    <span className="block text-white">{t.hero.titleLine1}</span>
                    <span className="headline-gradient block sm:inline-block">
                        {t.hero.titleLine2}
                    </span>
                    <span className="sr-only"> - Drago Labs: Sviluppo Web Sartoriale, Applicativi Performanti e Automazioni AI a Bari e in tutta Italia</span>
                </h1>

                {/* Subtitle Statement */}
                <p className="stagger-text font-sans font-normal text-lg sm:text-2xl lg:text-[1.75rem] text-gray-100 max-w-4xl mx-auto mt-7 sm:mt-9 leading-relaxed sm:leading-[1.45] text-balance">
                    {t.hero.subtitle}
                </p>

                {/* Actions & Interactive Elements */}
                <div className="stagger-text pt-9 sm:pt-11 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-md sm:max-w-none">
                    <a
                        href="#progetti"
                        className="group relative inline-flex items-center justify-center px-9 sm:px-11 py-4 sm:py-4.5 font-sans font-bold text-base sm:text-lg text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_25px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            {t.hero.exploreProjects}
                            <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#contatti"
                        className="group relative inline-flex items-center justify-center px-9 sm:px-11 py-4 sm:py-4.5 font-sans font-bold text-base sm:text-lg text-white transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-full hover:scale-105 active:scale-95 border border-white/20 shadow-sm w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            {t.hero.startProject}
                            <ArrowUpRight className="w-5 h-5 text-drago-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Bottom Navigation Link */}
            <div className="stagger-text relative z-10 w-full pt-8 md:pt-10 flex justify-center">
                <a
                    href="#metodo"
                    className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group font-sans text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 active:scale-95"
                >
                    <span className="uppercase tracking-widest text-xs sm:text-sm">{t.hero.discoverMethod}</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-white" />
                </a>
            </div>
            </div>
        </section>
    );
}
