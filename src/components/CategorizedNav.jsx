import React from 'react';

const categories = ["Figma", "Photography", "Graphic Designs", "Art"];

const CategorizedNav = () => {
    return (
        <div className="bg-dark text-white py-10 px-6 overflow-x-auto">
            <div className="container mx-auto flex justify-between items-center min-w-max md:min-w-0 md:px-12">
                {categories.map((cat, i) => (
                    <a
                        key={cat}
                        href={`#${cat.toLowerCase().replace(' ', '-')}`}
                        className="text-3xl md:text-5xl font-medium tracking-tight hover:text-coral transition-colors"
                    >
                        {cat}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CategorizedNav;
