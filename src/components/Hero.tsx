import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-cream-50 via-lime-50 to-sky-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-lime-300 rounded-full opacity-20 blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-coral-300 rounded-full opacity-10 blur-3xl animate-blob animation-delay-4000"></div>

        <svg className="absolute top-40 left-20 w-16 h-16 text-lime-400 opacity-40 animate-float" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.8 1 3.4 2.5 4.2v1.8c0 .6.4 1 1 1s1-.4 1-1v-1.8c1.5-.8 2.5-2.4 2.5-4.2C14.5 4 12.5 2 12 2zm0 7c-1.4 0-2.5-1.1-2.5-2.5S10.6 4 12 4s2.5 1.1 2.5 2.5S13.4 9 12 9z"/>
        </svg>

        <svg className="absolute bottom-40 right-32 w-20 h-20 text-sky-400 opacity-30 animate-float animation-delay-2000" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 5c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zm-5 7c0 1.1.9 2 2 2v-4c-1.1 0-2 .9-2 2zm10 0c0-1.1-.9-2-2-2v4c1.1 0 2-.9 2-2zm-5 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/>
        </svg>

        <svg className="absolute top-1/3 right-20 w-12 h-12 text-coral-400 opacity-40 animate-bounce-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-lime-200">
              <Sparkles className="w-4 h-4 text-coral-600" />
              <span className="text-sm font-medium text-forest-700">Trusted since 1972</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-800 leading-tight">
              Unleash Joy at
              <span className="block mt-2 bg-gradient-to-r from-coral-600 to-sky-600 bg-clip-text text-transparent">
                Redfern Resort
              </span>
            </h1>

            <p className="text-xl text-forest-600 leading-relaxed max-w-xl">
              Doggy Day Care and Boarding Kennel providing a safe and nurturing environment for your beloved dogs since 1972.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center space-x-2 bg-forest-700 text-white px-8 py-4 rounded-full hover:bg-forest-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">Book Your Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:705-760-2413"
                className="inline-flex items-center justify-center space-x-2 bg-white text-forest-700 px-8 py-4 rounded-full hover:bg-lime-50 transition-all shadow-md hover:shadow-lg border-2 border-forest-700 font-semibold"
              >
                <span>Call Us Now</span>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-800">50+</div>
                <div className="text-sm text-forest-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-lime-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-800">2.5</div>
                <div className="text-sm text-forest-600">Acres to Play</div>
              </div>
              <div className="w-px h-12 bg-lime-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-800">24/7</div>
                <div className="text-sm text-forest-600">Supervision</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-lime-400 via-sky-400 to-coral-400 rounded-3xl opacity-20 blur-2xl animate-pulse-slow"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-lime-200">
              <div className="aspect-[4/3] bg-gradient-to-br from-lime-100 via-sky-100 to-coral-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Happy dogs playing at Redfern Resort"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-2 border-lime-200">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-400 to-sky-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        🐕
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-forest-800">1000+</div>
                    <div className="text-forest-600">Happy Pups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
