import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { company } from '../../data/company';
import { scrollToElement } from '../../utils/scrollToElement';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Usluge', href: '/#usluge', sectionId: 'usluge' },
  { label: 'Galerija', href: '/galerija', sectionId: '' },
  { label: 'O nama', href: '/#o-nama', sectionId: 'o-nama' },
  { label: 'Kontakt', href: '/kontakt', sectionId: '' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (link: typeof navLinks[0]) => {
    onClose();
    if (isHome && link.sectionId) {
      setTimeout(() => scrollToElement(link.sectionId), 100);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full px-6 py-6">
            <div className="flex justify-end">
              <button onClick={onClose} className="text-white p-2">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) =>
                link.sectionId && isHome ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className="text-white text-2xl font-medium hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.sectionId ? link.href : link.href}
                    onClick={() => handleNavClick(link)}
                    className="text-white text-2xl font-medium hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}

              <a
                href={company.emailHref}
                className="mt-8 inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent/90 transition-colors"
                onClick={onClose}
              >
                Zatražite ponudu
              </a>
            </nav>

            <div className="flex flex-col items-center gap-3 pb-8 text-white/60 text-sm">
              <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                {company.phoneFormatted}
              </a>
              <a href={company.emailHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                {company.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
