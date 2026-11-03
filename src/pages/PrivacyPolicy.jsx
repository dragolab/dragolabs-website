import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Database, Mail, Shield, ArrowLeft, Lock, CheckCircle2, UserCheck, Clock } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
    const containerRef = useRef(null);
    const { isEn } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.privacy-reveal',
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.07,
                    ease: 'power2.out',
                    force3D: true,
                    clearProps: 'transform,opacity',
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen px-4 sm:px-8 pb-24 pt-28 sm:pt-36 overflow-x-hidden">
            <PageBackground />

            <div className="relative z-10 max-w-4xl mx-auto w-full">
                {/* Top Navigation & Status */}
                <div className="privacy-reveal flex items-center justify-between gap-4 mb-8 sm:mb-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs sm:text-sm font-mono text-gray-200 hover:text-white transition-[background-color,border-color,transform] hover:-translate-x-1 shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4 text-drago-accent" />
                        <span>{isEn ? 'Back to Drago Labs' : 'Torna a Drago Labs'}</span>
                    </a>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-gray-300">GDPR Compliant · 2026</span>
                    </div>
                </div>

                {/* Hero Header */}
                <header className="privacy-reveal mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-flex items-center gap-2 mb-3.5 font-semibold">
                        <Shield className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Data Protection & Transparency' : 'Protocollo di Trasparenza'}</span>
                    </span>
                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance">
                        {isEn ? 'Privacy Policy' : 'Informativa sulla Privacy'}
                    </h1>
                    <p className="mt-4 font-sans text-base sm:text-xl font-normal leading-relaxed text-gray-200 max-w-2xl mx-auto">
                        {isEn
                            ? 'How personal information submitted through the Drago Labs contact form is processed, secured, and retained.'
                            : 'Come vengono raccolti, protetti e conservati i dati inviati attraverso il modulo di contatto di Drago Labs.'}
                    </p>

                    {/* Metadata chips */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono text-gray-300">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            {isEn ? 'Updated: September 2026' : 'Ultimo aggiornamento: Settembre 2026'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                            {isEn ? 'Zero Commercial Resale' : 'Zero Cessione Commerciale'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            TLS / HTTPS Encrypted
                        </span>
                    </div>
                </header>

                {/* Main Content Cards */}
                <div className="space-y-6 sm:space-y-8">

                    {/* Card 1: Data Controller */}
                    <article className="privacy-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '1. Data Controller' : '1. Titolare del Trattamento'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Identity and direct legal contact' : 'Identità e recapiti del responsabile'}
                                </span>
                            </div>
                        </div>
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-4">
                            {isEn ? (
                                <>The Data Controller is <strong>Gianluca Dragone</strong>, operating as <strong>Drago Labs</strong>, based in Fasano (BR), Italy.</>
                            ) : (
                                <>Il titolare del trattamento dei dati è <strong>Gianluca Dragone</strong>, titolare del laboratorio digitale <strong>Drago Labs</strong>, con sede a Fasano (BR), Italia.</>
                            )}
                        </p>
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs sm:text-sm text-gray-300 font-mono">
                                {isEn ? 'Official privacy inquiry mailbox:' : 'Canale per richieste sui dati:'}
                            </span>
                            <a
                                href="mailto:info.dragolabs@gmail.com"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black font-sans text-xs font-bold hover:bg-gray-200 transition-colors shadow-sm w-fit"
                            >
                                <Mail className="w-3.5 h-3.5 text-black" />
                                <span>info.dragolabs@gmail.com</span>
                            </a>
                        </div>
                    </article>

                    {/* Card 2: Collected Data & Purposes */}
                    <article className="privacy-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '2. Collected Data & Legal Purpose' : '2. Dati Raccolti e Finalità del Trattamento'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Why we collect info and how it is used' : 'Cosa raccogliamo e perché'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-5">
                            {isEn
                                ? 'The contact form collects strictly the information required to analyze and answer your inquiry: your full name, email address, optional phone number, and message text.'
                                : 'Il modulo di contatto presente sul sito raccoglie esclusivamente le informazioni necessarie per dare riscontro alla tua richiesta: nome e cognome, indirizzo email, eventuale recapito telefonico e testo del messaggio.'}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                <div className="flex items-center gap-2 mb-1.5 text-white font-sans font-bold text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    <span>{isEn ? 'Pre-contractual Inquiry' : 'Riscontro e Preventivazione'}</span>
                                </div>
                                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                                    {isEn
                                        ? 'Used solely to reply to your project requirements and prepare customized estimates.'
                                        : 'Utilizzati unicamente per rispondere ai tuoi quesiti tecnici e formulare preventivi mirati.'}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                <div className="flex items-center gap-2 mb-1.5 text-white font-sans font-bold text-sm">
                                    <Lock className="w-4 h-4 text-drago-accent" />
                                    <span>{isEn ? 'No Marketing / No Profiling' : 'Nessuna Cessione o Profilazione'}</span>
                                </div>
                                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                                    {isEn
                                        ? 'Your data is never sold, leased, or transferred to third-party ad networks.'
                                        : 'I tuoi dati non vengono mai ceduti, venduti o impiegati per newsletter promozionali.'}
                                </p>
                            </div>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                            {isEn
                                ? 'Filling in the required fields is necessary to receive feedback. Data is retained only for the duration needed to evaluate the inquiry or manage professional contracts.'
                                : 'I campi contrassegnati come obbligatori sono indispensabili per gestire la richiesta. I dati vengono conservati per il tempo strettamente necessario a completare l’assistenza o gestire i rapporti contrattuali instaurati.'}
                        </p>
                    </article>

                    {/* Card 3: Technical Processors (EmailJS) */}
                    <article className="privacy-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '3. Technical Dispatch & Processors' : '3. Destinatari e Piattaforma di Invio'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Infrastructure and email routing' : 'Infrastruttura tecnologica e sicurezza'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-4">
                            {isEn
                                ? 'For instantaneous and reliable form transmission without intermediate database exposure, the site employs EmailJS. Messages are forwarded encrypted directly to the private mailbox of Drago Labs.'
                                : 'Per l’inoltro tempestivo e sicuro dei messaggi senza esposizione di database intermedi, il sito adotta il servizio tecnico EmailJS. I messaggi vengono instradati in forma cifrata direttamente verso la casella di posta riservata di Drago Labs.'}
                        </p>

                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5 text-xs font-mono text-gray-300">
                            <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>
                                {isEn ? 'Retention timeframe: limited to communication handling and applicable legal compliance.' : 'Termine di conservazione: limitato alla gestione della corrispondenza e agli obblighi fiscali applicabili.'}
                            </span>
                        </div>
                    </article>

                    {/* Card 4: User Rights (GDPR) */}
                    <article className="privacy-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <UserCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '4. Your GDPR Rights' : '4. Diritti dell’Interessato (GDPR)'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Access, deletion, rectification, and portability' : 'Controllo totale sui tuoi dati personali'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-4">
                            {isEn
                                ? 'Under articles 15-22 of EU Regulation 2016/679 (GDPR), you retain full rights over your data at any time:'
                                : 'In conformità agli articoli 15-22 del Regolamento UE 2016/679 (GDPR), puoi esercitare in qualsiasi momento i seguenti diritti:'}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 text-xs sm:text-sm font-sans text-gray-200">
                            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.025] border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-drago-accent flex-shrink-0" />
                                <span>{isEn ? 'Right to Access & Verification' : 'Diritto di Accesso e Verifica'}</span>
                            </div>
                            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.025] border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-drago-accent flex-shrink-0" />
                                <span>{isEn ? 'Right to Rectification & Update' : 'Diritto di Rettifica e Aggiornamento'}</span>
                            </div>
                            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.025] border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-drago-accent flex-shrink-0" />
                                <span>{isEn ? 'Right to Erasure (Right to be Forgotten)' : 'Diritto alla Cancellazione (Oblio)'}</span>
                            </div>
                            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.025] border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-drago-accent flex-shrink-0" />
                                <span>{isEn ? 'Right to Restriction & Objection' : 'Limitazione e Opposizione'}</span>
                            </div>
                        </div>

                        <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                            {isEn
                                ? 'To exercise any of these rights, write directly to info.dragolabs@gmail.com. You also maintain the right to lodge a complaint with the competent Data Protection Authority (Garante per la protezione dei dati personali).'
                                : 'Per esercitare uno qualsiasi di questi diritti è sufficiente inviare un’email a info.dragolabs@gmail.com. Hai inoltre sempre il diritto di proporre reclamo all’autorità di controllo competente (Garante Privacy).'}
                        </p>
                    </article>

                    {/* Bottom Prompt / Return Home */}
                    <div className="privacy-reveal pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <p className="font-sans text-xs text-gray-400">
                            {isEn ? 'Document Revision: 2.1 · Drago Labs Engineering' : 'Revisione Documento: 2.1 · Drago Labs Engineering'}
                        </p>
                        <a
                            href="/#contatti"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-sans text-xs font-bold hover:bg-gray-200 transition-all shadow-md active:scale-95"
                        >
                            <span>{isEn ? 'Go to Contact Section' : 'Vai alla Sezione Contatti'}</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
