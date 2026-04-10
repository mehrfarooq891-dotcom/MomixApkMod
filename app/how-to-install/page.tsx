import React from 'react';
import { 
  Download, 
  Settings, 
  ShieldAlert, 
  FileCheck, 
  PlayCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';

export const metadata = {
  title: 'How to Install Momix APK on Android (Step-by-Step Guide)',
  description: 'Learn how to install Momix APK on your Android phone, tablet, or Smart TV. Follow our easy step-by-step guide to enable unknown sources and install the app.',
};

export default function InstallGuidePage() {
  const steps = [
    {
      title: 'Download the APK file',
      desc: 'First, click on the download button to get the latest version of Momix APK file on your device.',
      icon: Download,
    },
    {
      title: 'Go to Settings > Security',
      desc: 'Open your device settings and navigate to the Security or Privacy section.',
      icon: Settings,
    },
    {
      title: 'Enable Unknown Sources',
      desc: 'Find the "Unknown Sources" option and toggle it on. This allows you to install apps from outside the Play Store.',
      icon: ShieldAlert,
    },
    {
      title: 'Open downloaded file',
      desc: 'Go to your file manager or downloads folder and tap on the Momix APK file you just downloaded.',
      icon: FileCheck,
    },
    {
      title: 'Tap Install',
      desc: 'A prompt will appear asking for confirmation. Tap on the "Install" button to begin the process.',
      icon: ArrowRight,
    },
    {
      title: 'Open and enjoy',
      desc: 'Once installed, tap "Open" to launch the app and start streaming your favorite content for free!',
      icon: PlayCircle,
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">How to Install Momix APK</h1>
          <p className="text-[#999999] text-lg">
            Follow these simple steps to install Momix on your Android device safely.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8 items-start group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#e50914] text-white rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black shrink-0 shadow-[0_0_20px_rgba(229,9,20,0.2)]">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-white/5 my-2" />
                )}
              </div>
              <div className="bg-[#141414] p-6 md:p-8 rounded-2xl border border-white/5 flex-1 group-hover:border-[#e50914]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#e50914]/10 rounded-lg text-[#e50914]">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-[#999999] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <div className="bg-[#141414] rounded-2xl border border-white/10 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#e50914]" size={24} /> Troubleshooting
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-2">App Not Installed Error</h4>
              <p className="text-[#999999] text-sm leading-relaxed">
                This usually happens if you already have an older version of Momix installed. Uninstall the previous version first and then try installing the new one. Also, ensure you have enough storage space.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Parse Error</h4>
              <p className="text-[#999999] text-sm leading-relaxed">
                A parse error occurs if the APK file is corrupted or not fully downloaded. Delete the file and download it again from our official link.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Blocked by Play Protect</h4>
              <p className="text-[#999999] text-sm leading-relaxed">
                Google Play Protect sometimes flags third-party apps. Click on "More Details" and then "Install Anyway" to proceed. Our app is safe and verified.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[#999999] mb-8">Ready to get started?</p>
          <DownloadButton />
        </div>
      </div>

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': 'How to Install Momix APK',
            'description': 'Step-by-step guide to install Momix APK on Android devices.',
            'step': steps.map((step, i) => ({
              '@type': 'HowToStep',
              'position': i + 1,
              'name': step.title,
              'text': step.desc
            }))
          })
        }}
      />
    </div>
  );
}
