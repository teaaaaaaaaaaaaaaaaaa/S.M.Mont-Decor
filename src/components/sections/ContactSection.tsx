import { Phone, Mail, Camera, MapPin } from 'lucide-react';
import StatCard from '../ui/StatCard';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { company } from '../../data/company';
import heroImage from '../../assets/images/photo-07.jpg';

export default function ContactSection() {
  return (
    <section id="o-nama">
      {/* Stats Bar */}
      <div className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {company.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Block */}
      <div className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text & Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Započnite transformaciju vašeg prostora
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Kontaktirajte nas za besplatnu procenu radova. Sa preko 15 godina iskustva,
                garantujemo kvalitet i profesionalnost u svakom projektu.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <span className="text-lg font-medium">{company.phoneFormatted}</span>
                </a>

                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <span className="text-lg font-medium">{company.email}</span>
                </a>

                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Camera size={18} className="text-accent" />
                  </div>
                  <span className="text-lg font-medium">Instagram</span>
                </a>

                <div className="flex items-center gap-3 text-white/60">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <span className="text-lg">{company.address}</span>
                </div>
              </div>

              <Button variant="primary" size="lg" href={company.emailHref}>
                Pošaljite nam poruku
              </Button>
            </AnimatedSection>

            {/* Right: Image */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Osvetljeno stepenište - primer našeg rada"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
