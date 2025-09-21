import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-red-950/40"></div>
      {/* Smudge effect at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-red-950/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let's make it happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:scale-105 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <Phone className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                  <div className="text-gray-300">+91 87654 32109</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:scale-105 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <Mail className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">info@ayyavupromoters.com</div>
                  <div className="text-gray-300">sales@ayyavupromoters.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:scale-105 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <MapPin className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-300">
                    123 Real Estate Plaza,<br />
                    Business District,<br />
                    City - 500001
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:scale-105 hover:bg-white/10 p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <Clock className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-300">Monday - Saturday: 9:00 AM - 7:00 PM</div>
                  <div className="text-gray-300">Sunday: 10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Send Us a Message</h3>
            <form className="space-y-6 bg-gradient-to-br from-red-950/30 to-gray-900/30 p-6 rounded-xl border border-red-600/20 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:border-red-400 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900/80 border border-red-600/30 rounded-lg focus:outline-none focus:border-red-400 hover:border-red-400 transition-all duration-300 text-white placeholder-gray-400 hover:scale-105"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900/80 border border-red-600/30 rounded-lg focus:outline-none focus:border-red-400 hover:border-red-400 transition-all duration-300 text-white placeholder-gray-400 hover:scale-105"
                />
              </div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-gray-900/80 border border-red-600/30 rounded-lg focus:outline-none focus:border-red-400 hover:border-red-400 transition-all duration-300 text-white placeholder-gray-400 hover:scale-105"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-900/80 border border-red-600/30 rounded-lg focus:outline-none focus:border-red-400 hover:border-red-400 transition-all duration-300 resize-none text-white placeholder-gray-400 hover:scale-105"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-400 hover:text-red-400 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;