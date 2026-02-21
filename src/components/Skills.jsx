import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Layout, Server, Settings, Palette
} from 'lucide-react';

const skills = [
    { name: 'React.js', icon: <Layout />, category: 'Frontend' },
    { name: 'Node.js', icon: <Server />, category: 'Backend' },
    { name: 'MongoDB', icon: <Database />, category: 'Database' },
    { name: 'Tailwind CSS', icon: <Palette />, category: 'Styling' },
    { name: 'JavaScript', icon: <Code2 />, category: 'Core' },
    { name: 'Express', icon: <Settings />, category: 'Backend' },
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl mb-4">Technical Prowess</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                    I leverage cutting-edge technologies to build performant and highly
                    interactive web applications.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 flex flex-col items-center gap-4 text-center group transition-all"
                    >
                        <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {React.cloneElement(skill.icon, { size: 32 })}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{skill.name}</h3>
                            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
                                {skill.category}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
