import { ArrowRight, Sparkles } from "lucide-react";
import { DemoCard, demos } from "@/data/demos";
import { getWhatsAppUrl } from "@/lib/studio-config";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#f3f2ee_48%,#e9e8e3_100%)] text-[#11110f]">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="text-sm font-black tracking-[-0.04em]">YOUR<span className="text-black/35">STUDIO</span></a>
        <a href="#demos" className="inline-flex min-h-10 items-center rounded-full border border-black/10 bg-white/80 px-4 text-xs font-bold shadow-sm backdrop-blur">View demos</a>
      </nav>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-9 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black/55 shadow-sm backdrop-blur"><Sparkles size={13} aria-hidden="true" /> Website demos for local business</div>
          <h1 className="text-[3.15rem] font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-[7rem]">Websites built<br /><span className="text-black/25">for local</span> business.</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-6 text-black/55 sm:mt-7 sm:text-lg sm:leading-8">Explore polished, conversion-focused website concepts made for the businesses people discover every day in their local area.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#demos" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#11110f] px-5 py-3.5 text-sm font-bold !text-white shadow-[0_10px_30px_rgba(0,0,0,.14)] sm:w-auto">Explore website demos <ArrowRight size={17} aria-hidden="true" /></a>
            <a href={getWhatsAppUrl("Hi, I visited your Local Business Demo Studio and would like to discuss a website for my business.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-bold !text-black shadow-sm sm:w-auto">Build my website</a>
          </div>
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-7xl scroll-mt-5 px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mb-5 flex items-end justify-between gap-3"><div><p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Choose an industry</p><h2 className="text-2xl font-black tracking-[-0.05em] sm:text-4xl">Demo websites for</h2></div><span className="shrink-0 text-[11px] font-semibold text-black/35">{demos.length} demos</span></div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">{demos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-6 sm:pb-16 lg:px-8"><div className="rounded-[1.5rem] bg-[#11110f] px-5 py-7 text-white shadow-[0_20px_60px_rgba(0,0,0,.12)] sm:rounded-[2rem] sm:px-10 sm:py-12"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Have a business?</p><h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-5xl">Like a demo? Let&apos;s make it yours.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/55">Your branding, photos, services, pricing, location and contact details — designed around your customers.</p><a href={getWhatsAppUrl("Hi, I visited your Local Business Demo Studio and would like to discuss a website for my business.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#d8ff3e] px-5 py-3.5 text-sm font-black !text-black sm:w-auto">Discuss your website <ArrowRight size={17} aria-hidden="true" /></a></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-black/10 px-5 py-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><span>YOUR STUDIO</span><span>Local Business Demo Studio · 2026</span></footer>
    </main>
  );
}
