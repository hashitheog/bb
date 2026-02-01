import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SmoothReveal } from '../ui/SmoothReveal';

const footerLinks = {
    curate: [
        { name: 'Luxury Packages', path: '/destinations' },
        { name: 'Hajj Experience', path: '/destinations' },
        { name: 'Custom Tours', path: '/contact' }
    ],
    cinema: [
        { name: 'Our Story', path: '/' },
        { name: 'Journal', path: '/journal' },
        { name: 'Press', path: '/journal' }
    ],
    legal: [
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
        { name: 'ATOL Bonded', path: '/privacy' }
    ],
};

export function Footer() {
    return (
        <footer className="bg-obsidian text-white pt-32 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <div className="mb-8">
                            <span className="text-3xl font-serif font-bold text-white tracking-widest">
                                IMUSAFIR
                            </span>
                            <span className="text-[10px] text-gold tracking-[0.4em] block mt-1 uppercase opacity-70">
                                Global
                            </span>
                        </div>
                        <p className="text-gray-500 max-w-sm font-sans font-light leading-relaxed">
                            Crafting spiritual journeys that transcend the ordinary.
                            Approved by the Ministry of Hajj & Umrah.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-7 grid grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([category, links], index) => (
                            <SmoothReveal key={category} delay={0.2 + (index * 0.1)}>
                                <div>
                                    <h4 className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                                        {category}
                                    </h4>
                                    <ul className="space-y-4">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                <Link to={link.path} className="text-gray-400 hover:text-white transition-colors font-serif text-lg">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SmoothReveal>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5">
                    <p className="text-gray-600 text-xs tracking-widest uppercase">
                        © 2024 iMusafir Global. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-6 md:mt-0">
                        {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-600 hover:text-gold transition-colors">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
