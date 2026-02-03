interface PhoneTripleMockupProps {
  images: string[];
  className?: string;
}

const PhoneFrame = ({ image, alt, size = "normal" }: { image: string; alt: string; size?: "small" | "normal" }) => {
  const frameClass = size === "small" 
    ? "bg-gray-900 rounded-[1.5rem] p-1 shadow-xl" 
    : "bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl";
  const bezelClass = size === "small"
    ? "bg-gray-800 rounded-[1.25rem] p-0.5"
    : "bg-gray-800 rounded-[1.5rem] p-1";
  const screenClass = size === "small"
    ? "rounded-[1rem]"
    : "rounded-[1.25rem]";
  const notchClass = size === "small"
    ? "w-10 h-2.5"
    : "w-14 h-3";

  return (
    <div className={`relative ${frameClass}`}>
      <div className={`relative ${bezelClass}`}>
        <div className={`relative bg-black ${screenClass} overflow-hidden`}>
          {/* Notch */}
          <div className={`absolute top-1 left-1/2 -translate-x-1/2 ${notchClass} bg-black rounded-full z-20`} />
          
          {/* Screen content */}
          <div className={`relative aspect-[9/19.5] overflow-hidden ${screenClass}`}>
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Screen reflection */}
          <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none ${screenClass}`} />
        </div>
      </div>
    </div>
  );
};

const PhoneTripleMockup = ({ images, className = "" }: PhoneTripleMockupProps) => {
  if (images.length < 3) return null;

  return (
    <div className={`relative flex items-end justify-center gap-2 ${className}`}>
      {/* Left phone - smaller, tilted */}
      <div className="transform -rotate-6 translate-y-4 scale-75 origin-bottom">
        <PhoneFrame image={images[1]} alt="App screen 2" size="small" />
      </div>
      
      {/* Center phone - main, larger */}
      <div className="relative z-10 transform scale-90">
        <PhoneFrame image={images[0]} alt="App screen 1" size="normal" />
      </div>
      
      {/* Right phone - smaller, tilted */}
      <div className="transform rotate-6 translate-y-4 scale-75 origin-bottom">
        <PhoneFrame image={images[2]} alt="App screen 3" size="small" />
      </div>
      
      {/* Combined shadow */}
      <div className="absolute -bottom-4 left-[5%] right-[5%] h-8 bg-black/15 blur-xl rounded-[50%]" />
    </div>
  );
};

export default PhoneTripleMockup;
