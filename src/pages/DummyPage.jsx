import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function DummyPage({ title }) {
    const textRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from('.stagger-text', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, textRef);

        return () => ctx.revert();
    }, [title]);

    return (
        <section className="relative min-h-screen px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-drago-bg" />
            </div>

            <div ref={textRef} className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center">
                <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <h1 className="stagger-text font-sans text-5xl font-bold text-balance text-drago-contrast md:text-6xl">
                        {title}
                    </h1>
                    <p className="stagger-text mt-6 font-sans text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                        <span className="text-drago-accent italic">Work in progress...</span>
                    </p>
                    <div className="stagger-text w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </div>
            </div>
        </section>
    );
}
