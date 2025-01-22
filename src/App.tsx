import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Dishes from './components/Dishes';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Dishes />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;