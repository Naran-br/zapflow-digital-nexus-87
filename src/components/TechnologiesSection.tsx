
import React from "react";
import { Braces, Database, Bot, Calendar, Cloud, MessageSquare, LineChart } from "lucide-react";

const technologies = [
  {
    icon: <Braces className="h-12 w-12 p-2 text-white" />,
    name: "n8n",
    description: "Plataforma de automação de fluxos de trabalho com conexões versáteis entre aplicativos.",
    bgColor: "bg-orange-500",
  },
  {
    icon: <Bot className="h-12 w-12 p-2 text-white" />,
    name: "LLM's da OpenAI",
    description: "Modelos de linguagem avançados para geração de conteúdo e interações inteligentes.",
    bgColor: "bg-teal-600",
  },
  {
    icon: <Database className="h-12 w-12 p-2 text-white" />,
    name: "Supabase",
    description: "Plataforma open source para desenvolvimento de aplicações com banco de dados PostgreSQL.",
    bgColor: "bg-emerald-600",
  },
  {
    icon: <Cloud className="h-12 w-12 p-2 text-white" />,
    name: "Redis",
    description: "Armazenamento de dados em memória para alta performance e cache avançado.",
    bgColor: "bg-red-600",
  },
  {
    icon: <MessageSquare className="h-12 w-12 p-2 text-white" />,
    name: "API do WhatsApp e Evolution API",
    description: "Integração oficial e avançada com WhatsApp para comunicação eficiente.",
    bgColor: "bg-green-600",
  },
  {
    icon: <Calendar className="h-12 w-12 p-2 text-white" />,
    name: "Cal.com",
    description: "Sistema de agendamento intuitivo para gerenciamento de compromissos.",
    bgColor: "bg-indigo-600",
  },
  {
    icon: <Cloud className="h-12 w-12 p-2 text-white" />,
    name: "APIs do Google e LLM's",
    description: "Conjunto de ferramentas do Google para diversas funcionalidades e IA avançada.",
    bgColor: "bg-blue-600",
  },
  {
    icon: <Bot className="h-12 w-12 p-2 text-white" />,
    name: "Typebot",
    description: "Criação de chatbots conversacionais com interfaces visuais e integrações.",
    bgColor: "bg-purple-600",
  },
  {
    icon: <LineChart className="h-12 w-12 p-2 text-white" />,
    name: "Dify",
    description: "Plataforma de desenvolvimento de aplicações de IA com interfaces avançadas.",
    bgColor: "bg-violet-600",
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
                <div className={`${tech.bgColor} rounded-lg p-2 mr-4`}>
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-zapflow-200">{tech.name}</h3>
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
