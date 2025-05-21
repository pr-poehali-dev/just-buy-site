
import React, { useEffect, useRef, useState } from "react";
import { motion } from "@/components/motion";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0f1e] to-[#1a212c] text-white overflow-hidden" ref={heroRef}>
      {/* Фоновые элементы с параллакс-эффектом */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основной фоновый слой */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2203&q=80')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
          }}
        />
        
        {/* Второй слой с эффектом размытия */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1580121841573-fe552c07abb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')", 
            backgroundSize: "cover",
            filter: "blur(8px)",
            backgroundPosition: "center",
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` 
          }}
        />
        
        {/* Цветовая обработка для создания глубины */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 via-[#1a212c]/60 to-[#1a212c]/80"></div>
      </div>

      {/* Декоративные элементы дизайна (плавающие частицы) */}
      <motion.div 
        className="absolute size-64 rounded-full bg-[#D5AF7D]/5 blur-3xl"
        style={{ 
          top: '15%', 
          left: '10%',
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` 
        }}
      />
      <motion.div 
        className="absolute size-80 rounded-full bg-[#6587AB]/5 blur-3xl"
        style={{ 
          bottom: '10%', 
          right: '5%',
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)` 
        }}
      />

      {/* Навигация */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="font-medium tracking-wider text-2xl text-[#E2A14C] opacity-75">JBS</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/70 hover:text-white transition-colors">Услуги</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Портфолио</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Процесс</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">О нас</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Блог</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Контакты</a>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="tel:+79991234567" className="hidden md:block text-white/70 hover:text-white transition-colors">
            +7 999 123-45-67
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-[#E2A14C] transition-colors">
              <Icon name="Twitter" size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[#E2A14C] transition-colors">
              <Icon name="Instagram" size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[#E2A14C] transition-colors">
              <Icon name="Telegram" size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        {/* Логотип и слоган - стилизованная версия */}
        <motion.div 
          className="mb-10 relative"
          style={{ 
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` 
          }}
        >
          {/* Фоновый элемент для логотипа */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-[#E2A14C]/5 blur-xl"></div>
          
          {/* Логотип */}
          <div className="relative flex flex-col items-center">
            <div className="flex items-baseline space-x-2">
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tight">Just</span>
              <div className="relative">
                <span className="text-7xl md:text-9xl font-bold text-[#E2A14C] tracking-tight relative z-10">Buy</span>
                <div className="absolute -bottom-1 -left-1 -right-1 h-px bg-gradient-to-r from-transparent via-[#E2A14C]/50 to-transparent"></div>
              </div>
              <span className="text-6xl md:text-8xl font-bold text-white tracking-tight">Site</span>
            </div>
            
            {/* Слоган */}
            <div className="mt-3 text-white/60 tracking-[0.3em] text-xs font-light">
              ATTENTION TO DETAILS • PURSUIT OF IDEALS
            </div>
          </div>
        </motion.div>

        {/* Главный заголовок с эффектом следования за мышью */}
        <motion.div 
          className="mb-14 max-w-3xl relative"
          style={{ 
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)` 
          }}
        >
          <div className="absolute -inset-10 bg-[#1a212c]/50 rounded-3xl backdrop-blur-sm -z-10 opacity-80"></div>
          <h1 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
            Отдыхай, пока твой сайт работает
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Мы создаем сайты, которые приносят результат, пока вы занимаетесь тем, что действительно любите
          </p>
        </motion.div>

        {/* Блок с преимуществами - с эффектом матового стекла */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 w-full max-w-5xl">
          <motion.div 
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden group"
            style={{ transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2A14C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-[#E2A14C] text-5xl font-bold mb-3">150+</div>
            <div className="text-white/80">реализованных проектов</div>
          </motion.div>
          
          <motion.div 
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden group"
            style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2A14C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-[#E2A14C] text-5xl font-bold mb-3">98%</div>
            <div className="text-white/80">довольных клиентов</div>
          </motion.div>
          
          <motion.div 
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 relative overflow-hidden group"
            style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2A14C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-[#E2A14C] text-5xl font-bold mb-3">14</div>
            <div className="text-white/80">дней среднее время работы</div>
          </motion.div>
        </div>

        {/* CTA кнопка с эффектом наведения */}
        <motion.div style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}>
          <Button 
            className="relative overflow-hidden group bg-[#E2A14C] hover:bg-[#D59B40] text-black px-10 py-7 text-lg font-medium rounded-full transition-all duration-300"
          >
            <span className="relative z-10">Обсудить проект</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute top-0 right-0 w-12 h-12 -mt-3 -mr-3 bg-[#D59B40] rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"></span>
          </Button>
        </motion.div>

        {/* Декоративная линия внизу */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </main>
    </div>
  );
};

export default Index;
