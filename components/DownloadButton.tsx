'use client';

import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

const DownloadButton = ({ className, variant = 'primary', size = 'lg' }: DownloadButtonProps) => {
  return (
    <Link href="/download" className={cn('inline-block', className)}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'flex items-center justify-center gap-3 font-bold transition-all rounded-2xl cursor-pointer',
          variant === 'primary' ? 'bg-[#e50914] text-white hover:bg-[#b20710] pulse-animation' : 'bg-white/10 text-white hover:bg-white/20',
          size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'
        )}
      >
        <Download size={size === 'lg' ? 24 : 20} />
        Download Momix APK
      </motion.div>
    </Link>
  );
};

export default DownloadButton;
