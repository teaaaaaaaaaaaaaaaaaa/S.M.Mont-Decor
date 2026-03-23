import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/images/photo-01.jpg';
import { company } from '../../data/company';
import { scrollToElement } from '../../utils/scrollToElement';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImage}
          alt="LED rasveta u modernom hodniku"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlays - Multi-layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
        >
          <span className="block text-white">Vaš prostor,</span>
          <span className="block bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent">
            naša stručnost
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-4 font-light tracking-wide"
        >
          Ključ u ruke.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto"
        >
          Od demontaže do završne obrade – kompletne adaptacije i renoviranja u Beogradu.
          Suva gradnja, gipsarski radovi, elektroinstalacije i sve što vašem prostoru treba.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href={company.emailHref}>
            Zatražite ponudu
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToElement('galerija')}
          >
            Pogledajte radove
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>500+ projekata</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>Garancija na radove</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>Besplatna procena</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => scrollToElement('transformacija')}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs uppercase tracking-wider">Skrolujte dole</span>
            <ChevronDown size={24} className="text-white/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
