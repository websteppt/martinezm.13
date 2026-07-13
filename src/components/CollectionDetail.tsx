import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import product3 from '../assets/products/product3.jpeg';
import product4 from '../assets/products/product4.jpeg';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type CollectionData = {
  name: string;
  description: string;
  products: Product[];
};

const collectionsData: Record<string, CollectionData> = {
  col1: {
    name: 'collection.col1.name',
    description: 'collection.col1.description',
    products: [
      { id: 'product3', name: 'collection.col1.product1.name', description: 'collection.col1.product1.description', image: product3 },
      { id: 'product4', name: 'collection.col1.product2.name', description: 'collection.col1.product2.description', image: product4 },
    ],
  },
  col2: {
    name: 'collection.col2.name',
    description: 'collection.col2.description',
    products: [
      { id: 'product3', name: 'collection.col1.product1.name', description: 'collection.col1.product1.description', image: product3 },
      { id: 'product4', name: 'collection.col1.product2.name', description: 'collection.col1.product2.description', image: product4 },
    ],
  },
  col3: {
    name: 'collection.col3.name',
    description: 'collection.col3.description',
    products: [
      { id: 'product3', name: 'collection.col1.product1.name', description: 'collection.col1.product1.description', image: product3 },
      { id: 'product4', name: 'collection.col1.product2.name', description: 'collection.col1.product2.description', image: product4 },
    ],
  },
};

export default function CollectionDetail() {
  const { collectionId } = useParams();
  const { t } = useTranslation();

  const collection = collectionId ? collectionsData[collectionId] : null;

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-midnight-300 mb-4">Coleção não encontrada.</p>
          <Link to="/" className="text-gold-400 hover:text-gold-300 font-body text-sm tracking-widest uppercase">
            Voltar ao início
          </Link>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          to="/#collection"
          className="inline-flex items-center gap-2 text-midnight-400 hover:text-gold-400 transition-colors duration-300 font-body text-xs tracking-[0.2em] uppercase mb-16"
        >
          <ArrowLeft size={16} />
          {t('collection.label')}
        </Link>

        <div className="text-center mb-20">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
            {t(collection.name)}
          </h1>
          <div className="luxury-divider w-16 mx-auto mb-6" />
          <p className="font-body text-midnight-300 max-w-2xl mx-auto text-lg">
            {t(collection.description)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.products.map((product, i) => (
            <Link
              key={product.id}
              to={`/collection/${collectionId}/${product.id}`}
              className="card-hover group block"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative bg-midnight-700/30 border border-gold-500/10 overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight-900/85 via-midnight-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl text-midnight-100 group-hover:text-gold-300 transition-colors duration-300">
                      {t(product.name)}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}