import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
    {
        title: 'Seamless Visa Processing',
        description: 'Priority handling for all documentation.',
    },
    {
        title: 'Handpicked Premium Hotels',
        description: 'Direct courtyard access and serene views.',
    },
    {
        title: 'Private Luxury Transfers',
        description: 'Arrival and departure in absolute comfort.',
    },
    {
        title: 'Expert Spiritual Guidance',
        description: 'Focused on your connection, not logistics.',
    },
];

export function Umrah() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                            The Ultimate Pilgrimage
                        </span>

                        <h2 className="font-serif text-5xl md:text-6xl text-dark leading-[1.1] mb-8">
                            Umrah,
                            <br />
                            <span className="italic">Without the</span>
                            <br />
                            <span className="italic">Chaos</span>
                        </h2>

                        <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 max-w-md">
                            Visa. Hotels. Transfers. Guidance.
                            <br />
                            Every detail meticulously handled for your spiritual relief.
                        </p>

                        <div className="space-y-8 mb-12">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 mt-1 text-gray-300 group-hover:text-primary transition-colors">
                                        <div className="bg-primary/10 rounded-full p-1">
                                            <CheckCircle2 className="w-4 h-4 text-primary fill-primary/20" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark text-sm md:text-base mb-1">{item.title}</h4>
                                        <p className="text-xs md:text-sm text-gray-400 font-light">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="primary"
                            className="self-start rounded-none px-8 py-4 text-xs tracking-[0.15em] font-bold uppercase hover:translate-x-2 transition-transform shadow-none"
                        >
                            View Umrah Options
                        </Button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative min-h-[600px] lg:min-h-[800px]"
                    >
                        <div className="absolute inset-0 rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src="/masjid_nabawi_courtyard.png"
                                alt="Masjid Nabawi Courtyard"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Location Overlay Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-20 -left-10 bg-white p-8 shadow-xl max-w-xs hidden md:block"
                        >
                            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                                Location
                            </span>
                            <p className="font-serif italic text-2xl text-dark leading-tight">
                                Masjid Nabawi at First Light
                            </p>
                            <div className="h-1 w-12 bg-primary mt-6" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
