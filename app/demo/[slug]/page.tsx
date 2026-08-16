import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Star,
} from "lucide-react";
import { demos, getDemo } from "@/data/demos";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  return demo
    ? {
        title: `${demo.title} Demo | Local Business Demo Studio`,
        description: demo.description,
      }
    : {};
}

type DemoContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  services: string[];
  accent: string;
};

const content: Record<string, DemoContent> = {
  restaurant: {
    eyebrow: "A modern dining experience",
    headline: "Your next favourite table is closer than you think.",
    intro: "A conversion-focused restaurant website built to turn local discovery into menus, calls, directions and reservations.",
    services: ["Signature menu & chef picks", "Private dining & reservations", "Photo-led food gallery", "Opening hours & directions"],
    accent: "bg-amber-50",
  },
  salon: {
    eyebrow: "Beauty, grooming & confidence",
    headline: "Look good. Feel confident. Book in minutes.",
    intro: "A premium salon experience designed to showcase your work, make services easy to understand and turn local visitors into appointments.",
    services: ["Services & transparent pricing", "Stylist profiles & portfolio", "Packages & seasonal offers", "Appointment and WhatsApp CTAs"],
    accent: "bg-[#f8eee9]",
  },
  gym: {
    eyebrow: "Train with purpose",
    headline: "Turn local interest into your next member.",
    intro: "A high-energy fitness experience built around programs, memberships, trainers and a frictionless free-trial journey.",
    services: ["Membership plans", "Training programs", "Trainer profiles", "Free trial conversion"],
    accent: "bg-lime-50",
  },
  clinic: {
    eyebrow: "Care people can trust",
    headline: "Make it easier for patients to choose and contact you.",
    intro: "A calm, professional clinic experience that puts doctors, services, timings and appointments first.",
    services: ["Doctor & specialization profiles", "Medical services", "Appointment requests", "Timings & location"],
    accent: "bg-sky-50",
  },
  coaching: {
    eyebrow: "Learn. Prepare. Achieve.",
    headline: "Give students a reason to choose your institute.",
    intro: "A results-led coaching website that communicates courses, faculty, outcomes and admissions clearly.",
    services: ["Courses & batches", "Faculty profiles", "Results & achievements", "Admission enquiry"],
    accent: "bg-violet-50",
  },
  hotel: {
    eyebrow: "Stay somewhere memorable",
    headline: "Turn a search for a room into a booking enquiry.",
    intro: "A hospitality-first website for showcasing rooms, amenities, location and the experience around your property.",
    services: ["Rooms & suites", "Amenities", "Gallery", "Booking enquiry"],
    accent: "bg-stone-100",
  },
  bakery: {
    eyebrow: "Made for moments",
    headline: "Make every cake and custom order easier to discover.",
    intro: "A product-led bakery website designed for browsing, occasions, custom orders and direct enquiries.",
    services: ["Signature products", "Custom cakes", "Occasion collections", "Order enquiries"],
    accent: "bg-pink-50",
  },
  retail: {
    eyebrow: "Your neighbourhood store",
    headline: "Bring your local store online without losing its personality.",
    intro: "A clean retail showcase for products, offers, directions and direct customer enquiries.",
    services: ["Featured products", "Offers & new arrivals", "Store information", "Direct enquiries"],
    accent: "bg-blue-50",
  },
  automobile: {
    eyebrow: "Reliable service, every time",
    headline: "Build trust before the customer reaches your garage.",
    intro: "A service-focused automotive website that makes packages, expertise, reviews and bookings easy to understand.",
    services: ["Service packages", "Workshop expertise", "Customer reviews", "Service booking"],
    accent: "bg-slate-100",
  },
  "real-estate": {
    eyebrow: "Find the right place",
    headline: "Property discovery designed around qualified enquiries.",
    intro: "A premium property experience for presenting listings, locations and the details buyers need before they call.",
    services: ["Featured properties", "Property details", "Location highlights", "Lead capture"],
    accent: "bg-emerald-50",
  },
};

const salonServices = [
  { name: "Signature Haircut", detail: "Consultation, precision cut & finish", price: "₹499" },
  { name: "Hair Spa Ritual", detail: "Deep nourishment, massage & blow-dry", price: "₹899" },
  { name: "Balayage & Colour", detail: "Personalised colour consultation", price: "From ₹2,499" },
  { name: "Bridal Glow", detail: "Makeup, hair & pre-event styling", price: "From ₹4,999" },
];

const stylists = [
  { name: "Aarav", role: "Senior Hair Artist", initials: "A" },
  { name: "Meera", role: "Colour Specialist", initials: "M" },
  { name: "Riya", role: "Makeup Artist", initials: "R" },
];

function SalonExperience() {
  return (
    <>
      <section className="bg-[#17110f] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_.9fr] lg:items-end lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c7b5]">
              <Scissors size={14} /> Maison Mira · Salon & Studio
            </div>
            <h2 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.065em] sm:text-7xl lg:text-[5.8rem] lg:leading-[0.9]">Your best look starts here.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/55">A luxury salon demo built to make your work feel premium and your next appointment feel one tap away.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-[#e9c7b5] px-6 py-3.5 text-sm font-bold text-[#17110f]">Book an appointment <ArrowRight size={17} /></a>
              <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white">WhatsApp <MessageCircle size={17} /></a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-5">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[#5a4037] via-[#2d201c] to-[#17110f] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 p-6">
                <div className="flex justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/45"><span>Maison Mira</span><span>MM</span></div>
                <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e9c7b5]">The signature experience</p><p className="mt-3 text-4xl font-black tracking-[-0.05em]">Designed around you.</p></div>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold"><span className="rounded-xl bg-white/10 p-3">Hair</span><span className="rounded-xl bg-white/10 p-3">Colour</span><span className="rounded-xl bg-white/10 p-3">Makeup</span><span className="rounded-xl bg-[#e9c7b5] p-3 text-[#17110f]">Book →</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Services & pricing</p><h2 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">Choose your next signature look.</h2><p className="mt-4 leading-7 text-black/50">Clear pricing removes friction. The final client website can replace these demo prices with real services and packages.</p></div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {salonServices.map((service, index) => <article key={service.name} className="group rounded-[1.75rem] border border-black/10 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,.08)]"><div className={`aspect-[16/7] rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? "from-[#ead4c9] via-[#f5e9e2] to-[#d7b8aa]" : "from-[#d8c2b8] via-[#f4e5de] to-[#b99588]"}`} /><div className="mt-5 flex items-start justify-between gap-5"><div><h3 className="text-xl font-bold">{service.name}</h3><p className="mt-2 text-sm leading-6 text-black/50">{service.detail}</p></div><span className="shrink-0 rounded-full bg-black px-3 py-1.5 text-sm font-bold text-white">{service.price}</span></div><a href="#appointment" className="mt-5 inline-flex items-center gap-1 text-sm font-bold">Book this service <ArrowRight size={15} /></a></article>)}
        </div>
      </section>

      <section className="bg-[#f5eee9]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Meet the artists</p><h2 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">People behind the craft.</h2></div><p className="max-w-sm text-sm leading-6 text-black/50">Profiles turn an anonymous service into a trusted local experience.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stylists.map((stylist, index) => <article key={stylist.name} className="rounded-[1.75rem] bg-white p-5"><div className={`flex aspect-[4/5] items-end rounded-[1.4rem] p-5 ${index === 0 ? "bg-[#b99b8d]" : index === 1 ? "bg-[#d4b7aa]" : "bg-[#c5a394]"}`}><div className="flex size-16 items-center justify-center rounded-full bg-white text-xl font-black text-black/70">{stylist.initials}</div></div><h3 className="mt-5 text-xl font-bold">{stylist.name}</h3><p className="mt-1 text-sm text-black/50">{stylist.role}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] bg-black p-8 text-white sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">The studio experience</p><h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.055em] sm:text-5xl">Premium service. Personal attention. No guesswork.</h2><div className="mt-10 grid gap-3 sm:grid-cols-2">{["Private consultation", "Experienced artists", "Premium products", "Easy appointment booking"].map((item) => <div key={item} className="rounded-2xl border border-white/10 p-4 text-sm font-semibold text-white/75"><Check className="mb-8" size={17} />{item}</div>)}</div></div>
          <div className="rounded-[2rem] border border-black/10 bg-[#f5eee9] p-8 sm:p-10"><Star className="text-[#8d6657]" fill="currentColor" size={20} /><p className="mt-8 text-2xl font-bold leading-9">“The website should feel like the first five minutes inside the salon.”</p><p className="mt-6 text-sm font-semibold text-black/45">— Demo design principle</p></div>
        </div>
      </section>

      <section id="appointment" className="bg-[#17110f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e9c7b5]">Your next appointment</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.055em] sm:text-6xl">Ready for a website that gets customers to book?</h2><p className="mt-5 max-w-2xl leading-7 text-white/50">This demo can be customised with the salon's real brand, services, team, photos, location and booking workflow.</p></div><div className="flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-[#e9c7b5] px-6 py-3.5 text-sm font-bold text-[#17110f]"><MessageCircle size={17} /> Discuss on WhatsApp</a><a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call</a></div></div>
      </section>
    </>
  );
}

function GenericExperience({ data }: { data: DemoContent }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">What this demo includes</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Designed around the questions customers actually have.</h2></div><div className="grid gap-3 sm:grid-cols-2">{data.services.map((service) => <div key={service} className="rounded-2xl border border-black/10 p-5"><Check size={18} /><p className="mt-8 font-semibold">{service}</p></div>)}</div></div>
    </section>
  );
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  const data = content[slug];
  if (!demo || !data) notFound();

  return (
    <main className="min-h-screen bg-white pb-16 sm:pb-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} /> All demos</a><span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-black/40 sm:block">Demo concept · {demo.tag}</span></nav>
      {slug === "salon" ? <SalonExperience /> : <>
        <section className={`${data.accent} border-y border-black/10`}><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">{data.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.065em] sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">{data.headline}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">{data.intro}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white">Request a website <ArrowRight size={17} /></a><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-bold">WhatsApp <MessageCircle size={17} /></a></div></div><div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_30px_80px_rgba(0,0,0,.08)] backdrop-blur sm:p-8"><div className="aspect-[4/3] rounded-[1.5rem] bg-black/[.04] p-5"><div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-black/10 bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-black">YOUR BUSINESS</span><span className="size-3 rounded-full bg-black/15" /></div><div><p className="text-xs font-bold uppercase tracking-widest text-black/35">{demo.tag}</p><p className="mt-3 text-3xl font-black tracking-tight">Built around your customers.</p></div><div className="grid grid-cols-2 gap-3 text-xs font-semibold"><span className="rounded-xl bg-black/[.04] p-3">Services</span><span className="rounded-xl bg-black/[.04] p-3">Location</span><span className="rounded-xl bg-black/[.04] p-3">Reviews</span><span className="rounded-xl bg-black p-3 text-white">Contact →</span></div></div></div></div></div></div></section>
        <GenericExperience data={data} />
      </>}
      <section className="border-y border-black/10 bg-black text-white"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-8"><div className="flex gap-4"><Clock3 className="shrink-0" /><div><p className="font-bold">Opening hours</p><p className="mt-1 text-sm text-white/50">Mon–Sun · 9:00 AM–9:00 PM</p></div></div><div className="flex gap-4"><MapPin className="shrink-0" /><div><p className="font-bold">Easy to find</p><p className="mt-1 text-sm text-white/50">Google Maps & local directions</p></div></div><div className="flex gap-4"><Star className="shrink-0" /><div><p className="font-bold">Built for trust</p><p className="mt-1 text-sm text-white/50">Reviews, proof and clear information</p></div></div></div></section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] border border-black/10 p-8 sm:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Make this yours</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">Your brand. Your photos. Your customers.</h2><p className="mt-5 max-w-2xl leading-7 text-black/55">This is a presentation demo. The final website can be customised with your real business information, branding, content and conversion goals.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white"><MessageCircle size={17} /> Discuss on WhatsApp</a><a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call</a></div></div></section>
      <div className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-2 gap-2 sm:hidden"><a href="https://wa.me/919999999999" className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-bold text-white shadow-xl"><MessageCircle size={16} /> WhatsApp</a><a href="tel:+919999999999" className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold shadow-xl ring-1 ring-black/10"><Phone size={16} /> Call</a></div>
    </main>
  );
}
