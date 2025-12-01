import React from 'react';
import { DOCTOR_INFO } from '../constants';

const Doctor: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block bg-warm p-6 rounded-sm shadow-sm border border-warmDark">
            <p className="font-serif text-lg font-bold text-primary mb-1">{DOCTOR_INFO.reg}</p>
            <p className="text-xs uppercase tracking-widest text-secondary">Registro Profissional</p>
          </div>

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
    </section>
  );
};

export default Doctor;