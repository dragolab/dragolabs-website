import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cookie, ShieldAlert, Lock, Settings, EyeOff, ArrowLeft, Sliders, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { useLanguage } from '../context/LanguageContext';

export default function CookiePolicy() {
    const containerRef = useRef(null);
    const { isEn } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.cookie-reveal',
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

    const handleOpenCookieSettings = () => {
        window.dispatchEvent(new Event('drago:open-cookie-settings'));
    };

    return (
        <section ref={containerRef} className="relative w-full min-h-screen px-4 sm:px-8 pb-24 pt-28 sm:pt-36 overflow-x-hidden">
            <PageBackground />

            <div className="relative z-10 max-w-4xl mx-auto w-full">
                {/* Top Navigation & Status */}
                <div className="cookie-reveal flex items-center justify-between gap-4 mb-8 sm:mb-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs sm:text-sm font-mono text-gray-200 hover:text-white transition-[background-color,border-color,transform] hover:-translate-x-1 shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4 text-drago-accent" />
                        <span>{isEn ? 'Back to Drago Labs' : 'Torna a Drago Labs'}</span>
                    </a>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-gray-300">Privacy-First Architecture</span>
                    </div>
                </div>

                {/* Hero Header */}
                <header className="cookie-reveal mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
                    <span className="font-mono text-xs sm:text-sm text-drago-accent uppercase tracking-widest px-4 py-1.5 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-flex items-center gap-2 mb-3.5 font-semibold">
                        <Cookie className="w-3.5 h-3.5" />
                        <span>{isEn ? 'Cookie Policy & Technical Inventory' : 'Inventario Cookie e Trasparenza'}</span>
                    </span>
                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance">
                        {isEn ? 'Cookie Policy' : 'Informativa sui Cookie'}
                    </h1>
                    <p className="mt-4 font-sans text-base sm:text-xl font-normal leading-relaxed text-gray-200 max-w-2xl mx-auto">
                        {isEn
                            ? 'Transparent inventory of technical cookies and statistical tracking systems deployed on Drago Labs.'
                            : 'Informativa chiara ed inventario completo sull’utilizzo dei cookie e degli strumenti di misurazione statistica su Drago Labs.'}
                    </p>

                    {/* Quick Preference Action Chip */}
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={handleOpenCookieSettings}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-drago-accent hover:bg-drago-accent/90 text-white font-sans text-xs sm:text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,115,160,0.4)] hover:scale-105 active:scale-95"
                        >
                            <Sliders className="w-4 h-4" />
                            <span>{isEn ? 'Open Cookie Preferences' : 'Gestisci Preferenze Cookie'}</span>
                        </button>
                        <span className="text-xs font-mono text-gray-400 px-3 py-2">
                            {isEn ? 'Revision: Autumn 2026' : 'Revisione: Autunno 2026'}
                        </span>
                    </div>
                </header>

                {/* Content Cards */}
                <div className="space-y-6 sm:space-y-8">

                    {/* Card 1: What are cookies */}
                    <article className="cookie-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '1. What are Cookies?' : '1. Cosa sono i Cookie?'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'How browser storage tokens operate' : 'Definizione e funzionamento tecnico'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-3">
                            {isEn
                                ? 'Cookies are small text files stored on your device by websites you visit. They are used to make sites operate correctly, remember preferences, and occasionally provide aggregate performance metrics.'
                                : 'I cookie sono piccoli frammenti di testo che un sito web invia al dispositivo dell’utente durante la navigazione. Vengono utilizzati per consentire il funzionamento tecnico essenziale, memorizzare preferenze di visualizzazione o raccogliere metriche statistiche in forma aggregata.'}
                        </p>
                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {isEn
                                ? 'At Drago Labs, we believe in extreme technical minimalism: we use the minimum data necessary and zero predatory trackers.'
                                : 'In Drago Labs adottiamo una filosofia di rigore ingegneristico: riduciamo all’essenziale qualsiasi strumento di terze parti, con zero profilazione pubblicitaria invasiva.'}
                        </p>
                    </article>

                    {/* Card 2: Inventory Table */}
                    <article className="cookie-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '2. Cookies Used on Drago Labs' : '2. Tipologie e Inventario dei Cookie'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Exact list of technical and analytical tokens' : 'Tabella analitica delle risorse memorizzate'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Technical Cookies */}
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                        <span className="font-sans font-bold text-sm sm:text-base text-white">
                                            {isEn ? 'Technical & Preference Cookies' : 'Cookie Tecnici & di Preferenza'}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                                        {isEn ? 'Always Active · Required' : 'Sempre Attivi · Essenziali'}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                                    {isEn
                                        ? 'Local storage keys such as `dragolabs_lang` (remembers language selection) and `drago_cookie_consent` (stores your analytics choice). They contain zero personal identifiers and never track you across other websites.'
                                        : 'Chiavi di memoria locale come `dragolabs_lang` (memorizza la lingua scelta tra IT ed EN) e `drago_cookie_consent` (memorizza se hai autorizzato o meno le statistiche). Non contengono dati personali e non consentono il tracciamento su altri siti.'}
                                </p>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2">
                                        <EyeOff className="w-4 h-4 text-drago-accent" />
                                        <span className="font-sans font-bold text-sm sm:text-base text-white">
                                            Google Analytics 4 (GA4)
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300">
                                        {isEn ? 'Requires Consent · Optional' : 'Richiede Consenso Esplicito'}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-2">
                                    {isEn
                                        ? 'Only loaded if you click "Accept" on the cookie banner. Uses identifiers `_ga` and `_ga_*` to measure aggregate visits, device resolution, and page speed.'
                                        : 'Viene caricato esclusivamente se l’utente clicca su "Accetta" nel banner iniziale. Utilizza i cookie `_ga` e `_ga_*` per raccogliere statistiche aggregate e anonime sulle visite e sulla velocità delle pagine.'}
                                </p>
                                <span className="text-xs font-mono text-gray-400 block">
                                    {isEn ? 'IP Anonymization: Active · Max Duration: 2 to 14 months' : 'Anonimizzazione IP: Attiva · Durata massima: da 2 a 14 mesi'}
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* Card 3: Zero Marketing Notice */}
                    <article className="cookie-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-sm">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '3. Absolute Absence of Advertising Profiling' : '3. Assoluta Assenza di Profilazione Pubblicitaria'}
                                </h2>
                                <span className="text-xs font-mono text-emerald-400">
                                    {isEn ? 'No Meta Pixel, No Google Ads, No Data Brokers' : 'Nessun Pixel Meta, nessun Google Ads, nessun retargeting'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-4">
                            {isEn
                                ? 'Drago Labs does not integrate Facebook Pixel, TikTok Pixel, Google Ads remarketing, or third-party ad networks. We build software and web architectures: we do not sell advertisement spaces or user tracking data.'
                                : 'Drago Labs non fa uso di Pixel di Facebook/Meta, tracker TikTok, Google Ads di remarketing o reti di profilazione commerciale. Sviluppiamo applicativi e architetture web: non vendiamo spazi pubblicitari né cediamo dati a broker di advertising.'}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono text-gray-300 text-center">
                            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                                <span className="text-emerald-400 font-bold block mb-1">0%</span>
                                <span>No Pixel Meta</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                                <span className="text-emerald-400 font-bold block mb-1">0%</span>
                                <span>No Google Ads Tag</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                                <span className="text-emerald-400 font-bold block mb-1">100%</span>
                                <span>{isEn ? 'Consent Respected' : 'Consenso Rispettato'}</span>
                            </div>
                        </div>
                    </article>

                    {/* Card 4: How to Manage or Revoke */}
                    <article className="cookie-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/10">
                            <div className="w-11 h-11 rounded-2xl bg-drago-accent/15 border border-drago-accent/40 flex items-center justify-center text-drago-accent flex-shrink-0 shadow-sm">
                                <Settings className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                                    {isEn ? '4. Manage or Revoke Consent at Any Moment' : '4. Come Modificare o Revocare il Consenso'}
                                </h2>
                                <span className="text-xs font-mono text-gray-400">
                                    {isEn ? 'Control choices via our panel or browser settings' : 'Libertà totale di scelta in ogni istante'}
                                </span>
                            </div>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-5">
                            {isEn
                                ? 'You can change your decision at any time. Clicking the button below opens the configuration panel where you can grant or revoke analytics consent instantly.'
                                : 'Puoi modificare la tua scelta in qualsiasi momento. Cliccando sul pulsante qui sotto puoi riaprire il pannello delle preferenze e aggiornare la tua decisione.'}
                        </p>

                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                            <div>
                                <h4 className="font-sans font-bold text-white text-sm sm:text-base">
                                    {isEn ? 'Drago Labs Preferences Center' : 'Centro Preferenze Drago Labs'}
                                </h4>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {isEn ? 'Revoke or enable Google Analytics with one tap' : 'Attiva o revoca le metriche statistiche con un clic'}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={handleOpenCookieSettings}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-sans text-xs font-bold hover:bg-gray-200 transition-all shadow-sm w-fit active:scale-95"
                            >
                                <Sliders className="w-3.5 h-3.5" />
                                <span>{isEn ? 'Change Choice' : 'Aggiorna Preferenza'}</span>
                            </button>
                        </div>

                        <p className="font-sans text-xs text-gray-400 leading-relaxed font-normal">
                            {isEn
                                ? 'You may also clear or block cookies globally through your browser settings (Chrome, Safari, Firefox, Microsoft Edge).'
                                : 'È inoltre possibile eliminare o bloccare i cookie direttamente dalle impostazioni di sicurezza del tuo browser (Chrome, Safari, Firefox, Microsoft Edge).'}
                        </p>
                    </article>

                    {/* Card 5: Controller & Contact */}
                    <article className="cookie-reveal rounded-[2rem] border border-white/15 bg-black/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-drago-accent/50 will-change-[transform,opacity]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                                    {isEn ? 'Questions regarding cookies?' : 'Domande sull’uso dei cookie?'}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                                    {isEn ? 'The Data Controller Gianluca Dragone is directly available.' : 'Il titolare Gianluca Dragone è a disposizione per chiarimenti.'}
                                </p>
                            </div>
                            <a
                                href="mailto:info.dragolabs@gmail.com"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs font-bold transition-all w-fit shadow-sm"
                            >
                                <Mail className="w-3.5 h-3.5 text-drago-accent" />
                                <span>info.dragolabs@gmail.com</span>
                            </a>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
