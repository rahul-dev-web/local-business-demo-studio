import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f3ed] px-6 text-[#171614]">
      <section className="max-w-xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-black/35">404 · Preview not found</p>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-7xl">That demo doesn&apos;t exist.</h1>
        <p className="mx-auto mt-5 max-w-md leading-7 text-black/50">The link may be outdated or the personalised preview may no longer be active.</p>
        <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white"><ArrowLeft size={16} /> Back to demos</a>
      </section>
    </main>
  );
}
