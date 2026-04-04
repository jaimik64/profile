import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiNextdotjs, SiFigma, SiCanva } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={32} />, color: 'text-orange-600', bg: 'bg-orange-100' },
  { name: 'CSS', icon: <FaCss3Alt size={32} />, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'React', icon: <FaReact size={32} />, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: 'text-slate-900', bg: 'bg-slate-200' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: 'text-teal-600', bg: 'bg-teal-100' },
  { name: 'Bootstrap', icon: <SiBootstrap size={32} />, color: 'text-violet-600', bg: 'bg-violet-100' },
  { name: 'Figma', icon: <SiFigma size={32} />, color: 'text-pink-600', bg: 'bg-pink-100' },
  { name: 'Canva', icon: <SiCanva size={32} />, color: 'text-blue-500', bg: 'bg-blue-100' },
];

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1 glass-card p-6 md:p-8 flex flex-col justify-center"
    >
      <div className="flex items-center justify-between mb-6">
         <h2 className="text-2xl font-black text-text-main flex items-center gap-2">
            🚀 Tech <span className="text-accent-pink">Stack</span>
         </h2>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring", bounce: 0.5 }}
            whileHover={{ y: -5, scale: 1.1 }}
            className={`p-3 rounded-2xl ${skill.bg} ${skill.color} flex flex-col items-center justify-center gap-2 transition-all duration-300 shadow-sm border border-white`}
          >
            {skill.icon}
            <span className="text-[10px] font-bold text-center tracking-wider text-text-main uppercase whitespace-nowrap truncate w-full">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
