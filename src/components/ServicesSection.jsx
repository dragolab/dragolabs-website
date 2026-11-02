import { createElement, useEffect, useRef } from 'react';
import { Bot, Globe2, MonitorSmartphone, Palette, ShoppingBag, Wrench, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Siti web & Portali Istituzionali',
        description: 'Siti istituzionali, portfolio e landing page progettati per essere veloci, autorevoli e convertire visitatori in contatti reali.',
        deliverables: ['UX/UI su misura', 'SEO semantico', 'Core Web Vitals 95+'],
        Icon: Globe2,
    },
    {
        title: 'Web app & Applicativi su misura',
        description: 'Strumenti digitali personalizzati per semplificare processi operativi, gestire dati e offrire esperienze interattive a clienti o team.',
        deliverables: ['Dashboard & Gestionali', 'PWA & App Android', 'Integrazioni API'],
        Icon: MonitorSmartphone,
    },
    {
        title: 'Workflow Agentici & Automazioni AI',
        description: 'Automazioni intelligenti con agenti AI per ridurre attività ripetitive, elaborare flussi di dati e connettere i tuoi strumenti di lavoro.',
        deliverables: ['Agenti AI dedicati', 'Automazioni processi', 'Integrazione LLM'],
        Icon: Bot,
    },
    {
        title: 'E-commerce & Negozi Online',
        description: 'Negozi online curati nell’esperienza d’acquisto, nella gestione autonoma dei prodotti e nell’integrazione con i sistemi di pagamento.',
        deliverables: ['Catalogo & Checkout fluido', 'Stripe & PayPal', 'Pannello di controllo autonomo'],
        Icon: ShoppingBag,
    },
    {
        title: 'Branding & Identità Digitale',
        description: 'Una presenza solida e coordinata tra design del sito, contenuti e comunicazione, per rendere il tuo brand immediatamente riconoscibile.',
        deliverables: ['Design System coerente', 'Tipografia & Palette', 'Ottimizzazione profili social'],
        Icon: Palette,
    },
    {
        title: 'Supporto & Assistenza Informatica',
        description: 'Affiancamento tecnico continuativo per siti, hosting, sicurezza, caselle email e problematiche tecnologiche quotidiane.',
        deliverables: ['Manutenzione programmata', 'Backup & Sicurezza', 'Risoluzione rapida problemi'],
        Icon: Wrench,
    },
];

export default function ServicesSection() {
    const sectionRef = useRef(null);

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
        <section id="servizi" ref={sectionRef} className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">
                {/* Header */}
                <header className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="font-mono text-xs text-drago-accent uppercase tracking-widest px-3.5 py-1 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3">
                        Cosa Facciamo
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance">
                        Servizi & Soluzioni Digitali
                    </h2>
                    <p className="mt-4 text-base sm:text-lg font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Dalla prima idea fino al deploy e al supporto continuo: sviluppiamo tecnologia su misura, veloce e progettata per farti lavorare meglio.
                    </p>
                </header>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, description, deliverables, Icon }) => (
                        <article
                            key={title}
                            className="service-card group flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-drago-text/40 p-7 xl:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-drago-accent/70 hover:shadow-[0_0_24px_rgba(0,115,160,0.22)]"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-drago-accent/10 border border-drago-accent/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-drago-accent/20 transition-all">
                                    {createElement(Icon, { className: 'h-6 w-6 text-drago-accent', 'aria-hidden': true })}
                                </div>
                                <h3 className="font-display text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-drago-contrast transition-colors">
                                    {title}
                                </h3>
                                <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-gray-300">
                                    {description}
                                </p>
                            </div>

                            <ul className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-1.5" aria-label={`Cosa include ${title}`}>
                                {deliverables.map((item) => (
                                    <li key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-gray-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Bottom Callout banner */}
                <div className="mt-14 p-8 rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    <div>
                        <h4 className="font-display font-bold text-xl sm:text-2xl text-white">Hai un progetto o un'esigenza specifica?</h4>
                        <p className="text-sm font-light text-gray-300 mt-1">Parliamone insieme: definiamo subito la soluzione tecnologica più adatta.</p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-drago-accent hover:bg-drago-accent/90 text-white font-sans text-sm font-bold transition-all hover:scale-105 flex-shrink-0 shadow-[0_0_20px_rgba(0,115,160,0.4)]"
                    >
                        Richiedi una consulenza
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
