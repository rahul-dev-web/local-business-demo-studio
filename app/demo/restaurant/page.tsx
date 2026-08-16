import { ArrowLeft, ArrowRight, Clock3, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl, studioConfig } from "@/lib/studio-config";

const dishes = [
  { name: "Truffle Pasta", detail: "Creamy parmesan, wild mushrooms & herbs", price: "₹420" },
  { name: "Smoked Paneer", detail: "Charred paneer, mint chutney & house spices", price: "₹360" },
  { name: "Classic Tiramisu", detail: "Espresso, mascarpone & cocoa", price: "₹240" },
];

const features = [
  ["01", "Signature menu", "Make your best dishes impossible to miss."],
  ["02", "Easy reservations", "Turn a visit into a booking with clear CTAs."],
  ["03", "Local discovery", "Show location, timings and directions instantly."],
  ["04", "Direct enquiries", "Give customers one-tap WhatsApp and call options."],
];

const message = studioConfig.whatsappMessage;

export default function RestaurantDemo() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#171614] pb-24 sm:pb-0">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide"><ArrowLeft size={15} /> All demos</a>
        <span className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-black/35 sm:block">Restaurant · Café concept</span>
      </nav>

      <section className="border-y border-black/10 bg-[#f3eadc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-black/10 bg-white/65 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black/55">A modern dining experience</span>
            <h1 className="mt-6 max-w-3xl text-[3.25rem] font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-[6.2rem]">Good food.<br /><span className="text-black/30">Good reason</span><br />to come back.</h1>
            <p className="mt-5 max-w-xl text-[15px] leading-6 text-black/60 sm:mt-7 sm:text-lg sm:leading-8">A premium restaurant website concept built to turn local discovery into menu views, reservations, directions and enquiries.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#reserve" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171614] px-5 py-3.5 text-sm font-black !text-white shadow-[0_12px_30px_rgba(23,22,20,.14)] sm:w-auto">Reserve a table <ArrowRight size={17} /></a>
              <a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-bold !text-black sm:w-auto"><MessageCircle size={17} /> WhatsApp</a>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-black/10 bg-white/60 p-3 shadow-[0_25px_70px_rgba(0,0,0,.08)] sm:p-5">
            <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.25rem] bg-[#24201b] p-5 text-white sm:p-7">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/45"><span>Maison Table</span><span>01</span></div>
              <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e7bd79]">Kitchen & café</p><p className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl">Made fresh.<br />Served warm.</p></div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-bold"><span className="rounded-xl bg-white/10 p-3">Menu</span><span className="rounded-xl bg-white/10 p-3">Gallery</span><span className="rounded-xl bg-white/10 p-3">Reserve</span><span className="rounded-xl bg-[#e7bd79] p-3 text-black">Find us →</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">From the kitchen</p><h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-5xl">Signature plates.</h2></div>
          <span className="hidden text-xs font-semibold text-black/35 sm:block">Curated menu · 2026</span>
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {dishes.map((dish) => <article key={dish.name} className="rounded-[1.4rem] border border-black/10 bg-white p-5 sm:p-6"><div className="aspect-[4/3] rounded-xl bg-[radial-gradient(circle_at_35%_35%,#e9c98f,#a76e3f_45%,#34241c_100%)]" /><div className="mt-5 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black tracking-tight">{dish.name}</h3><p className="mt-1 text-xs leading-5 text-black/45">{dish.detail}</p></div><span className="shrink-0 text-sm font-black">{dish.price}</span></div></article>)}
        </div>
      </section>

      <section className="bg-[#171614] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e7bd79]">Built for local discovery</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.055em] sm:text-5xl">Everything a hungry customer needs before they visit.</h2>
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {features.map(([number, title, detail]) => <article key={number} className="rounded-2xl border border-white/10 bg-white/[.04] p-4 sm:p-6"><span className="text-[10px] font-black text-white/30">{number}</span><h3 className="mt-8 text-base font-black sm:text-lg">{title}</h3><p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section id="reserve" className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Visit the restaurant</p><h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.055em] sm:text-5xl">Make the next visit an easy decision.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-black/50">This demo can be customised with a real restaurant's menu, photos, location, timings, offers and reservation flow.</p></div>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col"><a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#171614] px-6 py-3.5 text-sm font-black !text-white"><MessageCircle size={17} /> Discuss on WhatsApp</a><a href={getPhoneUrl()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold !text-black"><Phone size={17} /> Call</a></div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f3eadc]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:grid-cols-3 sm:px-6 sm:py-12 lg:px-8"><div className="flex gap-3"><Clock3 className="shrink-0" size={19} /><div><p className="text-sm font-bold">Open daily</p><p className="mt-1 text-xs text-black/45">9:00 AM – 10:00 PM</p></div></div><div className="flex gap-3"><MapPin className="shrink-0" size={19} /><div><p className="text-sm font-bold">Easy to find</p><p className="mt-1 text-xs text-black/45">Google Maps & local directions</p></div></div><div className="flex gap-3"><Star className="shrink-0" size={19} /><div><p className="text-sm font-bold">Loved locally</p><p className="mt-1 text-xs text-black/45">Reviews & social proof</p></div></div></div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-50 flex gap-2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur sm:hidden"><a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#171614] py-3 text-sm font-bold !text-white"><MessageCircle size={16} /> WhatsApp</a><a href={getPhoneUrl()} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 py-3 text-sm font-bold !text-black"><Phone size={16} /> Call</a></div>
    </main>
  );
}
