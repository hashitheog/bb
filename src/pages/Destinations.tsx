import { motion } from 'framer-motion';

const destinations = [
  {
    name: "Makkah",
    title: "The Heart of Faith",
    description: "The birthplace of revelation. Stand before the Kaaba and feel the pulse of the Ummah.",
    image: "/night_hero.png",
    stats: { pilgrims: "Millions", sites: "Al-Haram, Safa, Marwa" }
  },
  {
    name: "Madinah",
    title: "The City of Light",
    description: "A sanctuary of peace. Walk in the footsteps of the Beloved (PBUH) and find tranquility.",
    image: "/madinah_mosque_dawn.png", // Will be generated
    stats: { pilgrims: "Revered", sites: "Nabawi, Quba, Baqi" }
  }
];

export function Destinations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-obsidian text-white pt-24"
    >
      {/* Hero Header */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6"
        >
          Sacred Geography
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif mb-8 text-white"
        >
          Sanctuaries
        </motion.h1>
      </section>

      {/* Destinations List */}
      <section className="pb-32">
        {destinations.map((dest, index) => (
          <div key={index} className="relative h-[80vh] w-full group overflow-hidden border-t border-white/5">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-obsidian/80 backdrop-blur-md p-10 md:p-16 max-w-2xl border-l-2 border-gold"
              >
                <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">{dest.name}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{dest.title}</h2>
                <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">
                  {dest.description}
                </p>
                <div className="flex gap-12 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Impact</div>
                    <div className="text-white font-serif text-xl">{dest.stats.pilgrims}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Key Sites</div>
                    <div className="text-white font-serif text-xl">{dest.stats.sites}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}
