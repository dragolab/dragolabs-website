import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, Zap, ChevronLeft, ChevronRight, Laptop, Smartphone, ArrowUpRight, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const rawCaseStudies = {
    it: [
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
            solution: 'Ho riprogettato l’architettura dell’informazione da zero: gerarchia visiva sobria, navigazione fluida tra le aree di competenza e moduli di contatto riservati con piena conformità deontologica.',
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
            solution: 'Ho sviluppato un’applicazione web fluida in React 19 e Tailwind CSS: la fotografia ad alta definizione guida l’ospite tra le camere e la costa. Ho integrato il canale diretto su WhatsApp ed email per richiedere disponibilità con un solo click.',
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
            solution: 'Ho impostato una narrazione visiva pulita e leggera, mappe interattive dei luoghi caratteristici, tariffe chiare e contatto diretto per prenotare il soggiorno.',
            engineering: [
                { label: 'Codice Ultra Leggero', desc: 'Struttura responsive ultra-essenziale progettata per una navigazione istantanea da smartphone.' },
                { label: 'Local SEO & Maps', desc: 'Integrazione schema turistico e geolocalizzazione per comparire nelle ricerche Google Maps locali.' },
                { label: 'Esperienza Utente Immediata', desc: 'Accesso alle informazioni su check-in, servizi e tariffe stagionali in un solo colpo d’occhio.' },
                { label: 'Manutenzione Continuativa', desc: 'Monitoraggio continuativo e aggiornamenti tecnici gestiti direttamente da me nel laboratorio.' }
            ],
            metrics: [
                { label: 'Target Connessioni', value: 'Ottimizzato 4G/5G' },
                { label: 'Tempo di lettura', value: '< 1 min' },
                { label: 'SEO Territoriale', value: 'Indicizzato Maps' },
                { label: 'Gestione Tecnica', value: 'Zero Pensieri' },
            ],
            tags: ['Hospitality', 'SEO Locale', 'Responsive Design', 'Puglia Experience']
        }
    ],
    en: [
        {
            id: 'palmisano',
            number: '01',
            title: 'Palmisano Environmental Law Firm',
            shortTitle: 'Palmisano Law',
            type: 'Website',
            year: '2026',
            url: 'https://www.avvstefanopalmisano.it',
            domain: 'avvstefanopalmisano.it',
            image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
            imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
            summary: 'High-authority institutional redesign with a custom WordPress theme and autonomous legal publication management.',
            challenge: 'Palmisano Environmental Law Firm, a national reference in complex environmental law, needed to replace an outdated website. The goal: convey institutional rigor and allow the legal team to publish rulings, articles, and legal areas independently, with zero heavy page builders.',
            solution: 'I redesigned the information architecture from scratch: sober visual hierarchy, seamless navigation across practice areas, and private contact forms adhering strictly to legal ethics.',
            engineering: [
                { label: 'CMS Architecture', desc: 'Custom tailored WordPress theme: zero bloated builders (no Elementor), clean and maintainable code.' },
                { label: 'Extreme Performance', desc: 'Core Web Vitals 99/100, loading time under 0.6s on both desktop and mobile.' },
                { label: 'Semantic SEO', desc: 'Specialized Schema.org structured data for law firms and organic positioning in environmental law.' },
                { label: 'Staff Autonomy', desc: 'Intuitive editorial panel to publish rulings, briefs, or legal commentaries in under 2 minutes.' }
            ],
            metrics: [
                { label: 'Lighthouse Score', value: '99/100' },
                { label: 'Loading Speed', value: '< 0.6s' },
                { label: 'Heavy Builders', value: '0% (Pure Code)' },
                { label: 'Staff Autonomy', value: '100% Autonomous' },
            ],
            tags: ['Custom WordPress', 'Environmental Law', 'Core Web Vitals 99+', 'Schema.org SEO']
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
            summary: 'Immersive web app designed to disintermediate holiday bookings and eliminate OTA commission fees.',
            challenge: 'Hospitality properties surrender 15% to 20% in commissions to OTA platforms like Airbnb and Booking on every stay. Vistamare wanted a proprietary digital tool capable of captivating guests visually and converting visits into direct bookings.',
            solution: 'I engineered a fluid web application in React 19 and Tailwind CSS: high-definition photography guides guests through rooms and coastlines. I integrated direct WhatsApp and email channels to request availability in one click.',
            engineering: [
                { label: 'Frontend Stack', desc: 'React 19, TypeScript, Tailwind CSS, and instant bundling with Vite.' },
                { label: 'Adaptive WebP Assets', desc: 'Progressive images served in multi-resolution formats for instant mobile loading.' },
                { label: 'Edge Serverless Deploy', desc: 'Global Edge hosting on Vercel with zero monthly fixed server overhead.' },
                { label: 'Direct Booking', desc: 'Direct WhatsApp and email channel to reserve dates, eliminating all intermediary fees.' }
            ],
            metrics: [
                { label: 'Disintermediation', value: '0% OTA Fees' },
                { label: 'Response Time', value: '< 0.5s' },
                { label: 'Mobile Optimization', value: '100% Fluid' },
                { label: 'Fixed Server Cost', value: '€0 / month' },
            ],
            tags: ['React 19', 'Tailwind CSS', 'Vite', 'Direct Booking', 'Edge Serverless']
        },
        {
            id: 'aunpasso-dalfaro',
            number: '03',
            title: 'A Un Passo Dal Faro',
            shortTitle: 'A Un Passo Dal Faro',
            type: 'Website',
            year: '2024 / 2025',
            url: 'https://dragolabs.vercel.app',
            domain: 'aunpassodalfaro.it',
            image: '/img/optimized/aunpasso-dalfaro-1200.webp',
            imageSet: '/img/optimized/aunpasso-dalfaro-960.webp 960w, /img/optimized/aunpasso-dalfaro-1200.webp 1200w',
            summary: 'Territorial presentation platform with geolocation, transparent seasonal pricing, and immediate contact.',
            challenge: 'Reaching domestic and international travelers browsing on 4G/5G mobile connections, communicating strategic proximity to the lighthouse and beaches without waiting times.',
            solution: 'I designed a clean, featherlight visual narrative, interactive area maps, clear pricing, and direct contact to book the stay.',
            engineering: [
                { label: 'Ultralight Codebase', desc: 'Ultra-essential responsive structure designed for instantaneous mobile browsing on the move.' },
                { label: 'Local SEO & Maps', desc: 'Tourism schema integration and geolocation to appear prominently on local Google Maps searches.' },
                { label: 'Instant UX', desc: 'Clear access to check-in details, amenities, and seasonal rates at a single glance.' },
                { label: 'Ongoing Maintenance', desc: 'Continuous monitoring and technical updates handled directly by me in the lab.' }
            ],
            metrics: [
                { label: 'Target Connections', value: '4G/5G Optimized' },
                { label: 'Reading Time', value: '< 1 min' },
                { label: 'Local SEO', value: 'Maps Indexed' },
                { label: 'Technical Care', value: 'Zero Worries' },
            ],
            tags: ['Hospitality', 'Local SEO', 'Responsive Design', 'Puglia Experience']
        }
    ]
};

export default function Protocol() {
    const { isEn, t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');
    const [viewMode, setViewMode] = useState('desktop');
    const stageRef = useRef(null);

    const caseStudies = useMemo(() => {
        return isEn ? rawCaseStudies.en : rawCaseStudies.it;
    }, [isEn]);

    const project = caseStudies[currentIndex] || caseStudies[0];

    // Image Preloader: Cache all project screenshots on mount to eliminate image decode lag
    useEffect(() => {
        caseStudies.forEach((p) => {
            const img = new Image();
            img.src = p.image;
        });
    }, [caseStudies]);

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
        setActiveTab('overview');
    }, [caseStudies.length]);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
        setActiveTab('overview');
    }, [caseStudies.length]);

    // Snappy, lag-free transition: animate only the main content stage swiftly (0.22s) without staggered lag
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const targets = stage.querySelectorAll('.project-quick-fade');
        gsap.killTweensOf(targets);
        gsap.fromTo(targets,
            { opacity: 0.1, y: 6 },
            { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }
        );
    }, [currentIndex]);

    return (
        <section id="progetti" className="relative w-full py-24 md:py-36 border-t border-white/10 overflow-hidden bg-[#060a0f]">
            <span id="portfolio" className="sr-only" />

            {/* Distinct Project Theater Background: Dark Navy Blueprint Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1500px] h-[65vh] bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(0,115,160,0.14),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div>
                        <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3 font-semibold">
                            {t.protocol.badge}
                        </span>
                        <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
                            {t.protocol.title}
                        </h2>
                        <p className="mt-4 text-lg sm:text-2xl font-normal text-gray-200 max-w-3xl leading-relaxed">
                            {t.protocol.subtitle}
                        </p>
                    </div>

                    {/* Navigation Pills & Arrow Controls — Refined subtle shadows */}
                    <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md">
                            {caseStudies.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setCurrentIndex(idx); setActiveTab('overview'); }}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-150 font-semibold active:scale-95 ${
                                        currentIndex === idx
                                            ? 'bg-white text-black shadow-sm border border-white/40'
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

                {/* Unified Interactive Showcase Theatre */}
                <div
                    ref={stageRef}
                    className="rounded-[2.4rem] border border-white/15 bg-black/50 shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-white/25 transition-all duration-300"
                >
                    {/* Theatre Chrome Bar */}
                    <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-black/80 backdrop-blur-md gap-4">
                        {/* Traffic light dots & Project Counter */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-white/10" />
                                <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-white/10" />
                                <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-white/10" />
                            </div>
                            <span className="font-mono text-xs sm:text-sm text-gray-300 pl-3 border-l border-white/15 font-semibold tracking-wider">
                                {t.protocol.caseLabel} {project.number} {t.protocol.of} 0{caseStudies.length}
                            </span>
                        </div>

                        {/* Simulated URL bar */}
                        <div className="flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs sm:text-sm font-mono text-gray-200 max-w-sm truncate">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{project.domain || project.url}</span>
                        </div>

                        {/* Viewport switch: Desktop / Mobile — Subtle shadows */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/15">
                                <button
                                    onClick={() => setViewMode('desktop')}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all font-semibold ${
                                        viewMode === 'desktop'
                                            ? 'bg-white text-black shadow-sm'
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
                                            ? 'bg-white text-black shadow-sm'
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
                                    title="Open website in new tab"
                                >
                                    <span>{t.protocol.visitWebsite}</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Stage Grid: 2 Columns on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[640px]">

                        {/* Column 1: Case Autopsy & Story (Fast hardware-accelerated fade) */}
                        <div className="project-quick-fade lg:col-span-6 xl:col-span-5 p-6 sm:p-9 xl:p-11 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-black/40 will-change-[opacity,transform]">
                            <div>
                                {/* Header / Tags */}
                                <div className="mb-5">
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

                                {/* Tab Selector */}
                                <div className="flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 my-7 gap-1 overflow-x-auto no-scrollbar">
                                    {[
                                        { id: 'overview', label: t.protocol.tabs.overview },
                                        { id: 'challenge', label: t.protocol.tabs.challenge },
                                        { id: 'engineering', label: t.protocol.tabs.engineering },
                                    ].map((tabItem) => (
                                        <button
                                            key={tabItem.id}
                                            onClick={() => setActiveTab(tabItem.id)}
                                            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all whitespace-nowrap text-center ${
                                                activeTab === tabItem.id
                                                    ? 'bg-white/15 text-white border border-white/20 shadow-sm'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                        >
                                            {tabItem.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Dynamic Tab Content */}
                                <div className="min-h-[240px]">
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
                                            {/* Challenge Box */}
                                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                                                        {t.protocol.challengeLabel}
                                                    </span>
                                                </div>
                                                <p className="font-sans text-sm sm:text-base font-normal text-gray-300 leading-relaxed">
                                                    {project.challenge}
                                                </p>
                                            </div>

                                            {/* Solution Box */}
                                            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-bold">
                                                        {t.protocol.solutionLabel}
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
                            <div className="pt-6 mt-7 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tagString) => (
                                        <span key={tagString} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium">
                                            {tagString}
                                        </span>
                                    ))}
                                </div>

                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 font-sans text-sm sm:text-base font-bold transition-all hover:scale-105 shadow-md active:scale-95"
                                    >
                                        <span>{t.protocol.visitWebsite}</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Column 2: Cinematic Viewport Screen (Instant fade & preloaded images) */}
                        <div className="project-quick-fade lg:col-span-6 xl:col-span-7 p-6 sm:p-9 xl:p-11 flex flex-col items-center justify-center bg-black/60 relative overflow-hidden will-change-[opacity,transform]">
                            
                            {/* Desktop macOS Browser Window Frame */}
                            {viewMode === 'desktop' && (
                                <div className="transition-all duration-300 w-full max-w-[760px] flex flex-col items-center justify-center">
                                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0d1117] group/screen">
                                        
                                        {/* macOS Window Title Bar */}
                                        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
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
                                                    title={t.protocol.visitWebsite}
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
                                                key={project.id + '-desktop'}
                                                src={project.image}
                                                srcSet={project.imageSet}
                                                alt={`Project ${project.title} - Drago Labs`}
                                                className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[3800ms] ease-out group-hover/screen:-translate-y-[28%]"
                                                loading="eager"
                                            />

                                            {/* Floating hover hint pill */}
                                            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-gray-300 pointer-events-none flex items-center gap-1.5 group-hover/screen:opacity-0 transition-opacity duration-300 shadow-md">
                                                <span>{t.protocol.hoverToScroll}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mobile Smartphone Chassis Frame */}
                            {viewMode === 'mobile' && (
                                <div className="transition-all duration-300 w-full max-w-[320px] flex flex-col items-center justify-center">
                                    {/* Smartphone Chassis */}
                                    <div className="relative w-full rounded-[3.2rem] p-3.5 bg-gradient-to-b from-[#2e333d] via-[#1a1c22] to-[#0c0e12] border-[3px] border-white/20 shadow-2xl group/mobile">
                                        
                                        {/* Side physical buttons accents */}
                                        <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-white/25 rounded-l" />
                                        <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-white/25 rounded-l" />
                                        <div className="absolute -right-[5px] top-28 w-[3px] h-14 bg-white/25 rounded-r" />

                                        {/* Phone Screen Chassis */}
                                        <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/18] flex flex-col justify-between border border-white/10">
                                            
                                            {/* Dynamic Island Capsule */}
                                            <div className="w-24 h-5 bg-black rounded-full mx-auto mt-2.5 z-20 border border-white/15 flex items-center justify-between px-3 shadow-md">
                                                <span className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/10" />
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                                            </div>

                                            {/* Screen Viewport with smooth scroll glide */}
                                            <div className="relative w-full flex-1 overflow-hidden my-1">
                                                <img
                                                    key={project.id + '-mobile'}
                                                    src={project.image}
                                                    srcSet={project.imageSet}
                                                    alt={`Project ${project.title} - Mobile Preview`}
                                                    className="w-full h-auto min-h-full object-cover object-top transition-transform duration-[3800ms] ease-out group-hover/mobile:-translate-y-[35%]"
                                                    loading="eager"
                                                />

                                                {/* Floating hint on mobile */}
                                                <div className="absolute bottom-3 inset-x-3 text-center py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-gray-300 pointer-events-none group-hover/mobile:opacity-0 transition-opacity shadow-md">
                                                    {t.protocol.hoverToScroll}
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
                                <span>{t.protocol.footerPrompt}</span>
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
                <div className="mt-16 p-8 sm:p-10 rounded-[2rem] border border-white/15 bg-black/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
                    <div>
                        <h4 className="font-display font-bold text-2xl sm:text-3xl text-white">{t.protocol.calloutTitle}</h4>
                        <p className="text-base sm:text-lg font-normal text-gray-200 mt-2 max-w-2xl leading-relaxed">
                            {t.protocol.calloutSubtitle}
                        </p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-sans text-base font-bold transition-all hover:scale-105 shadow-md flex-shrink-0 active:scale-95"
                    >
                        {t.protocol.calloutCta}
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
}
