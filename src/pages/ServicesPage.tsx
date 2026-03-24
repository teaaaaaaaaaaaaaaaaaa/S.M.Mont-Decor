import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { services } from '../data/services';
import heroImage from '../assets/images/photo-10.jpg';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Naše usluge"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Naše usluge
          </h1>
          <p className="text-white/60 text-lg mt-3">
            Kompletna ponuda usluga na jednom mestu
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/20 to-white">
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
    </>
  );
}
