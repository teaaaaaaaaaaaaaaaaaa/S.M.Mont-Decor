import { Phone, Mail, MapIcon } from 'lucide-react';
import LogoSmall from '../../assets/logos/Logo-SM-small.png';
import StatCard from '../ui/StatCard';
import { company } from '../../data/company';

export default function Footer() {
  return (
    <>
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

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              {/* Mobile logo - centered and smaller */}
              <img
                src={LogoSmall}
                alt={company.name}
                className="h-24 w-auto mb-6 md:hidden"
              />
              {/* Desktop logo */}
              <img
                src={LogoSmall}
                alt={company.name}
                className="hidden md:block h-42 mb-4"
              />
              <p className="text-white/60 text-sm leading-relaxed text-center md:text-left">
                Profesionalne adaptacije stanova i poslovnih prostora u Beogradu.
                Suva gradnja, gipsarski radovi, elektroinstalacije i kompletne adaptacije ključ u ruke.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              {/* <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Navigacija
              </h3>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                <li>
                  <Link to="/#usluge" className="text-white/60 hover:text-white text-sm transition-colors">
                    Usluge
                  </Link>
                </li>
                <li>
                  <Link to="/galerija" className="text-white/60 hover:text-white text-sm transition-colors">
                    Galerija
                  </Link>
                </li>
                <li>
                  <Link to="/#o-nama" className="text-white/60 hover:text-white text-sm transition-colors">
                    O nama
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-white/60 hover:text-white text-sm transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul> */}
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-2xl uppercase tracking-wider mb-4">
                {company.name}
              </h3>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                <li>
                  <p className="text-white/40 text-center md:text-right">
                    PIB: {company.pib} | MB: {company.mb}
                  </p>
                </li>
                <li>
                  <p className="flex items-center gap-2 text-white/40 text-sm">
                    <MapIcon size={16} />
                    {company.address}
                  </p>
                </li>
                <li>
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-xl transition-colors"
                  >
                    <Phone size={16} />
                    {company.phoneFormatted}
                  </a>
                </li>
                <li>
                  <a
                    href={company.emailHref}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <Mail size={16} />
                    {company.email}
                  </a>
                </li>
                {/* <li>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <Camera size={16} />
                    Instagram
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center text-xs">
              <p className="text-white/50 text-center md:text-left">
                &copy; {new Date().getFullYear()} {company.name}. Sva prava zadržana.
              </p>
              <div className="text-right">
                <p className='text-white/40'>Created by <span>
                <a 
                  href="https://ajsasoft.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-white/10 p-1.5 text-white/40 hover:text-orange-400/80 hover:bg-amber-50/0 transition-colors duration-1000 ease-in-out"
                  
                >
                  AjsaSoft
                </a>
                </span>
                </p>
              </div>
              {/* <p className="text-white/40 text-center md:text-right">
                PIB: {company.pib} | MB: {company.mb}
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
