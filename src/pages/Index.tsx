
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "zapFlow - Soluções Tecnológicas Inovadoras";
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach(element => {
        const scrollPosition = window.scrollY;
        const speed = element.getAttribute('data-speed') || 0.3;
        const yPos = -scrollPosition * Number(speed);
        
        // Apply transform
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        {/* Logo da zapFlow centralizado */}
        <div className="flex justify-center py-10 bg-black">
          <img
            src="/lovable-uploads/8e67d253-935d-4359-9c6d-41e8abf08136.png"
            alt="Logo zapFlow"
            className="max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        <Hero />
        <Separator className="section-divider" />
        <ServicesSection />
        <Separator className="section-divider" />
        <AboutSection />
        <Separator className="section-divider" />
        <TechnologiesSection />
        <Separator className="section-divider" />
        <PortfolioSection />
        <Separator className="section-divider" />
        <TestimonialsSection />
        <Separator className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
