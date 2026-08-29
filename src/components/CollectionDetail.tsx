import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import painel_atlas from '../assets/products/painel_atlas.jpeg';
import painel_ascension from '../assets/products/painel_ascension.jpeg';
import painel_portucale from '../assets/products/painel_portucale.jpeg';
import painel_redemption from '../assets/products/painel_redemption.jpeg';
import painel_terra from '../assets/products/painel_terra.jpeg';
import painel_vigilis from '../assets/products/painel_vigilis.jpeg';
import cover1 from '../assets/products/cover1.png';
import cover2 from '../assets/products/cover2.png';
import cover3 from '../assets/products/cover3.png';
import cover4 from '../assets/products/cover4.png';
import quartzitedrift from '../assets/products/quartzitedrift.png';
import stonemono from '../assets/products/stonemono.png';
import stoneorig from '../assets/products/stoneorig.png';
import strataveil from '../assets/products/strataveil.png';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  formatImage?: string;
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
      { id: 'p1', name: 'collection.col1.product1.name', description: 'collection.col1.product1.description', image: painel_atlas },
      { id: 'p2', name: 'collection.col1.product2.name', description: 'collection.col1.product2.description', image: painel_ascension },
      { id: 'p3', name: 'collection.col1.product3.name', description: 'collection.col1.product3.description', image: painel_portucale },
      { id: 'p4', name: 'collection.col1.product4.name', description: 'collection.col1.product4.description', image: painel_redemption },
      { id: 'p5', name: 'collection.col1.product5.name', description: 'collection.col1.product5.description', image: painel_terra },
      { id: 'p6', name: 'collection.col1.product6.name', description: 'collection.col1.product6.description', image: painel_vigilis },
    ],
  },
  col2: {
    name: 'collection.col2.name',
    description: 'collection.col2.description',
    products: [
      { id: 'p1', name: 'collection.col2.product1.name', description: 'collection.col2.product1.description', image: cover2, formatImage: quartzitedrift },
      { id: 'p2', name: 'collection.col2.product2.name', description: 'collection.col2.product2.description', image: cover3, formatImage: stonemono },
      { id: 'p3', name: 'collection.col2.product3.name', description: 'collection.col2.product3.description', image: cover4, formatImage: stoneorig },
      { id: 'p4', name: 'collection.col2.product4.name', description: 'collection.col2.product4.description', image: cover1, formatImage: strataveil },
    ],
  },
};

export default function CollectionDetail() {
  const { collectionId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const collection = collectionId ? collectionsData[collectionId] : null;

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-midnight-300 mb-4">Coleção não encontrada.</p>
          <button onClick={handleBack} className="text-gold-400 hover:text-gold-300 font-body text-sm tracking-widest uppercase">
            {t('collection.back')}
          </button>
        </div>
      </div>
    );
  }

  const collectionName = t(collection.name);
  const collectionDescription = t(collection.description);
  const pageTitle = `${collectionName} | M Signature`;
  const canonicalUrl = `https://msignature.pt/collection/${collectionId}`;
  const shareImage = collection.products[0]?.image;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={collectionDescription.slice(0, 155)} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={collectionDescription.slice(0, 155)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {shareImage && <meta property="og:image" content={shareImage} />}
      </Helmet>

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
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-midnight-400 hover:text-gold-400 transition-colors duration-300 font-body text-xs tracking-[0.2em] uppercase mb-16"
          >
            <ArrowLeft size={16} />
            {t('collection.back')}
          </button>

          <div className="text-center mb-20">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text mb-6">
              {collectionName}
            </h1>
            <div className="luxury-divider w-16 mx-auto mb-6" />
            <p className="font-body text-midnight-300 max-w-2xl mx-auto text-lg">
              {collectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.products.map((product, i) => (
              <button
                key={product.id}
                onClick={() => navigate(`/collection/${collectionId}/${product.id}`)}
                className="card-hover group block text-left"
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

                  {product.formatImage && (
                    <div className="p-3 border-t border-gold-500/10">
                      <img
                        src={product.formatImage}
                        alt={`${t(product.name)} - formato`}
                        className="w-full h-20 object-cover opacity-90"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}