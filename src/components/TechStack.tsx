import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaAngular, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTailwindcss, SiNodedotjs, SiMongodb, SiKubernetes, SiRedis, SiRabbitmq, SiBootstrap } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

const skills = [
  { name: 'Java', icon: <FaJava size={32} />, color: 'group-hover:text-amber-500' },
  { name: 'Spring Boot', icon: <SiSpringboot size={32} />, color: 'group-hover:text-green-500' },
  { name: 'React', icon: <FaReact size={32} />, color: 'group-hover:text-cyan-400' },
  { name: 'Angular', icon: <FaAngular size={32} />, color: 'group-hover:text-red-600' },
  { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: 'group-hover:text-green-600' },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, color: 'group-hover:text-green-500' },
  { name: 'MySQL', icon: <SiMysql size={32} />, color: 'group-hover:text-blue-500' },
  { name: 'Docker', icon: <FaDocker size={32} />, color: 'group-hover:text-blue-400' },
  { name: 'Kubernetes', icon: <SiKubernetes size={32} />, color: 'group-hover:text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: 'group-hover:text-teal-400' },
  { name: 'Redis', icon: <SiRedis size={32} />, color: 'group-hover:text-red-500' },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={32} />, color: 'group-hover:text-orange-500' },
  { name: 'MSSQL', icon: <DiMsqlServer size={32} />, color: 'group-hover:text-red-600' },
  { name: 'Bootstrap', icon: <SiBootstrap size={32} />, color: 'group-hover:text-purple-500' },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-electric-blue">Arsenal</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glassmorphism rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:bg-white/10 hover:border-electric-blue/50 cursor-pointer"
            >
              <div className={`text-slate-400 transition-colors duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white transition-colors text-center text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
