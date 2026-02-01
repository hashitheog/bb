import { motion } from 'framer-motion';

const ethosItems = [
    {
        title: 'Transparent Pricing',
        description: 'Every cost accounted for. No hidden fees, just absolute clarity.',
    },
    {
        title: 'Digitally Managed',
        description: 'High-touch concierges meets high-tech precision. Seamless coordination.',
    },
    {
        title: 'Spiritually Guided',
        description: 'Itineraries that respect the soul, curated by scholars and historians.',
    },
];

export function Ethos() {
    return (
        <section className="relative py-24 px-4 bg-obsidian border-t border-white/5 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-6xl text-white leading-tight mb-8"
                    >
                        <span className="italic font-normal text-gray-400">The intersection of</span>
                        <br />
                        <span className="font-normal text-gold">ancient faith & modern grace.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 40 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="w-px bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0 mx-auto my-8"
                    />
                </div>

                {/* Minimalist Grid */}
                <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
                    {ethosItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="text-center group"
                        >
                            <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 font-sans font-light leading-relaxed text-sm max-w-xs mx-auto group-hover:text-gray-300 transition-colors duration-500">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
