import { ArrowLeft, ArrowRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { demos, getDemo } from "@/data/demos";
import { notFound } from "next/navigation";

export function generateStaticParams() { return demos.map(({ slug }) => ({ slug })); }

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const Icon = demo.icon;

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white"><ArrowLeft size={16} /> All demos</a>
        <span className="font-black tracking-[-0.04em]">DEMO / {demo.title.toUpperCase()}</span>
      </nav>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div><div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-white text-black"><Icon size={25} /></div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{demo.tag} · Demo concept</p><h1 className="text-5xl font-black tracking-[-0.06em] sm:text-7xl">{demo.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">{demo.description} This is a presentation-ready concept showing how a modern local business website can turn discovery into real enquiries.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-white px-6 py-3.5 text-sm font-black text-black">Request a website <ArrowRight className="ml-2 inline" size={16} /></a><a href="/" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/75">View other demos</a></div></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"><div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent p-6"><div className="flex h-full items-end"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Sample business</p><h2 className="mt-2 text-3xl font-black">Your Business Name</h2><p className="mt-2 text-sm text-white/45">Your city · Your category</p></div></div></div></div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto grid max-w-7xl gap-4 px-6 py-16 sm:grid-cols-3 lg:px-8"><Info icon={<MapPin size={19} />} title="Local discovery" text="Location, timings and directions are easy to find." /><Info icon={<MessageCircle size={19} />} title="Direct enquiries" text="WhatsApp and contact CTAs stay one tap away." /><Info icon={<Clock3 size={19} />} title="Business-ready" text="Services, offers and social proof are built into the journey." /></div></section>
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="rounded-[2rem] bg-[#d8ff3e] p-8 text-black sm:p-12 lg:p-16"><p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">Make this yours</p><h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">A custom version for your business.</h2><p className="mt-5 max-w-xl leading-7 text-black/60">Replace the demo content with your real brand, photos, services, pricing, address and contact details.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://wa.me/919999999999" className="rounded-full bg-black px-6 py-3.5 text-sm font-black text-white"><MessageCircle className="mr-2 inline" size={16} /> WhatsApp</a><a href="tel:+919999999999" className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-black"><Phone className="mr-2 inline" size={16} /> Call now</a></div></div></section>
    </main>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="rounded-2xl border border-white/10 p-6"><div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-white/10">{icon}</div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{text}</p></div>; }
