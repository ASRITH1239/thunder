import React from 'react';
import { motion } from 'framer-motion';

const StormBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            {/* Primary Atmospheric Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-zinc-900/20 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -150, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-zinc-800/10 blur-[150px]"
            />

            {/* Moving Mesh Accents */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-zinc-900/40 blur-[100px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-black blur-[120px] rounded-full" />
            </div>

            {/* Subtle Grid for Technical Feel */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        </div>
    );
};

export default StormBackground;
