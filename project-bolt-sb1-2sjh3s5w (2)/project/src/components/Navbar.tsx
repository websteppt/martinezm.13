import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const navKeys = [
  { label: 'nav.home', href: '#hero' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.collection', href: '#collection' },
  { label: 'nav.custom', href: '#custom' },
  { label: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-900/95 backdrop-blur-md border-b border-gold-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="font-display text-2xl tracking-widest gold-gradient-text">
            MARTINEZ M.13
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navKeys.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-[0.2em] uppercase text-midnight-200 hover:text-gold-400 transition-colors duration-300"
              >
                {t(link.label)}
              </a>
            ))}

            {/* Language toggle */}
            <div className="flex items-center gap-1 font-body text-xs tracking-[0.15em] uppercase">
              <button
                onClick={() => setLanguage('pt')}
                className={`transition-colors duration-300 ${
                  language === 'pt' ? 'text-gold-400' : 'text-midnight-400 hover:text-midnight-200'
                }`}
                aria-label="Português"
              >
                PT
              </button>
              <span className="text-midnight-600 mx-1">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-300 ${
                  language === 'en' ? 'text-gold-400' : 'text-midnight-400 hover:text-midnight-200'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile language toggle */}
            <div className="flex items-center gap-1 font-body text-xs tracking-[0.15em] uppercase">
              <button
                onClick={() => setLanguage('pt')}
                className={`transition-colors duration-300 ${
                  language === 'pt' ? 'text-gold-400' : 'text-midnight-400'
                }`}
                aria-label="Português"
              >
                PT
              </button>
              <span className="text-midnight-600">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-300 ${
                  language === 'en' ? 'text-gold-400' : 'text-midnight-400'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gold-400 hover:text-gold-300 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-midnight-900/98 backdrop-blur-md border-t border-gold-700/20 px-6 py-6 space-y-4">
          {navKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm tracking-[0.2em] uppercase text-midnight-200 hover:text-gold-400 transition-colors duration-300"
            >
              {t(link.label)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
