import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Github, MapPin, BookOpen, Globe, GraduationCap, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ── */
const timeline = [
    {
        year: '2019 – 2024',
        title: 'Studi Classici',
        note: 'Diploma di Maturità Classica. Approccio analitico e pensiero strutturato come fondamenta.',
        Icon: BookOpen,
    },
    {
        year: '2022 – 2025',
        title: 'Sviluppo Web',
        note: 'Realizzazione di siti vetrina per piccole imprese locali, dalla progettazione al deploy.',
        Icon: Globe,
    },
    {
        year: '2024 – oggi',
        title: 'Studi Universitari',
        note: 'Laurea Triennale in Informatica e Tecnologie per la Produzione del Software — Univ. degli Studi di Bari "Aldo Moro".',
        Icon: GraduationCap,
    },
    {
        year: '2026',
        title: 'Drago Labs',
        note: 'La sintesi del percorso: un laboratorio digitale dove competenze classiche e informatiche si fondono.',
        Icon: Zap,
    },
];

const hardSkills = ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'React', 'GSAP', 'Vite', 'Git'];
const softSkills = ['Problem Solving', 'Problem Analysis', 'Teamwork', 'Pensiero Critico', 'Adattabilità', 'Organizzazione'];

const socials = [
    { href: 'https://wa.me/393939450653', label: 'WhatsApp', icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.998l6.304-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.214-3.733.979 1-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.818 4.396 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818z"/>
        </svg>
    )},
    { href: 'https://instagram.com/drago.labs', label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { href: 'https://linkedin.com/in/gianluca-dragone', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
    { href: 'https://github.com/dragolab', label: 'GitHub', icon: <Github className="w-5 h-5" /> },
];

export default function About() {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {

            /* ── Contact-style entrance: all .about-reveal together, fired on section enter ── */
            gsap.fromTo('.about-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    }
                }
            );

            /* ── Timeline cards stagger ── */
            const tlCards = gsap.utils.toArray('.timeline-card');
            gsap.fromTo(tlCards,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.13,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 80%',
                    }
                }
            );

            /* ── Staggered skill cards ── */
            gsap.utils.toArray('.skill-group').forEach((group) => {
                const cards = group.querySelectorAll('.skill-card');
                gsap.fromTo(cards,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.07,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: group,
                            start: 'top 85%',
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-56 pb-24 px-6 overflow-x-hidden">

            {/* ── Background ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-20">

                {/* ══════════════════════════ 1 – HERO ══════════════════════════ */}
                <div className="about-reveal opacity-0 text-center">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl text-drago-contrast mb-5">
                        Chi Sono
                    </h1>
                    <p className="font-sans font-light text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Studente e sviluppatore indipendente appassionato di tecnologia
                    </p>
                    <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </div>

                {/* ══════════════════════════ 2 – BLUEPRINT CARD + VISIONE ══════════════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">

                    {/* Blueprint card — same glass colour as Contact */}
                    <div className="about-reveal opacity-0 glass rounded-2xl p-8 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]">
                        {/* Avatar + Name */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-drago-accent/10 border border-drago-accent/40 flex-shrink-0">
                                <img src="/img/logo-dragolabs-hd-crop.png" alt="Gianluca Dragone" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h2 className="font-sans font-bold text-xl text-white">Gianluca Dragone</h2>
                                <p className="font-sans text-sm text-drago-accent">IT Student &amp; Web Developer</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                            <MapPin className="w-4 h-4 text-drago-accent flex-shrink-0" />
                            <span>Fasano (BR), Italia</span>
                        </div>

                        <div className="h-[1px] bg-white/10 mb-6" />

                        {/* Quick stats — first */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                { value: '3+', label: 'Anni di esperienza' },
                                { value: '10+', label: 'Tecnologie' },
                                { value: '5+', label: 'Progetti realizzati' },
                                { value: 'H24', label: 'Disponibilità' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center py-3 rounded-xl bg-white/5 border border-white/10">
                                    <p className="font-serif italic text-2xl text-drago-accent">{stat.value}</p>
                                    <p className="font-sans text-xs text-gray-400 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="h-[1px] bg-white/10 mb-6" />

                        {/* Social icons — after stats */}
                        <div className="flex gap-3 flex-wrap">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-drago-accent hover:border-drago-accent hover:bg-drago-accent/10 transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visione */}
                    <div className="about-reveal opacity-0 flex flex-col gap-6">
                        <div className="glass rounded-2xl p-8 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]">
                            <h3 className="font-sans font-bold text-xl text-white mb-5 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent text-xs font-bold">✦</span>
                                La mia visione
                            </h3>
                            <p className="font-sans font-light text-gray-300 leading-relaxed text-base md:text-lg">
                                Il mio percorso nasce dall'unione di due mondi: lo studio analitico del liceo classico e la creatività dell'Informatica. In Drago Labs applico questo{' '}
                                <em className="font-serif text-drago-accent" style={{ fontStyle: 'italic' }}>modus operandi</em>{' '}
                                aiutando piccole e medie business a crescere online attraverso lo sviluppo di soluzioni digitali su misura.
                            </p>
                            <p className="font-sans font-light text-gray-300 leading-relaxed text-base md:text-lg mt-4">
                                Il mio obiettivo è quello di raggiungere il risultato migliore che sposi il gusto e la filosofia del cliente con le ultime tecnologie, pertanto credo che il contatto diretto con quest'ultimo sia fondamentale: sono sempre a disposizione e offro anche{' '}
                                <span className="text-drago-accent font-medium">la prima consulenza gratuitamente e senza impegno.</span>
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            to="/contatti"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-sans font-bold text-white bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,115,160,0.4)] w-full text-center"
                        >
                            Richiedi la tua consulenza gratuita
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* ══════════════════════════ 3 – TIMELINE ══════════════════════════ */}
                <div ref={timelineRef}>
                    <h2 className="about-reveal opacity-0 font-sans font-semibold text-4xl md:text-5xl text-drago-contrast mb-4 text-center">
                        Il mio percorso
                    </h2>
                    <div className="about-reveal opacity-0 w-24 h-[1px] bg-drago-accent mx-auto mb-16" />

                    {/* Timeline wrapper: dots + line sit ABOVE cards */}
                    <div className="relative">

                        {/* Horizontal timeline line — desktop only, sits 10px above card tops */}
                        <div className="hidden md:block absolute top-[10px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-drago-accent/60 to-transparent z-0" />

                        {/* Dots row — desktop: above the line; hidden on mobile */}
                        <div className="hidden md:grid grid-cols-4 mb-8 relative z-10">
                            {timeline.map((_, i) => (
                                <div key={i} className="flex justify-center">
                                    <div className="w-5 h-5 rounded-full bg-drago-bg border-2 border-drago-accent flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-drago-accent" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative z-10">
                            {timeline.map((item, i) => {
                                const Icon = item.Icon;
                                return (
                                    <div
                                        key={i}
                                        className="timeline-card opacity-0 glass rounded-2xl p-5 flex flex-col gap-3 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]"
                                    >
                                        {/* Icon + year row */}
                                        <div className="flex items-center gap-2">
                                            <Icon className="w-5 h-5 text-drago-accent flex-shrink-0" />
                                            <span className="font-sans text-xs font-bold text-drago-accent tracking-widest uppercase">{item.year}</span>
                                        </div>
                                        <h4 className="font-sans font-bold text-base md:text-lg text-white">{item.title}</h4>
                                        <p className="font-sans font-light text-sm md:text-base text-gray-400 leading-relaxed">{item.note}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════ 4 – SKILLS ══════════════════════════ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Hard Skills */}
                    <div className="skill-group">
                        <h3 className="about-reveal opacity-0 font-sans font-bold text-xl text-white mb-5 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-drago-accent inline-block" />
                            Hard Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {hardSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className="skill-card opacity-0 px-5 py-2.5 rounded-full glass border border-drago-accent/30 text-sm md:text-base font-sans font-medium text-drago-accent [transition:border-color_0.3s,box-shadow_0.3s] hover:border-drago-accent hover:shadow-[0_0_12px_rgba(0,115,160,0.3)] cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="skill-group">
                        <h3 className="about-reveal opacity-0 font-sans font-bold text-xl text-white mb-5 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-drago-accent inline-block" />
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className="skill-card opacity-0 px-5 py-2.5 rounded-full glass border border-white/15 text-sm md:text-base font-sans font-medium text-gray-300 [transition:border-color_0.3s,box-shadow_0.3s] hover:border-drago-accent hover:text-drago-accent hover:shadow-[0_0_12px_rgba(0,115,160,0.2)] cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
