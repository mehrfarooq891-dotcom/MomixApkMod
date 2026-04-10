import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-[#e50914] mb-4 block">
              MOMIX
            </Link>
            <p className="text-[#999999] max-w-md">
              The best free streaming application for Android. Watch your favorite movies, web series, and live TV channels in HD quality without any subscription or ads.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#999999]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors">Download APK</Link></li>
              <li><Link href="/how-to-install" className="hover:text-white transition-colors">How to Install</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#999999]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[#666666] text-sm">
          <p>© 2026 Momix APK. All rights reserved. Not affiliated with any official streaming service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
