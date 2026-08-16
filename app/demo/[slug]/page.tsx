import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { demos, getDemo } from "@/data/demos";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  return demo
    ? { title: `${demo.title} Demo | Local Business Demo Studio`, description: demo.description }
    : {};
}

const content: Record<string, { eyebrow: string; headline: string; intro: string; services: string[]; accent: string }> = {
  restaurant: { eyebrow: "A modern dining experience", headline: "Your next favourite table is closer than you think.", intro: "A conversion-focused restaurant website built to turn local discovery into menus, calls, directions and reservations.", services: ["Signature menu & chef picks", "Private dining & reservations", "Photo-led food gallery", "Opening hours & directions"], accent: "bg-amber-50" },
  salon: { eyebrow: "Beauty, grooming & confidence", headline: "A salon website that makes booking feel effortless.", intro: "Showcase your work, services and packages while making appointments one tap away for local customers.", services: ["Services & transparent pricing", "Stylist profiles & portfolio", "Packages & seasonal offers", "Appointment and WhatsApp CTAs"], accent: "bg-rose-50" },
  gym: { eyebrow: "Train with purpose", headline: "Turn local interest into your next member.", intro: "A high-energy fitness experience built around programs, memberships, trainers and a frictionless free-trial journey.", services: ["Membership plans", "Training programs", "Trainer profiles", "Free trial conversion"], accent: "bg-lime-50" },
  clinic: { eyebrow: "Care people can trust", headline: "Make it easier for patients to choose and contact you.", intro: "A calm, professional clinic experience that puts doctors, services, timings and appointments first.", services: ["Doctor & specialization profiles", "Medical services", "Appointment requests", "Timings & location"], accent: "bg-sky-50" },
  coaching: { eyebrow: "Learn. Prepare. Achieve.", headline: "Give students a reason to choose your institute.", intro: "A results-led coaching website that communicates courses, faculty, outcomes and admissions clearly.", services: ["Courses & batches", "Faculty profiles", "Results & achievements", "Admission enquiry"], accent: "bg-violet-50" },
  hotel: { eyebrow: "Stay somewhere memorable", headline: "Turn a search for a room into a booking enquiry.", intro: "A hospitality-first website for showcasing rooms, amenities, location and the experience around your property.", services: ["Rooms & suites", "Amenities", "Gallery", "Booking enquiry"], accent: "bg-stone-100" },
  bakery: { eyebrow: "Made for moments", headline: "Make every cake and custom order easier to discover.", intro: "A product-led bakery website designed for browsing, occasions, custom orders and direct enquiries.", services: ["Signature products", "Custom cakes", "Occasion collections", "Order enquiries"], accent: "bg-pink-50" },
  retail: { eyebrow: "Your neighbourhood store", headline: "Bring your local store online without losing its personality.", intro: "A clean retail showcase for products, offers, directions and direct customer enquiries.", services: ["Featured products", "Offers & new arrivals", "Store information", "Direct enquiries"], accent: "bg-blue-50" },
  automobile: { eyebrow: "Reliable service, every time", headline: "Build trust before the customer reaches your garage.", intro: "A service-focused automotive website that makes packages, expertise, reviews and bookings easy to understand.", services: ["Service packages", "Workshop expertise", "Customer reviews", "Service booking"], accent: "bg-slate-100" },
  "real-estate": { eyebrow: "Find the right place", headline: "Property discovery designed around qualified enquiries.", intro: "A premium property experience for presenting listings, locations and the details buyers need before they call.", services: ["Featured properties", "Property details", "Location highlights", "Lead capture"], accent: "bg-emerald-50" },
};

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  const data = content[slug];
  if (!demo || !data) notFound();

  return (
    <main className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} /> All demos</a>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">Demo concept · {demo.tag}</span>
      </nav>

      <section className={`${data.accent} border-y border-black/10`}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">{data.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.065em] sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">{data.headline}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">{data.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white">Request a website <ArrowRight size={17} /></a>
              <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-bold">WhatsApp <MessageCircle size={17} /></a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_30px_80px_rgba(0,0,0,.08)] backdrop-blur sm:p-8">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-black/[.04] p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-black/10 bg-white p-6">
                <div className="flex items-center justify-between"><span className="text-sm font-black">YOUR BUSINESS</span><span className="size-3 rounded-full bg-black/15" /></div>
                <div><p className="text-xs font-bold uppercase tracking-widest text-black/35">{demo.tag}</p><p className="mt-3 text-3xl font-black tracking-tight">Built around your customers.</p></div>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold"><span className="rounded-xl bg-black/[.04] p-3">Services</span><span className="rounded-xl bg-black/[.04] p-3">Location</span><span className="rounded-xl bg-black/[.04] p-3">Reviews</span><span className="rounded-xl bg-black p-3 text-white">Contact →</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">What this demo includes</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Designed to answer the questions customers actually have.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">{data.services.map((service) => <div key={service} className="rounded-2xl border border-black/10 p-5"><Check size={18} /><p className="mt-8 font-semibold">{service}</p></div>)}</div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-8">
          <div className="flex gap-4"><Clock3 className="shrink-0" /><div><p className="font-bold">Opening hours</p><p className="mt-1 text-sm text-white/50">Mon–Sun · 9:00 AM–9:00 PM</p></div></div>
          <div className="flex gap-4"><MapPin className="shrink-0" /><div><p className="font-bold">Easy to find</p><p className="mt-1 text-sm text-white/50">Google Maps & local directions</p></div></div>
          <div className="flex gap-4"><Star className="shrink-0" /><div><p className="font-bold">Built for trust</p><p className="mt-1 text-sm text-white/50">Reviews, proof and clear information</p></div></div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] border border-black/10 p-8 sm:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Make this yours</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">Your brand. Your photos. Your customers.</h2><p className="mt-5 max-w-2xl leading-7 text-black/55">This is a presentation demo. The final website can be customized with your real business information, branding, content and conversion goals.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white"><MessageCircle size={17} /> Discuss on WhatsApp</a><a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call</a></div></div></section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-black/40">Local Business Demo Studio · Presentation concept</footer>
    </main>
  );
}
