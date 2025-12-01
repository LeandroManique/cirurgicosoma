import React from 'react';
import { TREATMENT_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 border-b border-warmDark pb-8">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            O Processo
          </span>
          <h2 className="font-serif text-4xl text-primary">Como funciona o tratamento</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {TREATMENT_STEPS.map((step, idx) => (
            <div key={idx} className="group">
              <span className="block text-6xl font-serif text-warmDark mb-6 group-hover:text-accent/20 transition-colors">
                {step.number}
              </span>
              
              <h3 className="text-xl font-medium text-primary mb-4 border-l-2 border-accent pl-4">
                {step.title}
              </h3>
              
              <p className="text-secondary leading-relaxed mb-4 pl-4.5">
                {step.description}
              </p>
              
              {step.details && (
                <ul className="pl-4.5 space-y-2 mt-4">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-sm text-secondary/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;