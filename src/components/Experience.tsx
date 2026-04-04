import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profileData } from '../data/profileData';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 glass-card p-6 md:p-8 flex flex-col"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 shrink-0">
        <h2 className="text-2xl font-black text-text-main">
          Work <span className="text-accent-purple">Experience</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 relative scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
        <div className="absolute left-[15px] top-2 bottom-0 w-[2px] bg-purple-700/20 rounded-full" />
        <div className="space-y-6">
          {profileData.experiences.map((exp: any, index: any) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="relative pl-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[10px] w-3 h-3 bg-purple-700 rounded-full shadow-sm z-10 transform -translate-y-1/2 top-4 border-2 border-white" />

              <div className="bg-white/50 group-hover:bg-white/80 transition-colors p-5 rounded-2xl border border-white/60 shadow-sm relative">
                <div className="text-xs font-black text-accent-purple tracking-widest uppercase mb-1">
                  {exp.period}
                </div>
                <h3 className="text-base sm:text-lg font-black text-text-main group-hover:text-accent-pink transition-colors leading-tight">
                  {exp.role}
                </h3>
                <h4 className="text-xs sm:text-sm text-text-muted font-bold mb-3 flex items-center gap-1 mt-1">
                  <Briefcase size={14} className="text-accent-rose" />
                  {exp.company}
                </h4>
                <ul className="text-text-main text-xs font-semibold leading-relaxed list-disc list-inside space-y-1">
                  {exp.achievements.map((ach: string, i: number) => (
                    <li key={i} className="line-clamp-2">{ach}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
