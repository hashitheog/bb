import { Home, Map, Moon, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function MobileNav() {
    const location = useLocation();

    const links = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Packages', icon: Map, path: '/packages' },
        { name: 'Umrah', icon: Moon, path: '/umrah' },
        { name: 'Account', icon: User, path: '/login' },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-[400px]">
            <nav className="bg-obsidian/40 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex justify-around items-center shadow-2xl shadow-black/50 overflow-hidden">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => link.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="relative flex flex-col items-center py-3 px-4 rounded-full transition-all duration-300"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobile-nav-pill"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    className="absolute inset-0 bg-gold rounded-full -z-10"
                                />
                            )}
                            <Icon className={cn(
                                "w-5 h-5 transition-colors duration-300",
                                isActive ? 'text-obsidian' : 'text-white/60'
                            )} />
                            {isActive && (
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[8px] font-bold tracking-widest uppercase text-obsidian absolute -bottom-1"
                                >
                                    {/* {link.name} */}
                                </motion.span>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
