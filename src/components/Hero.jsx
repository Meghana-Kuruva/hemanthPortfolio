import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../assets/Hemanth_image_4.png';

const Hero = ({ onSelectProject }) => {
    return (
        <section id="home" className="relative min-h-screen bg-cream flex flex-col font-sans overflow-hidden">
            <div className="flex-grow flex flex-col justify-center relative">
                {/* Background Outlined Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-10 leading-none select-none">
                    <span className="text-[20vw] font-black text-outline">HEMANTH</span>
                    <span className="text-[20vw] font-black text-outline">HEMANTH</span>
                </div>

                <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center relative z-10">
                    {/* Portrait Illustration */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={portraitImage}
                                    alt="Hemanth portrait"
                                    className="w-full max-w-xl mx-auto h-[500px] md:h-[650px] object-cover object-top drop-shadow-2xl transition-all duration-700"
                                />
                            </div>

                            {/* DOB Badge */}
                            <motion.div
                                className="absolute bottom-10 left-0 bg-amber border-2 border-dark px-6 py-2 rounded-full font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                                whileHover={{ scale: 1.05 }}
                            >
                                21st NOV 2005
                            </motion.div>

                            {/* Social Handles (Stacked on Left - Adjusted) */}
                            <div className="absolute top-1/4 left-4 flex flex-col gap-4 whitespace-nowrap text-[10px] font-black leading-none uppercase tracking-[0.2em] text-coral z-20">
                                <a href="https://www.instagram.com/hemanthart?igsh=ZDlnMmtndHR6cXpz" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IG: @HEMANTHART</a>
                                <a href="https://vsco.co/hemanth-vi/gallery" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">VSCO: /HEMANTH-VIJ</a>
                                <a href="https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IN: /HEMANTH-VIYYAPU</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Slogan and CTA */}
                    <div className="md:pl-12 mt-12 md:mt-0">
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Designing with Intention <br />
                            Building with Precision
                        </motion.h2>

                        <motion.a
                            href="/hemanth_viyyapu_resume.pdf"
                            download="hemanth_viyyapu_resume.pdf"
                            className="inline-block bg-amber border-4 border-dark px-12 py-4 text-xl font-bold rounded-2xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 transition-all"
                            whileHover={{ scale: 1.02 }}
                        >
                            Resume
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Bottom Banner Section */}
            <div className="relative h-40 md:h-64 mt-auto">
                <div className="absolute inset-0 bg-coral flex items-center overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        <span className="text-9xl font-black text-outline opacity-20 mr-10 uppercase">Hemanth</span>
                        <span className="text-9xl font-black text-dark mr-10 uppercase">Hemanth</span>
                        <span className="text-9xl font-black text-outline opacity-20 mr-10 uppercase">Hemanth</span>
                        <span className="text-9xl font-black text-dark mr-10 uppercase">Hemanth</span>
                    </div>
                </div>

                {/* Scroll Circle */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20">
                    <motion.div
                        className="w-32 h-32 bg-amber rounded-full border-4 border-dark flex items-center justify-center text-center leading-tight font-bold p-4 text-sm shadow-xl"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        Scroll <br /> down
                    </motion.div>
                </div>
            </div>


            {/* Project Popup - removed from here and moved into the navbar above */}
        </section>
    );
};

export default Hero;
