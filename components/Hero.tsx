import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Content Side */}
        <div className="relative z-10 py-20 lg:py-0 animate-fade-in-up order-2 lg:order-1">
          <div className="mb-8 inline-block">
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase border-b border-accent/30 pb-1">
              Excelência em Cirurgia
            </span>
          </div>
          
          <h1 className="font-serif text-4xl lg:text-6xl text-primary mb-8 leading-tight">
            {HERO_CONTENT.title}
          </h1>
          
          <p className="text-secondary text-lg lg:text-xl mb-12 max-w-lg font-light leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a 
              href="#contact" 
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm font-medium transition-all flex items-center gap-3 text-sm tracking-wide"
            >
              {HERO_CONTENT.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-secondary/80 font-medium italic border-l border-warmDark pl-4 py-2 max-w-xs">
              "{HERO_CONTENT.tagline}"
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[50vh] lg:h-screen w-full order-1 lg:order-2">
           <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white via-white/50 to-transparent z-10 lg:w-32"></div>
           <img 
             src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000&auto=format&fit=crop" 
             alt="Ambiente Clínico Moderno" 
             className="w-full h-full object-cover object-center grayscale-[20%]"
           />
        </div>

      </div>
    </section>
  );
};

export default Hero;