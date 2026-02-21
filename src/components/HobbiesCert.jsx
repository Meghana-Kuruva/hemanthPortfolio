import React from 'react';
import { motion } from 'framer-motion';

const HobbiesCert = () => {
    return (
        <section className="bg-cream py-24 px-6 md:px-12 border-t-4 border-dark/5">
            <div className="container mx-auto grid md:grid-cols-2 gap-20">

                {/* Hobbies & Interests */}
                <div>
                    <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-center md:text-left">Hobbies & Interests</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Psychology", icon: "🧠" },
                            { label: "Philosophy & History", icon: "📚" },
                            { label: "Digital and Physical Art", icon: "🎨" },
                            { label: "COFFEE", icon: "☕" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-4 text-center group"
                            >
                                <div className="w-16 h-16 bg-white border-2 border-dark rounded-xl flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] group-hover:bg-amber transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase max-w-[80px] leading-tight text-slate-700">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-coral">Certifications</h2>
                    <div className="space-y-6">
                        {[
                            { title: "GOOGLE UX DESIGN PROFESSIONAL CERTIFICATE (V2)", provider: "Coursera Oct 2025" },
                            { title: "BUILD DYNAMIC USER INTERFACES FOR WEBSITES", provider: "Google Oct 2025" },
                            { title: "CONDUCT UX RESEARCH & TEST EARLY CONCEPTS", provider: "Google Oct 2025" },
                            { title: "CREATE HIGH-FIDELITY DESIGNS IN FIGMA", provider: "Google Oct 2025" },
                            { title: "BUILD WIREFRAMES & LOW-FIDELITY PROTOTYPES", provider: "Google Jul 2025" },
                            { title: "FOUNDATIONS OF UX DESIGN", provider: "Google Jul 2025" }
                        ].map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b-2 border-dark/10 pb-4 last:border-0"
                            >
                                <h3 className="font-black text-sm uppercase leading-tight hover:text-coral transition-colors cursor-default">
                                    {cert.title}
                                </h3>
                                <p className="text-xs font-bold text-slate-500 mt-1 uppercase">
                                    {cert.provider}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HobbiesCert;
