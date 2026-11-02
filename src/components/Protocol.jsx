import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, Zap, ChevronLeft, ChevronRight, Laptop, Smartphone, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 'palmisano',
        number: '01',
        title: 'Studio Legale Ambientale Palmisano',
        shortTitle: 'Studio Palmisano',
        category: 'Diritto Ambientale & Consulenza Forense',
        year: '2026',
        status: 'In Produzione · Live',
        url: 'https://www.avvstefanopalmisano.it',
        image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
        imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
        summary: 'Restyling istituzionale ad alta autorevolezza con tema WordPress sartoriale e gestione autonoma delle pubblicazioni forensi.',
        challenge: 'Lo Studio Legale Ambientale Palmisano, riferimento nazionale per materie ambientali complesse, necessitava di superare un sito datato. L’obiettivo: trasmettere rigore istituzionale e consentire allo staff di pubblicare sentenze, articoli e aree legali in completa autonomia, senza builder pesanti.',
        solution: 'Architettura dell’informazione riprogettata da zero: gerarchia visiva sobria, navigazione fluida tra le aree di competenza e moduli di contatto riservati con piena conformità deontologica.',
        engineering: [
            { label: 'Architettura CMS', desc: 'WordPress con tema sartoriale su misura: zero builder pesanti (no Elementor), codice essenziale.' },
            { label: 'Prestazioni', desc: 'Core Web Vitals 99/100, tempo di caricamento inferiore a 0.6s su desktop e mobile.' },
            { label: 'SEO Semantico', desc: 'Dati strutturati Schema.org per studi legali e posizionamento organico sul diritto ambientale.' },
            { label: 'Autonomia Staff', desc: 'Pannello editoriale su misura per pubblicare una sentenza o articolo in 2 minuti.' }
        ],
        metrics: [
            { label: 'Lighthouse Score', value: '99/100' },
            { label: 'Velocità Caricamento', value: '< 0.6s' },
            { label: 'Builder Pesanti', value: 'Zero (Codice Puro)' },
            { label: 'Autonomia Editoriale', value: '100% Autonomo' },
        ],
        tags: ['WordPress Sartoriale', 'Diritto Ambientale', 'Core Web Vitals 99+', 'Schema.org SEO']
    },
    {
        id: 'vistamare',
        number: '02',
        title: 'Casa Vacanze Vistamare',
        shortTitle: 'Casa Vistamare',
        category: 'Hospitality & Turismo di Pregio',
        year: '2025',
        status: 'In Produzione · Live',
        url: 'https://dragolabs.vercel.app',
        image: '/img/optimized/casavacanze-vistamare-1600.webp',
        imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
        summary: 'Web app immersiva per disintermediare i soggiorni turistici ed azzerare le commissioni delle piattaforme OTA.',
        challenge: 'Le strutture ricettive cedono ogni anno dal 15% al 20% di commissioni a piattaforme come Airbnb e Booking. Vistamare voleva uno strumento digitale proprietario capace di emozionare visivamente gli ospiti e convertire le visite in prenotazioni dirette.',
        solution: 'Applicazione web fluida in React 19 e Tailwind CSS: la fotografia ad alta definizione guida l’ospite tra le camere e la costa. Canale diretto su WhatsApp ed email integrato per richiedere disponibilità con un solo click.',
        engineering: [
            { label: 'Stack Frontend', desc: 'React 19, TypeScript, Tailwind CSS e build istantanea con Vite.' },
            { label: 'Asset WebP', desc: 'Immagini progressive servite in formati multi-risoluzione per caricamento istantaneo.' },
            { label: 'Deploy Serverless', desc: 'Hosting globale Edge su Vercel con zero costi fissi mensili di gestione server.' },
            { label: 'Booking Diretto', desc: 'Integrazione diretta WhatsApp per contatto immediato senza intermediari.' }
        ],
        metrics: [
            { label: 'Disintermediazione', value: '0% Commissioni OTA' },
            { label: 'Tempo di risposta', value: '< 0.5s' },
            { label: 'Mobile Optimization', value: '100% Fluido' },
            { label: 'Costi Server Fissi', value: '0€ / mese' },
        ],
        tags: ['React 19', 'Tailwind CSS', 'Vite', 'Booking Diretto', 'Edge Serverless']
    },
    {
        id: 'aunpasso-dalfaro',
        number: '03',
        title: 'A Un Passo Dal Faro',
        shortTitle: 'A Un Passo Dal Faro',
        category: 'Dimora Turistica & Territorio',
        year: '2024 / 2025',
        status: 'In Produzione · Live',
        url: 'https://dragolabs.vercel.app',
        image: '/img/optimized/aunpasso-dalfaro-1200.webp',
        imageSet: '/img/optimized/aunpasso-dalfaro-960.webp 960w, /img/optimized/aunpasso-dalfaro-1200.webp 1200w',
        summary: 'Piattaforma di presentazione territoriale con georeferenziazione, tariffe trasparenti e contatto immediato.',
        challenge: 'Farsi trovare online da viaggiatori italiani e internazionali con connessioni mobili 4G/5G in mobilità, comunicando la vicinanza strategica al faro e alle spiagge pugliesi senza tempi d’attesa.',
        solution: 'Narrazione visiva pulita e leggera, mappe interattive dei luoghi caratteristici, tariffe chiare e contatto diretto per prenotare il soggiorno.',
        engineering: [
            { label: 'Lightweight Code', desc: 'Struttura responsive ultra-essenziale progettata per la navigazione da smartphone in viaggio.' },
            { label: 'Local SEO & Maps', desc: 'Integrazione schema turistico e geolocalizzazione per comparire nelle ricerche Google Maps.' },
            { label: 'Esperienza Utente', desc: 'Accesso alle informazioni su check-in, servizi e regole in un solo colpo d’occhio.' },
            { label: 'Supporto Tecnico', desc: 'Manutenzione programmata e monitoraggio gestiti direttamente dal laboratorio Drago Labs.' }
        ],
        metrics: [
            { label: 'Target Connessioni', value: 'Ottimizzato 4G/5G' },
            { label: 'Tempo di lettura', value: '< 1 min' },
            { label: 'SEO Territoriale', value: 'Indicizzato Maps' },
            { label: 'Gestione Tecnica', value: 'Zero Pensieri' },
        ],
        tags: ['Hospitality', 'SEO Locale', 'Responsive Design', 'Puglia Experience']
    }
];

export default function Protocol() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'challenge' | 'engineering'
    const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'
    const stageRef = useRef(null);

    const project = caseStudies[currentIndex];

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
        setActiveTab('overview');
    }, []);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
        setActiveTab('overview');
    }, []);

    // Animate stage content on project change
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        gsap.fromTo(stage.querySelectorAll('.project-transition'),
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
        );
    }, [currentIndex]);

    return (
        <section id="progetti" className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
            <span id="portfolio" className="sr-only" />

            {/* Background texture & soft radial gradient */}
            <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-drago-accent/5 blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div>
                        <span className="font-mono text-xs text-drago-accent uppercase tracking-widest px-3.5 py-1 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3">
                            Casi Studio & Architetture
                        </span>
                        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                            I Progetti Spiegati.
                        </h2>
                        <p className="mt-3 text-base sm:text-lg font-light text-gray-300 max-w-2xl leading-relaxed">
                            Decostruzione dei progetti reali: la sfida iniziale del cliente, la strategia di progettazione e l’architettura tecnica sviluppata.
                        </p>
                    </div>

                    {/* Navigation Pills & Arrow Controls */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10">
                            {caseStudies.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setCurrentIndex(idx); setActiveTab('overview'); }}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                                        currentIndex === idx
                                            ? 'bg-drago-accent text-white font-bold shadow-[0_0_15px_rgba(0,115,160,0.5)]'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <span className="opacity-70 mr-1">{item.number}.</span>
                                    <span>{item.shortTitle}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-1.5 pl-2">
                            <button
                                onClick={prevProject}
                                aria-label="Progetto precedente"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-105"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextProject}
                                aria-label="Prossimo progetto"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all hover:scale-105"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Unified Interactive Showcase Theatre (Widescreen Split Screen) */}
                <div
                    ref={stageRef}
                    className="rounded-[2rem] border border-white/10 bg-drago-text/30 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                    {/* Theatre Chrome Bar */}
                    <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60 gap-4">
                        {/* Project Counter & Info */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-xs text-gray-400 pl-3 border-l border-white/10">
                                CASO {project.number} DI 0{caseStudies.length}
                            </span>
                        </div>

                        {/* Simulated URL bar */}
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 max-w-sm truncate">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{project.url || `dragolabs.app/cases/${project.id}`}</span>
                        </div>

                        {/* Viewport switch & Status */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                                <button
                                    onClick={() => setViewMode('desktop')}
                                    className={`p-1.5 rounded ${viewMode === 'desktop' ? 'bg-drago-accent text-white' : 'text-gray-400 hover:text-white'}`}
                                    title="Vista Desktop"
                                >
                                    <Laptop className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={() => setViewMode('mobile')}
                                    className={`p-1.5 rounded ${viewMode === 'mobile' ? 'bg-drago-accent text-white' : 'text-gray-400 hover:text-white'}`}
                                    title="Vista Mobile"
                                >
                                    <Smartphone className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Stage Grid: 2 Columns on desktop, filling widescreen */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[620px]">

                        {/* Column 1: Case Autopsy & Story (5 cols on lg, 6 cols on xl) */}
                        <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-8 xl:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20">
                            <div>
                                {/* Header / Category / Year */}
                                <div className="project-transition mb-4">
                                    <span className="text-xs font-mono uppercase text-drago-accent tracking-wider font-semibold">
                                        {project.category} · {project.year}
                                    </span>
                                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mt-1.5 tracking-tight leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans text-sm sm:text-base font-light text-gray-300 mt-3 leading-relaxed">
                                        {project.summary}
                                    </p>
                                </div>

                                {/* Tab Selector */}
                                <div className="project-transition flex border-b border-white/10 my-6 gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
                                    {[
                                        { id: 'overview', label: '1. Obiettivi & Dati' },
                                        { id: 'challenge', label: '2. La Sfida & Strategia' },
                                        { id: 'engineering', label: '3. Ingegneria & Stack' },
                                    ].map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setActiveTab(t.id)}
                                            className={`pb-3 text-xs sm:text-sm font-sans font-medium transition-all relative whitespace-nowrap ${
                                                activeTab === t.id
                                                    ? 'text-drago-accent border-b-2 border-drago-accent font-semibold'
                                                    : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            {t.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Dynamic Tab Content */}
                                <div className="project-transition min-h-[220px]">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-5">
                                            <p className="font-sans text-sm font-light text-gray-300 leading-relaxed">
                                                {project.solution}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 pt-2">
                                                {project.metrics.map((m) => (
                                                    <div key={m.label} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                                        <span className="text-[11px] font-mono text-gray-400 block">{m.label}</span>
                                                        <span className="text-sm sm:text-base font-mono font-bold text-white mt-0.5 block text-drago-accent">
                                                            {m.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'challenge' && (
                                        <div className="space-y-4">
                                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                                <span className="font-mono text-xs uppercase text-red-300 tracking-wider font-semibold block mb-1">
                                                    Il Problema di Partenza
                                                </span>
                                                <p className="font-sans text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
                                                    {project.challenge}
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                                <span className="font-mono text-xs uppercase text-emerald-300 tracking-wider font-semibold block mb-1">
                                                    La Soluzione di Drago Labs
                                                </span>
                                                <p className="font-sans text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'engineering' && (
                                        <div className="space-y-2.5">
                                            {project.engineering.map((eng) => (
                                                <div key={eng.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <Zap className="w-3.5 h-3.5 text-drago-accent" />
                                                        <span className="font-sans font-bold text-xs sm:text-sm text-white">{eng.label}</span>
                                                    </div>
                                                    <p className="font-sans text-xs font-light text-gray-300 leading-relaxed">
                                                        {eng.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tags & Action Bar */}
                            <div className="project-transition pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((t) => (
                                        <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-drago-accent hover:bg-drago-accent/90 text-white font-sans text-xs font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,115,160,0.4)]"
                                    >
                                        <span>Visita il sito</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Column 2: Cinematic Viewport Screen (7 cols on lg, 7 cols on xl) */}
                        <div className="lg:col-span-6 xl:col-span-7 p-6 sm:p-8 xl:p-10 flex flex-col items-center justify-center bg-black/40 relative overflow-hidden">
                            
                            {/* Device Frame Display with smooth transition */}
                            <div className={`project-transition transition-all duration-500 w-full flex items-center justify-center ${viewMode === 'mobile' ? 'max-w-[320px]' : 'max-w-[740px]'}`}>
                                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d1117] group">
                                    {/* Sub-browser bar */}
                                    <div className="flex items-center justify-between px-3.5 py-2 bg-[#161b22] border-b border-white/10 text-[11px] font-mono text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-white/20" />
                                            <span className="w-2 h-2 rounded-full bg-white/20" />
                                            <span className="w-2 h-2 rounded-full bg-white/20" />
                                        </div>
                                        <span className="truncate px-3 opacity-75">{project.title}</span>
                                        <span className="text-[10px] text-drago-accent">100% READY</span>
                                    </div>

                                    {/* High-res Image preview */}
                                    <div className="relative overflow-hidden aspect-[16/10] bg-black">
                                        <img
                                            src={project.image}
                                            srcSet={project.imageSet}
                                            alt={`Anteprima ${project.title}`}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <span className="text-xs font-mono text-white/90 bg-black/70 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                                                {project.category} · {project.year}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Theater Bottom Switcher Prompt */}
                            <div className="w-full mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                                <span className="opacity-75">Usa le frecce o le linguette per sfogliare i progetti</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold">{project.number}</span>
                                    <span>/</span>
                                    <span>0{caseStudies.length}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Section Bottom Callout */}
                <div className="mt-16 p-8 rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h4 className="font-display font-bold text-2xl text-white">Hai un'esigenza specifica per la tua attività?</h4>
                        <p className="text-sm font-light text-gray-300 mt-1 max-w-xl">
                            Non applico template predefiniti: studio il tuo problema e progetto la soluzione architetturale più adatta.
                        </p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-drago-accent hover:bg-drago-accent/90 text-white font-sans text-sm font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,115,160,0.4)] flex-shrink-0"
                    >
                        Richiedi un'analisi per il tuo business
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
