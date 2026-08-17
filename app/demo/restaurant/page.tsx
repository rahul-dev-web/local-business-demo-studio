import { ArrowLeft, ArrowRight, Clock3, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl, studioConfig } from "@/lib/studio-config";

const dishes = [
  {
    name: "Truffle Pasta",
    detail: "Creamy parmesan, wild mushrooms & herbs",
    price: "₹420",
    image: "https://lp-cms-production.imgix.net/2024-08/GettyImages-1594118929.jpg?auto=format&fit=crop&w=1200&q=82",
    alt: "Creamy truffle pasta topped with shaved truffle",
  },
  {
    name: "Smoked Paneer",
    detail: "Charred paneer, mint chutney & house spices",
    price: "₹360",
    image: "https://reshamdhaba.com/img/menu-16.jpg",
    alt: "Grilled paneer tikka with vegetables and mint chutney",
  },
  {
    name: "Classic Tiramisu",
    detail: "Espresso, mascarpone & cocoa",
    price: "₹240",
    image: "https://resizer.otstatic.com/v2/photos/xlarge/1/92427562.jpg",
    alt: "Classic tiramisu dusted with cocoa on a restaurant plate",
  },
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
    <main className="min-h-screen overflow-x-hidden bg-[#fcfbf8] pb-24 text-[#171614] sm:pb-0">
      <nav className="mx-auto flex min-h-14 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[10px] font-black uppercase tracking-wide !text-black shadow-sm"><ArrowLeft size={14} /> All demos</a>
        <span className="hidden text-[10px] font-black uppercase tracking-[0.18em] text-black/35 sm:block">Restaurant · Café concept</span>
      </nav>

      <section className="relative overflow-hidden border-y border-black/10 bg-[#f5eee4]">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[#e7bd79]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-[#a76e3f]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-7 px-4 py-8 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] !text-black/60">A modern dining experience</span>
            <h1 className="mt-4 max-w-3xl text-[2.7rem] font-black leading-[0.92] tracking-[-0.07em] sm:text-6xl lg:text-[5.7rem]">Good food.<br /><span className="text-black/30">Good reason</span><br />to come back.</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 !text-black/60 sm:mt-6 sm:text-lg sm:leading-8">A premium restaurant website concept built to turn local discovery into menu views, reservations, directions and enquiries.</p>
            <div className="mt-5 grid gap-2.5 sm:flex sm:flex-wrap">
              <a href="#reserve" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#171614] px-5 py-3 text-sm font-black !text-white shadow-[0_12px_30px_rgba(23,22,20,.14)] sm:w-auto">Request a website <ArrowRight size={16} /></a>
              <a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#176b3a] px-5 py-3 text-sm font-black !text-white shadow-sm sm:w-auto"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[1.5rem] border border-black/10 bg-white/80 p-2.5 shadow-[0_20px_55px_rgba(0,0,0,.08)] sm:max-w-md sm:p-4">
            <div className="aspect-[4/3] rounded-[1.1rem] bg-[#24201b] p-4 text-white sm:p-6">
              <div className="flex h-full flex-col justify-between rounded-[0.9rem] border border-white/10 p-4 sm:p-5">
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-white/45"><span>Maison Table</span><span>01</span></div>
                <div><p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#e7bd79]">Kitchen & café</p><p className="mt-2 text-3xl font-black leading-[0.95] tracking-[-0.06em] sm:text-4xl">Made fresh.<br />Served warm.</p></div>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold"><span className="rounded-lg bg-white/10 p-2.5">Menu</span><span className="rounded-lg bg-white/10 p-2.5">Gallery</span><span className="rounded-lg bg-white/10 p-2.5">Reserve</span><span className="rounded-lg bg-[#e7bd79] p-2.5 !text-black">Find us →</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between gap-3"><div><p className="text-[9px] font-black uppercase tracking-[0.2em] !text-black/40">From the kitchen</p><h2 className="mt-1.5 text-2xl font-black tracking-[-0.055em] sm:text-5xl">Signature plates.</h2></div><span className="hidden text-xs font-semibold !text-black/35 sm:block">Curated menu · 2026</span></div>
        <div className="mt-5 grid gap-2.5 md:grid-cols-3 md:gap-4">
          {dishes.map((dish) => (
            <article key={dish.name} className="group overflow-hidden rounded-[1.25rem] border border-black/10 bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,.035)] sm:p-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[0.9rem] bg-[#e9dfd3]">
                <img src={dish.image} alt={dish.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div><h3 className="text-base font-black tracking-tight sm:text-lg">{dish.name}</h3><p className="mt-1 text-[11px] leading-5 !text-black/45">{dish.detail}</p></div>
                <span className="shrink-0 text-xs font-black">{dish.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#171614] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20"><p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#e7bd79]">Built for local discovery</p><h2 className="mt-2 max-w-3xl text-2xl font-black tracking-[-0.055em] sm:text-5xl">Everything a hungry customer needs before they visit.</h2><div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">{features.map(([number, title, detail]) => <article key={number} className="rounded-[1rem] border border-white/10 bg-white/[.045] p-3.5 sm:rounded-2xl sm:p-6"><span className="flex size-7 items-center justify-center rounded-full border border-white/10 text-[9px] font-black text-white/45">{number}</span><h3 className="mt-5 text-sm font-black sm:text-lg">{title}</h3><p className="mt-1.5 text-[10px] leading-5 text-white/45 sm:text-sm">{detail}</p></article>)}</div></div>
      </section>

      <section id="reserve" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,.04)] sm:p-10 lg:p-14"><div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[9px] font-black uppercase tracking-[0.2em] !text-black/40">Make this yours</p><h2 className="mt-2 max-w-2xl text-2xl font-black tracking-[-0.055em] sm:text-5xl">Your brand. Your menu. Your customers.</h2><p className="mt-3 max-w-xl text-xs leading-5 !text-black/50 sm:text-sm sm:leading-6">This demo can be customised with your real restaurant's menu, photos, location, timings, offers and reservation flow.</p></div><div className="grid gap-2 sm:flex lg:flex-col"><a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#176b3a] px-5 py-3 text-sm font-black !text-white"><MessageCircle size={16} /> Discuss on WhatsApp</a><a href={getPhoneUrl()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold !text-black"><Phone size={16} /> Call</a></div></div></div>
      </section>

      <section className="border-y border-black/10 bg-[#f5eee4]"><div className="mx-auto grid max-w-7xl gap-2.5 px-4 py-7 sm:grid-cols-3 sm:px-6 sm:py-10 lg:px-8"><div className="flex items-center gap-3 rounded-[1rem] bg-white/60 p-3.5"><Clock3 className="shrink-0" size={18} /><div><p className="text-xs font-bold">Open daily</p><p className="mt-0.5 text-[10px] !text-black/45">9:00 AM – 10:00 PM</p></div></div><div className="flex items-center gap-3 rounded-[1rem] bg-white/60 p-3.5"><MapPin className="shrink-0" size={18} /><div><p className="text-xs font-bold">Easy to find</p><p className="mt-0.5 text-[10px] !text-black/45">Google Maps & directions</p></div></div><div className="flex items-center gap-3 rounded-[1rem] bg-white/60 p-3.5"><Star className="shrink-0" size={18} /><div><p className="text-xs font-bold">Loved locally</p><p className="mt-0.5 text-[10px] !text-black/45">Reviews & social proof</p></div></div></div></section>

      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 rounded-2xl border border-black/10 bg-white/95 p-1.5 shadow-2xl backdrop-blur sm:hidden"><a href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#176b3a] py-3 text-xs font-black !text-white"><MessageCircle size={15} /> WhatsApp</a><a href={getPhoneUrl()} className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#171614] py-3 text-xs font-black !text-white"><Phone size={15} /> Call</a></div>
    </main>
  );
}
