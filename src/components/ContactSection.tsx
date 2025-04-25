
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the actual form submission logic
    console.log("Form submitted:", formState);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-[#000000] text-zapflow-500">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-zapflow-500">Entre em Contato</h2>
          <p className="text-zapflow-500 text-lg">
            Estamos prontos para ajudar a transformar seu negócio com tecnologia
            de ponta. Envie-nos uma mensagem e entraremos em contato em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zapflow-500">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-zapflow-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-zapflow-500">Telefone</h4>
                    <p className="text-zapflow-500">(11) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-zapflow-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-zapflow-500">Email</h4>
                    <p className="text-zapflow-500">contato@zapflow.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-zapflow-500 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-zapflow-500">Endereço</h4>
                    <p className="text-zapflow-500">Rua da Inovação, 123 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-zapflow-500">Horário de Atendimento</h3>
              <div className="space-y-2">
                <p className="text-zapflow-500">Segunda a Sexta: 9h às 18h</p>
                <p className="text-zapflow-500">Sábado: 9h às 13h</p>
                <p className="text-zapflow-500">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#000000] border border-zapflow-500 p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                <CheckCircle className="h-16 w-16 text-zapflow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-zapflow-500">Mensagem Enviada!</h3>
                <p className="text-zapflow-500">
                  Obrigado por entrar em contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#000000] border border-zapflow-500 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zapflow-500 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black border border-zapflow-500 focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zapflow-500 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black border border-zapflow-500 focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zapflow-500 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black border border-zapflow-500 focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zapflow-500 mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white text-black border border-zapflow-500 focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    >
                      <option value="" disabled className="text-zapflow-500">Selecione uma opção</option>
                      <option value="website" className="text-black">Criação de Sites</option>
                      <option value="automation" className="text-black">Automação de Processos</option>
                      <option value="chatbot" className="text-black">Chatbots com IA</option>
                      <option value="scheduling" className="text-black">Agendamento Automático</option>
                      <option value="consulting" className="text-black">Consultoria Tecnológica</option>
                      <option value="other" className="text-black">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zapflow-500 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-white text-black border border-zapflow-500 focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zapflow-500 hover:bg-zapflow-600 text-black py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  Enviar Mensagem
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
