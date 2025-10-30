import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <Reviews />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
