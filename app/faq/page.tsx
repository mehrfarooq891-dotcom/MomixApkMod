import React from 'react';
import FAQAccordion from '@/components/FAQAccordion';
import DownloadButton from '@/components/DownloadButton';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) - Momix APK',
  description: 'Find answers to all your questions about Momix APK. Is it free? Is it safe? How to update? Get all the information you need here.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'Is Momix APK free?',
      answer: 'Yes, Momix APK is completely free to download and use. There are no hidden charges or subscription fees required to access the content.',
    },
    {
      question: 'Is it safe to download?',
      answer: 'Yes, it is safe to download Momix APK from our official website. We scan every file for viruses and malware before uploading it.',
    },
    {
      question: 'How to install on Android?',
      answer: 'Download the APK file, enable "Unknown Sources" in your device settings, open the file, and tap install. Check our "How to Install" page for a detailed guide.',
    },
    {
      question: 'Why is it not on Play Store?',
      answer: 'Google Play Store does not allow apps that provide free access to premium streaming content. This is why you need to download it as an APK from our website.',
    },
    {
      question: 'Does it work without internet?',
      answer: 'You need an internet connection to stream content. However, you can use the download feature to save movies and watch them offline later.',
    },
    {
      question: 'How to update Momix?',
      answer: 'Visit our website to download the latest version. Simply install the new APK over the existing one to update the app.',
    },
    {
      question: 'Is registration required?',
      answer: 'No registration or login is required. You can start watching your favorite movies and shows immediately after installation.',
    },
    {
      question: 'What content is available?',
      answer: 'Momix provides access to a vast library of Hollywood and Bollywood movies, web series from platforms like Netflix, Amazon Prime, Disney+, and hundreds of Live TV channels.',
    },
    {
      question: 'How to fix buffering issues?',
      answer: 'Buffering issues are usually caused by a slow internet connection. Try lowering the video quality in the player settings or connect to a faster Wi-Fi network.',
    },
    {
      question: 'Which Android version is needed?',
      answer: 'Momix APK works on all Android devices running Android 5.0 (Lollipop) or higher.',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-[#999999] text-lg">
            Everything you need to know about Momix APK.
          </p>
        </div>

        <FAQAccordion items={faqs} />

        <div className="mt-20 bg-[#141414] rounded-2xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-[#999999] mb-8">
            If you couldn't find the answer you were looking for, feel free to contact us or download the app to experience it yourself.
          </p>
          <DownloadButton />
        </div>
      </div>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
