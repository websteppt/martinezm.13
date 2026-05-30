import { useReveal } from '../hooks/useReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { MessageCircle, Gem, Palette, Wrench } from 'lucide-react';

const featureKeys = [
  { icon: Gem, title: 'custom.feature1.title', description: 'custom.feature1.description' },
  { icon: Palette, title: 'custom.feature2.title', description: 'custom.feature2.description' },
  { icon: Wrench, title: 'custom.feature3.title', description: 'custom.feature3.description' },
];

export default function CustomOrders() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="custom" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800/30 to-midnight-900" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(201,162,39,0.3) 0%, transparent 50%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            {t('custom.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
            {t('custom.heading')}
          </h2>
          <div className="luxury-divider w-16 mx-auto mb-6" />
          <p className="font-body text-midnight-300 max-w-2xl mx-auto text-lg">
            {t('custom.description')}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featureKeys.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal p-8 bg-midnight-700/20 border border-gold-500/10 text-center hover:border-gold-500/25 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <feature.icon className="mx-auto mb-5 text-gold-400" size={32} strokeWidth={1} />
              <h3 className="font-display text-xl text-midnight-100 mb-3">{t(feature.title)}</h3>
              <p className="font-body text-sm text-midnight-300 leading-relaxed">{t(feature.description)}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
          <div className="max-w-xl mx-auto p-10 border border-gold-500/20 bg-midnight-800/30">
            <p className="font-display text-2xl text-midnight-100 mb-3">
              {t('custom.cta.title')}
            </p>
            <p className="font-body text-sm text-midnight-300 mb-8">
              {t('custom.cta.description')}
            </p>
            <a
              href="https://wa.me/1234567890?text=Hello%20Martinez%20M.13%2C%20I%20am%20interested%20in%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 gold-gradient-bg text-midnight-900 font-body text-sm tracking-[0.25em] uppercase font-semibold transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)]"
            >
              <MessageCircle size={18} />
              <span>{t('custom.cta.button')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
