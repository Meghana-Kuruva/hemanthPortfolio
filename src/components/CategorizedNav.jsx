import React from 'react';

const categories = ["Figma", "Photography", "Graphic Designs", "Art"];

const CategorizedNav = () => {
    return (
        <div className="bg-dark text-white py-8 990:py-10 px-4 990:px-6 overflow-x-auto">
            <div className="container mx-auto flex justify-between items-center min-w-max 990:min-w-0 990:px-12 gap-4 990:gap-0">
                {categories.map((cat, i) => (
                    <a
                        key={cat}
                        href={`#${cat.toLowerCase().replace(' ', '-')}`}
                        className="text-2xl 990:text-3xl xl:text-5xl font-medium tracking-tight hover:text-coral transition-colors whitespace-nowrap"
                    >
                        {cat}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CategorizedNav;
