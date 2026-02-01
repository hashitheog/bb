import { motion } from 'framer-motion';
import { Sparkles, Castle, Smartphone, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: Sparkles,
        title: 'Spiritual Journeys',
        description: 'Meticulously curated itineraries that prioritize your worship and spiritual clarity above all else.',
        action: 'Details'
    },
    {
        icon: Castle,
        title: 'Halal Adventure',
        description: 'Discover the breathtaking and cultural heritage of the Alps region with expert halal-refined tours.',
        action: 'Explore'
    },
    {
        icon: Smartphone,
        title: 'Digital Experience',
        description: 'Manage your entire flight, hotels, and on-ground logistics through our seamless, intuitive platform.',
        action: 'Expand'
    }
];

export function ServiceCards() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-[#FAFAFA] hover:bg-white p-10 rounded-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                        >
                            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-8 text-dark group-hover:scale-110 transition-transform">
                                <service.icon className="w-5 h-5" />
                            </div>

                            <h3 className="font-bold text-xl text-dark mb-4">{service.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 h-20">
                                {service.description}
                            </p>

                            <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-[#006C45] transition-colors">
                                {service.action}
                                <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
