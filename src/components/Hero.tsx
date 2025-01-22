import { motion } from "framer-motion";
import TextPressure from "../shared/text";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          L'ESSENCE
        </motion.h1> */}
        <TextPressure
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-5xl"
        >
          L'ESSENCE
        </TextPressure>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl p-4"
        >
          Fine Dining & Exceptional Cuisine
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-amber-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-amber-700 transition-colors "
        >
          Reserve a Table
        </motion.button>
      </div>
    </section>
  );
}
