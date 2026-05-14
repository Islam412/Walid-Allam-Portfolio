import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkGallery from './components/WorkGallery';
import CVSection from './components/CVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WorkGallery />
      <CVSection />
      <Footer />
    </div>
  );
}

export default App;