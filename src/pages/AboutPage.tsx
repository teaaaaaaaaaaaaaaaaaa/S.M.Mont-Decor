import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { company } from '../data/company';
import heroImage from '../assets/images/photo-07.jpg';
import bannerImage from '../assets/images/photo-15.jpg';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="O nama"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            O nama
          </h1>
          <p className="text-white/60 text-lg mt-3">
            Vaš partner za kvalitetne adaptacije
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-primary py-20 lg:py-28">
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

              <div className="space-y-5 mb-8">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-4 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Telefon</p>
                    <p className="text-lg font-semibold">{company.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={company.emailHref}
                  className="flex items-center gap-4 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <p className="text-lg font-semibold">{company.email}</p>
                  </div>
                </a>

                {/* <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Camera size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Instagram</p>
                    <p className="text-lg font-semibold">@smmontdecor</p>
                  </div>
                </a> */}

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Lokacija</p>
                    <p className="text-lg font-semibold">{company.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Radno vreme</p>
                    <p className="text-lg font-semibold">Pon - Sub: 08:00 - 18:00</p>
                  </div>
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
      </section>
    </>
  );
}
