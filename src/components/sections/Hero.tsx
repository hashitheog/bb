import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-obsidian flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-obsidian z-10" />
                <img
                    src="/cinematic_hajj_crowd_hero.png"
                    alt="Hajj Pilgrims"
                    className="w-full h-full object-cover scale-110 opacity-60"
                />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <motion.div style={{ y: textY }} className="text-center">
                    {/* Main Title - Overlapping Editorial Style */}
                    <h1 className="relative z-10 flex flex-col items-center justify-center leading-[0.85] tracking-tighter">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-[15vw] md:text-[12vw] font-serif text-white mix-blend-difference z-20 relative">
                                IMUSAFIR
                            </span>
                            <span className="text-[4vw] md:text-[2vw] font-serif italic text-gold -mt-[2vw] md:-mt-[1vw] z-30 relative tracking-[0.2em] uppercase">
                                Beyond the Journey
                            </span>
                        </motion.div>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <div className="h-[1px] w-8 md:w-12 bg-gold/50" />
                        <span className="text-gold text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase">
                            Est. 1445 AH
                        </span>
                        <div className="h-[1px] w-8 md:w-12 bg-gold/50" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Begin</span>
            </motion.div>
        </div>
    );
}
