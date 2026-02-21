import React, { useState } from 'react';
import ProjectPopup from './ProjectPopup';

const Navbar = ({ onSelectProject, navBg = 'bg-cream' }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleLogoClick = () => {
        onSelectProject(null);
    };

    return (
        <nav className={`w-full z-[100] pt-8 px-6 md:px-12 ${navBg}`}>
            <div className="border-4 border-dark flex justify-between items-center bg-white h-20 px-8 relative shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
                <button
                    onClick={handleLogoClick}
                    className="text-3xl font-black tracking-tighter uppercase font-display cursor-pointer hover:opacity-70 transition-opacity"
                >
                    Hemanth
                </button>
                <div className="flex divide-x-4 divide-dark h-full border-l-4 border-dark relative">
                    <button
                        onClick={() => setIsPopupOpen(!isPopupOpen)}
                        className={`px-8 flex items-center font-bold hover:bg-cream transition-colors uppercase cursor-pointer ${isPopupOpen ? 'bg-cream' : ''}`}
                    >
                        Projects
                    </button>
                    <a href="/hemanth_viyyapu_resume.pdf" download="hemanth_viyyapu_resume.pdf" className="px-8 flex items-center font-bold hover:bg-cream transition-colors uppercase bg-white cursor-pointer">Hire Me</a>

                    {/* Project Popup as a Dropdown */}
                    <ProjectPopup
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                        onSelectProject={onSelectProject}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
