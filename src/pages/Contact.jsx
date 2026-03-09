import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Instagram, Linkedin, Github } from 'lucide-react';

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
function AnimatedInput({ label, type = 'text', placeholder, value, onChange, name, delay = 0 }) {
    const [focused, setFocused] = useState(false);
    const typed = useTypingPlaceholder(placeholder, delay);
    const hasValue = value.length > 0;

    return (
        <div className="relative">
            <label
                className={`absolute left-4 font-sans text-sm transition-all duration-200 pointer-events-none z-10
                    ${focused || hasValue
                        ? '-top-2.5 text-xs text-drago-accent bg-[#0f1a1e] px-1 rounded'
                        : 'top-3.5 text-gray-400'
                    }`}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={focused ? typed + (typed.length < placeholder.length ? '|' : '') : ''}
                className={`w-full bg-transparent border rounded-xl px-4 pt-5 pb-3 font-sans text-base text-white outline-none transition-colors duration-200
                    ${focused ? 'border-drago-accent' : 'border-white/15'}`}
            />
        </div>
    );
}

/* ── Animated textarea ── */
function AnimatedTextarea({ label, placeholder, value, onChange, name, delay = 0 }) {
    const [focused, setFocused] = useState(false);
    const typed = useTypingPlaceholder(placeholder, delay);
    const hasValue = value.length > 0;

    return (
        <div className="relative">
            <label
                className={`absolute left-4 font-sans text-sm transition-all duration-200 pointer-events-none z-10
                    ${focused || hasValue
                        ? '-top-2.5 text-xs text-drago-accent bg-[#0f1a1e] px-1 rounded'
                        : 'top-3.5 text-gray-400'
                    }`}
            >
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                rows={5}
                placeholder={focused ? typed + (typed.length < placeholder.length ? '|' : '') : ''}
                className={`w-full bg-transparent border rounded-xl px-4 pt-5 pb-3 font-sans text-base text-white outline-none resize-none transition-colors duration-200
                    ${focused ? 'border-drago-accent' : 'border-white/15'}`}
            />
        </div>
    );
}

export default function Contact() {
    const containerRef = useRef(null);
    const formRef = useRef(null);

    const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' });
    const [privacy, setPrivacy] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const isValid = form.nome.trim() !== '' && form.email.trim() !== '' && form.messaggio.trim() !== '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!privacy || status === 'sending' || !isValid) return;

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
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from('.contact-reveal', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-56 pb-20 px-6 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/img/background.png" alt="" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-drago-bg" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* ── Header ── */}
                <div className="contact-reveal text-center mb-14">
                    <h1 className="font-sans font-bold text-5xl md:text-6xl text-drago-contrast mb-4">
                        Contattaci
                    </h1>
                    <p className="font-sans font-light text-lg md:text-xl text-gray-300">
                        Hai un progetto in mente?{' '}
                        <span className="text-drago-accent">Parliamone!</span>
                    </p>
                    <div className="w-24 h-[1px] bg-drago-accent mx-auto mt-8" />
                </div>

                {/* ── Two-column grid — Form LEFT, Info RIGHT ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">

                    {/* ── LEFT: Form ── */}
                    <div ref={formRef} className="contact-reveal glass rounded-2xl p-7 md:p-9 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.15)]">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-drago-accent/20 border border-drago-accent/40 flex items-center justify-center mb-2">
                                    <Mail className="w-7 h-7 text-drago-accent" />
                                </div>
                                <h3 className="font-sans font-bold text-2xl text-white">Richiesta inviata con successo!</h3>
                                <p className="font-sans font-light text-gray-300 max-w-xs">
                                    Ti risponderò appena possibile. Grazie per avermi contattato!
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-drago-accent text-sm underline underline-offset-2 hover:text-drago-accent/80 transition-colors"
                                >
                                    Invia un altro messaggio
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <h2 className="font-sans font-bold text-2xl text-white mb-1">
                                    Richiedi una consulenza
                                </h2>

                                <AnimatedInput label="Nome e Cognome *" name="nome" placeholder="Francesco Rossi" value={form.nome} onChange={handleChange} delay={300} />
                                <AnimatedInput label="Email *" type="email" name="email" placeholder="francescorossi@email.it" value={form.email} onChange={handleChange} delay={600} />
                                <AnimatedInput label="Telefono (opzionale)" type="tel" name="telefono" placeholder="+39 123 456 7890" value={form.telefono} onChange={handleChange} delay={900} />
                                <AnimatedTextarea label="Come posso aiutarti? *" name="messaggio" placeholder="Ciao Gianluca, vorrei digitalizzare la mia attività locale e avrei bisogno di una consulenza tecnica..." value={form.messaggio} onChange={handleChange} delay={1200} />

                                {/* Error message */}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm font-sans">
                                        Qualcosa è andato storto. Riprova o scrivimi direttamente a{' '}
                                        <a href="mailto:info.dragolabs@gmail.com" className="underline">info.dragolabs@gmail.com</a>.
                                    </p>
                                )}

                                {/* Privacy */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div
                                        className={`w-5 h-5 mt-0.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors duration-200
                                            ${privacy ? 'bg-drago-accent border-drago-accent' : 'border-white/30 group-hover:border-drago-accent/60'}`}
                                        onClick={() => setPrivacy((p) => !p)}
                                    >
                                        {privacy && (
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="font-sans text-sm text-gray-300">
                                        Ho letto e accetto la{' '}
                                        <a href="/privacy" className="text-drago-accent underline underline-offset-2 hover:text-drago-accent/80">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!privacy || status === 'sending' || !isValid}
                                    className={`w-full py-4 rounded-xl font-sans font-bold text-base text-white transition-all duration-300
                                        ${privacy && isValid && status !== 'sending'
                                            ? 'bg-drago-accent hover:bg-drago-accent/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,115,160,0.4)]'
                                            : 'bg-white/10 cursor-not-allowed opacity-50'
                                        }`}
                                >
                                    {status === 'sending' ? 'Invio in corso...' : 'Richiedi Consulenza'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ── RIGHT: Info ── */}
                    <div className="flex flex-col gap-6">

                        {/* Contact info blocks */}
                        {[
                            {
                                icon: <Phone className="w-5 h-5 text-drago-accent" />,
                                label: 'Telefono',
                                value: '+39 393 945 0653',
                                href: 'tel:+393939450653',
                            },
                            {
                                icon: <Mail className="w-5 h-5 text-drago-accent" />,
                                label: 'Email',
                                value: 'info.dragolabs@gmail.com',
                                href: 'mailto:info.dragolabs@gmail.com',
                            },
                            {
                                icon: <MapPin className="w-5 h-5 text-drago-accent" />,
                                label: 'Località',
                                value: 'Fasano, Italia — disponibilità anche da remoto',
                                href: null,
                            },
                        ].map((item, i) => (
                            <div key={i} className="contact-reveal glass rounded-2xl p-5 flex items-center gap-4 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]">
                                <div className="w-10 h-10 rounded-full bg-drago-accent/10 border border-drago-accent/30 flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-sans text-xs text-gray-400 mb-0.5">{item.label}</p>
                                    {item.href
                                        ? <a href={item.href} className="font-sans font-medium text-white hover:text-drago-accent transition-colors">{item.value}</a>
                                        : <p className="font-sans font-medium text-white">{item.value}</p>
                                    }
                                </div>
                            </div>
                        ))}

                        {/* Operational availability card */}
                        <div className="contact-reveal glass rounded-2xl p-6 [transition:border-color_0.4s,box-shadow_0.4s] hover:border-drago-accent hover:shadow-[0_0_24px_rgba(0,115,160,0.2)]">
                            <h3 className="font-sans font-bold text-lg text-white mb-4">
                                Disponibilità Operativa
                            </h3>
                            <div className="flex items-end gap-4 mb-3">
                                <span className="font-serif italic text-6xl text-drago-accent leading-none">H24</span>
                                <p className="font-sans font-light text-sm text-gray-300 pb-1 leading-snug">
                                    Risposta appena possibile<br />
                                    <span className="text-gray-400 text-xs">(compatibilmente con impegni universitari)</span>
                                </p>
                            </div>
                            <div className="h-[1px] bg-white/10 my-4" />
                            {/* Social icons */}
                            <div className="flex gap-4">
                                {[
                                    { href: 'https://wa.me/393939450653', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.998l6.304-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.214-3.733.979 1-3.648-.235-.374A9.818 9.818 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.818 4.396 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818z" /></svg>), label: 'WhatsApp' },
                                    { href: 'https://instagram.com/drago.labs', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                                    { href: 'https://linkedin.com/company/dragolab', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                                    { href: 'https://github.com/dragolab', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                                ].map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-drago-accent hover:border-drago-accent hover:bg-drago-accent/10 transition-all duration-300"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
