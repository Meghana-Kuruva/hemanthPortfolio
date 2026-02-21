import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

// Import images
import womensDay from '../assets/Women_s day Banner Final 2 1.png';
import bannerFinal from '../assets/Banner Final 2 1.png';
import banner2025 from '../assets/Banner_2.png';
import callForArticles from '../assets/Call_for_articles.png';
import hacknovateParticipant from '../assets/hacknovate_participant.png';
import hacknovatePosting from '../assets/Hacknovate_Poster 1.png';
import hacknovateVolunteer from '../assets/Hacknovate_volunteer.png';
import hacknovate2 from '../assets/Hacknovate_2.png';
import mcetIeee from '../assets/MCET_IEEE.png';
import panelDiscussion from '../assets/Panel Discussion Application of Sensors in Future and Upcoming Technologies 1.png';
import participant from '../assets/participant.png';

const GraphicDesignProject = ({ onBack }) => {
    const galleryItems = [
        { src: womensDay, alt: "Women's Day Banner", span: "col-span-2 row-span-1" },
        { src: bannerFinal, alt: "Final Banner 2.1", span: "col-span-1 row-span-1" },
        { src: banner2025, alt: "Banner 2025", span: "col-span-1 row-span-1" },
        { src: callForArticles, alt: "Call for Articles", span: "col-span-1 row-span-2" },
        { src: hacknovatePosting, alt: "Hacknovate Posting", span: "col-span-2 row-span-1" },
        { src: hacknovateVolunteer, alt: "Hacknovate Volunteer", span: "col-span-1 row-span-1" },
        { src: hacknovate2, alt: "Hacknovate 2", span: "col-span-1 row-span-1" },
        { src: mcetIeee, alt: "MCET IEEE", span: "col-span-2 row-span-1" },
        { src: panelDiscussion, alt: "Panel Discussion", span: "col-span-1 row-span-1" },
        { src: hacknovateParticipant, alt: "Hacknovate Participant", span: "col-span-1 row-span-1" },
        { src: participant, alt: "Participant", span: "col-span-1 row-span-1" },
    ];

    return (
        <div className="min-h-screen bg-dark font-sans selection:bg-coral selection:text-white overflow-x-hidden relative">
            <div className="container mx-auto py-24 px-6 md:px-12 relative z-10">
                {/* TITLE & INTRO */}
                <div className="text-center space-y-8 mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
                    >
                        GRAPHIC DESIGN
                    </motion.h2>
                    <p className="text-lg md:text-xl text-white/60 font-medium leading-relaxed uppercase">
                        TYPOGRAPHY-DRIVEN POSTER DESIGNS, LOGO CONCEPTS, AND BRAND IDENTITY PROJECTS
                        THAT FOCUS ON CLARITY, IMPACT, AND INTENTIONAL AESTHETIC COMPOSITION.
                        EXPLORE THE COLLECTION OF WORKS DEVELOPED FOR SOCIETIES AND PERSONAL PROJECTS.
                    </p>
                </div>

                {/* MASONRY-ISH GALLERY GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${item.span} rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl group relative`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-black uppercase text-sm">{item.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
