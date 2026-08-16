import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { demos, getDemo } from "@/data/demos";

const WHATSAPP = "https://wa.me/919981977828";
const PHONE = "tel:+919981977828";

type DemoContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  services: string[];
  accent: string;
};

const content: Record<string, DemoContent> = {
  restaurant: { eyebrow: "A modern dining experience", headline: "Good food. Great moments. Right around the corner.", intro: "A conversion-focused restaurant website built to turn local discovery into menu views, calls, directions and reservations.", services: ["Signature menu & chef picks", "Private dining & reservations", "Photo-led food gallery", "Opening hours & directions"], accent: "bg-amber-50" },
  salon: { eyebrow: "Beauty, grooming & confidence", headline: "Look good. Feel confident. Book in minutes.", intro: "A premium salon experience designed to showcase your work and turn local visitors into appointments.", services: ["Services & transparent pricing", "Stylist profiles & portfolio", "Packages & seasonal offers", "Appointment and WhatsApp CTAs"], accent: "bg-[#f8eee9]" },
  gym: { eyebrow: "Train with purpose", headline: "Turn local interest into your next member.", intro: "A high-energy fitness experience built around programs, memberships, trainers and a frictionless free-trial journey.", services: ["Membership plans", "Training programs", "Trainer profiles", "Free trial conversion"], accent: "bg-lime-50" },
  clinic: { eyebrow: "Care people can trust", headline: "Make it easier for patients to choose and contact you.", intro: "A calm, professional clinic experience that puts doctors, services, timings and appointments first.", services: ["Doctor & specialization profiles", "Medical services", "Appointment requests", "Timings & location"], accent: "bg-sky-50" },
  coaching: { eyebrow: "Learn. Prepare. Achieve.", headline: "Give students a reason to choose your institute.", intro: "A results-led coaching website that communicates courses, faculty, outcomes and admissions clearly.", services: ["Courses & batches", "Faculty profiles", "Results & achievements", "Admission enquiry"], accent: "bg-violet-50" },
  hotel: { eyebrow: "Stay somewhere memorable", headline: "Turn a search for a room into a booking enquiry.", intro: "A hospitality-first website for showcasing rooms, amenities, location and the experience around your property.", services: ["Rooms & suites", "Amenities", "Gallery", "Booking enquiry"], accent: "bg-stone-100" },
  bakery: { eyebrow: "Made for moments", headline: "Make every cake and custom order easier to discover.", intro: "A product-led bakery website designed for browsing, occasions, custom orders and direct enquiries.", services: ["Signature products", "Custom cakes", "Occasion collections", "Order enquiries"], accent: "bg-pink-50" },
  retail: { eyebrow: "Your neighbourhood store", headline: "Bring your local store online without losing its personality.", intro: "A clean retail showcase for products, offers, directions and direct customer enquiries.", services: ["Featured products", "Offers & new arrivals", "Store information", "Direct enquiries"], accent: "bg-blue-50" },
  automobile: { eyebrow: "Reliable service, every time", headline: "Build trust before the customer reaches your garage.", intro: "A service-focused automotive website that makes packages, expertise, reviews and bookings easy to understand.", services: ["Service packages", "Workshop expertise", "Customer reviews", "Service booking"], accent: "bg-slate-100" },
  "real-estate": { eyebrow: "Find the right place", headline: "Property discovery designed around qualified enquiries.", intro: "A premium property experience for presenting listings, locations and the details buyers need before they call.", services: ["Featured properties", "Property details", "Location highlights", "Lead capture"], accent: "bg-emerald-50" },
};

const restaurantMenu = [
  { name: "Smoky Paneer Tikka", price: "₹289", detail: "Charred paneer, peppers & house marinade" },
  { name: "Creamy Alfredo Pasta", price: "₹349", detail: "Silky parmesan sauce with herbs" },
  { name: "Farmhouse Pizza", price: "₹399", detail: "Fresh vegetables, mozzarella & basil" },
  { name: "Classic Masala Chai", price: "₹99", detail: "Slow-brewed tea with aromatic spices" },
];

export function generateStaticParams() { return demos.map((demo) => ({ slug: demo.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  return demo ? { title: `${demo.title} Demo | Local Business Demo Studio`, description: demo.description } : {};
}

function RestaurantExperience() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[[Clock3, "Open today", "11:00 AM – 10:30 PM"], [MapPin, "Find us", "Easy local directions"], [Star, "Loved locally", "Fresh food & warm service"], [MessageCircle, "Quick enquiry", "Chat on WhatsApp"]].map(([Icon, title, detail]) => {
            const ItemIcon = Icon as typeof Clock3;
            return <div key={title as string} className="flex min-w-0 items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-900"><ItemIcon size={18} /></span><div className="min-w-0"><p className="truncate text-sm font-black">{title as string}</p><p className="truncate text-xs text-black/50">{detail as string}</p></div></div>;
          })}
        </div>
      </section>
      <section className="border-y border-black/5 bg-[#fffaf2]"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"><div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-800/60">From the kitchen</p><h2 className="mt-2 text-3xl font-black tracking-[-0.05em] sm:text-5xl">A menu worth stopping for.</h2></div><span className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold sm:inline-flex">Chef picks</span></div><div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">{restaurantMenu.map((item) => <article key={item.name} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"><div className="aspect-[1.25] bg-gradient-to-br from-amber-100 via-orange-50 to-stone-100 p-3"><div className="flex h-full items-end rounded-xl border border-white/70 bg-white/25 p-3"><span className="rounded-full bg-white/90 px-2 py-1 text-[9px] font-black uppercase tracking-wider">Chef pick</span></div></div><div className="p-3 sm:p-4"><div className="flex items-start justify-between gap-2"><h3 className="text-sm font-black leading-5 sm:text-base">{item.name}</h3><span className="shrink-0 text-sm font-black text-amber-800">{item.price}</span></div><p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-black/45 sm:text-xs">{item.detail}</p></div></article>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"><div className="grid gap-4 sm:grid-cols-2">{["Fresh ingredients", "Warm ambience", "Easy reservations", "Local favourite"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xs font-black text-amber-900">0{index + 1}</span><p className="text-sm font-black sm:text-base">{item}</p></div>)}</div></section>
    </>
  );
}

function GenericExperience({ data }: { data: DemoContent }) { return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">What this demo includes</p><h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-5xl">Designed around the questions customers actually have.</h2></div><div className="grid grid-cols-2 gap-3">{data.services.map((service) => <div key={service} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm sm:p-5"><Check size={17} /><p className="mt-6 text-sm font-semibold sm:text-base">{service}</p></div>)}</div></div></section>; }

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug); const data = content[slug];
  if (!demo || !data) notFound();
  const isRestaurant = slug === "restaurant";
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 sm:pb-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-xs font-bold sm:text-sm"><ArrowLeft size={15} /> All demos</a><span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 sm:block">Demo concept · {demo.tag}</span></nav>
      <section className={`${data.accent} border-y border-black/10`}><div className="mx-auto grid max-w-7xl gap-7 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24"><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/45 sm:text-xs">{data.eyebrow}</p><h1 className="mt-3 max-w-4xl text-[2.55rem] font-black leading-[0.94] tracking-[-0.065em] sm:mt-5 sm:text-6xl lg:text-[5.5rem]">{data.headline}</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-black/60 sm:mt-6 sm:text-lg sm:leading-8">{data.intro}</p><div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap"><a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-black px-4 py-3 text-center text-xs font-black !text-white shadow-sm sm:rounded-full sm:px-6 sm:text-sm">Request a website <ArrowRight size={15} /></a><a href={WHATSAPP} className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-black/15 bg-white px-4 py-3 text-center text-xs font-black !text-black shadow-sm sm:rounded-full sm:px-6 sm:text-sm">WhatsApp <MessageCircle size={15} /></a></div></div><div className="rounded-[1.5rem] border border-black/10 bg-white/80 p-3 shadow-[0_20px_55px_rgba(0,0,0,.08)] sm:rounded-[2rem] sm:p-5"><div className="aspect-[4/3] rounded-[1.15rem] bg-black/[.04] p-3 sm:rounded-[1.5rem] sm:p-5"><div className="flex h-full flex-col justify-between rounded-[0.95rem] border border-black/10 bg-white p-4 sm:rounded-[1.2rem] sm:p-6"><div className="flex items-center justify-between"><span className="text-xs font-black sm:text-sm">YOUR BUSINESS</span><span className="size-2.5 rounded-full bg-amber-300 sm:size-3" /></div><div><p className="text-[10px] font-bold uppercase tracking-widest text-black/35">{demo.tag}</p><p className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Built around your customers.</p></div><div className="grid grid-cols-2 gap-2 text-[10px] font-semibold sm:gap-3 sm:text-xs"><span className="rounded-lg bg-black/[.04] p-2.5 sm:rounded-xl sm:p-3">Services</span><span className="rounded-lg bg-black/[.04] p-2.5 sm:rounded-xl sm:p-3">Location</span><span className="rounded-lg bg-black/[.04] p-2.5 sm:rounded-xl sm:p-3">Reviews</span><span className="rounded-lg bg-black p-2.5 !text-white sm:rounded-xl sm:p-3">Contact →</span></div></div></div></div></div></section>
      {isRestaurant ? <RestaurantExperience /> : <GenericExperience data={data} />}
      <section className="border-y border-black/10 bg-[#171717] text-white"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 py-8 sm:grid-cols-3 sm:px-6 sm:py-12 lg:px-8"><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><Clock3 className="shrink-0 text-amber-300" size={19} /><div><p className="text-sm font-bold">Opening hours</p><p className="mt-0.5 text-xs text-white/50">Mon–Sun · 9:00 AM–9:00 PM</p></div></div><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><MapPin className="shrink-0 text-amber-300" size={19} /><div><p className="text-sm font-bold">Easy to find</p><p className="mt-0.5 text-xs text-white/50">Google Maps & local directions</p></div></div><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><Star className="shrink-0 text-amber-300" size={19} /><div><p className="text-sm font-bold">Built for trust</p><p className="mt-0.5 text-xs text-white/50">Reviews, proof and clear information</p></div></div></div></section>
      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"><div className="rounded-[1.5rem] border border-black/10 bg-[#fffaf2] p-6 sm:rounded-[2rem] sm:p-10 lg:p-14"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Make this yours</p><h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[-0.05em] sm:text-5xl">Your brand. Your photos. Your customers.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-black/55 sm:text-base sm:leading-7">This is a presentation demo. The final website can be customised with your real business information, branding, content and conversion goals.</p><div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap"><a href={WHATSAPP} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-xs font-black !text-white sm:rounded-full sm:px-6 sm:text-sm"><MessageCircle size={16} /> Discuss on WhatsApp</a><a href={PHONE} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-black/15 bg-white px-4 py-3 text-xs font-black !text-black sm:rounded-full sm:px-6 sm:text-sm"><Phone size={16} /> Call</a></div></div></section>
      <div className="fixed inset-x-3 bottom-3 z-[9999] flex gap-2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur sm:hidden" style={{ isolation: "isolate", mixBlendMode: "normal" }}>
        <a href={WHATSAPP} aria-label="Chat on WhatsApp" className="!flex !min-h-11 !flex-1 !items-center !justify-center !gap-1.5 !rounded-xl !border !border-[#128C7E] !bg-[#25D366] !px-3 !py-2.5 !text-xs !font-black !text-white !shadow-sm !opacity-100 !mix-blend-normal" style={{ backgroundColor: "#25D366", color: "#ffffff", WebkitTextFillColor: "#ffffff", opacity: 1 }}>
          <MessageCircle size={15} className="shrink-0 !text-white" /> <span className="!text-white">WhatsApp</span>
        </a>
        <a href={PHONE} aria-label="Call us" className="!flex !min-h-11 !flex-1 !items-center !justify-center !gap-1.5 !rounded-xl !border !border-black/10 !bg-white !py-2.5 !text-xs !font-black !text-black !shadow-sm">
          <Phone size={15} className="!text-black" /> <span className="!text-black">Call</span>
        </a>
      </div>
    </main>
  );
}
