import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, ArrowLeft, Clock, Shield } from 'lucide-react';
import { packages } from '../data/packages';
import { MagneticButton } from '../components/ui/MagneticButton';
import { SmoothReveal } from '../components/ui/SmoothReveal';

export function PackageDetails() {
    const { id } = useParams();
    const pkg = packages.find(p => p.id === id);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-obsidian text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-serif text-gold mb-4">Journey Not Found</h2>
                    <Link to="/packages" className="text-sm underline hover:text-gold">Return to Packages</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-obsidian text-white pb-20">
            {/* Hero Image */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop';
                    }}
                />
                <div className="absolute top-8 left-8 z-50">
                    <Link to="/packages">
                        <MagneticButton className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold hover:text-obsidian transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </MagneticButton>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 container mx-auto">
                    <SmoothReveal>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-gold text-obsidian px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full">{pkg.type}</span>
                                    <div className="flex items-center gap-1 text-gold">
                                        <Star className="w-4 h-4 fill-gold" />
                                        <span className="text-sm font-medium">{pkg.rating}</span>
                                    </div>
                                </div>
                                <h1 className="text-3xl md:text-6xl font-serif text-white mb-4">{pkg.title}</h1>
                                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gold" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-gold" />
                                        <span>Makkah & Madinah</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Starting From</p>
                                <p className="text-4xl font-serif text-gold">${pkg.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </SmoothReveal>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Description */}
                    <section>
                        <h2 className="text-2xl font-serif text-white mb-6">Overview</h2>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">{pkg.description}</p>
                    </section>

                    {/* Amenities */}
                    <section>
                        <h2 className="text-2xl font-serif text-white mb-6">Inclusions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {pkg.amenities.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm text-gray-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Itinerary */}
                    <section>
                        <h2 className="text-2xl font-serif text-white mb-6">Itinerary</h2>
                        <div className="space-y-4">
                            {pkg.itinerary.map((day) => (
                                <div key={day.day} className="relative pl-8 border-l border-white/10 pb-8 last:pb-0 group">
                                    <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-gold border-2 border-obsidian group-hover:scale-125 transition-transform" />
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-gold/30 transition-colors">
                                        <h3 className="text-lg font-serif text-gold mb-2">Day {day.day}: {day.title}</h3>
                                        <p className="text-gray-400 text-sm">{day.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sticky Sidebar / Booking */}
                <div className="relative">
                    <div className="sticky top-32">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-serif text-white mb-6">Book This Journey</h3>

                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                alert("Booking request sent! Our concierge will contact you shortly.");
                            }}>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Travel Date</label>
                                    <div className="relative">
                                        <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white appearance-none focus:border-gold outline-none">
                                            {pkg.dates.map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Adults</label>
                                        <input type="number" min="1" defaultValue="2" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Children</label>
                                        <input type="number" min="0" defaultValue="0" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none" />
                                    </div>
                                </div>

                                <div className="pt-4 space-y-3">
                                    <input type="text" placeholder="Full Name" required className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none placeholder:text-gray-600" />
                                    <input type="email" placeholder="Email Address" required className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-gold outline-none placeholder:text-gray-600" />
                                </div>

                                <MagneticButton type="submit" className="w-full bg-gold text-obsidian py-4 font-bold tracking-widest uppercase rounded-xl mt-4 hover:bg-white transition-colors shadow-lg shadow-gold/20">
                                    Request Booking
                                </MagneticButton>

                                <p className="text-[10px] text-center text-gray-500 mt-4">
                                    No payment required today. Our team will verify availability.
                                </p>
                            </form>
                        </div>

                        <div className="mt-8 bg-gradient-to-br from-gold/10 to-transparent border border-gold/10 rounded-xl p-6">
                            <h4 className="text-gold font-serif mb-2">Need Assistance?</h4>
                            <p className="text-xs text-gray-400 mb-4">Our spiritual concierge is available 24/7 to customize your itinerary.</p>
                            <button className="text-xs font-bold uppercase tracking-widest text-white hover:text-gold flex items-center gap-2">
                                <Clock className="w-3 h-3" /> Contact Concierge
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
