import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between py-20 gap-12 lg:gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl flex-1 relative z-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:hidden w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden glassmorphism border border-white/10 shadow-lg shadow-electric-blue/20 p-1 bg-gradient-to-tr from-electric-blue/30 to-transparent shrink-0"
          >
            <img
              src="/images/profile.jpg"
              alt="Jaimik Chauhan"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium tracking-wide"
          >
            Full-Stack Engineer
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 text-crisp-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-300">Jaimik Chauhan</span>.
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
          Versatile Full-Stack Developer experienced in collaborating across teams to design responsive frontends and robust backends that power efficient, user-centric applications.
          Expertise in <strong className="text-white font-medium">React</strong>, <strong className="text-white font-medium">Angular</strong>, <strong className="text-white font-medium">Node.js</strong>, and <strong className="text-white font-medium">Spring Boot</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Jaimik_Chauhan_Resume.pdf"
            download="Jaimik_Chauhan_Resume.pdf"
            className="flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/25"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors border border-white/10 glassmorphism"
          >
            View Projects
            <ChevronRight size={20} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        className="hidden lg:block flex-1 w-full max-w-lg mx-auto relative z-10"
      >
        <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glassmorphism border border-white/10 shadow-2xl shadow-electric-blue/20 p-2 bg-gradient-to-tr from-electric-blue/20 to-transparent group">
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] md:rounded-[3rem] pointer-events-none" />
          <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src="/images/profile.jpg"
            alt="Jaimik Chauhan"
            className="w-full h-full object-cover rounded-[2.3rem] md:rounded-[2.8rem] transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 -z-10 opacity-20 hidden lg:block">
        <div className="w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-[128px]"></div>
      </div>
    </section>
  );
};

export default Hero;
