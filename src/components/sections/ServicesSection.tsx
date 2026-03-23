import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import AnimatedSection from '../ui/AnimatedSection';
import { services } from '../../data/services';

export default function ServicesSection() {
  return (
    <section id="usluge" className="py-20 lg:py-28 bg-gradient-to-b from-secondary/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Naše usluge"
            title="Kompletna ponuda usluga"
            subtitle="Od ideje do realizacije – sve na jednom mestu"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
