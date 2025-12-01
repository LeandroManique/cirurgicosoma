import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMPLANTS, OTHER_TREATMENTS } from '../constants';

const Treatments: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-warm/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Focus: Implants */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                Foco Principal
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-primary">Implantodontia</h2>
            </div>
            <p className="text-secondary max-w-md text-lg mt-6 md:mt-0 font-light text-right md:text-left">
              Previsibilidade e resultado confiável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMPLANTS.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-sm border border-warmDark hover:border-accent/50 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-primary">{item.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-warmDark group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-secondary leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Focus */}
        <div>
          <div className="mb-12 border-t border-warmDark pt-12">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3">
              Outros Tratamentos
            </span>
            <h2 className="font-serif text-3xl text-primary mb-2">Cirurgia & Diagnóstico</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_TREATMENTS.map((item, idx) => (
              <div key={idx} className="bg-transparent p-6 border-l border-warmDark hover:border-accent transition-colors pl-6">
                <h3 className="text-lg font-medium mb-3 text-primary">{item.title}</h3>
                <p className="text-sm text-secondary leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Treatments;