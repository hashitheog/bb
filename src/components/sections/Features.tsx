import { Compass, Building2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Compass,
        title: 'Bespoke Planning',
        description: 'Tailored itineraries that respect your time and intentions.',
    },
    {
        icon: Building2,
        title: 'Elite Accommodations',
        description: 'Prestigious suites overlooking the Harams with direct access.',
    },
    {
        icon: BookOpen,
        title: 'Expert Guidance',
        description: 'Deeply knowledgeable guides dedicated to your meaningful journey.',
    },
];

export function Features() {
    return (
        <section className="py-20 px-4 bg-obsidian relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-black pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-none hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />

                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                                <feature.icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-xl font-serif text-white mb-4 group-hover:tracking-wider transition-all duration-300">{feature.title}</h3>
                            <p className="text-gray-500 font-sans font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
