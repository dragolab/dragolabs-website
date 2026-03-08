import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Casa Vacanze Vistamare",
        image: "/img/casavacanze-vistamare.png"
    },
    {
        title: "A Un Passo Dal Faro",
        image: "/img/aunpasso-dalfaro.png"
    },
    {
        title: "Inizia il tuo progetto Labs.",
        subtitle: "Consulenza strategica e sviluppo high-end. Richiedi una sessione esplorativa per valutare la digitalizzazione sartoriale della tua impresa.",
        image: ""
    }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.card-wrapper');

            cards.forEach((card, index) => {
                // Animate down-scaling and blurring when the next card scrolls over
                if (index < cards.length - 1) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.92,
                        filter: 'blur(12px)',
                        opacity: 0.4,
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
            <div className="text-center pt-24 mb-16 w-full relative z-20 pointer-events-none">
                <h2 className="font-sans font-semibold text-4xl md:text-5xl text-balance text-drago-contrast">
                    Portfolio in evidenza
                </h2>
                <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
            </div>

            <div className="flex flex-col relative w-full">
                {projects.map((project, i) => (
                    <div key={i} className={`card-wrapper sticky top-6 md:top-12 lg:top-16 w-full flex justify-center pb-12 lg:pb-24`} style={{ zIndex: i }}>
                        {/* Removed CSS transition-all to allow raw GSAP frame scrub rendering without lagging */}
                        <div className={`card-inner relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group backdrop-blur-xl aspect-[4/5] md:aspect-video ${!project.image ? 'w-[90%] md:w-[60%] max-w-4xl shadow-[0_0_100px_rgba(0,115,160,0.5)] border-drago-accent/40 bg-white/5' : 'w-[95%] md:w-[90%] max-w-6xl bg-black/50 shadow-black/50'}`}>

                            {project.image ? (
                                <>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-center md:text-left">
                                        <h3 className="font-sans font-bold leading-tight text-3xl md:text-5xl text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-center bg-transparent">
                                    {/* Title — same font as Hero h1 */}
                                    <h3 className="font-sans font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-tight text-balance text-white mb-4">
                                        Inizia il tuo progetto con{' '}
                                        <span className="text-drago-accent">Drago Labs</span>
                                    </h3>

                                    {/* Description — same font as Hero h2/p */}
                                    <p className="font-sans font-light text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance mb-8">
                                        Non limitarti a un sito web, investi in un'architettura digitale d'eccellenza. Parliamo della tua visione e trasformiamola in un progetto high-end per rivoluzionare la tua presenza online.
                                    </p>

                                    {/* CTA Buttons — identical style to Hero */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        {/* Primary — full blue with right arrow */}
                                        <a href="mailto:info.dragolabs@gmail.com" target="_blank" rel="noopener noreferrer"
                                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 shadow-[0_0_20px_rgba(0,115,160,0.5)] w-full sm:w-auto">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Prenota una consulenza
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </a>

                                        {/* Secondary — grey/glass */}
                                        <a href="/portfolio"
                                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Portfolio completo
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
