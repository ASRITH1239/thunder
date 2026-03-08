import { motion } from 'framer-motion';
import { Shield, Target, MapPin } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-black pt-20">
            {/* Hero Header */}
            <section className="py-24 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-white/5 opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="heading-hero mb-6">
                        BORN IN <span className="text-zinc-500">BENGALURU</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
                        Built for India. Our mission is to end broken phone screens once and for all.
                    </p>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="section-label">Our Story</span>
                            <h2 className="heading-section mb-8">BUILT ON <span className="text-zinc-500">TRUST</span></h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    Thunder was founded with one mission — to end broken phone screens in India. We've seen thousands of people spend ₹10,000–₹40,000 replacing cracked screens. We built a better solution.
                                </p>
                                <p>
                                    Since our inception in Kammanahalli, we have protected over 5,000 devices across Bengaluru. We don't just sell a film; we stand behind it with a warranty that actually works.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-12 mt-12 bg-zinc-950 p-8 border border-white/5">
                                <div>
                                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">5,000+</div>
                                    <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Phones Protected</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white mb-2 tracking-tighter">1 Year</div>
                                    <div className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Standard Warranty</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
                            <img
                                src="/images/technician.jpeg"
                                alt="Thunder Technician"
                                className="relative z-10 rounded-soft w-full h-[600px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Target className="w-12 h-12 text-white opacity-20 mx-auto mb-10" />
                    <h2 className="heading-section mb-10 text-center mx-auto">
                        THE <span className="text-zinc-500">MISSION</span>
                    </h2>
                    <p className="text-3xl md:text-5xl text-white max-w-5xl mx-auto font-black leading-[1.1] tracking-tighter uppercase">
                        "To make every device in India unbreakable — invisibly, affordably, and with a guarantee."
                    </p>
                </div>
            </section>

            {/* Team / Founder Section */}
            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="section-label">Team</span>
                        <h2 className="heading-section">MEET THE <span className="text-zinc-500">TECH EXPERTS</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Founder", role: "Vision & Strategy", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop" },
                            { name: "Head Technician", role: "Quality Assurance", img: "/images/technician.jpeg" },
                            { name: "Team Lead", role: "Customer Experience", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group"
                            >
                                <div className="aspect-[4/5] mb-6 overflow-hidden rounded-soft bg-zinc-900 border-b border-white/5 transition-all duration-500">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-all duration-1000" />
                                </div>
                                <h4 className="text-white font-bold text-xl mb-1 tracking-tight">{member.name}</h4>
                                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
