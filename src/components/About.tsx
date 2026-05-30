import { useReveal } from '../hooks/useReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { Diamond } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800/50 to-midnight-900" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            {t('about.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
            {t('about.heading')}
          </h2>
          <div className="luxury-divider w-16 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Story */}
          <div className="reveal space-y-8" style={{ transitionDelay: '0.2s' }}>
            <p className="font-display text-2xl md:text-3xl text-midnight-100 leading-relaxed">
              {t('about.story1')}
            </p>
            <p className="font-body text-midnight-300 leading-loose text-lg">
              {t('about.story2')}
            </p>
            <p className="font-body text-midnight-300 leading-loose text-lg">
              {t('about.story3')}
            </p>
          </div>

          {/* Right — Accent card */}
          <div className="reveal flex justify-center" style={{ transitionDelay: '0.4s' }}>
            <div className="relative w-full max-w-md">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold-500/20" />
              <div className="absolute -inset-8 border border-gold-500/10" />

              <div className="relative bg-midnight-700/50 border border-gold-500/20 p-12 text-center">
                <Diamond className="mx-auto mb-6 text-gold-400" size={40} strokeWidth={1} />
                <p className="font-display text-3xl md:text-4xl gold-gradient-text mb-4">
                  M.13
                </p>
                <div className="luxury-divider w-12 mx-auto mb-4" />
                <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-500/70">
                  {t('about.accent')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
