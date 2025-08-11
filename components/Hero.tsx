import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 sm:py-32 flex items-center justify-center min-h-screen text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4" style={{ textShadow: '0 0 15px rgba(192, 132, 252, 0.5)' }}>
            Repare e Fortaleça o Vínculo do Seu Relacionamento
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Feitiço de Reparação de Relacionamento, um caminho poderoso e eficaz para consertar e fortalecer a conexão entre você e seu parceiro.
          </p>
          <div className="flex justify-center">
            <Button as="a" href="#purchase" variant="primary">
              Solicitar o Feitiço Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;