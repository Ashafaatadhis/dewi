import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

const PhoneMockup = ({ children, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        {/* Inner bezel */}
        <div className="relative bg-gray-800 rounded-[2rem] p-1">
          {/* Screen container */}
          <div className="relative bg-black rounded-[1.75rem] overflow-hidden">
            {/* Notch/Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
            
            {/* Screen content */}
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.75rem]">
              {children}
            </div>
            
            {/* Screen reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[1.75rem]" />
          </div>
        </div>
        
        {/* Side buttons - Volume */}
        <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-l-sm" />
        <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-700 rounded-l-sm" />
        
        {/* Side button - Power */}
        <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-700 rounded-r-sm" />
      </div>
      
      {/* Phone shadow */}
      <div className="absolute -bottom-4 left-[10%] right-[10%] h-8 bg-black/20 blur-xl rounded-[50%]" />
    </div>
  );
};

export default PhoneMockup;
