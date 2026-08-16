import Link from "next/link";

type DemoCTAProps = {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
  className?: string;
};

export function DemoCTA({
  title = "Want this website for your business?",
  description = "We can customise this design with your business name, photos, services, location and branding.",
  href = "#contact",
  label = "Request a Website",
  className = "",
}: DemoCTAProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-neutral-950 px-7 py-14 text-center text-white sm:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">Build your version</p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">{description}</p>
        <Link href={href} className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-neutral-950 transition hover:scale-[1.02]">
          {label}
        </Link>
      </div>
    </section>
  );
}
