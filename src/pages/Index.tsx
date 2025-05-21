
import React, { useEffect, useRef, useState } from "react";
import { motion } from "@/components/motion"; // Используем локальную реализацию motion
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } =
          heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#070B16] text-white overflow-hidden"
      ref={heroRef}
    >
      {/* Фоновые элементы с параллакс-эффектом */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Основное фоновое изображение */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2970')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          }}
        />
        
        {/* Градиентные элементы для создания глубины */}
        <motion.div
          className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(226,161,76,0.4) 0%, rgba(226,161,76,0) 70%)",
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(45,212,191,0.3) 0%, rgba(45,212,191,0) 70%)",
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
          }}
        />
        
        {/* Темный градиент поверх для лучшей читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B16] via-[#070B16]/80 to-[#070B16]/70"></div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Сетка точек */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
          }}
        />
        
        {/* Линии для создания структуры */}
        <motion.div
          className="absolute top-0 right-[15%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-[#E2A14C]/30 to-transparent opacity-30"
          style={{
            transform: `translateX(${mousePosition.x * 10}px)`,
          }}
        />
        
        <motion.div
          className="absolute top-[30%] left-[10%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-[#2DD4BF]/30 to-transparent opacity-30"
          style={{
            transform: `translateY(${mousePosition.y * 10}px)`,
          }}
        />
      </div>

      {/* Навигация */}
      <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#E2A14C] to-[#E2A14C]/70 rounded-md flex items-center justify-center text-xs font-bold">
            JBS
          </div>
          <div className="text-xl font-medium tracking-wider">Just Buy Site</div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-10">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            Услуги
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            Портфолио
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            Процесс
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            Цены
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            Контакты
          </a>
        </nav>
        
        <div className="flex items-center space-x-6">
          <a
            href="tel:+79991234567"
            className="hidden md:block text-white/80 hover:text-white transition-colors text-sm tracking-wide"
          >
            +7 999 123-45-67
          </a>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white/70 hover:text-[#E2A14C] transition-all transform hover:scale-110"
            >
              <Icon name="Twitter" size={18} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#E2A14C] transition-all transform hover:scale-110"
            >
              <Icon name="Instagram" size={18} />
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-[#E2A14C] transition-all transform hover:scale-110"
            >
              <Icon name="Telegram" size={18} />
            </a>
          </div>
          <button className="lg:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      {/* Основной контент */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 md:px-10 text-center">
        {/* Логотип и слоган */}
        <motion.div
          className="mb-12"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          }}
        >
          <div className="relative inline-block">
            <div className="text-6xl md:text-8xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              <span className="relative">
                Just
                <span className="absolute -top-3 right-0 text-xs tracking-widest text-white/50">•</span>
              </span>{" "}
              <span className="text-[#E2A14C]">Buy</span>{" "}
              <span className="relative">
                Site
                <span className="absolute -bottom-3 -right-3 text-xs tracking-widest text-white/50">•</span>
              </span>
            </div>
            <div className="absolute -bottom-6 right-0 left-0">
              <p className="text-white/60 tracking-[0.3em] text-xs font-light">
                ATTENTION TO DETAILS • PURSUIT OF IDEALS
              </p>
            </div>
          </div>
        </motion.div>

        {/* Слоган */}
        <motion.div
          className="mb-16 max-w-3xl"
          style={{
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
          }}
        >
          <h1 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">
            Отдыхай, пока твой сайт 
            <span className="text-[#2DD4BF]"> работает</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Мы создаем сайты, которые приносят результат, пока вы занимаетесь
            тем, что действительно любите
          </p>
        </motion.div>

        {/* Блок с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 w-full max-w-5xl">
          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 transition-all hover:border-[#E2A14C]/20 group overflow-hidden relative"
            style={{
              transform: `translateY(${mousePosition.y * 5}px)`,
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#E2A14C]/10 rounded-full blur-xl group-hover:bg-[#E2A14C]/20 transition-all"></div>
            <div className="text-[#E2A14C] text-5xl font-bold mb-3 relative z-10">150+</div>
            <div className="text-white/70 relative z-10">реализованных проектов</div>
          </motion.div>
          
          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 transition-all hover:border-[#2DD4BF]/20 group overflow-hidden relative"
            style={{
              transform: `translateY(${mousePosition.y * 10}px)`,
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#2DD4BF]/10 rounded-full blur-xl group-hover:bg-[#2DD4BF]/20 transition-all"></div>
            <div className="text-[#2DD4BF] text-5xl font-bold mb-3 relative z-10">98%</div>
            <div className="text-white/70 relative z-10">довольных клиентов</div>
          </motion.div>
          
          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 transition-all hover:border-white/20 group overflow-hidden relative"
            style={{
              transform: `translateY(${mousePosition.y * 5}px)`,
            }}
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
            <div className="text-white text-5xl font-bold mb-3 relative z-10">14</div>
            <div className="text-white/70 relative z-10">дней среднее время работы</div>
          </motion.div>
        </div>

        {/* Кнопка */}
        <motion.div
          style={{
            transform: `translateY(${mousePosition.y * 3}px)`,
          }}
        >
          <Button className="bg-gradient-to-r from-[#E2A14C] to-[#E2854C] hover:from-[#E2854C] hover:to-[#E2A14C] text-black font-medium px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E2A14C]/20">
            Обсудить проект
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
</motion.div>
