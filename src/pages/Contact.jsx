import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, MapPin, BadgeCheck } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        device: '',
        product: 'Thunder Unbreakable',
        serviceType: 'Walk-in'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hi Thunder! My name is ${formData.name}. I'd like to book a ${formData.product} installation for my ${formData.device} (${formData.serviceType}). My phone is ${formData.phone}.`;
        window.open(`https://wa.me/919071312304?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-black pt-20">
            {/* Hero Header */}
            <section className="py-24 bg-zinc-950/20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center uppercase">
                    <h1 className="heading-section text-center mx-auto mb-6 text-shimmer">
                        BOOK YOUR <span className="text-zinc-500">ARMOUR</span>
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        Ready to make your phone unbreakable? Contact us or use our quick booking form.
                    </p>
                </div>
            </section>

            <section className="py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Methods */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="section-label mb-12">Get In Touch</span>

                            <div className="space-y-10">
                                <a href="https://wa.me/919071312304" className="flex items-center gap-8 group">
                                    <div className="bg-white/5 p-5 rounded-soft border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <MessageCircle className="w-8 h-8 opacity-40 group-hover:opacity-100" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-bold uppercase tracking-tight mb-1">WhatsApp Us</p>
                                        <p className="text-zinc-500">+91 9071312304</p>
                                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em] mt-2 block">Quick Response •⚡</span>
                                    </div>
                                </a>

                                <a href="tel:9071312304" className="flex items-center gap-8 group">
                                    <div className="bg-white/5 p-5 rounded-soft border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Phone className="w-8 h-8 opacity-40 group-hover:opacity-100" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-bold uppercase tracking-tight mb-1">Call Directly</p>
                                        <p className="text-zinc-500">9071312304</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-8 group">
                                    <div className="bg-white/5 p-5 rounded-soft border border-white/5">
                                        <MapPin className="text-white opacity-40 w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xl font-bold uppercase tracking-tight mb-1">Walk-In Store</p>
                                        <p className="text-zinc-500">Kammanahalli, Bengaluru</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 p-10 bg-zinc-950 border border-white/5 rounded-soft">
                                <div className="flex items-center gap-4 text-white mb-6">
                                    <BadgeCheck className="w-6 h-6 opacity-40" />
                                    <span className="font-bold uppercase tracking-widest text-xs">Thunder Guarantee</span>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest leading-loose">
                                    "Your installation is guaranteed bubble-free. If you're not happy, we reinstall it for free on the spot."
                                </p>
                            </div>
                        </motion.div>

                        {/* Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-zinc-950/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-soft h-full"
                        >
                            <h3 className="heading-section text-2xl mb-10 text-left">QUICK <span className="text-zinc-500">BOOKING</span></h3>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-black/50 border border-white/5 rounded-apple px-6 py-5 text-white focus:border-white/20 outline-none transition-all placeholder:text-zinc-700"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Enter phone number"
                                        className="w-full bg-black/50 border border-white/5 rounded-apple px-6 py-5 text-white focus:border-white/20 outline-none transition-all placeholder:text-zinc-700"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest ml-1">Device Model</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. iPhone 16 Pro Max"
                                        className="w-full bg-black/50 border border-white/5 rounded-apple px-6 py-5 text-white focus:border-white/20 outline-none transition-all placeholder:text-zinc-700"
                                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest ml-1">Product</label>
                                        <select
                                            className="w-full bg-black/50 border border-white/5 rounded-apple px-6 py-5 text-white focus:border-white/20 outline-none transition-all appearance-none"
                                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                        >
                                            <option>Thunder Unbreakable</option>
                                            <option>Classic Clear</option>
                                            <option>Classic Matte</option>
                                            <option>Thunder Privacy</option>
                                            <option>Thunder Skins</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest ml-1">Service</label>
                                        <select
                                            className="w-full bg-black/50 border border-white/5 rounded-apple px-6 py-5 text-white focus:border-white/20 outline-none transition-all appearance-none"
                                            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                        >
                                            <option>Walk-in</option>
                                            <option>Doorstep</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 mt-10 py-5">
                                    <Send className="w-5 h-5" />
                                    Book via WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
