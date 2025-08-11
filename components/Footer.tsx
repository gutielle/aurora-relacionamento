
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p className="mb-2">&copy; {new Date().getFullYear()} Aurora Mystic Arts. Todos os Direitos Reservados.</p>
        <p className="text-xs max-w-2xl mx-auto">
          Aviso Legal: Os serviços oferecidos são para fins espirituais e de entretenimento. Os resultados podem variar e não são garantidos. Este serviço não substitui aconselhamento profissional, legal, médico ou financeiro. Ao adquirir este serviço, você confirma que tem 18 anos ou mais.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
