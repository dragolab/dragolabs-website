import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldAlert, Cookie, Info, Lock, Settings, EyeOff } from 'lucide-react';

export default function CookiePolicy() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.cookie-reveal',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out'
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44 overflow-x-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="cookie-reveal opacity-0 mx-auto mb-16 max-w-3xl text-center md:mb-20">
                    <h1 className="font-sans text-5xl font-bold text-balance text-drago-contrast md:text-6xl">
                        Informativa sui Cookie
                    </h1>
                    <p className="mt-6 font-sans text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                        Informativa ed inventario sull'utilizzo dei cookie su Drago Labs.
                    </p>
                    <p className="font-sans text-xs text-drago-accent mt-3">
                        Ultimo aggiornamento: 26 settembre 2026
                    </p>
                    <div className="mx-auto mt-8 h-px w-24 bg-drago-accent" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Intro Card */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            La trasparenza e la tutela della privacy sono fondamentali per Drago Labs. Questa pagina descrive i cookie effettivamente utilizzati dal sito e viene aggiornata quando vengono introdotti nuovi strumenti o servizi.
                        </p>
                    </div>

                    {/* Section 1: Cosa sono i cookie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Cookie className="w-4 h-4" />
                            </span>
                            1. Che cosa sono i Cookie?
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I cookie sono piccoli file di testo che un sito può salvare nel browser. Possono essere necessari al funzionamento del sito oppure usati, previa gestione delle preferenze quando richiesta, per statistiche e marketing.
                        </p>
                    </div>

                    {/* Section 2: Inventario Cookie e Tipologie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Lock className="w-4 h-4" />
                            </span>
                            2. Cookie utilizzati da Drago Labs
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                            Il sito non utilizza cookie di profilazione o marketing. Dopo il consenso dell'utente, può caricare <strong className="text-white">Google Analytics 4</strong> per statistiche aggregate di utilizzo. Google Analytics può usare identificatori analitici come <strong className="text-white">_ga</strong> e <strong className="text-white">_ga_*</strong>.
                        </p>

                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            La scelta relativa agli analytics viene memorizzata localmente nel browser esclusivamente per ricordare la preferenza. Il sito carica Google Fonts e utilizza EmailJS soltanto quando l'utente invia il modulo di contatto. L'eventuale trattamento effettuato da tali fornitori è disciplinato dalle rispettive informative.
                        </p>
                    </div>

                    {/* Section 3: Nessuna Profilazione */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <ShieldAlert className="w-4 h-4" />
                            </span>
                            3. Analytics e assenza di marketing
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Questo sito non utilizza Pixel Meta, Google Ads o reti di retargeting. Google Analytics 4 viene attivato solo dopo una scelta esplicita; non viene usato per profilazione commerciale o pubblicitaria.
                        </p>
                    </div>

                    {/* Section 4: Do Not Track (DNT) */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <EyeOff className="w-4 h-4" />
                            </span>
                            4. Scelta e revoca del consenso
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Al primo accesso puoi accettare o rifiutare gli analytics. Puoi riaprire le preferenze in qualsiasi momento dal link “Preferenze cookie” nel footer e modificare la scelta.
                        </p>
                    </div>

                    {/* Section 5: Come Gestire o Disabilitare i Cookie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Settings className="w-4 h-4" />
                            </span>
                            5. Gestione delle preferenze
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Google Analytics non viene caricato finché non viene prestato il consenso. Le preferenze possono essere aggiornate in qualsiasi momento dal footer.
                        </p>
                        <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                            Puoi comunque gestire o eliminare i cookie dal browser seguendo le istruzioni del relativo produttore.
                        </p>
                    </div>

                    {/* Section 6: Contatti */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <h3 className="font-sans font-bold text-lg text-white mb-3 flex items-center gap-2">
                            <Info className="w-5 h-5 text-drago-accent" />
                            Titolare del Trattamento
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Titolare del trattamento dei dati è Gianluca Dragone. Per qualsiasi chiarimento sull'uso dei cookie o sul trattamento dei dati personali:
                        </p>
                        <div className="text-sm font-mono text-gray-400">
                            <strong className="text-white">Email:</strong> <a href="mailto:info.dragolabs@gmail.com" className="text-drago-accent hover:underline">info.dragolabs@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
