import { motion } from 'framer-motion';

const scholars = [
    {
        name: "Shaykh Hamza Yusuf",
        role: "Spiritual Advisor",
        image: "/scholar_1.png"
    },
    {
        name: "Dr. Umar Faruq Abd-Allah",
        role: "Historical Guide",
        image: "/scholar_2.png"
    },
    {
        name: "Ustadha Ieasha Prime",
        role: "Women's Fiqqh",
        image: "/scholar_3.png"
    }
];

export function VoicesOfWisdom() {
    return (
        <section className="py-32 bg-obsidian relative">
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                        Voices of Wisdom
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        Guided by the<br /> <span className="italic text-gray-500 font-light">Heirs of the Prophet.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {scholars.map((scholar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group flex flex-col items-center"
                        >
                            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10 mb-8 relative group-hover:border-gold/50 transition-colors duration-500">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
                                <img
                                    src={scholar.image}
                                    alt={scholar.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{scholar.name}</h3>
                            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">{scholar.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
