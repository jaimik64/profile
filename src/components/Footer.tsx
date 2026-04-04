import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "chauhandiya2114@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-12 mt-10 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-pink/50 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-4 text-text-main">Let's <span className="text-accent-pink">Connect</span></h2>
        <p className="text-text-muted text-sm sm:text-base text-center mb-8 max-w-md font-medium leading-relaxed px-4">
          Currently open for new opportunities. Feel free to reach out if you have a question or just want to say hi!
        </p>

        <div className="flex gap-6 mb-12">
          <motion.a
            whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Diya-Chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-accent-pink transition-colors shadow-sm"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, rotate: -10, y: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/diya-chauhan14/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-accent-pink transition-colors shadow-sm"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        <div className="flex items-center gap-2 bg-white/70 border border-white rounded-full p-2 mb-8 shadow-sm">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-700">
            <Mail size={18} />
          </div>
          <span className="text-text-main font-bold px-2 truncate sm:max-w-none max-w-[150px]">
            {email}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className="ml-2 flex items-center gap-2 bg-pink-700 hover:bg-pink-600 text-white px-5 py-2 text-sm font-bold rounded-full transition-colors shadow-sm"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
        </div>

        <p className="text-accent-purple/70 font-bold text-sm">
          © {new Date().getFullYear()} Diya Chauhan. Made with 🤍
        </p>
      </div>
    </footer>
  );
};

export default Footer;
