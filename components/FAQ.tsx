
import React, { useState } from 'react';
import Card from './ui/Card';

const faqData = [
  {
    question: "Este feitiço é seguro? Existe algum carma negativo?",
    answer: "Absolutamente. Meus rituais são realizados com a mais pura energia positiva, focados exclusivamente na cura e no fortalecimento. Não há risco de carma negativo ou consequências prejudiciais, pois a intenção é sempre de amor e reconciliação."
  },
  {
    question: "Quanto tempo leva para ver os resultados?",
    answer: "O tempo pode variar dependendo da complexidade da sua situação. Alguns clientes relatam sentir uma mudança na energia quase imediatamente, enquanto para outros, os resultados se desdobram ao longo de semanas. A paciência e a manutenção de uma mentalidade positiva são fundamentais."
  },
  {
    question: "Preciso fazer algo depois que o feitiço é lançado?",
    answer: "O relatório em PDF que você receberá inclui um mini ritual opcional que você pode realizar para fortalecer o efeito do feitiço. Não é obrigatório, mas é recomendado para alinhar sua própria energia com o trabalho que foi feito."
  },
  {
    question: "E se minha situação for muito complicada?",
    answer: "Entendo que cada relacionamento é único e alguns podem ter desafios mais profundos. O feitiço é projetado para lidar com uma ampla gama de problemas. Ao fazer seu pedido, fornecer uma breve descrição da sua situação me ajuda a focar a energia do feitiço de forma mais eficaz."
  },
  {
    question: "Minhas informações são mantidas em sigilo?",
    answer: "Sim, 100%. A confidencialidade é de extrema importância para mim. Todas as informações que você compartilhar, incluindo nomes e detalhes da sua situação, são mantidas em sigilo absoluto."
  }
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void; index: number }> = ({ item, isOpen, onClick, index }) => {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <Card className="mb-4 overflow-hidden !p-0 bg-slate-800/70 border-slate-700">
      <h3 className="font-bold text-amber-300">
        <button
          onClick={onClick}
          className="w-full text-left flex justify-between items-center p-6 focus:outline-none focus:bg-slate-800/90 transition-colors duration-200"
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={questionId}
        >
          <span className="text-lg font-semibold">{item.question}</span>
          <span className="text-purple-400 flex-shrink-0 ml-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '20rem' : '0' }}
      >
        <div className="p-6 pt-0 text-slate-300">
          <p>{item.answer}</p>
        </div>
      </div>
    </Card>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Tire aqui as suas dúvidas. Se não encontrar o que procura, sinta-se à vontade para entrar em contato.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;