import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const manifestoRef = useRef(null);
    const [pulsing, setPulsing] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.manifesto-text', {
                scrollTrigger: {
                    trigger: manifestoRef.current,
                    start: 'top 70%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, manifestoRef);
        return () => ctx.revert();
    }, []);

    // Arrow pulse every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setPulsing(true);
            setTimeout(() => setPulsing(false), 600);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-40 border-y border-white/5 overflow-hidden">
            {/* Texture background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] pointer-events-none" />

            <div ref={manifestoRef} className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <p className="manifesto-text font-sans text-xl md:text-3xl text-drago-secondary/80 font-light leading-relaxed mb-6">
                    Dicevano che un sito web sarebbe servito in futuro, poi il futuro è arrivato.
                </p>
                <p className="manifesto-text font-serif italic text-4xl md:text-5xl lg:text-7xl text-drago-contrast mt-8 leading-tight text-balance">
                    Resta al passo: con noi hai l'opportunità per <span className="text-drago-accent">crescere online</span>.
                </p>

                {/* CTA Button with breathing glow */}
                <div className="manifesto-text mt-12 flex justify-center">
                    <div className="relative inline-flex">
                        <style>{`
                            @keyframes glowBreath {
                                0%   { box-shadow: 0 0 20px 4px rgba(0,115,160,0.45); }
                                50%  { box-shadow: 0 0 45px 18px rgba(0,115,160,0.2); }
                                100% { box-shadow: 0 0 20px 4px rgba(0,115,160,0.45); }
                            }
                        `}</style>

                        <a
                            href="/contatti"
                            className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-drago-accent text-white font-bold text-base md:text-lg transition-all duration-300 hover:bg-drago-accent/90 hover:scale-105"
                            style={{ animation: 'glowBreath 3s ease-in-out infinite' }}
                        >
                            Contattaci ora
                            <span
                                className="inline-flex items-center justify-center w-6 h-6"
                                style={{
                                    transform: pulsing ? 'translate(3px, -3px)' : 'translate(0, 0)',
                                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                }}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
