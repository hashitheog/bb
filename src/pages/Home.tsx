import { motion } from 'framer-motion';
import { Hero } from '../components/sections/Hero';
import { Ethos } from '../components/sections/Ethos';
import { Discovery } from '../components/sections/Discovery';
import { Features } from '../components/sections/Features';
import { SanctuaryCollection } from '../components/sections/SanctuaryCollection';
import { VoicesOfWisdom } from '../components/sections/VoicesOfWisdom';
import { JourneySteps } from '../components/sections/JourneySteps';
import { ExperienceTiers } from '../components/sections/ExperienceTiers';
import { Testimonial } from '../components/sections/Testimonial';
import { CallToAction } from '../components/sections/CallToAction';
import { SmoothReveal } from '../components/ui/SmoothReveal';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SmoothReveal><Ethos /></SmoothReveal>
      <SmoothReveal><Discovery /></SmoothReveal>
      <SmoothReveal><Features /></SmoothReveal>
      <SmoothReveal><SanctuaryCollection /></SmoothReveal>
      <SmoothReveal><VoicesOfWisdom /></SmoothReveal>
      <SmoothReveal><JourneySteps /></SmoothReveal>
      <SmoothReveal><ExperienceTiers /></SmoothReveal>
      <SmoothReveal><Testimonial /></SmoothReveal>
      <SmoothReveal><CallToAction /></SmoothReveal>
    </motion.div>
  );
}
