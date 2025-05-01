
import React from "react";
import { Globe, Cpu, MessageSquare, Calendar, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-[#303030]">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="mb-4 text-white">Nossos Serviços</h2>
          <p className="text-gray-300 text-lg">
            Oferecemos soluções tecnológicas completas para transformar e 
            modernizar seu negócio, aumentando eficiência e resultados.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              variants={item}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <motion.div 
                className="mb-5"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-zapflow-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a 
            href="#contact" 
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Orçamento
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
