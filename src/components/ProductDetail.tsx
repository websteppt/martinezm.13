import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import product3 from '../assets/products/product3.jpeg';
import product4 from '../assets/products/product4.jpeg';

type Product = {
  name: string;
  description: string;
  image: string;
};

const allProducts: Record<string, Record<string, Product>> = {
  col1: {
    product3: { name: 'collection.col1.product1.name', description: 'collection.col1.product1.description', image: product3 },
    product4: { name: 'collection.col1.product2.name', description: 'collection.col1.product2.description', image: product4 },
  },
  col2: {},
  col3: {},
};

export default function ProductDetail() {
  const { collectionId, productId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const product = collectionId && productId ? allProducts[collectionId]?.[productId] : null;

  const handleBack = () => {
    navigate(`/collection/${collectionId}`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-midnight-300 mb-4">Produto não encontrado.</p>
          <button onClick={handleBack} className="text-gold-400 hover:text-gold-300 font-body text-sm tracking-widest uppercase">
            {t('collection.back')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-32 lg:py-40">
      <div className="absolute inset-0 bg-midnight-900" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.3) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-midnight-400 hover:text-gold-400 transition-colors duration-300 font-body text-xs tracking-[0.2em] uppercase mb-16"
        >
          <ArrowLeft size={16} />
          {t('collection.back')}
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={t(product.name)}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl gold-gradient-text mb-6">
              {t(product.name)}
            </h1>
            <div className="luxury-divider w-16 mb-8" />
            <p className="font-body text-midnight-300 leading-relaxed text-lg mb-12">
              {t(product.description)}
            </p>
            
              <a href="https://wa.me/1234567890?text=Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 gold-gradient-bg text-midnight-900 font-body text-sm tracking-[0.25em] uppercase font-semibold transition-all duration-500 hover:shadow-[0_0_30px_rgba(176,120,32,0.3)] self-start"
            >
              <MessageCircle size={18} />
              {t('custom.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}