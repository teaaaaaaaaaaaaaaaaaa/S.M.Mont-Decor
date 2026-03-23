import { useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { beforeAfterPairs } from '../../data/portfolio';

function CustomHandle() {
  return (
    <ReactCompareSliderHandle
      buttonStyle={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: '#2F70C1',
        border: '4px solid white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
      }}
      linesStyle={{
        width: 3,
        color: '#2F70C1',
      }}
    />
  );
}

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePair = beforeAfterPairs[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? beforeAfterPairs.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === beforeAfterPairs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="transformacija" className="bg-primary py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Transformacija"
            title="Pre i posle renoviranja"
            subtitle="Povucite klizač da vidite transformaciju prostora"
            light
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          {/* Pair Title */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-secondary text-sm font-medium">
              <ArrowLeftRight size={16} />
              {activePair.title}
            </div>
          </div>

          {/* Slider with Arrow Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white hover:bg-accent/40 transition-all duration-300 hover:scale-110"
              aria-label="Prethodni par"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white hover:bg-accent/40 transition-all duration-300 hover:scale-110"
              aria-label="Sledeći par"
            >
              <ChevronRight size={24} />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePair.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReactCompareSlider
                    handle={<CustomHandle />}
                    itemOne={
                      <ReactCompareSliderImage
                        src={activePair.before.src}
                        alt={activePair.before.label}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={activePair.after.src}
                        alt={activePair.after.label}
                      />
                    }
                    className="aspect-[16/10]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Labels */}
              <div className="flex justify-between px-4 py-3 bg-primary/80">
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  Pre
                </span>
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  Posle
                </span>
              </div>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {beforeAfterPairs.map((pair, index) => (
              <button
                key={pair.id}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-accent w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Prikaži par ${index + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
