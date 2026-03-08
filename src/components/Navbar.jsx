import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Location', path: '/location' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 glass-effect border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src="/images/loogoogo.png"
                                alt="THUNDER"
                                className="h-8 w-auto invert brightness-200 transition-opacity group-hover:opacity-70"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-zinc-500 hover:text-white px-1 py-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="btn-primary py-2 px-6 text-[10px] tracking-widest">
                                BOOK NOW
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-apple text-zinc-500 hover:text-white hover:bg-white/5 focus:outline-none transition-all"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/5 h-screen absolute top-0 left-0 w-full pt-20 px-6">
                    <div className="flex flex-col space-y-8 mt-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-400 hover:text-white text-2xl font-black tracking-tighter uppercase transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="btn-primary block w-full text-center py-5 uppercase tracking-widest text-sm"
                        >
                            Get Protected Now
                        </Link>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
