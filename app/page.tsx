import Link from 'next/link';
import { 
  Play, 
  ShieldCheck, 
  Zap, 
  Tv, 
  Download, 
  Globe, 
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import FeatureCard from '@/components/FeatureCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';

export default function HomePage() {
  const features = [
    {
      title: 'Free Streaming',
      description: 'Access thousands of movies and web series from premium platforms for absolutely free.',
      icon: Play,
    },
    {
      title: 'HD Quality',
      description: 'Stream content in 720p, 1080p, and even 4K resolution with high-speed servers.',
      icon: Tv,
    },
    {
      title: 'No Login Required',
      description: 'Start watching immediately without creating an account or sharing personal details.',
      icon: ShieldCheck,
    },
    {
      title: 'Zero Ads',
      description: 'Enjoy an uninterrupted viewing experience with our built-in ad-blocker technology.',
      icon: Zap,
    },
    {
      title: 'Offline Download',
      description: 'Save your favorite content directly to your device and watch anytime without internet.',
      icon: Download,
    },
    {
      title: 'Multi-language',
      description: 'Content available in multiple languages with high-quality subtitles and audio tracks.',
      icon: Globe,
    },
  ];

  const reviews = [
    {
      name: 'Rahul Sharma',
      review: 'Best app for movies! I was looking for a free alternative to Netflix and Momix is just perfect.',
      rating: 5,
      date: '2 days ago',
    },
    {
      name: 'Sarah Jenkins',
      review: 'The UI is so clean and fast. No ads while watching is a game changer. Highly recommended!',
      rating: 5,
      date: '1 week ago',
    },
    {
      name: 'Amit Patel',
      review: 'Live TV channels work flawlessly. I can watch my favorite sports on the go. v3.2.1 is very stable.',
      rating: 4,
      date: '3 days ago',
    },
  ];

  const faqs = [
    {
      question: 'Is Momix APK free to use?',
      answer: 'Yes, Momix APK is 100% free to use. You can access all premium content, movies, and live TV channels without paying any subscription fee.',
    },
    {
      question: 'Is it safe to install Momix APK?',
      answer: 'Absolutely. Our APK is scanned for viruses and malware. However, since it is a third-party app, you should always download it from our official website.',
    },
    {
      question: 'Does Momix require registration?',
      answer: 'No, Momix does not require any registration or login. You can simply install the app and start streaming immediately.',
    },
    {
      question: 'How to update Momix to the latest version?',
      answer: 'You can visit our website regularly to check for updates. When a new version is available, simply download the latest APK and install it over the old one.',
    },
    {
      question: 'Can I watch Live TV on Momix?',
      answer: 'Yes, Momix offers a wide range of Live TV channels including Sports, News, Entertainment, and more from various countries.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e50914]/10 via-transparent to-transparent -z-10" />
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#e50914]/10 text-[#e50914] px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-[#e50914]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e50914] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e50914]"></span>
            </span>
            Updated April 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            Momix APK - Free <br />
            <span className="text-[#e50914]">HD Streaming</span> App
          </h1>
          <p className="text-xl text-[#999999] max-w-2xl mx-auto mb-10 leading-relaxed">
            Watch movies, web series & live TV for free. No ads. No subscription. The ultimate entertainment hub for your Android device.
          </p>
          
          <div className="flex flex-col items-center gap-6 mb-12">
            <DownloadButton />
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#666666] font-medium">
              <span className="bg-white/5 px-3 py-1 rounded-lg border border-white/5">v3.2.1</span>
              <span className="bg-white/5 px-3 py-1 rounded-lg border border-white/5">18MB</span>
              <span className="bg-white/5 px-3 py-1 rounded-lg border border-white/5">Android 5.0+</span>
              <span className="bg-white/5 px-3 py-1 rounded-lg border border-white/5">Free</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-white font-bold">
            <div className="flex text-[#e50914]">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
            </div>
            <span>4.8/5 (2M+ Downloads)</span>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-[#141414] py-8 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-[#666666] text-xs uppercase tracking-widest mb-1">Version</p>
              <p className="text-white font-bold">v3.2.1 (Latest)</p>
            </div>
            <div className="text-center">
              <p className="text-[#666666] text-xs uppercase tracking-widest mb-1">Size</p>
              <p className="text-white font-bold">18 MB</p>
            </div>
            <div className="text-center">
              <p className="text-[#666666] text-xs uppercase tracking-widest mb-1">Android</p>
              <p className="text-white font-bold">5.0 and Up</p>
            </div>
            <div className="text-center">
              <p className="text-[#666666] text-xs uppercase tracking-widest mb-1">Updated</p>
              <p className="text-white font-bold">April 10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Amazing Features</h2>
            <p className="text-[#999999] max-w-xl mx-auto">
              Everything you need for a premium streaming experience without the premium price tag.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Install */}
      <section className="py-24 bg-[#141414]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">How to Install</h2>
            <p className="text-[#999999]">Get started in 3 simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: 1, title: 'Download APK', desc: 'Click the download button to get the latest Momix APK file.' },
              { step: 2, title: 'Enable Unknown Sources', desc: 'Go to Settings > Security and enable "Unknown Sources" to allow installation.' },
              { step: 3, title: 'Install & Enjoy', desc: 'Open the downloaded file, tap Install, and start streaming!' },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#e50914] text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-[0_0_30px_rgba(229,9,20,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#999999]">{item.desc}</p>
                {item.step < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-6 text-white/10" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">App Screenshots</h2>
            <p className="text-[#999999]">Take a look at the beautiful and intuitive interface.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[9/16] bg-[#141414] rounded-2xl border border-white/5 overflow-hidden group">
                <img 
                  src={`https://picsum.photos/seed/momix-screen-${i}/400/700`} 
                  alt={`Screenshot ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#141414]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">User Reviews</h2>
            <p className="text-[#999999]">See what our millions of users are saying.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Common Questions</h2>
            <p className="text-[#999999]">Find quick answers to your queries.</p>
          </div>
          <FAQAccordion items={faqs} />
          <div className="text-center mt-12">
            <Link href="/faq" className="text-[#e50914] font-bold hover:underline flex items-center justify-center gap-2">
              View all FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#e50914] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Start Streaming?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            Join millions of users and get access to unlimited entertainment today. 100% free and safe.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link 
              href="/download"
              className="bg-white text-[#e50914] px-10 py-5 rounded-2xl text-xl font-black hover:bg-white/90 transition-all flex items-center gap-3"
            >
              <Download size={24} />
              DOWNLOAD NOW
            </Link>
            <p className="text-white/60 text-sm font-medium flex items-center gap-2">
              <CheckCircle2 size={16} /> Virus Free & Verified
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': 'Momix APK',
            'operatingSystem': 'Android',
            'applicationCategory': 'EntertainmentApplication',
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.8',
              'ratingCount': '2150000'
            },
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD'
            }
          })
        }}
      />
    </div>
  );
}
