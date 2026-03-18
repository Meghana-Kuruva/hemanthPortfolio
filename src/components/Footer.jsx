import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

const LINKEDIN = "https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const INSTAGRAM = "https://www.instagram.com/hemanthart?igsh=ZDlnMmtndHR6cXpz";

const Footer = () => (
    <footer className="bg-cream py-8 990:py-12 px-6 990:px-12 w-full border-t-2 border-dark/5">
        <div className="container mx-auto">
            <div className="flex flex-col 990:flex-row justify-between items-center gap-6 990:gap-12">
                
                {/* Logo / Name */}
                <div className="flex-1 text-center 990:text-left">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <h2 className="text-2xl 990:text-3xl font-black uppercase text-dark tracking-tight hover:text-coral transition-colors">
                            Hemanth
                        </h2>
                    </Link>
                </div>

                {/* Tagline */}
                <div className="flex-1 text-center">
                    <p className="text-xs 990:text-sm font-black font-sans uppercase tracking-[0.2em] text-dark/60">
                        Portfolio 2026
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex-1 flex justify-center 990:justify-end gap-6 990:gap-8 text-dark">
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="hover:text-coral transition-transform hover:scale-110">
                        <Linkedin size={24} strokeWidth={2.5} />
                    </a>
                    <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                        className="hover:text-coral transition-transform hover:scale-110">
                        <Instagram size={24} strokeWidth={2.5} />
                    </a>
                </div>

            </div>
        </div>
    </footer>
);

export default Footer;
