import React from 'react';
import { motion } from 'framer-motion';

// Import gallery image
import graphicDesignGallery from '../assets/Graphic_Design_gallery.png';

const GraphicDesignProject = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-dark font-sans selection:bg-coral selection:text-white overflow-x-hidden relative">
            <div className="container mx-auto py-24 px-6 md:px-12 relative z-10">
                {/* TITLE & INTRO */}
                <div className="text-center space-y-8 mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl text-white uppercase"
                    >
                        GRAPHIC DESIGN
                    </motion.h2>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed uppercase">
                        TYPOGRAPHY-DRIVEN POSTER DESIGNS, LOGO CONCEPTS, AND BRAND IDENTITY PROJECTS
                        THAT FOCUS ON CLARITY, IMPACT, AND INTENTIONAL AESTHETIC COMPOSITION.
                        EXPLORE THE COLLECTION OF WORKS DEVELOPED FOR SOCIETIES AND PERSONAL PROJECTS.
                    </p>
                </div>

                {/* GALLERY IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-2xl overflow-hidden shadow-2xl"
                >
                    <img
                        src={graphicDesignGallery}
                        alt="Graphic Design Gallery"
                        className="w-full h-auto"
                        style={{ imageRendering: 'crisp-edges' }}
                    />
                </motion.div>

                {/* VIEW MORE / CONTACT CTA */}
                <div className="mt-32 text-center">
                    <button className="px-12 py-5 bg-white text-dark font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(255,107,74,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
                        & other
                    </button>
                </div>
            </div>

        </div>
    );
};

export default GraphicDesignProject;

