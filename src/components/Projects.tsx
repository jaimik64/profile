import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';

const Projects = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-sm font-black text-text-main flex items-center gap-2 uppercase tracking-[0.2em]">
          Creative <span className="text-accent-rose">Projects</span>
        </h2>
      </div>

      <div className="space-y-8">
        {profileData.projects.map((project: any, index: any) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            key={index}
            className="group block bg-white/50 hover:bg-white/80 transition-colors p-6 sm:p-8 rounded-[2rem] border border-white/60 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 h-full items-start">
              <div className="w-full md:w-[45%] aspect-video bg-white/50 rounded-2xl overflow-hidden relative shadow-sm border border-white">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 flex flex-col pt-2">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-main group-hover:text-accent-pink transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-accent-pink bg-white p-2 rounded-full shadow-sm hover:scale-110 transition-transform flex-shrink-0 border border-pink-100">
                       <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <p className="text-text-main text-sm md:text-base font-semibold leading-relaxed mb-6">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 bg-white text-pink-700 rounded-lg border border-pink-100 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
