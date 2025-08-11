
import React from 'react';
import Card from './ui/Card';

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 13.5h.008v.008h-.008v-.008z" />
  </svg>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">O que o Feitiço de Reparação de Relacionamento Oferece</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Está enfrentando tensão, mal-entendidos ou distância em seu relacionamento? Meu nome é Aurora e dediquei minhas habilidades às artes místicas, com foco na criação de laços positivos e duradouros entre indivíduos. Com anos de experiência, dominei a arte de restaurar e fortalecer relacionamentos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center flex flex-col items-center">
            <HeartIcon />
            <h3 className="text-2xl font-bold mt-4 mb-2 text-amber-300">Reacender o Amor</h3>
            <p className="text-slate-300">Este feitiço é projetado especificamente para reacender a faísca do amor e da paixão em seu relacionamento, promovendo uma conexão mais profunda e significativa com seu parceiro.</p>
          </Card>
          <Card className="text-center flex flex-col items-center">
            <LinkIcon />
            <h3 className="text-2xl font-bold mt-4 mb-2 text-amber-300">Reparar Laços Quebrados</h3>
            <p className="text-slate-300">Se o seu relacionamento sofreu com mal-entendidos ou disputas, este feitiço pode ajudar a curar as feridas, reconstruir a confiança e aproximá-los.</p>
          </Card>
          <Card className="text-center flex flex-col items-center">
            <SparklesIcon />
            <h3 className="text-2xl font-bold mt-4 mb-2 text-amber-300">Energia Positiva</h3>
            <p className="text-slate-300">Meus rituais são infundidos com energia pura e positiva. Não há intenção de prejudicar; apenas o desejo de consertar e fortalecer seu relacionamento.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
