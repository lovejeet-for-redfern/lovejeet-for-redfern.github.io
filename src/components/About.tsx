import { Heart, Shield, Sparkles, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lime-50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-lime-400 rounded-[3rem] opacity-10 rotate-3"></div>

            <div className="relative bg-gradient-to-br from-lime-50 to-sky-50 rounded-[2.5rem] p-8 shadow-xl border-2 border-lime-200">
              <div className="aspect-square bg-white rounded-[2rem] overflow-hidden shadow-lg mb-6">
                <img
                  src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dogs enjoying playtime"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-lime-300">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-forest-800">50+</div>
                  <div className="text-sm text-forest-600 font-medium">Years Strong</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-coral-600 text-white rounded-2xl shadow-xl p-5 rotate-3">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm font-medium">Care</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-lime-100 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-coral-600" />
              <span className="text-sm font-semibold text-forest-700">Making a Difference, One Paw at a Time</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-forest-800 leading-tight">
              Here for You and Your Fur Babies
            </h2>

            <p className="text-lg text-forest-600 leading-relaxed">
              At Redfern Resort, we've proudly been a part of the local community since 1972, providing a safe and nurturing environment for your beloved dogs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-lime-50 rounded-xl border border-lime-200 hover:border-lime-300 transition-colors">
                <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-forest-800 mb-1">Experienced Team</h3>
                  <p className="text-forest-600">Our experienced team is dedicated to ensuring that your furry friends receive the love, attention, and care they deserve while you're away.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-sky-50 rounded-xl border border-sky-200 hover:border-sky-300 transition-colors">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-forest-800 mb-1">Enriching Environment</h3>
                  <p className="text-forest-600">With spacious play areas and a variety of engaging activities, every dog enjoys an enriching experience that promotes both socialization and fun.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-coral-50 rounded-xl border border-coral-200 hover:border-coral-300 transition-colors">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-forest-800 mb-1">Safe & Supervised</h3>
                  <p className="text-forest-600">Trust us to keep your pup happy and healthy during their stay with us in our clean, fun environment that is fully supervised 24 hours a day.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xl font-semibold text-forest-800 italic">
                "Tanya and Todd will be your on-hands hosts for your fur babies while they stay with us."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
