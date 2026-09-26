import { createElement, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarDays, ChevronDown, Code2, LayoutTemplate, Target } from 'lucide-react';
import gsap from 'gsap';

const projects = [
    {
        title: 'Studio Legale Palmisano',
        category: 'Sito web',
        date: 'Settembre 2026',
        summary: 'Restyling e sviluppo di un sito istituzionale autorevole, chiaro e semplice da gestire.',
        image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
        imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
        width: 2848,
        height: 1416,
        link: 'https://www.avvstefanopalmisano.it/',
        details: [
            { label: 'Anno', value: '2026', Icon: CalendarDays },
            { label: 'Tecnologie', value: 'WordPress · tema personalizzato', Icon: Code2 },
            { label: 'Settore', value: 'Servizi legali', Icon: LayoutTemplate },
            { label: 'Focus', value: 'Identità e autonomia editoriale', Icon: Target },
        ],
        description: [
            'Restyling e sviluppo del sito web per Studio Legale Palmisano, con l’obiettivo di rafforzarne l’identità digitale attraverso un design autorevole, contemporaneo e distintivo.',
            'Il sito presenta lo studio, i professionisti e le principali aree di attività con una struttura dei contenuti chiara e facilmente navigabile. Include pagine servizi, profili professionali, contatti e moduli di richiesta informazioni, ottimizzati per una fruizione fluida da desktop e mobile.',
            'Realizzato con WordPress e tema personalizzato, il progetto offre una gestione editoriale semplice, flessibile e autonoma.',
        ],
    },
    {
        title: 'Casa Vacanze Vistamare',
        category: 'Sito web',
        date: 'Agosto 2025',
        summary: 'Un’esperienza digitale immersiva che valorizza la struttura e rende immediati informazioni e contatti.',
        image: '/img/optimized/casavacanze-vistamare-1600.webp',
        imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
        width: 2438,
        height: 1366,
        details: [
            { label: 'Anno', value: '2025', Icon: CalendarDays },
            { label: 'Tecnologie', value: 'React · TypeScript · Vite · Tailwind', Icon: Code2 },
            { label: 'Settore', value: 'Ospitalità e turismo', Icon: LayoutTemplate },
            { label: 'Focus', value: 'Esperienza e richieste di contatto', Icon: Target },
        ],
        description: [
            'Sito di presentazione per Casa Vacanze Vistamare, pensato per raccontare la struttura, il contesto e l’esperienza di soggiorno attraverso un’interfaccia essenziale e immersiva.',
            'La navigazione accompagna l’utente tra immagini, informazioni utili e punti di contatto, con una struttura progettata per risultare chiara e piacevole sia da desktop sia da mobile.',
            'Il progetto mette al centro la riconoscibilità della struttura e rende più immediata la richiesta di informazioni da parte degli ospiti.',
        ],
    },
];

function ProjectMeta({ details }) {
    return (
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {details.map(({ label, value, Icon }) => (
                <div key={label} className="bg-drago-text/80 px-5 py-4">
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-drago-accent">
                        {createElement(Icon, { className: 'h-3.5 w-3.5', 'aria-hidden': true })}
                        {label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-gray-200">{value}</dd>
                </div>
            ))}
        </dl>
    );
}

export default function Portfolio() {
    const containerRef = useRef(null);
    const [openProject, setOpenProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.portfolio-reveal',
                { y: 42, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out', delay: 0.12 },
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-drago-bg px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
            <div className="pointer-events-none absolute inset-0 opacity-45">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="h-full w-full object-cover mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-drago-bg/85 to-drago-bg" />
            </div>

            <div className="relative mx-auto max-w-5xl">
                <header className="portfolio-reveal mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <h1 className="font-sans text-5xl font-bold text-balance text-drago-contrast md:text-6xl">Portfolio</h1>
                    <p className="mt-5 text-lg font-light leading-relaxed text-gray-300 md:text-xl">Progetti digitali costruiti attorno all’identità, agli obiettivi e alle persone di ogni attività.</p>
                    <div className="mx-auto mt-8 h-px w-24 bg-drago-accent" />
                </header>

                <div className="space-y-10 md:space-y-14">
                    {projects.map((project) => {
                        const isOpen = openProject === project.title;
                        const detailId = `${project.title.toLowerCase().replaceAll(' ', '-')}-details`;

                        return (
                            <article key={project.title} className="portfolio-reveal overflow-hidden rounded-[1.75rem] border border-white/10 bg-drago-text/60 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:border-drago-accent/50">
                                <button type="button" onClick={() => setOpenProject(isOpen ? null : project.title)} aria-expanded={isOpen} aria-controls={detailId} className="group grid w-full text-left lg:grid-cols-[1.18fr_0.82fr]">
                                    <div className="min-h-64 p-3 sm:p-4">
                                        <div className="h-full overflow-hidden rounded-[1.35rem]">
                                            <img src={project.image} srcSet={project.imageSet} sizes="(min-width: 1024px) 590px, 100vw" width={project.width} height={project.height} loading="lazy" decoding="async" alt={`Anteprima del progetto ${project.title}`} className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9">
                                        <div className="mb-5 flex flex-wrap items-center gap-3">
                                            <span className="rounded-full border border-drago-accent/50 bg-drago-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-drago-accent">{project.category}</span>
                                            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400"><CalendarDays className="h-4 w-4 text-drago-accent" aria-hidden="true" />{project.date}</span>
                                        </div>
                                        <h2 className="text-balance font-sans text-3xl font-bold text-white md:text-4xl">{project.title}</h2>
                                        <p className="mt-4 font-light leading-relaxed text-gray-300">{project.summary}</p>
                                        <span className="mt-7 inline-flex items-center gap-2 font-semibold text-drago-accent">{isOpen ? 'Chiudi dettagli' : 'Scopri il progetto'}<ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></span>
                                    </div>
                                </button>

                                <div id={detailId} hidden={!isOpen} className="border-t border-white/10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
                                    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                                        <div className="space-y-4 font-light leading-relaxed text-gray-300">
                                            {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                        </div>
                                        <ProjectMeta details={project.details} />
                                    </div>
                                    {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex w-full items-center justify-between rounded-xl border border-drago-accent px-4 py-3 text-drago-accent transition-all duration-300 hover:border-drago-accent hover:bg-drago-accent hover:text-white sm:w-auto sm:min-w-64"><span className="font-semibold">Visita il progetto</span><ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></a> : <p className="mt-8 text-sm text-gray-400">Link al progetto disponibile prossimamente.</p>}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}