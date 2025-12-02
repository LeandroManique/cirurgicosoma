import React from 'react';

const doctor = {
  name: 'Dr. Fábio Guarnieri',
  title: 'Cirurgia e Reconstrução Óssea',
  reg: 'CRO/RS: 13.466',
  profile: [
    'Reconhecido pela precisão técnica e pela tranquilidade no atendimento, o Dr. Fábio dedica-se a cirurgias odontológicas avançadas e à implantodontia. Sua atuação combina domínio científico, planejamento criterioso e comunicação clara, criando um ambiente onde o paciente se sente seguro e bem orientado em cada etapa do processo.',
    'Na SOMA, conduz procedimentos complexos com base em planejamento digital e protocolos rigorosos, priorizando previsibilidade e segurança. Mais do que realizar técnicas cirúrgicas, sua marca é traduzir a complexidade em explicações acessíveis, tornando o tratamento compreensível e confiável para quem o vivencia.',
    'Para o Dr. Fábio, confiança não se improvisa: ela nasce de clareza, preparo e consistência. É esse olhar que sustenta sua presença como referência clínica dentro da SOMA, alinhado ao propósito de oferecer cuidado humano, ético e profundo.',
  ],
  education: [
    'Graduação em Odontologia',
    'Especialização em Cirurgia e Traumatologia BucoMaxiloFacial',
    'Mestrado em Odontologia – Cirurgia BucoMaxiloFacial',
    'Pós-graduação em Cirurgia Ortognática',
    'Habilitação em Analgesia e Sedação Consciente com Óxido Nitroso',
  ],
};

const DoctorProfile: React.FC = () => {
  return (
    <section id="doctor" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase">Especialista</span>
              <div className="h-px w-12 bg-warmDark" />
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-3 leading-tight">
              {doctor.name}
            </h2>
            <p className="text-lg text-secondary font-medium mb-8">
              {doctor.title} · {doctor.reg}
            </p>

            <div className="space-y-5 text-secondary leading-relaxed font-light">
              {doctor.profile.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-warmDark">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
                Formação e títulos
              </h3>
              <ul className="space-y-3">
                {doctor.education.map((item) => (
                  <li key={item} className="flex gap-3 text-secondary text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Foto */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm border border-warmDark shadow-sm bg-gradient-to-br from-warm/60 via-white to-warm/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              <img
                src="/dr_fabio.jpeg"
                alt="Dr. Fábio Guarnieri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-sm border border-warmDark/80">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Registro Profissional</p>
                <p className="font-serif text-primary text-lg leading-tight">{doctor.reg}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
