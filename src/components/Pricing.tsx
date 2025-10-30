import { Check, Clock, Package, AlertCircle, Syringe } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-lime-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-sky-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-lime-100 px-4 py-2 rounded-full mb-6">
            <Package className="w-4 h-4 text-forest-700" />
            <span className="text-sm font-semibold text-forest-700">Transparent Pricing</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-6">
            Affordable Care Plans
          </h2>

          <p className="text-xl text-forest-600 max-w-3xl mx-auto mb-4">
            All prices include taxes. No hidden fees, just quality care for your beloved pet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-lime-50 to-sky-50 rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-lime-200 hover:border-lime-300 transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-forest-800">$80</div>
                <div className="text-forest-600">per day</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-forest-800 mb-4">Boarding</h3>
            <p className="text-forest-600 mb-6">Premium overnight care in our comfortable facility</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Private room with 24/7 supervision</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Multiple outdoor play sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Leash walks on private trails</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Fresh bedding and comfortable space</span>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4 space-y-2 border border-lime-200">
              <div className="flex justify-between items-center">
                <span className="text-forest-600">7 nights</span>
                <span className="font-bold text-forest-800">$560.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-forest-600">14 nights</span>
                <span className="font-bold text-forest-800">$1,050.00</span>
              </div>
              <div className="flex justify-between items-center text-coral-600">
                <span className="font-medium">Extra dog</span>
                <span className="font-bold">+$40.00/day</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-forest-600 italic">
              *Ask us about pricing for extended stays
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-coral-50 rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-sky-200 hover:border-sky-300 transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-forest-800">$42</div>
                <div className="text-forest-600">per day</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-forest-800 mb-4">Daycare</h3>
            <p className="text-forest-600 mb-6">Full day of fun, exercise, and socialization</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">All-day outdoor play time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Socialization with other dogs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Access to 2.5 acres of play area</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-forest-700">Constant supervision and care</span>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-4 border border-sky-200">
              <div className="flex justify-between items-center text-coral-600">
                <span className="font-medium">Second dog discount</span>
                <span className="font-bold">25% off</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-forest-800 to-forest-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-forest-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Hours of Operation</h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Drop-off:</span>
                    <span className="font-semibold">7:00am - 9:00am</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pick-up:</span>
                    <span className="font-semibold">3:00pm - 6:00pm</span>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <div className="flex justify-between">
                      <span>Sat/Sun Drop-off:</span>
                      <span className="font-semibold">8:00am - 10:00am</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat/Sun Pick-up:</span>
                      <span className="font-semibold">8:00am - 5:00pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-coral-50 to-sky-50 rounded-2xl p-8 shadow-xl border-2 border-coral-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-coral-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">Required Vaccinations</h3>
                <div className="space-y-2 text-forest-600">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-coral-500" />
                    <span>Bordetella vaccination</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-coral-500" />
                    <span>Rabies vaccination</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-coral-500" />
                    <span>Flea and tick control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-coral-500" />
                    <span>Spayed/neutered (puppies exempt)</span>
                  </div>
                  <div className="pt-2 text-sm italic flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>$5.00 charge per medication administration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-lime-50 rounded-2xl p-8 border-2 border-lime-200 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-forest-800 mb-4">What to Pack for Your Visit</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Bed</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Blanket</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Favorite toys</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Special treats</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Leash</span>
              </div>
              <div className="flex items-center space-x-2 text-forest-700">
                <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                <span>Food (if your dog eats during the day)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
