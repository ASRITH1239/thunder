import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 last:border-0 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-10 flex items-center justify-between text-left group"
            >
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-zinc-400 transition-colors uppercase tracking-tight pr-8">{question}</span>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-white text-black' : 'bg-white/5 text-zinc-500'} transition-all`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="pb-10 text-zinc-500 text-lg leading-relaxed max-w-4xl">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            q: "What is Thunder Unbreakable Protection?",
            a: "Thunder is a military-grade TPU phone protection film that prevents screen breakage. It's ultra-thin, invisible, and comes with a replacement warranty."
        },
        {
            q: "What is the difference between Classic Clear and Classic Matte?",
            a: "Classic Clear gives you crystal transparency — ideal for AMOLED displays. Classic Matte gives a smooth matte finish that reduces glare and fingerprints."
        },
        {
            q: "What is Thunder Privacy Screen Guard?",
            a: "Thunder Privacy blocks side-angle viewing — only the person directly facing the screen can see it. Perfect for offices, metros, and public spaces."
        },
        {
            q: "What are Thunder Skins?",
            a: "Skins are vinyl wraps for your phone's back panel — they add style and scratch protection without adding bulk. Available in 100+ designs."
        },
        {
            q: "Do you protect devices other than phones?",
            a: "Yes! We protect MacBooks, iPads, tablets, and smartwatches. Walk in or call for pricing."
        },
        {
            q: "How long does installation take?",
            a: "30 minutes. Walk-ins welcome at our Kammanahalli store. Doorstep installation also available."
        },
        {
            q: "What does the Replacement Warranty cover?",
            a: "If your screen breaks while using Thunder protection, we replace it within 1 year. T&C apply."
        },
        {
            q: "Does it work on foldable phones?",
            a: "Yes. Thunder works on foldables, curved screens, notched phones, and punch-hole displays."
        }
    ];

    return (
        <div className="bg-black pt-20">
            {/* Hero Header */}
            <section className="py-24 bg-zinc-950 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="heading-section text-center mx-auto mb-6">
                        HAVE <span className="text-zinc-500">QUESTIONS?</span>
                    </h1>
                    <p className="text-zinc-400 md:text-lg">
                        Everything you need to know about Bengaluru's toughest screen protection.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24 bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-zinc-950 p-8 md:p-16 rounded-[40px] border border-white/5">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <span className="section-label mb-8">Still have questions?</span>
                        <a href="https://wa.me/919071312304" className="btn-primary">Chat on WhatsApp</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
