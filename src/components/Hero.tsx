import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { profileData } from '../data/profileData';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 glass-card p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink/5 via-transparent to-accent-purple/5 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-700 z-0" />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div
           whileHover={{ scale: 1.05, rotate: 5 }}
           className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-[0_10px_30px_rgba(219,39,119,0.3)] mb-6 overflow-hidden bg-white/50"
        >
            <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt={profileData.personalInfo.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-pill px-5 py-2 flex items-center gap-2 text-sm font-black text-accent-pink tracking-wide mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-pink"></span>
          </span>
          Currently Building Magic
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-text-main leading-tight tracking-tight">
          Hi! I'm <br className="hidden sm:block" />
          <span className="text-accent-pink drop-shadow-sm">
            {profileData.personalInfo.name}.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-text-muted mb-8 max-w-sm font-semibold mx-auto">
          {profileData.personalInfo.summary.split('. ')[0]}.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
          href={`${import.meta.env.BASE_URL}DiyaChauhan_resume.pdf`}
          download="DiyaChauhan_resume.pdf"
          className="flex items-center justify-center gap-2 bg-pink-700 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
        >
          <Download size={20} />
          Download Resume
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
