import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-black pt-20 pb-8 mt-auto">
            {/* Top Separator Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-px bg-white/50" />
            <div className="container mx-auto px-6">

                {/* Top Section - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16 text-center">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                                <img src="/img/logo-dragolabs.png" alt="Drago Labs Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-sans font-bold text-xl tracking-wide">Drago Labs</span>
                        </div>
                        <p className="font-sans text-drago-secondary text-sm leading-relaxed max-w-xs text-center">
                            Soluzioni per la crescita online del tuo business
                        </p>
                        <div className="flex flex-col items-start gap-4 mt-2">
                            <a href="https://www.linkedin.com/in/gianluca-dragone/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-drago-secondary hover:text-white transition-all group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all group-hover:scale-105 text-drago-secondary">
                                    <Linkedin className="w-4 h-4 group-hover:text-[#0a66c2]" />
                                </div>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <a href="https://www.instagram.com/gianl.drag" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-drago-secondary hover:text-white transition-all group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all group-hover:scale-105 text-drago-secondary">
                                    <Instagram className="w-4 h-4 group-hover:text-[#E1306C]" />
                                </div>
                                <span className="text-sm font-medium">Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center gap-4">
                        <h4 className="font-sans font-bold text-white mb-2">Link Rapidi</h4>
                        <nav className="flex flex-col items-center gap-3">
                            <Link to="/" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Home</Link>
                            <Link to="/chi-sono" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Chi Sono</Link>
                            <Link to="/servizi" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Servizi</Link>
                            <Link to="/portfolio" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Portfolio</Link>
                            <Link to="/blog" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Blog</Link>
                            <Link to="/contatti" className="text-drago-secondary hover:text-drago-accent transition-colors text-sm w-fit">Contatti</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contacts */}
                    <div className="flex flex-col items-center gap-4">
                        <h4 className="font-sans font-bold text-white mb-2">Contatti</h4>
                        <div className="flex flex-col items-start gap-4 mt-2">
                            <a href="https://wa.me/393939450653" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-drago-secondary hover:text-[#25D366] transition-all group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all group-hover:scale-105 text-drago-secondary">
                                    {/* Whatsapp SVG Path */}
                                    <svg className="w-4 h-4 group-hover:text-[#25D366] fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                    </svg>
                                </div>
                                <span className="text-sm">+39 393 945 0653</span>
                            </a>
                            <a href="mailto:info.dragolabs@gmail.com" className="flex items-center gap-3 text-drago-secondary hover:text-drago-accent transition-all group">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all group-hover:scale-105 text-drago-secondary">
                                    <Mail className="w-4 h-4 group-hover:text-drago-accent" />
                                </div>
                                <span className="text-sm">info.dragolabs@gmail.com</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section - Copyright & Legal */}
                <div className="w-[80%] mx-auto h-px bg-white/10 mb-6" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-4 text-xs font-mono text-drago-secondary">
                        <a href="#" className="hover:text-drago-accent transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-drago-accent transition-colors">Cookie Policy</a>
                    </div>

                    <p className="font-sans text-sm text-drago-secondary text-center md:text-right">
                        © 2026 Drago Labs. Tutti i diritti riservati.
                    </p>

                </div>

            </div>
        </footer>
    );
}
