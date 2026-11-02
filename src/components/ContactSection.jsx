import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── EmailJS config ─────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_fotx3un';
const EMAILJS_TEMPLATE_ID = 'template_x46ffwg';
const EMAILJS_PUBLIC_KEY = 'dqYhhUibb6KTjyw7A';

/* ── Typing placeholder hook ── */
function useTypingPlaceholder(text, delayMs = 0) {
    const [displayed, setDisplayed] = useState('');
    const [started, setStarted] = useState(delayMs === 0);

    useEffect(() => {
        if (!started) {
            const t = setTimeout(() => setStarted(true), delayMs);
            return () => clearTimeout(t);
        }
        if (displayed.length >= text.length) return;
        const speed = 1800 / text.length;
        const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
        return () => clearTimeout(t);
    }, [displayed, started, text, delayMs]);

    return displayed;
}

/* ── Animated input ── */
function AnimatedInput({ label, type = 'text', placeholder, value, onChange, name, autoComplete, required = false, error, delay = 0 }) {
    const [focused, setFocused] = useState(false);
    const typed = useTypingPlaceholder(placeholder, delay);
    const hasValue = value.length > 0;

    return (
        <div className="relative">
            <label
                htmlFor={name}
                className={`absolute left-4 font-sans text-base transition-all duration-200 pointer-events-none z-10
                    ${focused || hasValue
                        ? '-top-2.5 text-xs font-semibold text-drago-cyan bg-[#0f1a1e] px-1.5 rounded'
                        : 'top-3.5 text-gray-300'
                    }`}
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                autoComplete={autoComplete}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={focused ? typed + (typed.length < placeholder.length ? '|' : '') : ''}
                className={`w-full bg-white/5 border rounded-xl px-4 pt-5 pb-3 font-sans text-base sm:text-lg text-white outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-drago-accent/70 placeholder-gray-400
                    ${error ? 'border-red-400' : focused ? 'border-drago-accent' : 'border-white/20'}`}
            />
            {error && <p id={`${name}-error`} className="mt-2 text-sm text-red-300" role="alert">{error}</p>}
        </div>
    );
}

/* ── Animated textarea ── */
function AnimatedTextarea({ label, placeholder, value, onChange, name, required = false, error, delay = 0 }) {
    const [focused, setFocused] = useState(false);
    const typed = useTypingPlaceholder(placeholder, delay);
    const hasValue = value.length > 0;

    return (
        <div className="relative">
            <label
                htmlFor={name}
                className={`absolute left-4 font-sans text-base transition-all duration-200 pointer-events-none z-10
                    ${focused || hasValue
                        ? '-top-2.5 text-xs font-semibold text-drago-cyan bg-[#0f1a1e] px-1.5 rounded'
                        : 'top-3.5 text-gray-300'
                    }`}
            >
                {label}
            </label>
            <textarea
                name={name}
                id={name}
                value={value}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rows={4}
                placeholder={focused ? typed + (typed.length < placeholder.length ? '|' : '') : ''}
                className={`w-full bg-white/5 border rounded-xl px-4 pt-5 pb-3 font-sans text-base sm:text-lg text-white outline-none resize-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-drago-accent/70 placeholder-gray-400
                    ${error ? 'border-red-400' : focused ? 'border-drago-accent' : 'border-white/20'}`}
            />
            {error && <p id={`${name}-error`} className="mt-2 text-sm text-red-300" role="alert">{error}</p>}
        </div>
    );
}

export default function ContactSection() {
    const containerRef = useRef(null);
    const formRef = useRef(null);

    const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' });
    const [privacy, setPrivacy] = useState(false);
    const [status, setStatus] = useState('idle');
    const [showErrors, setShowErrors] = useState(false);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const errors = {
        nome: form.nome.trim() ? '' : 'Inserisci nome e cognome.',
        email: !form.email.trim() ? 'Inserisci un indirizzo email.' : !emailIsValid ? 'Inserisci un indirizzo email valido.' : '',
        messaggio: form.messaggio.trim() ? '' : 'Descrivi brevemente come possiamo aiutarti.',
        privacy: privacy ? '' : 'Devi prendere visione dell’informativa privacy per inviare la richiesta.',
    };
    const isValid = !Object.values(errors).some(Boolean);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowErrors(true);
        if (status === 'sending' || !isValid) {
            const firstInvalid = Object.keys(errors).find((field) => errors[field]);
            document.getElementById(firstInvalid)?.focus();
            return;
        }

        setStatus('sending');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.nome,
                    from_email: form.email,
                    telefono: form.telefono,
                    message: form.messaggio,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setForm({ nome: '', email: '', telefono: '', messaggio: '' });
            setPrivacy(false);
            setShowErrors(false);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-reveal', 
                { y: 35, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'power3.out',
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contatti" ref={containerRef} className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] relative z-10">

                {/* ── Header ── */}
                <div className="contact-reveal mx-auto mb-16 max-w-3xl text-center">
                    <span className="font-mono text-xs text-drago-accent uppercase tracking-widest px-3.5 py-1 rounded-full border border-drago-accent/30 bg-drago-accent/10 inline-block mb-3">
                        Iniziamo Insieme
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight text-balance">
                        Hai un progetto in mente?
                    </h2>
                    <p className="mt-4 font-sans text-lg sm:text-2xl font-normal leading-relaxed text-gray-200">
                        Raccontami cosa vorresti realizzare. La prima consulenza è sempre gratuita e senza impegno.
                    </p>
                </div>

                {/* ── Two-column grid — Form LEFT, Info RIGHT (widescreen balanced) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* ── LEFT: Form (7 cols) ── */}
                    <div className="contact-reveal lg:col-span-7 rounded-[2rem] border border-white/10 bg-drago-text/40 shadow-2xl backdrop-blur-xl p-7 sm:p-10 hover:border-drago-accent/60 transition-all">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-4" role="status" aria-live="polite">
                                <div className="w-16 h-16 rounded-full bg-drago-accent/20 border border-drago-accent/40 flex items-center justify-center mb-2">
                                    <Mail className="w-7 h-7 text-drago-accent" />
                                </div>
                                <h3 className="font-display font-bold text-2xl text-white">Richiesta inviata con successo!</h3>
                                <p className="font-sans font-light text-gray-300 max-w-xs">
                                    Ti risponderò il prima possibile. Grazie per aver contattato Drago Labs!
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-drago-accent text-sm underline underline-offset-2 hover:text-drago-accent/80 transition-colors"
                                >
                                    Invia un altro messaggio
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
                                    Richiedi una consulenza
                                </h3>

                                {showErrors && !isValid && (
                                    <p className="rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
                                        Controlla i campi evidenziati prima di inviare la richiesta.
                                    </p>
                                )}

                                <AnimatedInput label="Nome e Cognome *" name="nome" placeholder="Mario Rossi" value={form.nome} onChange={handleChange} autoComplete="name" required error={showErrors ? errors.nome : ''} delay={300} />
                                <AnimatedInput label="Email *" type="email" name="email" placeholder="mario.rossi@email.it" value={form.email} onChange={handleChange} autoComplete="email" required error={showErrors ? errors.email : ''} delay={600} />
                                <AnimatedInput label="Telefono (opzionale)" type="tel" name="telefono" placeholder="+39 340 123 4567" value={form.telefono} onChange={handleChange} autoComplete="tel" delay={900} />
                                <AnimatedTextarea label="Come posso aiutarti? *" name="messaggio" placeholder="Descrivi il tuo progetto: sito web, gestionale, e-commerce o consulenza..." value={form.messaggio} onChange={handleChange} required error={showErrors ? errors.messaggio : ''} delay={1200} />

                                {/* Error message */}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm font-sans" role="alert">
                                        Qualcosa è andato storto. Riprova o scrivimi direttamente a{' '}
                                        <a href="mailto:info.dragolabs@gmail.com" className="underline">info.dragolabs@gmail.com</a>.
                                    </p>
                                )}

                                {/* Privacy */}
                                <div className="pt-2">
                                    <label htmlFor="privacy" className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            id="privacy"
                                            name="privacy"
                                            type="checkbox"
                                            checked={privacy}
                                            onChange={(e) => setPrivacy(e.target.checked)}
                                            required
                                            aria-invalid={Boolean(showErrors && errors.privacy)}
                                            aria-describedby={showErrors && errors.privacy ? 'privacy-error' : undefined}
                                            className="sr-only peer"
                                        />
                                        <span aria-hidden="true" className={`w-5 h-5 mt-0.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-drago-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#0f1a1e]
                                            ${privacy ? 'bg-drago-accent border-drago-accent' : showErrors && errors.privacy ? 'border-red-400' : 'border-white/30 group-hover:border-drago-accent/60'}`}>
                                        {privacy && (
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                        </span>
                                        <span className="font-sans text-base text-gray-200 font-normal">Ho preso visione dell’Informativa Privacy.</span>
                                    </label>
                                    <a href="/privacy" target="_blank" rel="noreferrer" className="ml-8 text-sm text-drago-cyan underline underline-offset-2 hover:text-white">Leggi l’Informativa Privacy</a>
                                    {showErrors && errors.privacy && <p id="privacy-error" className="mt-2 text-sm text-red-300" role="alert">{errors.privacy}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-4.5 rounded-xl font-sans font-bold text-base sm:text-lg text-white transition-all duration-300 mt-2
                                        ${status !== 'sending'
                                            ? 'bg-drago-accent hover:bg-drago-accent/90 hover:scale-[1.01] shadow-[0_0_25px_rgba(0,115,160,0.5)]'
                                            : 'bg-white/10 cursor-wait opacity-50'
                                        }`}
                                >
                                    {status === 'sending' ? 'Invio in corso...' : 'Invia la richiesta'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ── RIGHT: Info Cards (5 cols) ── */}
                    <div className="contact-reveal lg:col-span-5 flex flex-col gap-5">
                        {/* WhatsApp Priority Card */}
                        <a
                            href="https://wa.me/393939450653"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-[1.75rem] border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 p-7 backdrop-blur-xl transition-all duration-300 group flex items-start gap-4 hover:border-emerald-500/60 shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-[#25D366] group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.998l6.304-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.214-3.733.979 1-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.818 4.396 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818z"/>
                                </svg>
                            </div>
                            <div>
                                <span className="text-xs sm:text-sm font-mono uppercase text-emerald-300 tracking-wider font-bold">Canale Diretto Prioritario</span>
                                <h4 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">Chatta su WhatsApp</h4>
                                <p className="text-sm sm:text-base text-gray-200 mt-1.5 leading-relaxed">Risposta rapida per richieste urgenti o prime domande sul tuo progetto.</p>
                                <span className="text-base sm:text-lg font-mono text-emerald-300 mt-3 block font-bold">+39 393 945 0653 →</span>
                            </div>
                        </a>

                        {/* Direct Info */}
                        <div className="rounded-[1.75rem] border border-white/10 bg-drago-text/40 p-7 backdrop-blur-xl space-y-5">
                            <a href="mailto:info.dragolabs@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-drago-accent/10 border border-drago-accent/30 flex items-center justify-center flex-shrink-0 text-drago-accent group-hover:scale-105 transition-transform">
                                    <Mail className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                                </div>
                                <div>
                                    <span className="text-xs sm:text-sm text-gray-300 block font-mono">Email diretta</span>
                                    <span className="text-base sm:text-lg font-semibold text-white group-hover:text-drago-cyan transition-colors">info.dragolabs@gmail.com</span>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-drago-accent/10 border border-drago-accent/30 flex items-center justify-center flex-shrink-0 text-drago-accent">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs sm:text-sm text-gray-300 block font-mono">Sede & Raggio d'azione</span>
                                    <span className="text-base sm:text-lg font-semibold text-white">Fasano (BR), Puglia — Clienti in tutta Italia da remoto</span>
                                </div>
                            </div>
                        </div>

                        {/* Operational Card */}
                        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                            <span className="text-xs sm:text-sm font-mono text-drago-cyan uppercase tracking-wider block mb-2 font-bold">[ DISPONIBILITÀ ATTUALE ]</span>
                            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                                Attualmente disponibile per l'avvio di nuovi progetti, sviluppo applicativi e consulenze tecniche. Rispondo a ogni richiesta entro 24 ore lavorative.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
