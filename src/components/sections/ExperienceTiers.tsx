import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

const tiers = [
    {
        name: 'Silver',
        price: 'From $1,800',
        description: 'Essential comfort for the focused pilgrim.',
        features: ['5-Star Accommodation', 'Shared Transport', 'Visa Processing', 'Group Guide'],
        highlight: false,
        cta: 'Inquire Silver'
    },
    {
        name: 'Gold',
        price: 'From $3,500',
        description: 'Elevated proximity and dedicated support.',
        features: ['Haram View Suites', 'Private SUV Transport', 'Dedicated Concierge', 'Ziyarat Tours', 'Daily Breakfast'],
        highlight: true,
        cta: 'Inquire Gold'
    },
    {
        name: 'Platinum',
        price: 'From $7,500',
        description: 'Uncompromising luxury and privacy.',
        features: ['Royal Suite (Kaaba View)', 'Luxury Chauffeur (24/7)', 'Private Scholar', 'VIP Airport Lounge', 'Butler Service', 'Bespoke Itinerary'],
        highlight: false,
        cta: 'Inquire Platinum'
    },
];

export function ExperienceTiers() {
    return (
        <section className="py-32 bg-obsidian relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                        The Collection
                    </span>
                    <h2 className="font-serif text-5xl text-white">Choose Your Level of Grace</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 lg:p-12 border ${tier.highlight ? 'border-gold bg-gold/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:bg-gold/10`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian border border-gold text-gold text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 shadow-xl">
                                    Most Desired
                                </div>
                            )}

                            <h3 className={`text-2xl font-serif mb-2 ${tier.highlight ? 'text-gold' : 'text-white'}`}>{tier.name}</h3>
                            <div className="text-3xl font-light text-white mb-6">{tier.price}</div>
                            <p className="text-gray-500 text-sm mb-10 font-light leading-relaxed h-12">
                                {tier.description}
                            </p>

                            <ul className="space-y-4 mb-12">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                                        <span className="text-gray-400 text-sm font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full"
                                variant={tier.highlight ? 'primary' : 'outline'}
                            >
                                {tier.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
