import React, { useState } from 'react';
import ProjectPopup from './ProjectPopup';
import hemanthLogo from '../assets/Hemanth_Logo.png';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = ({ onSelectProject, navBg = 'bg-cream' }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

    const handleLogoClick = () => {
        onSelectProject(null);
        setIsMobileMenuOpen(false);
        setIsMobileProjectsOpen(false);
    };

    const handleMobileProjectSelect = (id) => {
        onSelectProject(id);
        setIsMobileMenuOpen(false);
        setIsMobileProjectsOpen(false);
    };

    return (
        <nav className={`w-full z-[100] pt-6 990:pt-8 px-4 990:px-12 xl:px-48 ${navBg}`}>
            <div className="border-4 border-dark flex justify-between items-center bg-white h-16 990:h-20 px-4 990:px-8 relative shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
                {/* Logo */}
                <button
                    onClick={handleLogoClick}
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                >
                    <img src={hemanthLogo} alt="Hemanth Logo" className="h-8 990:h-10 w-auto" />
                </button>

                {/* Desktop nav items */}
                <div className="hidden 990:flex divide-x-4 divide-dark h-full border-l-4 border-dark relative">
                    <button
                        onClick={() => setIsPopupOpen(!isPopupOpen)}
                        className={`px-8 flex items-center font-bold hover:bg-cream transition-colors uppercase cursor-pointer ${isPopupOpen ? 'bg-cream' : ''}`}
                    >
                        Projects
                    </button>
                    <a
                        href="/hemanth_viyyapu_resume.pdf"
                        download="hemanth_viyyapu_resume.pdf"
                        className="px-8 flex items-center font-bold hover:bg-cream transition-colors uppercase bg-white cursor-pointer"
                    >
                        Hire Me
                    </a>

                    <ProjectPopup
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                        onSelectProject={onSelectProject}
                    />
                </div>

                {/* Mobile hamburger */}
                <button
                    className="990:hidden p-2 border-2 border-dark"
                    onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsMobileProjectsOpen(false); }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isMobileMenuOpen && (
                <div className="990:hidden bg-white border-4 border-t-0 border-dark shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] divide-y-2 divide-dark/10">
                    {/* Projects accordion toggle */}
                    <button
                        onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                        className="w-full px-6 py-4 text-left font-bold uppercase hover:bg-cream transition-colors flex items-center justify-between"
                    >
                        <span>Projects</span>
                        {isMobileProjectsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {/* Inline project sub-links */}
                    {isMobileProjectsOpen && (
                        <div className="divide-y-2 divide-dark/10">
                            <button
                                onClick={() => handleMobileProjectSelect('ieee')}
                                className="w-full px-10 py-3 text-left font-bold uppercase hover:bg-[#008DD5] hover:text-white transition-colors flex flex-col gap-0.5"
                            >
                                <span>IEEE MCET</span>
                                <span className="text-[10px] font-semibold opacity-60 normal-case">Website & Social Media Management</span>
                            </button>
                            <button
                                onClick={() => handleMobileProjectSelect('splitzy')}
                                className="w-full px-10 py-3 text-left font-bold uppercase hover:bg-[#009E5F] hover:text-white transition-colors flex flex-col gap-0.5"
                            >
                                <span>Splitzy</span>
                                <span className="text-[10px] font-semibold opacity-60 normal-case">Research & Development of Website</span>
                            </button>
                            <button
                                onClick={() => handleMobileProjectSelect('graphic')}
                                className="w-full px-10 py-3 text-left font-bold uppercase hover:bg-dark hover:text-white transition-colors"
                            >
                                Graphic Designs
                            </button>
                        </div>
                    )}

                    <a
                        href="/hemanth_viyyapu_resume.pdf"
                        download="hemanth_viyyapu_resume.pdf"
                        className="block w-full px-6 py-4 font-bold uppercase hover:bg-cream transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
