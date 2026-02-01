import { motion } from 'framer-motion';
import { Plane, MapPin, Moon, Star } from 'lucide-react';

const timeline = [
  {
    day: "01",
    title: "Departure",
    desc: "VIP Airport transfer and business class flight to Jeddah. Your state of Ihram begins.",
    icon: Plane
  },
  {
    day: "02",
    title: "Arrival & Umrah",
    desc: "Check-in to your suite overlooking the Haram. Guided performance of Umrah rituals with a scholar.",
    icon: Moon
  },
  {
    day: "04",
    title: "Ziyarat",
    desc: "Historical tours of Makkah's sacred sites including Jabal Al-Nour and Mina.",
    icon: MapPin
  },
  {
    day: "07",
    title: "The Prophet's City",
    desc: "High-speed train to Madinah. Salam to the Prophet (PBUH) and quiet reflection in the Rawdah.",
    icon: Star
  }
];

export function Umrah() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-obsidian text-white pt-32 pb-20"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            The Sacred Itinerary
          </motion.h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            A carefully curated timeline designed to balance the physical demands of travel with the spiritual needs of your soul.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-8 md:gap-16 mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Text Side */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">Day {item.day}</div>
                <h3 className="text-3xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-obsidian border border-gold/30 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 bg-gold/10 rounded-full animate-pulse" />
                <item.icon className="w-5 h-5 text-gold" />
              </div>

              {/* Empty Side for Balance */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-gold text-obsidian px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
            Download Full Brochure
          </button>
        </div>
      </div>
    </motion.div>
  );
}
