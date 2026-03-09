import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../assets/Hemanth_image_4.png';
import hemanthTxt from '../assets/Hemanth_txt.png';
import scrollDown from '../assets/Scroll_Down.png';

const Hero = ({ onSelectProject }) => {
    return (
        <section id="home" className="relative min-h-screen bg-cream flex flex-col font-sans">
            <div className="flex-grow flex flex-col justify-center relative">
                {/* Repeating HEMANTH text pattern background */}
                <div
                    className="absolute inset-y-0 left-[8%] right-[8%] pointer-events-none select-none opacity-[90]"
                    style={{
                        backgroundImage: `url(${hemanthTxt})`,
                        backgroundRepeat: 'repeat-y',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center top',
                    }}
                />

                <div className="container mx-auto px-6  grid md:grid-cols-2 items-center relative z-10">
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
                                className="absolute bottom-10 left-0 border-2 border-dark px-6 py-2 rounded-full font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                                style={{ backgroundColor: '#FFC567' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                21st NOV 2005
                            </motion.div>

                            {/* Social Handles (Left side - ear/neck region) */}
                            <div className="absolute top-[30%] left-0 flex flex-col gap-4 whitespace-nowrap text-xs font-black leading-none uppercase tracking-[0.2em] z-20" style={{ color: '#FD5A46' }}>
                                <a href="https://www.instagram.com/hemanthart?igsh=ZDlnMmtndHR6cXpz" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IG: @hemanthART</a>
                                <a href="https://vsco.co/hemanth-vi/gallery" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">VSCO: /hemanth-vi/</a>
                                <a href="https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IN: /hemanth-viyyapu/</a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Slogan and CTA */}
                    <div className="md:pl-12 mt-12 md:mt-0">
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold leading-tight mb-8 font-display"
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
                            className="inline-block border-4 border-dark px-12 py-4 text-xl font-bold rounded-2xl shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 transition-all"
                            style={{ backgroundColor: '#FFC567' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Resume
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Bottom Banner Section */}
            <div className="relative h-40 md:h-64 mt-auto">
                <div className="absolute inset-0 bg-coral overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-[8%] right-[8%] pointer-events-none select-none"
                        style={{
                            backgroundImage: `url(${hemanthTxt})`,
                            backgroundRepeat: 'repeat-y',
                            backgroundSize: '100% auto',
                            backgroundPosition: 'center top',
                        }}
                    />
                </div>
            </div>

            {/* Scroll Down - positioned to overlap between hero and next section */}
            <div className="relative z-[30] flex justify-center" style={{ marginTop: '-3.5rem', marginBottom: '-3.5rem' }}>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <img src={scrollDown} alt="Scroll down" className="w-28 h-28 drop-shadow-xl" />
                </motion.div>
            </div>


            {/* Project Popup - removed from here and moved into the navbar above */}
        </section>
    );
};

export default Hero;
