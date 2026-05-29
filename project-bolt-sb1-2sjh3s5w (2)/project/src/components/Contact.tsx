import { useReveal } from '../hooks/useReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    labelKey: 'contact.whatsapp.label',
    valueKey: 'contact.whatsapp.value',
    descKey: 'contact.whatsapp.description',
    href: 'https://wa.me/1234567890?text=Hello%20Martinez%20M.13',
    external: true,
  },
  {
    icon: Mail,
    labelKey: 'contact.email.label',
    valueKey: 'contact.email.value',
    descKey: 'contact.email.description',
    href: 'mailto:contact@martinezm13.com',
    external: false,
  },
  {
    icon: Instagram,
    labelKey: 'contact.instagram.label',
    valueKey: 'contact.instagram.value',
    descKey: 'contact.instagram.description',
    href: 'https://instagram.com/martinezm13',
    external: true,
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="contact" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 to-midnight-800" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            {t('contact.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
            {t('contact.heading')}
          </h2>
          <div className="luxury-divider w-16 mx-auto mb-6" />
          <p className="font-body text-midnight-300 max-w-xl mx-auto text-lg">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, i) => (
            <a
              key={method.labelKey}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className="reveal group p-8 bg-midnight-700/20 border border-gold-500/10 text-center hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <method.icon
                className="mx-auto mb-5 text-gold-400 group-hover:text-gold-300 transition-colors duration-300"
                size={32}
                strokeWidth={1}
              />
              <h3 className="font-display text-xl text-midnight-100 mb-2 group-hover:text-gold-300 transition-colors duration-300">
                {t(method.labelKey)}
              </h3>
              <p className="font-body text-sm text-gold-500 mb-2">
                {t(method.valueKey)}
              </p>
              <p className="font-body text-xs text-midnight-400">{t(method.descKey)}</p>
            </a>
          ))}
        </div>

        {/* Location accent */}
        <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-3 text-midnight-400">
            <MapPin size={16} strokeWidth={1} className="text-gold-500/60" />
            <span className="font-body text-sm tracking-[0.15em] uppercase">
              {t('contact.location')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
