import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Developer",
    company: "Addverb Technology",
    period: "January 2023 - Present",
    achievements: [
      "Designed and implemented user-friendly UIs for multiple modules, including collaborations with leading Indian fashion warehouse brands and market leaders in fashion, grocery, and beauty, delivering intuitive and seamless designs",
      "Developed generic reusable components using Angular and Angular Material UI, accelerating project delivery.",
      "Built RESTful APIs using Spring Boot and integrated them with Angular frontends for seamless data exchange.",
      "Developed database schemas, wrote optimized SQL queries, and managed CRUD operations using MySQL/PostgreSQL."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "eInfoChips - An Arrow Company",
    period: "May 2022 - July 2022",
    achievements: [
      "Developed a .NET-based web application to help bookstore owners efficiently manage their inventory and stock levels.",
      "Designed and implemented frontend interfaces for seamless user interaction and backend services for robust stock management."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Webmate.in",
    period: "June 2020 - Dec 2020",
    achievements: [
      "Developed end-to-end full stack solutions tailored to business requirements.",
      "Maintained and improved existing codebase ensuring code quality and performance."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
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

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-deep-slate border-2 border-electric-blue flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <div className="w-2 h-2 rounded-full bg-electric-blue"></div>
              </div>

              <div className="glassmorphism p-8 rounded-3xl group border-l-4 border-l-electric-blue hover:bg-white/10 transition-all cursor-default">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-slate-300 gap-2 font-medium">
                      <Briefcase size={16} className="text-electric-blue" />
                      {exp.company}
                    </div>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1.5 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-electric-blue mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
