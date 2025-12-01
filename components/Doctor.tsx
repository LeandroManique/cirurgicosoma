import React, { useState } from 'react';
import { DOCTOR_INFO } from '../constants';

const Doctor: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
             <div className="relative flex items-center justify-center">
                {
                  /* Use a resolved URL to the public asset and provide fallbacks to avoid path issues */
                }
                {(() => {
                  const defaultUrl = new URL('/dr_fabio.jpeg', import.meta.url).href;
                  const [src, setSrc] = useState<string>(defaultUrl);
                  return (
                    <img
                      src={src}
                      alt={DOCTOR_INFO.name}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== '/dr_fabio.jpeg') target.src = '/dr_fabio.jpeg';
                      }}
                      style={{ maxHeight: 520, width: '100%', objectFit: 'contain' }}
                      className="rounded-sm grayscale-[30%] shadow-lg bg-white block"
                    />
                  );
                })()}
                <div className="absolute -bottom-6 -right-6 bg-warm p-8 max-w-xs shadow-sm hidden md:block border border-warmDark">
                  <p className="font-serif text-lg font-bold text-primary mb-1">{DOCTOR_INFO.reg}</p>
                  <p className="text-xs uppercase tracking-widest text-secondary">Registro Profissional</p>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-6">
              Especialista Responsável
            </span>
            <h2 className="font-serif text-5xl lg:text-6xl text-primary mb-4 leading-none">
              {DOCTOR_INFO.name}
            </h2>
            <p className="text-xl text-secondary font-serif italic mb-10">
              {DOCTOR_INFO.role}
            </p>
            
            <div className="space-y-6 text-secondary font-light leading-relaxed text-lg mb-12">
               <p>{DOCTOR_INFO.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {DOCTOR_INFO.traits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-3 border-b border-warmDark pb-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  <span className="text-primary text-sm tracking-wide">{trait}</span>
                </div>
              ))}
            </div>

            <div className="bg-warm/50 p-8 rounded-sm">
               <h3 className="font-bold text-primary mb-6 text-xs uppercase tracking-widest">Formação Acadêmica</h3>
               <ul className="space-y-3">
                 {DOCTOR_INFO.education.map((edu, idx) => (
                   <li key={idx} className="text-secondary text-sm flex items-start gap-2">
                     <span className="mt-1.5 w-1 h-1 bg-secondary/40 rounded-full"></span>
                     {edu}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="mt-12">
               <p className="font-serif text-2xl text-primary/80 italic leading-relaxed">
                “{DOCTOR_INFO.quote}”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Doctor;