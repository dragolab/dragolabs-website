import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CalcioLive() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from('.stagger-reveal', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen pt-56 pb-20 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="Background" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-drago-bg" />
            </div>

            <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="stagger-reveal font-sans font-bold text-5xl md:text-6xl text-drago-contrast mb-4">
                        Calcio Live
                    </h1>
                    <p className="stagger-reveal font-sans font-light text-lg md:text-xl text-gray-300">
                        L'app definitiva per guardare il calcio in streaming
                    </p>
                    <div className="stagger-reveal w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </div>

                {/* Images */}
                <div className="stagger-reveal w-full max-w-4xl mb-16 glass rounded-3xl p-8 md:p-12 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                    <img
                        src="/img/calcio-live-home-telefono.png"
                        alt="Screenshot Telefono"
                        className="h-[16rem] md:h-[20rem] lg:h-[24rem] w-auto object-contain"
                    />
                    <img
                        src="/img/calcio-live-home-tablet.png"
                        alt="Screenshot Tablet"
                        className="h-[16.75rem] md:h-[10rem] lg:h-[25rem] w-auto object-contain"
                    />
                </div>

                {/* Description */}
                <div className="stagger-reveal text-center max-w-3xl mb-12">
                    <p className="font-sans font-light text-xl md:text-2xl text-gray-200 leading-relaxed">
                        Guarda gratuitamente partite di Serie A, Premier League, LaLiga, UEFA Champions League e tante altre competizioni comodamente sul tuo dispositivo Android
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="stagger-reveal flex flex-col md:flex-row items-center gap-4 mb-24">
                    <a
                        href="/calcio-live-apk/Calcio%20Live%20v1.6.apk"
                        download="Calcio Live v1.6.apk"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-sans font-bold text-white bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,115,160,0.4)]"
                    >
                        Scaricala ora
                        <svg className="w-5 h-5 ml-1 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                    <span className="font-sans text-sm text-gray-400 italic">
                        *Compatibile con telefoni, tablet e TV Android
                    </span>
                </div>

                {/* Disclaimer */}
                <div className="stagger-reveal w-full max-w-4xl glass rounded-2xl p-8 border border-white/10 text-left [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]">
                    <h3 className="font-sans font-bold text-lg text-white mb-2">Attenzione!</h3>
                    <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                        Questa applicazione è stata sviluppata esclusivamente a scopo di test, studio e dimostrazione tecnica. Non è un servizio commerciale e non è destinata o all'uso continuativo.
                    </p>

                    <h3 className="font-sans font-bold text-lg text-white mb-2">Diritti d'Autore e Contenuti</h3>
                    <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                        Drago Labs non trasmette, non ospita e non memorizza alcun contenuto multimediale sui propri server. Tutti i flussi video sono forniti da terze parti e sono accessibili sul web. L'app funge esclusivamente da player tecnico per testare la stabilità dello streaming. I loghi, i nomi delle squadre e i marchi delle competizioni appartengono ai rispettivi proprietari e sono utilizzati qui solo a fini illustrativi.
                    </p>

                    <h3 className="font-sans font-bold text-lg text-white mb-2">Responsabilità dell'Utente</h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">
                        L'utente è l'unico responsabile dell'uso dell'applicazione e della verifica della legalità dei contenuti visualizzati nel proprio paese di residenza. Drago Labs declina ogni responsabilità per eventuali usi impropri o violazioni del copyright.
                    </p>
                </div>
            </div>
        </section>
    );
}
