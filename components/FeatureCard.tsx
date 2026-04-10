import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-[#141414] p-8 rounded-2xl border border-white/5 hover:border-[#e50914]/30 transition-all group">
      <div className="w-12 h-12 bg-[#e50914]/10 rounded-xl flex items-center justify-center mb-6 text-[#e50914] group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#999999] leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
