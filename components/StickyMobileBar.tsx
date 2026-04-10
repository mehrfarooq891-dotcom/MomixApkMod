'use client';

import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

const StickyMobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-white/10 p-4 animate-in slide-in-from-bottom-full">
      <Link
        href="/download"
        className="flex items-center justify-center gap-3 bg-[#e50914] text-white font-bold py-4 rounded-2xl w-full"
      >
        <Download size={20} />
        Download Momix APK - Free
      </Link>
    </div>
  );
};

export default StickyMobileBar;
