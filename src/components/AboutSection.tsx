
import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Equipe especializada em soluções digitais",
    "Atendimento personalizado e suporte contínuo",
    "Utilização das mais avançadas tecnologias do mercado",
    "Metodologias ágeis para entregas rápidas e eficientes",
    "Foco em resultados mensuráveis para seu negócio",
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-zapflow-100 px-3 py-1 rounded-full text-zapflow-800">
              <Zap size={16} className="text-zapflow-600" />
              <span className="text-sm font-medium">Sobre o zapFlow</span>
            </div>
            <h2 className="text-zapflow-950">
              Inovação e tecnologia para <span className="text-zapflow-600">impulsionar</span> seu negócio
            </h2>
            <p className="text-gray-700 text-lg">
              O zapFlow nasceu da paixão por tecnologia e da busca constante por
              inovação. Somos especialistas em criar soluções digitais que transformam
              a maneira como as empresas operam e se relacionam com seus clientes.
            </p>
            <p className="text-gray-700">
              Nossa missão é democratizar o acesso à tecnologia de ponta, tornando-a
              acessível e funcional para empresas de todos os tamanhos. Acreditamos
              que a automação inteligente e a presença digital estratégica são 
              diferenciais competitivos essenciais no mercado atual.
            </p>
            <div className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-zapflow-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-zapflow-400 to-zapflow-600 rounded-lg blur-lg opacity-20"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-zapflow-50 to-zapflow-100 flex items-center justify-center">
                  <div className="text-4xl md:text-6xl font-bold text-zapflow-800">
                    zap<span className="text-zapflow-600">Flow</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                <div className="h-3 bg-gray-100 rounded-full w-4/6"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-zapflow-200 rounded-full"></div>
            <div className="absolute -top-4 -right-4 h-16 w-16 bg-zapflow-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
