
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
          viewBox="0 0 150 50" 
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text 
            x="10" 
            y="35" 
            fontSize="32"
            fontFamily="Comfortaa, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontWeight="600"
          >
            <tspan fill="#FF6B47">hey</tspan>
            <tspan fill="#4A90E2">nia</tspan>
          </text>
        </svg>
      </div>
    );
  }
  
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 150 50" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text 
          x="10" 
          y="35" 
          className={`text-2xl font-semibold ${textColor}`}
          fontSize="32"
          fontFamily="Comfortaa, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontWeight="600"
          fill={variant === 'light' ? '#ffffff' : '#1e293b'}
        >
          heynia
        </text>
      </svg>
    </div>
  );
};

export default HeyniaLogo;
