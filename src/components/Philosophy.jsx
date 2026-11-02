import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Compass, Terminal, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: '01',
        title: 'Comprendere & Decostruire',
        subtitle: 'Analisi logica prima di qualsiasi riga di codice',
        desc: 'Chi utilizzerà la piattaforma? Quale ostacolo operativo o commerciale dobbiamo eliminare? Identifico le priorità reali e taglio ciò che è superfluo, per concentrare le risorse su ciò che genera valore.',
        icon: Search,
        tag: 'Analisi & Scope'
    },
    {
        num: '02',
        title: 'Architettura & Design Sartoriale',
        subtitle: 'Interfacce modellate sul modo in cui le persone decidono',
        desc: 'Nessun template prefabbricato: progetto la struttura informativa, la gerarchia visiva e l’esperienza utente affinché la navigazione sia istintiva, elegante e perfettamente coerente con l’identità del tuo brand.',
        icon: Compass,
        tag: 'UX / UI Design'
    },
    {
        num: '03',
        title: 'Ingegneria del Software & Performance',
        subtitle: 'Codice moderno, leggero e focalizzato sulla velocità',
        desc: 'Sviluppo con standard moderni (React, TypeScript, architetture serverless o temi sartoriali). Il risultato sono tempi di risposta istantanei (< 0.7s), punteggi Core Web Vitals massimi e totale sicurezza.',
        icon: Terminal,
        tag: 'Ingegneria Web'
    },
    {
        num: '04',
        title: 'Autonomia, Automazioni & AI',
        subtitle: 'Sistemi indipendenti e flussi intelligenti',
        desc: 'Consegno piattaforme semplici da gestire in totale autonomia, senza vincoli di dipendenza tecnica. Integro automazioni e agenti virtuali intelligenti per ridurre le mansioni ripetitive e supportare i clienti.',
        icon: Cpu,
        tag: 'Autonomia & AI'
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
        <section id="metodo" ref={sectionRef} className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                {/* Section Header */}
                <header className="method-reveal mx-auto mb-16 md:mb-20 max-w-3xl text-center">
                    <span className="font-mono text-xs text-drago-accent uppercase tracking-widest px-3.5 py-1 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-4">
                        La Visione & Il Metodo
                    </span>
                    <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-drago-contrast tracking-tight text-balance">
                        Dal problema al prodotto.
                    </h2>
                    <p className="mt-5 text-base sm:text-xl font-light text-gray-300 leading-relaxed text-balance">
                        Un sito web o una web application non dovrebbero mai essere un esercizio di stile fine a se stesso. Costruisco strumenti digitali attraverso un percorso rigoroso, trasparente e focalizzato sui risultati.
                    </p>
                    <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </header>

                {/* 4 Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.num}
                                className="method-reveal group rounded-[1.75rem] border border-white/10 bg-drago-text/40 p-8 md:p-9 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-drago-accent/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,115,160,0.18)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-xl bg-drago-accent/10 border border-drago-accent/30 flex items-center justify-center text-drago-accent group-hover:scale-110 transition-transform">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-mono text-xs text-drago-accent uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10">
                                                {s.tag}
                                            </span>
                                        </div>
                                        <span className="font-mono text-3xl font-bold text-white/20 group-hover:text-drago-accent/50 transition-colors">
                                            {s.num}
                                        </span>
                                    </div>

                                    <h3 className="font-sans font-bold text-2xl text-white mb-2 group-hover:text-drago-contrast transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-drago-accent/90 font-medium mb-4">
                                        {s.subtitle}
                                    </p>
                                    <p className="font-sans text-sm sm:text-base font-light text-gray-300 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                                    <span>FASE {i + 1} DI 4</span>
                                    <span className="group-hover:text-drago-accent transition-colors">Rigore & Precisione →</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Manifesto quote banner */}
                <div className="method-reveal mt-16 p-8 rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md text-center max-w-4xl mx-auto">
                    <p className="font-sans text-lg sm:text-2xl font-light text-gray-200 italic leading-relaxed">
                        "La bellezza di un'architettura software risiede nella sua essenzialità: quando ogni elemento ha un motivo d'esistere e nessun byte è sprecato."
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-drago-accent" />
                        <span>Gianluca Dragone · Drago Labs</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
