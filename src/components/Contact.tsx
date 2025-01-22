import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <p>123 Gourmet Street, Luxury District</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p>Mon-Sat: 5:30 PM - 11:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              ></textarea>
            </div>
            <button className="w-full bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}