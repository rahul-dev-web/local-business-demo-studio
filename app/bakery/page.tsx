import Link from "next/link";

const products = [
  ["Signature Cakes", "Celebration cakes designed to order", "from ₹899"],
  ["Tea-Time Bakes", "Brownies, cookies and fresh pastries", "from ₹149"],
  ["Dessert Boxes", "Curated boxes for gifting and occasions", "from ₹499"],
  ["Custom Cakes", "Your theme, colours and message", "from ₹1,199"],
];

const occasions = ["Birthdays", "Anniversaries", "Baby showers", "Corporate gifting", "Festivals", "Just because"];

export const metadata = {
  title: "Crumb & Bloom — Bakery Demo",
  description: "A premium bakery website demo focused on products, custom orders and WhatsApp enquiries.",
};

export default function BakeryPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#30201b]">
      <header className="sticky top-0 z-40 border-b border-[#5b3424]/10 bg-[#fffaf5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight">Crumb & Bloom</Link>
          <nav className="hidden gap-7 text-sm font-medium md:flex"><a href="#menu">Menu</a><a href="#occasions">Occasions</a><a href="#story">Our story</a></nav>
          <a href="https://wa.me/919876543210" className="rounded-full bg-[#6d3927] px-5 py-2.5 text-sm font-semibold text-white">Order on WhatsApp</a>
        </div>
      </header>

      <section className="overflow-hidden bg-[#f0d8c7]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#9a5c3f]">Fresh every morning · Indore</p>
            <h1 className="font-serif text-6xl leading-[.9] tracking-[-.045em] sm:text-7xl lg:text-[7rem]">Baked for<br/><i>your moments.</i></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#684b3e]/75 sm:text-lg">Small-batch cakes, pastries and desserts made with real ingredients, thoughtful details and a little extra joy.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#menu" className="rounded-full bg-[#6d3927] px-6 py-3.5 text-sm font-semibold text-white">Explore the menu</a><a href="https://wa.me/919876543210" className="rounded-full border border-[#6d3927]/20 px-6 py-3.5 text-sm font-semibold">Custom cake enquiry</a></div>
            <div className="mt-10 flex gap-8 text-sm text-[#684b3e]/65"><span>✦ Egg & eggless options</span><span>✦ Same-day pickup</span></div>
          </div>
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#c58d6f] via-[#f0cdb8] to-[#8c5944] p-7 shadow-2xl lg:rotate-2"><div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/35 bg-white/10 p-7 backdrop-blur-[2px]"><span className="text-xs font-bold uppercase tracking-[.2em] text-white/80">Today&apos;s bake</span><div><p className="font-serif text-5xl text-white sm:text-6xl">Strawberry<br/><i>Cloud Cake</i></p><p className="mt-4 max-w-xs text-sm leading-6 text-white/75">Vanilla sponge · fresh cream · seasonal berries</p><div className="mt-7 inline-block rounded-full bg-white px-5 py-3 text-sm font-bold text-[#6d3927]">₹1,099 · 6 inch</div></div></div></div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a5c3f]">Our menu</p><h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">A little something for every craving.</h2></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map(([name, desc, price], i) => <article key={name}><div className={`aspect-[4/5] rounded-[1.5rem] ${i % 2 === 0 ? "bg-gradient-to-br from-[#e8c7b4] to-[#a9674e]" : "bg-gradient-to-br from-[#d9d2bc] to-[#9d8c67]"} p-5`}><span className="rounded-full bg-white/75 px-3 py-1 text-xs font-bold">0{i + 1}</span></div><h3 className="mt-5 font-serif text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#684b3e]/65">{desc}</p><div className="mt-3 flex items-center justify-between"><strong className="text-sm">{price}</strong><a href="https://wa.me/919876543210" className="text-sm font-semibold underline underline-offset-4">Order →</a></div></article>)}</div></section>

      <section id="occasions" className="border-y border-[#5b3424]/10 bg-[#f3e7dc]"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a5c3f]">Made for moments</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Make it personal.</h2><p className="mt-5 max-w-md leading-7 text-[#684b3e]/65">Tell us the occasion, colours and mood. We&apos;ll help turn your idea into a cake that feels made just for them.</p><a href="https://wa.me/919876543210" className="mt-7 inline-block rounded-full bg-[#6d3927] px-6 py-3.5 text-sm font-semibold text-white">Start a custom order</a></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{occasions.map((item) => <div key={item} className="rounded-2xl bg-white/70 p-5 font-semibold">{item}</div>)}</div></div></div></section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-10 lg:grid-cols-2"><div className="rounded-[2rem] bg-gradient-to-br from-[#b87559] to-[#e7c7b5] p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">Our story</p><h2 className="mt-20 font-serif text-5xl text-white sm:text-6xl">Good things<br/><i>take time.</i></h2></div><div className="flex flex-col justify-center"><p className="text-lg leading-8 text-[#684b3e]/75">Crumb & Bloom started with a simple idea: neighbourhood baking should feel personal again. We bake in small batches, use seasonal ingredients and finish every order by hand.</p><div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#5b3424]/10 pt-7 text-sm"><div><strong className="text-2xl">7am</strong><p className="mt-1 text-[#684b3e]/50">first bakes</p></div><div><strong className="text-2xl">100%</strong><p className="mt-1 text-[#684b3e]/50">made fresh</p></div><div><strong className="text-2xl">4.9/5</strong><p className="mt-1 text-[#684b3e]/50">local love</p></div></div></div></div></section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-4xl rounded-[2rem] bg-[#6d3927] px-7 py-14 text-center text-white sm:px-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f0c9b0]">Ready when you are</p><h2 className="mt-4 font-serif text-4xl sm:text-6xl">Something sweet is waiting.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/65">Order for pickup, ask about today&apos;s bakes or send us your custom cake idea.</p><a href="https://wa.me/919876543210" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#6d3927]">Chat on WhatsApp</a></div></section>

      <footer className="border-t border-[#5b3424]/10 px-5 py-8 text-center text-xs text-[#684b3e]/50">Crumb & Bloom · Bakery Demo · <Link href="/" className="underline underline-offset-4">Back to all demos</Link></footer>
    </main>
  );
}
