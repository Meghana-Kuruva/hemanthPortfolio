import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/Hemanth_image_2.png';
import searchIcon from '../assets/Search_Icon.png';
import resumeTxt from '../assets/Resume_txt.png';
import hemanthWriting from '../assets/Hemanth_Writing.png';

const About = () => {
    return (
        <section id="about" className="bg-cream bg-grid pt-24 990:pt-40 pb-0 relative px-4 990:px-[5%] xl:px-[10%] overflow-visible">
            <div className="container mx-auto flex flex-col 990:grid 990:grid-cols-2 gap-12 items-start overflow-visible 990:px-[8%]">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative 990:pt-10"
                >
                    {/* Decorative Stars */}
                    <img src={starsImg} alt="stars" className="absolute -top-12 -left-4 990:-top-16 990:-left-12 w-10 990:w-14 h-10 990:h-14 animate-pulse" />

                    <h2 className="text-5xl 990:text-6xl xl:text-8xl mb-6 990:mb-8 leading-none">
                        Hello <br />
                        I'm Hemanth!
                    </h2>

                    <p className="text-base 990:text-lg xl:text-xl text-slate-700 max-w-xl mb-8 990:mb-12 leading-relaxed">
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
                        className="inline-flex items-center gap-3 bg-[#FFB547]/20 border-2 border-[#FFB547] px-5 990:px-8 py-3 990:py-4 rounded-full text-sm 990:text-base text-dark hover:bg-[#FFB547]/30 transition-all shadow-sm mb-6 w-full 990:w-auto"
                    >
                        <span className="bg-[#FFB547] p-2 990:p-2.5 rounded-full shadow-inner shrink-0">
                            <img src={searchIcon} alt="search" className="w-4 h-4 990:w-5 990:h-5 invert" />
                        </span>
                        <span className="opacity-80 truncate">https://www.linkedin.com/in/hemanth-viyyapu/</span>
                    </a>
                </motion.div>

                {/* Photo and Contact Box - HIDDEN ON MOBILE (< 990px) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden 990:block relative max-w-xs 990:max-w-md mx-auto 990:ml-auto 990:mr-0 z-20 mt-8 990:mt-0"
                >
                    {/* Resume Background Image */}
                    <img
                        src={resumeTxt}
                        alt="RESUME"
                        className="absolute -bottom-24 -right-4 990:-bottom-60 990:-right-10 w-[150%] 990:w-[180%] max-w-none opacity-100 h-[120%] 990:h-[150%] pointer-events-none z-[-1]"
                    />

                    {/* Hemanth Writing Doodle */}
                    <img
                        src={hemanthWriting}
                        alt="Hemanth Viyyapu"
                        className="absolute -top-16 990:-top-24 -left-20 990:-left-28 w-48 990:w-56 h-auto transform rotate-[-6deg] z-10"
                    />

                    <div className="border-[8px] 990:border-[12px] border-white shadow-2xl relative bg-white overflow-visible">
                        <img
                            src={profilePhoto}
                            alt="Hemanth profile"
                            className="w-full h-auto"
                        />

                        {/* Contact Overlay */}
                        <div className="absolute -bottom-20 990:-bottom-24 left-2 right-2 bg-[#1F1F1F] text-white p-4 990:p-6 border-2 border-white shadow-2xl z-40">
                            <h3 className="text-2xl 990:text-3xl mb-3 990:mb-4 uppercase tracking-[0.1em] text-center border-b border-white/10 pb-2">Contact</h3>
                            <div className="space-y-2 990:space-y-3 text-xs 990:text-sm">
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
