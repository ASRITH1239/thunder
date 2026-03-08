import { Shield, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-8">
                            <img
                                src="/images/loogoogo.png"
                                alt="THUNDER"
                                className="h-10 w-auto invert brightness-200"
                            />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest text-[11px] font-bold">
                            Bengaluru's #1 Screen Guard. <br /> Military Grade. Guaranteed.
                        </p>
                    </div>

                    <div>
                        <h3 className="section-label mb-8">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products" className="text-zinc-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Products</Link></li>
                            <li><Link to="/about" className="text-zinc-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">About Us</Link></li>
                            <li><Link to="/faq" className="text-zinc-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">FAQ</Link></li>
                            <li><Link to="/location" className="text-zinc-500 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-bold">Location</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="section-label mb-8">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                <Phone className="w-4 h-4 opacity-40" />
                                <span>9071312304</span>
                            </li>
                            <li className="flex items-start gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                <MapPin className="w-4 h-4 mt-0.5 opacity-40 shrink-0" />
                                <span className="leading-relaxed">Kammanahalli, Bengaluru</span>
                            </li>
                            <li className="flex items-center gap-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                                <Mail className="w-4 h-4 opacity-40" />
                                <span>contact@thunder.in</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="section-label mb-8">Social</h3>
                        <div className="flex gap-4 mb-12">
                            <a href="#" className="bg-white/5 p-4 rounded-apple hover:bg-white hover:text-black transition-all duration-300 border border-white/5">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="pt-8 border-t border-white/5">
                            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] block mb-4">Certified Armour</span>
                            <div className="flex gap-1">
                                <div className="h-0.5 w-12 bg-white/20"></div>
                                <div className="h-0.5 w-6 bg-white/10"></div>
                                <div className="h-0.5 w-3 bg-white/5"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
                        © {new Date().getFullYear()} Thunder Unbreakable Protection
                    </p>
                    <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                        Made in Bengaluru
                        <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
                        Premium Grade
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
