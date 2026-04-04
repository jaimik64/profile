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

      <div className="relative z-10 w-full min-h-screen flex justify-center">
        <div className="w-full max-w-[1200px]">
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 py-12 md:py-20 lg:py-0">
            {/* Left Column: Sticky Anchor */}
            <div className="lg:col-span-4 lg:h-screen lg:sticky lg:top-0 py-0 lg:py-24 flex flex-col justify-between">
               <Hero />
               <div className="hidden lg:block">
                 <Footer />
               </div>
            </div>
            
            {/* Right Column: Scroll Content */}
            <div className="lg:col-span-8 py-0 lg:py-24 space-y-24 lg:space-y-36">
               <About />
               <TechStack />
               <Experience />
               <Projects />
               <div className="lg:hidden block pt-10">
                 <Footer />
               </div>
            </div>
          </main>
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
