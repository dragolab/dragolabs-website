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
                // Scale + blur the current card as the next one scrolls over it
                if (index < cards.length - 1) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.90,
                        filter: 'blur(14px)',
                        opacity: 0.35,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top center",
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
            {/* Section Title — spacing matches "Perchè sceglierci" */}
            <div className="text-center pt-24 mb-16 w-full z-10 pointer-events-none">
                <h2 className="font-sans font-semibold text-4xl md:text-5xl text-balance text-drago-contrast">
                    Portfolio in evidenza
                </h2>
                <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
            </div>

            <div className="flex flex-col relative w-full">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="card-wrapper sticky top-16 md:top-20 w-full min-h-screen flex items-center justify-center"
                        style={{ zIndex: i }}
                    >
                        {/* Card inner — viewport-aware height, never overflows */}
                        <div
                            className={`card-inner relative rounded-[1.5rem] overflow-hidden shadow-2xl border backdrop-blur-xl
                                w-[95%] max-w-[1200px] h-[75vh] md:h-[75vh]
                                ${!project.image
                                    ? 'border-drago-accent/40 bg-white/5 shadow-[0_0_100px_rgba(0,115,160,0.4)]'
                                    : 'border-white/10 bg-black/60 shadow-black/50'
                                }`}
                        >
                            {project.image ? (
                                /* Image cards: image top 40% mobile / full cover desktop with text overlay */
                                <>
                                    {/* Mobile: stacked layout */}
                                    <div className="md:hidden flex flex-col h-full">
                                        <div className="relative h-[40%] flex-shrink-0 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${i === 1 ? 'object-[center_10%]' : ''}`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center px-6 py-4 bg-black/80">
                                            <h3 className="font-sans font-bold leading-tight text-2xl text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Desktop: full cover with gradient overlay + text bottom-left */}
                                    <div className="hidden md:block absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${i === 1 ? 'object-[center_10%]' : ''}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" />
                                        <div className="absolute inset-0 p-12 flex flex-col justify-end text-left">
                                            <h3 className="font-sans font-bold leading-tight text-4xl md:text-5xl text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                /* CTA card: centered content */
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-8 text-center">
                                    <h3 className="font-sans font-bold text-2xl md:text-4xl lg:text-[3rem] leading-tight text-balance text-white mb-4">
                                        Inizia il tuo progetto con{' '}
                                        <span className="text-drago-accent">Drago Labs</span>
                                    </h3>

                                    <p className="font-sans font-light text-sm md:text-base lg:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed text-balance mb-8">
                                        Non limitarti a un sito web, investi in un'architettura digitale d'eccellenza. Parliamo della tua visione e trasformiamola in un progetto high-end per rivoluzionare la tua presenza online.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none">
                                        <a
                                            href="mailto:info.dragolabs@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 shadow-[0_0_20px_rgba(0,115,160,0.5)] w-full sm:w-auto"
                                        >
                                            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                                                Prenota una consulenza
                                                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </a>

                                        <a
                                            href="/portfolio"
                                            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 bg-white/10 rounded-full hover:bg-white/20 hover:scale-105 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] w-full sm:w-auto"
                                        >
                                            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                                                Portfolio completo
                                                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
