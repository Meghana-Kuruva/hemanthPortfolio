import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Instagram } from 'lucide-react';
import searchIcon from '../assets/Search_Icon.png';
import portraitImg from '../assets/Hemanth_image_3.png';
import ieee1 from '../assets/IEEE_1.png';
import ieee2 from '../assets/IEEE_2.png';
import ieee3 from '../assets/IEEE_3.png';
//import ieee4 from '../assets/IEEE_4.png';
import wordpress from '../assets/wordpress.png';
import html from '../assets/html.png';
// import css from '../assets/css.png';
import js from '../assets/js.png';
//import cubeIcon from '../assets/MCET_IEEE.png';
import mcetLogo from '../assets/MCET_IEEE_LOGO.png';
import linkedIN from '../assets/linkedIn.png';
import socialMediaTxt from '../assets/Social_Media_txt.png';

import instagramMockup from '../assets/Insta_Views_extended.png';

const IeeeProject = () => {
    return (
        <div className="min-h-screen bg-[#008DD5] font-sans selection:bg-amber selection:text-dark overflow-x-hidden">

            {/* ─── PART 1 : WEBSITE MANAGEMENT (BLUE) ─── */}
            <div className="container mx-auto py-12 px-6 md:px-12">
                <div className="grid md:grid-cols-12 gap-15 items-start mb-32">

                    {/* LEFT: WHITE CARD */}
                    <div className="md:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col min-h-[1500px]"
                        >
                            {/* Icon + Year */}
                            <div className="w-full border-[6px] border-[#F1F5F9] rounded-[2rem] p-8 flex flex-col items-center mb-12">
                                <img src={mcetLogo} alt="IEEE Icon" className="w-100 h-100 mb-4" />
                                <span className="text-dark text-4xl">2025-2026</span>
                            </div>

                            {/* Ieee image section */}
                            <div className="w-[1000px] rounded-[2rem] p-8 flex flex-col items-center mb-12">
                                <img src={ieee1} alt="IEEE Icon" className="w-[620px] h-[300px] mb-4 -translate-x-[270px] rounded-sm" />
                            </div>


                            {/* Problem Section */}
                            <div className="w-full space-y-6 text-left mb-20 px-4">
                                <h3 className="text-4xl font-sans uppercase text-[#008DD5]">Problem</h3>
                                <p className="text-[#475569] text-lg leading-relaxed font-sans">
                                    The student branch lacked a consistent and well-structured online presence.
                                    Information about events, announcements, and activities was scattered across
                                    various platforms, making it difficult for students and visitors to stay updated
                                    or understand the branch's work.
                                </p>
                            </div>

                            {/* Hemanth Portrait Card */}

                            <div className=" rounded-2xl p-4 flex flex-col items-center
                                mt-3  mb-15


 ">
                                <img src={portraitImg} alt="Hemanth" className="w-full h-auto rounded-xl mb-4" />
                                <div className="text-center">


                                </div>
                            </div>


                            {/* Key Learnings */}
                            <div className="w-full space-y-6 text-left px-4 mt-5 mb-20">
                                <h3 className="text-4xl font-sans uppercase text-[#008DD5]">Key Learnings</h3>
                                <p className="text-[#008DD5] text-lg leading-tight">
                                    Designing for clarity, maintaining long-term projects, and managing real-world content independently.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: WEBSITE CONTENT */}
                    <div className="md:col-span-7 space-y-20 pt-10 text-white ml-30">
                        <div className="space-y-12">
                            <h2 className="text-6xl md:text-9xl font-sans leading-none uppercase tracking-tighter">
                                IEEE MCET <br />
                                STUDENT BRANCH <br />
                                Website
                            </h2>

                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex items-center gap-6">
                                    <span className="uppercase tracking-widest text-xs opacity-70">Tools</span>
                                    <div className="flex gap-4">
                                        {/* WordPress Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <img
                                                src={wordpress}
                                                alt="WordPress"
                                                className="w-7 h-7 rounded-full" // Makes it white to match your design
                                            />
                                        </div>

                                        {/* HTML5 Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <img
                                                src={html}
                                                alt="HTML5"
                                                className="w-7 h-7 rounded-full "
                                            />
                                        </div>

                                        {/* JavaScript Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <img
                                                src={js}
                                                alt="JavaScript"
                                                className="w-7 h-7 rounded-full "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl leading-tight opacity-90">
                                    As the Webmaster — designed, maintained, and managed the website for one academic year
                                </p>
                            </div>

                            {/* URL Link Bar */}
                            <div className="max-w-xl">
                                <a
                                    href="https://mcet.ieee.org.in/hemanth-vj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-dark flex items-center gap-4 px-8 py-4 rounded-full border-2 border-white/20 hover:bg-slate-800 transition-all text-white/90"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <img src={searchIcon} alt="search" className="w-5 h-5 invert" />
                                    </div>
                                    <span className="tracking-tight text-lg truncate">https://mcet.ieee.org.in/hemanth-vj/</span>
                                </a>
                            </div>

                            <p className="text-lg leading-relaxed opacity-95 max-w-2xl">
                                The IEEE MCET Student Branch required a centralized digital platform to showcase events,
                                announcements, achievements, and student activities. As the Webmaster, I was responsible
                                for designing, developing, and managing the official website for the student branch
                                throughout the academic year.
                            </p>
                        </div>

                        {/* Screenshots */}
                        <div className="space-y-20">



                            <motion.img
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={ieee3}
                                alt="Website Screen 3"
                                className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl"
                            />

                            <div className="space-y-8">
                                <h3 className="text-4xl font-sans uppercase text-amber" style={{ color: "#FFC600" }}>Process</h3>
                                <p className="text-xl leading-relaxed opacity-95">
                                    I began by reviewing other IEEE student branch websites to understand common structures and content needs.
                                    Based on this, I planned a simple navigation system and designed clean layouts aligned with IEEE branding.
                                    The website was then developed using HTML, CSS in WordPress with a focus on responsiveness and maintainability.
                                </p>
                            </div>

                            <motion.img
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={ieee2}
                                alt="Website Screen 2"
                                className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl"
                            />

                        </div>
                    </div>

                </div>
            </div>

            {/* ─── SOCIAL MEDIA BANNER ─── */}
            <div className="relative z-20 w-full overflow-hidden">
                {/* Background Bands to match mockup transition (Blue -> Black -> Purple) */}
                <div className="absolute inset-0 flex flex-col pointer-events-none">
                    <div className="h-[25%] bg-[#008DD5]" />
                    <div className="h-[50%] bg-[#1A1A1A]" />
                    <div className="h-[25%] bg-[#5b2d9e]" />
                </div>

                {/* The Image (Text) overlapping the bands */}
                <img
                    src={socialMediaTxt}
                    alt="Social Media Management"
                    className="w-full h-auto block relative z-10"
                />
            </div>

            {/* ─── PART 2: SOCIAL MEDIA MANAGEMENT (PURPLE) ─── */}
            <section className="bg-[#5b2d9e] text-white py-24 pb-48 px-6 md:px-12 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">

                    {/* COLUMN-WISE ZIGZAG LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

                        {/* COLUMN 1 */}
                        <div className="space-y-32 md:space-y-64">
                            {/* Instagram Mockup (Top Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <img
                                    src={instagramMockup}
                                    alt="Instagram Page"
                                    className="w-full max-w-[400px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl"
                                />
                            </motion.div>

                            {/* LinkedIn Text (Bottom Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg" style={{ background: "#f9a825" }}>
                                    <img src={searchIcon} alt="search" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                    <a
                                        href="https://www.linkedin.com/company/ieee-mcet-student-branch/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-base underline font-sans"
                                        style={{ color: "#5b2d9e" }}
                                    >
                                        https://www.linkedin.com/company/ieee-mcet-student-branch/
                                    </a>
                                </div>
                                <h4 className="text-5xl font-sans uppercase">LinkedIn</h4>
                                <p className="text-xl leading-relaxed opacity-90">
                                    I established the LinkedIn page for the IEEE MCET Student Branch to build a professional digital presence aligned with IEEE standards. The platform was used to showcase events, collaborations, achievements, and chapter updates in a formal and structured manner, helping improve credibility and outreach among faculty, professionals, and partner organizations.
                                </p>
                            </motion.div>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="space-y-20 md:space-y-32 md:mt-48">
                            {/* Instagram Text (Top Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-1 px-6 py-2 rounded-full mr-70 shadow-lg" style={{ background: "#f9a825" }}>
                                    <img src={searchIcon} alt="search" className="w-3 h-3" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                    <a
                                        href="https://www.instagram.com/ieee.mcet/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-base underline font-sans"
                                        style={{ color: "#5b2d9e" }}
                                    >
                                        https://www.instagram.com/ieee.mcet/
                                    </a>
                                </div>
                                <h4 className="text-5xl font-sans uppercase">Instagram</h4>
                                <p className="text-xl leading-relaxed opacity-90">
                                    I created and managed the official Instagram page for the IEEE MCET Student Branch, shaping its visual identity and content strategy from the ground up. The focus was on engaging, fast-paced content such as reels, event highlights, and visual storytelling to increase reach and student engagement. This approach led to strong organic growth, with over 141,000 views in 90 days and significant visibility among non-followers, helping the club reach a wider student audience.
                                </p>
                            </motion.div>

                            {/* LinkedIn Mockup (Bottom Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <img
                                    src={linkedIN}
                                    alt="LinkedIn Page"
                                    className="w-full max-w-[400px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Final Summary */}
                    <div className="mt-40 text-center max-w-5xl mx-auto space-y-8">
                        <p className="text-2xl leading-relaxed opacity-80 max-w-4xl mx-auto">
                            As Webmaster, I was responsible for creating and managing both Instagram and LinkedIn pages
                            for the IEEE MCET Student Branch, crafting the content direction, visual consistency, and
                            platform-specific strategies to strengthen the club's online presence. Together, these
                            platforms improved visibility, communication, and engagement throughout the year.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default IeeeProject;
