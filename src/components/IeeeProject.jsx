import React from 'react';
import { motion } from 'framer-motion';
import searchIcon from '../assets/Search_Icon.png';
import portraitImg from '../assets/Hemanth_image_3.png';
import ieee1 from '../assets/IEEE_1.png';
import ieee2 from '../assets/IEEE_2.png';
import ieee3 from '../assets/IEEE_3.png';
import wordpress from '../assets/wordpress.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import mcetLogo from '../assets/MCET_IEEE_LOGO.png';
import linkedIN from '../assets/linkedIn.png';
import socialMediaTxt from '../assets/Social_Media_txt.png';
import instagramMockup from '../assets/Insta_Views_extended.png';

const IeeeProject = () => {
    return (
        <div className="min-h-screen bg-[#008DD5] font-sans selection:bg-amber selection:text-dark overflow-x-hidden">

            {/* ═══════════════════════════════════════════════════
                MOBILE LAYOUT (< md)
            ═══════════════════════════════════════════════════ */}
            <div className="md:hidden">
                <div className="px-5 pt-10 pb-8 space-y-8">

                    {/* 1. Big title */}
                    <h2 className="text-5xl font-sans font-black uppercase leading-none text-white tracking-tight">
                        IEEE MCET <br />
                        STUDENT BRANCH <br />
                        <span className="font-light">Website</span>
                    </h2>

                    {/* 2. Tools row + description */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <span className="uppercase tracking-widest text-xs text-white/70 font-bold">Tools</span>
                            <div className="flex gap-3">
                                {[wordpress, html, js].map((icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                        <img src={icon} alt="tool" className="w-6 h-6 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-base leading-snug text-white/90">
                            As the Webmaster — designed, maintained, and managed the website for one academic year
                        </p>
                    </div>

                    {/* 3. URL bar */}
                    <a
                        href="https://mcet.ieee.org.in/hemanth-vj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-dark px-5 py-3 rounded-full border-2 border-white/20 hover:bg-slate-800 transition-all"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <img src={searchIcon} alt="search" className="w-4 h-4 invert" />
                        </div>
                        <span className="text-white/90 text-sm truncate">https://mcet.ieee.org.in/hemanth-vj/</span>
                    </a>

                    {/* 4. Description */}
                    <p className="text-base leading-relaxed text-white/90">
                        The IEEE MCET Student Branch required a centralized digital platform to showcase events,
                        announcements, achievements, and student activities. As the Webmaster, I was responsible
                        for designing, developing, and managing the official website for the student branch
                        throughout the academic year.
                    </p>
                </div>

                {/* 5. White card */}
                <div className="mx-5 mb-8">
                    <div className="bg-white rounded-[2rem] p-5 shadow-2xl">

                        {/* Logo + Year */}
                        <div className="border-4 border-slate-100 rounded-2xl p-6 flex flex-col items-center mb-6">
                            <img src={mcetLogo} alt="IEEE Logo" className="w-full max-w-[200px] h-auto mb-3" />
                            <span className="text-dark text-2xl font-sans">2025-2026</span>
                        </div>

                        {/* IEEE Website screenshot */}
                        <div className="mb-6">
                            <img src={ieee1} alt="IEEE Website" className="w-full h-auto rounded-xl" />
                        </div>

                        {/* Problem */}
                        <div className="px-2 mb-6 space-y-2">
                            <h3 className="text-2xl font-sans font-bold uppercase text-[#008DD5]">Problem</h3>
                            <p className="text-[#475569] text-sm leading-relaxed font-sans">
                                The student branch lacked a consistent and well-structured online presence.
                                Information about events, announcements, and activities was scattered across
                                various platforms, making it difficult for students and visitors to stay updated
                                or understand the branch's work.
                            </p>
                        </div>

                        {/* Portrait */}
                        <div className="mb-6">
                            <img src={portraitImg} alt="Hemanth" className="w-full h-auto rounded-xl" />
                        </div>

                        {/* Key Learnings */}
                        <div className="px-2 space-y-2">
                            <h3 className="text-2xl font-sans font-bold uppercase text-[#008DD5]">Key Learnings</h3>
                            <p className="text-[#008DD5] text-sm leading-tight font-sans">
                                Designing for clarity, maintaining long-term projects, and managing real-world content independently.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. Website screenshots + Process */}
                <div className="px-5 pb-12 space-y-8">
                    <img
                        src={ieee3}
                        alt="Website Screen 3"
                        className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl"
                    />

                    <div className="space-y-4">
                        <h3 className="text-2xl font-sans font-bold uppercase text-[#FFC600]">Process</h3>
                        <p className="text-base leading-relaxed text-white/90">
                            I began by reviewing other IEEE student branch websites to understand common structures and content needs.
                            Based on this, I planned a simple navigation system and designed clean layouts aligned with IEEE branding.
                            The website was then developed using HTML, CSS in WordPress with a focus on responsiveness and maintainability.
                        </p>
                    </div>

                    <img
                        src={ieee2}
                        alt="Website Screen 2"
                        className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl"
                    />
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════
                TABLET LAYOUT (md to lg)
            ═══════════════════════════════════════════════════ */}
            <div className="hidden md:block lg:hidden">
                <div className="px-8 pt-12 pb-10 space-y-10">

                    {/* Big title */}
                    <h2 className="text-7xl font-sans font-black uppercase leading-none text-white tracking-tight">
                        IEEE MCET <br />
                        STUDENT BRANCH <br />
                        <span className="font-light">Website</span>
                    </h2>

                    {/* Tools + description */}
                    <div className="flex items-start gap-10">
                        <div className="flex items-center gap-4 shrink-0">
                            <span className="uppercase tracking-widest text-xs text-white/70 font-bold">Tools</span>
                            <div className="flex gap-3">
                                {[wordpress, html, js].map((icon, i) => (
                                    <div key={i} className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                                        <img src={icon} alt="tool" className="w-7 h-7 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-base leading-snug text-white/90">
                            As the Webmaster — designed, maintained, and managed the website for one academic year
                        </p>
                    </div>

                    {/* URL bar */}
                    <div className="max-w-lg">
                        <a
                            href="https://mcet.ieee.org.in/hemanth-vj/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-dark px-6 py-4 rounded-full border-2 border-white/20 hover:bg-slate-800 transition-all"
                        >
                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <img src={searchIcon} alt="search" className="w-5 h-5 invert" />
                            </div>
                            <span className="text-white/90 text-sm truncate">https://mcet.ieee.org.in/hemanth-vj/</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
                        The IEEE MCET Student Branch required a centralized digital platform to showcase events,
                        announcements, achievements, and student activities. As the Webmaster, I was responsible
                        for designing, developing, and managing the official website for the student branch
                        throughout the academic year.
                    </p>
                </div>

                {/* White card + right column side by side at tablet */}
                <div className="px-8 pb-12 grid grid-cols-2 gap-10 items-start">

                    {/* White card */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl">
                        <div className="border-4 border-slate-100 rounded-2xl p-6 flex flex-col items-center mb-8">
                            <img src={mcetLogo} alt="IEEE Logo" className="w-full max-w-[180px] h-auto mb-3" />
                            <span className="text-dark text-2xl font-sans">2025-2026</span>
                        </div>
                        <div className="mb-8">
                            <img src={ieee1} alt="IEEE Website" className="w-full h-auto rounded-xl" />
                        </div>
                        <div className="mb-8 space-y-2">
                            <h3 className="text-2xl font-sans font-bold uppercase text-[#008DD5]">Problem</h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                                The student branch lacked a consistent and well-structured online presence.
                                Information about events, announcements, and activities was scattered across various platforms.
                            </p>
                        </div>
                        <div className="mb-8">
                            <img src={portraitImg} alt="Hemanth" className="w-full h-auto rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-sans font-bold uppercase text-[#008DD5]">Key Learnings</h3>
                            <p className="text-[#008DD5] text-sm leading-tight">
                                Designing for clarity, maintaining long-term projects, and managing real-world content independently.
                            </p>
                        </div>
                    </div>

                    {/* Screenshots + Process */}
                    <div className="space-y-10 pt-4">
                        <img src={ieee3} alt="Website Screen 3" className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl" />
                        <div className="space-y-3">
                            <h3 className="text-2xl font-sans font-bold uppercase text-[#FFC600]">Process</h3>
                            <p className="text-base leading-relaxed text-white/90">
                                I began by reviewing other IEEE student branch websites to understand common structures and content needs.
                                Based on this, I planned a simple navigation system and designed clean layouts aligned with IEEE branding.
                                The website was then developed using HTML, CSS in WordPress with a focus on responsiveness and maintainability.
                            </p>
                        </div>
                        <img src={ieee2} alt="Website Screen 2" className="w-full h-auto rounded-xl border-4 border-white/10 shadow-2xl" />
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════
                DESKTOP LAYOUT (lg+)
            ═══════════════════════════════════════════════════ */}
            <div className="hidden lg:block">
                <div className="container mx-auto py-12 px-6 xl:px-12">
                    <div className="grid grid-cols-12 gap-15 items-start mb-32">

                        {/* LEFT: WHITE CARD */}
                        <div className="col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-[3rem] p-14 shadow-2xl flex flex-col"
                            >
                                <div className="w-full border-[6px] border-[#F1F5F9] rounded-[2rem] p-8 flex flex-col items-center mb-12">
                                    <img src={mcetLogo} alt="IEEE Icon" className="w-100 h-100 mb-4" />
                                    <span className="text-dark text-4xl">2025-2026</span>
                                </div>
                                <div className="w-full rounded-[2rem] p-4 flex flex-col items-center mb-12">
                                    <img src={ieee1} alt="IEEE Icon" className="w-full max-w-[620px] h-auto mb-4 rounded-sm" />
                                </div>
                                <div className="w-full space-y-6 text-left mb-20 px-4">
                                    <h3 className="text-4xl font-sans uppercase text-[#008DD5]">Problem</h3>
                                    <p className="text-[#475569] text-lg leading-relaxed font-sans">
                                        The student branch lacked a consistent and well-structured online presence.
                                        Information about events, announcements, and activities was scattered across
                                        various platforms, making it difficult for students and visitors to stay updated
                                        or understand the branch's work.
                                    </p>
                                </div>
                                <div className="rounded-2xl p-4 flex flex-col items-center mt-3 mb-15">
                                    <img src={portraitImg} alt="Hemanth" className="w-full h-auto rounded-xl mb-4" />
                                </div>
                                <div className="w-full space-y-6 text-left px-4 mt-5 mb-20">
                                    <h3 className="text-4xl font-sans uppercase text-[#008DD5]">Key Learnings</h3>
                                    <p className="text-[#008DD5] text-lg leading-tight">
                                        Designing for clarity, maintaining long-term projects, and managing real-world content independently.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT: WEBSITE CONTENT */}
                        <div className="col-span-7 space-y-20 pt-10 text-white ml-8 xl:ml-16">
                            <div className="space-y-12">
                                <h2 className="text-9xl font-sans leading-none uppercase tracking-tighter">
                                    IEEE MCET <br />
                                    STUDENT BRANCH <br />
                                    Website
                                </h2>
                                <div className="flex items-center gap-12">
                                    <div className="flex items-center gap-6">
                                        <span className="uppercase tracking-widest text-xs opacity-70">Tools</span>
                                        <div className="flex gap-4">
                                            {[
                                                { src: wordpress, alt: 'WordPress' },
                                                { src: html, alt: 'HTML5' },
                                                { src: js, alt: 'JavaScript' },
                                            ].map((tool, i) => (
                                                <div key={i} className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                                    <img src={tool.src} alt={tool.alt} className="w-7 h-7 rounded-full" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xl leading-tight opacity-90">
                                        As the Webmaster — designed, maintained, and managed the website for one academic year
                                    </p>
                                </div>

                                <div className="max-w-xl">
                                    <a
                                        href="https://mcet.ieee.org.in/hemanth-vj/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-dark flex items-center justify-center gap-4 px-8 py-4 rounded-full border-2 border-white/20 hover:bg-slate-800 transition-all text-white/90"
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
                                    <h3 className="text-4xl font-sans uppercase text-amber" style={{ color: '#FFC600' }}>Process</h3>
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
            </div>

            {/* ─── SOCIAL MEDIA BANNER (all sizes) ─── */}
            <div className="relative z-20 w-full overflow-hidden">
                <div className="absolute inset-0 flex flex-col pointer-events-none">
                    <div className="h-[25%] bg-[#008DD5]" />
                    <div className="h-[50%] bg-[#1A1A1A]" />
                    <div className="h-[25%] bg-[#5b2d9e]" />
                </div>
                <img
                    src={socialMediaTxt}
                    alt="Social Media Management"
                    className="w-full h-auto block relative z-10"
                />
            </div>

            {/* ─── PART 2: SOCIAL MEDIA MANAGEMENT ─── */}
            <section className="bg-[#5b2d9e] text-white py-16 md:py-24 px-5 md:px-12 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">

                    {/* Mobile: single column */}
                    <div className="md:hidden space-y-14">

                        {/* Instagram mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img
                                src={instagramMockup}
                                alt="Instagram Page"
                                className="w-full max-w-[340px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl"
                            />
                        </motion.div>

                        {/* Instagram text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg" style={{ background: '#f9a825' }}>
                                <img src={searchIcon} alt="search" className="w-3 h-3" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                <a
                                    href="https://www.instagram.com/ieee.mcet/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs underline font-sans truncate max-w-[220px]"
                                    style={{ color: '#5b2d9e' }}
                                >
                                    https://www.instagram.com/ieee.mcet/
                                </a>
                            </div>
                            <h4 className="text-4xl font-sans font-black uppercase">Instagram</h4>
                            <p className="text-base leading-relaxed opacity-90">
                                I created and managed the official Instagram page for the IEEE MCET Student Branch, shaping its visual identity and content strategy from the ground up. The focus was on engaging, fast-paced content such as reels, event highlights, and visual storytelling to increase reach and student engagement. This approach led to strong organic growth, with over 141,000 views in 90 days and significant visibility among non-followers.
                            </p>
                        </motion.div>

                        {/* LinkedIn text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg" style={{ background: '#f9a825' }}>
                                <img src={searchIcon} alt="search" className="w-3 h-3" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                <a
                                    href="https://www.linkedin.com/company/ieee-mcet-student-branch/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs underline font-sans truncate max-w-[220px]"
                                    style={{ color: '#5b2d9e' }}
                                >
                                    linkedin.com/company/ieee-mcet
                                </a>
                            </div>
                            <h4 className="text-4xl font-sans font-black uppercase">LinkedIn</h4>
                            <p className="text-base leading-relaxed opacity-90">
                                I established the LinkedIn page for the IEEE MCET Student Branch to build a professional digital presence aligned with IEEE standards. The platform was used to showcase events, collaborations, achievements, and chapter updates in a formal and structured manner.
                            </p>
                        </motion.div>

                        {/* LinkedIn mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <img
                                src={linkedIN}
                                alt="LinkedIn Page"
                                className="w-full max-w-[340px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Tablet + Desktop: zigzag 2-col */}
                    <div className="hidden md:grid grid-cols-2 gap-16 md:gap-24 items-start">
                        {/* COLUMN 1 */}
                        <div className="space-y-32 md:space-y-64">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center">
                                <img src={instagramMockup} alt="Instagram Page" className="w-full max-w-[400px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg" style={{ background: '#f9a825' }}>
                                    <img src={searchIcon} alt="search" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                    <a href="https://www.linkedin.com/company/ieee-mcet-student-branch/" target="_blank" rel="noreferrer" className="text-base underline font-sans" style={{ color: '#5b2d9e' }}>
                                        https://www.linkedin.com/company/ieee-mcet-student-branch/
                                    </a>
                                </div>
                                <h4 className="text-5xl font-sans uppercase">LinkedIn</h4>
                                <p className="text-xl leading-relaxed opacity-90">
                                    I established the LinkedIn page for the IEEE MCET Student Branch to build a professional digital presence aligned with IEEE standards. The platform was used to showcase events, collaborations, achievements, and chapter updates in a formal and structured manner.
                                </p>
                            </motion.div>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="space-y-20 md:space-y-32 md:mt-48">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
                                <div className="inline-flex items-center gap-1 px-6 py-2 rounded-full shadow-lg" style={{ background: '#f9a825' }}>
                                    <img src={searchIcon} alt="search" className="w-3 h-3" style={{ filter: 'brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2681%) hue-rotate(14deg) brightness(97%) contrast(101%)' }} />
                                    <a href="https://www.instagram.com/ieee.mcet/" target="_blank" rel="noreferrer" className="text-base underline font-sans" style={{ color: '#5b2d9e' }}>
                                        https://www.instagram.com/ieee.mcet/
                                    </a>
                                </div>
                                <h4 className="text-5xl font-sans uppercase">Instagram</h4>
                                <p className="text-xl leading-relaxed opacity-90">
                                    I created and managed the official Instagram page for the IEEE MCET Student Branch, shaping its visual identity and content strategy from the ground up. The focus was on engaging, fast-paced content such as reels, event highlights, and visual storytelling to increase reach and student engagement. This approach led to strong organic growth, with over 141,000 views in 90 days.
                                </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center">
                                <img src={linkedIN} alt="LinkedIn Page" className="w-full max-w-[400px] h-auto rounded-3xl border-4 border-white/10 shadow-2xl" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Final Summary */}
                    <div className="mt-20 md:mt-40 text-center max-w-5xl mx-auto space-y-8">
                        <p className="text-base md:text-2xl leading-relaxed opacity-80 max-w-4xl mx-auto">
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
