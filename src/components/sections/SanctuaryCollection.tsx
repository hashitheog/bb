import { motion } from 'framer-motion';

const hotels = [
    {
        name: "Raffles Makkah Palace",
        location: "Makkah",
        image: "/makkah_hotel.png",
        description: "Direct access to the Haram, providing sanctuary just steps from the Kaaba."
    },
    {
        name: "Dar Al Iman InterContinental",
        location: "Madinah",
        image: "/pilgrim_courtyard.png",
        description: "Ideally located in the courtyard of the Prophet's Mosque."
    },
    {
        name: "The Clock Towers",
        location: "Makkah",
        image: "/night_hero.png",
        description: "Iconic luxury redefining the skyline of the Holy City."
    }
];

export function SanctuaryCollection() {
    return (
        <section className="py-32 bg-obsidian border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8 text-center md:text-left">
                <div className="mx-auto md:mx-0">
                    <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                        The Sanctuary Collection
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white max-w-xl">
                        Rest within the <br /> <span className="italic text-gray-500">Divine Precincts.</span>
                    </h2>
                </div>
                <div className="mx-auto md:mx-0 text-center md:text-right">
                    <button className="text-[10px] font-bold tracking-[0.2em] text-white hover:text-gold uppercase transition-colors border-b border-white/20 pb-1 hover:border-gold">
                        View All Properties
                    </button>
                </div>
            </div>

            {/* Grid Layout (Replaced Horizontal Scroll) */}
            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
                {hotels.map((hotel, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group relative cursor-pointer border border-transparent hover:border-white/5 p-4 transition-all duration-500 rounded-sm"
                    >
                        <div className="aspect-[3/4] overflow-hidden bg-white/5 relative mb-6">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="text-[10px] font-bold tracking-[0.2em] text-white uppercase bg-black/50 backdrop-blur-md px-3 py-1 inline-block mb-2">
                                    {hotel.location}
                                </div>
                            </div>
                        </div>

                        <div className="pr-4">
                            <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{hotel.name}</h3>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                {hotel.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
