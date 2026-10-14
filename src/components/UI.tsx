import React from 'react';

export const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = '', id }: { children: React.ReactNode; className?: string, id?: string }) => (
  <section id={id} className={`py-12 md:py-24 ${className}`}>
    {children}
  </section>
);

export const Button = ({ children, href, className = '', variant = 'vibrant' }: { children: React.ReactNode; href: string; className?: string, variant?: 'gold' | 'outline' | 'vibrant' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 rounded-xl text-center";
  const variants = {
    gold: "bg-[#D4AF37] text-[#111111] hover:bg-[#C8A45D] hover:shadow-lg hover:shadow-[#D4AF37]/20",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111]",
    vibrant: "bg-[#D4AF37] text-[#111111] hover:bg-[#C8A45D] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] animate-scale-pulse"
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

export const SectionLabel = ({ text, className = '' }: { text: string; className?: string }) => (
  <div className={`flex items-center justify-center mb-6 md:mb-8 ${className}`}>
    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#C8A45D] flex items-center gap-3 md:gap-4">
      <span className="w-6 md:w-8 h-[1px] bg-[#C8A45D]/50"></span>
      {text}
      <span className="w-6 md:w-8 h-[1px] bg-[#C8A45D]/50"></span>
    </span>
  </div>
);

export const SectionTitle = ({ children, className = '', dark = false }: { children: React.ReactNode; className?: string, dark?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-6 md:mb-8 leading-tight ${dark ? 'text-white' : 'text-[#111111]'} ${className}`}>
    {children}
  </h2>
);

export const SectionSubtitle = ({ children, className = '', dark = false }: { children: React.ReactNode; className?: string, dark?: boolean }) => (
  <p className={`text-base md:text-lg text-center max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed ${dark ? 'text-gray-300' : 'text-[#666666]'} ${className}`}>
    {children}
  </p>
);

export const PlaceholderImage = ({ label, className = '' }: { label: string; className?: string }) => (
  <div className={`flex items-center justify-center bg-[#171717] border border-gray-800 rounded-xl overflow-hidden ${className}`}>
    <span className="text-gray-500 font-mono text-xs px-4 text-center">[{label}]</span>
  </div>
);
