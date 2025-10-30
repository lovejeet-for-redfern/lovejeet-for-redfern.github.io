import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-1 bg-lime-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                  <path d="M18 8.5c0-2.5-2-4.5-4.5-4.5S9 6 9 8.5c0 1.4.7 2.7 1.7 3.5-2.8.8-5 3-5.7 5.8-.1.4.2.7.6.7h14.8c.4 0 .7-.3.6-.7-.7-2.8-2.9-5-5.7-5.8 1-.8 1.7-2.1 1.7-3.5zm-7 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5S11 9.9 11 8.5zM6 11c-.8 0-1.5-.7-1.5-1.5S5.2 8 6 8s1.5.7 1.5 1.5S6.8 11 6 11zm12 0c-.8 0-1.5-.7-1.5-1.5S17.2 8 18 8s1.5.7 1.5 1.5S18.8 11 18 11z"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-forest-800">
                <span className="text-coral-600">Red</span>fern Dog
                <span className="text-sky-500"> Resort</span>
              </h1>
              <p className="text-xs text-forest-600">Doggy Day Care & Boarding</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-forest-700 hover:text-coral-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-forest-700 hover:text-coral-600 transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-forest-700 hover:text-coral-600 transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-forest-700 hover:text-coral-600 transition-colors font-medium">
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-forest-700 text-white px-6 py-2.5 rounded-full hover:bg-forest-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-forest-700 hover:bg-lime-50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-lime-100">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-forest-700 hover:bg-lime-50 rounded-lg transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-forest-700 hover:bg-lime-50 rounded-lg transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-4 py-2 text-forest-700 hover:bg-lime-50 rounded-lg transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-forest-700 hover:bg-lime-50 rounded-lg transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-forest-700 text-white px-4 py-2.5 rounded-lg hover:bg-forest-800 transition-colors font-medium">
              Contact Us
            </button>
            <div className="pt-3 border-t border-lime-100 space-y-2">
              <a href="tel:705-760-2413" className="flex items-center space-x-2 text-forest-600 hover:text-coral-600 transition-colors">
                <Phone size={16} />
                <span className="text-sm">705-760-2413</span>
              </a>
              <a href="mailto:redferndogresort@gmail.com" className="flex items-center space-x-2 text-forest-600 hover:text-coral-600 transition-colors">
                <Mail size={16} />
                <span className="text-sm">redferndogresort@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
