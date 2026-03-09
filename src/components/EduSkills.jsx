import React from 'react';
import hobbiesImg from '../assets/Hobbies_Interests.png';
import figmaIcon from '../assets/figmaLanding.png';
import wordpressIcon from '../assets/wordpress.png';
import canvaIcon from '../assets/canva.png';
import arrowRed from '../assets/Arrow_Red.png';
import arrowYellow from '../assets/Arrow_Yellow.png';

const EduSkills = () => {
    return (
        <section className="font-sans">
            {/* TOP HALF - BLUE BACKGROUND */}
            <div className="bg-navy text-white pt-20 pb-24 px-8 md:px-[10%] relative overflow-hidden">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 relative z-10">

                    {/* Education Section */}
                    <div>
                        <h2 className="text-5xl  mb-12 ml-25 font-sans uppercase ">Education</h2>
                        <div className="space-y-12 relative ml-4">
                            {/* Line */}
                            <div className="absolute left-[11px] top-8 bottom-8 w-[3px] bg-dark/30" />

                            {[
                                { year: "2015 - 2020", school: "SRI SAI PUBLIC SCHOOL", grade: "Grade: GPA - 9.5" },
                                { year: "2020 - 2023", school: "DEEKSHA JUNIOR COLLEGE, ECIL, HYDERABAD", grade: "Grade: A" },
                                { year: "2023 - 2027", school: "METHODIST COLLEGE OF ENGINEERING AND TECHNOLOGY", grade: "Bachelor of Engineering - BE, Artificial Intelligence & Machine Learning", sub: "Bachelor of Engineering - BE, Artificial Intelligence & Machine Learning" }
                            ].map((edu, i) => (
                                <div key={i} className="flex gap-8 relative items-start">
                                    <div className="mt-1.5 z-10 shrink-0">
                                        <img src={arrowRed} alt="arrow" className="w-7 h-7 object-contain" />
                                    </div>
                                    <div>
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-1">
                                            <span className="text-lg font-sans whitespace-nowrap text-coral">{edu.year}</span>
                                            <h3 className="text-xl md:text-2xl font-sans uppercase leading-tight">{edu.school}</h3>
                                        </div>
                                        <p className="text-sm md:text-base uppercase ml-30 text-white/80">{edu.grade}</p>
                                        {edu.sub && <p className="text-[10px] md:text-xs  ml-30 mt-1 max-w-xs">{edu.sub}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Section */}
                    <div className="relative ml-50">
                        <h2 className="text-5xl md:text-6xl font-sans mb-12 mt-30 uppercase  ">Technical Skills</h2>

                        <div className="grid grid-cols-[1fr_1.5fr] gap-8">
                            {/* Software Skills */}
                            <div>
                                <h3 className="text-lg uppercase font-sans mb-6 border-b-4 border-white/20 pb-2 inline-block">Software Skills</h3>
                                <div className="flex flex-wrap gap-4">
                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg hover:scale-110 transition-transform">
                                        <img src={figmaIcon} alt="Figma" className="w-full h-auto" />
                                    </div>
                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg hover:scale-110 transition-transform overflow-hidden">
                                        <img src={canvaIcon} alt="Canva" className="w-full h-auto" />
                                    </div>
                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-3 shadow-lg hover:scale-110 transition-transform">
                                        <img src={wordpressIcon} alt="WordPress" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Coding Skills */}
                            <div>
                                <h3 className="text-lg uppercase font-sans mb-6 border-b-4 border-white/20 pb-2 inline-block">Coding Skills</h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-[15px] font-sans uppercase leading-tight">
                                    <div className="flex flex-col">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JavaScript</span>
                                        <span>WordPress</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Python</span>
                                        <span>Java</span>
                                        <span>React</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[1.2fr_1fr] gap-8 mt-12">
                            {/* Language */}
                            <div>
                                <h3 className="text-lg uppercase font-sans mb-6 border-b-4 border-white/20 pb-2 inline-block">Language</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-1 max-w-[200px]">
                                        <span className="text-base font-sans">English</span>
                                        <span className="text-[10px] font-sans text-coral uppercase mb-1">Fluent</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-1 max-w-[200px]">
                                        <span className="text-base font-sans">Telugu</span>
                                        <span className="text-[10px] font-sans text-coral uppercase mb-1">Native</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-1 max-w-[200px]">
                                        <span className="text-base font-sans">Hindi</span>
                                        <span className="text-[10px] font-sans text-coral uppercase mb-1">Intermediate</span>
                                    </div>
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div className="flex flex-wrap gap-2 content-start pt-2">
                                <p className="w-full text-[10px] font-sans uppercase text-white/40 mb-1">Basic knowledge of:</p>
                                <div className="flex gap-3 mb-4 w-full">
                                    <span className="bg-[#FFB547] text-dark px-4 py-1.5 rounded-md font-sans uppercase text-xs shadow-md">SQL</span>
                                    <span className="bg-[#FFB547] text-dark px-4 py-1.5 rounded-md font-sans uppercase text-xs shadow-md">TypeScript</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["#Social Media", "#Communication", "#Team Management", "#Design"].map((tag, i) => (
                                        <span key={i} className="bg-[#FFB547] text-dark px-3 py-1 rounded-full font-sans text-[9px] uppercase shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
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
                            <h2 className="text-6xl md:text-7xl font-sans mb-2 uppercase">Experience</h2>
                            <p className="text-base md:text-lg font-sans mb-10 opacity-90 uppercase">IEEE MCET Student Branch</p>

                            <div className="space-y-8">
                                {[
                                    { year: "2024 - 2025", role: "STUDENT BRANCH MEMBER" },
                                    { year: "2025 - 2026", role: "WEBMASTER" },
                                    { year: "2026", role: "STUDENT MENTOR" }
                                ].map((exp, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="shrink-0">
                                            <img src={arrowYellow} alt="arrow" className="w-7 h-7 object-contain" />
                                        </div>
                                        <div className="flex w-full justify-between items-center bg-white/10 rounded-full px-6 py-2 border border-white/20">
                                            <span className="text-sm md:text-base font-sans">{exp.year}</span>
                                            <span className="text-sm md:text-base font-sans">{exp.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hobbies Section */}
                        <div className="mt-16">
                            <img
                                src={hobbiesImg}
                                alt="Hobbies & Interests"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="ml-50">
                        <h2 className="text-5xl md:text-6xl font-sans mb-12  uppercase text-coral">Certifications</h2>
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
                                    <h3 className="text-base md:text-lg font-sans uppercase leading-tight">{cert.title}</h3>
                                    <p className="text-sm md:text-base font-sans text-slate-500 mt-1 uppercase">{cert.provider}</p>
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
