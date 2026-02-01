import { motion } from 'framer-motion';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SmoothReveal } from '../components/ui/SmoothReveal';
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-obsidian text-white flex items-center justify-center p-6 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[url('/celestial_gold_particles.png')] opacity-20 bg-cover bg-center" />

            <div className="w-full max-w-md relative z-10">
                <SmoothReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif text-white mb-2">Welcome Back</h1>
                        <p className="text-gray-400 font-light">Sign in to your private sanctuary</p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Welcome back. Redirecting to your sanctuary...");
                            // In a real app, this would handle auth
                        }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl space-y-8"
                    >
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-gold mb-2 group-focus-within:text-white transition-colors">Email Address</label>
                            <input type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="pilgrim@imusafir.global" />
                        </div>
                        <div className="group">
                            <label className="block text-xs uppercase tracking-widest text-gold mb-2 group-focus-within:text-white transition-colors">Password</label>
                            <input type="password" required className="w-full bg-black/20 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-gold transition-colors" placeholder="••••••••" />
                        </div>

                        <MagneticButton type="submit" className="w-full bg-gold text-obsidian py-4 font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors shadow-lg shadow-gold/20">
                            Sign In
                        </MagneticButton>

                        <div className="flex items-center gap-4 py-2">
                            <div className="h-[1px] bg-white/10 flex-1" />
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">Or Continue With</span>
                            <div className="h-[1px] bg-white/10 flex-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-colors group">
                                <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                                </svg>
                                <span className="text-xs text-gray-300 uppercase tracking-wider">Facebook</span>
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-colors group">
                                <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                                <span className="text-xs text-gray-300 uppercase tracking-wider">Google</span>
                            </button>
                        </div>

                        <div className="text-center pt-2">
                            <Link to="/contact" className="text-xs text-gray-500 hover:text-gold transition-colors tracking-widest uppercase border-b border-transparent hover:border-gold">
                                Request Membership
                            </Link>
                        </div>
                    </form>
                </SmoothReveal>
            </div>
        </motion.div>
    );
}
