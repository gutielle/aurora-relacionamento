
import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';

interface PurchaseProps {
  productUrl: string;
}

const Purchase: React.FC<PurchaseProps> = ({ productUrl }) => {
  return (
    <section id="purchase" className="py-20 bg-slate-900/40">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto text-center overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Pronto para Restaurar Seu Relacionamento?</h2>
            <p className="text-lg text-slate-300 mb-6">Dê o primeiro passo para curar seu vínculo e reacender a chama. Invista no seu futuro juntos.</p>
            
            <div className="my-6">
                <p className="text-slate-400 text-xl sm:text-2xl line-through">$96.44</p>
                <p className="text-4xl sm:text-5xl font-bold text-amber-300" style={{ textShadow: '0 0 10px rgba(252, 211, 77, 0.4)' }}>$24.22</p>
                <p className="text-purple-300 mt-2">Oferta por Tempo Limitado</p>
            </div>

            <Button as="a" href={productUrl} variant="primary" className="w-full sm:w-auto text-xl py-4 px-12">
              Comprar o Feitiço Agora
            </Button>

            <div className="mt-8 text-slate-400">
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Feitiço Lançado Pessoalmente</span>
                    </div>
                     <div className="flex items-center gap-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Garantia de Energia Positiva</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Relatório PDF Detalhado</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Entrega no Mesmo Dia</span>
                    </div>
                </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Purchase;
