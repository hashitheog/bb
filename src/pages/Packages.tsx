import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { SmoothReveal } from '../components/ui/SmoothReveal';

export function Packages() {
    const [filter, setFilter] = useState<'all' | 'hajj' | 'umrah'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPackages = packages.filter(pkg => {
        const matchesType = filter === 'all' || pkg.type === filter;
        const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-obsidian text-white pt-32 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16">
                <SmoothReveal>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Curated <span className="text-gold italic">Journeys</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed mb-12">
                        Discover packages designed with the perfect balance of luxury, proximity, and spiritual guidance.
                    </p>

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search packages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-white placeholder:text-gray-600"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 bg-black/20 p-1 rounded-full border border-white/5">
                            {(['all', 'hajj', 'umrah'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === type
                                        ? 'bg-gold text-obsidian shadow-lg shadow-gold/20'
                                        : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </SmoothReveal>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPackages.map((pkg) => (
                            <motion.div
                                layout
                                key={pkg.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link to={`/packages/${pkg.id}`} className="group block h-full">
                                    <div className="relative h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition-colors duration-500 flex flex-col">
                                        {/* Image */}
                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-obsidian-20 z-10 group-hover:bg-opacity-0 transition-all duration-500" />
                                            <img
                                                src={pkg.image} // In real app these would be real urls
                                                alt={pkg.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop';
                                                }}
                                            />
                                            <div className="absolute top-4 right-4 z-20 bg-obsidian/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold/20">
                                                <span className="text-gold text-xs font-bold tracking-widest uppercase">{pkg.type}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Star className="w-4 h-4 text-gold fill-gold" />
                                                <span className="text-sm font-medium text-white">{pkg.rating}</span>
                                                <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                                            </div>

                                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{pkg.title}</h3>

                                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4 text-gold/70" />
                                                    <span>{pkg.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4 text-gold/70" />
                                                    <span>Makkah & Madinah</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                                {pkg.description}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                                                <div>
                                                    <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Starting From</span>
                                                    <span className="text-xl font-serif text-white">${pkg.price.toLocaleString()}</span>
                                                </div>

                                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-obsidian transition-all duration-300">
                                                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
