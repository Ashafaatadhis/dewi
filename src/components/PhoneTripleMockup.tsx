interface PhoneTripleMockupProps {
  images: string[];
  title?: string;
  description?: string;
  className?: string;
}

const PhoneFrame = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="relative">
      {/* Phone body - sleek black */}
      <div className="relative rounded-[2rem] p-[3px] bg-gradient-to-b from-gray-700 via-gray-900 to-black shadow-xl">
        {/* Inner bezel */}
        <div className="relative rounded-[1.75rem] bg-black p-[2px]">
          {/* Screen area */}
          <div className="relative rounded-[1.6rem] bg-gray-900 overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-[6px] bg-black rounded-full z-20">
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full">
                <div className="absolute inset-0.5 bg-gradient-to-br from-gray-600 to-transparent rounded-full" />
              </div>
            </div>
            
            {/* Screen content */}
            <div className="relative aspect-[9/19] overflow-hidden">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-20 w-[3px] h-6 bg-gray-700 rounded-l-sm" />
        <div className="absolute -left-[2px] top-28 w-[3px] h-10 bg-gray-700 rounded-l-sm" />
        <div className="absolute -right-[2px] top-24 w-[3px] h-12 bg-gray-700 rounded-r-sm" />
      </div>
      
      {/* Phone shadow */}
      <div className="absolute -bottom-3 left-[10%] right-[10%] h-6 bg-black/20 blur-lg rounded-full" />
    </div>
  );
};

const PhoneTripleMockup = ({ images, title, description, className = "" }: PhoneTripleMockupProps) => {
  if (images.length < 3) return null;

  return (
    <div className={`relative flex flex-col items-center justify-center h-full ${className}`}>
      {/* Three phones side by side */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="transform scale-[0.55]">
          <PhoneFrame image={images[0]} alt="Home screen" />
        </div>
        <div className="transform scale-[0.55]">
          <PhoneFrame image={images[1]} alt="Detail screen" />
        </div>
        <div className="transform scale-[0.55]">
          <PhoneFrame image={images[2]} alt="Profile screen" />
        </div>
      </div>
      
      {/* Description below phones */}
      {(title || description) && (
        <div className="text-center px-4 mt-2">
          {title && <h4 className="text-lg font-serif text-foreground mb-1">{title}</h4>}
          {description && <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default PhoneTripleMockup;
