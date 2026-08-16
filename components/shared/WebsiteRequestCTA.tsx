import { ArrowRight, MessageCircle, Phone } from "lucide-react";

type WebsiteRequestCTAProps = {
  phone: string;
  businessType?: string;
  className?: string;
};

export function WebsiteRequestCTA({ phone, businessType = "business", className = "" }: WebsiteRequestCTAProps) {
  const digits = phone.replace(/\D/g, "");
  const message = encodeURIComponent(`Hi, I saw your ${businessType} website demo and I would like to discuss a website for my business.`);
  const whatsapp = `https://wa.me/${digits}?text=${message}`;

  return (
    <section id="contact" className={className}>
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-neutral-950 px-7 py-12 text-white sm:px-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Your business could look like this</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.055em] sm:text-6xl">Like this demo? Let&apos;s make it yours.</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/55">We customise the design with your real brand, photos, services, pricing, location and contact details.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-neutral-950"><MessageCircle size={17} /> WhatsApp</a>
            <a href={`tel:${phone.replace(/\s+/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold"><Phone size={17} /> Call Now</a>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-2 border-t border-white/10 pt-6 text-xs font-semibold text-white/40">Custom domain · Mobile-first · Local SEO · WhatsApp & call ready <ArrowRight size={14} /></div>
      </div>
    </section>
  );
}
