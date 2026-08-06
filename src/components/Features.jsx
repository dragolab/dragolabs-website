import { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, GitMerge, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Isolated Typewriter Component to prevent full parent re-renders on character ticks
function TypewriterSpan({ textArray, delayStart = 0 }) {
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
        const typeSpeed = 2000 / stringLength;   // Takes exactly 2s to write full string
        const deleteSpeed = 2000 / stringLength; // Takes exactly 2s to delete full string

        if (isDeleting) {
            if (text === '') {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % textArray.length);
                }, 200); // 200ms pause before next word
            } else {
                timeout = setTimeout(() => {
                    setText(currentString.substring(0, text.length - 1));
                }, deleteSpeed);
            }
        } else {
            if (text === currentString) {
                // Done writing, hold for 3 seconds
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 3000);
            } else {
                // Writing
                timeout = setTimeout(() => {
                    setText(currentString.substring(0, text.length + 1));
                }, typeSpeed);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, textArray, hasStarted, delayStart]);

    return <span className="truncate">{text}</span>;
}

export default function Features() {
    const containerRef = useRef(null);

    // Initializing arrays outside render cycle
    const techStack1 = useMemo(() => ["Università degli Studi di Bari \"Aldo Moro\"", "Pensiero critico e analisi", "Problem solving"], []);
    const techStack2 = useMemo(() => ["Sviluppo siti web e e-commerce", "Assistenza informatica", "Consulenza strategica"], []);

    // Animations (Entrance + RGB Grid)
    useEffect(() => {
        const ctx = gsap.context(() => {
            // General Entrance
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Card 3 Matrix - 3x3 Variable Speed Organic Recursive Flow
            const cells = gsap.utils.toArray('.grid-cell');

            cells.forEach((cell) => {
                let activeTween = null;
                let activeCall = null;

                const runCycle = () => {
                    activeTween = gsap.to(cell, {
                        backgroundColor: '#0073a0',
                        duration: gsap.utils.random(0.4, 3.5),
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: 1,
                        onComplete: () => {
                            activeCall = gsap.delayedCall(gsap.utils.random(0.1, 1.0), runCycle);
                        }
                    });
                };

                activeCall = gsap.delayedCall(gsap.utils.random(0, 3), runCycle);

                ctx.add(() => {
                    if (activeTween) activeTween.kill();
                    if (activeCall) activeCall.kill();
                    gsap.killTweensOf(cell);
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 container mx-auto">
            <style>
                {`
                    @keyframes periodicTwitch {
                        0%, 85%, 100% { transform: translate(0, 0); }
                        92% { transform: translate(3px, -3px); }
                        96% { transform: translate(1px, -1px); }
                    }
                    .animate-periodic-twitch {
                        animation: periodicTwitch 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    }
                `}
            </style>
            <div className="text-center mb-16">
                <h2 className="font-sans font-semibold text-4xl md:text-5xl text-balance">
                    Perchè sceglierci
                </h2>
                <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 w-[95%] max-w-[1600px] mx-auto">

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)] [transition:border-color_0.4s,box-shadow_0.4s] group relative overflow-hidden flex flex-col">

                    <Code className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Logica e Metodo</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        L'unione tra studi classici e informatica definisce la mia forma mentis: un approccio analitico che non si ferma alla superficie, ma cerca la soluzione più strutturata ed elegante per risolvere ogni sfida.
                    </p>

                    <div className="mt-auto pt-2 space-y-2 w-full overflow-hidden">
                        <div className="bg-black/50 rounded-lg px-2 py-3 font-mono text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm tracking-tight font-normal border border-white/5 min-h-[48px] flex items-center overflow-hidden">
                            <span className="text-drago-accent mr-1 shrink-0">&gt;</span>
                            <TypewriterSpan textArray={techStack1} delayStart={0} />
                            <span className="w-[2px] h-[1.2em] bg-white inline-block ml-1 shrink-0 animate-pulse" />
                        </div>
                        <Link to="/chi-sono" className="group/btn w-full flex items-center justify-between p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-drago-accent group-hover/btn:text-white transition-colors">Chi sono</span>
                            <div className="w-6 h-6 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-drago-accent transition-colors">
                                <ArrowUpRight className="w-3 h-3 text-drago-accent group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)] [transition:border-color_0.4s,box-shadow_0.4s] group relative overflow-hidden flex flex-col">

                    <Layout className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Soluzioni Su Misura</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        Non esistono pacchetti predefiniti o soluzioni generiche. Ogni progetto nasce da un'analisi delle esigenze del cliente, per realizzare un prodotto digitale unico e altamente performante.
                    </p>

                    <div className="mt-auto pt-2 space-y-2 w-full overflow-hidden">
                        <div className="bg-black/50 rounded-lg px-2 py-3 font-mono text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm tracking-tight font-normal border border-white/5 min-h-[48px] flex items-center overflow-hidden">
                            <span className="text-drago-accent mr-1 shrink-0">&gt;</span>
                            <TypewriterSpan textArray={techStack2} delayStart={500} />
                            <span className="w-[2px] h-[1.2em] bg-white inline-block ml-1 shrink-0 animate-pulse" />
                        </div>
                        <Link to="/servizi" className="group/btn w-full flex items-center justify-between p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-drago-accent group-hover/btn:text-white transition-colors">Servizi offerti</span>
                            <div className="w-6 h-6 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-drago-accent transition-colors">
                                <ArrowUpRight className="w-3 h-3 text-drago-accent group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)] [transition:border-color_0.4s,box-shadow_0.4s] group relative overflow-hidden flex flex-col md:col-span-2 lg:col-span-1">

                    <GitMerge className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Visione ed Evoluzione</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        Drago Labs è un laboratorio in continua crescita. Esploro costantemente nuove tecnologie, strumenti e metodologie per offrire soluzioni sempre aggiornate e all'avanguardia.
                    </p>

                    <div className="mt-auto pt-2 space-y-2 w-full overflow-hidden">
                        <div className="bg-black/50 rounded-lg p-2 border border-white/5 min-h-[48px] flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-1.5 w-full max-w-[120px] aspect-square p-1">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="grid-cell rounded-sm bg-white/5 border border-white/10 w-full h-full transition-colors duration-300"
                                    />
                                ))}
                            </div>
                        </div>
                        <Link to="/portfolio" className="group/btn w-full flex items-center justify-between p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-drago-accent group-hover/btn:text-white transition-colors">Vedi i lavori</span>
                            <div className="w-6 h-6 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-drago-accent transition-colors">
                                <ArrowUpRight className="w-3 h-3 text-drago-accent group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
