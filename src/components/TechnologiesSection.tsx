
import React from "react";

const technologies = [
  {
    name: "n8n",
    description: "Plataforma de automação de fluxos de trabalho com conexões versáteis entre aplicativos.",
    logo: "https://seeklogo.com/images/N/n8n-io-logo-451803/vector-logo.svg",
  },
  {
    name: "OpenAI",
    description: "Modelos de linguagem avançados para geração de conteúdo e interações inteligentes.",
    logo: "https://worldvectorlogo.com/download/openai-wordmark.svg",
  },
  {
    name: "Supabase",
    description: "Plataforma open source para desenvolvimento de aplicações com banco de dados PostgreSQL.",
    logo: "https://seeklogo.com/images/S/supabase-logo-435677/vector-logo.svg",
  },
  {
    name: "Redis",
    description: "Armazenamento de dados em memória para alta performance e cache avançado.",
    logo: "https://worldvectorlogo.com/download/redis.svg", 
  },
  {
    name: "WhatsApp",
    description: "Integração oficial e avançada com WhatsApp para comunicação eficiente.",
    logo: "https://worldvectorlogo.com/download/whatsapp.svg", 
  },
  {
    name: "Cal.com",
    description: "Sistema de agendamento intuitivo para gerenciamento de compromissos.",
    logo: "https://seeklogo.com/images/C/cal-com-logo-438949/vector-logo.svg",
  },
  {
    name: "Google",
    description: "Conjunto de ferramentas do Google para diversas funcionalidades e IA avançada.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Typebot",
    description: "Criação de chatbots conversacionais com interfaces visuais e integrações.",
    logo: "https://www.vectorlogo.zone/logos/typebotio/typebotio-icon.svg",
  },
  {
    name: "Dify",
    description: "Plataforma de desenvolvimento de aplicações de IA com interfaces avançadas.",
    logo: "https://brandfetch.com/logo/getdify.com/primary.svg",
  },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="section bg-[#303030]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 parallax-element" data-speed="0.2">
          <h2 className="mb-4 text-white">Tecnologias Utilizadas</h2>
          <p className="text-gray-300 text-lg">
            Trabalhamos com as mais avançadas tecnologias do mercado para garantir
            soluções eficientes, seguras e escaláveis para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#222] rounded-lg shadow-sm border border-gray-700 overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start p-6">
                <div className="bg-white rounded-lg p-4 mr-4 w-16 h-16 flex items-center justify-center">
                  {tech.logo ? (
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-zapflow-200">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
