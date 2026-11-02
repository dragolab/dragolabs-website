import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ShieldCheck, Zap, Layers, Code2, CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 'palmisano',
        title: 'Studio Legale Ambientale Palmisano',
        category: 'Diritto Ambientale & Consulenza Giuridica',
        year: '2026',
        status: 'In Produzione · Live',
        url: 'https://www.avvstefanopalmisano.it',
        image: '/img/optimized/avvstefanopalmisano-sito-1600.webp',
        imageSet: '/img/optimized/avvstefanopalmisano-sito-960.webp 960w, /img/optimized/avvstefanopalmisano-sito-1600.webp 1600w',
        summary: 'Restyling istituzionale ad alta autorevolezza con tema WordPress sartoriale e gestione autonoma delle pubblicazioni forensi.',
        challenge: 'Lo Studio Legale Ambientale Palmisano è un punto di riferimento nazionale nelle materie ambientali complesse. La presenza web preesistente era datata e non rispecchiava la levatura dello studio. La sfida chiave: comunicare rigore, solidità e trasparenza a una platea di clienti istituzionali, magistrati e imprese, permettendo ai professionisti di pubblicare sentenze, articoli e aree di competenza in completa autonomia e senza vincoli tecnici.',
        solution: 'Abbiamo ridisegnato l’intera architettura dell’informazione: una presenza autorevole, tipografia bilanciata e navigazione ad albero che guida l’utente tra i profili degli avvocati, le aree di consulenza e i canali di contatto riservati. Ogni modulo di contatto rispetta i più rigidi standard di riservatezza.',
        engineering: [
            { label: 'Architettura CMS', desc: 'WordPress con tema sartoriale sviluppato da zero: zero builder pesanti (no Elementor), zero dipendenze lente.' },
            { label: 'Prestazioni & Velocità', desc: 'Core Web Vitals 99/100, tempo di caricamento inferiore a 0.6s anche su connessioni mobili.' },
            { label: 'SEO & Semantica', desc: 'Dati strutturati Schema.org specifici per studi legali e posizionamento organico sul diritto ambientale.' },
            { label: 'Autonomia Editoriale', desc: 'Pannello di controllo minimale che consente allo studio di pubblicare una sentenza o articolo in 2 minuti.' }
        ],
        metrics: [
            { label: 'Lighthouse Score', value: '99/100' },
            { label: 'Tempo di risposta', value: '< 0.6s' },
            { label: 'Builder Pesanti', value: 'Zero (Codice Puro)' },
            { label: 'Autonomia Staff', value: '100% Autonomo' },
        ],
        tags: ['WordPress Sartoriale', 'Diritto Ambientale', 'Core Web Vitals 99+', 'Schema.org SEO']
    },
    {
        id: 'vistamare',
        title: 'Casa Vacanze Vistamare',
        category: 'Hospitality & Turismo di Pregio',
        year: '2025',
        status: 'In Produzione · Live',
        url: '',
        image: '/img/optimized/casavacanze-vistamare-1600.webp',
        imageSet: '/img/optimized/casavacanze-vistamare-960.webp 960w, /img/optimized/casavacanze-vistamare-1600.webp 1600w',
        summary: 'Applicazione web immersiva ad alto impatto per massimizzare le prenotazioni dirette ed azzerare le commissioni delle OTA.',
        challenge: 'Le strutture ricettive indipendenti cedono tipicamente dal 15% al 20% di commissioni a piattaforme come Airbnb e Booking. Vistamare voleva disintermediare i flussi di prenotazione: serviva uno strumento capace di trasmettere l’emozione del soggiorno sul mare e convertire il visitatore in una richiesta di contatto diretta.',
        solution: 'Abbiamo realizzato un’applicazione web fluida (React 19 + Tailwind CSS) in cui le immagini della struttura e del panorama marino guidano il racconto. La navigazione accompagna l’ospite tra camere, dotazioni e punti di interesse, con call to action dirette per richiedere date e preventivi su WhatsApp ed email con un solo tocco.',
        engineering: [
            { label: 'Stack Frontend', desc: 'React 19, TypeScript, Tailwind CSS e build ultraleggera con Vite: zero lag durante lo scroll.' },
            { label: 'Asset Optimization', desc: 'Immagini in formato WebP progressivo servite in formati multi-risoluzione per caricamenti istantanei.' },
            { label: 'Piattaforma Serverless', desc: 'Deploy distribuito a livello globale su Edge Network Vercel con zero costi mensili fissi di hosting.' },
            { label: 'Canale Diretto', desc: 'Integrazione diretta con API WhatsApp Business per contatto in tempo reale senza commissioni.' }
        ],
        metrics: [
            { label: 'Disintermediazione', value: '0% Commissioni OTA' },
            { label: 'Velocità di Caricamento', value: '< 0.5s' },
            { label: 'Mobile Optimization', value: '100% Fluido' },
            { label: 'Costi Server Fissi', value: '0€ / mese' },
        ],
        tags: ['React 19', 'Tailwind CSS', 'Vite', 'Booking Diretto', 'PWA Ready']
    },
    {
        id: 'aunpasso-dalfaro',
        title: 'A Un Passo Dal Faro',
        category: 'Dimora Turistica & Territorio',
        year: '2024 / 2025',
        status: 'In Produzione · Live',
        url: '',
        image: '/img/optimized/aunpasso-dalfaro-1200.webp',
        imageSet: '/img/optimized/aunpasso-dalfaro-960.webp 960w, /img/optimized/aunpasso-dalfaro-1200.webp 1200w',
        summary: 'Piattaforma di presentazione territoriale con georeferenziazione, tariffe chiare e contatto istantaneo per ospiti.',
        challenge: 'Una dimora turistica affacciata su uno dei tratti costieri più iconici della Puglia. La necessità primaria era farsi scoprire da viaggiatori sia italiani che stranieri, raccontando la vicinanza strategica al faro e alle spiagge senza appesantire la fruizione su smartphone.',
        solution: 'Una narrazione visiva pulita, luminosa e rilassante, arricchita da mappe locali dei luoghi caratteristici, tariffe trasparenti e un modulo di contatto essenziale per richiedere la disponibilità con risposta rapida.',
        engineering: [
            { label: 'Lightweight Code', desc: 'Struttura responsive ultra-essenziale, progettata specificamente per visitatori che navigano da rete 4G/5G in viaggio.' },
            { label: 'Local SEO & Maps', desc: 'Integrazione schema turistico e geolocalizzazione per il posizionamento nelle ricerche locali su Google Maps.' },
            { label: 'Esperienza Utente', desc: 'Accesso alle informazioni su check-in, servizi e regole della struttura in un solo colpo d’occhio.' },
            { label: 'Supporto Tecnico', desc: 'Assistenza e manutenzione programmata gestita direttamente dal laboratorio Drago Labs.' }
        ],
        metrics: [
            { label: 'Target Connessioni', value: 'Ottimizzato 4G/5G' },
            { label: 'Tempo di lettura', value: '< 1 min' },
            { label: 'SEO Locale', value: 'Indicizzato Maps' },
            { label: 'Gestione Tecnica', value: 'Zero Pensieri' },
        ],
        tags: ['Hospitality', 'SEO Locale', 'Responsive Design', 'Puglia Experience']
    }
];

export default function Protocol() {
    const sectionRef = useRef(null);
    // Active tab for each project: 'overview' | 'challenge' | 'engineering'
    const [activeTabs, setActiveTabs] = useState({
        palmisano: 'overview',
        vistamare: 'overview',
        'aunpasso-dalfaro': 'overview',
    });

    const setTab = (projectId, tab) => {
        setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card-reveal',
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.15,
                    ease: 'power3.out',
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="progetti" ref={sectionRef} className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
            <span id="portfolio" className="sr-only" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Section Header */}
                <header className="project-card-reveal mx-auto mb-20 max-w-3xl text-center">
                    <span className="font-mono text-xs text-drago-accent uppercase tracking-widest px-3.5 py-1 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-4">
                        Casi Studio Approfonditi
                    </span>
                    <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-drago-contrast tracking-tight text-balance">
                        I Progetti Spiegati.
                    </h2>
                    <p className="mt-5 text-base sm:text-xl font-light text-gray-300 leading-relaxed text-balance">
                        Non semplici screenshot: qui analizzo il problema di partenza di ogni cliente, la strategia di progettazione adottata e l'architettura tecnica costruita per risolverlo.
                    </p>
                    <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </header>

                {/* List of Deep-Dive Case Studies */}
                <div className="space-y-20 md:space-y-28">
                    {caseStudies.map((project, idx) => {
                        const currentTab = activeTabs[project.id] || 'overview';

                        return (
                            <article
                                key={project.id}
                                className="project-card-reveal rounded-[2rem] border border-white/10 bg-drago-text/40 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-drago-accent/50 transition-all duration-300"
                            >
                                {/* Browser Chrome / Device Top Bar */}
                                <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/60 gap-3">
                                    {/* Window Dots & Status */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                        </div>
                                        <span className="hidden sm:inline-block font-mono text-[11px] text-gray-400 pl-2 border-l border-white/10">
                                            CASO STUDIO 0{idx + 1}
                                        </span>
                                    </div>

                                    {/* Simulated URL bar */}
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 max-w-xs truncate">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                        <span className="truncate">{project.url || `dragolabs.app/case-study/${project.id}`}</span>
                                    </div>

                                    {/* Live Status Badge */}
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Project Body: 2 Columns */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                                    
                                    {/* Left: Visual Preview (5 cols) */}
                                    <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20">
                                        <div>
                                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group mb-6">
                                                <img
                                                    src={project.image}
                                                    srcSet={project.imageSet}
                                                    alt={`Anteprima ${project.title}`}
                                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                                                    <span>{project.category}</span>
                                                    <span>{project.year}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tags.map((t) => (
                                                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {project.url && (
                                            <div className="pt-6 mt-6 border-t border-white/10">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-drago-accent/15 hover:bg-drago-accent border border-drago-accent/40 hover:border-drago-accent text-white transition-all duration-300"
                                                >
                                                    <span className="font-sans text-sm font-semibold text-drago-contrast">Visita il sito online</span>
                                                    <ExternalLink className="w-4 h-4 text-drago-accent group-hover:text-white transition-colors" />
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: Interactive Case Autopsy (7 cols) */}
                                    <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            {/* Title & Category */}
                                            <div className="mb-6">
                                                <span className="text-xs font-mono uppercase text-drago-accent tracking-wider font-semibold">
                                                    {project.category} · {project.year}
                                                </span>
                                                <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-1 leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="font-sans text-sm sm:text-base font-light text-gray-300 mt-3 leading-relaxed">
                                                    {project.summary}
                                                </p>
                                            </div>

                                            {/* Tab Switcher */}
                                            <div className="flex border-b border-white/10 mb-6 gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
                                                {[
                                                    { id: 'overview', label: '1. Sintesi & Obiettivi' },
                                                    { id: 'challenge', label: '2. La Sfida & La Strategia' },
                                                    { id: 'engineering', label: '3. Ingegneria & Dati Tecnici' },
                                                ].map((t) => (
                                                    <button
                                                        key={t.id}
                                                        onClick={() => setTab(project.id, t.id)}
                                                        className={`pb-3 text-xs sm:text-sm font-sans font-medium transition-all relative whitespace-nowrap ${
                                                            currentTab === t.id
                                                                ? 'text-drago-accent border-b-2 border-drago-accent font-semibold'
                                                                : 'text-gray-400 hover:text-white'
                                                        }`}
                                                    >
                                                        {t.label}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Tab Content 1: Overview & Metrics */}
                                            {currentTab === 'overview' && (
                                                <div className="space-y-6 animate-fadeIn">
                                                    <div>
                                                        <h4 className="font-sans font-bold text-sm uppercase text-gray-200 tracking-wider mb-2">
                                                            L'Obiettivo del Progetto
                                                        </h4>
                                                        <p className="font-sans text-sm sm:text-base font-light text-gray-300 leading-relaxed">
                                                            {project.solution}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-sans font-bold text-xs uppercase font-mono text-drago-accent tracking-wider mb-3">
                                                            Telemetria & Metriche Raggiunte
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {project.metrics.map((m) => (
                                                                <div key={m.label} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                                                    <span className="text-[11px] font-mono text-gray-400 block">{m.label}</span>
                                                                    <span className="text-sm sm:text-base font-mono font-bold text-white mt-1 block text-drago-accent">
                                                                        {m.value}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tab Content 2: Challenge & Solution */}
                                            {currentTab === 'challenge' && (
                                                <div className="space-y-6 animate-fadeIn">
                                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                                        <span className="font-mono text-xs uppercase text-red-300 tracking-wider font-semibold block mb-1">
                                                            La Sfida Iniziale (Il Problema)
                                                        </span>
                                                        <p className="font-sans text-sm font-light text-gray-300 leading-relaxed">
                                                            {project.challenge}
                                                        </p>
                                                    </div>

                                                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                                        <span className="font-mono text-xs uppercase text-emerald-300 tracking-wider font-semibold block mb-1">
                                                            La Risposta di Drago Labs (La Soluzione)
                                                        </span>
                                                        <p className="font-sans text-sm font-light text-gray-300 leading-relaxed">
                                                            {project.solution}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tab Content 3: Engineering Spec */}
                                            {currentTab === 'engineering' && (
                                                <div className="space-y-3.5 animate-fadeIn">
                                                    {project.engineering.map((eng) => (
                                                        <div key={eng.label} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <Zap className="w-3.5 h-3.5 text-drago-accent" />
                                                                <span className="font-sans font-bold text-sm text-white">{eng.label}</span>
                                                            </div>
                                                            <p className="font-sans text-xs sm:text-sm font-light text-gray-300 leading-relaxed">
                                                                {eng.desc}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Prompt to discuss similar project */}
                                        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                                            <span>Vuoi un'architettura simile?</span>
                                            <a href="#contatti" className="text-drago-accent hover:underline flex items-center gap-1 font-medium">
                                                Parla con me <ArrowRight className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Section Footer Callout */}
                <div className="project-card-reveal mt-20 p-8 rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-md text-center max-w-3xl mx-auto">
                    <h3 className="font-sans font-bold text-2xl text-white mb-2">
                        Ogni attività ha una sfida diversa.
                    </h3>
                    <p className="font-sans text-sm sm:text-base font-light text-gray-300 mb-6 leading-relaxed">
                        Non applico formule preconfezionate: studio il tuo contesto e costruisco la soluzione tecnologica più adatta ai tuoi obiettivi.
                    </p>
                    <a
                        href="#contatti"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-drago-accent hover:bg-drago-accent/90 text-white font-medium text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,115,160,0.4)]"
                    >
                        Richiedi un'analisi per il tuo business
                    </a>
                </div>

            </div>
        </section>
    );
}
