import { ArrowRight, Check, MessageCircle, MoveUpRight } from "lucide-react";
import { DemoCard, demos } from "@/data/demos";
import { getWhatsAppUrl, studioConfig } from "@/lib/studio-config";

const contactMessage = studioConfig.whatsappMessage;

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

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f5f1] text-[#11110f]">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="text-sm font-black tracking-[-0.04em]">{studioConfig.name}</a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#why" className="text-xs font-semibold text-black/50 transition hover:text-black">Why a website?</a>
          <a href="#demos" className="text-xs font-semibold text-black/50 transition hover:text-black">All demos</a>
        </div>
        <a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#11110f] px-4 text-xs font-bold text-white shadow-sm transition hover:-translate-y-0.5">Talk on WhatsApp <MessageCircle size={14} /></a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-black/50 shadow-sm">Local business websites</div>
          <h1 className="max-w-3xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.075em] sm:text-6xl lg:text-[6.2rem]">Turn your local business into a brand people trust.</h1>
          <p className="mt-6 max-w-xl text-[15px] leading-6 text-black/55 sm:mt-7 sm:text-lg sm:leading-8">Explore premium website concepts built around how local customers discover, compare and contact businesses like yours.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#demos" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#11110f] px-5 py-3.5 text-sm font-black text-white shadow-[0_12px_35px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5">Explore website demos <ArrowRight size={17} /></a>
            <a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-bold shadow-sm transition hover:border-black/20">Build my website</a>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-black/10 pt-5 sm:flex sm:flex-wrap sm:gap-x-6">
            {["10+ industry designs", "Mobile first", "WhatsApp ready", "Local business focused"].map((item) => <span key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-black/45"><Check size={12} className="text-black/70" />{item}</span>)}
          </div>
        </div>

        <div className="relative min-h-[330px] sm:min-h-[450px] lg:min-h-[540px]">
          <div className="absolute right-0 top-3 w-[88%] rotate-[1deg] sm:w-[84%]"><PreviewWindow demo={previewDemos[0]} /></div>
          <div className="absolute bottom-3 left-0 z-10 w-[58%] -rotate-[3deg] sm:bottom-5 sm:w-[52%]"><PreviewWindow demo={previewDemos[1]} /></div>
          <div className="absolute bottom-10 right-0 z-20 w-[47%] rotate-[4deg] sm:bottom-16 sm:w-[42%]"><PreviewWindow demo={previewDemos[2]} /></div>
        </div>
      </section>

      <section id="why" className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-20">
          <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Why a website?</p><h2 className="mt-3 max-w-xl text-3xl font-black leading-[1] tracking-[-0.055em] sm:text-5xl">Your first impression already happens online.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{ title: "Look established", text: "Give new customers a clear place to understand your business before they call or visit." }, { title: "Show what you offer", text: "Services, products, pricing, photos and important details can live in one focused experience." }, { title: "Make contact easy", text: "Put WhatsApp, calls, directions and enquiries exactly where customers need them." }, { title: "Own the experience", text: "Instead of relying only on social profiles, give your business a professional home of its own." }].map((item) => <div key={item.title} className="rounded-2xl border border-black/10 p-5 sm:p-6"><p className="text-sm font-black">{item.title}</p><p className="mt-2 text-sm leading-6 text-black/50">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-7xl scroll-mt-5 px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Explore by industry</p><h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-5xl">See what your business could look like.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">Choose an industry to open a complete website concept. Each demo is designed around the way that type of business actually sells.</p></div><span className="hidden shrink-0 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-black/45 sm:inline-flex">{demos.length} concepts</span></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{demos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="overflow-hidden rounded-[1.7rem] border border-black/10 bg-white shadow-sm sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="p-6 sm:p-10 lg:p-12"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/35">Featured demo</p><h2 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl">A complete restaurant website concept.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-black/50">Start with the experience that makes the value easiest to see: strong visuals, a menu, trust signals, location and direct contact.</p><a href={`/demo/${featured.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#11110f] px-5 text-sm font-black text-white">View featured demo <MoveUpRight size={16} /></a></div>
            <div className="relative min-h-[260px] overflow-hidden bg-black sm:min-h-[330px]"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${featured.image})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /><div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{featured.tag}</p><p className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">{featured.title}</p></div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8"><div className="rounded-[1.7rem] bg-[#11110f] px-6 py-8 text-white shadow-[0_20px_60px_rgba(0,0,0,.12)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-12"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Like what you see?</p><div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><h2 className="max-w-3xl text-3xl font-black tracking-[-0.055em] sm:text-5xl">Let&apos;s turn one of these concepts into your website.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/50">Your logo, photos, services, pricing, location, WhatsApp and brand — all built around your customers.</p></div><a href={getWhatsAppUrl(contactMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5">Talk on WhatsApp <MessageCircle size={17} /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 px-5 py-7 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><div><span className="font-black text-black/70">{studioConfig.name}</span><span className="ml-2">Websites built for local businesses.</span></div><span>{studioConfig.email} · {studioConfig.phone}</span></footer>
    </main>
  );
}
