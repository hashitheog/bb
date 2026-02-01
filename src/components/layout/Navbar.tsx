import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Umrah', path: '/umrah' },
    { name: 'Flights', path: '/flights' },
    { name: 'Journal', path: '/journal' }
];

export function Navbar() {
    const location = useLocation();
    const [hoveredPath, setHoveredPath] = useState(location.pathname);

    return (
        <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none md:justify-between md:px-12 items-start hidden md:flex">
            {/* Desktop: Left Spacer for balance if needed, or Logo here? 
                 Currently logo is in Hero text. Let's keep Nav centered or split.
                 User asked for Sign In. Let's add a separate dock for Actions.
             */}

            {/* Main Nav */}
            <nav className="pointer-events-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-2 px-6 flex items-center gap-2 shadow-2xl shadow-black/50 mx-auto">
                {links.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            onMouseEnter={() => setHoveredPath(link.path)}
                            onMouseLeave={() => setHoveredPath(location.pathname)}
                            className={cn(
                                "relative px-6 py-3 rounded-full text-xs font-bold tracking-[0.1em] uppercase transition-colors duration-300",
                                isActive ? "text-obsidian" : "text-white/70 hover:text-white"
                            )}
                        >
                            {/* Moving Background Pill */}
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-pill"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    className="absolute inset-0 bg-gold rounded-full -z-10"
                                />
                            )}

                            {/* Hover Ghost Pill */}
                            {hoveredPath === link.path && !isActive && (
                                <motion.div
                                    layoutId="navbar-ghost"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                />
                            )}

                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Auth/Action Dock (Right Side) */}
            <div className="pointer-events-auto absolute right-6 md:right-12 top-0 hidden md:flex gap-4">
                <Link to="/login">
                    <button className="text-white/70 hover:text-gold text-xs font-bold tracking-widest uppercase py-3 transition-colors">
                        Sign In
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="bg-white text-obsidian px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gold transition-colors">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    );
}
