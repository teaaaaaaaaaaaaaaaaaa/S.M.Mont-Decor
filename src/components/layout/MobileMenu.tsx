import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { company } from '../../data/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Usluge', href: '/usluge' },
  { label: 'Galerija', href: '/galerija' },
  { label: 'O nama', href: '/o-nama' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Block scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Force reflow to sync layout before applying overflow
      document.body.getBoundingClientRect();

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[100] w-full bg-primary shadow-2xl"
          >
          <div className="flex flex-col h-full px-6 py-6">
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={handleNavClick}
                  className="text-white text-2xl font-medium hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

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
        </>
      )}
    </AnimatePresence>
  );
}
