import { useEffect } from 'react';
import { ArrowUpRight, CalendarDays, Code2, LayoutTemplate } from 'lucide-react';

const projects = [
    {
        title: 'Studio Legale Palmisano',
        date: 'Settembre 2026',
        category: 'Restyling e sviluppo web',
        image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
        imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
        width: 2848,
        height: 1416,
        link: 'https://www.avvstefanopalmisano.it/',
        details: [
            ['Tipologia', 'Sito istituzionale'],
            ['Tecnologia', 'WordPress e tema personalizzato'],
            ['Focus', 'Identità digitale e autonomia editoriale'],
        ],
        description: [
            'Restyling e sviluppo del sito web per Studio Legale Palmisano, con l’obiettivo di rafforzarne l’identità digitale attraverso un design autorevole, contemporaneo e distintivo.',
            'Il sito presenta lo studio, i professionisti e le principali aree di attività con una struttura dei contenuti chiara e facilmente navigabile. Include pagine servizi, profili professionali, contatti e moduli di richiesta informazioni, ottimizzati per una fruizione fluida da desktop e mobile.',
            'Realizzato con WordPress e tema personalizzato, il progetto offre una gestione editoriale semplice, flessibile e autonoma.',
        ],
    },
    {
        title: 'Casa Vacanze Vistamare',
        date: 'Agosto 2025',
        category: 'Sito web per ospitalità',
        image: '/img/optimized/casavacanze-vistamare-1600.webp',
        imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
        width: 2438,
        height: 1366,
        details: [
            ['Tipologia', 'Sito di presentazione'],
            ['Settore', 'Ospitalità e turismo'],
            ['Focus', 'Valorizzazione della struttura e contatti'],
        ],
        description: [
            'Sito di presentazione per Casa Vacanze Vistamare, pensato per raccontare la struttura, il contesto e l’esperienza di soggiorno attraverso un’interfaccia essenziale e immersiva.',
            'La navigazione accompagna l’utente tra immagini, informazioni utili e punti di contatto, con una struttura progettata per risultare chiara e piacevole sia da desktop sia da mobile.',
            'Il progetto mette al centro la riconoscibilità della struttura e rende più immediata la richiesta di informazioni da parte degli ospiti.',
        ],
    },
];

function ProjectMeta({ project }) {
    return (
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {project.details.map(([label, value], index) => {
                const Icon = index === 0 ? LayoutTemplate : index === 1 ? Code2 : CalendarDays;
                return (
                    <div key={label} className="bg-drago-text/80 px-5 py-4">
                        <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-drago-accent">
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            {label}
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-gray-200">{value}</dd>
                    </div>
                );
            })}
        </dl>
    );
}

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative overflow-hidden bg-drago-bg px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
            <div className="pointer-events-none absolute inset-0 opacity-45">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="h-full w-full object-cover mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-drago-bg/85 to-drago-bg" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                <header className="mb-16 max-w-3xl md:mb-20">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-drago-accent">Portfolio</p>
                    <h1 className="text-balance font-sans text-5xl font-bold leading-[1.02] text-white md:text-7xl">Progetti pensati per essere riconoscibili e utili.</h1>
                    <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-gray-300">Una selezione di esperienze digitali costruite attorno all’identità, agli obiettivi e alle persone di ogni attività.</p>
                </header>

                <div className="space-y-16 md:space-y-24">
                    {projects.map((project) => (
                        <article key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-drago-text/60 shadow-2xl backdrop-blur-xl">
                            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                                <div className="min-h-72 p-3 sm:p-5">
                                    <div className="h-full overflow-hidden rounded-[1.45rem]">
                                        <img src={project.image} srcSet={project.imageSet} sizes="(min-width: 1024px) 620px, 100vw" width={project.width} height={project.height} loading="lazy" decoding="async" alt={`Anteprima del progetto ${project.title}`} className="h-full min-h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
                                    </div>
                                </div>

                                <div className="flex flex-col px-6 py-8 sm:px-10 sm:py-10">
                                    <div className="mb-6 flex flex-wrap items-center gap-3">
                                        <span className="rounded-full border border-drago-accent/50 bg-drago-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-drago-accent">{project.category}</span>
                                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-400"><CalendarDays className="h-4 w-4 text-drago-accent" aria-hidden="true" />{project.date}</span>
                                    </div>
                                    <h2 className="text-balance font-sans text-3xl font-bold text-white md:text-4xl">{project.title}</h2>
                                    <div className="mt-6 space-y-4 font-light leading-relaxed text-gray-300">
                                        {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                    </div>
                                    <div className="mt-8"><ProjectMeta project={project} /></div>
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex w-full items-center justify-between rounded-xl border border-drago-accent px-4 py-3 text-drago-accent transition-all duration-300 hover:border-drago-accent hover:bg-drago-accent hover:text-white">
                                            <span className="font-semibold">Visita il progetto</span>
                                            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                        </a>
                                    ) : <p className="mt-8 text-sm text-gray-400">Link al progetto disponibile prossimamente.</p>}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}