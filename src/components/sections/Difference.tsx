import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const traditional = [
    "Ambiguous pricing and hidden commissions",
    "Fragmented communication via unofficial channels",
    "Uncertainty regarding hotel proximity and quality"
];

const imusafir = [
    "Complete, upfront price transparency",
    "Digital-first experience with advance concierge",
    "Verified hotel standards and curated amenities"
];

export function Difference() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-dark mb-4"
                    >
                        The Imusafir Difference
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm tracking-wide uppercase"
                    >
                        A modern suite within a sacred tradition
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Divider Line (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-200" />

                    {/* Traditional Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">
                            The Traditional Experience
                        </h3>
                        <ul className="space-y-6">
                            {traditional.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 p-1 bg-red-50 rounded-full">
                                        <X className="w-3 h-3 text-red-500" />
                                    </div>
                                    <span className="text-gray-500 font-light text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Imusafir Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xs font-bold tracking-[0.2em] text-[#006C45] uppercase mb-8">
                            The Imusafir Way
                        </h3>
                        <ul className="space-y-6">
                            {imusafir.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 p-1 bg-[#006C45]/10 rounded-full">
                                        <CheckCircle2 className="w-3 h-3 text-[#006C45]" />
                                    </div>
                                    <span className="text-gray-800 font-medium text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
