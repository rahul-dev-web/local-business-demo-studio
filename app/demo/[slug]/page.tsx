import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Dumbbell,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Target,
  Users,
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
  restaurant: { eyebrow: "A modern dining experience", headline: "Your next favourite table is closer than you think.", intro: "A conversion-focused restaurant website built to turn local discovery into menus, calls, directions and reservations.", services: ["Signature menu & chef picks", "Private dining & reservations", "Photo-led food gallery", "Opening hours & directions"], accent: "bg-amber-50" },
  salon: { eyebrow: "Beauty, grooming & confidence", headline: "Look good. Feel confident. Book in minutes.", intro: "A premium salon experience designed to showcase your work, make services easy to understand and turn local visitors into appointments.", services: ["Services & transparent pricing", "Stylist profiles & portfolio", "Packages & seasonal offers", "Appointment and WhatsApp CTAs"], accent: "bg-[#f8eee9]" },
  gym: { eyebrow: "Train with purpose", headline: "Turn local interest into your next member.", intro: "A high-energy fitness experience built around programs, memberships, trainers and a frictionless free-trial journey.", services: ["Membership plans", "Training programs", "Trainer profiles", "Free trial conversion"], accent: "bg-lime-50" },
  clinic: { eyebrow: "Care people can trust", headline: "Make it easier for patients to choose and contact you.", intro: "A calm, professional clinic experience that puts doctors, services, timings and appointments first.", services: ["Doctor & specialization profiles", "Medical services", "Appointment requests", "Timings & location"], accent: "bg-sky-50" },
  coaching: { eyebrow: "Learn. Prepare. Achieve.", headline: "Give students a reason to choose your institute.", intro: "A results-led coaching website that communicates courses, faculty, outcomes and admissions clearly.", services: ["Courses & batches", "Faculty profiles", "Results & achievements", "Admission enquiry"], accent: "bg-violet-50" },
  hotel: { eyebrow: "Stay somewhere memorable", headline: "Turn a search for a room into a booking enquiry.", intro: "A hospitality-first website for showcasing rooms, amenities, location and the experience around your property.", services: ["Rooms & suites", "Amenities", "Gallery", "Booking enquiry"], accent: "bg-stone-100" },
  bakery: { eyebrow: "Made for moments", headline: "Make every cake and custom order easier to discover.", intro: "A product-led bakery website designed for browsing, occasions, custom orders and direct enquiries.", services: ["Signature products", "Custom cakes", "Occasion collections", "Order enquiries"], accent: "bg-pink-50" },
  retail: { eyebrow: "Your neighbourhood store", headline: "Bring your local store online without losing its personality.", intro: "A clean retail showcase for products, offers, directions and direct customer enquiries.", services: ["Featured products", "Offers & new arrivals", "Store information", "Direct enquiries"], accent: "bg-blue-50" },
  automobile: { eyebrow: "Reliable service, every time", headline: "Build trust before the customer reaches your garage.", intro: "A service-focused automotive website that makes packages, expertise, reviews and bookings easy to understand.", services: ["Service packages", "Workshop expertise", "Customer reviews", "Service booking"], accent: "bg-slate-100" },
  "real-estate": { eyebrow: "Find the right place", headline: "Property discovery designed around qualified enquiries.", intro: "A premium property experience for presenting listings, locations and the details buyers need before they call.", services: ["Featured properties", "Property details", "Location highlights", "Lead capture"], accent: "bg-emerald-50" },
};

const gymPrograms = [
  { name: "Strength Lab", detail: "Progressive strength training for beginners and experienced lifters.", tag: "01" },
  { name: "HIIT Burn", detail: "Fast-paced conditioning sessions built for energy and endurance.", tag: "02" },
  { name: "Athlete Performance", detail: "Mobility, power and performance coaching for serious training.", tag: "03" },
  { name: "Personal Training", detail: "One-to-one coaching with a plan built around your goal.", tag: "04" },
];

const memberships = [
  { name: "Starter", price: "₹999", period: "/ month", features: ["Gym access", "Locker access", "Fitness assessment"] },
  { name: "Pro", price: "₹1,799", period: "/ month", features: ["Unlimited access", "Group classes", "Monthly progress check"] },
  { name: "Elite", price: "₹2,999", period: "/ month", features: ["Unlimited access", "Personal training", "Nutrition guidance"] },
];

function GymExperience() {
  return (
    <>
      <section className="overflow-hidden bg-[#0b0d0c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-300">
                <Dumbbell size={14} /> Apex Performance Club
              </div>
              <h2 className="mt-7 max-w-4xl text-5xl font-black uppercase tracking-[-0.065em] sm:text-7xl lg:text-[6.2rem] lg:leading-[0.86]">
                Build strength. Build discipline.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
                A high-conversion fitness website concept designed to turn local visitors into trial members.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#trial" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-black uppercase text-black">
                  Start free trial <ArrowRight size={17} />
                </a>
                <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold">
                  WhatsApp <MessageCircle size={17} />
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-5">
              <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-lime-300/50 via-zinc-800 to-zinc-950 p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 p-6">
                  <div className="flex justify-between text-xs font-black uppercase tracking-[0.2em] text-white/45"><span>APEX</span><span>01</span></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Train smarter</p><p className="mt-3 text-4xl font-black uppercase tracking-[-0.05em]">Your strongest version starts here.</p></div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <span className="rounded-xl bg-white/10 p-3">Programs</span>
                    <span className="rounded-xl bg-white/10 p-3">Trainers</span>
                    <span className="rounded-xl bg-white/10 p-3">Plans</span>
                    <span className="rounded-xl bg-lime-300 p-3 text-black">Trial →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">Training programs</p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.055em] sm:text-5xl">Train for what matters.</h2>
          <p className="mt-4 leading-7 text-black/50">A real gym website can turn every program into a clear path from interest to enquiry.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {gymPrograms.map((program) => (
            <article key={program.name} className="group rounded-[1.75rem] border border-black/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-[0_25px_70px_rgba(0,0,0,.14)]">
              <div className="flex items-start justify-between"><span className="flex size-11 items-center justify-center rounded-full bg-black text-xs font-black text-white group-hover:bg-lime-300 group-hover:text-black">{program.tag}</span><ArrowRight size={20} className="transition group-hover:translate-x-1" /></div>
              <h3 className="mt-16 text-2xl font-black uppercase tracking-tight">{program.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-black/50 group-hover:text-white/50">{program.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f1f3ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">Memberships</p><h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.055em] sm:text-5xl">Pick your level.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-black/50">Transparent plans reduce hesitation and make a trial or membership enquiry a natural next step.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {memberships.map((plan, index) => (
              <article key={plan.name} className={`rounded-[1.75rem] p-7 ${index === 1 ? "bg-black text-white" : "bg-white"}`}>
                <div className="flex items-center justify-between"><h3 className="text-xl font-black uppercase">{plan.name}</h3>{index === 1 && <span className="rounded-full bg-lime-300 px-3 py-1 text-[10px] font-black uppercase text-black">Popular</span>}</div>
                <div className="mt-8"><span className="text-4xl font-black">{plan.price}</span><span className={index === 1 ? "text-white/40" : "text-black/40"}>{plan.period}</span></div>
                <div className="mt-8 space-y-3">{plan.features.map((feature) => <div key={feature} className="flex items-center gap-3 text-sm font-semibold"><Check size={16} className={index === 1 ? "text-lime-300" : "text-black"} />{feature}</div>)}</div>
                <a href="#trial" className={`mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-black ${index === 1 ? "bg-lime-300 text-black" : "bg-black text-white"}`}>Choose plan <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] bg-black p-7 text-white"><Target className="text-lime-300" size={25} /><p className="mt-14 text-3xl font-black uppercase tracking-tight">Goal-led training</p><p className="mt-3 text-sm leading-6 text-white/50">Clear programs show visitors exactly how the gym can help them.</p></div>
          <div className="rounded-[1.75rem] bg-lime-300 p-7 text-black"><Users size={25} /><p className="mt-14 text-3xl font-black uppercase tracking-tight">Real coaches</p><p className="mt-3 text-sm leading-6 text-black/60">Trainer profiles build trust before the first visit.</p></div>
          <div className="rounded-[1.75rem] border border-black/10 p-7"><Star size={25} fill="currentColor" /><p className="mt-14 text-3xl font-black uppercase tracking-tight">Social proof</p><p className="mt-3 text-sm leading-6 text-black/50">Reviews and transformation stories turn interest into action.</p></div>
        </div>
      </section>

      <section id="trial" className="bg-[#0b0d0c] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-24">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-lime-300">Free trial</p><h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-[-0.055em] sm:text-6xl">Ready to make your next customer take action?</h2><p className="mt-5 max-w-2xl leading-7 text-white/50">This demo can be customised with your gym's real brand, plans, trainers, photos, location and enquiry workflow.</p></div>
          <div className="flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-black text-black"><MessageCircle size={17} /> Start on WhatsApp</a><a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call</a></div>
        </div>
      </section>
    </>
  );
}

function GenericExperience({ data }: { data: DemoContent }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">What this demo includes</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Designed around the questions customers actually have.</h2></div>
        <div className="grid gap-3 sm:grid-cols-2">{data.services.map((service) => <div key={service} className="rounded-2xl border border-black/10 p-5"><Check size={18} /><p className="mt-8 font-semibold">{service}</p></div>)}</div>
      </div>
    </section>
  );
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  const data = content[slug];
  if (!demo || !data) notFound();
  const isGym = slug === "gym";

  return (
    <main className="min-h-screen bg-white pb-16 sm:pb-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} /> All demos</a>
        <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-black/40 sm:block">Demo concept · {demo.tag}</span>
      </nav>

      <section className={`${data.accent} border-y border-black/10`}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">{data.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.065em] sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">{data.headline}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">{data.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={isGym ? "#trial" : "#contact"} className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white">{isGym ? "Start free trial" : "Request a website"} <ArrowRight size={17} /></a>
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

      {isGym ? <GymExperience /> : <GenericExperience data={data} />}

      <section className="border-y border-black/10 bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-8">
          <div className="flex gap-4"><Clock3 className="shrink-0" /><div><p className="font-bold">Opening hours</p><p className="mt-1 text-sm text-white/50">Mon–Sun · 9:00 AM–9:00 PM</p></div></div>
          <div className="flex gap-4"><MapPin className="shrink-0" /><div><p className="font-bold">Easy to find</p><p className="mt-1 text-sm text-white/50">Google Maps & local directions</p></div></div>
          <div className="flex gap-4"><Star className="shrink-0" /><div><p className="font-bold">Built for trust</p><p className="mt-1 text-sm text-white/50">Reviews, proof and clear information</p></div></div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="rounded-[2rem] border border-black/10 p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Make this yours</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">Your brand. Your photos. Your customers.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-black/55">This is a presentation demo. The final website can be customized with your real business information, branding, content and conversion goals.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white"><MessageCircle size={17} /> Discuss on WhatsApp</a><a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call</a></div>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-50 flex gap-2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur sm:hidden">
        <a href="https://wa.me/919999999999" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-bold text-white"><MessageCircle size={16} /> WhatsApp</a>
        <a href="tel:+919999999999" className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 py-3 text-sm font-bold"><Phone size={16} /> Call</a>
      </div>
    </main>
  );
}
