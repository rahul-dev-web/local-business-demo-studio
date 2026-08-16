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

  return (
    <a
      href={`/demo/${demo.slug}`}
      className="group flex min-h-[126px] flex-col rounded-2xl border border-black/[0.08] bg-white/85 p-3.5 shadow-[0_6px_24px_rgba(0,0,0,.035)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,.08)] sm:min-h-[190px] sm:rounded-3xl sm:p-5 lg:p-6"
      aria-label={`View ${demo.title} demo`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#11110f] text-white sm:size-11 sm:rounded-2xl">
          <Icon size={17} strokeWidth={2.2} className="sm:hidden" aria-hidden="true" />
          <Icon size={20} strokeWidth={2.2} className="hidden sm:block" aria-hidden="true" />
        </div>
        <ArrowUpRight className="size-4 text-black/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black sm:size-5" aria-hidden="true" />
      </div>

      <div className="mt-auto pt-5 sm:pt-10">
        <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.16em] text-black/40 sm:mb-2 sm:text-[10px] sm:tracking-[0.18em]">{demo.tag}</p>
        <h3 className="text-[14px] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-xl sm:font-semibold sm:tracking-tight">{demo.title}</h3>
        <p className="mt-2 hidden text-sm leading-6 text-black/55 sm:block">{demo.description}</p>
        <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.08em] text-black/55 sm:mt-6 sm:text-sm sm:normal-case sm:tracking-normal sm:text-black">View demo <span aria-hidden>→</span></div>
      </div>
    </a>
  );
}
