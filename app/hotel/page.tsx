import Link from "next/link";

const rooms = [
  ["Deluxe King", "01–02 guests", "₹4,900 / night"],
  ["Garden Suite", "01–03 guests", "₹7,500 / night"],
  ["Family Residence", "02–05 guests", "₹10,900 / night"],
];

const amenities = ["Breakfast included", "High-speed Wi-Fi", "24/7 front desk", "Airport transfers", "Pool & wellness", "Complimentary parking"];

export const metadata = { title: "The Fern House — Hotel Demo", description: "A premium hotel website demo focused on rooms, amenities, discovery and booking enquiries." };

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#171714]">
      <header className="absolute left-0 right-0 top-0 z-40 text-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href="/" className="font-serif text-xl tracking-tight">The Fern House</Link><nav className="hidden gap-7 text-sm md:flex"><a href="#rooms">Rooms</a><a href="#experience">Experience</a><a href="#location">Location</a></nav><a href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black">Check availability</a></div></header>

      <section className="relative min-h-[88vh] overflow-hidden bg-[#273127] text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(205,184,135,.28),transparent_32%),linear-gradient(115deg,#172018,#566250)]"/><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"/><div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20"><div className="max-w-4xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#d9c79f]">Boutique stay · Jaipur</p><h1 className="font-serif text-6xl leading-[.92] tracking-[-.04em] sm:text-7xl lg:text-9xl">Stay close to<br/><i>what matters.</i></h1><p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">A quiet boutique retreat designed for slow mornings, thoughtful hospitality and discovering the city at your own pace.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#booking" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">Check availability</a><a href="#rooms" className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold">Explore rooms</a></div></div></div></section>

      <section id="rooms" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#88744b]">Stay your way</p><h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Rooms with room to breathe.</h2><p className="mt-5 leading-7 text-black/55">Natural textures, considered details and everything you need for a comfortable city stay.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{rooms.map(([name, meta, price], i) => <article key={name} className="group"><div className={`aspect-[4/5] rounded-[1.75rem] bg-gradient-to-br ${i === 0 ? "from-[#c8bda9] to-[#756957]" : i === 1 ? "from-[#d5c8b3] to-[#827661]" : "from-[#b7b29d] to-[#4f5a4b]"} p-5`}><span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold">Room {i + 1}</span></div><div className="flex items-end justify-between pt-5"><div><h3 className="font-serif text-2xl">{name}</h3><p className="mt-1 text-sm text-black/45">{meta}</p></div><strong className="text-sm">{price}</strong></div></article>)}</div></section>

      <section id="experience" className="border-y border-black/10 bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#88744b]">The experience</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Thoughtful hospitality, without the fuss.</h2></div><div className="grid grid-cols-2 gap-3">{amenities.map((item) => <div key={item} className="rounded-2xl border border-black/10 p-5 text-sm font-semibold">{item}</div>)}</div></div></section>

      <section id="location" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-8 rounded-[2rem] bg-[#ded6c7] p-7 sm:p-10 lg:grid-cols-[1.2fr_.8fr] lg:p-12"><div className="min-h-[300px] rounded-[1.5rem] bg-[radial-gradient(circle_at_40%_35%,#c2b08d,transparent_22%),linear-gradient(135deg,#a7a58d,#626a58)] p-7"><span className="rounded-full bg-white/75 px-3 py-1 text-xs font-bold">Jaipur, Rajasthan</span></div><div className="flex flex-col justify-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#88744b]">Location</p><h2 className="mt-3 font-serif text-4xl">Your base for the city.</h2><p className="mt-4 leading-7 text-black/55">12 Garden Road, C-Scheme, Jaipur · 15 minutes from the airport.</p><a href="https://maps.google.com/?q=Jaipur+Rajasthan" className="mt-7 text-sm font-semibold underline underline-offset-4">Get directions →</a></div></div></section>

      <section id="booking" className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-4xl rounded-[2rem] bg-[#1c241c] px-7 py-14 text-center text-white sm:px-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d9c79f]">Plan your stay</p><h2 className="mt-4 font-serif text-4xl sm:text-6xl">Make the next few days count.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">Tell us your dates and we&apos;ll help you find the right room for your stay.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="tel:+919876543210" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">Call to book</a><a href="https://wa.me/919876543210" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold">WhatsApp availability</a></div></div></section>

      <footer className="border-t border-black/10 px-5 py-8 text-center text-xs text-black/45">The Fern House · Hotel Demo · <Link href="/" className="underline underline-offset-4">Back to all demos</Link></footer>
    </main>
  );
}
