import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { FAQ_DATA, TARGET_AUDIENCE } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Audience & Fear - Spans 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                Para quem é
              </span>
              <h2 className="font-serif text-3xl text-primary mb-8">O tratamento é indicado para:</h2>
              <ul className="space-y-4">
                {TARGET_AUDIENCE.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <ArrowRight className="w-4 h-4 text-accent mt-1.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-secondary font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent text-white p-8 md:p-10 rounded-sm shadow-lg mt-auto">
              <h3 className="font-serif text-2xl mb-4">Medo, Dor e Ansiedade</h3>
              <p className="text-white/80 leading-relaxed font-light mb-6">
                É normal ter medo. Anormal é não ser orientado. A SOMA oferece ambiente calmo e sedação.
              </p>
              <p className="font-medium text-white border-t border-white/20 pt-4">
                Aqui, você não é pressionado. Você é guiado.
              </p>
            </div>
          </div>

          {/* Right Column: FAQ Accordion - Spans 7 columns */}
          <div className="lg:col-span-7">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4">
              Dúvidas Comuns
            </span>
            <h2 className="font-serif text-3xl text-primary mb-8">Perguntas Frequentes</h2>
            
            <div className="divide-y divide-warmDark border-t border-b border-warmDark">
              {FAQ_DATA.map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center py-6 text-left hover:bg-white/50 transition-colors px-2"
                  >
                    <span className={`font-medium text-lg transition-colors ${openIndex === idx ? 'text-accent' : 'text-primary'}`}>
                      {item.question}
                    </span>
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-secondary/50 group-hover:text-primary" strokeWidth={1.5} />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pb-6 pl-2 text-secondary font-light leading-relaxed max-w-2xl">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;