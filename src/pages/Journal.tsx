import { motion } from 'framer-motion';

const articles = [
  {
    title: "The Silence of the Haram",
    category: "Spirituality",
    date: "Dhul Hijjah 1445",
    preview: "Finding stillness amidst the millions. A guide to internal reflection during Tawaf.",
    image: "/cinematic_hajj_crowd_hero.png"
  },
  {
    title: "History of the Zamzam Well",
    category: "History",
    date: "Dhul Qa'dah 1445",
    preview: "Tracing the sacred waters from Hajar's desperate search to the modern expansion.",
    image: "/madinah_mosque_dawn.png"
  },
  {
    title: "Preparation for Ihram",
    category: "Guide",
    date: "Shawwal 1445",
    preview: "The physical and spiritual cleansing required before entering the state of sanctity.",
    image: "/celestial_gold_particles.png"
  }
];

export function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-obsidian text-white pt-32 pb-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-24 border-b border-white/10 pb-12">
          <h1 className="text-8xl md:text-[10rem] font-serif text-white opacity-90 leading-none">
            JOURNAL
          </h1>
          <div className="flex justify-between items-end mt-8">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Reflections from the Path
            </span>
            <span className="text-gray-500 text-xs tracking-widest">
              Vol 01
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-white/5 mb-8 overflow-hidden relative">
                {/* Article Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-[10px] bg-white text-obsidian px-2 py-1 uppercase font-bold tracking-widest">
                  {article.category}
                </div>
              </div>

              <h2 className="text-3xl font-serif text-white mb-4 group-hover:text-gold transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l border-gold/30 pl-4">
                {article.preview}
              </p>
              <div className="text-xs text-gray-600 font-mono text-right transform group-hover:text-gray-400 transition-colors">
                {article.date}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
