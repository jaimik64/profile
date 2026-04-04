import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 glass-card p-6 md:p-8 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6 shrink-0">
        <h2 className="text-2xl font-black text-text-main">
          Creative <span className="text-accent-rose">Projects</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent">
        {profileData.projects.map((project: any, index: any) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="group block bg-white/40 hover:bg-white/70 transition-colors p-4 rounded-2xl border border-white/60 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4 h-full">
              <div className="w-full sm:w-1/3 aspect-video shrink-0 bg-white/50 rounded-xl overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-text-main group-hover:text-accent-pink transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-accent-pink bg-white p-1 rounded-full shadow-sm hover:scale-110 transition-transform flex-shrink-0">
                       <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
                <p className="text-text-muted text-xs font-semibold leading-relaxed line-clamp-2 mb-3">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag: string, i: number) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-white/80 text-pink-700 rounded-md border border-pink-100">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold px-2 py-1 bg-white/50 text-slate-500 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
