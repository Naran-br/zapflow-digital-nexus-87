
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, MessageCircle, CheckCircle, BarChart3, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AgendamentoAutomatico = () => {
  useEffect(() => {
    document.title = "Agendamento Automático - zapFlow";
  }, []);

  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-zapflow-500" />,
      title: "Montamos toda a sua agenda personalizada",
      items: [
        "Cadastramos todos os procedimentos oferecidos",
        "Criamos agendas separadas por atendente (caso deseje)"
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-zapflow-500" />,
      title: "Agendamento automático pelo WhatsApp",
      items: [
        "O cliente conversa com o robô (FlowBot ou ZapBot)",
        "O sistema consulta a agenda em tempo real e finaliza o agendamento sem intervenção humana"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-zapflow-500" />,
      title: "Atendimento humano sempre disponível",
      items: [
        "No FlowBot, o cliente pode solicitar falar com um atendente humano a qualquer momento",
        "No ZapBot, a IA pode tirar dúvidas e entender a necessidade de uma interação humana",
        "Caso a IA não consiga resolver, o cliente será transferido automaticamente para um atendente humano"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-zapflow-500" />,
      title: "Lembretes automáticos",
      description: "Enviamos mensagens no WhatsApp uma hora antes do procedimento, incluindo o endereço e localização do salão"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-zapflow-500" />,
      title: "Relatórios inteligentes",
      description: "Analisamos quais procedimentos são mais realizados e quais atendentes têm maior produtividade"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-zapflow-500" />,
      title: "Integração financeira",
      description: "Possível integração com sistema financeiro para uma visão completa do seu negócio"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section bg-[#303030]">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Calendar className="h-16 w-16 text-zapflow-500" />
              </motion.div>
              
              <h1 className="mb-6 text-white">
                Como funciona o sistema de 
                <span className="text-zapflow-500"> agendamento </span>
                da ZapFlow?
              </h1>
              
              <p className="text-gray-300 text-lg mb-8">
                Na ZapFlow, criamos um sistema de agendamento completo e inteligente que funciona direto no WhatsApp, 
                com integração total à agenda do seu negócio.
              </p>
              
              <motion.a 
                href="#contact" 
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero Automatizar Minha Agenda
              </motion.a>
            </motion.div>
          </div>
        </section>

        <Separator className="section-divider" />

        {/* Features Section */}
        <section className="section bg-[#222]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#303030] rounded-lg p-8 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white ml-4">{feature.title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-zapflow-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="section-divider" />

        {/* Benefits Section */}
        <section className="section bg-[#303030]">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="mb-4 text-white">
                ✨ Benefícios <span className="text-zapflow-500">Extras</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Além do agendamento automático, oferecemos recursos que vão revolucionar a gestão do seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-[#222] rounded-lg p-6 border border-gray-700 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="section-divider" />

        {/* CTA Section */}
        <section className="section bg-[#222]">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-4xl mx-auto bg-[#303030] rounded-lg p-12 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="mb-6 text-white">
                Pronto para <span className="text-zapflow-500">automatizar</span> seus agendamentos?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Transforme seu WhatsApp em uma central de agendamentos inteligente e nunca mais perca um cliente por falta de disponibilidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/#contact" 
                  className="btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Falar com Especialista
                </motion.a>
                <motion.a 
                  href="/#plans" 
                  className="btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Planos
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgendamentoAutomatico;
