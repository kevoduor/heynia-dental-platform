
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
        {/* Background circle/oval for the "h" */}
        <ellipse 
          cx="20" 
          cy="20" 
          rx="18" 
          ry="18" 
          fill={variant === 'light' ? '#ffffff' : '#1e293b'}
          stroke={variant === 'light' ? '#64748b' : '#e2e8f0'}
          strokeWidth="1"
        />
        
        {/* Stylized "h" in the circle */}
        <text 
          x="20" 
          y="28" 
          textAnchor="middle" 
          className="text-lg font-bold"
          fill={variant === 'light' ? '#1e293b' : '#ffffff'}
          fontSize="20"
          fontFamily="Comfortaa, sans-serif"
        >
          h
        </text>
        
        {/* "eynia" text */}
        <text 
          x="45" 
          y="28" 
          className={`text-2xl font-semibold ${textColor}`}
          fontSize="24"
          fontFamily="Comfortaa, sans-serif"
          fill={variant === 'light' ? '#ffffff' : '#1e293b'}
        >
          eynia
        </text>
      </svg>
    </div>
  );
};

export default HeyniaLogo;
