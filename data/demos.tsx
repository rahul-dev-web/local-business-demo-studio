import { ArrowUpRight, Dumbbell, GraduationCap, HeartPulse, Hotel, Scissors, ShoppingBag, UtensilsCrossed, Wrench, House } from "lucide-react";

export const demos = [
  { slug: "restaurant", title: "Restaurants & Cafés", description: "Menus, reservations, galleries and local discovery.", icon: UtensilsCrossed, tag: "Food & Hospitality", category: "Food", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=82", accent: "#b45309" },
  { slug: "salon", title: "Salons & Barbers", description: "Services, pricing, portfolios and appointment-focused experiences.", icon: Scissors, tag: "Beauty & Grooming", category: "Beauty", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=82", accent: "#a85570" },
  { slug: "gym", title: "Gyms & Fitness", description: "Programs, memberships, trainers and trial conversions.", icon: Dumbbell, tag: "Health & Fitness", category: "Health", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=82", accent: "#65a30d" },
  { slug: "clinic", title: "Clinics & Doctors", description: "Professional services, doctors, appointments and location.", icon: HeartPulse, tag: "Healthcare", category: "Health", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=82", accent: "#0284c7" },
  { slug: "coaching", title: "Coaching Institutes", description: "Courses, faculty, results, batches and admissions.", icon: GraduationCap, tag: "Education", category: "Education", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=82", accent: "#7c3aed" },
  { slug: "hotel", title: "Hotels & Guest Houses", description: "Rooms, amenities, galleries and booking journeys.", icon: Hotel, tag: "Hospitality", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=82", accent: "#78716c" },
  { slug: "bakery", title: "Bakeries & Cake Shops", description: "Products, custom orders, occasions and enquiries.", icon: UtensilsCrossed, tag: "Food Retail", category: "Food", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=82", accent: "#db2777" },
  { slug: "retail", title: "Local Retail Stores", description: "Products, offers, location and direct enquiries.", icon: ShoppingBag, tag: "Retail", category: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=82", accent: "#2563eb" },
  { slug: "automobile", title: "Automobile & Garages", description: "Services, packages, trust signals and booking CTAs.", icon: Wrench, tag: "Automotive", category: "Services", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=82", accent: "#dc2626" },
  { slug: "real-estate", title: "Real Estate", description: "Properties, locations, listings and lead capture.", icon: House, tag: "Property", category: "Property", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=82", accent: "#059669" },
];

export function getDemo(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}

export function DemoCard({ demo }: { demo: (typeof demos)[number] }) {
  const Icon = demo.icon;

  return (
    <a
      href={`/demo/${demo.slug}`}
      className="group overflow-hidden rounded-[1.35rem] border border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,.045)] transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_20px_50px_rgba(0,0,0,.10)] sm:rounded-[1.7rem]"
      aria-label={`View ${demo.title} demo`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/[.05]">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${demo.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
          <span className="flex size-8 items-center justify-center rounded-xl bg-white/92 text-black shadow-sm backdrop-blur sm:size-9"><Icon size={16} aria-hidden="true" /></span>
          <span className="hidden rounded-full bg-black/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur sm:inline-flex">{demo.tag}</span>
        </div>
        <ArrowUpRight className="absolute right-3 top-3 size-5 text-white/90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:right-4 sm:top-4" aria-hidden="true" />
        <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[11px]">Website concept</p>
          <h3 className="mt-1 text-[1.05rem] font-black leading-tight tracking-[-0.035em] text-white sm:text-xl">{demo.title}</h3>
        </div>
      </div>
      <div className="p-3.5 sm:p-5">
        <p className="hidden text-sm leading-6 text-black/55 sm:block">{demo.description}</p>
        <div className="mt-1.5 flex items-center justify-between gap-3 text-[11px] font-black sm:mt-4 sm:text-sm">
          <span>Explore demo</span>
          <span className="text-black/35 transition-colors group-hover:text-black">View website →</span>
        </div>
      </div>
    </a>
  );
}