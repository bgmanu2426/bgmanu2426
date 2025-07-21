import { motion } from 'framer-motion';
import { useEffect, useState, useCallback, useMemo } from 'react';

type AnimatedBackgroundProps = {
  variant?: 'default' | 'gradient' | 'dots' | 'waves' | 'orange-glow';
  opacity?: number;
  className?: string;
};

// Throttle function for performance
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

const AnimatedBackground = ({
  variant = 'default',
  opacity = 0.03,
  className = '',
}: AnimatedBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    throttle((event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }, 16)(e);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Memoize expensive calculations
  const glowElements = useMemo(() => {
    if (variant !== 'orange-glow') return null;

    return (
      <>
        {/* Optimized main glows with reduced complexity */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, -10, 30, 0],
            y: [0, -30, 20, -25, 0],
            scale: [1, 1.05, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 15, -20, 0],
            y: [0, 20, -25, 15, 0],
            scale: [1, 0.95, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 2,
            ease: 'easeInOut',
          }}
        />

        {/* Simplified accent glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Optimized mouse follow glow */}
        <motion.div
          className="w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl absolute"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 80,
            mass: 0.8,
          }}
        />
      </>
    );
  }, [variant, mousePosition]);

  if (variant === 'orange-glow') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {glowElements}

        {/* Static grid background - no animation needed */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, rgba(249, 115, 22, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.2,
          }}
        />

        {/* Static overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>
    );
  }

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
              duration: 8,
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
              duration: 6,
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
            'radial-gradient(circle at calc(50% + 150px) calc(50% - 150px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% - 150px) calc(50% + 150px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% + 150px) calc(50% + 150px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% - 150px) calc(50% - 150px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at calc(50% + 150px) calc(50% - 150px), rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0) 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    );
  }

  // Default subtle moving gradient - optimized
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
