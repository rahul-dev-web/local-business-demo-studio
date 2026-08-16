import { ArrowUpRight, Dumbbell, GraduationCap, HeartPulse, Hotel, Scissors, ShoppingBag, UtensilsCrossed, Wrench, House } from "lucide-react";

export const demos = [
  { slug: "restaurant", title: "Restaurants & Cafés", description: "Menus, reservations, galleries and local discovery.", icon: UtensilsCrossed, tag: "Food & Hospitality" },
  { slug: "salon", title: "Salons & Barbers", description: "Services, pricing, portfolios and appointment-focused experiences.", icon: Scissors, tag: "Beauty & Grooming" },
  { slug: "gym", title: "Gyms & Fitness", description: "Programs, memberships, trainers and trial conversions.", icon: Dumbbell, tag: "Health & Fitness" },
  { slug: "clinic", title: "Clinics & Doctors", description: "Professional services, doctors, appointments and location.", icon: HeartPulse, tag: "Healthcare" },
  { slug: "coaching", title: "Coaching Institutes", description: "Courses, faculty, results, batches and admissions.", icon: GraduationCap, tag: "Education" },
  { slug: "hotel", title: "Hotels & Guest Houses", description: "Rooms, amenities, galleries and booking journeys.", icon: Hotel, tag: "Hospitality" },
  { slug: "bakery", title: "Bakeries & Cake Shops", description: "Products, custom orders, occasions and enquiries.", icon: UtensilsCrossed, tag: "Food Retail" },
  { slug: "retail", title: "Local Retail Stores", description: "Products, offers, location and direct enquiries.", icon: ShoppingBag, tag: "Retail" },
  { slug: "automobile", title: "Automobile & Garages", description: "Services, packages, trust signals and booking CTAs.", icon: Wrench, tag: "Automotive" },
  { slug: "real-estate", title: "Real Estate", description: "Properties, locations, listings and lead capture.", icon: House, tag: "Property" },
];

export function getDemo(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}

export function DemoCard({ demo }: { demo: (typeof demos)[number] }) {
  const Icon = demo.icon;
  const href = demo.slug === "clinic" ? "/clinic" : `/demo/${demo.slug}`;
  return (
    <a href={href} className="group rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
      <div className="mb-10 flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-black text-white"><Icon size={21} /></div>
        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-black/45">{demo.tag}</p>
      <h3 className="text-xl font-semibold tracking-tight">{demo.title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/55">{demo.description}</p>
      <div className="mt-7 text-sm font-semibold">View demo <span aria-hidden>→</span></div>
    </a>
  );
}
