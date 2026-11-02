import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Compass, Terminal, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Comprendere & Decostruire',
        subtitle: 'Analisi logica prima di scrivere codice',
        desc: 'Chi utilizzerà la piattaforma? Quale ostacolo operativo o commerciale dobbiamo eliminare? Identifico le priorità reali e taglio ciò che è superfluo, per concentrare le risorse su ciò che genera valore reale.',
        icon: Search,
    },
    {
        num: '02',
        title: 'Architettura & Design',
        subtitle: 'Interfacce modellate sulle decisioni umane',
        desc: 'Nessun template prefabbricato: progetto la struttura informativa, la gerarchia visiva e l’esperienza utente affinché la navigazione sia istintiva, elegante e perfettamente coerente con l’identità del tuo brand.',
        icon: Compass,
    },
    {
        num: '03',
        title: 'Ingegneria & Prestazioni',
        subtitle: 'Codice moderno focalizzato sulla velocità',
        desc: 'Sviluppo con standard moderni (React, TypeScript, architetture serverless o temi sartoriali). Il risultato sono tempi di risposta istantanei (< 0.6s), punteggi Core Web Vitals massimi e totale sicurezza.',
        icon: Terminal,
    },
    {
        num: '04',
        title: 'Autonomia, Flussi & AI',
        subtitle: 'Sistemi indipendenti e flussi intelligenti',
        desc: 'Consegno piattaforme semplici da gestire in totale autonomia, senza vincoli di dipendenza tecnica. Integro automazioni e agenti virtuali intelligenti per ridurre le mansioni ripetitive e supportare i clienti.',
        icon: Cpu,
    }
];

export default function Philosophy() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.method-reveal',
                { y: 35, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="metodo" ref={sectionRef} className="relative py-24 md:py-36 border-t border-white/10 overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">
                
                {/* Section Header */}
                <header className="method-reveal mx-auto mb-16 md:mb-20 max-w-4xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3 font-semibold">
                        La Visione & Il Metodo
                    </span>
                    <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight text-balance">
                        Dal problema al prodotto.
                    </h2>
                    <p className="mt-4 text-lg sm:text-2xl font-normal text-gray-200 leading-relaxed text-balance">
                        Un sito web o una web application non dovrebbero mai essere un esercizio di stile fine a se stesso. Costruisco strumenti digitali attraverso un percorso rigoroso, trasparente e focalizzato sui risultati.
                    </p>
                </header>

                {/* 4 Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
                    {steps.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.num}
                                className="method-reveal group rounded-[2rem] border border-white/15 bg-drago-text/40 p-7 xl:p-9 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-drago-accent hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(0,115,160,0.25)] flex flex-col justify-between"
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
