import type { ReactNode } from "react";

const STUDIO_WHATSAPP = "919999999999";
const STUDIO_PHONE = "+919999999999";

export default function DemoLayout({ children }: { children: ReactNode }) {
  const message = encodeURIComponent("Hi, I saw one of your local business website demos and would like to discuss a website for my business.");

  return (
    <>
      {children}
      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/95 p-2 pl-4 shadow-[0_18px_60px_rgba(0,0,0,.16)] backdrop-blur-xl">
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-bold">Like this demo?</p>
            <p className="truncate text-xs text-black/45">Let&apos;s customise it for your business.</p>
          </div>
          <div className="ml-auto flex gap-2">
            <a href={`tel:${STUDIO_PHONE}`} aria-label="Call the studio" className="rounded-xl border border-black/10 px-4 py-2.5 text-xs font-bold transition hover:bg-black hover:text-white">Call</a>
            <a href={`https://wa.me/${STUDIO_WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Discuss your website on WhatsApp" className="rounded-xl bg-black px-4 py-2.5 text-xs font-bold text-white transition hover:scale-[1.02]">WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
