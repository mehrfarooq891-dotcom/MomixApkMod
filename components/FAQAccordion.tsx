'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#141414] rounded-2xl border border-white/5 overflow-hidden"
        >
          <button
            className="w-full px-6 py-5 flex items-center justify-between text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-bold text-white">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-[#e50914]" size={20} />
            ) : (
              <ChevronDown className="text-[#999999]" size={20} />
            )}
          </button>
          <div
            className={cn(
              'px-6 transition-all duration-300 ease-in-out',
              openIndex === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <p className="text-[#999999] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
