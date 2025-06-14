
import React from 'react';

interface HeyniaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'colorful';
}

const HeyniaLogo: React.FC<HeyniaLogoProps> = ({ className = "", variant = 'colorful' }) => {
  if (variant === 'colorful') {
    return (
      <div className={`flex items-center ${className}`}>
        <svg 
          viewBox="0 0 120 40" 
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heynia-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B47" />
              <stop offset="50%" stopColor="#FF8A5B" />
              <stop offset="100%" stopColor="#4A5568" />
            </linearGradient>
          </defs>
          <text 
            x="10" 
            y="28" 
            className="text-2xl font-semibold"
            fontSize="24"
            fontFamily="Comfortaa, sans-serif"
            fill="url(#heynia-gradient)"
          >
            heynia
          </text>
        </svg>
      </div>
    );
  }
  
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 120 40" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="10" 
          y="28" 
          className={`text-2xl font-semibold ${textColor}`}
          fontSize="24"
          fontFamily="Comfortaa, sans-serif"
          fill={variant === 'light' ? '#ffffff' : '#1e293b'}
        >
          heynia
        </text>
      </svg>
    </div>
  );
};

export default HeyniaLogo;
