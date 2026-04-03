import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const { education, personalInfo } = profileData;

    return (
        <section id="about" className="section-even section-padding">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 text-center"
                >
                    About <span className="text-electric-blue">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-electric-blue mb-6">Who I Am</h3>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            I am a passionate <strong>Full-Stack Developer</strong> with a knack for building robust and scalable web applications.
                            My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to create
                            impactful user experiences.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            With expertise in the <strong>MERN stack, Angular, and Spring Boot</strong>, I enjoy tackling complex problems
                            and turning ideas into reality. I believe in continuous learning and staying updated with the latest industry trends.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="glassmorphism p-4 rounded-lg w-full sm:w-auto flex-1 hover:-translate-y-1 transition-transform">
                                <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                                <span className="text-slate-400 text-sm">Years Experience</span>
                            </div>
                            <div className="glassmorphism p-4 rounded-lg w-full sm:w-auto flex-1 hover:-translate-y-1 transition-transform">
                                <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                                <span className="text-slate-400 text-sm">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-electric-blue mb-8 flex items-center">
                            <FaGraduationCap className="mr-3" />
                            Education
                        </h3>

                        <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8 relative">
                            {education.map((edu: any, index: any) => (
                                <div key={edu.id} className="relative">
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-electric-blue" />
                                    <div className="mb-1 text-sm text-electric-blue font-mono">{edu.duration}</div>
                                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                                    <div className="text-slate-300 font-medium">{edu.degree}</div>
                                    <div className="text-slate-500 text-sm mt-1">GPA: {edu.gpa}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
