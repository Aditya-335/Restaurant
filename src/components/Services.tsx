import { motion } from 'framer-motion';
import { ChefHat, Users, Utensils } from 'lucide-react';
import SpotlightCard from '../shared/ServiceCard';

const services = [
  {
    icon: <Utensils className="w-12 h-12 text-amber-600" />,
    title: 'Fine Dining',
    description: 'Experience culinary excellence with our carefully crafted menu',
  },
  {
    icon: <Users className="w-12 h-12 text-amber-600" />,
    title: 'Private Events',
    description: 'Host your special occasions in our elegant private dining rooms',
  },
  {
    icon: <ChefHat className="w-12 h-12 text-amber-600" />,
    title: 'Chefs Table',
    description: 'Intimate dining experience with our executive chef',
  },
];

export default function Services() {
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
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="text-center" spotlightColor="rgba(255, 255, 0, 0.2)">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
