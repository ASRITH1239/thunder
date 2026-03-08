import { motion } from 'framer-motion';
import { Shield, Play, BadgeCheck, Clock, Users, Globe, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const [heroIdx, setHeroIdx] = useState(0);
    const heroImages = ['/images/hero1.webp', '/images/hero2.webp', '/images/hero3.webp'];

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIdx((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black">
            {/* SECTION 1 — HERO */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 z-0">
                    {heroImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: heroIdx === idx ? 1 : 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>

                {/* Overlay with subtle darkening and bottom fade */}
                <div className="absolute inset-0 z-[1] bg-black/30 bg-gradient-to-b from-transparent via-black/20 to-black" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label">
                            Bengaluru's #1 Screen Protection
                        </span>
                        <h1 className="heading-hero mb-6">
                            YOUR PHONE IS <br />
                            <span className="text-white">UNBREAKABLE.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10">
                            Thunder Protection — Military Grade. Guaranteed. Engineered to survive Bengaluru's toughest drops.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                                <Shield className="w-5 h-5" />
                                Book Installation
                            </Link>
                            <button className="btn-secondary flex items-center gap-2 group">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                                    <Play className="fill-current w-4 h-4 ml-0.5" />
                                </div>
                                Watch Drop Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2 — TRUST STATS BAR */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-zinc-950 py-12 border-y border-white/5"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            { icon: <Users className="w-6 h-6" />, label: "5,000+", sub: "Customers" },
                            { icon: <Shield className="w-6 h-6" />, label: "1 Year", sub: "Warranty" },
                            { icon: <Clock className="w-6 h-6" />, label: "30 Mins", sub: "Install" },
                            { icon: <BadgeCheck className="w-6 h-6" />, label: "6+", sub: "Products" },
                            { icon: <Globe className="w-6 h-6" />, label: "All", sub: "Devices" },
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="text-white mb-3 opacity-60">{stat.icon}</div>
                                <div className="text-white text-2xl font-black tracking-tighter">{stat.label}</div>
                                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* SECTION 3 — PRODUCT INTRO */}
            <section className="py-24 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="section-label">Our Product</span>
                            <h2 className="heading-section mb-8">
                                THUNDER <span className="text-zinc-400">UNBREAKABLE</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                Bengaluru's premium phone protection. Ultra-thin, invisible, and engineered to survive real life — autos, concrete floors, crowded metros.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Unbreakable Protection",
                                    "Military Grade Material",
                                    "Self Healing Technology",
                                    "Anti-Scratch Coating",
                                    "Invisible Finish",
                                    "Edge-To-Edge Protection",
                                    "Replacement Warranty*"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white">
                                        <BadgeCheck className="text-white w-5 h-5 shrink-0 opacity-40" />
                                        <span className="font-medium text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products" className="btn-primary">Learn More</Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full z-0" />
                            <img
                                src="/images/features.jpeg"
                                alt="Thunder Unbreakable Features"
                                className="relative z-10 w-full max-h-[70vh] object-cover rounded-soft transition-all duration-1000 shadow-2xl border border-white/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — MULTI-DEVICE CALLOUT */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="order-2 lg:order-1"
                        >
                            <img
                                src="/images/skins.jpeg"
                                alt="Multi-Device Skins"
                                className="w-full max-h-[70vh] object-cover rounded-soft shadow-2xl border border-white/5"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-1 lg:order-2"
                        >
                            <span className="section-label">Multi-Device</span>
                            <h2 className="heading-section mb-8">
                                PROTECTION FOR <br /> <span className="text-zinc-400">ALL YOUR DEVICES</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                From iPhones to MacBooks, iPads to smartwatches — Thunder covers your entire tech life. One-stop solution for Bengaluru's gadget lovers.
                            </p>
                            <Link to="/products" className="btn-secondary">See All Products</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — PRODUCT CARDS GRID */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="heading-section mb-4 text-center mx-auto">CHOOSE YOUR <span className="text-zinc-500">ARMOUR</span></h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-[0.2em] text-[10px] font-bold">Premium protection for every need</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Thunder Unbreakable", features: ["Extreme Drop Proof", "Self Healing"], img: "/images/bounce.jpeg" },
                            { name: "Classic Clear", features: ["Crystal Transparent", "Invisible"], img: "/images/img2_8_4.avif" },
                            { name: "Classic Matte", features: ["Anti-Glare", "Anti-Fingerprint"], img: "/images/matte.jpeg" },
                            { name: "Thunder Privacy", features: ["Anti-Peeping", "Data Protection"], img: "/images/1_16_27.avif" },
                            { name: "Thunder Skins", features: ["Infinite Designs", "Slim Fit"], img: "/images/skins.jpeg" }
                        ].map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="card-premium group rounded-soft"
                            >
                                <div className="aspect-square mb-6 overflow-hidden bg-black rounded-soft">
                                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-all duration-1000" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{product.name}</h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((f, i) => (
                                        <span key={i} className="text-[9px] uppercase font-bold tracking-widest text-zinc-500 border border-white/10 px-2 py-1 rounded-full">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/products" className="btn-secondary w-full text-center block text-xs py-3">View Details</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — GUARANTEE BLOCK */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="glass-effect p-12 md:p-24 border border-white/5 flex flex-col md:flex-row items-center gap-16 rounded-soft"
                    >
                        <div className="flex-1">
                            <h2 className="heading-hero mb-8">
                                IF IT BREAKS — <br /><span className="text-zinc-500">WE REPLACE IT.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
                                Every Thunder product comes with a Replacement Warranty. Screen damage covered for 1 year. Walk into our Kammanahalli store — no hassle, no fine print.
                            </p>
                            <Link to="/contact" className="btn-primary">Check Your Warranty</Link>
                        </div>
                        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
                            <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-3xl">
                                <Shield className="w-24 h-24 md:w-32 md:h-32 text-white opacity-20" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 7 — WHY THUNDER? */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="section-label">Engineered For India</span>
                        <h2 className="heading-section">WHY <span className="text-zinc-500">THUNDER?</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { title: "UNBREAKABLE", desc: "Military grade materials that absorb impact and prevent shatter.", icon: <Shield /> },
                            { title: "SELF HEALING", desc: "Minor scratches disappear within 24 hours. Good as new, every day.", icon: <BadgeCheck /> },
                            { title: "ALL DEVICES", desc: "Phones, tablets, laptops, smartwatches. We cover them all.", icon: <Globe /> },
                            { title: "BENGALURU STORE", desc: "Walk in, installed in 30 min. Doorstep service available.", icon: <MapPin /> },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-black/40 border border-white/5 rounded-soft hover:border-white/20 transition-all duration-300">
                                <div className="text-white opacity-40 mb-6 w-10 h-10 flex items-center justify-center bg-white/5 rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-bold mb-4 uppercase tracking-tighter text-xl">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION — PRIVACY COMPARISON */}
            <section className="py-32 bg-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="section-label">Privacy Technology</span>
                            <h2 className="heading-section mb-8">THUNDER PRIVACY <br /><span className="text-zinc-500">VS NORMAL</span></h2>
                            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                                See the difference. Thunder Privacy Screen Guards use advanced micro-louver technology to block side views, keeping your sensitive information safe from "shoulder surfers" while maintaining 100% clarity for you.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white"></div>
                                    <span className="text-white text-xs font-bold uppercase tracking-widest">Only you see</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">They see black</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/images/priavcy example.jpeg"
                                alt="Privacy vs Normal Screen Comparison"
                                className="rounded-soft w-full max-h-[70vh] object-cover shadow-2xl border border-white/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="relative h-screen flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img src="/images/safe.webp" alt="Keep Your Phone Safe" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/40 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="ml-auto w-fit"
                    >
                        {/* Text is already in the image safe.webp */}
                        <div className="h-40" />
                        <Link to="/contact" className="btn-primary px-12 py-5 text-sm">Get Protected Now</Link>
                    </motion.div>
                </div>
            </section>

            {/* SECTION — PRIVACY & VARIETY SHOWCASE */}
            <section className="py-32 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="bg-black/40 p-10 rounded-soft border border-white/5 h-full flex flex-col"
                        >
                            <span className="section-label">Ultimate Privacy</span>
                            <h2 className="heading-section mb-8 text-3xl">THUNDER <span className="text-zinc-500">PRIVACY</span></h2>
                            <p className="text-zinc-400 text-sm mb-10 leading-relaxed flex-grow">
                                Protect your data from prying eyes. Our 2-way privacy filter ensures only you see what's on your screen, while maintaining crystal clear clarity for the user.
                            </p>
                            <img
                                src="/images/privacy.png"
                                alt="Thunder Privacy Features"
                                className="rounded-soft w-full h-80 object-contain shadow-2xl border border-white/5 mt-auto bg-zinc-900/50"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-zinc-900/40 p-10 rounded-soft border border-white/5 h-full flex flex-col"
                        >
                            <div className="text-right mb-auto">
                                <span className="section-label">Custom Style</span>
                                <h2 className="heading-section mb-8 text-3xl"><span className="text-zinc-500">BACK</span> CASES</h2>
                                <p className="text-zinc-400 text-sm mb-10 leading-relaxed ml-auto max-w-lg">
                                    Minimalist design, maximum protection. Our iPhones back cases are engineered with a plain white aesthetic to keep your device looking pristine.
                                </p>
                            </div>
                            <img
                                src="/images/phonesbackcases.avif"
                                alt="iPhone Back Cases Variety"
                                className="rounded-soft w-full h-80 object-contain shadow-2xl border border-white/5 mt-auto bg-white/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 — INSTALLATION SECTION */}
            < section className="py-24 bg-black overflow-hidden" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">Expert Application</span>
                            <h2 className="heading-section mb-10">
                                INSTALLED BY EXPERTS. <br /><span className="text-zinc-400">IN 30 MINUTES.</span>
                            </h2>

                            <div className="space-y-12">
                                {[
                                    { step: "01", title: "Choose Your Product", desc: "Pick from our 6 premium protection range online or at the store." },
                                    { step: "02", title: "Precision Cleaning", desc: "Our technician cleans your screen perfectly in a dust-free zone." },
                                    { step: "03", title: "Bubble-Free Apply", desc: "Film applied with surgical precision. Zero bubbles, zero dust." },
                                    { step: "04", title: "Ready To Drop", desc: "Done — your phone is now officially Thunder-protected." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <span className="text-5xl font-black text-white/5 group-hover:text-white transition-colors leading-none tracking-tighter">{item.step}</span>
                                        <div>
                                            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-[11px]">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn-primary mt-16 inline-block">Book Installation</Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
                            <img
                                src="/images/technician.jpeg"
                                alt="Expert Installation"
                                className="relative z-10 rounded-soft max-h-[70vh] w-full object-cover shadow-2xl border border-white/5"
                            />
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* SECTION 9 — LOCATION / STORE SECTION */}
            < section className="py-24 bg-zinc-950" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-effect p-8 md:p-12 rounded-[32px] border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-4 lg:p-8"
                        >
                            <h2 className="heading-section mb-8">VISIT OUR <br /><span className="text-zinc-500">BENGALURU STORE</span></h2>
                            <div className="space-y-8 mb-12">
                                <div className="flex gap-4">
                                    <MapPin className="text-white opacity-40 w-5 h-5 shrink-0" />
                                    <p className="text-zinc-400 text-sm">1558/1, Sena Vihar, Kammanahalli, Bengaluru, Karnataka — 560043</p>
                                </div>
                                <div className="flex gap-4 font-bold text-white uppercase tracking-widest text-[10px]">
                                    <Clock className="text-white opacity-40 w-5 h-5 shrink-0" />
                                    <div className="space-y-1">
                                        <p>Mon–Sat: 10 AM – 8 PM</p>
                                        <p>Sun: 11 AM – 6 PM</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/location" className="btn-primary w-full text-center block">Get Directions</Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full min-h-[400px]"
                        >
                            <img
                                src="/images/store.jpeg"
                                alt="Thunder Store Interior"
                                className="absolute inset-0 w-full h-full object-cover rounded-soft transition-all duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* SECTION 10 — INSTAGRAM REELS / SOCIAL PROOF */}
            < section className="py-24 bg-black" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div>
                            <h2 className="heading-section mb-4 text-center md:text-left">REAL TESTS. <span className="text-zinc-500">REAL THUNDER.</span></h2>
                            <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-bold">Follow us for extreme drop tests and new skins</p>
                        </div>
                        <a href="https://instagram.com/thunder.bengaluru" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2 py-3">
                            <Instagram className="w-4 h-4 opacity-60" />
                            @thunder.bengaluru
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { src: "/images/bounce.jpeg", alt: "Bounce Drop Test" },
                            { src: "/images/priavcy example.jpeg", alt: "Privacy Screen Comparison" },
                            { src: "/images/skins.jpeg", alt: "New Skins Arrival" },
                            { src: "/images/store1.jpeg", alt: "Store Front" },
                            { src: "/images/technician.jpeg", alt: "Precision Install" }
                        ].map((reel, i) => (
                            <div key={i} className="aspect-[9/16] bg-zinc-900 overflow-hidden group relative cursor-pointer">
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <Play className="w-10 h-10 text-white opacity-40 fill-current" />
                                </div>
                                <img
                                    src={reel.src}
                                    alt={reel.alt}
                                    className="w-full h-full object-cover rounded-soft transition-all duration-1000"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
