import React from 'react';
import Hero from './components/Hero';
import WhySoma from './components/WhySoma';
import Process from './components/Process';
import Treatments from './components/Treatments';
import Doctor from './components/Doctor';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScheduleButton from './components/ScheduleButton';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhySoma />
      <Process />
      <Treatments />
      <Doctor />
      <FAQ />
      <Locations />
      <Footer />
      <AIChat />
      <ScheduleButton />
    </main>
  );
};

export default App;