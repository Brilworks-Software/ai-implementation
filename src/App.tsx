import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import CTA from './components/CTA';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      <Hero />
      <div id="problem">
        <Problem />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <Features />
      </div>
      <TargetAudience />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
