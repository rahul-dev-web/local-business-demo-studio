import Link from "next/link";

const courses = [
  { title: "JEE Foundation", meta: "Class 9–10", text: "Build strong fundamentals in Physics, Chemistry and Mathematics." },
  { title: "JEE Main & Advanced", meta: "Class 11–12", text: "Structured preparation, problem solving and full-length test practice." },
  { title: "NEET Achievers", meta: "Class 11–12", text: "Concept-first Biology, Chemistry and Physics with regular assessments." },
];

const faculty = [
  ["Dr. Arjun Mehta", "Physics · 12+ years"],
  ["Priya Sharma", "Chemistry · 10+ years"],
  ["Rahul Verma", "Mathematics · 14+ years"],
];

export const metadata = {
  title: "Vertex Academy — Coaching Institute Demo",
  description: "A premium coaching institute website demo focused on courses, results and admissions.",
};

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight">Vertex Academy</Link>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#courses">Courses</a><a href="#results">Results</a><a href="#faculty">Faculty</a><a href="#contact">Admissions</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white">Enquire Now</a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#9a6b27]">Admissions open · 2026–27</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">Serious preparation. <span className="italic text-[#9a6b27]">Visible results.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/60 sm:text-lg">A focused coaching experience built around expert faculty, disciplined practice and measurable academic progress.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-[#151515] px-6 py-3.5 text-sm font-semibold text-white">Book a counselling session</a><a href="#courses" className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold">Explore courses</a></div>
            <div className="mt-12 flex gap-10 border-t border-black/10 pt-7"><div><strong className="text-2xl">94%</strong><p className="mt-1 text-xs text-black/50">students improved</p></div><div><strong className="text-2xl">1,200+</strong><p className="mt-1 text-xs text-black/50">students mentored</p></div><div><strong className="text-2xl">18 yrs</strong><p className="mt-1 text-xs text-black/50">academic experience</p></div></div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#ded6c7] p-7 sm:p-10">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-black/10 bg-gradient-to-br from-[#f3eee4] via-[#c9bda9] to-[#827663] p-7 shadow-2xl"><div className="flex h-full flex-col justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-black/45">The Vertex Method</span><div><p className="font-serif text-4xl leading-tight">Learn the concept.<br/>Practice the skill.<br/><i>Own the result.</i></p><p className="mt-5 max-w-xs text-sm leading-6 text-black/55">Small batches. Weekly testing. Personal academic mentorship.</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="courses" className="border-y border-black/10 bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a6b27]">Programs</p><h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">Courses designed around the student&apos;s next milestone.</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{courses.map((course, i) => <article key={course.title} className="rounded-3xl border border-black/10 p-7"><span className="text-xs font-bold text-black/35">0{i + 1}</span><p className="mt-10 text-xs font-bold uppercase tracking-[.16em] text-[#9a6b27]">{course.meta}</p><h3 className="mt-2 font-serif text-2xl">{course.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{course.text}</p><a href="#contact" className="mt-8 inline-block text-sm font-semibold underline underline-offset-4">Get course details →</a></article>)}</div></div></section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a6b27]">Results</p><h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Progress you can measure.</h2></div><div className="grid gap-4 sm:grid-cols-3"><div className="rounded-3xl bg-[#151515] p-7 text-white"><p className="text-4xl font-serif">98%</p><p className="mt-12 text-sm text-white/60">board students passed</p></div><div className="rounded-3xl border border-black/10 p-7"><p className="text-4xl font-serif">640+</p><p className="mt-12 text-sm text-black/55">competitive exam selections</p></div><div className="rounded-3xl border border-black/10 p-7"><p className="text-4xl font-serif">Top 1%</p><p className="mt-12 text-sm text-black/55">national rankers</p></div></div></div></section>

      <section id="faculty" className="bg-[#e9e2d6] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9a6b27]">Faculty</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Teachers who stay invested.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{faculty.map(([name, role]) => <div key={name} className="rounded-3xl bg-white/70 p-6"><div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#c8bca8] to-[#786d5d]"/><h3 className="mt-5 font-semibold">{name}</h3><p className="mt-1 text-sm text-black/50">{role}</p></div>)}</div></div></section>

      <section id="contact" className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-4xl rounded-[2rem] bg-[#151515] px-6 py-14 text-center text-white sm:px-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d8b277]">Admissions</p><h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl tracking-tight sm:text-6xl">Find the right program for your goal.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/55">Talk to our academic counsellor about batches, fees, scholarships and the best starting point for your preparation.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="tel:+919876543210" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black">Call admissions</a><a href="https://wa.me/919876543210" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold">WhatsApp us</a></div></div></section>

      <footer className="border-t border-black/10 px-5 py-8 text-center text-xs text-black/45">Vertex Academy · Coaching Institute Demo · <Link href="/" className="underline underline-offset-4">Back to all demos</Link></footer>
    </main>
  );
}
