import React from 'react';
import figmaIcon from '../assets/figmaLanding.png';
import wordpressIcon from '../assets/wordpress.png';
import canvaIcon from '../assets/canva.png';

/* ─── Icons for Hobbies (using placeholders or lucide if available, but image shows specific icons) ─── */
import { Brain, BookOpen, Palette, Coffee } from 'lucide-react';

/* ─── Shared data ───────────────────────────────────────── */
const educationData = [
    { year: "2015 - 2020", school: "SRI SAI PUBLIC SCHOOL", grade: "Grade: GPA - 9.5" },
    { year: "2020 - 2023", school: "DEEKSHA JUNIOR COLLEGE, ECIL, HYDERABAD", grade: "Grade: A" },
    { year: "2023 - 2027", school: "METHODIST COLLEGE OF ENGINEERING AND TECHNOLOGY", grade: "Bachelor of Engineering - BE, Artificial Intelligence & Machine Learning", sub: "Bachelor of Engineering - BE, AI & Machine Learning" }
];

const experienceData = [
    { year: "2024 - 2025", role: "STUDENT BRANCH MEMBER" },
    { year: "2025 - 2026", role: "WEBMASTER" },
    { year: "2026", role: "STUDENT MENTOR" }
];

const certificationsData = [
    { title: "GOOGLE UX DESIGN PROFESSIONAL CERTIFICATE (V2)", provider: "Coursera Oct 2023" },
    { title: "BUILD DYNAMIC USER INTERFACES FOR WEBSITES", provider: "Google Oct 2025" },
    { title: "CONDUCT UX RESEARCH & TEST EARLY CONCEPTS", provider: "Google Oct 2025" },
    { title: "CREATE HIGH-FIDELITY DESIGNS IN FIGMA", provider: "Google Oct 2025" },
    { title: "BUILD WIREFRAMES & LOW-FIDELITY PROTOTYPES", provider: "Google Jul 2025" },
    { title: "FOUNDATIONS OF UX DESIGN", provider: "Google Jul 2025" }
];

/* ─── Sub-components ───────────────────────────────────── */
const EducationBlock = ({ mobile = false }) => (
    <div className={mobile ? 'text-center' : 'text-left'}>
        <h2 className={`font-sans font-black uppercase tracking-wider ${mobile
            ? 'text-4xl mb-8 mt-4'
            : 'text-5xl mb-12 ml-25'
            } text-white`}>Education</h2>
        <div className={`space-y-10 relative ${mobile ? 'inline-block text-left' : 'ml-4'}`}>
            <div className={`absolute left-[11px] top-8 bottom-16 w-[4px] bg-white/20`} />
            {educationData.map((edu, i) => (
                <div key={i} className="flex gap-5 relative items-start">
                    <div className="mt-1.5 z-10 shrink-0">
                        <img src={arrowRed} alt="arrow" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                        <div className="flex flex-col gap-0.5 mb-1">
                            <span className="text-sm font-sans font-bold text-white/90">{edu.year}</span>
                            <h3 className="text-base font-sans font-black uppercase leading-tight text-white">{edu.school}</h3>
                        </div>
                        <p className="text-[11px] uppercase text-white/80 font-bold">{edu.grade}</p>
                        {edu.sub && <p className="text-[9px] mt-0.5 text-white/60 font-medium uppercase">{edu.sub}</p>}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ExperienceBlock = ({ mobile = false }) => (
    <div className={`bg-coral p-8 rounded-[2.5rem] border-[4px] border-dark shadow-[0_15px_30px_rgba(0,0,0,0.2)] text-white relative transition-all duration-300`}>
        <h2 className={`font-sans font-black mb-1 uppercase tracking-wider ${mobile
            ? 'text-4xl text-center'
            : 'text-6xl xl:text-7xl text-left'
            }`}>Experience</h2>
        <p className={`font-sans mb-10 opacity-90 uppercase font-bold tracking-tight ${mobile ? 'text-sm text-center' : 'text-base'}`}>
            IEEE MCET Student Branch
        </p>
        <div className="space-y-6 relative">
            <div className="absolute left-[13px] top-6 bottom-6 w-[4px] bg-white/30" />
            {experienceData.map((exp, i) => (
                <div key={i} className="flex gap-5 items-center relative">
                    <div className="shrink-0 z-10 bg-coral py-1">
                        <img src={arrowYellow} alt="arrow" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex w-full justify-between items-center bg-white/15 rounded-full px-6 py-2.5 border border-white/20 hover:bg-white/25 transition-colors">
                        <span className="text-xs font-sans font-black uppercase">{exp.year}</span>
                        <span className="text-xs font-sans font-black uppercase text-right">{exp.role}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const TechnicalSkillsBlock = () => {
    return (
        <div className="w-full text-white font-sans">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-black font-sans uppercase text-center mb-10 tracking-normal">Technical Skills</h1>

            {/* Always 2x2 grid at every width */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-10">

                {/* Software Skills — top-left */}
                <div className="flex flex-col gap-4 text-left">
                    <h3 className="text-base sm:text-lg font-black font-sans uppercase">Software Skills</h3>
                    <div className="flex gap-3 sm:gap-4 items-center flex-wrap">
                        {[figmaIcon, canvaIcon, wordpressIcon].map((icon, i) => (
                            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/20 rounded-xl p-2 overflow-hidden">
                                <img src={icon} alt="tool" className="w-full h-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coding Skills — top-right */}
                <div className="flex flex-col gap-4 text-left">
                    <h3 className="text-base sm:text-lg font-black font-sans uppercase">Coding Skills</h3>
                    <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-1 text-xs sm:text-sm font-bold font-sans uppercase leading-snug">
                        <div className="space-y-1">
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JavaScript</div>
                        </div>
                        <div className="space-y-1">
                            <div>Python</div>
                            <div>Java</div>
                            <div>React</div>
                        </div>
                    </div>
                </div>

                {/* Language — bottom-left */}
                <div className="flex flex-col gap-4 text-left">
                    <h3 className="text-base sm:text-lg font-black font-sans uppercase">Language</h3>
                    <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-3">
                        {[["English", "Fluent"], ["Telugu", "Native"], ["Hindi", "Intermediate"]].map(([l, lv], i) => (
                            <div key={i} className="text-left">
                                <span className="text-sm sm:text-base font-black font-sans uppercase leading-none block">{l}</span>
                                <span className="text-[9px] sm:text-[10px] font-semibold font-sans text-white/60 uppercase mt-0.5 block">{lv}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Basic Knowledge — bottom-right */}
                <div className="flex flex-col gap-3 text-left">
                    <h3 className="text-base sm:text-lg font-black font-sans uppercase">Basic</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-[10px] sm:text-xs font-bold font-sans uppercase text-white/70">knowledge of:</p>
                        <div className="flex flex-col gap-0.5 mt-1">
                            <div className="text-lg sm:text-2xl font-black font-sans uppercase">SQL</div>
                            <div className="text-lg sm:text-2xl font-black font-sans uppercase">Type Script</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {["#Social Media", "#Communication", "#Team Management", "#Design"].map((tag, i) => (
                            <span key={i} className="bg-[#FFB547] text-dark px-2 py-0.5 rounded font-bold font-sans text-[8px] sm:text-[9px] uppercase">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Main Component ───────────────────────────────────── */
const EduSkills = () => {
    return (
        <section className="font-sans">

            {/* ══════════ MOBILE LAYOUT (< 990px) ══════════ */}
            <div className="990:hidden">
                {/* Blue section: Education */}
                <div className="bg-[#008DD5] text-white pt-14 pb-12 px-6 relative overflow-hidden">
                    <EducationBlock mobile />
                </div>

                {/* Blue section: Experience Card in a blue container */}
                <div className="bg-[#008DD5] pb-14 px-6">
                    <ExperienceBlock mobile />
                </div>

                {/* Blue section: Technical Skills */}
                <div className="bg-[#008DD5] pt-4 pb-20 px-8">
                    <TechnicalSkillsBlock mobile />
                </div>

                {/* Cream section: Hobbies & Interests */}
                <div className="bg-cream pt-16 pb-12 px-6 border-t-2 border-dark/5">
                    <h2 className="text-4xl font-sans font-black mb-12 uppercase text-dark text-center tracking-tight">Hobbies & Interests</h2>
                    <div className="grid grid-cols-4 gap-4 mb-14 max-w-lg mx-auto">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center"><Brain size={40} strokeWidth={2.5} /></div>
                            <span className="text-[10px] font-black text-center uppercase leading-tight">Psychology</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center"><BookOpen size={40} strokeWidth={2.5} /></div>
                            <span className="text-[10px] font-black text-center uppercase leading-tight">Philosophy<br />& History</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center"><Palette size={40} strokeWidth={2.5} /></div>
                            <span className="text-[10px] font-black text-center uppercase leading-tight">Digital and<br />Physical Art</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center"><Coffee size={40} strokeWidth={2.5} /></div>
                            <span className="text-[10px] font-black text-center uppercase leading-tight">COFFEE</span>
                        </div>
                    </div>

                    {/* Certifications heading in same cream section */}
                    <div className="max-w-md mx-auto">
                        <h2 className="text-4xl font-sans font-black mb-10 uppercase text-coral text-center tracking-tight">Certifications</h2>
                        <div className="space-y-8 mb-8">
                            {certificationsData.map((cert, i) => (
                                <div key={i} className="border-b-2 border-dark/5 pb-4 last:border-0 hover:translate-x-1 transition-transform cursor-default">
                                    <h3 className="text-sm font-black font-sans uppercase leading-tight text-dark">{cert.title}</h3>
                                    <p className="text-[11px] font-sans text-slate-500 mt-1 uppercase font-bold">{cert.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════ DESKTOP LAYOUT (990px+) ══════════ */}
            <div className="hidden 990:block">
                {/* TOP HALF - BLUE BACKGROUND */}
                <div className="bg-navy text-white pt-20 pb-24 px-[10%] relative overflow-hidden">
                    <div className="container mx-auto grid grid-cols-2 gap-12 relative z-10">
                        <EducationBlock />
                        <TechnicalSkillsBlock />
                    </div>
                </div>

                {/* BOTTOM HALF - CREAM BACKGROUND */}
                <div className="bg-cream pt-10 pb-24 px-12 border-t-4 border-dark/5">
                    <div className="container mx-auto grid grid-cols-2 gap-16">
                        {/* Experience + Hobbies */}
                        <div className="relative -mt-32">
                            <ExperienceBlock />
                            <div className="mt-16">
                                <h2 className="text-5xl font-sans font-black mb-12 uppercase text-dark tracking-tight">Hobbies & Interests</h2>
                                <div className="grid grid-cols-4 gap-8">
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <Brain size={60} strokeWidth={2} />
                                        <span className="text-xs font-black uppercase">Psychology</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <BookOpen size={60} strokeWidth={2} />
                                        <span className="text-xs font-black uppercase">Philosophy & History</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <Palette size={60} strokeWidth={2} />
                                        <span className="text-xs font-black uppercase">Digital and Physical Art</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-4 text-center">
                                        <Coffee size={60} strokeWidth={2} />
                                        <span className="text-xs font-black uppercase">COFFEE</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="ml-0 990:ml-12">
                            <h2 className="text-5xl xl:text-6xl font-display font-black mb-12 uppercase text-coral tracking-tight">Certifications</h2>
                            <div className="space-y-8">
                                {certificationsData.map((cert, i) => (
                                    <div key={i} className="border-b-2 border-dark/5 pb-4 last:border-0">
                                        <h3 className="text-base xl:text-lg font-black font-sans uppercase leading-tight text-dark">{cert.title}</h3>
                                        <p className="text-base font-sans text-slate-500 mt-1 uppercase font-bold">{cert.provider}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default EduSkills;
