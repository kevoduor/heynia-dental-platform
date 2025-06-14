
import React from 'react';

interface HeyniaLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const HeyniaLogo: React.FC<HeyniaLogoProps> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 120 40" 
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Complete "heynia" text as one word */}
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
