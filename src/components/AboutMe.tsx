import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';
import { Sparkles, Heart } from 'lucide-react';

const About = () => {
    const { education } = profileData;

    return (
        <section className="space-y-16">
            {/* Story */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-sm font-black text-text-main mb-6 flex items-center gap-2 uppercase tracking-[0.2em]">
                    <Heart size={16} className="fill-accent-rose text-accent-rose" /> My Story
                </h3>
                <p className="text-text-main text-base sm:text-lg leading-relaxed mb-6 font-semibold">
                    I am a passionate <strong className="text-accent-pink">UI/UX & Frontend Developer</strong> with a knack for building beautiful and scalable web applications.
                    My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to create impactful, user-centric experiences.
                </p>
                <p className="text-text-main text-base sm:text-lg leading-relaxed font-semibold mb-10">
                    With expertise in HTML, CSS, JavaScript, Bootstrap, Kotlin, and Python, I love bridging the gap between design and development.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                    <div className="glass-card p-6 flex flex-col items-start shadow-sm border border-white hover:border-pink-300 transition-colors cursor-pointer">
                        <h4 className="text-5xl font-black text-accent-pink mb-1">1+</h4>
                        <span className="text-text-main font-bold text-xs uppercase tracking-wider">Years Exp.</span>
                    </div>
                    <div className="glass-card p-6 flex flex-col items-start shadow-sm border border-white hover:border-purple-300 transition-colors cursor-pointer">
                        <h4 className="text-5xl font-black text-accent-purple mb-1">5+</h4>
                        <span className="text-text-main font-bold text-xs uppercase tracking-wider">Projects Done</span>
                    </div>
                </div>
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-sm font-black text-text-main mb-8 flex items-center gap-2 uppercase tracking-[0.2em] mt-24">
                    <Sparkles size={16} className="text-accent-purple" /> Education Timeline
                </h3>
                <div className="space-y-12 border-l-[3px] border-pink-300 ml-2 pl-8 relative">
                    {education.map((edu: any) => (
                        <div key={edu.id} className="relative group">
                            <span className="absolute -left-[43px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-pink-700 shadow-sm transition-transform group-hover:scale-125" />
                            <div className="mb-2 text-xs text-accent-purple font-bold tracking-widest uppercase">{edu.duration}</div>
                            <h4 className="text-lg font-black text-text-main leading-snug">{edu.institution}</h4>
                            <div className="text-text-muted font-bold mt-1 text-sm">{edu.degree}</div>
                            <div className="inline-flex mt-4 px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full border border-pink-200">GPA: {edu.gpa}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
