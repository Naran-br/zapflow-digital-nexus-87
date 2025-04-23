
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-zapflow-950 text-black pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">
              zap<span className="text-zapflow-400">Flow</span>
            </h3>
            <p className="text-black mb-4">
              Soluções tecnológicas inovadoras para transformar e impulsionar seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-zapflow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black hover:text-zapflow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-black hover:text-zapflow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-black hover:text-zapflow-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-black hover:text-zapflow-500 transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-zapflow-500 transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-zapflow-500 transition-colors">
                  Chatbots com IA
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-zapflow-500 transition-colors">
                  Agendamento Automático
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-zapflow-500 transition-colors">
                  Consultoria Tecnológica
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-black hover:text-zapflow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-black hover:text-zapflow-500 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-black hover:text-zapflow-500 transition-colors">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-black hover:text-zapflow-500 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-black hover:text-zapflow-500 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-zapflow-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black">Contato</h4>
            <ul className="space-y-2">
              <li className="text-black">
                contato@zapflow.com.br
              </li>
              <li className="text-black">
                (11) 98765-4321
              </li>
              <li className="text-black">
                Rua da Inovação, 123<br />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zapflow-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            &copy; {new Date().getFullYear()} zapFlow. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-zapflow-800 hover:bg-zapflow-700 p-2 rounded-full text-black transition-colors flex items-center justify-center"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
