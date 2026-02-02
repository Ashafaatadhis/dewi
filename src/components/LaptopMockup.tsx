import { ReactNode } from "react";

interface LaptopMockupProps {
  children: ReactNode;
  className?: string;
}

const LaptopMockup = ({ children, className = "" }: LaptopMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Screen */}
      <div className="relative bg-gray-800 rounded-t-xl p-2 shadow-2xl">
        {/* Camera notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />
        
        {/* Screen bezel */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {/* Screen content */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {children}
          </div>
        </div>
      </div>
      
      {/* Laptop Base/Keyboard */}
      <div className="relative">
        {/* Hinge */}
        <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b-sm" />
        
        {/* Keyboard base */}
        <div className="h-3 bg-gradient-to-b from-gray-500 to-gray-400 rounded-b-xl mx-[-8%]" 
             style={{ 
               clipPath: 'polygon(8% 0, 92% 0, 100% 100%, 0% 100%)',
               boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
             }} 
        />
      </div>
      
      {/* Shadow under laptop */}
      <div className="absolute -bottom-2 left-[5%] right-[5%] h-4 bg-black/10 blur-xl rounded-full" />
    </div>
  );
};

export default LaptopMockup;
