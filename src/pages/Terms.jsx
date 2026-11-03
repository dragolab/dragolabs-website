import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, FileText, Scale, RefreshCw, AlertTriangle, Gavel, Globe, ArrowLeft, Mail, Phone, HardDrive, CheckCircle2 } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { useLanguage } from '../context/LanguageContext';

export default function Terms() {
    const containerRef = useRef(null);
    const { isEn } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.terms-reveal',
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.06,
                    ease: 'power2.out',
                    force3D: true,
                    clearProps: 'transform,opacity',
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const sections = [
        { id: 'oggetto', label: isEn ? '1. Services' : '1. Servizi' },
        { id: 'obblighi', label: isEn ? '2. Obligations' : '2. Obblighi' },
        { id: 'pagamenti', label: isEn ? '3. Payments' : '3. Pagamenti' },
        { id: 'recesso', label: isEn ? '4. Withdrawal' : '4. Recesso' },
        { id: 'backup', label: isEn ? '5. Liability & Backup' : '5. Responsabilità' },
        { id: 'proprieta', label: isEn ? '6. IP Rights' : '6. Proprietà' },
        { id: 'foro', label: isEn ? '7. Jurisdiction' : '7. Foro Competente' },
        { id: 'contatti-legali', label: isEn ? '8. Contacts' : '8. Contatti' },
    ];

    return (
        <section ref={containerRef} className="relative w-full min-h-screen px-4 sm:px-8 pb-24 pt-28 sm:pt-36 overflow-x-hidden">
            <PageBackground />

            <div className="relative z-10 max-w-4xl mx-auto w-full">
                {/* Top Navigation & Status */}
                <div className="terms-reveal flex items-center justify-between gap-4 mb-8 sm:mb-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs sm:text-sm font-mono text-gray-200 hover:text-white transition-[background-color,border-color,transform] hover:-translate-x-1 shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4 text-drago-accent" />
                        <span>{isEn ? 'Back to Drago Labs' : 'Torna a Drago Labs'}</span>
                    </a>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-drago-accent animate-pulse" />
                        <span className="text-xs font-mono text-gray-300">Contractual Transparency · 2026</span>
                    </div>
                </div>

                {/* Hero Header */}
                <header className="terms-reveal mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-flex items-center gap-2 mb-3.5 font-semibold">
                        <Scale className="w-3.5 h-3.5" />
                        <span>{isEn ? 'General Contract Terms' : 'Condizioni Generali di Contratto'}</span>
                    </span>
                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance">
                        {isEn ? 'Terms of Service' : 'Termini di Servizio'}
                    </h1>
                    <p className="mt-4 font-sans text-base sm:text-xl font-normal leading-relaxed text-gray-200 max-w-2xl mx-auto">
                        {isEn
                            ? 'General terms and engineering agreements governing custom software development and digital consulting by Drago Labs.'
                            : 'Condizioni generali di fornitura per i servizi di sviluppo software su misura, piattaforme web e consulenza digitale di Drago Labs.'}
                    </p>

                    {/* Metadata tags */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-gray-300">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            {isEn ? 'Revision: August 2026' : 'Ultima revisione: Agosto 2026'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            D.Lgs. 206/2005 (Codice del Consumo)
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            {isEn ? 'Jurisdiction: Brindisi (Italy)' : 'Foro Competente: Brindisi'}
                        </span>
                    </div>

                    {/* Quick Section Jump Navigation */}
                    <nav aria-label="Indice dei termini" className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        {sections.map((sec) => (
                            <a
                                key={sec.id}
                                href={`#${sec.id}`}
                                className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
                            >
                                {sec.label}
                            </a>
                        ))}
                    </nav>
                </header>

                {/* Content Sections */}
                <div className="space-y-6 sm:space-y-8">

                    {/* Preamble / Introduction Card */}
                    <article className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {isEn ? (
                                <>Welcome to <strong>Drago Labs</strong>. These Terms of Service regulate access to this website and define the contractual relationship between <strong>Gianluca Dragone</strong> (operating as "Drago Labs" or "Provider"), based in Fasano (BR), Italy, and the client or user ("Client"). Formally accepting an estimate, contract, or paying an initial deposit constitutes full acceptance of these terms.</>
                            ) : (
                                <>Benvenuto su <strong>Drago Labs</strong>. I presenti Termini di Servizio disciplinano l’accesso al sito web nonché il rapporto contrattuale tra <strong>Gianluca Dragone</strong> (di seguito "Drago Labs" o "Fornitore"), con sede a Fasano (BR), Italia, e l’utente o committente (di seguito "Cliente"). L’accesso al sito, l’accettazione di una proposta economica o il versamento di un acconto costituiscono accettazione integrale e vincolante dei presenti termini.</>
                            )}
                        </p>
                    </article>

                    {/* Section 1: Scope of Services */}
                    <article id="oggetto" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '1. Scope of Professional Services' : '1. Oggetto dei Servizi Professionali'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Tailored software engineering and consulting' : 'Ingegnerizzazione digitale su misura'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-4">
                            {isEn
                                ? 'Drago Labs delivers professional digital engineering services, including custom website and web application development (React 19, serverless, tailored CMS), Core Web Vitals optimization, technical SEO, and IT maintenance.'
                                : 'Drago Labs offre prestazioni professionali nel settore digitale ed informatico, inclusi: progettazione e sviluppo di siti ed applicativi web su misura (React 19, architetture serverless, temi CMS sartoriali), ottimizzazione delle prestazioni estreme (Core Web Vitals), SEO tecnica e assistenza continuativa.'}
                        </p>
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {isEn
                                ? 'Every individual project is formalized via a detailed written agreement or estimate defining analytical scope of work, technical deliverables, estimated timelines, and compensation.'
                                : 'Ogni singolo incarico viene formalizzato tramite apposito preventivo o proposta d’accordo contenente la descrizione analitica dell’ambito d’intervento (scope of work), le tempistiche stimate ed il valore economico del servizio.'}
                        </p>
                    </article>

                    {/* Section 2: Acceptable Use */}
                    <article id="obblighi" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-sm">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '2. Acceptable Use & Client Obligations' : '2. Uso Accettabile ed Obblighi del Cliente'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Platform integrity and security standards' : 'Sicurezza dell’infrastruttura e correttezza'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'Users and clients agree to use the site and services lawfully and in good faith. The following actions are strictly prohibited:'
                                : 'L’Utente e il Cliente si impegnano ad utilizzare il sito ed i relativi servizi in buona fede e nel rispetto della legge. È severamente vietato:'}
                        </p>
                        <div className="space-y-2 mb-4">
                            {[
                                isEn ? 'Automated scraping, unauthorized penetration scans, or mass extraction of lab data;' : 'Eseguire scraping automatico non autorizzato o estrazione massiva di dati dal sito;',
                                isEn ? 'Attempting to breach, probe, or tamper with hosting infrastructure or deployment pipelines;' : 'Tentare di violare o eludere i sistemi di sicurezza, i server o le pipeline di Drago Labs;',
                                isEn ? 'Submitting malicious payloads, infected attachments, or unlawful requests via contact interfaces.' : 'Inviare tramite il form materiale contenente malware, codice dannoso o elementi lesivi dei diritti altrui.',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.025] border border-white/10 text-xs sm:text-sm text-gray-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Section 3: Payments & Fees */}
                    <article id="pagamenti" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Scale className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '3. Compensation & Payment Milestones' : '3. Corrispettivi e Condizioni di Pagamento'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Transparent billing and deposit terms' : 'Condizioni economiche e tracciabilità'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'Fees stated in project estimates are net of applicable tax or social contributions. Payments are completed via secure, traceable methods (bank wire transfer or explicitly agreed gateways).'
                                : 'I corrispettivi concordati nei preventivi si intendono al netto di eventuali rivalse fiscali o contributive applicabili. I pagamenti avvengono mediante metodi tracciabili e sicuri (bonifico bancario o canali espressamente concordati).'}
                        </p>
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {isEn
                                ? 'Unless explicitly agreed otherwise, project kickoff is subject to initial deposit confirmation. In case of payment delays, Drago Labs reserves the right to pause engineering activity until settled.'
                                : 'Salvo diverso accordo scritto, l’avvio dei lavori è subordinato all’avvenuto accredito dell’acconto iniziale pattuito. In caso di ritardo nei pagamenti, Drago Labs si riserva la facoltà di sospendere temporaneamente la fornitura fino a completo saldo.'}
                        </p>
                    </article>

                    {/* Section 4: Refund Policy & Withdrawal Right (Highlighted) */}
                    <article id="recesso" className="terms-reveal rounded-[2rem] border border-amber-500/35 bg-gradient-to-b from-amber-500/[0.06] to-black/60 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-amber-500/60 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-amber-500/20">
                            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-sm">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '4. Refund Policy & Right of Withdrawal' : '4. Politica di Rimborso e Diritto di Recesso'}
                                </h2>
                                <span className="text-xs font-mono text-amber-300">
                                    {isEn ? 'Custom bespoke goods exception (Art. 59 Consumer Code)' : 'Eccezione beni confezionati su misura (Art. 59 Codice del Consumo)'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn ? (
                                <>Web software, architectural design, and digital engineering services delivered by Drago Labs fall under the legal category of <strong>clearly customized and tailor-made goods</strong>.</>
                            ) : (
                                <>Le prestazioni di sviluppo software, design e consulenza ingegneristica personalizzata fornite da Drago Labs rientrano a tutti gli effetti nella categoria dei <strong>beni e servizi confezionati su misura o chiaramente personalizzati</strong>.</>
                            )}
                        </p>

                        <div className="p-4 rounded-xl bg-black/60 border border-amber-500/30 mb-3 text-xs sm:text-sm font-sans text-gray-200 leading-relaxed">
                            {isEn ? (
                                <>Pursuant to <strong>Art. 59, lett. c) and o) of the Italian Consumer Code (D.Lgs. 206/2005)</strong>, once project execution begins (formalized by deposit payment or proposal signing), the Right of Withdrawal is not applicable and disbursed deposits are non-refundable.</>
                            ) : (
                                <>Ai sensi dell’<strong>art. 59, lett. c) e o) del Codice del Consumo (D.Lgs. 206/2005)</strong>, una volta avviata l’esecuzione della prestazione (confermata con il pagamento dell’acconto o l’accettazione formale), il Diritto di Recesso non è applicabile e i corrispettivi versati non sono rimborsabili.</>
                            )}
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                            {isEn
                                ? 'In the event of unilateral client termination after kickoff, sums received will be retained as fair compensation for engineering hours and committed lab resources.'
                                : 'In caso di recesso anticipato del Cliente a lavori già avviati, i corrispettivi corrisposti saranno trattenuti a titolo di compenso per le ore di sviluppo svolte e la riserva di risorse impegnate nel laboratorio.'}
                        </p>
                    </article>

                    {/* Section 5: Liability & Backup Duty */}
                    <article id="backup" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '5. Limitation of Liability & Backup Duty' : '5. Limitazione di Responsabilità ed Obbligo di Backup'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Professional diligence and client data safety' : 'Diligenza professionale e salvaguardia dei dati'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'Drago Labs applies the highest engineering diligence. However, the Provider cannot be held liable for indirect damages, lost profits, or outages caused by third parties (such as cloud hosting providers, domain registrars, network backbones, or DDoS attacks).'
                                : 'Drago Labs garantisce di operare con la massima perizia e diligenza professionale. Tuttavia, il Fornitore non potrà essere ritenuto responsabile per ritardi, danni indiretti, mancati guadagni o disservizi imputabili a soggetti terzi (es. provider di hosting, registrar di domini, interruzioni di rete o attacchi esterni).'}
                        </p>

                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-3 flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <p className="font-sans text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                                {isEn
                                    ? 'It is the client’s sole responsibility to maintain updated backups of their databases, environments, and business files before and after any technical intervention.'
                                    : 'È responsabilità del Cliente provvedere alla conservazione di copie di backup aggiornate di tutti i propri dati, database ed ambienti applicativi prima e dopo ogni intervento tecnico straordinario.'}
                            </p>
                        </div>

                        <p className="font-sans text-xs text-gray-400 italic">
                            {isEn
                                ? 'To the maximum extent permitted by applicable law, total provider liability cannot exceed the actual amount collected for the specific service under dispute.'
                                : 'Nella misura massima consentita dalla legge applicabile, la responsabilità complessiva del Fornitore non potrà in nessun caso superare l’importo effettivamente incassato per la singola prestazione oggetto di contestazione.'}
                        </p>
                    </article>

                    {/* Section 6: Intellectual Property */}
                    <article id="proprieta" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '6. Intellectual Property & Code Ownership' : '6. Proprietà Intellettuale e Diritti d’Autore'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Ownership transfer and reusable tool licenses' : 'Trasferimento titolarità e licenze d’uso'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'All ownership rights over customized code and artwork created for the Client are transferred exclusively upon full financial settlement.'
                                : 'Tutti i diritti di proprietà sul codice personalizzato e sugli elaborati grafici realizzati per il Cliente vengono trasferiti a quest’ultimo solo ed esclusivamente ad avvenuto saldo integrale del corrispettivo pattuito.'}
                        </p>
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {isEn
                                ? 'Drago Labs retains authorship over generic framework components, reusable scripts, and internal lab tooling, granting the Client an irrevocable, perpetual, non-exclusive license to use them with the deployed project.'
                                : 'Drago Labs mantiene la titolarità ed il diritto morale d’autore sui componenti generici, script riutilizzabili e strumenti interni del laboratorio, per i quali concede al Cliente una licenza d’uso perpetua e non esclusiva unitamente all’opera realizzata.'}
                        </p>
                    </article>

                    {/* Section 7: Third-Party Services & Jurisdiction */}
                    <article id="foro" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Gavel className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '7. Governing Law & Jurisdiction' : '7. Legge Applicabile e Foro Competente'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Italian legal framework and venue' : 'Disciplina legale e composizione controversie'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'These Terms are governed and interpreted under the laws of the Republic of Italy. For any dispute regarding their validity, interpretation, or execution, exclusive territorial jurisdiction is vested in the Court of Brindisi (Italy), saving consumer rights established by imperative law.'
                                : 'I presenti Termini sono regolati ed interpretati secondo la legge italiana. Per qualsiasi controversia inerente alla validità, interpretazione o esecuzione delle presenti condizioni, la competenza territoriale esclusiva è devoluta al Foro di Brindisi, fatti salvi i fori inderogabili a tutela dei consumatori.'}
                        </p>
                    </article>

                    {/* Section 8: Legal Contacts Card */}
                    <article id="contatti-legali" className="terms-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? 'Legal & Contract Inquiries' : 'Comunicazioni Contrattuali e Assistenza'}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-md">
                                    {isEn
                                        ? 'For contract clarification, estimate requests, or formal notifications, contact Gianluca Dragone directly.'
                                        : 'Per richieste di chiarimento sui contratti, preventivi o comunicazioni legali è possibile contattare direttamente Gianluca Dragone.'}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href="https://wa.me/393939450653"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-sans text-xs font-bold transition-all shadow-sm"
                                >
                                    <Phone className="w-3.5 h-3.5" />
                                    <span>WhatsApp Lab</span>
                                </a>
                                <a
                                    href="mailto:info.dragolabs@gmail.com"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 font-sans text-xs font-bold transition-all shadow-md active:scale-95"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    <span>info.dragolabs@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
