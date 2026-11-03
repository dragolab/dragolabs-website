import { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw, ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PROMPTS_IT = [
    "Parlami dei progetti realizzati da Gianluca",
    "Che stack consiglieresti per la mia idea?",
    "Qual è il metodo di lavoro di Drago Labs?",
    "Quanto tempo richiede un progetto?",
    "Come richiedere una consulenza gratuita?",
    "Perché codice puro e zero builder pesanti?",
];

const PROMPTS_EN = [
    "Tell me about the projects Gianluca built",
    "What tech stack do you recommend for my idea?",
    "What is Drago Labs' engineering method?",
    "How long does a project take?",
    "How can I request a free consultation?",
    "Why pure code and zero heavy builders?",
];

function getArgoLocalResponse(rawQuery, isEn = false) {
    const q = rawQuery.toLowerCase();

    if (isEn) {
        if (q.includes('who are you') || q.includes('who r u') || q.includes('argo') || q.includes('introduce')) {
            return "I am **Argo**, the virtual AI assistant engineered inside **Drago Labs**.\n\nMy role is to explain Gianluca's engineering methodology, the technologies he uses, analyze the feasibility of your project idea, and guide you before talking directly with him.";
        }

        if (q.includes('recommend') || q.includes('my idea') || q.includes('my project') || q.includes('suitable') || q.includes('stack')) {
            return "If you have a project idea or want to understand what architecture fits best, here is what Gianluca evaluates:\n\n• **Showcase or Corporate Website**: custom bespoke WordPress theme without bloated builders or static React for <0.6s loads and immediate Google indexing.\n• **Web App / Internal Tools**: React 19, TypeScript, and serverless Edge backends for lightning-fast workflows and zero fixed monthly server costs.\n• **E-commerce**: lightweight catalog with Stripe/PayPal high-conversion checkouts.\n\nTell me a bit about your goal, audience, and timeline, and I will outline the architectural path Gianluca recommends!";
        }

        if (q.includes('vision') || q.includes('philosophy') || q.includes('classical') || q.includes('approach') || q.includes('why')) {
            return "The vision of **Drago Labs** stems from combining the **analytical and logical rigor of classical studies** with the **precision of software engineering**.\n\nGianluca does not build cookie-cutter websites with bloated templates and sluggish plugins. Every project is deconstructed to its core: clean code, instantaneous loading speeds, and bespoke design.";
        }

        if (q.includes('gianluca') || q.includes('founder') || q.includes('team') || q.includes('creator') || q.includes('who is')) {
            return "**Gianluca Dragone** is the founder and software developer of Drago Labs.\n\nWith a background in classical humanities and studying *Computer Science and Software Engineering* at the University of Bari 'Aldo Moro', he designs ultra-fast, scalable web architectures free from technical debt, serving clients worldwide from Fasano (Puglia, Italy).";
        }

        if (q.includes('palmisano') || q.includes('law') || q.includes('lawyer')) {
            return "For **Palmisano Environmental Law Firm** (a national benchmark in Italian environmental law), Gianluca engineered a strategic institutional platform:\n\n• **The Challenge**: Overcoming an obsolete website, conveying absolute institutional authority, and enabling lawyers to publish rulings independently.\n• **The Solution**: A tailored bespoke WordPress theme engineered from scratch without heavy page builders (no Elementor).\n• **Results**: Core Web Vitals score of **99/100**, loading in < 0.6s, specialized Schema.org structured data, and complete editorial autonomy for the legal staff.";
        }

        if (q.includes('vistamare') || q.includes('holiday')) {
            return "For **Casa Vacanze Vistamare**, Gianluca's strategy focused on economic disintermediation:\n\n• **The Challenge**: Eliminating dependency on OTA platforms (Booking/Airbnb) that take 15-20% commissions on every reservation.\n• **The Solution**: An immersive web app in React 19 + Tailwind CSS with high-definition coastal imagery and direct WhatsApp booking.\n• **Results**: 0% OTA fees on direct bookings, loading in under 0.5s, and zero monthly server maintenance costs via Edge serverless deployment.";
        }

        if (q.includes('projects') || q.includes('case studies') || q.includes('portfolio') || q.includes('works')) {
            return "In Gianluca's portfolio you will find case studies with diverse architectural demands:\n\n• **Palmisano Environmental Law**: bespoke WordPress theme, Core Web Vitals 99/100, zero builders.\n• **Casa Vacanze Vistamare**: React 19 web app with direct booking and Edge hosting.\n• **A Un Passo Dal Faro**: ultra-lightweight portal indexed on Google Maps.\n\nYou can explore each project in the **Project Theater** above!";
        }

        if (q.includes('cost') || q.includes('price') || q.includes('timeline') || q.includes('quote') || q.includes('how much') || q.includes('how long')) {
            return "Every project is bespoke: a professional showcase website typically takes **1 to 2 weeks**, while complex web applications or structured e-commerce platforms take a bit longer depending on functional scope.\n\nThe **initial consultation is always free and without obligation**: you can describe your idea via the contact form or message Gianluca directly on WhatsApp at [+39 393 945 0653](https://wa.me/393939450653)!";
        }

        if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('where')) {
            return "You can get in touch with Gianluca at any time:\n\n• **Direct WhatsApp**: [+39 393 945 0653](https://wa.me/393939450653)\n• **Email**: [info.dragolabs@gmail.com](mailto:info.dragolabs@gmail.com)\n• **Headquarters**: Fasano (BR), Italy — working with clients globally via remote pairing.\n\nOr simply fill out the form in the Contact section below!";
        }

        return "Thank you for asking! Inside **Drago Labs**, Gianluca engineers custom web solutions with an uncompromising focus on speed, clarity, and structural clean code.\n\nTell me about your project idea, or ask me about the architectures behind Gianluca's case studies!";
    }

    // Italian fallback
    if (q.includes('chi sei') || q.includes('tu chi') || q.includes('argo') || q.includes('presentati')) {
        return "Sono **Argo**, l'assistente virtuale integrato nel laboratorio di **Drago Labs**.\n\nIl mio compito è illustrarti il metodo di lavoro di Gianluca, lo stack tecnologico che impiega nei progetti, analizzare la fattibilità della tua idea e guidarti prima del contatto diretto con lui.";
    }

    if (q.includes('consigl') || q.includes('mia idea') || q.includes('mio progetto') || q.includes('adatto a me')) {
        return "Se hai in mente un progetto o vuoi capire quale soluzione si adatta meglio alle tue esigenze, ecco i fattori chiave che Gianluca valuta sempre:\n\n• **Sito Vetrina o Istituzionale**: tema WordPress sartoriale senza builder o codice React statico per caricamenti <0.6s e indicizzazione Google immediata.\n• **Web App / Gestionale Interno**: React 19, TypeScript e backend serverless Edge per flussi di lavoro rapidi e zero costi fissi di server.\n• **E-commerce**: catalogo leggero con checkout Stripe/PayPal ad alta conversione.\n\nDescrivimi brevemente cosa vorresti realizzare (obiettivo, pubblico, tempistiche) e ti dirò quale architettura consiglia Gianluca!";
    }

    if (q.includes('visione') || q.includes('filosofia') || q.includes('classico') || q.includes('approccio') || q.includes('perché')) {
        return "La visione di **Drago Labs** nasce dall'unione tra la **struttura logica e analitica degli studi classici** e il **rigore ingegneristico del software**.\n\nGianluca non crea siti fotocopia con template preconfezionati e plugin lenti. Ogni progetto viene decostruito alla radice per capire cosa serve davvero all'attività del cliente: codice pulito, tempi di caricamento istantanei e design sartoriale.";
    }

    if (q.includes('gianluca') || q.includes('fondatore') || q.includes('team') || q.includes('creatore') || q.includes('chi c\'è') || q.includes('chi c e')) {
        return "**Gianluca Dragone** è il fondatore e software developer di Drago Labs.\n\nCon una formazione classica e studi in *Informatica e Tecnologie per la Produzione del Software* all'Università degli Studi di Bari 'Aldo Moro', progetta architetture web veloci, scalabili e prive di compromessi tecnici, operando con clienti in tutta Italia da Fasano (Puglia).";
    }

    if (q.includes('palmisano') || q.includes('studio legale') || q.includes('avvocato')) {
        return "Per lo **Studio Legale Ambientale Palmisano** (riferimento nazionale nel diritto ambientale), Gianluca ha sviluppato un restyling strategico:\n\n• **La Sfida**: Superare un sito web obsoleto e trasmettere la massima autorevolezza istituzionale a magistrati, aziende e clienti, permettendo ai legali di pubblicare sentenze e articoli in autonomia.\n• **La Soluzione**: Un tema WordPress sviluppato da zero su misura, senza builder pesanti come Elementor.\n• **I Risultati**: Punteggio Core Web Vitals di **99/100**, caricamento in < 0.6s, dati strutturati Schema.org specialistici e autonomia editoriale completa per lo staff.";
    }

    if (q.includes('vistamare') || q.includes('casa vacanze')) {
        return "Per **Casa Vacanze Vistamare**, la strategia impostata da Gianluca mirava alla disintermediazione economica:\n\n• **La Sfida**: Ridurre la dipendenza dalle piattaforme OTA (Booking/Airbnb) che trattengono il 15-20% di commissioni su ogni soggiorno.\n• **La Soluzione**: Una web app immersiva in React 19 + Tailwind CSS con fotografia costiera ad alta definizione e canale diretto WhatsApp.\n• **I Risultati**: Commissioni azzerate sulle prenotazioni dirette, caricamento in meno di 0.5s e zero costi mensili fissi di server grazie al deploy serverless su Edge Vercel.";
    }

    if (q.includes('faro') || q.includes('aunpasso')) {
        return "Per **A Un Passo Dal Faro** (struttura turistica sulla costa pugliese):\n\n• **La Sfida**: Farsi scoprire da viaggiatori con connessioni mobili 4G/5G in mobilità.\n• **La Soluzione**: Portale ultra-leggero con georeferenziazione, mappe dei dintorni e richiesta disponibilità rapida.\n• **I Risultati**: Asset grafici WebP compressi, zero attese al caricamento e presenza indicizzata su Google Maps.";
    }

    if (q.includes('progetti') || q.includes('casi studio') || q.includes('portfolio') || q.includes('lavori')) {
        return "Nel portfolio di Gianluca trovi casi studio con requisiti ingegneristici molto differenti:\n\n• **Studio Legale Ambientale Palmisano**: sito web istituzionale in WordPress sartoriale, Core Web Vitals 99/100, zero builder.\n• **Casa Vacanze Vistamare**: web app React 19 ad alta risoluzione con prenotazione diretta WhatsApp ed Edge hosting.\n• **A Un Passo Dal Faro**: portale ultra-leggero geolocalizzato con SEO locale per Google Maps.\n\nPuoi esplorare ciascun progetto nel **Project Theater** qui sopra, testando anche la vista smartphone con Dynamic Island!";
    }

    if (q.includes('cosa fa') || q.includes('servizi') || q.includes('servizio') || q.includes('cosa offrite') || q.includes('cosa potete fare')) {
        return "Nel laboratorio di **Drago Labs**, Gianluca ingegnerizza:\n\n• **Siti Web & E-Commerce Sartoriali**: piattaforme ad alta conversione, veloci, responsive e senza plugin ingombranti.\n• **Web App & Piattaforme su Misura**: gestionali interni, dashboard operative e strumenti digitali proprietari.\n• **Workflow AI & Automazioni**: agenti intelligenti e integrazioni per eliminare attività ripetitive e velocizzare i processi aziendali.";
    }

    if (q.includes('tecnolog') || q.includes('stack') || q.includes('linguagg') || q.includes('framework') || q.includes('react') || q.includes('codice')) {
        return "Lo stack tecnologico che Gianluca impiega è incentrato su **prestazioni estreme, sicurezza e longevità**:\n\n• **Frontend**: React 19, JavaScript/TypeScript, Tailwind CSS, animazioni fluide con GSAP e build istantanee con Vite.\n• **Backend & Serverless**: Node.js, architetture Edge serverless su Vercel e database cloud ad alta velocità (PostgreSQL / Supabase).\n• **CMS Sartoriali**: WordPress configurato esclusivamente con temi proprietari scritti da zero in codice puro, senza builder terzi.\n• **AI**: Integrazioni mirate con modelli LLM per automazioni e assistenti intelligenti.";
    }

    if (q.includes('builder') || q.includes('elementor') || q.includes('divi') || q.includes('wix') || q.includes('wordpress')) {
        return "Nel laboratorio rifiutiamo l'uso di builder pesanti (come Elementor o Divi) perché sovraccaricano il browser con centinaia di script non necessari, peggiorando il posizionamento Google (Core Web Vitals) e rendendo il sito vulnerabile agli attacchi.\n\nSviluppando in **codice puro e temi sartoriali**, Gianluca garantisce tempi di caricamento istantanei (<0.6s) e una longevità incomparabile nel tempo.";
    }

    if (q.includes('calcio')) {
        return "Calcio Live è un progetto sperimentale interno di ricerca e sviluppo sui protocolli di streaming multimediale, non destinato alla vendita commerciale. Se cerchi soluzioni di streaming dati o video per il tuo business conforme alle normative, possiamo progettarne una personalizzata.";
    }

    if (q.includes('metodo') || q.includes('processo') || q.includes('come funziona') || q.includes('fasi') || q.includes('sviluppo')) {
        return "Il metodo di sviluppo di Gianluca si articola in 4 fasi rigorose:\n\n1. **Comprendere & Decostruire**: analisi degli obiettivi di business e delle priorità reali prima di scrivere una sola riga di codice.\n2. **Architettura & Design**: progettazione di flussi utente intuitivi e identità visiva coordinata.\n3. **Ingegneria & Sviluppo**: codice pulito, test di velocità (Lighthouse 98+) e responsive design fluido.\n4. **Autonomia & Formazione**: consegna della piattaforma con formazione per gestire i contenuti in totale libertà, più supporto continuativo.";
    }

    if (q.includes('preventivo') || q.includes('costo') || q.includes('prezzo') || q.includes('quanto costa') || q.includes('tempi') || q.includes('quanto tempo') || q.includes('iniziare')) {
        return "Ogni progetto è unico: un sito professionale o istituzionale richiede generalmente da **1 a 2 settimane**, mentre web app o e-commerce strutturati richiedono qualche settimana in più in base alle funzionalità richieste.\n\nLa **prima consulenza è sempre gratuita e senza impegno**: puoi descrivere la tua idea tramite il form in basso nella pagina oppure scrivere direttamente a Gianluca su WhatsApp al [+39 393 945 0653](https://wa.me/393939450653)!";
    }

    if (q.includes('contatt') || q.includes('email') || q.includes('telefono') || q.includes('whatsapp') || q.includes('dove')) {
        return "Puoi metterti in contatto con Gianluca in qualsiasi momento:\n\n• **WhatsApp Diretto**: [+39 393 945 0653](https://wa.me/393939450653)\n• **Email**: [info.dragolabs@gmail.com](mailto:info.dragolabs@gmail.com)\n• **Sede**: Fasano (BR), Puglia — operiamo con clienti in tutta Italia da remoto.\n\nOppure compila direttamente il form nella sezione Contatti qui in basso!";
    }

    return "Grazie per la domanda! Nel laboratorio di **Drago Labs**, Gianluca progetta prodotti web su misura con un forte accento su velocità, chiarezza e assenza di compromessi tecnici.\n\nPuoi parlarmi della tua idea di progetto, chiedermi quale architettura sarebbe ideale per te, o approfondire i casi studio reali.";
}

export default function ArgoConsole({ onClose, initialPrompt, isExpanded, onToggleExpand }) {
    const { isEn } = useLanguage();

    const initialWelcome = useMemo(() => {
        return isEn
            ? "Hello! I am **Argo**, Drago Labs' virtual AI assistant.\n\nHow can I help you today? You can describe your project idea, ask how Gianluca works, or explore the engineering choices behind his case studies."
            : "Ciao! Sono **Argo**, l'assistente virtuale di Drago Labs.\n\nCome posso aiutarti oggi? Puoi descrivermi la tua idea di progetto, chiedermi come lavora Gianluca o approfondire le scelte tecniche dei casi studio.";
    }, [isEn]);

    const [messages, setMessages] = useState([
        {
            id: 'welcome',
            sender: 'argo',
            text: initialWelcome,
            timestamp: 'Online',
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const sentInitialRef = useRef(false);

    const prompts = isEn ? PROMPTS_EN : PROMPTS_IT;

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
            let replyText = '';
            try {
                const res = await fetch('/api/argo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: query, language: isEn ? 'en' : 'it' }),
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.reply) replyText = data.reply;
                }
            } catch {
                // Network offline or local dev
            }

            if (!replyText) {
                await new Promise((r) => setTimeout(r, 450));
                replyText = getArgoLocalResponse(query, isEn);
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

    useEffect(() => {
        if (initialPrompt && !sentInitialRef.current) {
            sentInitialRef.current = true;
            handleSend(initialPrompt);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialPrompt]);

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
                text: isEn
                    ? "Chat reset. How can I help you? Choose one of the suggestions or ask me anything about your project!"
                    : "Chat reimpostata. Sono a tua disposizione: seleziona uno dei suggerimenti o chiedimi quello che desideri sul tuo progetto!",
                timestamp: 'Online',
            }
        ]);
    };

    const renderFormattedText = (txt) => {
        const lines = txt.split('\n');
        return lines.map((line, idx) => {
            if (!line.trim()) return <div key={idx} className="h-2" />;

            const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
            const cleanLine = isBullet ? line.trim().replace(/^[•-]\s*/, '') : line;

            // Tokenize by link [text](url), bold **bold**, or italic *italic*
            const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
            const parts = cleanLine.split(tokenRegex);

            const renderedParts = parts.map((part, pIdx) => {
                if (!part) return null;
                if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                    if (match) {
                        const [, label, url] = match;
                        return (
                            <a
                                key={pIdx}
                                href={url}
                                target={url.startsWith('http') ? '_blank' : undefined}
                                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-white underline underline-offset-4 decoration-drago-accent hover:text-drago-accent font-semibold transition-colors"
                            >
                                {label}
                            </a>
                        );
                    }
                }
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                    return <em key={pIdx} className="italic text-gray-200">{part.slice(1, -1)}</em>;
                }
                return part;
            });

            if (isBullet) {
                return (
                    <div key={idx} className="flex items-start gap-2.5 my-1.5 pl-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-drago-accent mt-2 flex-shrink-0" />
                        <p className="leading-relaxed text-sm sm:text-base text-gray-200 flex-1">
                            {renderedParts}
                        </p>
                    </div>
                );
            }

            return (
                <p key={idx} className="leading-relaxed text-sm sm:text-base text-gray-200 my-1">
                    {renderedParts}
                </p>
            );
        });
    };

    return (
        <div className="w-full rounded-[2.4rem] border border-white/15 bg-black/50 shadow-2xl backdrop-blur-2xl overflow-hidden flex flex-col h-full min-h-[640px] max-h-[720px] transition-all duration-300">
            {/* Top Bar / Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
                <div className="flex items-center gap-3.5">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-black shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-sans font-bold text-base sm:text-lg text-white">Argo</span>
                            {/* Live radar beacon indicator */}
                            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase">Live</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-mono">
                            {isEn ? "Drago Labs Virtual Assistant" : "Assistente Virtuale di Drago Labs"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {onToggleExpand && (
                        <button
                            onClick={onToggleExpand}
                            className="hidden sm:flex p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                            title={isExpanded ? (isEn ? 'Collapse view' : 'Riduci visuale') : (isEn ? 'Expand full width' : 'Espandi a tutta larghezza')}
                        >
                            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                    )}
                    <button
                        onClick={resetChat}
                        title={isEn ? "Reset conversation" : "Ricomincia conversazione"}
                        className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                    </button>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-sans font-medium text-gray-200 hover:text-white transition-all ml-1"
                            title={isEn ? "Back to card" : "Torna alla scheda descrittiva"}
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>{isEn ? "Card" : "Scheda"}</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex gap-3 max-w-[90%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                    >
                        {m.sender === 'argo' ? (
                            <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white mt-1">
                                <Sparkles className="w-3.5 h-3.5 text-drago-accent" />
                            </div>
                        ) : (
                            <div className="w-7 h-7 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0 text-white mt-1">
                                <User className="w-3.5 h-3.5" />
                            </div>
                        )}

                        <div
                            className={`rounded-2xl px-5 py-3.5 font-sans leading-relaxed text-sm sm:text-base ${
                                m.sender === 'user'
                                    ? 'bg-white text-black font-medium rounded-tr-sm shadow-md'
                                    : 'bg-white/[0.04] border border-white/15 text-gray-100 rounded-tl-sm shadow-md'
                            }`}
                        >
                            {m.sender === 'user' ? (
                                <p className="leading-relaxed">{m.text}</p>
                            ) : (
                                renderFormattedText(m.text)
                            )}
                            <div className={`text-[10px] mt-2 opacity-50 font-mono ${m.sender === 'user' ? 'text-right text-black' : 'text-left text-gray-400'}`}>
                                {m.timestamp}
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex gap-3 max-w-[80%]">
                        <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white mt-1 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5 text-drago-accent" />
                        </div>
                        <div className="rounded-2xl px-5 py-3.5 bg-white/[0.04] border border-white/15 text-gray-300 text-sm flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '300ms' }} />
                            <span className="text-xs font-mono text-gray-400 ml-1.5">
                                {isEn ? "Argo is thinking..." : "Argo sta elaborando..."}
                            </span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            <div className="px-5 py-2.5 border-t border-white/10 bg-black/40 flex gap-2 overflow-x-auto no-scrollbar">
                {prompts.map((promptString, i) => (
                    <button
                        key={i}
                        onClick={() => handleSend(promptString)}
                        disabled={isTyping}
                        className="whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-white/25 text-gray-300 hover:text-white transition-all flex-shrink-0 disabled:opacity-40"
                    >
                        {promptString}
                    </button>
                ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-black/70 border-t border-white/10 flex items-center gap-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isEn ? "Ask Argo about case studies, tech stack, or quote..." : "Chiedi ad Argo sui casi studio, stack o preventivo..."}
                    className="flex-1 bg-white/[0.05] border border-white/15 rounded-2xl px-5 py-3.5 text-sm sm:text-base font-sans text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    disabled={isTyping}
                />
                <button
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isTyping}
                    className="w-12 h-12 rounded-2xl bg-white text-black hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-white flex items-center justify-center transition-all flex-shrink-0 shadow-md active:scale-95"
                    title={isEn ? "Send message" : "Invia messaggio"}
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
