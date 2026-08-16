import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import { getPersonalizedDemo, getPersonalizedDemoSlugs } from "@/data/personalized-demos";
import { getIndustryContent } from "@/data/industry-content";

export function generateStaticParams() {
  return getPersonalizedDemoSlugs().map((business) => ({ business }));
}

export async function generateMetadata({ params }: { params: Promise<{ business: string }> }) {
  const { business } = await params;
  const demo = getPersonalizedDemo(business);
  return demo ? { title: `${demo.businessName} | Website Preview`, description: demo.tagline } : {};
}

export default async function PersonalizedDemoPage({ params }: { params: Promise<{ business: string }> }) {
  const { business } = await params;
  const demo = getPersonalizedDemo(business);
  if (!demo) notFound();

  const content = getIndustryContent(demo.category);
  const whatsapp = `https://wa.me/${demo.whatsapp}?text=${encodeURIComponent(`Hi, I saw the ${demo.category.toLowerCase()} website preview for ${demo.businessName}. I would like a similar website for my business.`)}`;
  const services = content?.services ?? demo.services;
  const trustPoints = content?.trustPoints ?? ["Mobile-first", "Local discovery", "WhatsApp ready", "Call ready"];

  return (
    <main className="min-h-screen bg-[#f6f3ed] pb-24 text-[#171614]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} /> Demo Studio</a><span className="rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white">Private preview</span></nav>

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-16"><div className="overflow-hidden rounded-[2.5rem] bg-[#171614] text-white shadow-2xl"><div className="grid min-h-[620px] lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16"><div><p className="text-xs font-black uppercase tracking-[0.22em] text-white/40">{content?.eyebrow ?? demo.websiteLabel ?? `${demo.category} website preview`}</p><h1 className="mt-7 max-w-3xl text-5xl font-black tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.88]">{demo.businessName}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/55">{demo.tagline}</p></div><div className="mt-12 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-black"><MessageCircle size={17} /> WhatsApp</a><a href={`tel:${demo.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call Now</a></div></div>
        <div className="bg-gradient-to-br from-amber-200 via-orange-100 to-stone-300 p-5 sm:p-8"><div className="flex h-full min-h-[520px] flex-col justify-between rounded-[2rem] bg-white/60 p-7 text-black backdrop-blur-sm sm:p-10"><div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[0.2em]">{demo.businessName}</span><span className="text-xs font-bold text-black/40">01</span></div><div><p className="text-xs font-black uppercase tracking-[0.2em] text-black/40">{content?.eyebrow ?? "Made for local customers"}</p><p className="mt-4 max-w-md text-4xl font-black tracking-[-0.05em] sm:text-5xl">{content?.headline ?? "A website built around your real business."}</p></div><div className="grid grid-cols-2 gap-2 text-sm font-bold">{services.slice(0, 4).map((service) => <span key={service} className="rounded-xl bg-black/5 p-4">{service}</span>)}</div></div></div>
      </div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-black/35">{demo.category} experience</p><h2 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{content?.headline ?? `Built around ${demo.businessName}.`}</h2><p className="mt-5 leading-7 text-black/50">{content?.description ?? "A conversion-focused website personalised with your real business identity."}</p></div><div className="grid gap-3 sm:grid-cols-2">{services.map((service) => <div key={service} className="rounded-2xl border border-black/10 bg-white p-6"><Check size={18} /><p className="mt-10 font-bold">{service}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"><div className="rounded-[2rem] bg-[#171614] p-7 text-white sm:p-10"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">Why this works</p><h2 className="mt-3 text-3xl font-black">Designed around the customer journey.</h2></div><div className="grid gap-3 sm:grid-cols-2">{trustPoints.map((point) => <div key={point} className="rounded-2xl border border-white/10 p-5"><Check size={17} /><p className="mt-7 font-bold text-white/80">{point}</p></div>)}</div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8"><div className="grid gap-4 rounded-[2rem] bg-white p-7 sm:p-10 lg:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-black/35">Visit</p><h2 className="mt-3 text-3xl font-black">{demo.city}</h2><p className="mt-3 flex gap-2 text-sm leading-6 text-black/55"><MapPin size={17} className="shrink-0" />{demo.address}</p></div><div className="flex flex-wrap items-center gap-3 lg:justify-end"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white">{content?.primaryAction ?? "Send enquiry"}</a><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold">See next step <ArrowRight size={16} /></a></div></div></section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-12 lg:px-8"><div className="rounded-[2rem] bg-black px-7 py-12 text-center text-white sm:px-12"><p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">Your business could be next</p><h2 className="mt-4 text-4xl font-black tracking-[-0.055em] sm:text-5xl">Want a personalised preview?</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-white/50">We can replace the sample identity with your real business name, branding, services, photos, location and contact details.</p><a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-black">Explore all demos <ArrowRight size={16} /></a></div></section>
    </main>
  );
}
