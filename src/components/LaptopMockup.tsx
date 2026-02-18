import { ReactNode } from "react";

interface LaptopMockupProps {
  children: ReactNode;
  className?: string;
  aspectRatio?: string;
}

const LaptopMockup = ({ children, className = "", aspectRatio = "video" }: LaptopMockupProps) => {
  const aspectClass = aspectRatio === "video" ? "aspect-video" : 
                      aspectRatio === "portrait" ? "aspect-[3/4]" :
                      aspectRatio === "square" ? "aspect-square" :
                      `aspect-[${aspectRatio}]`;

  return (
    <div className={`relative ${className}`}>
      {/* Laptop Screen */}
      <div className="relative">
        {/* Screen outer frame - silver/space gray */}
        <div className="bg-gradient-to-b from-[#e8e8e8] via-[#d4d4d4] to-[#c0c0c0] p-[3px] rounded-t-2xl shadow-xl">
          {/* Inner bezel - black */}
          <div className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] p-2 rounded-t-xl">
            {/* Camera */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]">
              <div className="absolute inset-[2px] rounded-full bg-[#0a3d62]/60" />
            </div>
            
            {/* Screen */}
            <div className="relative bg-black rounded-sm overflow-hidden">
              <div className={aspectClass}>
                {children}
              </div>
              
              {/* Screen reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Bottom chin with logo indent */}
        <div className="h-3 bg-gradient-to-b from-[#c0c0c0] to-[#b0b0b0] flex items-center justify-center">
          <div className="w-8 h-1.5 bg-[#a0a0a0] rounded-full" />
        </div>
      </div>
      
      {/* Laptop Base/Keyboard */}
      <div className="relative">
        {/* Hinge */}
        <div className="h-1.5 bg-gradient-to-b from-[#888] to-[#999] rounded-b-sm" />
        
        {/* Keyboard deck */}
        <div 
          className="h-2.5 bg-gradient-to-b from-[#d8d8d8] to-[#c8c8c8] rounded-b-lg"
          style={{ 
            marginLeft: '-6%',
            marginRight: '-6%',
            clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)',
          }} 
        />
        
        {/* Front edge */}
        <div 
          className="h-0.5 bg-gradient-to-b from-[#aaa] to-[#999]"
          style={{ 
            marginLeft: '-4%',
            marginRight: '-4%',
            borderRadius: '0 0 4px 4px'
          }} 
        />
      </div>
      
      {/* Soft shadow */}
      <div className="absolute -bottom-3 left-[10%] right-[10%] h-6 bg-black/15 blur-xl rounded-[50%]" />
    </div>
  );
};

export default LaptopMockup;
