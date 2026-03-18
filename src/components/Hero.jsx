import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../assets/Hemanth_image_4.png';
import profilePhoto from '../assets/Hemanth_image_2.png';
import hemanthTxt from '../assets/Hemanth_txt.png';
import scrollDown from '../assets/Scroll_Down.png';
import hemanthWriting from '../assets/Hemanth_Writing.png';

const Hero = ({ onSelectProject }) => {
    return (
        <section id="home" className="relative bg-cream flex flex-col font-sans overflow-hidden">

            {/* ══════════════════ MOBILE LAYOUT (< 990px) ══════════════════ */}
            <div className="990:hidden flex flex-col">

                {/* Text block - Cream background as in image */}
                <div className="relative px-6 pt-12 pb-6 bg-cream">
                    {/* Faint HEMANTH text pattern in background - only slightly visible */}
                    <div
                        className="absolute inset-x-0 top-0 bottom-0 pointer-events-none select-none opacity-20"
                        style={{
                            backgroundImage: `url(${hemanthTxt})`,
                            backgroundRepeat: 'repeat-y',
                            backgroundSize: '100% auto',
                            backgroundPosition: 'center top',
                        }}
                    />

                    {/* 4-line heading - Left Aligned as in image */}
                    <motion.div
                        className="relative z-10 mb-8 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-display font-bold leading-[1.1] tracking-tight">
                            <span className="block text-[2.6rem] text-dark">Designing with</span>
                            <span className="block text-[2.6rem]" style={{ color: '#FFC567' }}>Intention</span>
                            <span className="block text-[2.6rem] text-dark">Building with</span>
                            <span className="block text-[2.6rem]" style={{ color: '#FFC567' }}>Precision</span>
                        </h2>
                    </motion.div>

                    {/* Resume button - Left Aligned as in image */}
                    <div className="flex items-center justify-start gap-3 relative z-10 mb-8">
                        <motion.a
                            href="/hemanth_viyyapu_resume.pdf"
                            download="hemanth_viyyapu_resume.pdf"
                            className="inline-block border-[3.5px] border-dark px-10 py-2.5 text-lg font-bold rounded-full shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] active:translate-x-1 active:translate-y-1 transition-all"
                            style={{ backgroundColor: '#FFC567' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Resume
                        </motion.a>
                        {/* Doodle marks next to Resume */}
                        <div className="flex flex-col gap-1 rotate-[-10deg]">
                            <div className="w-4 h-1 bg-dark rounded-full"></div>
                            <div className="w-5 h-1 bg-dark rounded-full"></div>
                            <div className="w-4 h-1 bg-dark rounded-full"></div>
                        </div>
                    </div>

                    {/* Hemanth Viyyapu writing doodle with emoji */}
                    <div className="relative z-10 mt-2 flex flex-col items-start px-2">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">😊</span>
                            <img
                                src={hemanthWriting}
                                alt="Hemanth Viyyapu"
                                className="w-56 h-auto transform rotate-[-3deg]"
                            />
                        </div>
                    </div>
                </div>

                {/* Portrait + Coral/Red Banner for mobile */}
                <div className="relative">
                    {/* Outline text background for the bottom section */}
                    <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-40 overflow-hidden z-0">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`text-[6.5rem] font-black leading-none whitespace-nowrap -rotate-12 mb-4 ${i > 2 ? 'text-white/20' : 'text-coral/20'}`}>
                                HEMANTH HEMANTH HEMANTH
                            </div>
                        ))}
                    </div>

                    {/* Portrait Image with thick border */}
                    <div className="px-10 relative z-10">
                        <div className="border-[8px] border-dark shadow-2xl relative bg-white">
                            <img
                                src={profilePhoto}
                                alt="Hemanth portrait"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Red/Coral Banner at the bottom */}
                    <div className="bg-coral h-56 -mt-24 relative z-0 overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage: `url(${hemanthTxt})`,
                                backgroundRepeat: 'repeat',
                                backgroundSize: 'auto 100%',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>

                    {/* Contact Box Overlapping portrait and red banner */}
                    <div className="absolute left-10 right-10 bg-[#1F1F1F] text-white p-5 border-2 border-white shadow-2xl z-20" style={{ bottom: '20px' }}>
                        <h3 className="text-2xl mb-4 uppercase tracking-[0.15em] text-center border-b border-white/10 pb-2 font-display font-medium">Contact</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-4">
                                <span className="text-coral text-lg">📍</span>
                                <span>Hyderabad, India</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-coral text-lg">✉</span>
                                <span>hemanth.artista@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════ DESKTOP LAYOUT (990px+) ══════════════════ */}
            <div className="hidden 990:flex flex-col min-h-screen">
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

                    <div className="container mx-auto px-6 grid grid-cols-2 items-center relative z-10">
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
                                        className="w-full max-w-xl mx-auto h-[650px] object-cover object-top drop-shadow-2xl transition-all duration-700"
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

                                {/* Social Handles */}
                                <div className="absolute top-[30%] left-0 flex flex-col gap-4 whitespace-nowrap text-xs font-black leading-none uppercase tracking-[0.2em] z-20" style={{ color: '#FD5A46' }}>
                                    <a href="https://www.instagram.com/hemanthart?igsh=ZDlnMmtndHR6cXpz" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IG: @hemanthART</a>
                                    <a href="https://vsco.co/hemanth-vi/gallery" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">VSCO: /hemanth-vi/</a>
                                    <a href="https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">IN: /hemanth-viyyapu/</a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Slogan and CTA */}
                        <div className="pl-12">
                            <motion.h2
                                className="text-5xl xl:text-7xl font-bold leading-tight mb-8 font-display"
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
                <div className="relative h-64 mt-auto">
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

                {/* Scroll Down */}
                <div className="relative z-[30] flex justify-center" style={{ marginTop: '-3.5rem', marginBottom: '-3.5rem' }}>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <img src={scrollDown} alt="Scroll down" className="w-28 h-28 drop-shadow-xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
