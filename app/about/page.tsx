import React from 'react';
import { Info, Target, ShieldCheck, Mail } from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';

export const metadata = {
  title: 'About Us - Momix APK Official',
  description: 'Learn more about Momix APK, the ultimate free streaming destination. Discover our mission, features, and why millions of users trust us.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">About Momix APK</h1>
          <p className="text-[#999999] text-lg">
            Your ultimate destination for free, high-quality entertainment.
          </p>
        </div>

        <div className="space-y-12">
          {/* What is Momix */}
          <section className="bg-[#141414] rounded-2xl border border-white/10 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#e50914]/10 rounded-xl text-[#e50914]">
                <Info size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">What is Momix?</h2>
            </div>
            <div className="text-[#999999] space-y-4 leading-relaxed">
              <p>
                Momix is a revolutionary streaming application designed for Android users who want to enjoy premium content without the burden of expensive subscriptions. We believe that entertainment should be accessible to everyone, regardless of their budget.
              </p>
              <p>
                Our platform aggregates content from various premium streaming services, providing a unified interface where you can find the latest movies, trending web series, and live TV channels from across the globe.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#141414] rounded-2xl border border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#e50914]/10 rounded-xl text-[#e50914]">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-[#999999] leading-relaxed">
                Our mission is to provide a seamless, high-quality, and ad-free streaming experience to users worldwide. We strive to keep our app updated with the latest content and features while maintaining the highest standards of security and privacy.
              </p>
            </div>
            <div className="bg-[#141414] rounded-2xl border border-white/10 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#e50914]/10 rounded-xl text-[#e50914]">
                  <ShieldCheck size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Why Trust Us?</h2>
              </div>
              <p className="text-[#999999] leading-relaxed">
                With over 2 million downloads and a dedicated community, Momix has established itself as a reliable source for entertainment. We prioritize user safety, ensuring our APK is always clean and free from any malicious code.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-[#e50914]/5 rounded-2xl border border-[#e50914]/20 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-[#999999] text-sm leading-relaxed">
              Momix APK does not host any content on its servers. We only provide links to content available on the internet. We are not affiliated with any of the streaming platforms or content creators. Users are advised to use the app at their own discretion and respect copyright laws in their respective regions.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center bg-[#141414] rounded-2xl border border-white/10 p-12">
            <div className="inline-flex p-4 bg-[#e50914]/10 rounded-full text-[#e50914] mb-6">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-[#999999] mb-8 max-w-md mx-auto">
              Have suggestions or facing issues? We'd love to hear from you. Reach out to our support team.
            </p>
            <a href="mailto:support@momix.apk" className="text-[#e50914] font-bold text-xl hover:underline">
              support@momix.apk
            </a>
          </section>

          <div className="text-center pt-8">
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
