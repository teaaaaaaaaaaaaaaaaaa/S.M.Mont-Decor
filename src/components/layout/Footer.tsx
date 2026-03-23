import { Link } from 'react-router-dom';
import { Phone, Mail, Camera } from 'lucide-react';
import LogoFull from '../../assets/logos/Logo-SM.svg';
import { company } from '../../data/company';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo & Description */}
          <div>
            <img src={LogoFull} alt={company.name} className="h-12 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed">
              Profesionalne adaptacije stanova i poslovnih prostora u Beogradu.
              Suva gradnja, gipsarski radovi, elektroinstalacije i kompletne adaptacije ključ u ruke.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigacija
            </h3>
            <ul className="space-y-3">
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
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
              <li>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Camera size={16} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} {company.name}. Sva prava zadržana.</p>
          <p>PIB: {company.pib} | MB: {company.mb}</p>
        </div>
      </div>
    </footer>
  );
}
