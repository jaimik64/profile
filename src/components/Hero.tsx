import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { profileData } from '../data/profileData';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="flex flex-col h-full items-start text-left"
    >
      <motion.div
         whileHover={{ scale: 1.05, rotate: 3 }}
         className="w-32 h-44 sm:w-40 sm:h-56 lg:w-56 lg:h-72 rounded-[2rem] sm:rounded-[3rem] border-4 border-white shadow-lg mb-8 overflow-hidden bg-white/50 shrink-0"
      >
          <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt={profileData.personalInfo.name} className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-pill px-4 py-2 flex items-center gap-2 text-xs font-black text-accent-pink tracking-wide mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-pink"></span>
        </span>
        Currently Building Magic
      </motion.div>

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-text-main leading-tight tracking-tight">
        Hi, I'm <br />
        <span className="text-accent-pink drop-shadow-sm">
          {profileData.personalInfo.name.split(' ')[0]}.
        </span>
      </h1>
      
      <p className="text-base sm:text-lg text-text-muted mb-10 max-w-sm font-semibold">
        {profileData.personalInfo.summary}
      </p>

      <motion.a
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        href={`${import.meta.env.BASE_URL}DiyaChauhan_resume.pdf`}
        download="DiyaChauhan_resume.pdf"
        className="flex items-center justify-center gap-2 bg-pink-700 hover:bg-rose-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-md w-full sm:w-auto mt-auto lg:mt-0"
      >
        <Download size={18} />
        Download Resume
      </motion.a>
    </motion.div>
  );
};

export default Hero;
