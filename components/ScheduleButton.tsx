import React from 'react';

const ScheduleButton: React.FC = () => {
  return (
    <a
      href="#contact"
      className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-primary text-white px-3 py-2 rounded shadow-lg hover:bg-primary/90 z-50 text-sm font-medium"
      aria-label="Ir para agendamento"
    >
      Agendar
    </a>
  );
};

export default ScheduleButton;
