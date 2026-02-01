import { motion } from 'framer-motion';
import { SmoothReveal } from '../components/ui/SmoothReveal';
import { MagneticButton } from '../components/ui/MagneticButton';

export function Flights() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-obsidian text-white pt-32 pb-20 flex items-center justify-center"
        >
            <div className="text-center px-6">
                <SmoothReveal>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Private Aviation</h1>
                    <p className="text-xl text-gray-400 font-light mb-12 max-w-lg mx-auto">
                        Seamless connections from major global hubs directly to Jeddah or Madinah Private Terminals.
                    </p>
                    <MagneticButton className="bg-gold text-obsidian px-10 py-4 font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors">
                        Request Charter
                    </MagneticButton>
                </SmoothReveal>
            </div>
        </motion.div>
    );
}
