import React from 'react';
import { Users, MessageCircle, Zap, Lightbulb, Brain, Book, Palette, Coffee } from 'lucide-react';
import figmaIcon from '../assets/figmaLanding.png';
import wordpressIcon from '../assets/wordpress.png';
import canvaIcon from '../assets/canva.png';

const EduSkills = () => {
    return (
        <section className="font-sans">
            {/* TOP HALF - BLUE BACKGROUND */}
            <div className="bg-navy text-white pt-30 pb-20 px-6 md:px-12 relative">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 relative z-10">

                    {/* Education Section */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Education</h2>
                        <div className="space-y-10 relative">
                            {/* Line */}
                            <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-dark" />

                            {[
                                { year: "2015 - 2020", school: "SRI SAI PUBLIC SCHOOL", grade: "Grade: GPA - 9.5" },
                                { year: "2020 - 2023", school: "DEEKSHA JUNIOR COLLEGE, ECIL, HYDERABAD", grade: "Grade: A" },
                                { year: "2023 - 2027", school: "METHODIST COLLEGE OF ENGINEERING AND TECHNOLOGY", grade: "Bachelor of Engineering - BE, Artificial Intelligence & Machine Learning" }
                            ].map((edu, i) => (
                                <div key={i} className="flex gap-6 relative">
                                    <div className="mt-1 transform -translate-x-[2px] text-coral">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12L0 24V0L24 12Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm md:text-base font-black whitespace-nowrap">{edu.year}</span>
                                            <h3 className="text-base md:text-lg font-black uppercase tracking-tight">{edu.school}</h3>
                                        </div>
                                        <p className="text-sm md:text-base uppercase font-bold text-blue-200 mt-1">{edu.grade}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Header (Right side upper) */}
                    <div className="relative pt-12">
                        {/* Resume Background */}
                        <div className="absolute top-0 right-0 flex flex-col items-end opacity-20 pointer-events-none select-none">
                            <span className="text-8xl font-black text-outline leading-none uppercase">Resume</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase tracking-tighter mt-12">Technical Skills</h2>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Software Skills */}
                            <div>
                                <h3 className="text-sm md:text-base font-black uppercase tracking-widest mb-6">Software Skills</h3>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-dark/5">
                                        <img src={figmaIcon} alt="Figma" className="w-full h-auto" />
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-dark/5 overflow-hidden">
                                        <img src={canvaIcon} alt="Canva" className="w-full h-auto scale-150 rotate-0" />
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-dark/5">
                                        <img src={wordpressIcon} alt="WordPress" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Coding Skills */}
                            <div>
                                <h3 className="text-sm md:text-base font-black uppercase tracking-widest mb-6">Coding Skills</h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-base font-black uppercase leading-tight">
                                    <span>HTML</span> <span>Python</span>
                                    <span>CSS</span> <span>Java</span>
                                    <span>JavaScript</span> <span>React</span>
                                    <span>WordPress</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {/* Language */}
                            <div>
                                <h3 className="text-sm md:text-base font-black uppercase tracking-widest mb-4">Language</h3>
                                <div className="flex gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-base md:text-lg font-black">English</span>
                                        <span className="text-xs font-bold text-blue-200 uppercase">Fluent</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base md:text-lg font-black">Telugu</span>
                                        <span className="text-xs font-bold text-blue-200 uppercase">Native</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="text-base md:text-lg font-black">Hindi</span>
                                    <span className="text-xs font-bold text-blue-200 uppercase">Intermediate</span>
                                </div>
                            </div>

                            {/* Soft Skills with Icons */}
                            <div className="flex flex-wrap gap-4 content-start">
                                {[
                                    { label: "Team Management", icon: <Users size={28} /> },
                                    { label: "Communication", icon: <MessageCircle size={28} /> },
                                    { label: "Social Media Mgmt", icon: <Zap size={28} /> },
                                    { label: "Graphic Design", icon: <Lightbulb size={28} /> }
                                ].map((skill, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border border-dark/5 text-dark">
                                            {skill.icon}
                                        </div>
                                        <span className="text-[11px] font-black uppercase text-center leading-tight max-w-[70px]">{skill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                            <p className="text-sm md:text-base font-black uppercase text-white mb-3">Basic Knowledge of:</p>
                            <div className="flex gap-3 flex-wrap">
                                <span className="bg-amber text-dark px-4 py-2 rounded text-sm font-black uppercase border border-dark">SQL</span>
                                <span className="bg-amber text-dark px-4 py-2 rounded text-sm font-black uppercase border border-dark">TypeScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM HALF - CREAM BACKGROUND */}
            <div className="bg-cream pt-10 pb-24 px-6 md:px-12 border-t-4 border-dark/5">
                <div className="container mx-auto grid md:grid-cols-2 gap-16">

                    {/* Experience Card (on the boundary) */}
                    <div className="relative -mt-24 md:-mt-32">
                        <div className="bg-coral p-10 rounded-[3rem] border-4 border-dark shadow-xl text-white">
                            <h2 className="text-6xl md:text-7xl font-black mb-2 uppercase tracking-tighter">Experience</h2>
                            <p className="text-base md:text-lg font-bold mb-10 opacity-90 uppercase">IEEE MCET Student Branch</p>

                            <div className="space-y-8">
                                {[
                                    { year: "2024 - 2025", role: "STUDENT BRANCH MEMBER" },
                                    { year: "2025 - 2026", role: "WEBMASTER" },
                                    { year: "2026", role: "STUDENT MENTOR" }
                                ].map((exp, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="text-amber">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12L0 24V0L24 12Z" />
                                            </svg>
                                        </div>
                                        <div className="flex w-full justify-between items-center bg-white/10 rounded-full px-6 py-2 border border-white/20">
                                            <span className="text-sm md:text-base font-black">{exp.year}</span>
                                            <span className="text-sm md:text-base font-black">{exp.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies Section */}
                        <div className="mt-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tight text-center md:text-left">Hobbies & Interests</h2>
                            <div className="grid grid-cols-4 gap-4 max-w-sm">
                                {[
                                    { label: "Psychology", icon: <Brain size={32} /> },
                                    { label: "Philosophy & history", icon: <Book size={32} /> },
                                    { label: "Digital and Physical Art", icon: <Palette size={32} /> },
                                    { label: "COFFEE", icon: <Coffee size={32} /> }
                                ].map((hobby, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-white border-2 border-dark rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] mb-3 text-dark">
                                            {hobby.icon}
                                        </div>
                                        <span className="text-xs font-black uppercase leading-tight max-w-[70px]">{hobby.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-coral">Certifications</h2>
                        <div className="space-y-8">
                            {[
                                { title: "GOOGLE UX DESIGN PROFESSIONAL CERTIFICATE (V2)", provider: "Coursera Oct 2023" },
                                { title: "BUILD DYNAMIC USER INTERFACES FOR WEBSITES", provider: "Google Oct 2025" },
                                { title: "CONDUCT UX RESEARCH & TEST EARLY CONCEPTS", provider: "Google Oct 2025" },
                                { title: "CREATE HIGH-FIDELITY DESIGNS IN FIGMA", provider: "Google Oct 2025" },
                                { title: "BUILD WIREFRAMES & LOW-FIDELITY PROTOTYPES", provider: "Google Jul 2025" },
                                { title: "FOUNDATIONS OF UX DESIGN", provider: "Google Jul 2025" }
                            ].map((cert, i) => (
                                <div key={i} className="border-b-2 border-dark/5 pb-4">
                                    <h3 className="text-base md:text-lg font-black uppercase leading-tight">{cert.title}</h3>
                                    <p className="text-sm md:text-base font-bold text-slate-500 mt-1 uppercase">{cert.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EduSkills;
