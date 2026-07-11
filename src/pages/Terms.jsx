import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, FileText, Database, Scale, RefreshCw } from 'lucide-react';

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
                <div className="terms-reveal opacity-0 text-center mb-16">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-drago-contrast mb-4">
                        Termini di Servizio
                    </h1>
                    <p className="font-sans font-light text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        Condizioni generali di contratto per i servizi di Sviluppo Web e Assistenza IT di Drago Labs.
                    </p>
                    <p className="font-sans text-xs text-drago-accent mt-3">
                        Ultimo aggiornamento: 11 Luglio 2026
                    </p>
                    <div className="w-20 h-[1px] bg-drago-accent mx-auto mt-6" />
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {/* Intro Card */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Benvenuto su Drago Labs. I presenti Termini di Servizio disciplinano il rapporto contrattuale tra 
                            <strong className="text-white"> Gianluca Dragone</strong> (di seguito "Drago Labs" o "Fornitore"), con sede a Fasano (BR), Italia, 
                            e i soggetti che richiedono ed acquistano le prestazioni professionali e i servizi offerti tramite questo sito web. 
                            L'accettazione del preventivo o il pagamento del servizio costituiscono accettazione integrale dei presenti termini.
                        </p>
                    </div>

                    {/* Section 1: Descrizione del Servizio */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <FileText className="w-4 h-4" />
                            </span>
                            1. Oggetto del Servizio
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Drago Labs offre servizi professionali nel settore informatico, inclusi a titolo esemplificativo ma non esaustivo: 
                            sviluppo di siti web ed applicativi web personalizzati, ottimizzazione SEO, consulenza informatica e servizi di assistenza IT. 
                            Ogni progetto sarà dettagliato in un apposito preventivo o accordo scritto approvato dalle parti, che definirà l'ambito di intervento, 
                            le tempistiche di consegna previste e i corrispettivi dovuti.
                        </p>
                    </div>

                    {/* Section 2: Pagamenti e Stripe */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Scale className="w-4 h-4" />
                            </span>
                            2. Condizioni di Pagamento
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            I pagamenti per le prestazioni fornite da Drago Labs vengono elaborati in modo sicuro tramite la piattaforma di pagamento di terze parti 
                            <strong className="text-white"> Stripe</strong>. I pagamenti possono essere strutturati in un'unica soluzione anticipata, oppure suddivisi in acconto e saldo, 
                            secondo quanto specificato nel preventivo concordato. Il lavoro sui progetti commissionati avrà inizio solo a seguito dell'avvenuta ricezione del 
                            pagamento pattuito (o dell'acconto iniziale).
                        </p>
                    </div>

                    {/* Section 3: Rimborso (Fundamental for Stripe) */}
                    <div className="terms-reveal opacity-0 glass border border-red-950 bg-red-950/10 rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/40 flex items-center justify-center text-red-400">
                                <RefreshCw className="w-4 h-4" />
                            </span>
                            3. Politica di Rimborso e Diritto di Recesso
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            Tutte le prestazioni di sviluppo software, creazione siti web e consulenza fornite da Drago Labs rientrano nella categoria dei 
                            <strong className="text-white"> servizi digitali personalizzati ed eseguiti su misura </strong> per le specifiche esigenze del cliente.
                        </p>
                        <p className="font-sans font-semibold text-white leading-relaxed text-sm md:text-base">
                            Pertanto, ai sensi dell'art. 59, lettere c) e o) del Codice del Consumo italiano (D.Lgs. 206/2005), una volta che l'esecuzione delle prestazioni o lo sviluppo del codice ha avuto inizio (confermato dal pagamento dell'acconto o dall'accettazione formale del preventivo), non è previsto alcun rimborso, né si applica il diritto di recesso. 
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mt-3">
                            Nel caso in cui il cliente decida di interrompere unilateralmente il progetto prima del suo completamento, i corrispettivi già versati (inclusi gli acconti) non saranno rimborsabili e rimarranno acquisiti da Drago Labs a titolo di indennizzo per le ore di lavoro già impiegate e le risorse allocate.
                        </p>
                    </div>

                    {/* Section 4: Limitazione di Responsabilità & Backup */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Database className="w-4 h-4" />
                            </span>
                            4. Limitazione di Responsabilità ed Obbligo di Backup
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-3">
                            Drago Labs si impegna a svolgere gli incarichi con diligenza e professionalità. Tuttavia, il Fornitore non potrà in nessun caso essere ritenuto responsabile per danni indiretti, perdite di fatturato, malfunzionamenti o interruzioni di servizio dovuti a cause di forza maggiore, disservizi dell'hosting scelto dal cliente o problemi a infrastrutture di terze parti.
                        </p>
                        <p className="font-sans font-semibold text-white leading-relaxed text-sm md:text-base">
                            È responsabilità esclusiva ed inderogabile del Cliente provvedere all'esecuzione e al mantenimento di backup aggiornati di tutti i propri dati, database, file e dell'intero sistema prima, durante e dopo qualsiasi intervento tecnico eseguito da Drago Labs.
                        </p>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mt-3">
                            Drago Labs non è responsabile per la perdita di dati o configurazioni che avrebbero potuto essere salvaguardate dal cliente tramite un idoneo backup preventivo.
                        </p>
                    </div>

                    {/* Section 5: Proprietà Intellettuale */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8 hover:border-drago-accent/50 transition-colors duration-350">
                        <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                                <Shield className="w-4 h-4" />
                            </span>
                            5. Proprietà Intellettuale
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base">
                            Salvo diversi accordi scritti, tutti i diritti di proprietà intellettuale relativi al software, al codice sorgente personalizzato e al design grafico sviluppati appositamente per il cliente saranno trasferiti a quest'ultimo solo ed esclusivamente in seguito al pagamento integrale del saldo pattuito. 
                            Drago Labs conserva in ogni caso la proprietà intellettuale di componenti di codice preesistenti, librerie proprietarie, pattern di design generici e modelli di sviluppo utilizzati per la realizzazione del progetto, che il Fornitore potrà liberamente riutilizzare per altri clienti.
                        </p>
                    </div>

                    {/* Section 6: Contatti */}
                    <div className="terms-reveal opacity-0 glass rounded-2xl p-6 md:p-8">
                        <h3 className="font-sans font-bold text-lg text-white mb-3">
                            Contatti e Comunicazioni
                        </h3>
                        <p className="font-sans font-light text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                            Per qualsiasi chiarimento in merito ai presenti Termini di Servizio o per richiedere informazioni sulle prestazioni professionali, puoi contattare il Fornitore ai seguenti recapiti:
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
