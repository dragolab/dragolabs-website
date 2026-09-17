import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Database, Info, Mail, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.privacy-reveal', { y: 30, opacity: 0 }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-44 pb-24 px-6 overflow-x-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="privacy-reveal opacity-0 text-center mb-16">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-drago-contrast mb-4">Informativa Privacy</h1>
                    <p className="font-sans font-light text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Come vengono trattati i dati inviati attraverso il modulo di contatto.
                    </p>
                    <div className="w-20 h-[1px] bg-drago-accent mx-auto mt-6" />
                </div>

                <div className="space-y-8">
                    <section className="privacy-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <h2 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent"><Shield className="w-4 h-4" /></span>
                            Titolare e contatto
                        </h2>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Il titolare del trattamento è Gianluca Dragone, Drago Labs, con sede a Fasano (BR). Per qualsiasi richiesta relativa ai dati personali puoi scrivere a <a href="mailto:info.dragolabs@gmail.com" className="text-drago-accent hover:underline">info.dragolabs@gmail.com</a>.
                        </p>
                    </section>

                    <section className="privacy-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h2 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent"><Database className="w-4 h-4" /></span>
                            Dati, finalità e conservazione
                        </h2>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Il modulo raccoglie nome, indirizzo email, eventuale numero di telefono e contenuto del messaggio. I dati sono usati esclusivamente per rispondere alla richiesta di contatto, fornire informazioni o avviare eventuali attività precontrattuali richieste dall’utente.
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I campi contrassegnati come obbligatori sono necessari per gestire la richiesta. I dati vengono conservati per il tempo necessario a fornire un riscontro e, se nasce un rapporto professionale, per gli ulteriori obblighi applicabili.
                        </p>
                    </section>

                    <section className="privacy-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h2 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent"><Mail className="w-4 h-4" /></span>
                            Destinatari e diritti
                        </h2>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Per l’invio del messaggio il sito utilizza il servizio tecnico EmailJS. I dati non sono ceduti per finalità commerciali o pubblicitarie. Potranno essere trattati dai fornitori tecnici necessari al funzionamento del servizio, nei limiti delle rispettive funzioni.
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Puoi richiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento scrivendo al titolare. Hai inoltre il diritto di proporre reclamo all’autorità di controllo competente.
                        </p>
                    </section>

                    <p className="privacy-reveal opacity-0 font-sans text-xs text-gray-400 text-center">
                        Ultimo aggiornamento: 18 settembre 2026. L’informativa va riesaminata quando cambiano form, fornitori o finalità del trattamento.
                    </p>
                </div>
            </div>
        </section>
    );
}
