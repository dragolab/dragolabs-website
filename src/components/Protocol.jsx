import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, Zap, ChevronLeft, ChevronRight, Laptop, Smartphone, ArrowUpRight, Lock, X, Maximize2, Code2, Cpu, Database, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const rawCaseStudies = {
    it: [
        {
            id: 'palmisano',
            number: '01',
            status: 'live',
            title: 'Studio Legale Ambientale Palmisano',
            shortTitle: 'Studio Palmisano',
            type: 'Sito Web',
            year: '2026',
            url: 'https://www.avvstefanopalmisano.it',
            domain: 'avvstefanopalmisano.it',
            image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
            imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
            images: [
                '/img/optimized/avvstefanopalmisano-sito-1600.webp'
            ],
            summary: 'Restyling istituzionale ad alta autorevolezza con tema WordPress sartoriale e gestione autonoma delle pubblicazioni forensi.',
            challenge: 'Lo Studio Legale Ambientale Palmisano, riferimento nazionale per materie ambientali complesse, necessitava di superare un sito datato. L’obiettivo: trasmettere rigore istituzionale e consentire allo staff di pubblicare sentenze, articoli e aree legali in completa autonomia, senza builder pesanti.',
            solution: 'Ho riprogettato l’architettura dell’informazione da zero: gerarchia visiva sobria, navigazione fluida tra le aree di competenza e moduli di contatto riservati con piena conformità deontologica.',
            engineering: [
                { label: 'Linguaggi & Core Stack', desc: 'PHP 8.3 puro, WordPress 6.x Core, JavaScript ES6+, HTML5 Semantico e Tailwind CSS compilato su misura per un bundle CSS ultra-leggero.' },
                { label: 'Architettura Software', desc: 'Tema sartoriale a blocchi proprietario senza page builder terzi (zero Elementor/Divi). Codice essenziale, caricamento istantaneo (<0.6s) e Core Web Vitals 99/100 certificati.' },
                { label: 'Dashboard & Tooling Operativo', desc: 'Pannello editoriale forense personalizzato con tassonomie per sentenze, memorie ambientali e consulenze legali. Consente allo studio di pubblicare atti e commentari in meno di 2 minuti.' },
                { label: 'Dati, Storage & Telemetria', desc: 'Database MySQL ottimizzato con query indicizzate, microcaching Nginx a livello server e microdati Schema.org (LegalService) specifici per posizionamento semantico nel diritto ambientale.' },
                { label: 'Sicurezza & Deontologia', desc: 'Piena conformità alla deontologia forense CNF: moduli di contatto con cifratura SSL anti-spam zero-tracking, zero cookie di profilazione terzi e backup automatici crittografati.' }
            ],
            metrics: [
                { label: 'Lighthouse Score', value: '99/100' },
                { label: 'Velocità Caricamento', value: '< 0.6s' },
                { label: 'Builder Pesanti', value: '0% (Codice Puro)' },
                { label: 'Autonomia Staff', value: '100% Autonomo' },
            ]
        },
        {
            id: 'workflow-multiagente',
            number: '02',
            status: 'private',
            title: 'Ecosistema Autonomo Multi-Agente',
            shortTitle: 'Workflow Multi-Agente',
            type: 'Sistema AI & Orchestrazione',
            year: '2026',
            url: null,
            domain: 'mission-control.local',
            image: '/img/optimized/multiagent-workflow-1600.jpg',
            imageSet: '/img/optimized/multiagent-workflow-1600.jpg 1600w',
            images: [
                '/img/optimized/multiagent-workflow-1600.jpg'
            ],
            summary: 'Architettura ad agenti autonomi cooperativi per il monitoraggio fonti, analisi strategica, redazione documentale e supervisione Human-in-the-Loop.',
            challenge: 'La gestione di flussi operativi complessi (monitoraggio costante di fonti eterogenee, elaborazione di sintesi strategiche, redazione di bozze e smistamento comunicazioni) genera colli di bottiglia e un enorme dispendio di tempo per i professionisti, con elevato rischio di errori e ritardi se gestiti manualmente o con automazioni lineari rigide.',
            solution: 'Ho ingegnerizzato un’infrastruttura modulare guidata da un Orchestratore Centrale e 6 sub-agenti specializzati con memoria persistente isolata (SOUL/MEMORY), routing asimmetrico dei modelli LLM in base al costo computazionale, un rigoroso gatekeeper Human-in-the-Loop (nessun output esterno viene pubblicato senza consenso esplicito) e telemetria locale su SQLite.',
            engineering: [
                { label: 'Linguaggi & Core Stack', desc: 'Python 3.12 (architettura asincrona con AsyncIO), FastAPI backend, SQLite locale, Vanilla JavaScript ES6+, Tailwind CSS e integrazione modelli frontier (LLM multimodali).' },
                { label: 'Architettura Software', desc: 'Orchestratore Centrale distribuito che coordina 6 sub-agenti specializzati (Ricerca Fonti, Strategia, Redazione, Triage Comunicazioni, Webmaster, DevSecOps). Routing dinamico asimmetrico dei modelli per minimizzare costi computazionali e massimizzare la precisione.' },
                { label: 'Dashboard & Tooling Operativo', desc: 'Mission Control Dashboard proprietaria in locale servita via Server-Sent Events (SSE) a latenza zero: visualizza lo stato live degli agenti, lo streaming dei task in coda e include il Gatekeeper Human-in-the-Loop per ispezionare, modificare e approvare con 1 click bozze ed email prima del rilascio.' },
                { label: 'Dati, Storage & Telemetria', desc: 'Memoria contestuale isolata per agente (SOUL.md / MEMORY.md) per prevenire derive di contesto. Telemetria su SQLite locale con crittografia at-rest, routine cron di vacuum e rotazione mensile dei log, audit automatico notturno.' },
                { label: 'Sicurezza & Governance', desc: 'Protocollo di autorizzazione zero-leak: nessun agente possiede permessi per inviare comunicazioni esterne o modificare asset di produzione senza approvazione umana esplicita. Esecuzione confinata in sandbox locale con policy anti-allucinazione.' }
            ],
            metrics: [
                { label: 'Risparmio Tempo Operativo', value: '-85% Carico Routine' },
                { label: 'Sicurezza & Controllo', value: '100% Validato Human-in-the-Loop' },
                { label: 'Sub-Agenti Cooperativi', value: '6 Agenti Specializzati' },
                { label: 'Tracciabilità Eventi', value: 'SQLite Zero-Leak' },
            ]
        },
        {
            id: 'vistamare',
            number: '03',
            status: 'maintenance',
            title: 'Casa Vacanze Vistamare',
            shortTitle: 'Casa Vistamare',
            type: 'Web App',
            year: '2025',
            url: null,
            domain: 'casavacanze-vistamare.it',
            image: '/img/optimized/casavacanze-vistamare-1600.webp',
            imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
            images: [
                '/img/optimized/casavacanze-vistamare-1600.webp'
            ],
            summary: 'Web app immersiva per disintermediare i soggiorni turistici ed azzerare le commissioni delle piattaforme OTA.',
            challenge: 'Le strutture ricettive cedono ogni anno dal 15% al 20% di commissioni a piattaforme come Airbnb e Booking. Vistamare voleva uno strumento digitale proprietario capace di emozionare visivamente gli ospiti e convertire le visite in prenotazioni dirette.',
            solution: 'Ho sviluppato un’applicazione web fluida in React 19 e Tailwind CSS: la fotografia ad alta definizione guida l’ospite tra le camere e la costa. Ho integrato il canale diretto su WhatsApp ed email per richiedere disponibilità con un solo click.',
            engineering: [
                { label: 'Linguaggi & Core Stack', desc: 'React 19, TypeScript, Tailwind CSS, Vite per build istantanea, Node.js e runtime serverless su Edge Vercel.' },
                { label: 'Architettura Software', desc: 'Single Page Application (SPA) reattiva con rendering Edge decentralizzato, pipeline di immagini progressive WebP multi-risoluzione e zero tempi di caricamento da smartphone in mobilità.' },
                { label: 'Dashboard & Tooling Operativo', desc: 'Sistema di prenotazione disintermediata: pipeline integrata WhatsApp Business API e form di contatto diretto che elimina il 15-20% di commissioni delle piattaforme OTA (Booking/Airbnb), instradando richieste e disponibilità direttamente su smartphone.' },
                { label: 'Dati, Storage & Telemetria', desc: 'Deploy Edge globale con caching statico a livello CDN, zero costi fissi mensili di gestione server e tracciamento anonimo privacy-first senza script o cookie invasivi.' },
                { label: 'Sicurezza & Affidabilità', desc: 'Architettura serverless a superficie d’attacco zero (nessun database o server esposto al pubblico), certificati SSL Edge con rinnovo automatico e disponibilità 99.99% garantita.' }
            ],
            metrics: [
                { label: 'Disintermediazione', value: '0% Commissioni OTA' },
                { label: 'Tempo di risposta', value: '< 0.5s' },
                { label: 'Mobile Optimization', value: '100% Fluido' },
                { label: 'Costi Server Fissi', value: '0€ / mese' },
            ]
        }
    ],
    en: [
        {
            id: 'palmisano',
            number: '01',
            status: 'live',
            title: 'Palmisano Environmental Law Firm',
            shortTitle: 'Palmisano Law',
            type: 'Website',
            year: '2026',
            url: 'https://www.avvstefanopalmisano.it',
            domain: 'avvstefanopalmisano.it',
            image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
            imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
            images: [
                '/img/optimized/avvstefanopalmisano-sito-1600.webp'
            ],
            summary: 'High-authority institutional redesign with a custom WordPress theme and autonomous legal publication management.',
            challenge: 'Palmisano Environmental Law Firm, a national reference in complex environmental law, needed to replace an outdated website. The goal: convey institutional rigor and allow the legal team to publish rulings, articles, and legal areas independently, with zero heavy page builders.',
            solution: 'I redesigned the information architecture from scratch: sober visual hierarchy, seamless navigation across practice areas, and private contact forms adhering strictly to legal ethics.',
            engineering: [
                { label: 'Languages & Core Stack', desc: 'Pure PHP 8.3, WordPress 6.x Core, ES6+ JavaScript, Semantic HTML5, tailored compiled Tailwind CSS for an ultra-lightweight CSS bundle.' },
                { label: 'Software Architecture', desc: 'Custom block theme engineered from scratch without heavy page builders (zero Elementor/Divi). Lean codebase, instant loading (<0.6s), and certified 99/100 Core Web Vitals.' },
                { label: 'Dashboard & Operational Tooling', desc: 'Tailored legal editorial panel with custom taxonomies for court rulings, environmental briefs, and case law. Enables legal staff to publish case notes in under 2 minutes.' },
                { label: 'Data, Storage & Telemetry', desc: 'Optimized MySQL database with indexed queries, server-level Nginx caching, and legal Schema.org (LegalService) structured data for organic positioning in environmental law.' },
                { label: 'Security & Legal Ethics', desc: 'Full compliance with bar association legal ethics: SSL encrypted contact channels, zero third-party tracking cookies, and automated encrypted backups.' }
            ],
            metrics: [
                { label: 'Lighthouse Score', value: '99/100' },
                { label: 'Loading Speed', value: '< 0.6s' },
                { label: 'Heavy Builders', value: '0% (Pure Code)' },
                { label: 'Staff Autonomy', value: '100% Autonomous' },
            ]
        },
        {
            id: 'workflow-multiagente',
            number: '02',
            status: 'private',
            title: 'Autonomous Multi-Agent Ecosystem',
            shortTitle: 'Multi-Agent Workflow',
            type: 'AI System & Orchestration',
            year: '2026',
            url: null,
            domain: 'mission-control.local',
            image: '/img/optimized/multiagent-workflow-1600.jpg',
            imageSet: '/img/optimized/multiagent-workflow-1600.jpg 1600w',
            images: [
                '/img/optimized/multiagent-workflow-1600.jpg'
            ],
            summary: 'Cooperative autonomous multi-agent architecture for continuous source monitoring, strategic synthesis, automated drafts, and strict Human-in-the-Loop governance.',
            challenge: 'Managing complex knowledge workflows—monitoring diverse feeds, generating strategic syntheses, drafting specialized publications, and triaging multi-channel communications—creates massive operational bottlenecks and manual drag, which legacy linear scripts cannot handle flexibly.',
            solution: 'I engineered a distributed multi-agent system driven by a Central Orchestrator and 6 persistent specialized sub-agents with isolated memory states (SOUL/MEMORY), cost-optimized model routing, an uncompromising Human-in-the-Loop approval gatekeeper, and local SQLite telemetry.',
            engineering: [
                { label: 'Languages & Core Stack', desc: 'Python 3.12 (asynchronous architecture with AsyncIO), FastAPI backend, Local SQLite, Vanilla ES6+ JavaScript, Tailwind CSS, and frontier multimodal LLM integrations.' },
                { label: 'Software Architecture', desc: 'Distributed Central Orchestrator coordinating 6 specialized sub-agents (Source Research, Strategy, Drafting, Communications Triage, Webmaster, DevSecOps). Asymmetric model routing to minimize computational costs and maximize accuracy.' },
                { label: 'Dashboard & Operational Tooling', desc: 'Proprietary local Mission Control Dashboard powered by zero-latency Server-Sent Events (SSE): live agent status monitor, task streaming, and a Human-in-the-Loop Gatekeeper to inspect, edit, or authorize drafts/emails with a single click before dispatch.' },
                { label: 'Data, Storage & Telemetry', desc: 'Isolated contextual memory per agent (SOUL.md / MEMORY.md) preventing cross-task contamination. Local SQLite telemetry with at-rest encryption, automated cron vacuum and monthly log rotation, scheduled nightly security audit.' },
                { label: 'Security & Governance', desc: 'Zero-leak authorization protocol: zero unvetted external output. No agent can send emails or alter production assets without explicit human sign-off. Sandboxed local execution with zero-hallucination verification.' }
            ],
            metrics: [
                { label: 'Operational Time Saved', value: '-85% Routine Load' },
                { label: 'Security & Control', value: '100% Human-in-the-Loop' },
                { label: 'Cooperative Sub-Agents', value: '6 Specialized Agents' },
                { label: 'Event Traceability', value: 'Zero-Leak SQLite' },
            ]
        },
        {
            id: 'vistamare',
            number: '03',
            status: 'maintenance',
            title: 'Casa Vacanze Vistamare',
            shortTitle: 'Casa Vistamare',
            type: 'Web App',
            year: '2025',
            url: null,
            domain: 'casavacanze-vistamare.it',
            image: '/img/optimized/casavacanze-vistamare-1600.webp',
            imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
            images: [
                '/img/optimized/casavacanze-vistamare-1600.webp'
            ],
            summary: 'Immersive web app designed to disintermediate holiday bookings and eliminate OTA commission fees.',
            challenge: 'Hospitality properties surrender 15% to 20% in commissions to OTA platforms like Airbnb and Booking on every stay. Vistamare wanted a proprietary digital tool capable of captivating guests visually and converting visits into direct bookings.',
            solution: 'I engineered a fluid web application in React 19 and Tailwind CSS: high-definition photography guides guests through rooms and coastlines. I integrated direct WhatsApp and email channels to request availability in one click.',
            engineering: [
                { label: 'Languages & Core Stack', desc: 'React 19, TypeScript, Tailwind CSS, Vite for instant bundling, Node.js, and Vercel Edge Serverless runtime.' },
                { label: 'Software Architecture', desc: 'Reactive Single Page Application (SPA) with decentralized Edge rendering, progressive multi-resolution WebP image pipeline, and instantaneous mobile browsing speeds.' },
                { label: 'Dashboard & Operational Tooling', desc: 'Direct disintermediated booking engine: integrated WhatsApp Business API and quick direct reservation channel that cuts 15-20% OTA commissions (Booking/Airbnb) by routing dates and availability directly to the host’s mobile.' },
                { label: 'Data, Storage & Telemetry', desc: 'Global Edge deployment with CDN static asset caching, zero monthly fixed server overhead, and privacy-first tracking with zero invasive cookies.' },
                { label: 'Security & Reliability', desc: 'Serverless architecture with zero exposed attack surface (no vulnerable public database or server backend), automated Edge SSL certificates, and guaranteed 99.99% uptime.' }
            ],
            metrics: [
                { label: 'Disintermediation', value: '0% OTA Fees' },
                { label: 'Response Time', value: '< 0.5s' },
                { label: 'Mobile Optimization', value: '100% Fluid' },
                { label: 'Fixed Server Cost', value: '€0 / month' },
            ]
        }
    ]
};

export default function Protocol() {
    const { isEn, t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');
    const [viewMode, setViewMode] = useState('desktop');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const stageRef = useRef(null);
    const sectionRef = useRef(null);

    const caseStudies = useMemo(() => {
        return isEn ? rawCaseStudies.en : rawCaseStudies.it;
    }, [isEn]);

    const project = caseStudies[currentIndex] || caseStudies[0];

    const desktopImages = useMemo(() => {
        if (project.images && Array.isArray(project.images) && project.images.length > 0) {
            return project.images;
        }
        return [project.image];
    }, [project]);

    const nextImage = useCallback(() => {
        if (desktopImages.length <= 1) return;
        setActiveImageIndex((prev) => (prev + 1) % desktopImages.length);
    }, [desktopImages.length]);

    const prevImage = useCallback(() => {
        if (desktopImages.length <= 1) return;
        setActiveImageIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
    }, [desktopImages.length]);

    const safeImageIndex = activeImageIndex < desktopImages.length ? activeImageIndex : 0;
    const activeDesktopImage = desktopImages[safeImageIndex] || project.image;

    // Lightbox keyboard controls and body lock
    useEffect(() => {
        if (!isLightboxOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [isLightboxOpen, prevImage, nextImage]);

    // Image Preloader: Cache all project screenshots on mount to eliminate image decode lag
    useEffect(() => {
        caseStudies.forEach((p) => {
            const list = (p.images && p.images.length > 0) ? p.images : [p.image];
            list.forEach((imgUrl) => {
                const img = new Image();
                img.src = imgUrl;
            });
        });
    }, [caseStudies]);

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
        setActiveTab('overview');
        setActiveImageIndex(0);
    }, [caseStudies.length]);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
        setActiveTab('overview');
        setActiveImageIndex(0);
    }, [caseStudies.length]);

    // Entrance animation for project cards & text
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.protocol-reveal',
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power2.out',
                    force3D: true,
                    clearProps: 'transform,opacity',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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
        <section id="progetti" ref={sectionRef} className="relative w-full border-t border-white/10 overflow-hidden bg-gradient-to-b from-[#05060d] via-[#05111f] to-[#07131e] py-16 sm:py-20 lg:py-28 xl:py-36 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            <span id="portfolio" className="sr-only" />

            {/* Distinct Project Theater Background: High-Tech Blueprint Spotlight */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[75vh] bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(0,180,255,0.18),rgba(0,115,160,0.06)_55%,transparent_75%)] pointer-events-none" />
            <div className="absolute -top-32 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.025)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10 w-full">

                {/* Section Header - Centered & Cohesive */}
                <header className="protocol-reveal mx-auto mb-10 sm:mb-12 lg:mb-8 xl:mb-12 max-w-4xl text-center flex flex-col items-center">
                    <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white tracking-tight text-balance">
                        {t.protocol.title}
                    </h2>
                    <p className="mt-2.5 text-base sm:text-xl lg:text-lg xl:text-xl font-normal text-gray-200 max-w-3xl mx-auto leading-relaxed text-balance">
                        {t.protocol.subtitle}
                    </p>

                    {/* Centered Project Selector Pill Bar with Arrow Controls */}
                    <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5 flex-wrap">
                        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-lg">
                            {caseStudies.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setCurrentIndex(idx); setActiveTab('overview'); setActiveImageIndex(0); }}
                                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono transition-all duration-150 font-semibold active:scale-95 ${
                                        currentIndex === idx
                                            ? 'bg-white text-black shadow-md border border-white/40'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <span className="opacity-60 mr-1.5">{item.number}.</span>
                                    <span>{item.shortTitle}</span>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-1.5 pl-0.5 sm:pl-1">
                            <button
                                onClick={prevProject}
                                aria-label={isEn ? "Previous project" : "Progetto precedente"}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-gray-200 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextProject}
                                aria-label={isEn ? "Next project" : "Prossimo progetto"}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-gray-200 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Unified Interactive Showcase Theatre */}
                <div
                    ref={stageRef}
                    className="protocol-reveal rounded-[1.8rem] sm:rounded-[2.2rem] border border-white/15 bg-black/50 shadow-2xl backdrop-blur-2xl overflow-hidden hover:border-white/25 transition-[border-color,box-shadow] duration-300 will-change-[transform,opacity] w-full"
                >
                    {/* Theatre Chrome Bar */}
                    <div className="flex flex-wrap items-center justify-between px-5 sm:px-7 py-2.5 sm:py-3 border-b border-white/10 bg-black/80 backdrop-blur-md gap-3">
                        {/* Traffic light dots & Project Counter */}
                        <div className="flex items-center gap-2.5">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-white/10" />
                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-white/10" />
                                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-white/10" />
                            </div>
                            <span className="font-mono text-xs text-gray-300 pl-2.5 border-l border-white/15 font-semibold tracking-wider">
                                {t.protocol.caseLabel} {project.number} {t.protocol.of} 0{caseStudies.length}
                            </span>
                        </div>

                        {/* Simulated URL bar */}
                        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-gray-200 max-w-sm truncate">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{project.domain || project.url}</span>
                        </div>

                        {/* Viewport switch: Desktop / Mobile + Visit Website Button */}
                        <div className="flex items-center gap-2.5">
                            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/15">
                                <button
                                    onClick={() => setViewMode('desktop')}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all font-semibold ${
                                        viewMode === 'desktop'
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    <Laptop className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Desktop</span>
                                </button>
                                <button
                                    onClick={() => setViewMode('mobile')}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all font-semibold ${
                                        viewMode === 'mobile'
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    <Smartphone className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Mobile</span>
                                </button>
                            </div>

                            {project.status === 'live' && project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-gray-100 font-sans text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 flex-shrink-0"
                                    title={t.protocol.visitWebsite}
                                >
                                    <span>{t.protocol.visitWebsite}</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                                </a>
                            )}

                            {project.status === 'private' && (
                                <div className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/20 font-mono text-xs font-semibold text-gray-200 shadow-sm flex-shrink-0">
                                    <Lock className="w-3.5 h-3.5 text-drago-accent" />
                                    <span>{isEn ? "Private System" : "Progetto Privato"}</span>
                                </div>
                            )}

                            {project.status === 'maintenance' && (
                                <div className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 font-mono text-xs font-semibold text-amber-300 shadow-sm flex-shrink-0">
                                    <Wrench className="w-3.5 h-3.5 text-amber-400" />
                                    <span>{isEn ? "In Maintenance" : "In Manutenzione"}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Stage Grid: 2 Columns on desktop (Image first on vertical/mobile) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-0">

                        {/* Column 1: Case Autopsy & Story (Appears 2nd on vertical/mobile, 1st on desktop) */}
                        <div className="order-2 lg:order-1 project-quick-fade lg:col-span-5 p-5 sm:p-7 xl:p-8 flex flex-col justify-start border-t lg:border-t-0 lg:border-r border-white/10 bg-black/40 will-change-[opacity,transform]">
                            <div>
                                {/* Header / Tags */}
                                <div className="mb-3">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                                            {project.type}
                                        </span>
                                        <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-drago-accent/25 border border-drago-accent/50 text-white font-semibold">
                                            {project.year}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl xl:text-4xl text-white mt-1 tracking-tight leading-snug">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm font-normal text-gray-200 mt-2 leading-relaxed">
                                        {project.summary}
                                    </p>
                                </div>

                                {/* Tab Selector */}
                                <div className="flex p-1 rounded-xl bg-white/[0.04] border border-white/10 my-3.5 xl:my-4 gap-1 overflow-x-auto no-scrollbar">
                                    {[
                                        { id: 'overview', label: t.protocol.tabs.overview },
                                        { id: 'challenge', label: t.protocol.tabs.challenge },
                                        { id: 'engineering', label: isEn ? 'Engineering & Stack' : 'Ingegneria & Stack' },
                                    ].map((tabItem) => (
                                        <button
                                            key={tabItem.id}
                                            onClick={() => setActiveTab(tabItem.id)}
                                            className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-sans font-semibold transition-all whitespace-nowrap text-center ${
                                                activeTab === tabItem.id
                                                    ? 'bg-white/15 text-white border border-white/20 shadow-sm'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                        >
                                            {tabItem.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Dynamic Tab Content - Full text visibility without internal sliders */}
                                <div className="pt-1">
                                    {activeTab === 'overview' && (
                                        <div className="space-y-4">
                                            <p className="font-sans text-xs sm:text-sm xl:text-base font-normal text-gray-200 leading-relaxed">
                                                {project.solution}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 pt-1">
                                                {project.metrics.map((m) => (
                                                    <div key={m.label} className="p-3 sm:p-3.5 xl:p-4 rounded-xl bg-white/[0.035] border border-white/10 hover:border-drago-accent/40 transition-colors shadow-sm">
                                                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 block font-medium">{m.label}</span>
                                                        <span className="text-lg sm:text-2xl font-mono font-bold text-white mt-1 block tracking-tight">
                                                            {m.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'challenge' && (
                                        <div className="space-y-3">
                                            {/* Challenge Box */}
                                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                                                        {t.protocol.challengeLabel}
                                                    </span>
                                                </div>
                                                <p className="font-sans text-xs sm:text-sm font-normal text-gray-200 leading-relaxed">
                                                    {project.challenge}
                                                </p>
                                            </div>

                                            {/* Solution Box */}
                                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                                                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-bold">
                                                        {t.protocol.solutionLabel}
                                                    </span>
                                                </div>
                                                <p className="font-sans text-xs sm:text-sm font-normal text-gray-200 leading-relaxed">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'engineering' && (
                                        <div className="space-y-3">
                                            {project.engineering.map((eng, idx) => {
                                                const iconsMap = [Code2, Cpu, Laptop, Database, ShieldCheck];
                                                const EngIcon = iconsMap[idx] || Zap;
                                                return (
                                                    <div key={eng.label} className="p-3 sm:p-3.5 rounded-xl bg-white/[0.035] border border-white/10 hover:border-drago-accent/35 transition-all">
                                                        <div className="flex items-center gap-1.5 mb-1">
                                                            <EngIcon className="w-3.5 h-3.5 text-drago-accent flex-shrink-0" />
                                                            <span className="font-mono font-bold text-xs sm:text-sm text-white tracking-tight">{eng.label}</span>
                                                        </div>
                                                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                                                            {eng.desc}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Cinematic Viewport Screen (Appears 1st on vertical/mobile, 2nd on desktop) */}
                        <div className="order-1 lg:order-2 project-quick-fade lg:col-span-7 p-4 sm:p-6 lg:p-4 xl:p-8 flex flex-col items-center justify-center bg-black/60 relative overflow-hidden will-change-[opacity,transform]">
                            
                            {/* Desktop macOS Browser Window Frame */}
                            {viewMode === 'desktop' && (
                                <div className="transition-all duration-300 w-full max-w-[760px] flex flex-col items-center justify-center">
                                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0d1117]">
                                        
                                        {/* macOS Window Title Bar */}
                                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/10">
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                            </div>

                                            {/* Centered address capsule */}
                                            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/15 text-xs font-mono text-gray-300 max-w-[300px] truncate">
                                                <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                                <span className="truncate text-gray-200">{project.domain || project.url}</span>
                                            </div>

                                            {project.status === 'live' && project.url ? (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                    title={t.protocol.visitWebsite}
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            ) : project.status === 'private' ? (
                                                <div title={isEn ? "Private System" : "Progetto Privato"} className="text-drago-accent">
                                                    <Lock className="w-3.5 h-3.5" />
                                                </div>
                                            ) : project.status === 'maintenance' ? (
                                                <div title={isEn ? "In Maintenance" : "In Manutenzione"} className="text-amber-400">
                                                    <Wrench className="w-3.5 h-3.5" />
                                                </div>
                                            ) : (
                                                <div className="w-4" />
                                            )}
                                        </div>

                                        {/* Viewport - Click to Open Fullscreen Lightbox */}
                                        <div
                                            onClick={() => setIsLightboxOpen(true)}
                                            className="relative w-full flex items-center justify-center bg-[#07090c] p-2 sm:p-3 overflow-hidden rounded-b-2xl cursor-zoom-in group/screen"
                                            title={isEn ? "Click to view full screen" : "Clicca per ingrandire a tutto schermo"}
                                        >
                                            <img
                                                key={activeDesktopImage}
                                                src={activeDesktopImage}
                                                alt={`${project.title} - Drago Labs`}
                                                className="w-full h-auto max-h-[290px] sm:max-h-[340px] lg:max-h-[320px] xl:max-h-[390px] 2xl:max-h-[460px] object-contain rounded-lg block shadow-lg transition-transform duration-300 group-hover/screen:scale-[1.01]"
                                                loading="eager"
                                            />
                                            {/* Subtle zoom hint on hover */}
                                            <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center gap-1.5 pointer-events-none shadow-xl">
                                                <Maximize2 className="w-3 h-3 text-drago-accent" />
                                                <span>{isEn ? "Zoom" : "Ingrandisci"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Carousel navigation controls below desktop frame */}
                                    <div className="mt-3 flex items-center justify-between w-full px-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono text-gray-400 font-medium">
                                                {isEn ? 'Preview' : 'Schermata'} {safeImageIndex + 1} / {desktopImages.length}
                                            </span>
                                            {desktopImages.length > 1 && (
                                                <div className="flex items-center gap-1.5 ml-2">
                                                    {desktopImages.map((_, dotIdx) => (
                                                        <button
                                                            key={dotIdx}
                                                            onClick={() => setActiveImageIndex(dotIdx)}
                                                            aria-label={`Schermata ${dotIdx + 1}`}
                                                            className={`h-1.5 rounded-full transition-all ${
                                                                safeImageIndex === dotIdx ? 'w-5 bg-drago-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={prevImage}
                                                disabled={desktopImages.length <= 1}
                                                aria-label={isEn ? "Previous screenshot" : "Schermata precedente"}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                                                    desktopImages.length <= 1
                                                        ? 'opacity-30 border-white/10 text-gray-500 cursor-not-allowed'
                                                        : 'bg-white/5 hover:bg-white/15 border-white/20 text-gray-200 hover:text-white active:scale-95'
                                                }`}
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                disabled={desktopImages.length <= 1}
                                                aria-label={isEn ? "Next screenshot" : "Schermata successiva"}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                                                    desktopImages.length <= 1
                                                        ? 'opacity-30 border-white/10 text-gray-500 cursor-not-allowed'
                                                        : 'bg-white/5 hover:bg-white/15 border-white/20 text-gray-200 hover:text-white active:scale-95'
                                                }`}
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
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
                                            <div
                                                onClick={() => setIsLightboxOpen(true)}
                                                className="relative w-full flex-1 overflow-hidden my-1 cursor-zoom-in"
                                                title={isEn ? "Click to view full screen" : "Clicca per ingrandire a tutto schermo"}
                                            >
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
                            <div className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-300">
                                <span>{t.protocol.footerPrompt}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-sm sm:text-base">{project.number}</span>
                                    <span>/</span>
                                    <span className="text-gray-400 font-medium">0{caseStudies.length}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Section Bottom Callout */}
                <div className="mt-6 sm:mt-8 p-5 sm:p-7 rounded-[1.5rem] border border-white/15 bg-black/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-xl">
                    <div>
                        <h4 className="font-display font-bold text-xl sm:text-2xl text-white">{t.protocol.calloutTitle}</h4>
                        <p className="text-xs sm:text-sm font-normal text-gray-300 mt-1 max-w-xl leading-relaxed">
                            {t.protocol.calloutSubtitle}
                        </p>
                    </div>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black hover:bg-gray-100 font-sans text-sm font-bold transition-all hover:scale-105 shadow-md flex-shrink-0 active:scale-95"
                    >
                        {t.protocol.calloutCta}
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

            </div>

            {/* ── Fullscreen Lightbox Modal ── */}
            {isLightboxOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.title} - Fullscreen View`}
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-6 select-none animate-fadeIn"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsLightboxOpen(false);
                    }}
                >
                    {/* Top bar: Title + counter + close */}
                    <div className="w-full max-w-6xl flex items-center justify-between z-10 py-2 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold text-sm sm:text-base">{project.title}</span>
                            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
                                {safeImageIndex + 1} / {desktopImages.length}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                                >
                                    <span>{t.protocol.visitWebsite}</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                aria-label={isEn ? "Close fullscreen" : "Chiudi tutto schermo"}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Center: Image + side arrows */}
                    <div
                        className="relative w-full flex-1 flex items-center justify-center my-3 max-h-[82vh]"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsLightboxOpen(false);
                        }}
                    >
                        {desktopImages.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                aria-label={isEn ? "Previous image" : "Immagine precedente"}
                                className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}

                        <img
                            src={desktopImages[safeImageIndex]}
                            alt={`${project.title} - Ingrandimento`}
                            className="max-h-[80vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {desktopImages.length > 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                aria-label={isEn ? "Next image" : "Immagine successiva"}
                                className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/20 text-white flex items-center justify-center transition-all shadow-2xl hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}
                    </div>

                    {/* Bottom thumbnail / indicators bar */}
                    <div className="w-full max-w-md flex items-center justify-center gap-2 py-2">
                        {desktopImages.length > 1 && desktopImages.map((_, dotIdx) => (
                            <button
                                key={dotIdx}
                                onClick={() => setActiveImageIndex(dotIdx)}
                                className={`h-2 rounded-full transition-all ${
                                    safeImageIndex === dotIdx ? 'w-8 bg-drago-accent' : 'w-2 bg-white/25 hover:bg-white/50'
                                }`}
                                aria-label={`Slide ${dotIdx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
