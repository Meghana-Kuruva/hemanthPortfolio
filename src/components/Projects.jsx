import React from 'react';
import { motion } from 'framer-motion';
import projectsTxt from '../assets/Projects_txt.png';

const Projects = ({ onSelectProject }) => {
    return (
        <section id="projects" className="bg-[#1A1A1A] relative py-0 overflow-hidden font-sans">
            {/* ══════════ PROJECTS HEADING ══════════ */}
            <div className="relative w-full h-[250px] 990:h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background image - repeating PROJECTS text */}
                <div
                    className="absolute inset-0 w-full h-full opacity-100"
                    style={{
                        backgroundImage: `url(${projectsTxt})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '800px auto'
                    }}
                />

                {/* Centered title */}
                <motion.h2
                    className="text-6xl 990:text-9xl font-sans text-white text-center font-black relative z-10 uppercase tracking-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>
            </div>

            {/* ══════════ CONTENTS SECTION (RED GRID) ══════════ */}
            <div className="w-full relative z-10 border-t-8 border-dark">
                <div className="w-full bg-coral relative py-12 990:py-24"
                    style={{
                        backgroundImage: `linear-gradient(#00000018 2px, transparent 2px), linear-gradient(90deg, #00000018 2px, transparent 2px)`,
                        backgroundSize: '40px 40px'
                    }}>
                    
                    <div className="container mx-auto px-6 990:px-12">
                        <div className="flex flex-col 990:grid 990:grid-cols-2 gap-12 990:gap-24 items-center">
                            
                            {/* CONTENTS Label */}
                            <div className="990:text-right">
                                <h3 className="text-6xl 990:text-8xl xl:text-9xl font-sans text-white font-black uppercase leading-none tracking-tighter">
                                    CONTENTS
                                </h3>
                            </div>

                            {/* Project List */}
                            <div className="flex flex-col gap-10 990:gap-14">
                                {[
                                    { id: 'ieee', title: "IEEE MCET", description: "WEBSITE MANAGEMENT\nSOCIAL MEDIA MANAGEMENT" },
                                    { id: 'splitzy', title: "SPLITZY", description: "RESEARCH & DEVELOPMENT\nOF WEBSITE" }
                                ].map((project, i) => (
                                    <motion.div
                                        key={i}
                                        onClick={() => onSelectProject(project.id)}
                                        className="flex items-center gap-4 group cursor-pointer"
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <h4 className="text-4xl 990:text-5xl xl:text-6xl font-sans text-white font-black uppercase whitespace-nowrap">
                                            {project.title}
                                        </h4>
                                        <span className="text-4xl 990:text-5xl xl:text-6xl font-sans text-white font-black">-</span>
                                        <div className="flex-1">
                                            <p className="text-[12px] 990:text-sm xl:text-lg font-sans text-white font-black uppercase leading-[1.2] tracking-widest whitespace-pre-line opacity-90">
                                                {project.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
