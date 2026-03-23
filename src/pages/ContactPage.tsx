import { Phone, Mail, Camera, MapPin, Clock } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { company } from '../data/company';

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Kontaktirajte nas
          </h1>
          <p className="text-white/60 text-lg mt-3">
            Besplatna procena radova za vaš projekat
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Javite nam se
              </h2>
              <p className="text-primary/60 text-lg mb-8 leading-relaxed">
                Potrebna vam je procena radova ili imate pitanja? Slobodno nas kontaktirajte
                putem telefona ili emaila. Odgovaramo u roku od 24 sata.
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-4 text-primary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50">Telefon</p>
                    <p className="text-lg font-semibold">{company.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={company.emailHref}
                  className="flex items-center gap-4 text-primary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50">Email</p>
                    <p className="text-lg font-semibold">{company.email}</p>
                  </div>
                </a>

                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Camera size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50">Instagram</p>
                    <p className="text-lg font-semibold">@smmontdecor</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-primary">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50">Lokacija</p>
                    <p className="text-lg font-semibold">{company.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-primary">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/50">Radno vreme</p>
                    <p className="text-lg font-semibold">Pon - Sub: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <Button variant="primary" size="lg" href={company.emailHref}>
                Pošaljite nam poruku
              </Button>
            </AnimatedSection>

            {/* Right: Map */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22625.89418851559!2d20.489!3d44.795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7078b891a9e7%3A0x8e1c78e75a2bbc5e!2sZvezdara%2C%20Belgrade!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija - Zvezdara, Beograd"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
