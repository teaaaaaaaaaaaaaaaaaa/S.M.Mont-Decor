import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import LogoHorizontal from '../../assets/logos/Logo-horizontal.png';
import { company } from '../../data/company';
import { scrollToElement } from '../../utils/scrollToElement';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Usluge', href: '/#usluge', sectionId: 'usluge' },
  { label: 'Galerija', href: '/galerija', sectionId: '' },
  { label: 'O nama', href: '/#o-nama', sectionId: 'o-nama' },
  { label: 'Kontakt', href: '/kontakt', sectionId: '' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (isHome && link.sectionId) {
      e.preventDefault();
      scrollToElement(link.sectionId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/" className="flex-shrink-0">
              <img
                src={LogoHorizontal}
                alt={company.name}
                className="h-14 lg:h-16 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white/80 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href={company.emailHref}
                className="border-2 border-accent text-white bg-accent/10 hover:bg-accent/20 backdrop-blur-sm px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Zatražite ponudu
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Otvori meni"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
