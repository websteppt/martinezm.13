import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import bgTexture from '../assets/texture.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const whatsappUrl = 'https://wa.me/1234567890?text=Hello%20Martinez%20M.13%2C%20I%20am%20interested%20in%20your%20collection.';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgTexture})` }} />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)' }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(176,120,32,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(176,120,32,0.2) 0%, transparent 50%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-gold-500/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-gold-500/30" />
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gold-500/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gold-500/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold-500/30" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in mb-6">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-400">{t('hero.preTitle')}</span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.05em] leading-none mb-6 animate-fade-in-up">
          <span className="gold-gradient-text">{t('hero.brand')}</span>
          <br />
          <span className="text-midnight-100 font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.15em]">{t('hero.subBrand')}</span>
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl italic text-gold-300/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{t('hero.tagline')}</p>
        <div className="luxury-divider w-24 mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }} />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#collection" className="group relative inline-flex items-center gap-3 px-10 py-4 border border-gold-500/60 text-gold-400 font-body text-sm tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 hover:border-gold-400 hover:text-gold-300">
            <span className="absolute inset-0 bg-gold-500/0 transition-all duration-500 group-hover:bg-gold-500/10" />
            <span className="relative">{t('hero.viewCollection')}</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-10 py-4 gold-gradient-bg text-midnight-900 font-body text-sm tracking-[0.25em] uppercase font-semibold transition-all duration-500 hover:shadow-[0_0_30px_rgba(176,120,32,0.3)]">
            <MessageCircle size={18} />
            <span>{t('hero.whatsapp')}</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-gold-500/50 hover:text-gold-400 transition-colors duration-300">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">{t('hero.scroll')}</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}