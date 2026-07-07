import { useReveal } from '../hooks/useReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
//import product1 from '../assets/products/product1.jpeg';
//import product2 from '../assets/products/product2.png';
import product3 from '../assets/products/product3.jpeg';
import product4 from '../assets/products/product4.jpeg';

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
};



const productKeys: Product[] = [
  //{ name: 'collection.product1.name', category: 'collection.product1.category', description: 'collection.product1.description', image: product1 },
  //{ name: 'collection.product2.name', category: 'collection.product2.category', description: 'collection.product2.description', image: product2 },
  { name: 'collection.product3.name', category: 'collection.product3.category', description: 'collection.product3.description', image: product3 },
  { name: 'collection.product4.name', category: 'collection.product4.category', description: 'collection.product4.description', image: product4 },
  //{ name: 'collection.product5.name', category: 'collection.product5.category', description: 'collection.product5.description', image: product5 },
  //{ name: 'collection.product6.name', category: 'collection.product6.category', description: 'collection.product6.description', image: product6 },
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
                {/* Image — ocupa o card todo, sem nome/categoria/descrição */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.category)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight-900/85 via-midnight-900/20 to-transparent" />

                  {/* CTA sobreposto na base da imagem */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <a
                      href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Martinez%20M.13%20collection."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-gold-400 hover:text-gold-300 transition-colors duration-300"
                    >
                      {t('collection.inquire')}
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
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