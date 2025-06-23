
import React from "react";
import { Bot, Zap, Users, Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    icon: <Bot className="h-8 w-8 text-zapflow-500" />,
    name: "FlowBot",
    subtitle: "Typebot",
    description: "Robô de Autoatendimento Simples para WhatsApp",
    monthlyPrice: "R$ 149",
    setupPrice: "R$ 497",
    features: [
      "Fluxo automatizado simples com Typebot",
      "Atendimento rápido com menus e perguntas frequentes",
      "Personalização visual com logo, cores e tom de voz",
      "1 número de WhatsApp integrado",
      "1 atualização por mês no fluxo"
    ],
    ideal: "Pequenos negócios, salões, profissionais autônomos",
    color: "border-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Zap className="h-8 w-8 text-zapflow-500" />,
    name: "ZapBot",
    subtitle: "n8n + IA",
    description: "Robô Inteligente com IA e Integrações Avançadas",
    monthlyPrice: "R$ 449",
    setupPrice: "R$ 1.497",
    features: [
      "Robô com IA para entender perguntas abertas",
      "Entende áudios e responde com voz realista",
      "Integração com sistemas como AgendaPro, Google Calendar",
      "Memória com Redis (continuidade de conversa)",
      "Múltiplos fluxos com lógicas condicionais",
      "Até 3 números de WhatsApp integrados",
      "2 atualizações por mês nos fluxos"
    ],
    ideal: "Clínicas, agências, comércios, e-commerces",
    color: "border-zapflow-500",
    bgColor: "bg-zapflow-50",
    featured: true
  },
  {
    icon: <Users className="h-8 w-8 text-zapflow-500" />,
    name: "Consultoria Especializada",
    subtitle: "n8n",
    description: "Automatize fluxos complexos, integre sistemas e aumente sua produtividade",
    monthlyPrice: "Sob demanda",
    setupPrice: "A partir de R$ 1.000",
    features: [
      "Consultoria avulsa: R$ 150 a R$ 250/h",
      "Pacote 5h: R$ 1.000",
      "Pacote 10h: R$ 1.800",
      "Implantação completa: R$ 2.000 a R$ 5.000",
      "Criação de automações personalizadas",
      "Integração com APIs, bancos de dados, CRMs",
      "Otimização e escalabilidade de sistemas"
    ],
    ideal: "Empresas com necessidades específicas e complexas",
    color: "border-purple-500",
    bgColor: "bg-purple-50"
  }
];

const whyChoose = [
  "Implantamos robôs que geram resultado real, não apenas conversas automáticas",
  "Suporte humano durante e após a implantação",
  "Planos escaláveis e sob demanda",
  "Portfólio com cases reais e integrações de alto impacto"
];

const PlansSection = () => {
  return (
    <section id="plans" className="section bg-[#303030]">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="mb-4 text-white">Planos de Assinatura</h2>
          <p className="text-gray-300 text-lg">
            Escolha o plano ideal para automatizar seu negócio e revolucionar seu atendimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-lg border-2 ${plan.color} overflow-hidden relative ${plan.featured ? 'transform scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: plan.featured ? 1.05 : 1.03 }}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-zapflow-500 text-white text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              
              <div className={`${plan.bgColor} p-6 ${plan.featured ? 'pt-12' : ''}`}>
                <div className="flex items-center mb-4">
                  {plan.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                    <p className="text-sm text-gray-600">({plan.subtitle})</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {plan.monthlyPrice}
                    {plan.monthlyPrice !== "Sob demanda" && <span className="text-sm font-normal">/mês</span>}
                  </div>
                  <div className="text-sm text-gray-600">
                    Setup inicial: {plan.setupPrice}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Recursos Inclusos:</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-zapflow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Ideal para:</h5>
                  <p className="text-sm text-gray-600">{plan.ideal}</p>
                </div>

                <motion.a 
                  href="#contact" 
                  className={`w-full btn-primary text-center block ${plan.featured ? 'bg-zapflow-500 hover:bg-zapflow-600' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Escolher Plano
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-[#222] rounded-lg p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl font-bold text-zapflow-500 mb-6 text-center">
            ✨ Por que escolher a ZapFlow?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-zapflow-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
