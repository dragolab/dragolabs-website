import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const manifestoRef = useRef(null);

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

    return (
        <section className="relative py-40 border-y border-white/5 overflow-hidden">
            {/* Texture background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] pointer-events-none" />

            <div ref={manifestoRef} className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <p className="manifesto-text font-sans text-xl md:text-3xl text-drago-secondary/80 font-light leading-relaxed mb-6">
                    "La maggior parte delle agenzie si concentra sul codice generico e su template pre-confezionati."
                </p>
                <p className="manifesto-text font-serif italic text-4xl md:text-5xl lg:text-7xl text-drago-contrast mt-8 leading-tight text-balance">
                    Noi ci concentriamo sull'<span className="text-drago-accent">Innovazione Organica</span> e sartoriale.
                </p>
            </div>
        </section>
    );
}
