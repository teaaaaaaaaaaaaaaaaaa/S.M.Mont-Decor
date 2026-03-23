import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import LazyImage from '../ui/LazyImage';
import { portfolioItems, categoryLabels, type Category } from '../../data/portfolio';

const categories: Category[] = ['sve', 'suva-gradnja', 'rasveta', 'kupatila', 'kompletne-adaptacije'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('sve');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const featuredItems = useMemo(() => {
    const items = portfolioItems.filter((item) => item.featured);
    if (activeCategory === 'sve') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxSlides = featuredItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  return (
    <section id="galerija" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Portfolio"
            title="Naši radovi"
            subtitle="Pogledajte primere naših završenih projekata"
          />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-secondary/30 text-primary hover:bg-secondary/60'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <LazyImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-white text-xs">
                      {categoryLabels[item.category]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/galerija"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300"
          >
            Pogledajte sve radove
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}
