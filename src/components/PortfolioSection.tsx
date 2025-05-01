
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Agendamento para Clínica",
    category: "Agendamento Automático",
    description: "Sistema integrado para gerenciamento de consultas e atendimentos.",
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    title: "Chatbot com IA para E-commerce",
    category: "Chatbots com IA",
    description: "Atendimento automático inteligente para suporte ao cliente.",
    image: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
  {
    title: "Automação de Marketing Digital",
    category: "Automação de Processos",
    description: "Fluxos automatizados para campanhas de marketing e vendas.",
    image: "bg-gradient-to-br from-orange-100 to-orange-200",
  },
  {
    title: "Site Institucional para Escritório de Advocacia",
    category: "Criação de Sites",
    description: "Presença digital profissional com área de cliente integrada.",
    image: "bg-gradient-to-br from-green-100 to-green-200",
  },
  {
    title: "Gestão de Agenda para Barbearia",
    category: "Agendamento Automático",
    description: "Sistema de reservas online com lembretes automáticos.",
    image: "bg-gradient-to-br from-red-100 to-red-200",
  },
  {
    title: "Transformação Digital para Varejista",
    category: "Consultoria Tecnológica",
    description: "Estratégia completa de digitalização de processos internos.",
    image: "bg-gradient-to-br from-teal-100 to-teal-200",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section bg-[#303030]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 parallax-element" data-speed="0.2">
          <h2 className="mb-4 text-white">Nosso Portfólio</h2>
          <p className="text-gray-300 text-lg">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos
            clientes a alcançarem seus objetivos através da tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-[#222] shadow-lg border border-gray-700 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className={`h-48 ${project.image} flex items-center justify-center p-6`}
              >
                <div className="font-bold text-xl text-center text-gray-100">
                  {project.title.split(" ").slice(0, 2).join(" ")}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-zapflow-600 mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-zapflow-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-zapflow-400 hover:text-zapflow-200 font-medium transition-all duration-300 hover:translate-x-1"
                >
                  Ver Detalhes
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Solicite um Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
