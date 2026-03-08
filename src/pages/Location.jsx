import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Car } from 'lucide-react';

const Location = () => {
    return (
        <div className="bg-black pt-20">
            {/* Hero Header */}
            <section className="py-24 bg-zinc-950 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="heading-section mb-6 text-center mx-auto uppercase">
                        VISIT THE <span className="text-zinc-500">STORE</span>
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        Come experience the ultimate protection in Kammanahalli, Bengaluru.
                    </p>
                </div>
            </section>

            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="mb-12">
                                <span className="section-label mb-8">Kammanahalli Store</span>
                                <div className="space-y-12">
                                    <div className="flex gap-8">
                                        <div className="bg-white/5 p-4 rounded-apple shrink-0 h-fit border border-white/5">
                                            <MapPin className="text-white opacity-40 w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl font-bold uppercase tracking-tight mb-2">Address</p>
                                            <p className="text-zinc-400 leading-relaxed">1558/1, Sena Vihar, Kammanahalli, Bengaluru, Karnataka — 560043</p>
                                            <p className="text-zinc-600 mt-2 text-sm uppercase tracking-widest font-bold">Near Kammanahalli Chikka Circle</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="bg-white/5 p-4 rounded-apple shrink-0 h-fit border border-white/5">
                                            <Clock className="text-white opacity-40 w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl font-bold uppercase tracking-tight mb-2">Store Hours</p>
                                            <div className="text-zinc-400 space-y-1">
                                                <p>Monday – Saturday: <span className="text-white font-medium">10 AM – 8 PM</span></p>
                                                <p>Sunday: <span className="text-white font-medium">11 AM – 6 PM</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="bg-white/5 p-4 rounded-apple shrink-0 h-fit border border-white/5">
                                            <Phone className="text-white opacity-40 w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xl font-bold uppercase tracking-tight mb-2">Phone</p>
                                            <p className="text-zinc-400">+91 9071312304</p>
                                            <p className="text-zinc-600 mt-2 text-[10px] uppercase tracking-[0.3em] font-black">Tap to call</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="p-8 bg-zinc-950 border border-white/5">
                                    <Car className="text-white opacity-20 w-6 h-6 mb-6" />
                                    <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">Parking</h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">Easy street & 2-wheeler parking available.</p>
                                </div>
                                <div className="p-8 bg-zinc-950 border border-white/5">
                                    <Navigation className="text-white opacity-20 w-6 h-6 mb-6" />
                                    <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-widest">Landmark</h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">Close to Kammanahalli Main Road.</p>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=1558/1,Sena+Vihar,Kammanahalli,Bengaluru,560043"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary w-full text-center block"
                            >
                                Get Directions
                            </a>
                        </motion.div>

                        {/* Map/Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="aspect-square bg-zinc-950 overflow-hidden relative group">
                                <img
                                    src="/images/store.jpeg"
                                    alt="Kammanahalli Store Exterior"
                                    className="w-full h-full object-cover rounded-soft transition-opacity duration-1000"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white p-4 rounded-full shadow-2xl">
                                        <MapPin className="text-black w-8 h-8" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <img src="/images/store1.jpeg" alt="Store Side View" className="rounded-soft aspect-video object-cover transition-all duration-1000" />
                                <img src="/images/technician.jpeg" alt="Technician Workspace" className="rounded-soft aspect-video object-cover transition-all duration-1000" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
