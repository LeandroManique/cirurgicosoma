import React from 'react';
import { Check } from 'lucide-react';
import { WHY_SOMA } from '../constants';

const WhySoma: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mx-auto mb-16 text-center lg:text-left lg:mx-0">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Clareza & Segurança
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">
            {WHY_SOMA.title}
          </h2>
          <p className="text-secondary text-lg leading-relaxed max-w-2xl font-light">
            {WHY_SOMA.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* List */}
          <div className="space-y-6">
            {WHY_SOMA.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-1 group-hover:border-accent transition-colors">
                  <Check className="w-3 h-3 text-accent" strokeWidth={2} />
                </div>
                <p className="text-primary/80 font-medium text-lg">{point}</p>
              </div>
            ))}
            
            <div className="mt-12 pt-12 border-t border-warmDark">
               <p className="font-serif italic text-xl text-primary/80 leading-relaxed">
                 "{WHY_SOMA.closing}"
               </p>
            </div>
          </div>

          {/* Visual Block */}
          <div className="bg-white p-8 lg:p-12 shadow-sm rounded-sm border border-white/50">
            <h3 className="font-serif text-2xl mb-6 text-primary">O que você leva da avaliação</h3>
            <div className="space-y-4">
               <div className="h-px bg-warmDark w-full"></div>
               <div className="flex justify-between items-center text-sm text-secondary">
                 <span>Diagnóstico preciso</span>
                 <span className="w-2 h-2 rounded-full bg-accent/50"></span>
               </div>
               <div className="h-px bg-warmDark w-full"></div>
               <div className="flex justify-between items-center text-sm text-secondary">
                 <span>Plano de tratamento detalhado</span>
                 <span className="w-2 h-2 rounded-full bg-accent/50"></span>
               </div>
               <div className="h-px bg-warmDark w-full"></div>
               <div className="flex justify-between items-center text-sm text-secondary">
                 <span>Previsibilidade financeira e de tempo</span>
                 <span className="w-2 h-2 rounded-full bg-accent/50"></span>
               </div>
               <div className="h-px bg-warmDark w-full"></div>
            </div>
            <div className="mt-8">
               <span className="inline-block bg-warm px-4 py-2 text-xs font-semibold text-accent tracking-widest uppercase">
                 Sem Pressa
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySoma;