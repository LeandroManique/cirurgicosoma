import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-16 text-white/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif text-white tracking-widest mb-2">SOMA</h2>
          <p className="text-xs tracking-widest uppercase opacity-70">Dr. Fábio Guarnieri</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center text-sm font-light">
           <a href="#contact" className="hover:text-white transition-colors">Agendar</a>
           <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;