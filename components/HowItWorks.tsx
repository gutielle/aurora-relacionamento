
import React from 'react';
import Card from './ui/Card';

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Como Funciona o Feitiço</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">É um processo simples, pessoal e totalmente confidencial.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 gap-8 text-center relative">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-slate-900 mb-4 shadow-lg">1</div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2">Faça Seu Pedido</h3>
                    <p className="text-slate-300 px-2">Ao comprar, forneça seu nome completo, o nome do seu parceiro e uma breve descrição dos problemas que estão enfrentando.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-slate-900 mb-4 shadow-lg">2</div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2">Lançamento do Feitiço</h3>
                    <p className="text-slate-300 px-2">Eu, Aurora, lançarei pessoalmente o feitiço, infundindo-o com energia e intenção positivas. Todos os materiais são fornecidos por mim.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-slate-900 mb-4 shadow-lg">3</div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2">Receba Seu Relatório</h3>
                    <p className="text-slate-300 px-2">Assim que o feitiço estiver concluído, você receberá um relatório em PDF especialmente preparado, detalhando todo o processo.</p>
                </div>
            </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-slate-800/30 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">O que está no arquivo PDF?</h3>
            <div className="text-left">
                <ul className="list-disc list-inside text-slate-300 space-y-3">
                    <li>
                        <strong>Relatório Detalhado do Ritual:</strong> Uma explicação completa de como e com que energia o feitiço foi realizado para você.
                    </li>
                    <li>
                        <strong>Mini Ritual de Reforço:</strong> Um guia simples e seguro para um ritual que você pode realizar para ampliar o efeito. (Isto não é obrigatório, mas pode melhorar significativamente os resultados.)
                    </li>
                </ul>
                 <p className="text-center text-purple-300 mt-6 font-bold tracking-wider text-lg">
                  Receba o seu relatório no mesmo dia!
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
