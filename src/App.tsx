import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import About from './components/AboutMe';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-deep-slate text-crisp-white selection:bg-electric-blue selection:text-white">
      {/* Pattern overlay for extra modern feel */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-blue/10 via-deep-slate to-deep-slate pointer-events-none"></div>

      <div className="relative z-10">
        <main className="container mx-auto px-6 max-w-6xl">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
