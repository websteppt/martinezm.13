import { useReveal } from '../hooks/useReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';

const productKeys = [
  //{ name: 'collection.product1.name', category: 'collection.product1.category', description: 'collection.product1.description', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800' },
  //{ name: 'collection.product2.name', category: 'collection.product2.category', description: 'collection.product2.description', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800' },
  //{ name: 'collection.product3.name', category: 'collection.product3.category', description: 'collection.product3.description', image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800' },
  //{ name: 'collection.product4.name', category: 'collection.product4.category', description: 'collection.product4.description', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800' },
  //{ name: 'collection.product5.name', category: 'collection.product5.category', description: 'collection.product5.description', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800' },
  //{ name: 'collection.product6.name', category: 'collection.product6.category', description: 'collection.product6.description', image: 'https://images.pexels.com/photos/265936/pexels-photo-265936.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Collection() {
  const { t } = useTranslation();
  const ref = useReveal();

  return (
    <section id="collection" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-midnight-900" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.2) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            {t('collection.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
            {t('collection.heading')}
          </h2>
          <div className="luxury-divider w-16 mx-auto mb-6" />
          <p className="font-body text-midnight-300 max-w-2xl mx-auto text-lg">
            {t('collection.description')}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productKeys.map((product, i) => (
            <div
              key={product.name}
              className="reveal card-hover group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative bg-midnight-700/30 border border-gold-500/10 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 via-midnight-900/30 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-midnight-900/70 backdrop-blur-sm border border-gold-500/20 font-body text-[10px] tracking-[0.3em] uppercase text-gold-400">
                      {t(product.category)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl text-midnight-100 mb-2 group-hover:text-gold-300 transition-colors duration-300">
                    {t(product.name)}
                  </h3>
                  <p className="font-body text-sm text-midnight-300 leading-relaxed mb-4">
                    {t(product.description)}
                  </p>
                  <a
                    href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Martinez%20M.13%20collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-gold-500 hover:text-gold-300 transition-colors duration-300"
                  >
                    {t('collection.inquire')}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
           {/* Note */}
        <p className="text-center font-body text-xs text-midnight-400 mt-10 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
          {t('collection.note')}
        </p>
      </div>
    </section>
  );
}
