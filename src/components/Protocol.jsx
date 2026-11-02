import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, Zap, ChevronLeft, ChevronRight, Laptop, Smartphone, ArrowUpRight, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 'palmisano',
        number: '01',
        title: 'Studio Legale Ambientale Palmisano',
        shortTitle: 'Studio Palmisano',
        type: 'Sito Web',
        year: '2026',
        url: 'https://www.avvstefanopalmisano.it',
        domain: 'avvstefanopalmisano.it',
        image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
        imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
        summary: 'Restyling istituzionale ad alta autorevolezza con tema WordPress sartoriale e gestione autonoma delle pubblicazioni forensi.',
        challenge: 'Lo Studio Legale Ambientale Palmisano, riferimento nazionale per materie ambientali complesse, necessitava di superare un sito datato. L’obiettivo: trasmettere rigore istituzionale e consentire allo staff di pubblicare sentenze, articoli e aree legali in completa autonomia, senza builder pesanti.',
        solution: 'Architettura dell’informazione riprogettata da zero: gerarchia visiva sobria, navigazione fluida tra le aree di competenza e moduli di contatto riservati con piena conformità deontologica.',
        engineering: [
            { label: 'Architettura CMS', desc: 'WordPress con tema sartoriale su misura: zero builder pesanti (no Elementor), codice essenziale e manutenibile.' },
            { label: 'Prestazioni Estreme', desc: 'Core Web Vitals 99/100, tempo di caricamento inferiore a 0.6s sia su desktop che da mobile.' },
            { label: 'SEO Semantico', desc: 'Dati strutturati Schema.org dedicati agli studi legali e posizionamento organico nel diritto ambientale.' },
            { label: 'Autonomia dello Staff', desc: 'Pannello editoriale intuitivo per pubblicare sentenze, memorie o articoli in meno di 2 minuti.' }
        ],
        metrics: [
            { label: 'Lighthouse Score', value: '99/100' },
            { label: 'Velocità Caricamento', value: '< 0.6s' },
            { label: 'Builder Pesanti', value: '0% (Codice Puro)' },
            { label: 'Autonomia Staff', value: '100% Autonomo' },
        ],
        tags: ['WordPress Sartoriale', 'Diritto Ambientale', 'Core Web Vitals 99+', 'Schema.org SEO']
    },
    {
        id: 'vistamare',
        number: '02',
        title: 'Casa Vacanze Vistamare',
        shortTitle: 'Casa Vistamare',
        type: 'Web App',
        year: '2025',
        url: 'https://dragolabs.vercel.app',
        domain: 'casavacanze-vistamare.it',
        image: '/img/optimized/casavacanze-vistamare-1600.webp',
        imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
        summary: 'Web app immersiva per disintermediare i soggiorni turistici ed azzerare le commissioni delle piattaforme OTA.',
        challenge: 'Le strutture ricettive cedono ogni anno dal 15% al 20% di commissioni a piattaforme come Airbnb e Booking. Vistamare voleva uno strumento digitale proprietario capace di emozionare visivamente gli ospiti e convertire le visite in prenotazioni dirette.',
        solution: 'Applicazione web fluida in React 19 e Tailwind CSS: la fotografia ad alta definizione guida l’ospite tra le camere e la costa. Canale diretto su WhatsApp ed email integrato per richiedere disponibilità con un solo click.',
        engineering: [
            { label: 'Stack Frontend', desc: 'React 19, TypeScript, Tailwind CSS e build istantanea con Vite.' },
            { label: 'Asset WebP Adattivi', desc: 'Immagini progressive servite in formati multi-risoluzione per caricamento istantaneo in mobilità.' },
            { label: 'Deploy Edge Serverless', desc: 'Hosting globale Edge su Vercel con zero costi fissi mensili di gestione server.' },
            { label: 'Booking Diretto', desc: 'Canale diretto WhatsApp ed email per riservare le date azzerando qualsiasi percentuale intermediaria.' }
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
        type: 'Sito Web',
        year: '2024 / 2025',
        url: 'https://dragolabs.vercel.app',
        domain: 'aunpassodalfaro.it',
        image: '/img/optimized/aunpasso-dalfaro-1200.webp',
        imageSet: '/img/optimized/aunpasso-dalfaro-960.webp 960w, /img/optimized/aunpasso-dalfaro-1200.webp 1200w',
        summary: 'Piattaforma di presentazione territoriale con georeferenziazione, tariffe trasparenti e contatto immediato.',
        challenge: 'Farsi trovare online da viaggiatori italiani e internazionali con connessioni mobili 4G/5G in mobilità, comunicando la vicinanza strategica al faro e alle spiagge pugliesi senza tempi d’attesa.',
        solution: 'Narrazione visiva pulita e leggera, mappe interattive dei luoghi caratteristici, tariffe chiare e contatto diretto per prenotare il soggiorno.',
        engineering: [
            { label: 'Codice Ultra Leggero', desc: 'Struttura responsive ultra-essenziale progettata per una navigazione istantanea da smartphone.' },
            { label: 'Local SEO & Maps', desc: 'Integrazione schema turistico e geolocalizzazione per comparire nelle ricerche Google Maps locali.' },
            { label: 'Esperienza Utente Immediata', desc: 'Accesso alle informazioni su check-in, servizi e tariffe stagionali in un solo colpo d’occhio.' },
            { label: 'Manutenzione Laboratorio', desc: 'Monitoraggio continuativo e aggiornamenti gestiti direttamente dal laboratorio Drago Labs.' }
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
    const [activeTab, setActiveTab] = useState('overview');
    const [viewMode, setViewMode] = useState('desktop');
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

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        gsap.fromTo(stage.querySelectorAll('.project-transition'),
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out' }
        );
    }, [currentIndex]);

    return (
        <section id="progetti" className="relative py-24 md:py-36 border-t border-white/10 overflow-hidden">
            <span id="portfolio" className="sr-only" />

            {/* Background texture & soft radial gradient */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-drago-accent/5 blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div>
                        <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3 font-semibold">
                            Casi Studio & Architetture
                        </span>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
                            I miei Progetti
                        </h2>
                        <p className="mt-4 text-lg sm:text-2xl font-normal text-gray-200 max-w-3xl leading-relaxed">
                            Decostruzione dei progetti reali: la sfida iniziale del cliente, la strategia di progettazione e l’architettura tecnica sviluppata.
                        </p>
                    </div>

                    {/* Navigation Pills & Arrow Controls */}
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md">
                            {caseStudies.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setCurrentIndex(idx); setActiveTab('overview'); }}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all font-semibold ${
                                        currentIndex === idx
                                            ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.35)]'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <span className="opacity-60 mr-1">{item.number}.</span>
                                    <span>{item.shortTitle}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 pl-2">
                            <button
                                onClick={prevProject}
                                aria-label="Progetto precedente"
                                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-gray-200 hover:text-white transition-all hover:scale-105 active:scale-95"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextProject}
                                aria-label="Prossimo progetto"
                                className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-gray-200 hover:text-white transition-all hover:scale-105 active:scale-95"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Unified Interactive Showcase Theatre (Widescreen Split Screen) */}
                <div
                    ref={stageRef}
                    className="rounded-[2.4rem] border border-white/15 bg-black/40 shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-white/25 transition-all duration-300"
                >
                    {/* Theatre Chrome Bar */}
                    <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-black/80 backdrop-blur-md gap-4">
                        {/* Traffic light dots & Project Counter */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.5)] border border-white/10" />
                                <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.5)] border border-white/10" />
                                <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.5)] border border-white/10" />
                            </div>
                            <span className="font-mono text-xs sm:text-sm text-gray-300 pl-3 border-l border-white/15 font-semibold tracking-wider">
                                CASO {project.number} DI 0{caseStudies.length}
                            </span>
                        </div>

                        {/* Simulated URL bar */}
                        <div className="flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs sm:text-sm font-mono text-gray-200 max-w-sm truncate">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{project.domain || project.url}</span>
                        </div>

                        {/* Viewport switch: Desktop / Mobile */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/15">
                                <button
                                    onClick={() => setViewMode('desktop')}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all font-semibold ${
                                        viewMode === 'desktop'
                                            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    title="Vista Desktop"
                                >
                                    <Laptop className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Desktop</span>
                                </button>
                                <button
                                    onClick={() => setViewMode('mobile')}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all font-semibold ${
                                        viewMode === 'mobile'
                                            ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    title="Vista Mobile"
                                >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Mobile</span>
                                </button>
                            </div>

                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-mono text-gray-200 hover:text-white transition-all"
                                    title="Apri sito in una nuova scheda"
                                >
                                    <span>Apri</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Stage Grid: 2 Columns on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[640px]">

                        {/* Column 1: Case Autopsy & Story */}
                        <div className="lg:col-span-6 xl:col-span-5 p-6 sm:p-9 xl:p-11 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-black/30">
                            <div>
                                {/* Header / Tags (Type & Year) */}
                                <div className="project-transition mb-5">
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="text-xs sm:text-sm font-mono px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                                            {project.type}
                                        </span>
                                        <span className="text-xs sm:text-sm font-mono px-3.5 py-1 rounded-full bg-drago-accent/25 border border-drago-accent/50 text-white font-semibold">
                                            {project.year}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mt-2 tracking-tight leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans text-base sm:text-lg font-normal text-gray-200 mt-3 leading-relaxed">
                                        {project.summary}
                                    </p>
                                </div>

                                {/* Tab Selector — Tactile segmented control */}
                                <div className="project-transition flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 my-7 gap-1 overflow-x-auto no-scrollbar">
                                    {[
                                        { id: 'overview', label: '1. Obiettivi & Dati' },
                                        { id: 'challenge', label: '2. La Sfida & Strategia' },
                                        { id: 'engineering', label: '3. Ingegneria & Stack' },
                                    ].map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setActiveTab(t.id)}
                                            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all whitespace-nowrap text-center ${
                                                activeTab === t.id
                                                    ? 'bg-white/15 text-white border border-white/20 shadow-sm'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                        >
                                            {t.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Dynamic Tab Content */}
                                <div className="project-transition min-h-[240px]">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-6">
                                            <p className="font-sans text-base sm:text-lg font-normal text-gray-200 leading-relaxed">
                                                {project.solution}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3.5 pt-2">
                                                {project.metrics.map((m) => (
                                                    <div key={m.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-medium">{m.label}</span>
                                                        <span className="text-lg sm:text-2xl font-mono font-bold text-white mt-1.5 block tracking-tight">
                                                            {m.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'challenge' && (
                                        <div className="space-y-4">
                                            {/* Challenge Box — Refined Luxury Glass with Amber indicator */}
                                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                                                        Il Problema di Partenza
                                                    </span>
                                                </div>
                                                <p className="font-sans text-sm sm:text-base font-normal text-gray-300 leading-relaxed">
                                                    {project.challenge}
                                                </p>
                                            </div>

                                            {/* Solution Box — Refined Luxury Glass with Emerald indicator */}
                                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-bold">
                                                        La Risposta di Drago Labs
                                                    </span>
                                                </div>
                                                <p className="font-sans text-sm sm:text-base font-normal text-gray-200 leading-relaxed">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'engineering' && (
                                        <div className="space-y-3">
                                            {project.engineering.map((eng) => (
                                                <div key={eng.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <Zap className="w-4 h-4 text-drago-accent" />
                                                        <span className="font-sans font-bold text-sm sm:text-base text-white">{eng.label}</span>
                                                    </div>
                                                    <p className="font-sans text-sm text-gray-300 leading-relaxed font-normal">
                                                        {eng.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Tags & Action Bar */}
                            <div className="project-transition pt-6 mt-7 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((t) => (
                                        <span key={t} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-sans text-sm sm:text-base font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                                    >
                                        <span>Visita il sito</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Column 2: Cinematic Viewport Screen (macOS Browser or Smartphone Chassis) */}
                        <div className="lg:col-span-6 xl:col-span-7 p-6 sm:p-9 xl:p-11 flex flex-col items-center justify-center bg-black/50 relative overflow-hidden">
                            
                            {/* Desktop macOS Browser Window Frame */}
                            {viewMode === 'desktop' && (
                                <div className="project-transition transition-all duration-500 w-full max-w-[760px] flex flex-col items-center justify-center">
                                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-[#0d1117] group/screen">
                                        
                                        {/* macOS Window Title Bar */}
                                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/20" />
                                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/20" />
                                                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/20" />
                                            </div>

                                            {/* Centered address capsule */}
                                            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-gray-300 max-w-[320px] truncate">
                                                <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                                <span className="truncate text-gray-200">{project.domain || project.url}</span>
                                            </div>

                                            {project.url ? (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                    title="Apri sito"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            ) : (
                                                <div className="w-4" />
                                            )}
                                        </div>

                                        {/* Interactive Hover Auto-Scroll Viewport */}
                                        <div className="relative overflow-hidden aspect-[16/10] bg-[#07090c]">
                                            <img
                                                src={project.image}
                                                srcSet={project.imageSet}
                                                alt={`Progetto ${project.title} - Drago Labs`}
                                                className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[3800ms] ease-out group-hover/screen:-translate-y-[28%]"
                                            />

                                            {/* Floating hover hint pill */}
                                            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-gray-300 pointer-events-none flex items-center gap-1.5 group-hover/screen:opacity-0 transition-opacity duration-300 shadow-lg">
                                                <span>Passa sopra per scorrere</span>
                                                <span className="text-white">↓</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mobile Smartphone Chassis Frame */}
                            {viewMode === 'mobile' && (
                                <div className="project-transition transition-all duration-500 w-full max-w-[320px] flex flex-col items-center justify-center">
                                    {/* Smartphone Chassis */}
                                    <div className="relative w-full rounded-[3.2rem] p-3.5 bg-gradient-to-b from-[#2e333d] via-[#1a1c22] to-[#0c0e12] border-[3px] border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(255,255,255,0.06)] group/mobile">
                                        
                                        {/* Side physical buttons accents */}
                                        <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-white/25 rounded-l" />
                                        <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-white/25 rounded-l" />
                                        <div className="absolute -right-[5px] top-28 w-[3px] h-14 bg-white/25 rounded-r" />

                                        {/* Phone Screen Chassis */}
                                        <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/18] flex flex-col justify-between border border-white/10">
                                            
                                            {/* Dynamic Island Capsule */}
                                            <div className="w-24 h-5 bg-black rounded-full mx-auto mt-2.5 z-20 border border-white/15 flex items-center justify-between px-3 shadow-md">
                                                <span className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/10" />
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_4px_rgba(52,211,153,0.8)]" />
                                            </div>

                                            {/* Screen Viewport with smooth scroll glide */}
                                            <div className="relative w-full flex-1 overflow-hidden my-1">
                                                <img
                                                    src={project.image}
                                                    srcSet={project.imageSet}
                                                    alt={`Progetto ${project.title} - Mobile Preview`}
                                                    className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[3800ms] ease-out group-hover/mobile:-translate-y-[35%]"
                                                />

                                                {/* Floating hint on mobile */}
                                                <div className="absolute bottom-3 inset-x-3 text-center py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-gray-300 pointer-events-none group-hover/mobile:opacity-0 transition-opacity shadow-lg">
                                                    Passa sopra per scorrere ↓
                                                </div>
                                            </div>

                                            {/* Bottom Home Indicator */}
                                            <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mb-2 z-20" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Theater Bottom Switcher Prompt */}
                            <div className="w-full mt-7 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-gray-300">
                                <span>Usa le frecce o le schede per esplorare i progetti</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-base">{project.number}</span>
                                    <span>/</span>
                                    <span className="text-gray-400 font-medium">0{caseStudies.length}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Section Bottom Callout */}
                <div className="mt-16 p-8 sm:p-10 rounded-[2rem] border border-white/15 bg-white/[0.03] backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
                    <div>
                        <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">Hai un'esigenza specifica per la tua attività?</h4>
                        <p className="text-base sm:text-lg font-normal text-gray-200 mt-2 max-w-2xl leading-relaxed">
                            Non applico template predefiniti: studio il tuo problema e progetto la soluzione architetturale più adatta.
                        </p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-sans text-base font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex-shrink-0"
                    >
                        Richiedi un'analisi per il tuo business
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
}
