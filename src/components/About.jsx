import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/Hemanth_image_2.png';
import starsImg from "../assets/Star's.png";
import searchIcon from '../assets/Search_Icon.png';
import resumeTxt from '../assets/Resume_txt.png';
import hemanthWriting from '../assets/Hemanth_Writing.png';

const About = () => {
    return (
        <section id="about" className="bg-cream bg-grid pt-40 pb-0 relative px-[5%] md:px-[10%] overflow-visible">
            <div className="container mx-auto grid md:grid-cols-2 gap-4 items-start overflow-visible px-[8%]">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative md:pt-10"
                >
                    {/* Decorative Stars */}
                    <img src={starsImg} alt="stars" className="absolute -top-16 -left-12 w-14 h-14 animate-pulse" />

                    <h2 className="text-6xl md:text-8xl mb-8 leading-none ">
                        Hello <br />
                        I'm Hemanth!
                    </h2>

                    <p className="text-lg md:text-xl text-slate-700 max-w-xl mb-12 leading-relaxed">
                        I am a self-taught Graphic Designer and UI/UX enthusiast based in India,
                        with hands-on experience in design, branding, and digital communication.
                        I am currently pursuing a B.E. in Artificial Intelligence and Machine Learning
                        at MCET, while actively building user-focused digital products.
                    </p>

                    {/* LinkedIn Pill */}
                    <a
                        href="https://www.linkedin.com/in/hemanth-viyyapu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-[#FFB547]/20 border-2 border-[#FFB547] px-8 py-4 rounded-full text-base text-dark hover:bg-[#FFB547]/30 transition-all shadow-sm mb-6"
                    >
                        <span className="bg-[#FFB547] p-2.5 rounded-full shadow-inner">
                            <img src={searchIcon} alt="search" className="w-5 h-5 invert" />
                        </span>
                        <span className="opacity-80">https://www.linkedin.com/in/hemanth-viyyapu/</span>
                    </a>
                </motion.div>

                {/* Photo and Contact Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-md mx-auto md:ml-auto md:mr-0 z-20 mt-20 md:mt-0"
                >
                    {/* Resume Background Image - Positioned to the right and bottom like image1 */}
                    <img
                        src={resumeTxt}
                        alt="RESUME"
                        className="absolute -bottom-100 -right-10 w-[250%] max-w-none opacity-100 h-[200%] pointer-events-none z-[-1] mb-300px"
                    />

                    {/* Hemanth Writing Doodle - Higher up and more to the left */}
                    <img
                        src={hemanthWriting}
                        alt="Hemanth Viyyapu"
                        className="absolute -top-30 -left-50 w-72 h-auto transform rotate-[-6deg] z-10"
                    />

                    <div className="border-[12px] border-white shadow-2xl relative bg-white overflow-visible">
                        <img
                            src={profilePhoto}
                            alt="Hemanth profile"
                            className="w-full h-auto"
                        />

                        {/* Contact Overlay - Solid box at bottom, overlaps blue section below */}
                        <div className="absolute -bottom-24 left-2 right-2 bg-[#1F1F1F] text-white p-6 border-2 border-white shadow-2xl z-40">
                            <h3 className="text-3xl mb-4 uppercase tracking-[0.1em] text-center border-b border-white/10 pb-2">Contact</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <span className="text-coral flex items-center justify-center w-5 h-5">📍</span>
                                    <span>Hyderabad, India</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-coral flex items-center justify-center w-5 h-5">✉</span>
                                    <span>hemanth.artista@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
