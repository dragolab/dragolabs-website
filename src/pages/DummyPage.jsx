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
        <section className="relative min-h-screen pt-56 pb-20 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="Background" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-drago-bg" />
            </div>

            <div ref={textRef} className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center">
                <div className="text-center mb-14">
                    <h1 className="stagger-text font-sans font-bold text-5xl md:text-6xl text-drago-contrast mb-4">
                        {title}
                    </h1>
                    <p className="stagger-text font-sans font-light text-lg md:text-xl text-gray-300">
                        <span className="text-drago-accent italic">Work in progress...</span>
                    </p>
                    <div className="stagger-text w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </div>
            </div>
        </section>
    );
}
