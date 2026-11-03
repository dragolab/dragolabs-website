import { useState, useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Instagram, Mail, Bot, MessageSquare, ArrowRight } from 'lucide-react';
import ArgoConsole from './ArgoConsole';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const socials = [
    { href: 'https://wa.me/393939450653', label: 'WhatsApp', colorClass: 'hover:text-[#25D366]', icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.998l6.304-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.214-3.733.979 1-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.818 4.396 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818z"/>
        </svg>
    )},
    { href: 'mailto:info.dragolabs@gmail.com', label: 'Email', colorClass: 'hover:text-yellow-400', icon: <Mail className="w-5 h-5" /> },
    { href: 'https://www.linkedin.com/in/gianluca-dragone/', label: 'LinkedIn', colorClass: 'hover:text-[#0a66c2]', icon: <Linkedin className="w-5 h-5" /> },
    { href: 'https://github.com/dragolab', label: 'GitHub', colorClass: 'hover:text-white', icon: <Github className="w-5 h-5" /> },
    { href: 'https://www.instagram.com/gianl.drag/', label: 'Instagram', colorClass: 'hover:text-[#E1306C]', icon: <Instagram className="w-5 h-5" /> },
];

const skills = ['React 19', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Edge Serverless', 'Agenti AI Autonomi'];

export default function StaffSection() {
    const sectionRef = useRef(null);
    const { isEn, t } = useLanguage();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatExpanded, setIsChatExpanded] = useState(false);
    const [activePrompt, setActivePrompt] = useState('');

    const quickArgoQuestions = useMemo(() => {
        return isEn ? [
            { title: "My Projects", query: "Tell me about the projects and case studies Gianluca built" },
            { title: "Working Method", query: "What is Drago Labs' vision and engineering process?" },
            { title: "Stack Advice", query: "Which technologies would you suggest for my project idea?" },
            { title: "Pricing & Timelines", query: "How long does a project take and how to request a free consultation?" },
        ] : [
            { title: "I Miei Progetti", query: "Parlami dei progetti e dei casi studio che ha realizzato Gianluca" },
            { title: "Metodo di Lavoro", query: "Qual è il metodo di lavoro e la visione di Drago Labs?" },
            { title: "Consiglio Stack", query: "Quali tecnologie consiglieresti per la mia idea di progetto?" },
            { title: "Preventivo & Tempi", query: "Quanto tempo richiede un progetto e come richiedere una consulenza gratuita?" },
        ];
    }, [isEn]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.staff-reveal',
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

    const handleOpenWithPrompt = (promptText = '') => {
        setActivePrompt(promptText);
        setIsChatOpen(true);
    };

    return (
        <section id="chi-sono" ref={sectionRef} className="relative w-full border-t border-white/10 overflow-hidden bg-gradient-to-b from-[#050f14] via-[#090b16] to-[#060810] py-16 sm:py-20 lg:py-10 xl:py-14 lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
            
            {/* Distinct Dual-Core Command Station Background */}
            <div className="absolute top-1/4 left-[5%] w-[45vw] max-w-[700px] h-[45vw] max-h-[700px] bg-[radial-gradient(circle,rgba(226,232,240,0.05),transparent_65%)] blur-2xl pointer-events-none" />
            <div className="absolute top-1/4 right-[5%] w-[45vw] max-w-[700px] h-[45vw] max-h-[700px] bg-[radial-gradient(circle,rgba(0,229,255,0.13),rgba(16,185,129,0.05)_50%,transparent_70%)] blur-2xl pointer-events-none" />
            
            {/* AI Radar Coordinate Ring Accents */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-drago-accent/10 pointer-events-none hidden xl:block" />
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-drago-accent/[0.06] border-dashed pointer-events-none hidden xl:block" />

            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10 w-full">
                {/* Section Header */}
                <header className="staff-reveal mx-auto mb-8 sm:mb-10 lg:mb-6 xl:mb-10 max-w-4xl text-center">
                    <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white tracking-tight text-balance">
                        {t.staff.title}
                    </h2>
                    <p className="mt-2 text-base sm:text-xl lg:text-lg xl:text-xl font-normal text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {t.staff.subtitle}
                    </p>
                </header>

                {/* 2-Column Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Column 1: Gianluca Dragone */}
                    <div className={`staff-reveal ${isChatExpanded ? 'lg:col-span-12 mb-4' : 'lg:col-span-7'} rounded-[2.4rem] border border-white/15 bg-black/40 shadow-2xl backdrop-blur-2xl p-8 sm:p-10 xl:p-12 flex flex-col justify-between hover:border-white/25 transition-[border-color,box-shadow] duration-300 will-change-[transform,opacity]`}>
                        <div>
                            {/* Profile Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-7 pb-6 border-b border-white/10">
                                <div className="flex items-center gap-5">
                                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-white/10 border border-white/25 p-1 flex items-center justify-center flex-shrink-0 shadow-xl">
                                        <img
                                            src="/img/optimized/logo-dragolabs-256.webp"
                                            alt="Gianluca Dragone - Drago Labs"
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-2xl sm:text-3xl xl:text-4xl text-white">Gianluca Dragone</h3>
                                        <p className="text-base sm:text-lg text-gray-300 font-semibold mt-0.5">{t.staff.gianlucaRole}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="space-y-4 text-base sm:text-lg font-normal text-gray-200 leading-relaxed">
                                <p>
                                    {isEn ? (
                                        <>I founded <strong>Drago Labs</strong> to transform technological complexity into concrete, fast, and dependable digital solutions for professionals and businesses.</>
                                    ) : (
                                        <>Ho fondato <strong>Drago Labs</strong> per trasformare la complessità tecnologica in soluzioni digitali concrete, veloci e affidabili per professionisti e imprese.</>
                                    )}
                                </p>
                                <p>
                                    {isEn ? (
                                        <>With a solid foundation in <strong>classical studies</strong> that taught me analytical thinking and logical structuring, I study <em>Computer Science and Software Engineering</em> at the University of Bari "Aldo Moro".</>
                                    ) : (
                                        <>Con una solida base negli <strong>studi classici</strong> che mi ha insegnato il pensiero analitico e la strutturazione logica, studio <em>Informatica e Tecnologie per la Produzione del Software</em> presso l'Università degli Studi di Bari "Aldo Moro".</>
                                    )}
                                </p>
                                <p>
                                    {isEn ? (
                                        <>My approach is driven by a simple rule: <em>zero fluff, clean code, and scalable architectures</em> engineered around the real needs of the client.</>
                                    ) : (
                                        <>Il mio approccio è guidato da una regola semplice: <em>zero fuffa, codice pulito e architetture scalabili</em> progettate intorno alle reali necessità del cliente.</>
                                    )}
                                </p>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="mt-7 pt-6 border-t border-white/10">
                                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block mb-3 font-semibold">{t.staff.skillsTitle}</span>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s) => (
                                        <span key={s} className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-mono text-gray-300 font-medium hover:border-white/20 hover:text-white transition-all">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Links Bar */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                            <span className="text-sm text-gray-400 font-mono font-medium">{t.staff.directChannels}</span>
                            <div className="flex items-center gap-3">
                                {socials.map((soc) => (
                                    <a
                                        key={soc.label}
                                        href={soc.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={soc.label}
                                        className={`w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-gray-300 ${soc.colorClass} hover:border-white/40 transition-all hover:scale-110`}
                                    >
                                        {soc.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Argo AI Agent */}
                    <div className={`staff-reveal ${isChatExpanded ? 'lg:col-span-12' : 'lg:col-span-5'} flex flex-col transition-all duration-300`}>
                        {isChatOpen ? (
                            <ArgoConsole
                                initialPrompt={activePrompt}
                                isExpanded={isChatExpanded}
                                onToggleExpand={() => setIsChatExpanded((prev) => !prev)}
                                onClose={() => {
                                    setIsChatOpen(false);
                                    setIsChatExpanded(false);
                                    setActivePrompt('');
                                }}
                            />
                        ) : (
                            <div className="rounded-[2.4rem] border border-white/15 bg-black/40 shadow-2xl backdrop-blur-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-[border-color,box-shadow] duration-300 h-full min-h-[640px] relative overflow-hidden group">
                                
                                {/* Ambient glow */}
                                <div className="absolute -top-24 -right-24 w-52 h-52 bg-drago-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-drago-accent/25 transition-all duration-700" />

                                <div>
                                    {/* Argo Profile Header */}
                                    <div className="flex items-center justify-between mb-7 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-xl">
                                                    <Bot className="w-8 h-8 text-white" />
                                                </div>
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-black shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Argo</h3>
                                                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                                                        </span>
                                                        <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase">Live</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-300 font-semibold mt-0.5">{t.staff.argoRole}</p>
                                            </div>
                                        </div>

                                        <span className="hidden sm:inline-block text-xs font-mono text-gray-300 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                                            AI Agent v1.0
                                        </span>
                                    </div>

                                    {/* Argo Description */}
                                    <div className="space-y-4 text-base sm:text-lg font-normal text-gray-200 leading-relaxed">
                                        <p>
                                            {isEn ? (
                                                <><strong>Argo</strong> is my virtual assistant integrated into the lab, trained on all my architectural decisions, technical protocols, and software methodologies.</>
                                            ) : (
                                                <><strong>Argo</strong> è il mio assistente virtuale integrato nel laboratorio, addestrato su tutte le mie decisioni architetturali, i protocolli tecnici e le metodologie di sviluppo che applico.</>
                                            )}
                                        </p>
                                        <p>
                                            {isEn ? (
                                                <>You can talk with him to assess the technical feasibility of your idea, get advice on the best stack for your requirements, estimate timelines, or explore case studies before reaching out directly to me.</>
                                            ) : (
                                                <>Puoi parlargli per verificare la fattibilità della tua idea, ricevere consigli sullo stack tecnologico ideale per le tue esigenze, stimare i tempi orientativi di rilascio o approfondire i casi studio prima di confrontarti direttamente con me.</>
                                            )}
                                        </p>
                                    </div>

                                    {/* Interactive Quick Prompts with Instant Launch */}
                                    <div className="mt-7 pt-6 border-t border-white/10">
                                        <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block mb-3 font-semibold">
                                            {t.staff.argoQuestionsTitle}
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                            {quickArgoQuestions.map((q, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleOpenWithPrompt(q.query)}
                                                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all text-left flex items-center justify-between group/prompt"
                                                >
                                                    <span className="text-xs sm:text-sm font-sans font-medium text-gray-200 group-hover/prompt:text-white">
                                                        {q.title}
                                                    </span>
                                                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover/prompt:text-white group-hover/prompt:translate-x-1 transition-all flex-shrink-0" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Primary CTA Button: Parla con Argo */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <button
                                        onClick={() => handleOpenWithPrompt('')}
                                        className="w-full py-4 px-6 rounded-2xl bg-white text-black hover:bg-gray-100 font-sans font-bold text-base sm:text-lg flex items-center justify-between transition-all duration-300 shadow-md group hover:scale-[1.01] active:scale-95"
                                    >
                                        <span className="flex items-center gap-3">
                                            <MessageSquare className="w-5 h-5 text-black" />
                                            <span>{t.staff.talkWithArgo}</span>
                                        </span>
                                        <span className="text-xs sm:text-sm font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            {t.staff.openConsole}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
