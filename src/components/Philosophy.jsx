import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Compass, Terminal, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const icons = [Search, Compass, Terminal, Cpu];

export default function Philosophy() {
    const sectionRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.method-reveal',
                { y: 24, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.07,
                    ease: 'power2.out',
                    force3D: true,
                    clearProps: 'transform,opacity',
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="metodo" ref={sectionRef} className="relative w-full border-t border-white/10 overflow-hidden bg-[#070b12] py-16 sm:py-20 lg:py-24 xl:py-28 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            {/* Distinct Philosophy Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[55vh] bg-blue-500/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10 w-full">
                
                {/* Section Header */}
                <header className="method-reveal mx-auto mb-10 sm:mb-12 lg:mb-8 xl:mb-12 max-w-4xl text-center">
                    <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white tracking-tight text-balance">
                        {t.philosophy.title}
                    </h2>
                    <p className="mt-2.5 text-base sm:text-xl lg:text-lg xl:text-xl font-normal text-gray-200 leading-relaxed text-balance">
                        {t.philosophy.subtitle}
                    </p>
                </header>

                {/* 4 Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
                    {t.philosophy.steps.map((s, idx) => {
                        const Icon = icons[idx] || Search;
                        return (
                            <div
                                key={s.num}
                                className="method-reveal group rounded-[2rem] border border-white/15 bg-black/40 p-7 xl:p-9 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent hover:shadow-[0_0_35px_rgba(0,115,160,0.25)] flex flex-col justify-between will-change-[transform,opacity]"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-drago-accent/20 border border-drago-accent/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-drago-accent" />
                                        </div>
                                        <span className="font-mono text-3xl font-extrabold text-white/30 group-hover:text-drago-accent/70 transition-colors">
                                            {s.num}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-bold text-2xl xl:text-3xl text-white mb-2 group-hover:text-drago-contrast transition-colors tracking-tight">
                                        {s.title}
                                    </h3>
                                    <p className="font-sans text-sm sm:text-base text-gray-300 font-medium mb-4">
                                        {s.subtitle}
                                    </p>
                                    <p className="font-sans text-base sm:text-lg font-normal text-gray-200 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
