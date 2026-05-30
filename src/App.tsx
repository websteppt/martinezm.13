import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import CustomOrders from './components/CustomOrders';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-midnight-900">
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <CustomOrders />
      <Contact />
      <Footer />
    </div>
  );
}
