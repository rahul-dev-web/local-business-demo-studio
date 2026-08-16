export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f3ed] px-6 text-[#171614]">
      <div className="text-center">
        <div className="mx-auto h-2 w-24 overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-black" />
        </div>
        <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-black/40">Loading preview</p>
      </div>
    </main>
  );
}
