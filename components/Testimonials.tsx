
import React from 'react';
import Card from './ui/Card';

const testimonials = [
  {
    name: "Ana C.",
    quote: "Estávamos à beira do fim. Após o feitiço, algo mudou. A comunicação melhorou, e redescobrimos o amor que pensávamos ter perdido. Sou eternamente grata.",
    stars: 5,
  },
  {
    name: "Ricardo M.",
    quote: "Eu estava cético, mas desesperado. A energia em nossa casa mudou de pesada para leve. As brigas constantes pararam. Foi como uma lufada de ar fresco para o nosso casamento.",
    stars: 5,
  },
  {
    name: "Juliana & Pedro S.",
    quote: "Aurora é incrivelmente talentosa. Ela tratou nossa situação com tanto cuidado e respeito. Lentamente, mas com segurança, estamos reconstruindo nossa confiança. Recomendo fortemente.",
    stars: 5,
  },
  {
    name: "Laura F.",
    quote: "A diferença é como noite e dia. Estávamos sempre discutindo sobre pequenas coisas, e agora encontramos uma paciência e compreensão que não tínhamos há anos. Obrigada, Aurora.",
    stars: 5,
  },
  {
    name: "Marcos V.",
    quote: "Aurora é uma verdadeira profissional. O relatório que ela enviou foi detalhado e carinhoso. Senti a energia positiva trabalhando quase imediatamente. Nosso relacionamento está mais forte do que nunca.",
    stars: 5,
  },
  {
    name: "Beatriz e Tiago",
    quote: "Estávamos distantes, vivendo como estranhos na mesma casa. O feitiço nos ajudou a quebrar as barreiras que construímos. Estamos rindo juntos novamente. É um milagre.",
    stars: 5,
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-amber-400">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Sussurros de Harmonia</h2>
          <p className="mt-4 text-lg text-slate-300">Veja o que outros disseram sobre o poder do feitiço.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <StarRating rating={testimonial.stars} />
                  <p className="text-slate-300 italic my-4">"{testimonial.quote}"</p>
                </div>
                <p className="font-bold text-amber-300 mt-auto">- {testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
