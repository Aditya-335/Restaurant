import { motion } from 'framer-motion';

const dishes = [
  {
    name: 'Lobster Thermidor',
    description: 'Fresh lobster in a rich brandy sauce',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Wagyu Beef',
    description: 'Grade A5 Japanese Wagyu with truffle sauce',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Dishes() {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Signature Dishes
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-200">{dish.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}