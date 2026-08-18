"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MessageCircle, MoveUpRight } from "lucide-react";
import { DemoCard, demos } from "@/data/demos";
import { getWhatsAppUrl, studioConfig } from "@/lib/studio-config";

const contactMessage = studioConfig.whatsappMessage;
const categories = ["All", "Food", "Beauty", "Health", "Education", "Hospitality", "Retail", "Services", "Property"];

function PreviewWindow({ demo, className = "" }: { demo: (typeof demos)[number]; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,.16)] ${className}`}>
      <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-white px-3">
        <span className="size-1.5 rounded-full bg-black/15" /><span className="size-1.5 rounded-full bg-black/10" /><span className="size-1.5 rounded-full bg-black/10" />
        <span className="ml-2 truncate text-[7px] font-bold text-black/35">{demo.title}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${demo.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute inset-x-3 bottom-3">
          <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/70">Website concept</p>
          <p className="mt-0.5 text-sm font-black tracking-tight text-white">{demo.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featured = demos[0];
  const previewDemos = demos.slice(0, 3);
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredDemos = useMemo(
    () => activeCategory === "All" ? demos : demos.filter((demo) => demo.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#11110f]">
      <nav className="sticky top-0 z-50 mx-auto flex min-h-16 max-w-7xl items-center justify-between border-b border-black/5 bg-[#f6f5f1]/90 px-5 py-4 backdrop-blur-md sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="text-sm font-black tracking-[-0.04em]">{studioConfig.name}</a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#demos" className="text-xs font-semibold text-black/50 transition hover:text-black">Explore demos</a>
          <a href="#why" className="text-xs font-semibold text-black/50 transition hover:text-black">Why it works</a>
        </div>
        <a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#11110f] px-4 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">Talk on WhatsApp <MessageCircle size={14} /></a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-20">
        <div>
          <h1 className="max-w-3xl text-[3.15rem] font-black leading-[0.9] tracking-[-0.075em] sm:text-6xl lg:text-[6.2rem]">See how your business could look online.</h1>
          <p className="mt-6 max-w-xl text-[15px] leading-6 text-black/55 sm:mt-7 sm:text-lg sm:leading-8">Explore premium website concepts for cafés, salons, clinics, stores and more — built around how local customers discover, compare and contact businesses like yours.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#demos" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#11110f] px-5 py-3.5 text-sm font-black text-white shadow-[0_12px_35px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5">Explore website demos <ArrowRight size={17} /></a>
            <a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-black/20">Build my website</a>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-black/10 pt-5 sm:flex sm:flex-wrap sm:gap-x-6">
            {["10+ industry designs", "Mobile first", "WhatsApp ready", "Local business focused"].map((item) => <span key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-black/45"><Check size={12} className="text-black/70" />{item}</span>)}
          </div>
        </div>

        <div className="relative min-h-[300px] sm:min-h-[430px] lg:min-h-[520px]">
          <div className="absolute right-0 top-3 w-[88%] rotate-[1deg] sm:w-[84%]"><PreviewWindow demo={previewDemos[0]} /></div>
          <div className="absolute bottom-3 left-0 z-10 w-[58%] -rotate-[3deg] sm:bottom-5 sm:w-[52%]"><PreviewWindow demo={previewDemos[1]} /></div>
          <div className="absolute bottom-10 right-0 z-20 w-[47%] rotate-[4deg] sm:bottom-16 sm:w-[42%]"><PreviewWindow demo={previewDemos[2]} /></div>
        </div>
      </section>

      <section id="demos" className="scroll-mt-20 border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Explore by industry</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-5xl">Find your kind of business.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">Open a complete website concept and see how the experience can be shaped around your customers.</p>
            </div>
            <span className="hidden shrink-0 rounded-full border border-black/10 bg-[#f6f5f1] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-black/45 sm:inline-flex">{filteredDemos.length} concepts</span>
          </div>

          <div className="-mx-1 mb-7 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Filter demos by industry">
            {categories.map((category) => {
              const selected = activeCategory === category;
              return <button key={category} type="button" role="tab" aria-selected={selected} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all ${selected ? "border-[#11110f] bg-[#11110f] text-white shadow-sm" : "border-black/10 bg-[#f6f5f1] text-black/55 hover:border-black/20 hover:text-black"}`}>{category}</button>;
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDemos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 bg-[#f6f5f1]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
          <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Why it works</p><h2 className="mt-3 max-w-xl text-3xl font-black leading-[1] tracking-[-0.055em] sm:text-5xl">A website should make the next step obvious.</h2></div>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {[{ no: "01", title: "Look established", text: "Give new customers a clear place to understand your business before they call or visit." }, { no: "02", title: "Show what you offer", text: "Services, products, pricing, photos and important details can live in one focused experience." }, { no: "03", title: "Make contact easy", text: "Put WhatsApp, calls, directions and enquiries exactly where customers need them." }, { no: "04", title: "Own the experience", text: "Instead of relying only on social profiles, give your business a professional home of its own." }].map((item) => <div key={item.no} className="grid gap-3 py-5 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-6"><span className="text-xs font-black text-black/30">{item.no}</span><div><p className="text-sm font-black sm:text-base">{item.title}</p><p className="mt-1.5 max-w-xl text-sm leading-6 text-black/50">{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="p-6 sm:p-10 lg:p-12"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Featured demo</p><h2 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl">A restaurant website built to turn discovery into action.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-black/50">Strong visuals are only the start. The experience puts the menu, trust signals, location and direct contact where hungry local customers need them.</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold text-black/55"><span>✓ Menu</span><span>✓ Location</span><span>✓ WhatsApp</span><span>✓ Reviews</span><span>✓ Gallery</span></div><a href={`/demo/${featured.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#11110f] px-5 text-sm font-black text-white transition hover:-translate-y-0.5">View featured demo <MoveUpRight size={16} /></a></div>
            <div className="relative min-h-[260px] overflow-hidden bg-black sm:min-h-[330px]"><div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]" style={{ backgroundImage: `url(${featured.image})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /><div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{featured.tag}</p><p className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">{featured.title}</p></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8"><div className="rounded-[1.7rem] bg-[#11110f] px-6 py-8 text-white shadow-[0_20px_60px_rgba(0,0,0,.12)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-12"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Like what you see?</p><div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><h2 className="max-w-3xl text-3xl font-black tracking-[-0.055em] sm:text-5xl">Let&apos;s turn one of these concepts into your website.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/50">Your logo, photos, services, pricing, location, WhatsApp and brand — all built around your customers.</p></div><a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5">Talk on WhatsApp <MessageCircle size={17} /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 px-5 py-7 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div><span className="font-black text-black/70">{studioConfig.name}</span><span className="ml-2">Websites built for local businesses.</span></div><span>{studioConfig.email} · {studioConfig.phone}</span></footer>
    </main>
  );
}
