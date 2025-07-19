import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type AnimatedBackgroundProps = {
  variant?: 'default' | 'gradient' | 'dots' | 'waves';
  opacity?: number;
  className?: string;
};

const AnimatedBackground = ({
  variant = 'default',
  opacity = 0.03,
  className = '',
}: AnimatedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (variant === 'dots') {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#3B82F6_2px,_transparent_2px)] bg-[length:20px_20px]"></div>
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C30,60 70,40 100,50 L100,100 L0,100 Z"
            fill="currentColor"
            initial={{ y: 20 }}
            animate={{ y: [20, 15, 20] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            d="M0,60 C40,70 60,50 100,60 L100,100 L0,100 Z"
            fill="currentColor"
            initial={{ y: 20 }}
            animate={{ y: [20, 10, 20] }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <motion.div
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-500/5 to-indigo-500/5 pointer-events-none ${className}`}
        animate={{
          background: [
            'radial-gradient(circle at calc(50% + 200px) calc(50% - 200px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% - 200px) calc(50% + 200px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% + 200px) calc(50% + 200px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% - 200px) calc(50% - 200px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% + 200px) calc(50% - 200px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    );
  }

  // Default subtle moving gradient
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, ${opacity}) 0%, rgba(0, 0, 0, 0) 50%)`,
        opacity,
      }}
    />
  );
};

export default AnimatedBackground;
