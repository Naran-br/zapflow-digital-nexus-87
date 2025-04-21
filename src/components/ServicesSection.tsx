
import React from "react";
import { Globe, Cpu, MessageSquare, Calendar, Lightbulb } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-zapflow-600" />,
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites modernos, responsivos e otimizados para buscadores, com design personalizado para fortalecer sua presença digital.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-zapflow-600" />,
    title: "Automação de Processos",
    description:
      "Automatizamos fluxos de trabalho repetitivos, otimizando operações e permitindo que você foque no que realmente importa para seu negócio.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-zapflow-600" />,
    title: "Chatbots com IA",
    description:
      "Implementamos chatbots inteligentes que utilizam IA avançada para interagir com seus clientes, responder dúvidas e captar leads 24/7.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-zapflow-600" />,
    title: "Agendamento Automático",
    description:
      "Ferramentas de agendamento para comércios, clínicas, estúdios e profissionais, eliminando conflitos e otimizando sua agenda.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-zapflow-600" />,
    title: "Consultoria Tecnológica",
    description:
      "Orientamos sua empresa na escolha e implementação das melhores soluções tecnologicas para impulsionar seu crescimento.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-[#303030]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-white">Nossos Serviços</h2>
          <p className="text-gray-300 text-lg">
            Oferecemos soluções tecnológicas completas para transformar e 
            modernizar seu negócio, aumentando eficiência e resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-zapflow-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

