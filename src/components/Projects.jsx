import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ onSelectProject }) => {
    return (
        <section id="projects" className="bg-[#1A1A1A] relative py-20 overflow-hidden font-sans">
            {/* Background pattern - Seamless Repeated PROJECTS text */}
            <div className="absolute inset-0 flex flex-col pointer-events-none opacity-[0.03] select-none leading-none">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="whitespace-nowrap flex font-black text-[12vw] tracking-tighter uppercase italic overflow-hidden">
                        {[...Array(8)].map((_, j) => (
                            <span key={j} className="text-outline mr-4">PROJECTS</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Central Title */}
                <motion.h2
                    className="text-7xl md:text-8xl font-black text-white mb-20 text-center tracking-tighter"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>

                {/* CONTENTS Section - Orange Grid */}
                <div className="w-full bg-coral border-4 border-dark overflow-hidden relative"
                    style={{
                        backgroundImage: `linear-gradient(#00000015 1px, transparent 1px), linear-gradient(90deg, #00000015 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}>
                    <div className="grid md:grid-cols-12 min-h-[400px]">
                        {/* Left - CONTENTS Label */}
                        <div className="md:col-span-12 lg:col-span-5 p-12 flex items-center justify-center">
                            <h3 className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none break-all">
                                CONTENTS
                            </h3>
                        </div>

                        {/* Right - Project List */}
                        <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center gap-12 p-12">
                            {[
                                { id: 'ieee', title: "IEEE MCET", description: "WEBSITE MANAGEMENT - SOCIAL MEDIA MANAGEMENT" },
                                { id: 'splitzy', title: "SPLITZY", description: "RESEARCH & DEVELOPMENT OF WEBSITE" }
                            ].map((project, i) => (
                                <div
                                    key={i}
                                    onClick={() => onSelectProject(project.id)}
                                    className="flex flex-col md:flex-row items-start md:items-center justify-start gap-8 group cursor-pointer"
                                >
                                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter flex items-center gap-4 whitespace-nowrap">
                                        {project.title} <span className="text-2xl md:text-4xl">-</span>
                                    </h4>
                                    <div>
                                        <p className="text-xs md:text-sm font-black text-white uppercase leading-tight tracking-tight max-w-[300px]">
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
