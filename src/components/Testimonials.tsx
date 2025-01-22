import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "An unforgettable dining experience. The attention to detail is remarkable.",
    author: "James Wilson",
    role: "Food Critic"
  },
  {
    text: "The best fine dining experience I've had in years. Every dish was perfect.",
    author: "Sarah Chen",
    role: "Food Blogger"
  },
  {
    text: "Exceptional service and atmosphere. A must-visit for food enthusiasts.",
    author: "Michael Brown",
    role: "Restaurant Reviewer"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-900 py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Guest Reviews
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 md:p-8 rounded-lg"
            >
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-600" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-amber-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}