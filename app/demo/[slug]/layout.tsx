import type { ReactNode } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl, studioConfig } from "@/lib/studio-config";

export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <div className="fixed inset-x-0 bottom-0 z-50 hidden px-5 pb-5 sm:block">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/95 p-2 pl-4 shadow-[0_18px_60px_rgba(0,0,0,.16)] backdrop-blur-xl">
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-black">Like this website?</p>
            <p className="truncate text-xs text-black/45">Let&apos;s customise it for your business.</p>
          </div>
          <div className="ml-auto flex gap-2">
            <a href={getPhoneUrl()} aria-label={`Call ${studioConfig.name}`} className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 px-4 py-2.5 text-xs font-bold transition hover:bg-black hover:text-white"><Phone size={13} /> Call</a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label={`Discuss your website with ${studioConfig.name} on WhatsApp`} className="inline-flex items-center gap-1.5 rounded-xl bg-black px-4 py-2.5 text-xs font-black text-white transition hover:scale-[1.02]"><MessageCircle size={14} /> I want a website like this</a>
          </div>
        </div>
      </div>
    </>
  );
}
