import { ReactNode } from "react";

interface DocumentMockupProps {
  children: ReactNode;
  className?: string;
}

const DocumentMockup = ({ children, className = "" }: DocumentMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Document shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-foreground/10 rounded-lg blur-sm" />
      
      {/* Document paper */}
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 pointer-events-none" />
        
        {/* Subtle fold line on top right */}
        <div className="absolute top-0 right-0 w-8 h-8">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-200/50 to-transparent" 
               style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        </div>
        
        {/* Document content */}
        <div className="relative aspect-[3/4] p-3">
          {children}
        </div>
        
        {/* Bottom edge shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-gray-200/50 to-transparent" />
      </div>
      
      {/* Soft drop shadow */}
      <div className="absolute -bottom-4 left-[5%] right-[5%] h-6 bg-black/10 blur-xl rounded-[50%]" />
    </div>
  );
};

export default DocumentMockup;
