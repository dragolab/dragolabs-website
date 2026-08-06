import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Casa Vacanze Vistamare",
        type: "Sito Web",
        description: "Sito di presentazione per una casa vacanze affacciata sul mare, con sistema di prenotazione integrato e galleria multimediale.",
        image: "/img/casavacanze-vistamare.png",
        link: ""
    },
    {
        title: "A Un Passo Dal Faro",
        type: "Sito Web",
        description: "Portale turistico per un affitto vacanze con prenotazione online, calendario disponibilità e contenuti multilingua.",
        image: "/img/aunpasso-dalfaro.png",
        link: ""
    }
];

export default function Protocol() {
    const containerRef = useRef(null);
    const [pulsing, setPulsing] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setPulsing(true);
            setTimeout(() => setPulsing(false), 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.card-wrapper');

            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.90,
                        filter: 'blur(14px)',
                        opacity: 0.35,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top 80%",
                            end: "top 10%",
                            scrub: true,
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="portfolio" ref={containerRef} className="relative bg-drago-bg pb-24 md:pb-32">
            {/* Section Title */}
            <div className="text-center pt-24 mb-16 w-full z-10 pointer-events-none">
                <h2 className="font-sans font-semibold text-4xl md:text-5xl text-balance text-drago-contrast">
                    Portfolio in evidenza
                </h2>
                <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
            </div>

            <div className="flex flex-col relative w-full">

                {/* ─── PROJECT CARDS ─── */}
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="card-wrapper sticky top-16 md:top-20 w-full min-h-[80vh] flex items-center justify-center"
                        style={{ zIndex: i }}
                    >
                        <div className="card-inner relative w-[95%] max-w-[1320px] rounded-[1.75rem] border border-white/10 hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)] bg-drago-text/60 backdrop-blur-xl shadow-2xl overflow-hidden [transition:border-color_0.4s,box-shadow_0.4s] group">

                            {/* ── DESKTOP: image left / info right ── */}
                            <div className="hidden md:flex flex-row h-[70vh] max-h-[660px]">
                                {/* Image panel */}
                                <div className="w-[70%] flex-shrink-0 p-4">
                                    <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${i === 1 ? 'object-[center_10%]' : ''}`}
                                        />
                                    </div>
                                </div>

                                {/* Info panel */}
                                <div className="flex-1 flex flex-col justify-center px-10 py-8">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-drago-accent/50 text-drago-accent bg-drago-accent/10 w-fit mb-5">
                                        {project.type}
                                    </span>
                                    <h3 className="font-sans font-bold text-3xl xl:text-4xl text-white leading-tight mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans font-light text-base text-gray-300 leading-relaxed mb-8 max-w-sm">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link || '#'}
                                        className="group inline-flex items-center justify-between w-full max-w-xs p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300"
                                    >
                                        <span className="font-sans text-base font-semibold text-drago-accent group-hover:text-white transition-colors">Visita il progetto</span>
                                        <div className="w-6 h-6 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover:bg-white transition-colors">
                                            <svg className="w-3 h-3 text-drago-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* ── MOBILE: image top / info bottom ── */}
                            <div className="flex md:hidden flex-col">
                                {/* Image — aspect 16/10 for taller look on mobile */}
                                <div className="p-3 pb-0">
                                    <div className="w-full rounded-[1.25rem] overflow-hidden" style={{ aspectRatio: '16/10' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-cover ${i === 1 ? 'object-[center_10%]' : ''}`}
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="px-5 py-5">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-drago-accent/50 text-drago-accent bg-drago-accent/10 w-fit mb-3">
                                        {project.type}
                                    </span>
                                    <h3 className="font-sans font-bold text-xl text-white leading-tight mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans font-light text-sm text-gray-300 leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link || '#'}
                                        className="group inline-flex items-center justify-between w-full p-3 rounded-xl border border-drago-accent hover:bg-drago-accent transition-all duration-300"
                                    >
                                        <span className="font-sans text-sm font-semibold text-drago-accent group-hover:text-white transition-colors">Visita il progetto</span>
                                        <div className="w-5 h-5 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover:bg-white transition-colors">
                                            <svg className="w-3 h-3 text-drago-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                {/* ─── CTA CARD (third) ─── */}
                <div
                    className="card-wrapper sticky top-16 md:top-20 w-full min-h-[80vh] flex items-center justify-center"
                    style={{ zIndex: projects.length }}
                >
                    <style>{`
                        @keyframes cardGlowBreath {
                            0%   { box-shadow: 0 0 30px 6px rgba(0,115,160,0.35), 0 0 0 0 transparent; }
                            50%  { box-shadow: 0 0 70px 28px rgba(0,115,160,0.12), 0 0 0 0 transparent; }
                            100% { box-shadow: 0 0 30px 6px rgba(0,115,160,0.35), 0 0 0 0 transparent; }
                        }
                    `}</style>
                    <div className="card-inner relative w-[90%] md:w-[70%] lg:w-[55%] max-w-4xl rounded-[2rem] border border-drago-accent/40 bg-white/5 backdrop-blur-xl overflow-hidden"
                        style={{ animation: 'cardGlowBreath 3s ease-in-out infinite' }}
                    >
                        <div className="flex flex-col items-center justify-center px-8 sm:px-12 py-10 sm:py-14 text-center">
                            <h3
                                className="font-sans font-bold leading-tight text-balance text-white mb-4"
                                style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)' }}
                            >
                                Inizia il tuo progetto con{' '}
                                <span className="text-drago-accent">Drago Labs</span>
                            </h3>

                            <p
                                className="font-sans font-light text-gray-300 max-w-xl mx-auto leading-relaxed text-balance mb-8"
                                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.125rem)' }}
                            >
                                Non limitarti a un sito web, investi in una{' '}
                                <span className="text-drago-accent font-medium">soluzione digitale</span>{' '}
                                per rivoluzionare la tua presenza online.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none">
                                <Link
                                    to="/contatti"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 shadow-[0_0_20px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Prenota una consulenza
                                        <span style={{
                                            display: 'inline-flex',
                                            transform: pulsing ? 'translateX(5px)' : 'translateX(0)',
                                            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        }}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </span>
                                </Link>

                                <a
                                    href="/portfolio"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Portfolio completo
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
