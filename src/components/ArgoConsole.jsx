import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, CornerDownLeft, RefreshCw } from 'lucide-react';

const SUGGESTED_PROMPTS = [
    "Cosa fa esattamente Drago Labs?",
    "Quali tecnologie usate per i progetti?",
    "Parlami dello Studio Legale Palmisano",
    "Come funziona lo sviluppo di un sito?",
    "Come posso richiedere un preventivo?",
];

// Rich fallback knowledge engine: handles natural questions without requiring an external API key
function getArgoLocalResponse(rawQuery) {
    const q = rawQuery.toLowerCase();

    if (q.includes('chi sei') || q.includes('tu chi') || q.includes('argo') || q.includes('presentati')) {
        return "Sono **Argo**, l'assistente virtuale del laboratorio di **Drago Labs**. Sono stato addestrato per illustrarti le nostre competenze, il metodo di lavoro, lo stack tecnologico e orientarti nella scelta della soluzione ideale per la tua attività.";
    }

    if (q.includes('gianluca') || q.includes('fondatore') || q.includes('team') || q.includes('creatore') || q.includes('chi c\'è') || q.includes('chi c e')) {
        return "Drago Labs è fondata da **Gianluca Dragone**, software developer con formazione classica e studente di *Informatica e Tecnologie per la Produzione del Software* all'Università degli Studi di Bari 'Aldo Moro'. Combina rigore logico, cura del codice e attenzione al design per creare prodotti digitali veloci e affidabili.";
    }

    if (q.includes('cosa fa') || q.includes('servizi') || q.includes('servizio') || q.includes('cosa offrite') || q.includes('cosa potete fare')) {
        return "In **Drago Labs** realizziamo:\n\n• **Siti Web & Landing Page**: veloci, ottimizzati per la SEO e progettati su misura per convertire visitatori in clienti.\n• **Web App & Applicativi**: gestionali, piattaforme su misura e strumenti digitali interni.\n• **E-commerce**: negozi online curati con carrello, pagamenti sicuri e gestione semplice dei prodotti.\n• **Automazioni & Workflow AI**: integrazione di agenti intelligenti e flussi operativi automatizzati.\n• **Supporto IT Continuativo**: manutenzione, sicurezza e assistenza informatica.";
    }

    if (q.includes('tecnolog') || q.includes('stack') || q.includes('linguagg') || q.includes('framework') || q.includes('react') || q.includes('codice')) {
        return "Il nostro stack tecnologico è selezionato per garantire la **massima velocità, sicurezza e scalabilità**:\n\n• **Frontend**: React 19, JavaScript/TypeScript, Tailwind CSS, animazioni GSAP e Vite per build ultraleggere.\n• **Backend & Serverless**: Node.js, Python, architetture serverless su Vercel, Supabase e Neon PostgreSQL.\n• **CMS Custom**: WordPress configurato con temi sartoriali senza plugin pesanti quando il cliente desidera totale autonomia editoriale.\n• **AI & LLM**: Integrazioni con API avanzate (Google Gemini, agenti multiagente).";
    }

    if (q.includes('palmisano') || q.includes('studio legale') || q.includes('avvocato')) {
        return "Per lo **Studio Legale Ambientale Palmisano** abbiamo curato il restyling e lo sviluppo completo dell'identità digitale: un sito istituzionale autorevole, responsive, veloce e dotato di un sistema editoriale intuitivo per la pubblicazione autonoma di approfondimenti legali e aree di attività.";
    }

    if (q.includes('vistamare') || q.includes('casa vacanze')) {
        return "Per **Casa Vacanze Vistamare** abbiamo sviluppato un'applicazione web moderna e immersiva (React + Vite + Tailwind): valorizza la struttura sul mare con gallerie fotografiche fluide, dettagli sui servizi e un canale diretto per le richieste di prenotazione senza commissioni d'intermediazione.";
    }

    if (q.includes('calcio')) {
        return "Calcio Live è un progetto sperimentale interno di ricerca e sviluppo su protocolli di decodifica e streaming, non destinato all'offerta commerciale. Se cerchi soluzioni di streaming dati o video per il tuo business, possiamo progettarne una personalizzata e conforme.";
    }

    if (q.includes('metodo') || q.includes('processo') || q.includes('come funziona') || q.includes('fasi') || q.includes('sviluppo')) {
        return "Il nostro metodo di lavoro si divide in 4 fasi chiare:\n\n1. **Analisi preliminare gratuita**: ascoltiamo le tue esigenze e definiamo gli obiettivi reali.\n2. **Progettazione & UX**: definiamo la struttura, l'interfaccia e l'architettura dei dati.\n3. **Sviluppo sartoriale**: scriviamo codice pulito, responsive e ottimizzato nei minimi dettagli.\n4. **Collaudo, Deploy & Formazione**: pubblichiamo il sito e ti mostriamo come gestirlo in totale autonomia.";
    }

    if (q.includes('preventivo') || q.includes('costo') || q.includes('prezzo') || q.includes('quanto costa') || q.includes('tempi') || q.includes('quanto tempo') || q.includes('iniziare')) {
        return "Ogni progetto è unico: un sito vetrina o una landing page richiede solitamente da **1 a 2 settimane**, mentre web app o e-commerce strutturati richiedono qualche settimana in più in base alle funzionalità richieste.\n\nLa **prima consulenza è sempre gratuita e senza impegno**: puoi descriverci la tua idea tramite il form in basso nella pagina oppure scriverci direttamente su WhatsApp al **+39 393 945 0653**!";
    }

    if (q.includes('contatt') || q.includes('email') || q.includes('telefono') || q.includes('whatsapp') || q.includes('dove')) {
        return "Puoi metterti in contatto con Gianluca in qualsiasi momento:\n\n• **WhatsApp**: [+39 393 945 0653](https://wa.me/393939450653)\n• **Email**: [info.dragolabs@gmail.com](mailto:info.dragolabs@gmail.com)\n• **Sede**: Fasano (BR), Puglia — operiamo con clienti in tutta Italia e all'estero.\n\nOppure compila direttamente il form qui sotto per inviarci un messaggio immediato!";
    }

    return "Grazie per la domanda! In **Drago Labs** progettiamo siti web moderni, web app e soluzioni digitali ad alte prestazioni. Puoi approfondire i nostri servizi, chiederci informazioni su progetti passati, oppure raccontarci la tua idea tramite il modulo contatti a fondo pagina. Di cosa hai bisogno per la tua attività?";
}

export default function ArgoConsole() {
    const [messages, setMessages] = useState([
        {
            id: 'welcome',
            sender: 'argo',
            text: "Ciao! Sono **Argo**, l'assistente virtuale di Drago Labs. Come posso aiutarti oggi? Puoi chiedermi che tecnologie usiamo, come lavoriamo o descrivermi la tua idea di progetto.",
            timestamp: 'Online',
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (textToSend) => {
        const query = (textToSend || input).trim();
        if (!query || isTyping) return;

        const userMsg = {
            id: Date.now().toString(),
            sender: 'user',
            text: query,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            // Attempt to call the serverless API if available, otherwise fall back to local knowledge
            let replyText = '';
            try {
                const res = await fetch('/api/argo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: query }),
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.reply) replyText = data.reply;
                }
            } catch {
                // Network or local dev without serverless api
            }

            if (!replyText) {
                // Simulated thinking pause for organic conversational feel
                await new Promise((r) => setTimeout(r, 600));
                replyText = getArgoLocalResponse(query);
            }

            const argoMsg = {
                id: (Date.now() + 1).toString(),
                sender: 'argo',
                text: replyText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, argoMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const resetChat = () => {
        setMessages([
            {
                id: 'welcome',
                sender: 'argo',
                text: "Chat reimpostata. Sono a tua disposizione: seleziona una domanda o chiedimi qualsiasi cosa su Drago Labs!",
                timestamp: 'Online',
            }
        ]);
    };

    // Format bold and list markdown into simple clean JSX
    const renderFormattedText = (txt) => {
        const lines = txt.split('\n');
        return lines.map((line, idx) => {
            if (!line.trim()) return <div key={idx} className="h-2" />;

            // Replace **bold** with <strong>
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            const formatted = parts.map((part, pIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
                }
                return part;
            });

            return (
                <p key={idx} className="leading-relaxed">
                    {formatted}
                </p>
            );
        });
    };

    return (
        <div className="w-full rounded-[1.75rem] border border-white/10 bg-drago-text/40 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col h-[560px]">
            {/* Top Bar / Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-drago-accent/20 border border-drago-accent/40 flex items-center justify-center text-drago-accent">
                            <Bot className="w-5 h-5" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-sans font-bold text-sm text-white">Argo</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-drago-accent/20 text-drago-accent border border-drago-accent/30 uppercase tracking-wider">
                                Lab AI
                            </span>
                        </div>
                        <span className="text-xs text-gray-400">Interagisci con l'assistente del team</span>
                    </div>
                </div>

                <button
                    onClick={resetChat}
                    title="Ricomincia conversazione"
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex gap-3 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                    >
                        {m.sender === 'argo' ? (
                            <div className="w-7 h-7 rounded-full bg-drago-accent/20 border border-drago-accent/30 flex items-center justify-center flex-shrink-0 text-drago-accent mt-0.5">
                                <Sparkles className="w-3.5 h-3.5" />
                            </div>
                        ) : (
                            <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-gray-300 mt-0.5">
                                <User className="w-3.5 h-3.5" />
                            </div>
                        )}

                        <div
                            className={`rounded-2xl px-4 py-3 text-sm font-sans ${
                                m.sender === 'user'
                                    ? 'bg-drago-accent text-white rounded-tr-sm shadow-md'
                                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                            }`}
                        >
                            {renderFormattedText(m.text)}
                            <div className={`text-[10px] mt-1.5 opacity-40 font-mono ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                {m.timestamp}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex gap-3 max-w-[80%]">
                        <div className="w-7 h-7 rounded-full bg-drago-accent/20 border border-drago-accent/30 flex items-center justify-center flex-shrink-0 text-drago-accent mt-0.5 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div className="rounded-2xl px-4 py-3 bg-white/5 border border-white/10 text-gray-400 text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-drago-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-drago-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 rounded-full bg-drago-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/20 flex gap-1.5 overflow-x-auto no-scrollbar">
                {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <button
                        key={i}
                        onClick={() => handleSend(prompt)}
                        disabled={isTyping}
                        className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-sans bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all hover:border-drago-accent/50 flex-shrink-0 disabled:opacity-50"
                    >
                        {prompt}
                    </button>
                ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-black/40 border-t border-white/10 flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Chiedi ad Argo sul lavoro di Drago Labs..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-sans text-white placeholder-gray-400 focus:outline-none focus:border-drago-accent/80 transition-colors"
                    disabled={isTyping}
                />
                <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 rounded-xl bg-drago-accent hover:bg-drago-accent/90 disabled:opacity-40 disabled:hover:bg-drago-accent text-white flex items-center justify-center transition-all flex-shrink-0"
                    title="Invia messaggio"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
