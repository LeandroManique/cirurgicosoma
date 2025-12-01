import React from 'react';
import { MapPin } from 'lucide-react';
import { UNITS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4">
            Contato
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">Comece com clareza</h2>
          <p className="text-secondary text-lg font-light">
            Escolha a unidade mais próxima e agende sua avaliação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UNITS.map((unit, idx) => (
            <div key={idx} className="bg-warm/20 p-8 border border-warmDark hover:border-accent/30 transition-all text-center group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-warmDark text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">{unit.city}</h3>
              <p className="text-secondary text-sm mb-8 px-4 h-10 flex items-center justify-center">
                {unit.address}
              </p>
              <a
                href={`https://wa.me/${unit.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-sm text-sm font-medium tracking-wide transition-colors"
              >
                Agendar {unit.city}
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 pt-16 border-t border-warmDark">
           <p className="font-serif italic text-primary/70 text-lg">
             "Clareza antes da decisão. Segurança antes da cirurgia."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;