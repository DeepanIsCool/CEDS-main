import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeProvider';

interface GlassPanelProps {
  className?: string;
  variant?: 'light' | 'dark';
  blur?: number;
  opacity?: number;
  border?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const GlassPanel = ({
  className,
  variant,
  blur = 8,
  opacity = 0.7,
  border = true,
  children,
  style,
  ...props
}: GlassPanelProps) => {
  const { theme } = useTheme();
  const currentVariant = variant || theme;
  
  const isDark = currentVariant === 'dark';
  
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden',
        border && 'border border-opacity-20',
        isDark 
          ? 'bg-slate-900/50 border-slate-700 text-slate-100 shadow-lg shadow-slate-800/30'
          : 'bg-white/50 border-slate-200 text-slate-900 shadow-lg shadow-slate-300/30',
        className
      )}
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        ...(isDark ? { 
          backgroundColor: `rgba(15, 23, 42, ${opacity})` 
        } : { 
          backgroundColor: `rgba(255, 255, 255, ${opacity})` 
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface GlowButtonProps {
  className?: string;
  glowColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const GlowButton = ({
  className,
  glowColor = 'rgba(59, 130, 246, 0.6)',
  children,
  ...props
}: GlowButtonProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.button
      className={cn(
        'relative rounded-lg px-4 py-2 font-medium text-white overflow-hidden',
        'transition-all duration-300 bg-blue-500 hover:bg-blue-600',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full">
        <div 
          className={`absolute inset-0 opacity-0 hover:opacity-70 transition-opacity duration-300 blur-xl`}
          style={{ 
            background: glowColor,
            filter: isDark ? 'blur(20px)' : 'blur(10px)'
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};