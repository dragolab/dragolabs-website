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
        <div className="min-h-screen relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="Background" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-drago-bg" />
            </div>

            <div ref={textRef} className="relative z-10 max-w-4xl mx-auto space-y-6">
                <h2 className="stagger-text font-sans font-bold text-drago-secondary uppercase tracking-[0.2em] text-sm md:text-base">
                    Drago Labs
                </h2>
                <h1 className="stagger-text font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-balance text-drago-contrast">
                    {title}
                </h1>
                <p className="stagger-text font-serif italic text-2xl text-drago-accent mt-4">
                    Work in progress...
                </p>
            </div>
        </div>
    );
}
