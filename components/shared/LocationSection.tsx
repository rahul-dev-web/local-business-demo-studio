type LocationSectionProps = {
  city: string;
  address: string;
  hours: string;
  mapsUrl: string;
  phone?: string;
  className?: string;
};

export function LocationSection({ city, address, hours, mapsUrl, phone, className = "" }: LocationSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-black/10 bg-white p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Visit us</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Find us in {city}.</h2>
            <p className="mt-5 max-w-xl leading-7 text-black/55">{address}</p>
            <p className="mt-2 text-sm font-semibold">{hours}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white">Get directions</a>
              {phone ? <a href={`tel:${phone}`} className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold">Call now</a> : null}
            </div>
          </div>
          <div className="min-h-56 rounded-[1.5rem] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300 p-5"><div className="flex h-full items-center justify-center rounded-xl border border-black/10 bg-white/35 text-center text-sm font-semibold text-black/45">Google Maps / location preview</div></div>
        </div>
      </div>
    </section>
  );
}
