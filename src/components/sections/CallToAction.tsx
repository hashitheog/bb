import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function CallToAction() {
    return (
        <section className="py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="/hajj_hero.png" alt="Background" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-obsidian/90" />
            </div>

            <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-serif text-white mb-8"
                >
                    Ready for Sacred Clarity?
                </motion.h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
                    Your journey deserves the highest standard of care. Let us handle the world, so you can handle your heart.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button className="w-full sm:w-auto bg-gold hover:bg-white text-obsidian hover:text-obsidian rounded-none px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300">
                        Begin Consultation
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:border-gold hover:text-gold rounded-none px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300">
                        Download Brochure
                    </Button>
                </div>
            </div>
        </section>
    );
}
