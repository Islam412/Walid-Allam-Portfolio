import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkGallery from './components/WorkGallery';
import CVSection from './components/CVSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <WorkGallery />
        <CVSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;