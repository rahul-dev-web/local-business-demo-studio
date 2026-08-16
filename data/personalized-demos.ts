export type PersonalizedDemo = {
  slug: string;
  businessName: string;
  category: string;
  tagline: string;
  city: string;
  phone: string;
  whatsapp: string;
  address: string;
  services: string[];
  accent?: string;
  websiteLabel?: string;
};

export const personalizedDemos: PersonalizedDemo[] = [
  {
    slug: "sharma-family-restaurant",
    businessName: "Sharma Family Restaurant",
    category: "Restaurant",
    tagline: "A warm place for good food, family and memorable meals.",
    city: "Raipur",
    phone: "+919999999999",
    whatsapp: "919999999999",
    address: "Main Market Road, Raipur, Chhattisgarh",
    services: ["Family dining", "Party bookings", "Takeaway", "Home-style meals"],
    accent: "warm",
    websiteLabel: "Restaurant preview",
  },
];

export function getPersonalizedDemo(slug: string) {
  return personalizedDemos.find((demo) => demo.slug === slug);
}

export function getPersonalizedDemoSlugs() {
  return personalizedDemos.map((demo) => demo.slug);
}
