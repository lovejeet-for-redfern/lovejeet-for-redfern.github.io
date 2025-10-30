import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Tracey Nader',
    rating: 5,
    text: 'Great place! Owners are super friendly and my dog loves it here. Clean and tidy kennels. Very reasonably priced. Would highly recommend',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Gillian Beggs',
    rating: 5,
    text: 'My dog jack is a very high energy puppy (husky) and I was so nervous to see how he would do somewhere else other than our home. He absolutely loved Redfern kennels! We had him there for a whole week during the day and he was always excited to go there and was exhausted when he came home. They give the dogs lots of exercise which is great! Highly recommended',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Matthew Cooper',
    rating: 5,
    text: 'My grandparents owned this place for many years and sold it to the most recent owners some time ago. They both passed in the last three plus years. I miss this place and am happy it\'s going strong with a great upgraded facility:-)',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-gradient-to-br from-lime-50 via-white to-sky-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-lime-200 mb-6">
            <Star className="w-4 h-4 text-coral-600 fill-coral-600" />
            <span className="text-sm font-semibold text-forest-700">Testimonials</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-6">
            What Pet Parents Say
          </h2>

          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our wonderful clients have to say about their experience at Redfern Resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-lime-100 hover:border-lime-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-sky-400 to-coral-400 rounded-t-2xl"></div>

              <div className="absolute -top-4 right-8 w-12 h-12 bg-gradient-to-br from-lime-400 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-md ring-4 ring-lime-100">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-forest-800 text-lg">{review.name}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-coral-500 fill-coral-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-forest-600 leading-relaxed">
                "{review.text}"
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral-400 via-sky-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-lg border border-lime-200">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-coral-500 fill-coral-500" />
                ))}
              </div>
              <div className="text-3xl font-bold text-forest-800">5.0</div>
              <div className="text-sm text-forest-600">Average Rating</div>
            </div>

            <div className="w-px h-16 bg-lime-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-forest-800">50+</div>
              <div className="text-sm text-forest-600">Happy Reviews</div>
            </div>

            <div className="w-px h-16 bg-lime-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-forest-800">1000+</div>
              <div className="text-sm text-forest-600">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
