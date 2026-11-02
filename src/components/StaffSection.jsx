import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github, Instagram, Mail, GraduationCap, Code2 } from 'lucide-react';
import ArgoConsole from './ArgoConsole';

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

const skills = ['React 19', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite', 'Python', 'C', 'Java', 'Git'];

export default function StaffSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.staff-reveal',
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
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
        <section id="chi-sono" ref={sectionRef} className="relative py-24 md:py-36 border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">
                {/* Section Header */}
                <header className="staff-reveal mx-auto mb-16 max-w-4xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3 font-semibold">
                        Il Team & L'Intelligenza Virtuale
                    </span>
                    <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight text-balance">
                        Chi c'è dietro Drago Labs
                    </h2>
                    <p className="mt-4 text-lg sm:text-2xl font-normal text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        Competenze umane ed intelligenza artificiale: una sinergia pensata per costruire prodotti digitali ad alte prestazioni.
                    </p>
                </header>

                {/* 2-Column Grid: Gianluca & Argo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Column 1: Gianluca Dragone (5 cols on lg) */}
                    <div className="staff-reveal lg:col-span-5 rounded-[2.2rem] border border-white/15 bg-drago-text/40 shadow-2xl backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between">
                        <div>
                            {/* Profile Header */}
                            <div className="flex items-center gap-5 mb-7">
                                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/10 border border-white/25 p-1 flex items-center justify-center flex-shrink-0 shadow-xl">
                                    <img
                                        src="/img/optimized/logo-dragolabs-256.webp"
                                        alt="Gianluca Dragone - Drago Labs"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Gianluca Dragone</h3>
                                    <p className="text-base text-drago-cyan font-semibold mt-0.5">Founder & Software Developer</p>
                                    <span className="text-xs sm:text-sm text-gray-300 font-mono mt-1 block">Fasano (BR), Puglia · Remoto</span>
                                </div>
                            </div>

                            {/* Bio — Legible, generous font sizes */}
                            <div className="space-y-4 text-base sm:text-lg font-normal text-gray-100 leading-relaxed">
                                <p>
                                    Ho fondato <strong>Drago Labs</strong> per trasformare la complessità tecnologica in soluzioni digitali concrete, veloci e affidabili per professionisti e imprese.
                                </p>
                                <p>
                                    Con una solida base negli <strong>studi classici</strong> che mi ha insegnato il pensiero analitico e la strutturazione logica, studio <em>Informatica e Tecnologie per la Produzione del Software</em> presso l'Università degli Studi di Bari "Aldo Moro".
                                </p>
                                <p>
                                    Il mio approccio è guidato da una regola semplice: <em>zero fuffa, codice pulito e architetture scalabili</em> progettate intorno alle reali necessità del cliente.
                                </p>
                            </div>

                            {/* Background Highlights */}
                            <div className="mt-7 pt-6 border-t border-white/10 space-y-3.5">
                                <div className="flex items-start gap-3.5 text-sm sm:text-base text-gray-200">
                                    <GraduationCap className="w-5 h-5 text-drago-cyan flex-shrink-0 mt-0.5" />
                                    <span>UniBa · Informatica e Tecnologie per la Produzione del Software</span>
                                </div>
                                <div className="flex items-start gap-3.5 text-sm sm:text-base text-gray-200">
                                    <Code2 className="w-5 h-5 text-drago-cyan flex-shrink-0 mt-0.5" />
                                    <span>Specializzazione in sviluppo Frontend moderno, Web App & Architetture Serverless</span>
                                </div>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="mt-7 pt-6 border-t border-white/10">
                                <span className="text-xs font-mono uppercase text-gray-300 tracking-wider block mb-3 font-semibold">Competenze Chiave</span>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s) => (
                                        <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-gray-200 font-medium">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social Links Bar */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                            <span className="text-sm text-gray-300 font-mono font-medium">Canali diretti</span>
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

                    {/* Column 2: Argo AI Agent (7 cols on lg) */}
                    <div className="staff-reveal lg:col-span-7 flex flex-col">
                        <ArgoConsole />
                    </div>

                </div>
            </div>
        </section>
    );
}
