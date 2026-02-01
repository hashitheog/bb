import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
    // We still keep the timer logic to ensure it finishes, 
    // but the visual is now pure Pulse/Heartbeat.

    useEffect(() => {
        const duration = 2500; // slightly more than 2s to allow a few beats

        const timeout = setTimeout(() => {
            onComplete();
        }, duration);

        return () => {
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative flex items-center justify-center">
                {/* 1. The Heartbeat Ripple (Echo) */}
                <motion.div
                    animate={{
                        scale: [1, 2.5],
                        opacity: [0.5, 0]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                    className="absolute inset-0 rounded-full bg-gold/10 blur-xl"
                />

                {/* 2. The Core Heartbeat */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1, 1.15, 1], // Lub-dub pattern
                    }}
                    transition={{
                        duration: 1.5, // Slow, calm heartbeat
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 1]
                    }}
                    className="relative z-10 w-24 h-24 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                >
                    <span className="text-4xl font-serif text-gold tracking-tighter">M</span>
                </motion.div>
            </div>

            {/* Typography - Breathing in sync */}
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-12 text-center"
            >
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-light">
                    Alive
                </p>
            </motion.div>
        </motion.div>
    );
}
