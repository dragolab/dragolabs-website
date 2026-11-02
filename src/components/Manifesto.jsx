import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
    const manifestoRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.manifesto-text',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }, manifestoRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const element = manifestoRef.current;
        if (!element) return undefined;
        const observer = new IntersectionObserver(([entry]) => {
            element.classList.toggle('is-in-viewport', entry.isIntersecting);
        }, { threshold: 0.1 });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-24 md:py-40 border-t border-white/10 overflow-hidden bg-black">
            {/* Distinct Theatrical Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-drago-accent/15 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div ref={manifestoRef} className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <p className="manifesto-text font-productsans text-xl md:text-3xl text-gray-200 font-normal leading-relaxed mb-6">
                    {t.manifesto.quote1}
                </p>
                <p className="manifesto-text font-serif italic text-4xl md:text-5xl lg:text-7xl text-drago-contrast mt-8 leading-tight text-balance">
                    {t.manifesto.quote2_prefix}
                    <span className="text-drago-accent">{t.manifesto.quote2_highlight}</span>
                    {t.manifesto.quote2_suffix}
                </p>

                {/* CTA Button with breathing glow */}
                <div className="manifesto-text mt-12 flex justify-center">
                    <div className="cta-glow relative inline-flex">
                        <a
                            href="/#contatti"
                            className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-base md:text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-md active:scale-95"
                        >
                            {t.manifesto.cta}
                            <span className="cta-arrow-pulse-diagonal inline-flex items-center justify-center w-6 h-6">
                                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
