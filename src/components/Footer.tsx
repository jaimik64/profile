import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "jaimik.chauhan06@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-12 border-t border-white/10 mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-400 text-center mb-8 max-w-md">
          Currently open for new opportunities. Feel free to reach out if you have a question or just want to say hi!
        </p>

        <div className="flex gap-6 mb-12">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/jaimik64" // Provide actual github if different
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-slate-300 hover:text-white hover:border-electric-blue/50 transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/jaimikchauhan64"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-slate-300 hover:text-white hover:border-electric-blue/50 transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
        </div>

        <div className="flex items-center gap-2 bg-slate-800/50 border border-white/10 rounded-2xl p-2 mb-8 glassmorphism">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-slate-300">
            <Mail size={18} />
          </div>
          <span className="text-slate-300 font-medium px-2 truncate sm:max-w-none max-w-[150px]">
            {email}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            className="ml-2 flex items-center gap-2 bg-electric-blue/20 hover:bg-electric-blue text-electric-blue hover:text-white px-4 py-2 text-sm font-medium rounded-xl transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy'}
          </motion.button>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Jaimik Chauhan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
