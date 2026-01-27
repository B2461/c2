
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 flex items-center justify-center gap-4">
                Ok-E-store
            </h1>
            <p className="mt-4 text-lg text-orange-200 font-bold uppercase tracking-widest">Premium Quality & Best Prices</p>
        </header>
    );
};

export default Header;
