import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const LINKEDIN = "https://www.linkedin.com/in/hemanth-viyyapu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const INSTAGRAM = "https://www.instagram.com/hemanthart?igsh=ZDlnMmtndHR6cXpz";


const Footer = () => (
    <footer className="bg-cream border-t-4 border-dark/5 py-12 px-6 w-full min-h-[250px] flex items-center">
        <div className="container mx-auto flex flex-row justify-between items-center h-full">
            <h2 className="text-4xl font-black uppercase text-dark pl-3">Hemanth</h2>
            <p className="font-bold text-slate-500 uppercase tracking-widest text-base">Portfolio 2026</p>
            <div className="flex gap-8">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="text-dark hover:text-coral transition-colors">
                    <Linkedin size={32} />
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="text-dark hover:text-coral transition-colors">
                    <Instagram size={32} />
                </a>
            </div>
        </div>
    </footer>
);


export default Footer;
