import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Us for Happy Paws and Play!
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to give your pup the ultimate care experience? Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-white/80 leading-relaxed">
                    2813 Lakefield Rd<br />
                    Peterborough, ON K9J 6X5
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2813+Lakefield+Rd,+Peterborough,+ON+K9J+6X5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-lime-400 hover:text-lime-300 transition-colors font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <a
                    href="tel:705-760-2413"
                    className="text-2xl font-bold text-white hover:text-lime-400 transition-colors"
                  >
                    705-760-2413
                  </a>
                  <p className="text-white/70 mt-2">We're here to answer your questions</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <a
                    href="mailto:redferndogresort@gmail.com"
                    className="text-lg text-white hover:text-lime-400 transition-colors break-all"
                  >
                    redferndogresort@gmail.com
                  </a>
                  <p className="text-white/70 mt-2">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lime-400 to-sky-500 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="w-7 h-7 text-forest-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-800 mb-3">Operating Hours</h3>
                  <div className="space-y-2 text-forest-800">
                    <div className="font-semibold">Weekdays (Mon-Fri)</div>
                    <div className="text-sm">Drop-off: 7:00am - 9:00am</div>
                    <div className="text-sm">Pick-up: 3:00pm - 6:00pm</div>
                    <div className="font-semibold mt-3">Weekends (Sat-Sun)</div>
                    <div className="text-sm">Drop-off: 8:00am - 10:00am</div>
                    <div className="text-sm">Pick-up: 8:00am - 5:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="aspect-video bg-forest-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.7!2d-78.3!3d44.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDIxJzAwLjAiTiA3OMKwMTgnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                    <path d="M18 8.5c0-2.5-2-4.5-4.5-4.5S9 6 9 8.5c0 1.4.7 2.7 1.7 3.5-2.8.8-5 3-5.7 5.8-.1.4.2.7.6.7h14.8c.4 0 .7-.3.6-.7-.7-2.8-2.9-5-5.7-5.8 1-.8 1.7-2.1 1.7-3.5zm-7 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5S11 9.9 11 8.5zM6 11c-.8 0-1.5-.7-1.5-1.5S5.2 8 6 8s1.5.7 1.5 1.5S6.8 11 6 11zm12 0c-.8 0-1.5-.7-1.5-1.5S17.2 8 18 8s1.5.7 1.5 1.5S18.8 11 18 11z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-800">
                    <span className="text-coral-600">Red</span>fern Dog
                    <span className="text-sky-500"> Resort</span>
                  </div>
                  <div className="text-sm text-forest-600 font-medium">Doggie Day Care & Boarding</div>
                </div>
              </div>

              <div className="aspect-[4/3] bg-gradient-to-br from-lime-100 to-sky-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Happy dog at Redfern Resort"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-center text-forest-600 mt-6 italic">
                "Where every pup is family"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <p className="text-white/80">
              © 2025 by Redfern Dog Resort. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
