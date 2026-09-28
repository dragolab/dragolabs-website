import { createElement, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bot, Globe2, MonitorSmartphone, Palette, ShoppingBag, Wrench } from 'lucide-react';
import gsap from 'gsap';

const services = [
    {
        title: 'Siti web',
        description: 'Siti istituzionali, portfolio e landing page progettati per essere veloci, chiari e riconoscibili su ogni dispositivo.',
        deliverables: ['UX/UI su misura', 'SEO tecnico', 'Responsive design'],
        Icon: Globe2,
    },
    {
        title: 'Web app e app Android',
        description: 'Strumenti digitali su misura per semplificare processi, organizzare dati e offrire esperienze utili a clienti o team.',
        deliverables: ['Interfacce web', 'App Android', 'Integrazioni API'],
        Icon: MonitorSmartphone,
    },
    {
        title: 'Branding e presenza online',
        description: 'Una presenza coerente tra identità visiva, sito, contenuti e canali digitali, per rendere il tuo brand riconoscibile.',
        deliverables: ['Identità digitale', 'Strategia contenuti', 'Presenza locale'],
        Icon: Palette,
    },
    {
        title: 'Workflow agentici e multiagentici',
        description: 'Automazioni personalizzate con agenti AI per ridurre attività ripetitive, collegare strumenti e rendere i flussi più efficienti.',
        deliverables: ['Analisi del flusso', 'Agenti su misura', 'Automazioni integrate'],
        Icon: Bot,
    },
    {
        title: 'E-commerce',
        description: 'Negozi online curati nell’esperienza d’acquisto, nella gestione dei prodotti e nell’integrazione con i processi operativi.',
        deliverables: ['Catalogo e checkout', 'Pagamenti', 'Gestione autonoma'],
        Icon: ShoppingBag,
    },
    {
        title: 'Supporto e assistenza informatica',
        description: 'Affiancamento tecnico per siti, strumenti digitali, postazioni e problematiche informatiche quotidiane.',
        deliverables: ['Manutenzione', 'Supporto tecnico', 'Consulenza operativa'],
        Icon: Wrench,
    },
];

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.services-reveal',
                { y: 38, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 },
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-drago-bg px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
            <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="h-full w-full object-cover mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-drago-bg/85 to-drago-bg" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <header className="services-reveal mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-drago-accent">Servizi</p>
                    <h1 className="font-sans text-5xl font-bold text-balance text-drago-contrast md:text-6xl">Tecnologia utile, progettata intorno a te.</h1>
                    <p className="mt-6 text-lg font-light leading-relaxed text-gray-300 md:text-xl">Dalla prima idea al supporto nel tempo, costruisco strumenti digitali che migliorano il modo in cui lavori e comunichi online.</p>
                    <div className="mx-auto mt-8 h-px w-24 bg-drago-accent" />
                </header>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, description, deliverables, Icon }) => (
                        <article key={title} className="services-reveal group flex min-h-80 flex-col rounded-[1.5rem] border border-white/10 bg-drago-text/60 p-6 shadow-xl backdrop-blur-xl transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-drago-accent/60 hover:shadow-[0_0_24px_rgba(0,115,160,0.18)]">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-drago-accent/40 bg-drago-accent/10 text-drago-accent">
                                {createElement(Icon, { className: 'h-6 w-6', 'aria-hidden': true })}
                            </div>
                            <h2 className="mt-6 font-sans text-2xl font-bold text-white">{title}</h2>
                            <p className="mt-3 font-light leading-relaxed text-gray-300">{description}</p>
                            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`Cosa include ${title}`}>
                                {deliverables.map((item) => <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">{item}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>

                <section className="services-reveal mt-16 rounded-[2rem] border border-drago-accent/35 bg-drago-text/65 px-7 py-10 text-center shadow-2xl backdrop-blur-xl md:mt-20 md:px-12 md:py-14">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-drago-accent">Un progetto, non un pacchetto standard</p>
                    <h2 className="mx-auto mt-4 max-w-3xl font-sans text-3xl font-bold text-balance text-white md:text-5xl">Partiamo dal problema da risolvere, non dalla tecnologia da vendere.</h2>
                    <p className="mx-auto mt-5 max-w-2xl font-light leading-relaxed text-gray-300">Raccontami dove vuoi arrivare: individuiamo insieme il percorso e gli strumenti più adatti.</p>
                    <Link to="/contatti" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-drago-accent px-7 py-4 font-bold text-white transition-transform duration-300 hover:scale-105 active:scale-95">
                        Parliamo del tuo progetto
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                </section>
            </div>
        </section>
    );
}