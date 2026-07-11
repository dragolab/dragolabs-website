import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldAlert, Cookie, Info, Lock, Settings } from 'lucide-react';

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
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-44 pb-24 px-6 overflow-x-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="cookie-reveal opacity-0 text-center mb-16">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-drago-contrast mb-4">
                        Informativa sui Cookie
                    </h1>
                    <p className="font-sans font-light text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Trasparenza sull'utilizzo dei cookie tecnici e di pagamento su Drago Labs.
                    </p>
                    <p className="font-sans text-xs text-drago-accent mt-3">
                        Ultimo aggiornamento: 11 Luglio 2026
                    </p>
                    <div className="w-20 h-[1px] bg-drago-accent mx-auto mt-6" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Intro Card */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            La tutela dei tuoi dati personali è una nostra priorità. In questa pagina viene illustrato come, perché e quali tipologie di 
                            cookie vengono utilizzati durante la navigazione sul sito web <strong className="text-white">Drago Labs</strong>. 
                            La presente informativa è redatta in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla normativa italiana vigente.
                        </p>
                    </div>

                    {/* Section 1: Cosa sono i cookie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Cookie className="w-4 h-4" />
                            </span>
                            1. Cosa sono i Cookie?
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), 
                            dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie si differenziano in base alla durata 
                            (di sessione o persistenti) e alla finalità (tecnici, analitici o di profilazione).
                        </p>
                    </div>

                    {/* Section 2: Tipologie utilizzate (Stripe & Technical only) */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Lock className="w-4 h-4" />
                            </span>
                            2. Cookie Utilizzati da questo Sito
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Questo sito web fa uso <strong className="text-white">esclusivamente di cookie tecnici e strettamente necessari</strong> al suo corretto funzionamento. 
                            Non viene installato alcun cookie per finalità pubblicitarie o di profilazione comportamentale dell'utente.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-sans font-bold text-sm text-white mb-1">A. Cookie di Sessione e di Sistema (Tecnici)</h4>
                                <p className="font-sans font-light text-xs md:text-sm text-gray-400 leading-relaxed">
                                    Necessari per la corretta visualizzazione delle pagine, per la gestione della navigazione e per mantenere lo stato della sessione di navigazione. Questi cookie non raccolgono informazioni personali e vengono rimossi automaticamente alla chiusura del browser.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-sans font-bold text-sm text-white mb-1">B. Cookie di Stripe (Elaborazione Pagamenti e Antifrode)</h4>
                                <p className="font-sans font-light text-xs md:text-sm text-gray-400 leading-relaxed">
                                    Per elaborare i pagamenti in modo sicuro ed evitare transazioni fraudolente, il nostro sito integra i servizi di <strong className="text-white">Stripe</strong>. Stripe può installare cookie tecnici di sicurezza necessari per autenticare l'utente, prevenire frodi informatiche e verificare l'affidabilità della connessione durante la transazione monetaria. Trattandosi di cookie strettamente indispensabili per l'erogazione del servizio di pagamento richiesto dall'utente, essi sono esenti dal preventivo consenso dell'utente ai sensi del GDPR.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Nessuna Profilazione */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <ShieldAlert className="w-4 h-4" />
                            </span>
                            3. Cookie di Terze Parti e Profilazione
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Questo sito <strong className="text-white">non utilizza </strong> cookie di profilazione di terze parti (es. Facebook Pixel, Google DoubleClick) né sistemi di tracciamento pubblicitario o remarketing. Non inviamo dati personali a agenzie pubblicitarie esterne.
                        </p>
                    </div>

                    {/* Section 4: Come disabilitarli */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Settings className="w-4 h-4" />
                            </span>
                            4. Come Gestire o Disabilitare i Cookie
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Puoi controllare, limitare o bloccare completamente i cookie modificando le impostazioni del tuo browser web. 
                            Di seguito i link alle istruzioni dei principali browser per gestire le proprie preferenze relative ai cookie:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm font-sans text-gray-400">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Apple Safari</a></li>
                            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-e-gestire-i-cookie-in-microsoft-edge-63947406-40b9-7524-2cfb-7b94b540defd" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Microsoft Edge</a></li>
                        </ul>
                        <p className="font-sans font-light text-xs text-gray-400 mt-4 leading-relaxed">
                            Nota: Disabilitando i cookie strettamente necessari/tecnici, alcune funzionalità del sito (come il processo di pagamento sicuro Stripe) potrebbero non essere utilizzabili o non funzionare correttamente.
                        </p>
                    </div>

                    {/* Section 5: Contatti */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <h3 className="font-sans font-bold text-lg text-white mb-3 flex items-center gap-2">
                            <Info className="w-5 h-5 text-drago-accent" />
                            Titolare del Trattamento
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Il Titolare del Trattamento dei dati raccolti tramite questo sito web è Gianluca Dragone. Per qualsiasi richiesta relativa alla privacy o ai cookie, puoi scrivere a:
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
