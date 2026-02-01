import { motion } from 'framer-motion';
import { SmoothReveal } from '../components/ui/SmoothReveal';

export function Privacy() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-obsidian text-white pt-32 pb-20"
        >
            <div className="container mx-auto px-6 max-w-4xl">
                <SmoothReveal>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-12">Privacy Policy</h1>
                    <div className="text-sm text-gold tracking-widest uppercase mb-16">Last Updated: Dhul Hijjah 1445</div>
                </SmoothReveal>

                <div className="space-y-16 text-gray-400 font-light leading-relaxed">
                    <SmoothReveal delay={0.1}>
                        <h2 className="text-2xl font-serif text-white mb-4">1. Information Collection</h2>
                        <p>We collect information necessary to facilitate your sacred journey, including identity documents for visa processing and preferences for accommodation.</p>
                    </SmoothReveal>

                    <SmoothReveal delay={0.2}>
                        <h2 className="text-2xl font-serif text-white mb-4">2. Usage of Data</h2>
                        <p>Your data is used exclusively for: Visa issuance via the Ministry of Hajj and Umrah, Hotel bookings, and personalized travel arrangements.</p>
                    </SmoothReveal>

                    <SmoothReveal delay={0.3}>
                        <h2 className="text-2xl font-serif text-white mb-4">3. Security</h2>
                        <p>We employ industry-standard encryption to protect your sensitive documents. Your spiritual peace of mind includes your digital privacy.</p>
                    </SmoothReveal>
                </div>
            </div>
        </motion.div>
    );
}
