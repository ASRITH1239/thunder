import { motion } from 'framer-motion';
import { Shield, BadgeCheck, Smartphone, Laptop, Watch, Tablet, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            id: "unbreakable",
            name: "Thunder Unbreakable",
            tagline: "The World's Strongest Phone Film. Period.",
            description: "Our flagship. Military-grade unbreakable protection engineered to survive real life. Ultra-thin, invisible, and remarkably tough.",
            features: ["Unbreakable", "Military Grade Material", "Self Healing", "Anti-Scratch", "Invisible", "Edge-to-Edge Protection", "Replacement Warranty*"],
            img: "/images/bounce.jpeg",
            color: "white"
        },
        {
            id: "clear",
            name: "Classic Clear",
            tagline: "Crystal Clear. Completely Invisible.",
            description: "Standard transparent screen guard for those who want maximum clarity. Perfect for AMOLED and high-resolution displays.",
            features: ["Military Grade", "Self Healing", "Anti-Scratch", "Invisible", "Edge-To-Edge", "Replacement Warranty*"],
            img: "/images/features.jpeg",
            color: "zinc-400"
        },
        {
            id: "matte",
            name: "Classic Matte",
            tagline: "Smooth Touch. Zero Glare.",
            description: "Anti-glare finish reduces reflections and fingerprints. Ideal for outdoor use and gamers who need smooth touch response.",
            features: ["Military Grade", "Anti-Scratch", "Invisible", "Edge-To-Edge", "Replacement Warranty*", "Anti-Glare Finish"],
            img: "/images/installation.jpeg",
            color: "zinc-600"
        },
        {
            id: "privacy",
            name: "Thunder Privacy",
            tagline: "Your Screen. Only For Your Eyes.",
            description: "Blocks side viewing from 30 degrees. Perfect for metros, cafes, and offices. Keep your sensitive data safe from prying eyes.",
            features: ["Anti-Peeping", "2-Way Privacy", "Data Protection", "Anti-Glare Finish", "Scratch Resistant", "Smudge Resistant", "Edge-To-Edge", "Replacement Warranty*"],
            img: "/images/priavcy example.jpeg",
            color: "zinc-800"
        },
        {
            id: "skins",
            name: "Thunder Skins",
            tagline: "Your Phone. Your Style. Infinite Designs.",
            description: "Premium vinyl wraps for your phone's back panel. Choose from 100s of designs from Graffiti to Carbon Fiber.",
            features: ["Protects Back Panel", "Scratch & Scuff Protection", "Slim And Lightweight", "Premium Look & Feel", "Global Style", "Replacement Warranty*"],
            img: "/images/skins.jpeg",
            color: "zinc-500"
        }
    ];

    return (
        <div className="bg-black pt-20">
            {/* Hero Header */}
            <section className="py-24 bg-zinc-950/20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="heading-section mb-6 text-center mx-auto text-shimmer">
                        THE <span className="text-zinc-500">LINEUP</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        From military-grade unbreakable films to stylish skins, we protect everything you love.
                    </p>
                </div>
            </section>

            {/* Product Detailed Sections */}
            {products.map((product, idx) => (
                <section key={product.id} className={`py-32 ${idx % 2 === 0 ? 'bg-black' : 'bg-zinc-950/50'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -70 : 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                            >
                                <span className="section-label">{product.name}</span>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter uppercase">{product.tagline}</h3>
                                <p className="text-zinc-400 text-lg mb-10 leading-relaxed">{product.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                    {product.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white/60">
                                            <div className="w-1 h-1 bg-white opacity-40 rounded-full" />
                                            <span className="text-sm font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href={`https://wa.me/919071312304?text=Hi, I want to book ${product.name} installation.`} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Book Installation
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 70 : -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                            >
                                <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="relative z-10 rounded-soft w-full h-auto object-contain shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* COMPARISON TABLE: CLEAR VS MATTE */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="heading-section mb-4 text-center mx-auto">CLEAR VS <span className="text-zinc-500">MATTE</span></h2>
                        <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Can't decide? Here's the breakdown.</p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-3xl rounded-[24px] border border-white/5 overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-widest font-black text-white/40">
                                    <th className="px-8 py-6">Feature</th>
                                    <th className="px-8 py-6">Classic Clear</th>
                                    <th className="px-8 py-6">Classic Matte</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { f: "Transparency", c: "100% Crystal", m: "Anti-Glare Silky" },
                                    { f: "Self-Healing", c: true, m: false },
                                    { f: "Fingerprint Proof", c: "Moderate", m: "100% Resistant" },
                                    { f: "Touch Feel", c: "Smooth Glass", m: "Satiny Smooth" },
                                    { f: "Best For", c: "Display Lovers", m: "Gamers & Outdoors" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="px-8 py-6 font-bold text-white tracking-tight">{row.f}</td>
                                        <td className="px-8 py-6 text-zinc-400">
                                            {typeof row.c === 'boolean' ? (row.c ? <Check className="text-white w-5 h-5 opacity-40" /> : <X className="text-zinc-800 w-5 h-5" />) : row.c}
                                        </td>
                                        <td className="px-8 py-6 text-zinc-400">
                                            {typeof row.m === 'boolean' ? (row.m ? <Check className="text-white w-5 h-5 opacity-40" /> : <X className="text-zinc-800 w-5 h-5" />) : row.m}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* MULTI-DEVICE SECTION */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Smartphone className="w-12 h-12 text-white/20 mx-auto mb-8" />
                    <h2 className="heading-section mb-8 text-center mx-auto">
                        WE PROTECT <span className="text-zinc-500">MORE</span> <br /> THAN JUST YOUR PHONE
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
                        {[
                            { icon: <Smartphone />, name: "Smartphones" },
                            { icon: <Laptop />, name: "Laptops" },
                            { icon: <Tablet />, name: "Tablets" },
                            { icon: <Watch />, name: "Smartwatches" }
                        ].map((device, i) => (
                            <div key={i} className="p-8 border border-white/5 bg-zinc-950 rounded-apple">
                                <div className="text-white opacity-20 w-8 h-8 mx-auto mb-4">{device.icon}</div>
                                <span className="text-white font-bold uppercase tracking-widest text-[10px]">{device.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-zinc-500 mb-10 text-xs uppercase tracking-widest font-bold">Pricing varies by device size — contact us or walk in for a quote.</p>
                    <Link to="/contact" className="btn-primary">Get a Quote</Link>
                </div>
            </section>
        </div>
    );
};

export default Products;
