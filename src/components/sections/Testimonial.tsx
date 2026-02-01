import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonial() {
    return (
        <section className="py-32 bg-obsidian flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />

            <div className="container px-6 relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 inline-block text-gold opacity-50"
                >
                    <Quote size={48} />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-serif text-white leading-tight italic mb-12"
                >
                    "I have performed Umrah many times, but never with such <span className="text-gold">silence of mind</span>. The logistics simply vanished, leaving only the worship."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-2">Omar Al-Sayed</div>
                    <div className="text-xs text-gold tracking-widest uppercase opacity-70">Platinum Guest, 2024</div>
                </motion.div>
            </div>
        </section>
    );
}
