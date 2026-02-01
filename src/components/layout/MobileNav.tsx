import { Home, Map, Moon, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function MobileNav() {
    const location = useLocation();

    const links = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Packages', icon: Map, path: '/packages' },
        { name: 'Umrah', icon: Moon, path: '/umrah' },
        { name: 'Account', icon: User, path: '/login' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-4 pt-2 px-4 bg-obsidian/80 backdrop-blur-xl border-t border-white/10">
            <nav className="flex justify-between items-center max-w-sm mx-auto">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => link.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="relative flex flex-col items-center gap-1 p-2 group"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobile-nav-indicator"
                                    className="absolute -top-2 w-8 h-1 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                />
                            )}
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-gold' : 'text-gray-500 group-hover:text-white'}`} />
                            <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-gold' : 'text-gray-500'}`}>
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
