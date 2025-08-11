
import React from 'react';
import Card from './ui/Card';
import auroraImage from '../assets/aurora.jpg';

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-20 bg-slate-900/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Conheça Aurora, a Sua Guia Espiritual</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">Uma praticante dedicada às artes místicas, com uma missão de curar e unir.</p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <div className="md:flex md:items-center md:gap-8 p-4">
            <div className="md:w-1/3 flex-shrink-0 mb-8 md:mb-0 flex justify-center items-center">
                <img 
                    src={auroraImage}
                    alt="Aurora, a Guia Espiritual"
                    className="w-64 h-64 object-cover rounded-2xl border-4 border-purple-500/40 shadow-xl shadow-purple-500/20"
                />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-amber-300 mb-4">Minha Jornada e Compromisso</h3>
              <p className="text-slate-300 mb-4">
                Desde jovem, fui atraída pelas correntes invisíveis que conectam todas as coisas. Minha jornada me levou a estudar antigas tradições e a aprofundar minha compreensão das energias que moldam nossas vidas e relacionamentos. Com anos de prática focada, especializei-me em rituais de cura, reconciliação e fortalecimento de laços afetivos.
              </p>
              <p className="text-slate-300 mb-4">
                Acredito que a magia mais poderosa é aquela que vem de um lugar de pura intenção e positividade. Cada feitiço que realizo é um ato sagrado, conduzido com o máximo respeito e cuidado pela sua situação única. Minha promessa é ser sua aliada confidente neste caminho, dedicando minha energia para ajudar a trazer harmonia e felicidade de volta à sua vida amorosa.
              </p>
               <p className="font-semibold text-purple-300">
                Sua confiança é minha prioridade. Sua história está segura comigo.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutMe;
