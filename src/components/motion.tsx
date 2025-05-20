
// Временная реализация framer-motion для демо-версии
// В реальном проекте вам потребуется установить настоящий framer-motion

import React, { ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  className?: string;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  style?: React.CSSProperties;
}

export const motion = {
  div: ({ children, className, initial, animate, transition, style, ...rest }: MotionProps) => {
    // Базовая анимация с CSS для демо
    const defaultStyle: React.CSSProperties = {
      opacity: 0,
      ...style
    };

    React.useEffect(() => {
      const timer = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
          containerRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
      return () => clearTimeout(timer);
    }, []);

    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
      <div 
        ref={containerRef}
        className={className} 
        style={{
          ...defaultStyle,
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
};
