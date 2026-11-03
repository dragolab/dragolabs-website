import { createElement, useEffect, useRef } from 'react';
import { Globe2, MonitorSmartphone, Bot, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const icons = [Globe2, MonitorSmartphone, Bot];

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="servizi" ref={sectionRef} className="relative w-full border-t border-white/10 overflow-hidden bg-gradient-to-b from-[#060a0f] via-[#0b1018] to-[#070b10] py-16 sm:py-20 lg:py-12 xl:py-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            
            {/* Distinct Services Background */}
            <div className="absolute top-0 right-0 w-[60vw] max-w-[1200px] h-[60vw] max-h-[900px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,115,160,0.12),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10 w-full">
                {/* Unified Section Header */}
                <header className="mx-auto mb-10 sm:mb-12 lg:mb-8 xl:mb-12 max-w-4xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-2.5 font-semibold">
                        {t.services.badge}
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white tracking-tight text-balance">
                        {t.services.title}
                    </h2>
                    <p className="mt-2.5 text-base sm:text-xl lg:text-lg xl:text-xl font-normal text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </header>

                {/* 3-Column Balanced Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {t.services.items.map(({ title, description, deliverables }, idx) => {
                        const Icon = icons[idx] || Globe2;
                        return (
                            <article
                                key={title}
                                className="service-card group flex flex-col justify-between rounded-[2.2rem] border border-white/15 bg-black/40 p-8 xl:p-10 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-drago-accent hover:shadow-[0_0_30px_rgba(0,115,160,0.25)]"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-drago-accent/25 transition-all text-white">
                                        {createElement(Icon, { className: 'h-7 w-7 text-drago-accent', 'aria-hidden': true })}
                                    </div>
                                    <h3 className="font-display text-2xl xl:text-3xl font-bold text-white mb-3.5 group-hover:text-drago-contrast transition-colors tracking-tight">
                                        {title}
                                    </h3>
                                    <p className="font-sans text-base sm:text-lg font-normal leading-relaxed text-gray-200">
                                        {description}
                                    </p>
                                </div>

                                <ul className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2" aria-label={`Deliverables ${title}`}>
                                    {deliverables.map((item) => (
                                        <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-mono text-gray-200 font-medium">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom Callout banner */}
                <div className="mt-16 p-8 sm:p-10 rounded-[2rem] border border-white/15 bg-white/[0.03] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
                    <div>
                        <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">{t.services.calloutTitle}</h4>
                        <p className="text-base sm:text-lg font-normal text-gray-200 mt-1.5">{t.services.calloutSubtitle}</p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-sans text-base font-bold transition-all hover:scale-105 shadow-md flex-shrink-0 active:scale-95"
                    >
                        {t.services.calloutCta}
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
