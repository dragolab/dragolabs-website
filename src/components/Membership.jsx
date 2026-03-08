export default function Membership() {
    return (
        <section className="py-32 relative overflow-hidden">


            <div className="container mx-auto px-6 relative z-10">
                <div className="glass max-w-4xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10">

                    <div className="absolute top-0 right-0 p-8 w-64 opacity-10">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="50" cy="50" r="40" />
                            <path d="M50 10V90M10 50H90" />
                        </svg>
                    </div>

                    <h2 className="font-serif italic text-4xl md:text-6xl mb-6">
                        Inizia il tuo <span className="text-drago-accent">progetto Labs</span>.
                    </h2>
                    <p className="font-sans text-drago-secondary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Consulenza strategica e sviluppo high-end. Richiedi una sessione esplorativa per valutare la digitalizzazione sartoriale della tua impresa.
                    </p>

                    <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-drago-accent rounded-full hover:bg-drago-accent/90 hover:scale-105 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Richiedi Consulenza
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
