import React from "react";

const technologies = [
  {
    name: "n8n",
    description: "Plataforma de automação de fluxos de trabalho com conexões versáteis entre aplicativos.",
    logo: "/lovable-uploads/72467222-5770-4089-9e17-92013fb34620.png",
  },
  {
    name: "OpenAI",
    description: "Modelos de linguagem avançados para geração de conteúdo e interações inteligentes.",
    logo: "/lovable-uploads/9835c392-bcf5-43dd-a372-a4651bbba7b9.png",
  },
  {
    name: "Supabase",
    description: "Plataforma open source para desenvolvimento de aplicações com banco de dados PostgreSQL.",
    logo: "/lovable-uploads/39c5c128-70db-4c3e-808a-6d1fd283c063.png",
  },
  {
    name: "Redis",
    description: "Armazenamento de dados em memória para alta performance e cache avançado.",
    logo: "/lovable-uploads/6e782601-d997-4a13-bd84-7f458a151cf0.png",
  },
  {
    name: "WhatsApp",
    description: "Integração oficial e avançada com WhatsApp para comunicação eficiente.",
    logo: "/lovable-uploads/1105830b-1c95-4c94-8253-44bb57358877.png",
  },
  {
    name: "Cal.com",
    description: "Sistema de agendamento intuitivo para gerenciamento de compromissos.",
    logo: "/lovable-uploads/554c27a4-4e6e-4ad9-8b63-788e79ac4acf.png",
  },
  {
    name: "Google",
    description: "Conjunto de ferramentas do Google para diversas funcionalidades e IA avançada.",
    logo: "", // Placeholder for future logo
  },
  {
    name: "Typebot",
    description: "Criação de chatbots conversacionais com interfaces visuais e integrações.",
    logo: "", // Placeholder for future logo
  },
  {
    name: "Dify",
    description: "Plataforma de desenvolvimento de aplicações de IA com interfaces avançadas.",
    logo: "", // Placeholder for future logo
  },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="section bg-[#303030]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            >
              <div className="flex items-start p-6">
                <div className="bg-white rounded-lg p-4 mr-4 w-16 h-16 flex items-center justify-center">
                  {tech.logo ? (
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="w-full h-full object-contain"
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
