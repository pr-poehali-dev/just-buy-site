
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Импортируем шрифты Google
const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Обработчик движения мыши для эффекта параллакса
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Вычисляем смещение от центра
        const moveX = (clientX - centerX) / 25;
        const moveY = (clientY - centerY) / 25;
        
        setMousePosition({ x: moveX, y: moveY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0c1c33] to-[#193B68] text-white">
      {/* Параллакс-фон */}
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1c33]/80 via-transparent to-[#0c1c33]/90" />

      {/* Декоративные элементы */}
      <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#E2A14C]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#3D5A80]/20 rounded-full blur-[100px]" />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-screen flex flex-col">
        {/* Хедер */}
        <header className="py-6">
          <nav className="flex justify-between items-center">
            {/* Логотип */}
            <a href="#" className="text-2xl font-semibold tracking-tight">
              JB<span className="text-[#E2A14C]">S</span>
            </a>
            
            {/* Навигация */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-[#E2A14C] transition-colors font-medium">Главная</a>
              <a href="#" className="hover:text-[#E2A14C] transition-colors">Услуги</a>
              <a href="#" className="hover:text-[#E2A14C] transition-colors">Портфолио</a>
              <a href="#" className="hover:text-[#E2A14C] transition-colors">О нас</a>
              <a href="#" className="hover:text-[#E2A14C] transition-colors">Контакты</a>
            </div>
            
            {/* Контакты и соцсети */}
            <div className="flex items-center space-x-4">
              <a href="tel:+79001234567" className="hidden sm:block text-sm hover:text-[#E2A14C]">+7 (900) 123-45-67</a>
              <div className="flex space-x-3">
                <a href="#" className="text-white hover:text-[#E2A14C] transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#E2A14C] transition-colors">
                  <Icon name="Telegram" size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#E2A14C] transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Основной контент */}
        <main className="flex-1 flex flex-col justify-center py-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Логотип и слоган */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-2">
                <span className="text-white">Just</span>
                <span className="text-[#E2A14C]"> Buy</span>
                <span className="text-white"> Site</span>
              </h1>
              <p className="text-sm text-gray-300 tracking-widest uppercase">Attention To Details • Pursuit Of Ideals</p>
            </motion.div>

            {/* Основной слоган */}
            <motion.h2
              className="text-2xl sm:text-4xl font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Отдыхай, пока твой сайт работает
            </motion.h2>

            {/* Преимущества (с фоном из матового стекла) */}
            <motion.div
              className="backdrop-blur-md bg-white/10 rounded-lg p-6 mb-10 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-[#E2A14C] text-xl font-semibold mb-2">150+</h3>
                  <p className="text-sm">успешных проектов</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#E2A14C] text-xl font-semibold mb-2">8 лет</h3>
                  <p className="text-sm">опыта разработки</p>
                </div>
                <div className="text-center">
                  <h3 className="text-[#E2A14C] text-xl font-semibold mb-2">24/7</h3>
                  <p className="text-sm">поддержка клиентов</p>
                </div>
              </div>
            </motion.div>

            {/* Кнопка действия */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="px-8 py-6 bg-[#E2A14C] hover:bg-[#d18d38] text-black rounded-full text-lg"
              >
                Заказать сайт
              </Button>
            </motion.div>
          </div>
        </main>

        {/* Декоративный элемент внизу */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={30} className="text-white/50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
