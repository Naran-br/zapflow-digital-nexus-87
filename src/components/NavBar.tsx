
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Tecnologias", href: "#technologies" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm",
      scrolled ? "border-b border-gray-200" : ""
    )}>
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center justify-center w-full md:w-auto">
            <a href="#home" className="text-2xl font-bold text-[#303030] mx-auto md:mx-0">
              zap<span className="text-zapflow-600">Flow</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#303030] hover:text-zapflow-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.a 
            href="#contact" 
            className="hidden md:block btn-primary font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -3, 0],
              transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            Fale Conosco
          </motion.a>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#303030] absolute right-6" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#303030] hover:text-zapflow-600 transition-colors px-6 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.a 
                href="#contact" 
                className="btn-primary mx-6 text-center font-bold"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
