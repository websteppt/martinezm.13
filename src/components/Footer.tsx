import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-gold-500/10">
      <div className="absolute inset-0 bg-midnight-800" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-xl tracking-widest gold-gradient-text mb-2">
              MARTINEZ M.13
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-midnight-400">
              {t('footer.tagline')}
            </p>
          </div>
          {/*}
          <div className="flex items-center gap-8">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-midnight-400 hover:text-gold-400 transition-colors duration-300" aria-label="WhatsApp">
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:contact@martinezm13.com" className="text-midnight-400 hover:text-gold-400 transition-colors duration-300" aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="https://instagram.com/martinezm13" target="_blank" rel="noopener noreferrer" className="text-midnight-400 hover:text-gold-400 transition-colors duration-300" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
          */}
          <div className="flex flex-col items-end text-right">
            <p className="font-body text-xs text-midnight-500 tracking-wider">
              &copy; {new Date().getFullYear()} Martinez M.13. {t('footer.rights')}
            </p>
            <p className="font-body text-xs text-midnight-400 tracking-wider mt-1">
              crafted by <span className="font-semibold">webstep</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}