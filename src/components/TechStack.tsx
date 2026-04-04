import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiNextdotjs, SiFigma, SiCanva } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={36} />, color: 'text-orange-600', bg: 'bg-orange-100' },
  { name: 'CSS', icon: <FaCss3Alt size={36} />, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'React', icon: <FaReact size={36} />, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { name: 'Next.js', icon: <SiNextdotjs size={36} />, color: 'text-slate-900', bg: 'bg-slate-200' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={36} />, color: 'text-teal-600', bg: 'bg-teal-100' },
  { name: 'Bootstrap', icon: <SiBootstrap size={36} />, color: 'text-violet-600', bg: 'bg-violet-100' },
  { name: 'Figma', icon: <SiFigma size={36} />, color: 'text-pink-600', bg: 'bg-pink-100' },
  { name: 'Canva', icon: <SiCanva size={36} />, color: 'text-blue-500', bg: 'bg-blue-100' },
];

const TechStack = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-8 mt-24">
         <h2 className="text-sm font-black text-text-main flex items-center gap-2 uppercase tracking-[0.2em]">
            🚀 Tech <span className="text-accent-pink">Stack</span>
         </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring", bounce: 0.5 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className={`p-4 rounded-3xl ${skill.bg} ${skill.color} flex flex-col items-center justify-center gap-3 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-white cursor-pointer`}
          >
            {skill.icon}
            <span className="text-[11px] font-bold text-center tracking-wide text-text-main uppercase whitespace-nowrap truncate w-full">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
