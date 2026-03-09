import React from 'react';
import { motion } from 'framer-motion';
import projectsTxt from '../assets/Projects_txt.png';

const Projects = ({ onSelectProject }) => {
    return (
        <section id="projects" className="bg-[#1A1A1A] relative py-0 overflow-hidden font-sans">
            {/* Top - Dark area with Projects_txt.png background and centered title */}
            <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background image - repeating PROJECTS text */}
                <div
                    className="absolute inset-0 w-full h-full opacity-100"
                    style={{
                        backgroundImage: `url(${projectsTxt})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '900px auto'
                    }}
                />

                {/* Centered title */}
                <motion.h2
                    className="text-8xl md:text-[10rem] font-sans text-white text-center font-black relative z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>
            </div>

            {/* CONTENTS Section - Orange Grid */}
            <div className="w-full relative z-10">
                <div className="w-full bg-coral border-y-4 border-dark overflow-hidden relative"
                    style={{
                        backgroundImage: `linear-gradient(#00000018 1px, transparent 1px), linear-gradient(90deg, #00000018 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}>
                    <div className="grid md:grid-cols-12 min-h-[500px]">
                        {/* Left - CONTENTS Label */}
                        <div className="md:col-span-12 lg:col-span-6 p-12 md:p-24 flex items-center justify-center lg:justify-end">
                            <h3 className="text-8xl md:text-[10rem] font-sans text-white font-black uppercase leading-none text-center lg:text-right">
                                CONTENTS
                            </h3>
                        </div>

                        {/* Right - Project List */}
                        <div className="md:col-span-12 lg:col-span-6 flex flex-col justify-center gap-16 p-12 md:p-24">
                            {[
                                { id: 'ieee', title: "IEEE MCET", description: "WEBSITE MANAGEMENT\nSOCIAL MEDIA MANAGEMENT" },
                                { id: 'splitzy', title: "SPLITZY", description: "RESEARCH & DEVELOPMENT\nOF WEBSITE" }
                            ].map((project, i) => (
                                <div
                                    key={i}
                                    onClick={() => onSelectProject(project.id)}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <h4 className="text-4xl md:text-6xl font-sans text-white font-black uppercase whitespace-nowrap">
                                        {project.title}
                                    </h4>
                                    <span className="text-4xl md:text-6xl font-sans text-white font-black">-</span>
                                    <div className="flex-1">
                                        <p className="text-sm md:text-base font-sans text-white font-black uppercase leading-tight tracking-widest whitespace-pre-line">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

