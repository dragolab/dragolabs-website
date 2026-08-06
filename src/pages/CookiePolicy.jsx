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
                        Informativa ed inventario sull'utilizzo dei cookie su Drago Labs.
                    </p>
                    <p className="font-sans text-xs text-drago-accent mt-3">
                        Ultimo aggiornamento: 6 Agosto 2026
                    </p>
                    <div className="w-20 h-[1px] bg-drago-accent mx-auto mt-6" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Intro Card */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            La trasparenza e la tutela della tua privacy sono fondamentali per Drago Labs. La presente Informativa illustra in modo dettagliato quali tipi di cookie vengono impiegati sul sito web <strong className="text-white">Drago Labs</strong>, le loro finalità, la loro durata e le modalità a disposizione dell'utente per gestirne o disabilitarne l'uso, in piena conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR - UE 2016/679) e la Direttiva ePrivacy.
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
                            I cookie sono piccoli file di testo inviati da un sito web al dispositivo dell'utente (computer, smartphone o tablet) durante la navigazione. Essi consentono al sito di memorizzare informazioni sulle preferenze dell'utente, garantendo un'esperienza di navigazione fluida, sicura e personalizzata.
                        </p>
                    </div>

                    {/* Section 2: Inventario Cookie e Tipologie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Lock className="w-4 h-4" />
                            </span>
                            2. Inventario dei Cookie Utilizzati
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                            Questo sito fa uso <strong className="text-white">esclusivamente di cookie tecnici e di sessione strettamente necessari</strong> per consentire la corretta fruizione delle pagine e garantire la sicurezza della navigazione.
                        </p>

                        {/* Cookie Inventory Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs md:text-sm font-sans border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-drago-accent uppercase tracking-wider font-semibold">
                                        <th className="py-3 px-3">Nome Cookie</th>
                                        <th className="py-3 px-3">Tipologia</th>
                                        <th className="py-3 px-3">Finalità</th>
                                        <th className="py-3 px-3">Durata</th>
                                        <th className="py-3 px-3">Modalità Opt-Out</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-gray-300 font-light">
                                    <tr>
                                        <td className="py-3 px-3 font-mono text-white text-xs">Session_ID / Technical</td>
                                        <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-drago-accent/15 text-drago-accent font-medium text-xs">Essenziale</span></td>
                                        <td className="py-3 px-3">Gestione dello stato di navigazione e rendering delle componenti</td>
                                        <td className="py-3 px-3">Sessione (rimosso alla chiusura)</td>
                                        <td className="py-3 px-3 text-xs text-gray-400">Impostazioni Browser</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-3 font-mono text-white text-xs">CSRF Token / Security</td>
                                        <td className="py-3 px-3"><span className="px-2 py-0.5 rounded bg-drago-accent/15 text-drago-accent font-medium text-xs">Essenziale</span></td>
                                        <td className="py-3 px-3">Protezione da attacchi di tipo Cross-Site Request Forgery</td>
                                        <td className="py-3 px-3">Sessione</td>
                                        <td className="py-3 px-3 text-xs text-gray-400">Impostazioni Browser</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 3: Nessuna Profilazione */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <ShieldAlert className="w-4 h-4" />
                            </span>
                            3. Assenza di Cookie di Profilazione e Marketing
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Questo sito <strong className="text-white">non fa uso di alcun cookie di profilazione o tracciamento pubblicitario di terze parti </strong> (es. Pixel Meta, Google Ads o reti di retargeting). Non vengono effettuate attività di tracciamento comportamentale o profilazione commerciale dei visitatori.
                        </p>
                    </div>

                    {/* Section 4: Do Not Track (DNT) */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <EyeOff className="w-4 h-4" />
                            </span>
                            4. Segnali "Do Not Track" (DNT)
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Poiché Drago Labs non monitora né traccia le attività dei propri utenti su siti terzi per finalità di profilazione o advertising, il sito è progettato da subito per rispettare la privacy dell'utente senza raccogliere dati personali profilanti.
                        </p>
                    </div>

                    {/* Section 5: Come Gestire o Disabilitare i Cookie */}
                    <div className="cookie-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Settings className="w-4 h-4" />
                            </span>
                            5. Come Gestire o Disabilitare i Cookie dal Browser
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Puoi configurare il tuo browser affinché accetti, rifiuti o elimini i cookie in qualsiasi momento. Consulta le guide ufficiali per i principali browser:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm font-sans text-gray-400 mb-4">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Apple Safari</a></li>
                            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-e-gestire-i-cookie-in-microsoft-edge-63947406-40b9-7524-2cfb-7b94b540defd" target="_blank" rel="noreferrer" className="text-drago-accent hover:underline">Microsoft Edge</a></li>
                        </ul>
                        <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                            Nota: La disabilitazione completa dei cookie tecnici di sessione potrebbe alterare la corretta visualizzazione di alcune sezioni del sito.
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
