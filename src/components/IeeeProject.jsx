import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Linkedin, Instagram } from 'lucide-react';
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

import instagramMockup from '../assets/socialmedia_1.png';

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
                                <span className="text-dark font-black text-4xl">2025-2026</span>
                            </div>

                            {/* Ieee image section */}
                            <div className="w-[1000px] rounded-[2rem] p-8 flex flex-col items-center mb-12">
                                <img src={ieee1} alt="IEEE Icon" className="w-[620px] h-[300px] mb-4 -translate-x-[270px] rounded-sm" />
                            </div>


                            {/* Problem Section */}
                            <div className="w-full space-y-6 text-left mb-20 px-4">
                                <h3 className="text-4xl font-black uppercase text-[#008DD5]">Problem</h3>
                                <p className="text-[#475569] text-lg leading-relaxed font-medium">
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
                                <h3 className="text-4xl font-black uppercase text-[#008DD5]">Key Learnings</h3>
                                <p className="text-[#008DD5] text-lg leading-tight font-bold">
                                    Designing for clarity, maintaining long-term projects, and managing real-world content independently.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: WEBSITE CONTENT */}
                    <div className="md:col-span-7 space-y-20 pt-10 text-white ml-30">
                        <div className="space-y-12">
                            <h2 className="text-6xl md:text-9xl font-black leading-none uppercase tracking-tighter">
                                IEEE MCET <br />
                                STUDENT BRANCH <br />
                                Website
                            </h2>

                            <div className="flex flex-col md:flex-row items-center gap-12">
                                <div className="flex items-center gap-6">
                                    <span className="font-bold uppercase tracking-widest text-xs opacity-70">Tools</span>
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
                                <p className="text-xl font-medium max-w-sm leading-tight italic opacity-90">
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
                                        <Search size={20} className="text-white" />
                                    </div>
                                    <span className="font-medium tracking-tight text-lg truncate">https://mcet.ieee.org.in/hemanth-vj/</span>
                                </a>
                            </div>

                            <p className="text-lg leading-relaxed opacity-95 max-w-2xl font-medium">
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
                                <h3 className="text-4xl font-black uppercase text-amber">Process</h3>
                                <p className="text-xl leading-relaxed opacity-95 font-medium">
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

            {/* ─── MARQUEE SEPARATOR ─── */}
            <div className="bg-[#1A1A1A] py-12 overflow-hidden border-y-4 border-dark/20 relative z-10">
                <div className="flex whitespace-nowrap animate-marquee font-display">
                    <span className="text-7xl md:text-9xl font-black text-outline opacity-20 mr-12 uppercase">Social Media Management</span>
                    <span className="text-7xl md:text-9xl font-black text-white mr-12 uppercase">Social Media Management</span>
                    <span className="text-7xl md:text-9xl font-black text-outline opacity-20 mr-12 uppercase">Social Media Management</span>
                    <span className="text-7xl md:text-9xl font-black text-white mr-12 uppercase">Social Media Management</span>
                </div>
            </div>

            {/* ─── PART 2: SOCIAL MEDIA MANAGEMENT (PURPLE) ─── */}
            <section className="bg-[#6B21A8] text-white py-24 pb-48 px-6 md:px-12 relative">
                <div className="container mx-auto max-w-6xl">

                    {/* TWO COLUMN LAYOUT: LinkedIn (left) and Instagram (right) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-40">
                        {/* LEFT: LINKEDIN (SECTION 1) */}
                        <div className="flex flex-col gap-8">
                            {/* LinkedIn Icon and Text */}
                            <div className="flex flex-col gap-4">

                                {/* Instagram Mockup */}
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    src={instagramMockup}
                                    alt="Instagram Page"
                                    className="w-full h-auto md:w-[550px] md:h-[1000px] rounded-2xl border-4 border-white/10 shadow-2xl"
                                />

                                <div className='pt-40 pb-40'>

                                    <div className="flex items-center gap-3 px-6 py-3.5 rounded-full shadow-lg pt-5 mt-5 mb-5" style={{ background: "#f9a825" }}>
                                        {/* Search icon */}
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                            <circle cx="11" cy="11" r="7" stroke="#c97d00" strokeWidth="2.5" />
                                            <path d="M16.5 16.5L21 21" stroke="#c97d00" strokeWidth="2.5" strokeLinecap="round" />
                                        </svg>

                                        {/* URL */}
                                        <a
                                            href="https://www.linkedin.com/company/ieee-mcet-student-branch/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base font-medium underline whitespace-nowrap "
                                            style={{ color: "#5b2d9e" }}
                                        >
                                            https://www.linkedin.com/company/ieee-mcet-student-branch/
                                        </a>
                                    </div>
                                    {/* Instagram Text */}
                                    <h4 className="text-4xl font-black uppercase tracking-tight mt-5 mb-5 ">LinkedIn</h4>

                                    {/* Instagram Description */}
                                    <p className="text-lg leading-relaxed font-medium opacity-90 mt-5 mb-5">
                                        I established and managed the official LinkedIn page for the IEEE MCET Student Branch, curating professional content to highlight student achievements, events, and industry connections. The strategy focused on showcasing the branch's impact and fostering engagement with alumni and industry professionals, resulting in increased visibility and networking opportunities for students.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* RIGHT: INSTAGRAM (SECTION 2) */}
                        <div className="flex flex-col gap-8">
                            <div className='pt-20 pb-20'>
                                <div className="flex items-center gap-5 px-6 py-3.5 rounded-full shadow-lg " style={{ background: "#f9a825" }}>
                                    {/* Search icon */}
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <circle cx="11" cy="11" r="7" stroke="#c97d00" strokeWidth="2.5" />
                                        <path d="M16.5 16.5L21 21" stroke="#c97d00" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>

                                    {/* URL */}
                                    <a
                                        href="https://www.instagram.com/ieee.mcet/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-base font-medium underline whitespace-nowrap"
                                        style={{ color: "#5b2d9e" }}
                                    >
                                        https://www.instagram.com/ieee.mcet/
                                    </a>
                                </div>
                                {/* Instagram Text */}
                                <h4 className="text-4xl font-black uppercase tracking-tight  mt-5 mb-5">Instagram</h4>

                                {/* Instagram Description */}
                                <p className="text-lg leading-relaxed font-medium opacity-90">
                                    I created and managed the official Instagram page for the IEEE MCET Student Branch,
                                    shaping its visual identity and content strategy from the ground up.
                                    The focus was on engaging, fast-paced content such as reels, event highlights,
                                    and visual storytelling to increase reach and student engagement. This approach
                                    led to organic growth, with over 141,000 views in 90 days.
                                </p>

                            </div>

                            {/* LinkedIn Mockup */}
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={linkedIN}
                                alt="LinkedIn Page"
                                className="w-full h-auto rounded-2xl border-4 border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Final Summary */}
                    <div className="mt-40 text-center max-w-5xl mx-auto space-y-8">
                        <p className="text-2xl leading-relaxed font-bold opacity-80 italic max-w-4xl mx-auto">
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
