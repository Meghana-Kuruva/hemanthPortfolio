import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectPopup = ({ isOpen, onClose, onSelectProject }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Invisible Backdrop to close on click outside */}
                    <div
                        className="fixed inset-0 z-[100]"
                        onClick={onClose}
                    />

                    {/* Dropdown Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 w-80 md:w-96 z-[101] bg-dark border-4 border-dark shadow-[12px_12px_0px_0px_rgba(26,26,26,0.5)] overflow-hidden mr-[-4px] mt-1"
                    >

                        {/* Blue Block */}
                        <div
                            onClick={() => { onSelectProject('ieee'); onClose(); }}
                            className="bg-[#008DD5] p-6 flex flex-col items-start justify-center border-b-4 border-dark group cursor-pointer hover:brightness-110 transition-all"
                        >
                            <h3 className="text-2xl font-black text-white uppercase font-sans ">IEEE MCET</h3>
                            <p className="text-[10px] font-black text-white uppercase font-sans mt-1 opacity-90">
                                WEBSITE MANAGEMENT <br />
                                SOCIAL MEDIA MANAGEMENT
                            </p>
                        </div>

                        {/* Green Block */}
                        <div
                            onClick={() => { onSelectProject('splitzy'); onClose(); }}
                            className="bg-[#009E5F] p-6 flex flex-col items-start justify-center border-b-4 border-dark group cursor-pointer hover:brightness-110 transition-all"
                        >
                            <h3 className="text-2xl font-black text-white uppercase font-sans">SPLITZY</h3>
                            <p className="text-[10px] font-black text-white uppercase font-sans mt-1 opacity-90">
                                RESEARCH & DEVELOPMENT <br />
                                OF WEBSITE
                            </p>
                        </div>

                        {/* Dark Block */}
                        <div
                            onClick={() => { onSelectProject('graphic'); onClose(); }}
                            className="bg-dark p-6  group cursor-pointer hover:bg-slate-800 transition-colors"
                        >
                            <h3 className="text-2xl font-black text-white uppercase font-sans">
                                GRAPHIC DESIGNS
                            </h3>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectPopup;
