import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { profileData } from '../data/profileData';

interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  image: string;
  codeLink?: string;
  demoLink?: string;
}

const Projects = () => {

  const { projects } = profileData;

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Impact-Driven <span className="text-electric-blue">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Solutions engineered to solve real problems and deliver measurable business value.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glassmorphism rounded-3xl overflow-hidden group border-white/5 hover:border-electric-blue/50 transition-all flex flex-col"
            >
              <div className="relative h-60 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-deep-slate/40 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="text-electric-blue font-semibold text-sm uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag: any) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {
                    project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl text-sm font-medium"
                      >
                        <FaGithub size={18} />
                        View Code
                      </a>
                    )
                  }
                  {
                    project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="flex-1 flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-600 transition-colors py-3 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/20"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
