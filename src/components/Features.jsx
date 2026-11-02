import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, GitMerge, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        once: true,
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-36 relative border-t border-white/10 overflow-hidden">
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

                {/* Card 1: Logica e Metodo */}
                <div className="feature-card rounded-[2.2rem] border border-white/15 bg-drago-text/40 p-8 xl:p-10 shadow-xl backdrop-blur-xl hover:border-drago-accent hover:shadow-[0_0_35px_rgba(0,115,160,0.25)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-cyan mb-6 group-hover:scale-110 transition-transform">
                            <Code className="w-7 h-7 text-drago-cyan" />
                        </div>
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3.5 text-white">Logica e Metodo</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            L'unione tra studi classici e informatica definisce la mia forma mentis: un approccio analitico che non si ferma alla superficie, ma cerca la soluzione più strutturata ed elegante per risolvere ogni sfida.
                        </p>
                    </div>

                    <div className="mt-auto pt-6 space-y-3.5 w-full border-t border-white/10">
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Formazione classica & logica analitica</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Informatica UniBa · Problem solving rigoroso</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Zero template generici · Codice puro</span>
                            </div>
                        </div>

                        <a href="#chi-sono" className="group/btn w-full flex items-center justify-between p-4 rounded-xl border border-drago-accent/50 bg-white/5 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300 mt-4">
                            <span className="font-sans text-base font-semibold text-white transition-colors">Scopri chi sono</span>
                            <div className="w-8 h-8 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Card 2: Servizi Digitali */}
                <div className="feature-card rounded-[2.2rem] border border-white/15 bg-drago-text/40 p-8 xl:p-10 shadow-xl backdrop-blur-xl hover:border-drago-accent hover:shadow-[0_0_35px_rgba(0,115,160,0.25)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-cyan mb-6 group-hover:scale-110 transition-transform">
                            <Layout className="w-7 h-7 text-drago-cyan" />
                        </div>
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3.5 text-white">Servizi Digitali</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            Drago Labs trasforma le tue necessità in realtà. Dalla creazione di siti web moderni all'assistenza tecnica dedicata, offriamo soluzioni informatiche progettate per semplificare la gestione della tua attività.
                        </p>
                    </div>

                    <div className="mt-auto pt-6 space-y-3.5 w-full border-t border-white/10">
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Siti web sartoriali & e-commerce veloci</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Applicativi su misura & architetture serverless</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>SEO specialistico & posizionamento organico</span>
                            </div>
                        </div>

                        <a href="#servizi" className="group/btn w-full flex items-center justify-between p-4 rounded-xl border border-drago-accent/50 bg-white/5 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300 mt-4">
                            <span className="font-sans text-base font-semibold text-white transition-colors">I nostri servizi</span>
                            <div className="w-8 h-8 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Card 3: Soluzioni Innovative */}
                <div className="feature-card rounded-[2.2rem] border border-white/15 bg-drago-text/40 p-8 xl:p-10 shadow-xl backdrop-blur-xl hover:border-drago-accent hover:shadow-[0_0_35px_rgba(0,115,160,0.25)] transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5">
                    <div>
                        <div className="w-14 h-14 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-cyan mb-6 group-hover:scale-110 transition-transform">
                            <GitMerge className="w-7 h-7 text-drago-cyan" />
                        </div>
                        <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3.5 text-white">Soluzioni Innovative</h3>
                        <p className="text-gray-100 font-normal text-base sm:text-lg leading-relaxed mb-6">
                            Ogni progetto nasce da un flusso di idee che prende forma: non sono semplici pagine web, ma strumenti capaci di comunicare l'identità del tuo business e farlo crescere online.
                        </p>
                    </div>

                    <div className="mt-auto pt-6 space-y-3.5 w-full border-t border-white/10">
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Core Web Vitals 98+ · Caricamento &lt; 0.6s</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Workflow agentici & automazioni AI proprietarie</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-gray-200">
                                <span className="w-2 h-2 rounded-full bg-drago-cyan flex-shrink-0" />
                                <span>Monitoraggio costante & manutenzione continua</span>
                            </div>
                        </div>

                        <a href="#progetti" className="group/btn w-full flex items-center justify-between p-4 rounded-xl border border-drago-accent/50 bg-white/5 hover:bg-drago-accent hover:border-drago-accent transition-all duration-300 mt-4">
                            <span className="font-sans text-base font-semibold text-white transition-colors">Vedi i progetti</span>
                            <div className="w-8 h-8 rounded-full bg-drago-accent/20 flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-drago-cyan group-hover/btn:text-drago-accent" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
