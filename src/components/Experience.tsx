import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';


const Experience = () => {

  const { experiences } = profileData;

  return (
    <section id="experience" className="section-odd section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Work <span className="text-electric-blue">Experience</span>
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2" />
          {experiences.map((exp: any, index: number) => (

            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-electric-blue rounded-full border-4 border-slate-900 z-10 transform -translate-x-1/2 md:-translate-x-1/2 mt-6 md:mt-0" />

              {/* Date (for desktop) */}
              <div className={`hidden md:block w-1/2 px-12 md:px-16 lg:px-20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className={`text-electric-blue font-mono text-lg font-bold flex items-center gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {index % 2 !== 0 && <FaCalendarAlt />}
                  {exp.period}
                  {index % 2 === 0 && <FaCalendarAlt />}
                </div>
              </div>
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-12 md:pl-16 lg:pl-24' : 'pl-12 md:pl-0 md:pr-16 lg:pr-24'}`}
              >
                <div className="glassmorphism p-8 rounded-2xl transition-all shadow-xl hover:-translate-y-1 relative group hover:border-electric-blue/30">
                  {/* Mobile Date */}
                  <div className="md:hidden text-electric-blue font-mono text-sm font-bold mb-2 flex items-center gap-2">
                    <FaCalendarAlt /> {exp.period}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">{exp.role}</h3>
                  <h4 className="text-lg text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-slate-500" /> {exp.company}
                  </h4>

                  <ul className="space-y-3">
                    {exp.achievements.map((bullet: any, i: number) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                        <span className="text-electric-blue mr-2 mt-1.5">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
