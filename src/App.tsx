import React from 'react';
import Hero from './components/Hero';
import About from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-pink-700 selection:text-white bg-soft-bg overflow-x-hidden">
      {/* Decorative cute blurred blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-pink-700/20 rounded-full filter blur-3xl opacity-70 animate-blob pointer-events-none z-0"></div>
      <div className="fixed top-[20%] right-[-5%] w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-rose-700/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none z-0"></div>

      <div className="relative z-10 px-4 sm:px-6 py-12 md:py-20 w-full min-h-screen flex flex-col items-center justify-start">
        <div className="w-full max-w-[1240px]">
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] grid-flow-row-dense">
            <Hero />
            <TechStack />
            {/* The rest of the legacy components will be converted to tiles sequentially */}
            <About />
            <Projects />
            <Experience />
          </main>
          <div className="mt-20">
             <Footer />
          </div>
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
