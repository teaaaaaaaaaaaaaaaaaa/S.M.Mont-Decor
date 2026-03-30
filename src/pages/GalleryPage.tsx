import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import LazyImage from '../components/ui/LazyImage';
import AnimatedSection from '../components/ui/AnimatedSection';
import { portfolioItems, categoryLabels, type Category } from '../data/portfolio';
import heroImage from '../assets/images/photo-21.jpg';

const categories: Category[] = ['sve', 'suva-gradnja', 'rasveta', 'kupatila', 'kompletne-adaptacije'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('sve');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'sve') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxSlides = filteredItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Galerija radova"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Galerija radova
          </h1>
          <p className="text-white/60 text-lg mt-3">
            Svi naši projekti na jednom mestu
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-24 z-10 bg-white/90 backdrop-blur-sm py-4 -mx-4 px-4 rounded-xl">
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

          {/* Masonry Grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="break-inside-avoid mb-3 md:mb-4 group cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <LazyImage
                      src={item.src}
                      alt={item.alt}
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-white text-xs">{item.alt}</p>
                      <p className="text-white/70 text-xs mt-1">
                        {categoryLabels[item.category]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </>
  );
}
