import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Wallet } from 'lucide-react';
import searchIcon from '../assets/Search_Icon.png';

// Import images
import splitzy1 from '../assets/splitzy_1.png';
import splitzy2 from '../assets/splitzy_2.png';
import splitzy3 from '../assets/Splitzy_3.png';
import splitzy4 from '../assets/splitzy_4.png';
import splitzy5 from '../assets/splitzy_5.png';
import splitzy6 from '../assets/splitzy_6.png';
import splitzy7 from '../assets/splitzy_7.png';
import splitzy8 from '../assets/splitzy_8.png';
import splitzy9 from '../assets/splitzy_9.png';
import splitzy10 from '../assets/splitzy_10.png';
import figmaIcon from '../assets/Figma.png';
import reactIcon from '../assets/react.png';
import firebaseIcon from '../assets/firebase.png';
import netlifyIcon from '../assets/netlify.png';

const SplitzyProject = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#009E5F] font-sans selection:bg-amber selection:text-dark overflow-x-hidden relative">

            <div className="container mx-auto py-32 px-6 md:px-12">

                {/* 2. Hero Section: SPLITZY TITLE & Description */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
                    <div className="space-y-16">
                        <h2 className="text-5xl md:text-[12rem] text-white uppercase leading-none font-medium">SPLITZY</h2>

                        <div className="flex flex-col md:flex-row gap-16 items-start">
                            <div className="space-y-8">
                                <span className="text-white text-sm uppercase opacity-80 ">Tools Used</span>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-16 h-16 bg-white/10 rounded-none p-4 flex items-center justify-center border-2 border-white/20 hover:bg-white/20 transition-all shadow-xl">
                                            <img src={figmaIcon} alt="Figma" className="w-full h-auto" />
                                        </div>
                                        <div className="w-16 h-16 bg-white/10 rounded-none p-4 flex items-center justify-center border-2 border-white/20 hover:bg-white/20 transition-all shadow-xl">
                                            <img src={reactIcon} alt="React" className="w-full h-auto" />
                                        </div>
                                        <div className="w-16 h-16 bg-white/10 rounded-none p-4 flex items-center justify-center border-2 border-white/20 hover:bg-white/20 transition-all shadow-xl">
                                            <img src={firebaseIcon} alt="Firebase" className="w-full h-auto" />
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-4 bg-white/10 border-2 border-white/20 px-6 py-3 rounded-none shadow-xl">
                                        <img src={netlifyIcon} alt="Netlify" className="h-5 w-auto" />
                                        <span className="text-white text-xs uppercase opacity-80">Netlify Project</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-white text-xl leading-relaxed max-w-md uppercase opacity-90 mt-6 pt-2 border-t-2 border-white/10">
                                Personal finance management simple, accessible, and effective for everyone, to take control of financial future with smart budgeting tools and insights.
                            </p>
                        </div>

                        {/* URL BAR: Exact pill design */}
                        <div className="max-w-2xl">
                            <a
                                href="https://splitzy-mern-app.web.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-dark/30 flex items-center gap-6 px-8 py-6 rounded-none border-4 border-white/20 shadow-2xl hover:bg-white/10 transition-all group scale-105 origin-left"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                    <img src={searchIcon} alt="search" className="w-6 h-6" />
                                </div>
                                <span className="text-white text-lg uppercase  opacity-95">https://splitzy-mern-app.web.app/</span>
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-none overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.1)] border-[12px] border-white/20 cursor-pointer"
                    >
                        <a href="https://splitzy-mern-app.web.app/" target="_blank" rel="noopener noreferrer">
                            <img src={splitzy2} alt="Hero Splash" className="w-full h-auto transition-transform duration-700 hover:scale-110" />
                        </a>
                    </motion.div>
                </div>

                {/* 3. Logo Banner: Perfectly sized */}
                <div className="flex justify-center mb-32">
                    <div className="bg-white border-4 border-dark px-16 py-10 rounded-none flex items-center gap-8 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)]">
                        <div className="w-20 h-20 bg-[#009E5F]/10 rounded-none flex items-center justify-center border-2 border-[#009E5F]/20">
                            <Wallet size={48} className="text-[#009E5F]" />
                        </div>
                        <h3 className="text-7xl text-dark uppercase font-medium">Splitzy</h3>
                    </div>
                </div>

                {/* 4. Intro Paragraph: Center block, Bold Uppercase */}
                <div className="max-w-5xl mx-auto mb-32">
                    <p className="text-white text-xl md:text-2xl leading-relaxed text-center uppercase opacity-95">
                        The Spending Tracker App is a web-based personal finance application designed to help users record expenses, analyze spending patterns, and build better financial habits. This project was developed as part of a college mini project, focusing on applying core personal finance principles through a user-centered digital product.
                    </p>
                </div>

                {/* 5. Main Mid Dashboard: splitzy_5.png */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-none overflow-hidden border-[12px] border-white/20 shadow-5xl mb-48 max-w-screen-2xl mx-auto cursor-pointer"
                >
                    <img src={splitzy5} alt="Full System Dashboard" className="w-full h-auto transition-transform duration-700 hover:scale-110" />
                </motion.div>

                {/* 6. Feature Sections: The "messed up" sections fixed */}
                <div className="space-y-56">

                    {/* DATA VISUALIZATION: Image Left, Text Right */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-none overflow-hidden shadow-3xl border-4 border-white/20"
                        >
                            <img src={splitzy6} alt="Data Visualization" className="w-full h-auto" />
                        </motion.div>
                        <div className="text-white space-y-10">
                            <h4 className="text-6xl uppercase font-medium">Data Visualization</h4>
                            <p className="text-xl leading-relaxed opacity-90 uppercase">
                                To improve financial awareness, the app uses data visualization techniques such as charts and summaries to present spending patterns clearly. Visual representations allow users to quickly understand where their money goes, compare categories, and identify trends over time, making complex financial data easier to interpret and act upon.
                            </p>
                        </div>
                    </div>

                    {/* 50/30/20 RULE: Text Left, Image Right */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="text-white space-y-10 order-2 md:order-1">
                            <h4 className="text-6xl uppercase font-medium">50/30/20 Rule</h4>
                            <p className="text-xl leading-relaxed opacity-90 uppercase">
                                The app is inspired by the 50/30/20 budgeting rule, which divides income into three categories: 50% for needs, 30% for wants, and 20% for savings. This principle was used as a reference framework during development to help users evaluate whether their spending habits are balanced and aligned with common personal finance standards.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-none overflow-hidden shadow-3xl border-4 border-white/20 order-1 md:order-2 max-w-lg mx-auto"
                        >
                            <img src={splitzy4} alt="50/30/20 Rule Details" className="w-full h-auto" />
                        </motion.div>
                    </div>

                    {/* THREE CARDS: Full Width Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-none overflow-hidden shadow-4xl border-4 border-white/10"
                    >
                        <img src={splitzy10} alt="Budget Category Cards" className="w-full h-auto" />
                    </motion.div>

                    {/* ENVELOPE SYSTEM: Image Left, Text Right */}
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-none overflow-hidden shadow-3xl border-4 border-white/20 max-w-lg mx-auto"
                        >
                            <img src={splitzy3} alt="Expense Entry Form" className="w-full h-auto" />
                        </motion.div>
                        <div className="text-white space-y-10">
                            <h4 className="text-6xl uppercase font-medium">Envelope System</h4>
                            <p className="text-xl leading-relaxed opacity-90 uppercase">
                                The envelope system influenced the expense categorization feature of the app. Each spending category functions like a digital envelope, encouraging users to consciously allocate and track money within specific limits. This approach promotes discipline and helps users avoid overspending in particular categories.
                            </p>
                        </div>
                    </div>

                    {/* TWO SCREENS: side-by-side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            viewport={{ once: true }}
                            className="rounded-none overflow-hidden shadow-3xl border-4 border-white/20"
                        >
                            <img src={splitzy8} alt="Analytics View" className="w-full h-auto" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            viewport={{ once: true }}
                            className="rounded-none overflow-hidden shadow-3xl border-4 border-white/20"
                        >
                            <img src={splitzy7} alt="Transaction History" className="w-full h-auto" />
                        </motion.div>
                    </div>

                    {/* BOTTOM LARGE DASHBOARD: splitzy_4.png */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-none overflow-hidden shadow-5xl border-[12px] border-white/20 max-w-7xl mx-auto"
                    >
                        <img src={splitzy1} alt="System Summary" className="w-full h-auto" />
                    </motion.div>
                </div>

                {/* 7. Outcome & Learnings: Perfectly formatted text */}
                <div className="text-white space-y-24 max-w-6xl mx-auto mt-48">
                    <div className="space-y-6">
                        <h3 className="text-4xl uppercase text-white underline decoration-amber decoration-8 underline-offset-[12px] font-medium">Outcome</h3>
                        <p className="text-xl leading-relaxed uppercase opacity-90 max-w-4xl pt-4">
                            The final application allows users to log expenses, view category-level spending, and gain clear insights into their financial habits. The project successfully demonstrates the application of financial tracking techniques combined with modern front-end development practices.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <h3 className="text-4xl uppercase text-white underline decoration-amber decoration-8 underline-offset-[12px] font-medium">Key Learnings</h3>
                        <ul className="grid gap-6 text-xl uppercase opacity-90 pt-4">
                            <li className="flex gap-6 items-center">
                                <span className="w-3 h-3 bg-white rounded-full ring-4 ring-white/10" />
                                <span>Translating finance concepts into usable digital features</span>
                            </li>
                            <li className="flex gap-6 items-center">
                                <span className="w-3 h-3 bg-white rounded-full ring-4 ring-white/10" />
                                <span>Designing simple interfaces for data-heavy applications</span>
                            </li>
                            <li className="flex gap-6 items-center">
                                <span className="w-3 h-3 bg-white rounded-full ring-4 ring-white/10" />
                                <span>Working with React component architecture and Firebase integration</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="w-3 h-3 bg-white rounded-full ring-4 ring-white/10" />
                                <span>Balancing technical implementation with user experience</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SplitzyProject;
