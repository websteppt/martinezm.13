import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import CustomOrders from './components/CustomOrders';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CollectionDetail from './components/CollectionDetail';
import ProductDetail from './components/ProductDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-midnight-900">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Collection />
            <CustomOrders />
            <Contact />
          </>
        } />
        <Route path="/collection/:collectionId" element={<CollectionDetail />} />
        <Route path="/collection/:collectionId/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}