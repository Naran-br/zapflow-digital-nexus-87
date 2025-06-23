
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PlansSection from "@/components/PlansSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LogoBackground from "@/components/LogoBackground";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "zapFlow - Soluções Tecnológicas Inovadoras";
  }, []);

  const { scrollY } = useScroll();

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        {/* Logo da zapFlow centralizado */}
        <motion.div 
          className="flex justify-center py-32 bg-black relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Three.js background for the logo section */}
          <LogoBackground />
          
          <motion.img
            src="/lovable-uploads/8e67d253-935d-4359-9c6d-41e8abf08136.png"
            alt="Logo zapFlow"
            className="max-w-xs sm:max-w-sm md:max-w-md relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <Hero />
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ServicesSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TechnologiesSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PlansSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PortfolioSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TestimonialsSection />
        </motion.div>
        
        <Separator className="section-divider" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
