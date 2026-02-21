import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/Hemanth_image_2.png';

const About = () => {
    return (
        <section id="about" className="bg-cream bg-grid py-24 px-6 md:px-12 relative">
            <div className="container mx-auto grid md:grid-cols-2 gap-4 items-start">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative md:pl-20"
                >
                    {/* Decorative Stars */}
                    <div className="absolute -top-10 -left-10 text-4xl text-navy animate-pulse">✦</div>
                    <div className="absolute top-0 -left-16 text-2xl text-coral animate-bounce delay-75">✦</div>

                    <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                        Hello <br />
                        I'm Hemanth!
                    </h2>

                    <p className="text-lg md:text-xl text-slate-700 max-w-xl mb-10 leading-relaxed font-medium">
                        I am a self-taught Graphic Designer and UI/UX enthusiast based in India,
                        with hands-on experience in design, branding, and digital communication.
                        I am currently pursuing a B.E. in Artificial Intelligence and Machine Learning
                        at MCET, while actively building user-focused digital products.
                    </p>

                    {/* LinkedIn Pill */}
                    <a
                        href="https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-amber/30 border-2 border-amber px-6 py-3 rounded-full text-sm font-bold text-dark hover:bg-amber/50 transition-all"
                    >
                        <span className="bg-amber p-2 rounded-full">🔍</span>
                        https://www.linkedin.com/in/hemanth-viyyapu/
                    </a>
                </motion.div>

                {/* Photo and Contact Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-md mx-auto md:mx-0 translate-y-32 z-20"
                >
                    {/* Doodle decoration */}
                    <div className="absolute -top-12 right-0 text-xl font-mono text-dark transform rotate-12">
                        ☺ Hemanth Viyyapu
                        <svg width="100" height="40" viewBox="0 0 100 40" className="mt-2">
                            <path d="M0,0 C30,40 70,40 100,0" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>

                    <div className="border-[12px] border-white shadow-2xl relative">
                        <img
                            src={profilePhoto}
                            alt="Hemanth profile"
                            className="w-full h-auto"
                        />

                        {/* Contact Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-dark text-white p-8 translate-y-1/2 mx-4 border-2 border-white shadow-xl">
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-widest text-center">Contact</h3>
                            <div className="space-y-2 text-sm text-slate-300">
                                <div className="flex items-center gap-3">
                                    <span className="text-coral">📍</span> Hyderabad, India
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-coral">✉</span> hemanth.artista@gmail.com
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
