
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Sistema de agendamento",
      description: "Sistema integrado para gerenciamento de consultas e atendimentos.",
      image: "/lovable-uploads/554c27a4-4e6e-4ad9-8b63-788e79ac4acf.png",
      category: "Agendamento Automático",
      link: "/agendamento-automatico"
    },
    {
      title: "Atendimento para clínicas",
      description: "Robô especializado em agendamento e atendimento médico com integração ao prontuário.",
      image: "/lovable-uploads/6e782601-d997-4a13-bd84-7f458a151cf0.png",
      category: "Saúde",
      link: "#"
    },
    {
      title: "E-commerce automatizado",
      description: "Sistema completo de vendas via WhatsApp com carrinho, pagamento e entrega.",
      image: "/lovable-uploads/72467222-5770-4089-9e17-92013fb34620.png",
      category: "E-commerce",
      link: "#"
    },
    {
      title: "Captação de leads",
      description: "Funil automatizado para qualificação e nutrição de leads através do WhatsApp.",
      image: "/lovable-uploads/8e67d253-935d-4359-9c6d-41e8abf08136.png",
      category: "Marketing",
      link: "#"
    },
    {
      title: "Suporte técnico inteligente",
      description: "Central de atendimento com IA para resolver dúvidas técnicas e abrir chamados.",
      image: "/lovable-uploads/9835c392-bcf5-43dd-a372-a4651bbba7b9.png",
      category: "Suporte",
      link: "#"
    },
    {
      title: "Reservas para restaurantes",
      description: "Sistema de reservas com confirmação automática e lembretes personalizados.",
      image: "/lovable-uploads/e7439396-feb0-421b-ad1a-0a7d47c19b65.png",
      category: "Gastronomia",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="section bg-[#222]">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="mb-4 text-white">
            🚀 Nosso <span className="text-zapflow-500">Portfólio</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Conheça alguns dos projetos que transformaram negócios através da automação inteligente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#303030] rounded-lg overflow-hidden group cursor-pointer border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              onClick={() => {
                if (project.link.startsWith('#')) {
                  // Para links âncora, não fazer nada por enquanto
                  return;
                } else {
                  // Para links de página, navegar
                  window.location.href = project.link;
                }
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-zapflow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zapflow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.a 
            href="#contact" 
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero Meu Projeto Personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
