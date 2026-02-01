import { motion } from 'framer-motion';

export function Discovery() {
    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content - Magazine Style */}
                    <div className="order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 block"
                        >
                            Our Philosophy
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-8"
                        >
                            Silence the <br />
                            <span className="italic text-gray-400">Noise.</span>
                        </motion.h2>
                        <div className="h-px w-24 bg-gold/50 mb-8" />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gray-300 font-sans font-light leading-relaxed text-lg mb-8 max-w-md"
                        >
                            The modern pilgrimage is often a test of logistics, not spirit. We remove the burden of travel so your heart remains attached only to the Divine.
                        </motion.p>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h4 className="text-white font-serif text-2xl mb-2">Purity</h4>
                                <p className="text-gray-500 text-sm">Undistracted devotion through flawless execution.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-2xl mb-2">Presence</h4>
                                <p className="text-gray-500 text-sm">Be where your feet are. Leave the rest to us.</p>
                            </div>
                        </div>
                    </div>

                    {/* Images - Asymmetrical Editorial Layout */}
                    <div className="order-1 lg:order-2 relative h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute top-0 right-0 w-3/4 h-[400px] z-10"
                        >
                            <img
                                src="/pilgrim_courtyard.png"
                                alt="Spiritual Foundation"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/30 rounded-full flex items-center justify-center backdrop-blur-md">
                                <span className="text-white text-xs font-serif italic text-center">Spiritual<br />Focus</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-2/3 h-[350px] z-0"
                        >
                            <img
                                src="/alps_balcony.png"
                                alt="Global Discovery"
                                className="w-full h-full object-cover opacity-60 grayscale hover:opacity-100 transition-all duration-700"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
