
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
    <section id="contact" className="section bg-zapflow-950 text-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-black">Entre em Contato</h2>
          <p className="text-black text-lg">
            Estamos prontos para ajudar a transformar seu negócio com tecnologia
            de ponta. Envie-nos uma mensagem e entraremos em contato em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-black">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-zapflow-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-black">Telefone</h4>
                    <p className="text-black">(11) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-zapflow-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-black">Email</h4>
                    <p className="text-black">contato@zapflow.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-zapflow-400 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-black">Endereço</h4>
                    <p className="text-black">Rua da Inovação, 123 - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-black">Horário de Atendimento</h3>
              <div className="space-y-2">
                <p className="text-black">Segunda a Sexta: 9h às 18h</p>
                <p className="text-black">Sábado: 9h às 13h</p>
                <p className="text-black">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-zapflow-900 p-8 rounded-lg h-full flex flex-col items-center justify-center text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">Mensagem Enviada!</h3>
                <p className="text-black">
                  Obrigado por entrar em contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zapflow-900 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white border border-zapflow-700 text-black focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white border border-zapflow-700 text-black focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white border border-zapflow-700 text-black focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-white border border-zapflow-700 text-black focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                      required
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="website">Criação de Sites</option>
                      <option value="automation">Automação de Processos</option>
                      <option value="chatbot">Chatbots com IA</option>
                      <option value="scheduling">Agendamento Automático</option>
                      <option value="consulting">Consultoria Tecnológica</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-white border border-zapflow-700 text-black focus:outline-none focus:ring-1 focus:ring-zapflow-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-zapflow-600 hover:bg-zapflow-700 text-black py-3 px-4 rounded-md transition-colors flex items-center justify-center"
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
