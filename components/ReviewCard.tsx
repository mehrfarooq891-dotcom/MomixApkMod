import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  date: string;
}

const ReviewCard = ({ name, review, rating, date }: ReviewCardProps) => {
  return (
    <div className="bg-[#141414] p-6 rounded-2xl border border-white/5">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-[#e50914] text-[#e50914]' : 'text-[#333333]'}
          />
        ))}
      </div>
      <p className="text-white italic mb-4">"{review}"</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-white">{name}</span>
        <span className="text-xs text-[#666666]">{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
