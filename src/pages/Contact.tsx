import { motion } from 'framer-motion';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SmoothReveal } from '../components/ui/SmoothReveal';

export function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-obsidian text-white pt-32 pb-20"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <SmoothReveal>
                    <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-none">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl border-l border-gold/30 pl-6">
                        For bespoke arrangements, private aviation, and spiritual guidance, our concierge team is at your disposal.
                    </p>
                </SmoothReveal>

                <div className="grid md:grid-cols-2 gap-16">
                    <SmoothReveal delay={0.2} className="space-y-12">
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-gold mb-2 group-focus-within:text-white transition-colors">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-serif focus:outline-none focus:border-gold transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-gold mb-2 group-focus-within:text-white transition-colors">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-serif focus:outline-none focus:border-gold transition-colors" placeholder="email@address.com" />
                        </div>
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-gold mb-2 group-focus-within:text-white transition-colors">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-light focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Tell us about your journey..." />
                        </div>

                        <div className="pt-8">
                            <MagneticButton className="bg-gold text-obsidian px-10 py-4 font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors">
                                Send Message
                            </MagneticButton>
                        </div>
                    </SmoothReveal>

                    <SmoothReveal delay={0.4} className="bg-white/5 p-12 border border-white/10 h-fit">
                        <h3 className="text-2xl font-serif text-white mb-8">Concierge Desk</h3>
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</div>
                                <div className="text-lg">Jeddah, Saudi Arabia</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Line</div>
                                <div className="text-lg">+966 50 000 0000</div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</div>
                                <div className="text-lg">concierge@imusafir.global</div>
                            </div>
                        </div>
                    </SmoothReveal>
                </div>
            </div>
        </motion.div>
    );
}
