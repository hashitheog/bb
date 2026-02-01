import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Consult',
        description: 'Speak with our concierges to model your spiritual goals.'
    },
    {
        id: '02',
        title: 'Flight/Visa',
        description: 'We handle all documentation and air transportation.'
    },
    {
        id: '03',
        title: 'Embark',
        description: 'Depart a curated itinerary knowing every detail is set.'
    },
    {
        id: '04',
        title: 'Reflect',
        description: 'Return with calm heart and mind, ready for the future.'
    }
];

export function JourneySteps() {
    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            {/* Subtle Star Pattern Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('/subtle_star_pattern.png')] bg-repeat opacity-5" />

            <div className="container mx-auto px-6 text-center mb-24 relative z-10">
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                    The Path to Presence
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0 group">

                    {/* Connecting Line (Base) */}
                    <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden md:block" />

                    {/* Connecting Line (Animated Progress) */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute top-8 left-0 w-full h-[1px] bg-gold hidden md:block origin-left scale-x-0"
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center md:flex-1 group/step cursor-pointer"
                        >
                            {/* Step Number with Halo Effect */}
                            <div className="relative mb-8">
                                <span
                                    className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent group-hover/step:from-gold group-hover/step:to-gold/50 transition-all duration-500 font-light block"
                                >
                                    {step.id}
                                </span>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-obsidian border border-white/20 group-hover/step:bg-gold group-hover/step:border-gold transition-colors duration-500 z-20">
                                    <div className="absolute inset-0 rounded-full bg-gold/50 animate-ping opacity-0 group-hover/step:opacity-100" />
                                </div>
                            </div>

                            <h3 className="text-xl font-serif text-white mb-4 group-hover/step:text-gold transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed group-hover/step:text-gray-300 transition-colors duration-300">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
