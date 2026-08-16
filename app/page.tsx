import { ArrowRight, Check, Sparkles } from "lucide-react";
import { DemoCard, demos } from "@/data/demos";
import { getWhatsAppUrl } from "@/lib/studio-config";

const benefits = ["Mobile-first experiences", "WhatsApp & call-ready CTAs", "Google Maps & local discovery", "Professional galleries and service sections", "Clear enquiry and conversion paths", "Fast, SEO-friendly foundations"];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="font-black tracking-[-0.04em]" aria-label="Your Studio home">YOUR<span className="text-black/35">STUDIO</span></a>
        <a href="#demos" className="inline-flex min-h-10 items-center rounded-full border border-black/10 px-4 text-xs font-bold sm:border-0 sm:px-0 sm:text-sm">Explore demos <span className="ml-1.5" aria-hidden="true">↓</span></a>
      </nav>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/60 sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.16em]"><Sparkles size={13} aria-hidden="true" /> Website demos for local business</div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-black/40 sm:hidden">Website demos · local businesses</p>
          <h1 className="text-[3.35rem] font-black leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem] lg:leading-[0.88]">Websites built<br /><span className="text-black/30">for local</span> business.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:mt-8 sm:text-xl sm:leading-8">Explore polished, conversion-focused website concepts made for the businesses people discover every day in their local area.</p>
          <a href="#demos" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-black px-5 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] sm:mt-9 sm:px-6">Explore website demos <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10 sm:gap-6">
          <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 sm:mb-3 sm:text-xs">Choose an industry</p><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">Demo websites for</h2></div>
          <span className="shrink-0 text-xs text-black/40 sm:text-sm">{demos.length} demos</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{demos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</div>
      </section>

      <section className="border-y border-black/10 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-24"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 sm:text-xs">Built for outcomes</p><h2 className="max-w-xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">Not just a pretty website.</h2><p className="mt-5 max-w-lg leading-7 text-black/55">Every demo is structured around the actions that matter to a local business: calls, messages, visits, bookings and enquiries.</p></div><div className="grid gap-3 sm:grid-cols-2">{benefits.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-black/10 p-5 text-sm font-semibold"><Check size={18} className="mt-0.5 shrink-0" aria-hidden="true" />{item}</div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] bg-black px-6 py-10 text-white sm:px-12 sm:py-16 lg:px-16"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-xs">Have a business?</p><h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">Like a demo? Let&apos;s make it yours.</h2><p className="mt-5 max-w-xl leading-7 text-white/55">Your real branding, photos, services, pricing, location and contact details — designed around your customers.</p><a href={getWhatsAppUrl("Hi, I visited your Local Business Demo Studio and would like to discuss a website for my business.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#d8ff3e] px-6 py-3.5 text-sm font-black text-black">Discuss your website <ArrowRight size={17} aria-hidden="true" /></a></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-black/10 px-5 py-8 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>YOUR STUDIO</span><span>Local Business Demo Studio · 2026</span></footer>
    </main>
  );
}
