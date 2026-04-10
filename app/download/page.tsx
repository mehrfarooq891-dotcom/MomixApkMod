import Link from 'next/link';
import { 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  Clock,
  Smartphone,
  History
} from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';

export const metadata = {
  title: 'Download Momix APK Latest Version v3.2.1 (Official)',
  description: 'Download the latest version of Momix APK for Android. 100% safe, verified, and virus-free. Get access to free movies and live TV.',
};

export default function DownloadPage() {
  const previousVersions = [
    { version: 'v3.2.0', size: '17.8 MB', date: 'March 2026' },
    { version: 'v3.1.9', size: '17.5 MB', date: 'February 2026' },
    { version: 'v3.1.5', size: '16.9 MB', date: 'January 2026' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Download Momix APK Latest Version</h1>
          <p className="text-[#999999] text-lg">
            Get the official, secure, and ad-free version of Momix for your Android device.
          </p>
        </div>

        {/* Main Download Card */}
        <div className="bg-[#141414] rounded-2xl border border-white/10 p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#666666] flex items-center gap-2"><Smartphone size={16} /> Version</span>
                  <span className="text-white font-bold">v3.2.1 (Latest)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#666666] flex items-center gap-2"><FileText size={16} /> File Size</span>
                  <span className="text-white font-bold">18 MB</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#666666] flex items-center gap-2"><Smartphone size={16} /> Android</span>
                  <span className="text-white font-bold">5.0+</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#666666] flex items-center gap-2"><Clock size={16} /> Updated</span>
                  <span className="text-white font-bold">April 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666] flex items-center gap-2"><Download size={16} /> Downloads</span>
                  <span className="text-white font-bold">2M+</span>
                </div>
              </div>
              <DownloadButton className="w-full" />
            </div>
            <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#e50914]" size={20} /> Security Status
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#999999]">
                  <CheckCircle2 className="text-green-500" size={16} /> Virus Free & No Malware
                </li>
                <li className="flex items-center gap-3 text-sm text-[#999999]">
                  <CheckCircle2 className="text-green-500" size={16} /> Safe & Secure Download
                </li>
                <li className="flex items-center gap-3 text-sm text-[#999999]">
                  <CheckCircle2 className="text-green-500" size={16} /> Verified by Play Protect
                </li>
                <li className="flex items-center gap-3 text-sm text-[#999999]">
                  <CheckCircle2 className="text-green-500" size={16} /> No Hidden Permissions
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#e50914]/5 rounded-xl border border-[#e50914]/10">
                <p className="text-xs text-[#e50914] leading-relaxed">
                  <strong>Note:</strong> If you get a "Blocked by Play Protect" warning, click on "Install Anyway". This is common for third-party apps not on the Play Store.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="text-[#e50914]" size={24} /> Installation Requirements
          </h2>
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3 text-[#999999]">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#e50914] shrink-0" />
                Android Version 5.0 or higher is required.
              </li>
              <li className="flex items-start gap-3 text-[#999999]">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#e50914] shrink-0" />
                At least 100MB of free storage space.
              </li>
              <li className="flex items-start gap-3 text-[#999999]">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#e50914] shrink-0" />
                Active internet connection for streaming.
              </li>
              <li className="flex items-start gap-3 text-[#999999]">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#e50914] shrink-0" />
                "Unknown Sources" must be enabled in settings.
              </li>
            </ul>
          </div>
        </div>

        {/* Previous Versions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <History className="text-[#e50914]" size={24} /> Previous Versions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-[#666666] font-medium">Version</th>
                  <th className="py-4 px-4 text-[#666666] font-medium">Size</th>
                  <th className="py-4 px-4 text-[#666666] font-medium">Release Date</th>
                  <th className="py-4 px-4 text-[#666666] font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {previousVersions.map((v, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white font-bold">{v.version}</td>
                    <td className="py-4 px-4 text-[#999999]">{v.size}</td>
                    <td className="py-4 px-4 text-[#999999]">{v.date}</td>
                    <td className="py-4 px-4 text-right">
                      <Link href="/download" className="text-[#e50914] font-bold text-sm hover:underline">Download</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
