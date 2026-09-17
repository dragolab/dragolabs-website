import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, FileText, Database, Scale, RefreshCw, AlertTriangle, Gavel, Globe } from 'lucide-react';

export default function Terms() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo('.terms-reveal',
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
                <img src="/img/optimized/background-1600.webp" srcSet="/img/optimized/background-768.webp 768w, /img/optimized/background-1600.webp 1600w" sizes="100vw" width="2048" height="2048" alt="" decoding="async" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="terms-reveal opacity-0 text-center mb-16">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-drago-contrast mb-4">
                        Termini di Servizio
                    </h1>
                    <p className="font-sans font-light text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Condizioni generali di contratto per i servizi di Sviluppo Web e Assistenza IT di Drago Labs.
                    </p>
                    <p className="font-sans text-xs text-drago-accent mt-3">
                        Ultimo aggiornamento: 6 Agosto 2026
                    </p>
                    <div className="w-20 h-[1px] bg-drago-accent mx-auto mt-6" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Intro Card */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Benvenuto su Drago Labs. I presenti Termini di Servizio disciplinano l'accesso e l'utilizzo del sito web nonché il rapporto contrattuale tra 
                            <strong className="text-white"> Gianluca Dragone</strong> (di seguito "Drago Labs" o "Fornitore"), con sede a Fasano (BR), Italia, 
                            e l'utente o cliente (di seguito "Cliente"). 
                            L'accesso al sito, l'accettazione di un preventivo o il pagamento di una prestazione costituiscono accettazione integrale e vincolante dei presenti termini.
                        </p>
                    </div>

                    {/* Section 1: Oggetto del Servizio */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <FileText className="w-4 h-4" />
                            </span>
                            1. Oggetto dei Servizi Professionali
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Drago Labs offre prestazioni professionali nel settore digitale ed informatico, inclusi a titolo esemplificativo: 
                            progettazione e sviluppo di siti ed applicativi web su misura, ottimizzazione delle prestazioni e SEO, consulenza informatica e servizi di assistenza e manutenzione IT. 
                            Ogni singolo progetto viene formalizzato tramite apposito preventivo o proposta d'accordo contenente la descrizione analitica dell'ambito d'intervento (scope of work), le tempistiche stimate ed il valore economico del servizio.
                        </p>
                    </div>

                    {/* Section 2: Uso Accettabile del Sito */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <AlertTriangle className="w-4 h-4" />
                            </span>
                            2. Uso Accettabile ed Obblighi dell'Utente
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            L'Utente si impegna ad utilizzare il sito ed i relativi servizi nel rispetto della legge e in buona fede. È severamente vietato:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-400 font-sans">
                            <li>Eseguire scraping automatico, scansioni non autorizzate o estrazione massiva di dati dal sito;</li>
                            <li>Tentare di violare o eludere i sistemi di sicurezza, l'infrastruttura di hosting o i server di Drago Labs;</li>
                            <li>Inviare materiale o richieste contenenti malware, codice dannoso o elementi lesivi dei diritti altrui.</li>
                        </ul>
                    </div>

                    {/* Section 3: Condizioni di Pagamento */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Scale className="w-4 h-4" />
                            </span>
                            3. Corrispettivi e Condizioni di Pagamento
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I corrispettivi stabiliti nei preventivi si intendono al netto di eventuali rivalse fiscali o contributive applicabili. 
                            I pagamenti vengono effettuati mediante metodi tracciabili e sicuri (quali bonifico bancario o altre modalità espressamente concordate). 
                            Salvo diversamente specificato nel preventivo, l'avvio delle attività è subordinato all'avvenuto accredito dell'acconto iniziale pattuito. In caso di ritardo nei pagamenti, Drago Labs si riserva la facoltà di sospendere temporaneamente la fornitura delle prestazioni fino a completo saldo.
                        </p>
                    </div>

                    {/* Section 4: Politica di Rimborso e Diritto di Recesso */}
                    <div className="terms-reveal opacity-0 glass border border-red-950 bg-red-950/10 rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/40 flex items-center justify-center text-red-400">
                                <RefreshCw className="w-4 h-4" />
                            </span>
                            4. Politica di Rimborso e Diritto di Recesso
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            Le prestazioni di sviluppo web, creazione software e consulenza personalizzata realizzate da Drago Labs rientrano nella categoria dei 
                            <strong className="text-white"> beni e servizi confezionati su misura o chiaramente personalizzati</strong>.
                        </p>
                        <p className="font-sans font-semibold text-white leading-relaxed text-sm md:text-base">
                            Ai sensi dell'art. 59, lett. c) e o) del Codice del Consumo (D.Lgs. 206/2005), una volta avviata l'esecuzione della prestazione (confermata con il pagamento dell'acconto o l'accettazione formale della proposta), il Diritto di Recesso non è applicabile e i corrispettivi versati non sono rimborsabili.
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mt-3">
                            In caso di recesso o recesso anticipato del Cliente a lavori già iniziati, i corrispettivi corrisposti saranno trattenuti a titolo di compenso per l'attività svolta e la riserva di risorse impegnate.
                        </p>
                    </div>

                    {/* Section 5: Limitazione di Responsabilità & Backup */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Database className="w-4 h-4" />
                            </span>
                            5. Limitazione di Responsabilità ed Obbligo di Backup
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            Drago Labs garantisce di operare con la massima diligenza professionale. Tuttavia, il Fornitore non potrà essere ritenuto responsabile per ritardi, danni indiretti, mancati guadagni o malfunzionamenti causati da terze parti (es. provider di hosting, registrar di domini, blackout o problemi di rete).
                        </p>
                        <p className="font-sans font-semibold text-white leading-relaxed text-sm md:text-base mb-3">
                            È responsabilità esclusiva ed inderogabile del Cliente provvedere all'esecuzione ed alla conservazione di copie di backup aggiornate di tutti i propri dati, database ed ambienti applicativi prima e dopo ogni intervento tecnico.
                        </p>
                        <p className="font-sans font-light text-xs text-gray-400 italic">
                            Nella misura massima consentita dalla legge applicabile, la responsabilità totale del Fornitore non potrà in nessun caso superare la somma effettivamente incassata per la singola prestazione oggetto della contestazione.
                        </p>
                    </div>

                    {/* Section 6: Proprietà Intellettuale */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Shield className="w-4 h-4" />
                            </span>
                            6. Proprietà Intellettuale e Diritti d'Autore
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Tutti i diritti sul materiale personalizzato realizzato per il Cliente saranno trasferiti a quest'ultimo solo ed esclusivamente a seguito dell'integrale saldo economico del servizio. 
                            Drago Labs mantiene la titolarità e i diritti d'autore sui componenti generici, script riutilizzabili, strumenti interni e librerie preesistenti impiegati nella realizzazione dell'opera, per i quali concede al Cliente una licenza d'uso non esclusiva e perpetua.
                        </p>
                    </div>

                    {/* Section 7: Servizi ed Infrastrutture di Terze Parti */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Globe className="w-4 h-4" />
                            </span>
                            7. Integrazioni e Servizi di Terze Parti
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I progetti realizzati o ospitati possono fare uso di servizi ed infrastrutture esterne (ad esempio piattaforme cloud, hosting provider, o API di terze parti). L'utilizzo di tali componenti è soggetto anche alle condizioni d'uso ed ai termini di servizio dei rispettivi fornitori terzi.
                        </p>
                    </div>

                    {/* Section 8: Legge Applicabile e Modifiche */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Gavel className="w-4 h-4" />
                            </span>
                            8. Legge Applicabile e Foro Competente
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            I presenti Termini sono regolati e interpretati in conformità alla legge italiana. Per qualsiasi controversia inerente alla validità, interpretazione o esecuzione delle presenti condizioni, la competenza territoriale esclusiva spetta al Foro di Brindisi, fatti salvi eventuali diritti inderogabili stabiliti dalla legge a favore dei consumatori.
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Drago Labs si riserva la facoltà di aggiornare i presenti Termini di Servizio in qualsiasi momento. Le eventuali modifiche saranno pubblicate su questa pagina con la relativa data di aggiornamento.
                        </p>
                    </div>

                    {/* Section 9: Contatti */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <h3 className="font-sans font-bold text-lg text-white mb-3">
                            Contatti e Comunicazioni Legali
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Per informazioni sui presenti Termini di Servizio o richieste relative alle prestazioni offerte:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-gray-400">
                            <div>
                                <strong className="text-white">Email:</strong> <a href="mailto:info.dragolabs@gmail.com" className="text-drago-accent hover:underline">info.dragolabs@gmail.com</a>
                            </div>
                            <div>
                                <strong className="text-white">Telefono / WhatsApp:</strong> <a href="tel:+393939450653" className="text-drago-accent hover:underline">+39 393 945 0653</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
