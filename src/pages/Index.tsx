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
      className="min-h-screen bg-[#0f172a] text-white overflow-hidden"
      ref={heroRef}
    >
      {/* Фоновые элементы с параллакс-эффектом */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 to-[#0f172a]/70"></div>
      </div>

      {/* Навигация */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="text-xl font-medium tracking-wider">JBS</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Услуги
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Процесс
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Цены
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Контакты
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+79991234567"
            className="text-white/80 hover:text-white transition-colors"
          >
            +7 999 123-45-67
          </a>
          <div className="flex space-x-3">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Icon name="Telegram" size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        {/* Логотип и слоган */}
        <motion.div
          className="mb-10"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        >
          <div className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            <span className="text-white">Just</span>
            <span className="text-[#E2A14C]"> Buy </span>
            <span className="text-white">Site</span>
          </div>
          <p className="text-white/70 tracking-widest text-sm mt-2">
            ATTENTION TO DETAILS • PURSUIT OF IDEALS
          </p>
        </motion.div>

        {/* Слоган */}
        <motion.div
          className="mb-12 max-w-2xl"
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
          }}
        >
          <h1 className="text-2xl md:text-4xl font-medium mb-6">
            Отдыхай, пока твой сайт работает
          </h1>
          <p className="text-white/70 text-lg">
            Мы создаем сайты, которые приносят результат, пока вы занимаетесь
            тем, что действительно любите
          </p>
        </motion.div>

        {/* Блок с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-[#E2A14C] text-4xl font-bold mb-2">150+</div>
            <div className="text-white/80">реализованных проектов</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-[#E2A14C] text-4xl font-bold mb-2">98%</div>
            <div className="text-white/80">довольных клиентов</div>
          </div>
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-[#E2A14C] text-4xl font-bold mb-2">14</div>
            <div className="text-white/80">дней среднее время работы</div>
          </div>
        </div>

        {/* Кнопка */}
        <Button className="bg-[#E2A14C] hover:bg-[#c78a41] text-black px-8 py-6 text-lg rounded-full">
          Обсудить проект
        </Button>
      </main>
    </div>
  );
};

export default Index;
