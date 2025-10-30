import { TreePine, Home, Footprints, Sparkles } from 'lucide-react';

const features = [
  {
    icon: TreePine,
    title: '2.5 Lush Acres',
    description: 'Fully fenced and perfect for dogs of all ages and sizes.',
    color: 'lime',
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Footprints,
    title: 'Leash Walks',
    description: 'Over 200 acres worth of private trails for endless canine adventures.',
    color: 'sky',
    image: 'https://images.pexels.com/photos/1612847/pexels-photo-1612847.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Home,
    title: 'Private Rooms',
    description: 'A puppy paradise away from home with 24 hour supervision.',
    color: 'coral',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Sparkles,
    title: 'New Facility',
    description: 'State of the art, fully heated and air conditioned facility.',
    color: 'lime',
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-lime-400" />
            <span className="text-sm font-semibold">Premium Amenities</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Dog Needs
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Redfern Resort offers a safe, fun, and engaging environment where your pup can socialize, stay active, and enjoy plenty of attention while you're away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              lime: 'from-lime-400 to-lime-600',
              sky: 'from-sky-400 to-sky-600',
              coral: 'from-coral-400 to-coral-600'
            };

            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative">
                  <div className="aspect-video bg-forest-600 rounded-xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">The Redfern Advantage</h3>
              <p className="text-white/80 text-lg">
                The utmost care and love will be given to your beloved pet while you are away on holiday or doing daycare. We offer a stimulating environment with the majority of their stay spent outside enjoying the fresh air, socializing and lots of exercise.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-lime-400 via-sky-400 to-coral-400 rounded-full flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 24 24" fill="white" className="w-16 h-16">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
