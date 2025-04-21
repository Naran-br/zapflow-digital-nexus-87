
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Silva",
    company: "Clínica Bem Estar",
    quote:
      "O sistema de agendamento implementado pelo zapFlow transformou completamente o atendimento em nossa clínica. Reduzimos as faltas em 80% com os lembretes automáticos.",
    stars: 5,
  },
  {
    name: "Carolina Mendes",
    company: "Fashion Store",
    quote:
      "O chatbot com IA que o zapFlow desenvolveu para nossa loja virtual funciona perfeitamente, respondendo dúvidas e ajudando nas vendas mesmo fora do horário comercial.",
    stars: 5,
  },
  {
    name: "Henrique Costa",
    company: "Agência Marketing Digital",
    quote:
      "A automação dos nossos processos internos trouxe uma eficiência que não imaginávamos ser possível. A equipe do zapFlow foi excepcional do início ao fim.",
    stars: 5,
  },
];

const partners = [
  { name: "Tech Solutions", logo: "bg-gray-200" },
  { name: "Inova Digital", logo: "bg-gray-200" },
  { name: "Nexus Connect", logo: "bg-gray-200" },
  { name: "Future Systems", logo: "bg-gray-200" },
  { name: "Cloud Experts", logo: "bg-gray-200" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-[#303030]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-white">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-300 text-lg">
            A satisfação de nossos clientes é nossa maior conquista. Conheça algumas
            histórias de sucesso e parcerias que construímos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#222] p-8 rounded-lg shadow-sm border border-gray-700 card-hover"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-100 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-zapflow-200">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl mb-10 text-zapflow-200">
            Nossos Parceiros
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-40 h-20 flex items-center justify-center rounded-md border border-gray-700 bg-[#222] shadow-sm p-4"
              >
                <div className="font-medium text-gray-200">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
