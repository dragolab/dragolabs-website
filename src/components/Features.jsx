import { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
        const typeSpeed = 2000 / stringLength;   // Takes exactly 2s to write full string
        const deleteSpeed = 2000 / stringLength; // Takes exactly 2s to delete full string

        if (isDeleting) {
            if (text === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % textArray.length);
                timeout = setTimeout(() => { }, 200); // 200ms pause before next word
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

    return text;
};

export default function Features() {
    const containerRef = useRef(null);
    const gridRef = useRef(null);

    // Initializing arrays outside render cycle
    const techStack1 = useMemo(() => ["Università degli Studi di Bari \"Aldo Moro\"", "Pensiero critico e analisi", "Problem solving"], []);
    const techStack2 = useMemo(() => ["Sviluppo siti web e e-commerce", "Assistenza informatica", "Consulenza strategica"], []);

    const typewriterText1 = useTypewriter(techStack1, 0);
    const typewriterText2 = useTypewriter(techStack2, 500); // 500ms offset start

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
                // Recursive function to continuously change variables
                const runCycle = () => {
                    gsap.to(cell, {
                        backgroundColor: '#0073a0',
                        duration: gsap.utils.random(0.4, 3.5),   // Dynamic unpredictable tempo: Fast to very slow
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: 1, // On and Off
                        onComplete: () => {
                            // After it turns off, wait a random time then run again with new speeds
                            gsap.delayedCall(gsap.utils.random(0.1, 1.0), runCycle);
                        }
                    });
                };

                // Initial kick-off staggered
                gsap.delayedCall(gsap.utils.random(0, 3), runCycle);
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

            {/* Changed max-w to 1600px and 95% to allow wide text on single line, increased gaps drastically */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 w-[95%] max-w-[1600px] mx-auto">

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent transition-colors duration-500 group relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-drago-accent/0 via-drago-accent to-drago-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Code className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Logica e Metodo</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        L'unione tra studi classici e informatica definisce la mia forma mentis: un approccio analitico che non si ferma alla superficie, ma cerca la soluzione più strutturata ed elegante per risolvere ogni sfida.
                    </p>

                    {/* Compacted spacing above the dynamic element */}
                    <div className="mt-auto pt-2 space-y-2 w-full overflow-hidden">
                        <div className="bg-black/50 rounded-lg px-2 py-3 font-mono text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm tracking-tight font-normal border border-white/5 min-h-[48px] flex items-center overflow-hidden">
                            <span className="text-drago-accent mr-1 shrink-0">&gt;</span>
                            <span className="truncate">{typewriterText1}</span>
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

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent transition-colors duration-500 group relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-drago-accent/0 via-drago-accent to-drago-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Layout className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Servizi Digitali</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        Drago Labs trasforma le tue necessità in realtà. Dalla creazione di siti web moderni all'assistenza tecnica dedicata, offriamo soluzioni informatiche progettate per semplificare la gestione della tua attività.
                    </p>

                    {/* Compacted spacing above the dynamic element */}
                    <div className="mt-auto pt-2 space-y-2 w-full overflow-hidden">
                        <div className="bg-black/50 rounded-lg px-2 py-3 font-mono text-[10px] sm:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm tracking-tight font-normal border border-white/5 min-h-[48px] flex items-center overflow-hidden">
                            <span className="text-drago-accent mr-1 shrink-0">&gt;</span>
                            <span className="truncate">{typewriterText2}</span>
                            <span className="w-[2px] h-[1.2em] bg-white inline-block ml-1 shrink-0 animate-pulse" />
                        </div>
                        <Link to="/servizi" className="group/btn w-full flex items-center justify-between p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-drago-accent group-hover/btn:text-white transition-colors">Più servizi</span>
                            <div className="w-6 h-6 rounded-full bg-drago-accent/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-drago-accent transition-colors">
                                <ArrowUpRight className="w-3 h-3 text-drago-accent group-hover/btn:text-drago-accent animate-periodic-twitch" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="feature-card glass rounded-[1.5rem] p-5 xl:p-6 hover:border-drago-accent transition-colors duration-500 group relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-drago-accent/0 via-drago-accent to-drago-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <GitMerge className="w-8 h-8 text-drago-accent mb-3" />
                    <h3 className="font-sans font-bold text-xl lg:text-2xl mb-2">Soluzioni Innovative</h3>
                    <p className="text-gray-300 font-light text-base lg:text-lg mb-2 xl:mb-3 leading-relaxed text-balance">
                        Ogni progetto nasce da un flusso di idee che prende forma: non sono semplici pagine web, ma strumenti capaci di comunicare l'identità del tuo business e farlo crescere online.
                    </p>

                    {/* Matrix RGB Grid & Link button, identical height spacing to dynamic box logic */}
                    <div className="mt-auto pt-2 space-y-2 w-full">
                        {/* Box mimicking the height of the black terminal boxes adjacent */}
                        <div className="bg-black/20 rounded-lg p-2 min-h-[48px] flex items-center justify-center w-full">
                            {/* 13x3 Grid (39 cells max) perfectly centered within the simulated box */}
                            <div ref={gridRef} className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1 w-[90%] md:w-full">
                                {[...Array(39)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="grid-cell w-full aspect-square rounded-[2px] border border-drago-accent/30 bg-transparent"
                                    />
                                ))}
                            </div>
                        </div>
                        <Link to="/portfolio" className="group/btn w-full flex items-center justify-between p-3 rounded-xl border border-drago-accent hover:bg-drago-accent hover:border-drago-accent transition-all duration-300">
                            <span className="font-sans text-base font-semibold text-drago-accent group-hover/btn:text-white transition-colors">Guarda il portfolio</span>
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
