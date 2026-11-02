import { useEffect, useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, GitMerge, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom Typewriter Hook for robust timing
const useTypewriter = (textArray, delayStart = 0) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hasStarted, setHasStarted] = useState(delayStart === 0);

    useEffect(() => {
        let timeout;
        if (!hasStarted) {
            timeout = setTimeout(() => setHasStarted(true), delayStart);
            return () => clearTimeout(timeout);
        }

        const currentString = textArray[index];
        const stringLength = currentString.length || 1;
        const typeSpeed = 2000 / stringLength;
        const deleteSpeed = 2000 / stringLength;

        if (isDeleting) {
            if (text === '') {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % textArray.length);
                }, 200);
            } else {
                timeout = setTimeout(() => {
                    setText(currentString.substring(0, text.length - 1));
                }, deleteSpeed);
            }
        } else {
            if (text === currentString) {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 3000);
            } else {
                timeout = setTimeout(() => {
                    setText(currentString.substring(0, text.length + 1));
                }, typeSpeed);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, textArray, hasStarted, delayStart]);

    return text;
};

export default function Features() {
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    const techStack1 = useMemo(() => ["Università degli Studi di Bari \"Aldo Moro\"", "Pensiero critico e logica classica", "Problem solving analitico"], []);
    const techStack2 = useMemo(() => ["Sviluppo web e e-commerce su misura", "Applicativi performanti e veloci", "Workflow e automazioni AI"], []);

    const typewriterText1 = useTypewriter(techStack1, 0);
    const typewriterText2 = useTypewriter(techStack2, 500);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out'
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const element = gridRef.current;
        if (!element) return undefined;
        const observer = new IntersectionObserver(([entry]) => {
            element.classList.toggle('is-in-viewport', entry.isIntersecting);
        }, { threshold: 0.1 });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-36 relative border-t border-white/10 overflow-hidden">
            <style>
                {`
                    @keyframes periodicTwitch {
                        0%, 90%, 100% {
                            transform: translate(0, 0);
                        }
                        92% {
                            transform: translate(2px, -2px);
                        }
                        94% {
                            transform: translate(-1px, 1px);
                        }
                        96% {
                            transform: translate(1px, -1px);
                        }
                    }
                    .animate-periodic-twitch {
                        animation: periodicTwitch 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    }
                `}
            </style>
            
            <div className="text-center mb-16 md:mb-20 px-4">
                <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3 font-semibold">
                    I Pilastri del Laboratorio
                </span>
                <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white text-balance tracking-tight">
                    Perché scegliere Drago Labs
                </h2>
                <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 w-full max-w-[1520px] px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">

                <div className="feature-card glass rounded-[2rem] p-7 xl:p-9 hover:border-drago-accent hover:shadow-[0_0_30px_rgba(0,115,160,0.25)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <Code className="w-10 h-10 text-drago-cyan mb-4" />
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3 text-white">Logica e Metodo</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            L'unione tra studi classici e informatica definisce la mia forma mentis: un approccio analitico che non si ferma alla superficie, ma cerca la soluzione più strutturata ed elegante per risolvere ogni sfida.
                        </p>
                    </div>

                    <div className="mt-auto pt-4 space-y-3 w-full">
                        <div className="bg-black/60 rounded-xl px-3.5 py-3 font-mono text-xs sm:text-sm text-gray-200 tracking-tight font-medium border border-white/10 min-h-[50px] flex items-center overflow-hidden">
                            <span className="text-drago-cyan mr-1.5 shrink-0">&gt;</span>
                            <span className="truncate">{typewriterText1}</span>
                            <span className="w-[2px] h-[1.2em] bg-white inline-block ml-1 shrink-0 animate-pulse" />
                        </div>
                        <a href="#chi-sono" className="group/btn w-full flex items-center justify-between p-3.5 rounded-xl border border-drago-accent/50 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-white transition-colors">Scopri chi sono</span>
                            <div className="w-7 h-7 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="feature-card glass rounded-[2rem] p-7 xl:p-9 hover:border-drago-accent hover:shadow-[0_0_30px_rgba(0,115,160,0.25)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <Layout className="w-10 h-10 text-drago-cyan mb-4" />
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3 text-white">Servizi Digitali</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            Drago Labs trasforma le tue necessità in realtà. Dalla creazione di siti web moderni all'assistenza tecnica dedicata, offriamo soluzioni informatiche progettate per semplificare la gestione della tua attività.
                        </p>
                    </div>

                    <div className="mt-auto pt-4 space-y-3 w-full">
                        <div className="bg-black/60 rounded-xl px-3.5 py-3 font-mono text-xs sm:text-sm text-gray-200 tracking-tight font-medium border border-white/10 min-h-[50px] flex items-center overflow-hidden">
                            <span className="text-drago-cyan mr-1.5 shrink-0">&gt;</span>
                            <span className="truncate">{typewriterText2}</span>
                            <span className="w-[2px] h-[1.2em] bg-white inline-block ml-1 shrink-0 animate-pulse" />
                        </div>
                        <a href="#servizi" className="group/btn w-full flex items-center justify-between p-3.5 rounded-xl border border-drago-accent/50 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-white transition-colors">I nostri servizi</span>
                            <div className="w-7 h-7 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="feature-card glass rounded-[2rem] p-7 xl:p-9 hover:border-drago-accent hover:shadow-[0_0_30px_rgba(0,115,160,0.25)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <GitMerge className="w-10 h-10 text-drago-cyan mb-4" />
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3 text-white">Soluzioni Innovative</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            Ogni progetto nasce da un flusso di idee che prende forma: non sono semplici pagine web, ma strumenti capaci di comunicare l'identità del tuo business e farlo crescere online.
                        </p>
                    </div>

                    <div className="mt-auto pt-4 space-y-3 w-full">
                        <div className="bg-black/30 rounded-xl p-2.5 min-h-[50px] flex items-center justify-center w-full border border-white/5">
                            <div ref={gridRef} className="matrix-grid grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5 w-[90%] md:w-full">
                                {[...Array(39)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="matrix-cell aspect-square rounded-[2px] bg-white/5 relative border border-white/5 overflow-hidden"
                                    >
                                        <div
                                            className="matrix-cell__fill"
                                            style={{
                                                '--matrix-delay': `${(i * 0.08) % 2.5}s`,
                                                '--matrix-duration': `${1.5 + (i % 5) * 0.3}s`
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href="#progetti" className="group/btn w-full flex items-center justify-between p-3.5 rounded-xl border border-drago-accent/50 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-white transition-colors">Vedi i progetti</span>
                            <div className="w-7 h-7 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
