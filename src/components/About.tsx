import { motion } from 'framer-motion';
import { ChefHat, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Founded in 1985, L'ESSENCE has been at the forefront of culinary excellence
              for over three decades. Our commitment to exceptional ingredients, innovative
              techniques, and impeccable service has earned us recognition as one of the
              finest dining establishments.
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <div className="text-center">
                <ChefHat className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold">Master Chefs</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold">Michelin Stars</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold">Happy Guests</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Interior"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}