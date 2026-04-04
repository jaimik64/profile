import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profileData } from '../data/profileData';

const Experience = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
        <h2 className="text-sm font-black text-text-main flex items-center gap-2 uppercase tracking-[0.2em] mt-24">
          Work <span className="text-accent-purple">Experience</span>
        </h2>
      </div>

      <div className="relative pl-0 sm:pl-4">
        <div className="absolute left-[3px] sm:left-[19px] top-4 bottom-0 w-[4px] bg-gradient-to-b from-purple-500/20 to-rose-500/20 rounded-full" />
        <div className="space-y-12">
          {profileData.experiences.map((exp: any, index: any) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              key={index}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-3px] sm:left-[13px] w-4 h-4 bg-purple-700 rounded-full shadow-sm z-10 transform -translate-y-1/2 top-10 border-[3px] border-white group-hover:scale-125 transition-transform" />

              <div className="glass-card group-hover:bg-white/80 transition-colors p-6 sm:p-8 border border-white/60 shadow-sm relative">
                <div className="text-xs font-black text-accent-purple tracking-widest uppercase mb-2">
                  {exp.period}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-text-main group-hover:text-accent-pink transition-colors leading-tight">
                  {exp.role}
                </h3>
                <h4 className="text-sm sm:text-base text-text-muted font-bold mb-5 flex items-center gap-2 mt-2">
                  <Briefcase size={16} className="text-accent-rose" />
                  {exp.company}
                </h4>
                <ul className="text-text-main text-sm md:text-base font-semibold leading-relaxed list-disc list-inside space-y-2">
                  {exp.achievements.map((ach: string, i: number) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
