interface PhoneTripleMockupProps {
  images: string[];
  className?: string;
}

const PhoneFrame = ({ image, alt, size = "normal" }: { image: string; alt: string; size?: "small" | "normal" }) => {
  const isSmall = size === "small";
  
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-pink-200/30 to-rose-100/20 ${isSmall ? 'rounded-[1.75rem]' : 'rounded-[2.25rem]'} blur-xl opacity-60`} />
      
      {/* Phone body */}
      <div className={`relative ${isSmall ? 'rounded-[1.75rem] p-[3px]' : 'rounded-[2.25rem] p-[4px]'} bg-gradient-to-br from-rose-100 via-white to-pink-50 shadow-lg`}>
        {/* Inner frame with subtle metallic effect */}
        <div className={`relative ${isSmall ? 'rounded-[1.5rem]' : 'rounded-[2rem]'} bg-gradient-to-b from-gray-50 to-white p-[2px]`}>
          {/* Screen bezel */}
          <div className={`relative ${isSmall ? 'rounded-[1.35rem]' : 'rounded-[1.85rem]'} bg-gray-900 overflow-hidden`}>
            {/* Dynamic Island / Notch */}
            <div className={`absolute top-1.5 left-1/2 -translate-x-1/2 ${isSmall ? 'w-12 h-[6px]' : 'w-16 h-[7px]'} bg-black rounded-full z-20`}>
              {/* Camera dot */}
              <div className={`absolute right-2 top-1/2 -translate-y-1/2 ${isSmall ? 'w-1 h-1' : 'w-1.5 h-1.5'} bg-gray-800 rounded-full`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full" />
              </div>
            </div>
            
            {/* Screen content */}
            <div className={`relative ${isSmall ? 'aspect-[9/19]' : 'aspect-[9/19.5]'} overflow-hidden`}>
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover"
              />
              
              {/* Subtle screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
            
            {/* Home indicator */}
            <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 ${isSmall ? 'w-16 h-1' : 'w-20 h-1'} bg-white/30 rounded-full`} />
          </div>
        </div>
        
        {/* Side buttons - subtle */}
        <div className={`absolute ${isSmall ? '-left-[1px] top-16 w-[2px] h-6' : '-left-[2px] top-20 w-[3px] h-8'} bg-gradient-to-b from-rose-200 to-pink-100 rounded-l-sm`} />
        <div className={`absolute ${isSmall ? '-right-[1px] top-14 w-[2px] h-8' : '-right-[2px] top-16 w-[3px] h-10'} bg-gradient-to-b from-rose-200 to-pink-100 rounded-r-sm`} />
      </div>
    </div>
  );
};

const PhoneTripleMockup = ({ images, className = "" }: PhoneTripleMockupProps) => {
  if (images.length < 3) return null;

  return (
    <div className={`relative flex items-end justify-center ${className}`}>
      {/* Unified soft shadow underneath */}
      <div className="absolute -bottom-6 left-[15%] right-[15%] h-12 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl rounded-full" />
      
      {/* Left phone - smaller, elegantly tilted */}
      <div className="transform -rotate-[8deg] translate-y-6 translate-x-3 scale-[0.65] origin-bottom-right z-0 opacity-90">
        <PhoneFrame image={images[1]} alt="Detail screen" size="small" />
      </div>
      
      {/* Center phone - hero, prominent */}
      <div className="relative z-20 transform scale-[0.85]">
        <PhoneFrame image={images[0]} alt="Main screen" size="normal" />
      </div>
      
      {/* Right phone - smaller, elegantly tilted */}
      <div className="transform rotate-[8deg] translate-y-6 -translate-x-3 scale-[0.65] origin-bottom-left z-0 opacity-90">
        <PhoneFrame image={images[2]} alt="Profile screen" size="small" />
      </div>
    </div>
  );
};

export default PhoneTripleMockup;
