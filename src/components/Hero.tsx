
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticleSystem from "./ParticleSystem";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-[#303030] relative overflow-hidden">
      {/* Particles Background */}
      <ParticleSystem />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-zapflow-600">
              Transforme seu negócio com soluções digitais <span className="text-zapflow-600">personalizadas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              O zapFlow oferece soluções completas em tecnologia para empresas que buscam inovação, automatização e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a 
                href="#contact" 
                className="btn-primary text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comece Agora <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn-secondary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nossos Serviços
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zapflow-500 to-zapflow-700 rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl animate-float">
                <div className="space-y-6">
                  <div className="bg-gray-100 h-10 w-3/4 rounded-md"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 h-4 w-full rounded-md"></div>
                    <div className="bg-gray-100 h-4 w-5/6 rounded-md"></div>
                    <div className="bg-gray-100 h-4 w-4/6 rounded-md"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-zapflow-600 h-10 w-32 rounded-md"></div>
                    <div className="bg-gray-200 h-10 w-32 rounded-md"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-zapflow-600 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 bg-zapflow-400 rounded-full opacity-10 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#303030] to-transparent"></div>
    </section>
  );
};

export default Hero;
