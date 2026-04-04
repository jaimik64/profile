import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';
import { Sparkles, Heart } from 'lucide-react';

const About = () => {
    const { education, personalInfo } = profileData;

    return (
        <>
            {/* Story Tile */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 glass-card p-8 md:p-10 flex flex-col justify-center"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-rose mb-6 flex items-center gap-3">
                    <Heart className="fill-accent-rose text-accent-rose" /> My Story
                </h3>
                <p className="text-text-main text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                    I am a passionate <strong className="text-accent-pink">UI/UX & Frontend Developer</strong> with a knack for building beautiful and scalable web applications.
                    My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to create
                    impactful, user-centric experiences.
                </p>
                <p className="text-text-main text-base sm:text-lg leading-relaxed font-semibold">
                    With expertise in HTML, CSS, JavaScript, Bootstrap, Kotlin, and Python, I love bridging the gap between design and development
                    to turn colorful ideas into reality. When I'm not coding, I'm constantly learning and getting inspired by modern design trends!
                </p>
            </motion.div>

            {/* Metrics Tiles - 1x1 each */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05, rotate: -2 }} 
                className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 bg-white/90 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-sm border-2 border-white cursor-pointer transition-colors duration-300 hover:border-accent-pink"
            >
                <h4 className="text-5xl lg:text-6xl font-black text-accent-pink mb-2">1+</h4>
                <span className="text-text-main font-bold text-sm uppercase tracking-wider">Years Exp.</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05, rotate: 2 }} 
                className="col-span-1 sm:col-span-1 lg:col-span-1 row-span-1 bg-white/90 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-sm border-2 border-white cursor-pointer transition-colors duration-300 hover:border-accent-purple"
            >
                <h4 className="text-5xl lg:text-6xl font-black text-accent-purple mb-2">5+</h4>
                <span className="text-text-main font-bold text-sm uppercase tracking-wider">Projects Done</span>
            </motion.div>

            {/* Education Tile */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 glass-card p-8 md:p-10 flex flex-col justify-center"
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-accent-purple mb-8 flex items-center gap-3">
                    <Sparkles className="text-accent-purple" /> Education
                </h3>
                <div className="space-y-6 border-l-[3px] border-pink-300 ml-3 pl-6 relative">
                    {education.map((edu: any) => (
                        <motion.div 
                            key={edu.id} 
                            className="relative bg-white/40 p-5 rounded-2xl border border-white/50 shadow-sm"
                            whileHover={{ x: 5, scale: 1.02 }}
                        >
                            <span className="absolute -left-[35px] top-5 h-4 w-4 rounded-full border-4 border-white bg-pink-700 shadow-md" />
                            <div className="mb-1 text-xs text-accent-purple font-bold tracking-widest uppercase">{edu.duration}</div>
                            <h4 className="text-lg font-black text-text-main mb-1">{edu.institution}</h4>
                            <div className="text-text-main font-bold mt-1 text-sm">{edu.degree}</div>
                            <div className="inline-block mt-3 px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full">GPA: {edu.gpa}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default About;
