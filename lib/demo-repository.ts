import type { BusinessProfile, DemoRepository } from "@/lib/demo-schema";
import { personalizedDemos } from "@/data/personalized-demos";

const profiles: BusinessProfile[] = personalizedDemos.map((demo) => ({
  id: demo.slug,
  slug: demo.slug,
  name: demo.businessName,
  industry: demo.category.toLowerCase().replace(/\s+/g, "-") as BusinessProfile["industry"],
  tagline: demo.tagline,
  contact: {
    phone: demo.phone,
    whatsapp: demo.whatsapp,
    address: demo.address,
    city: demo.city,
  },
  services: demo.services,
  branding: { accent: demo.accent },
  status: "active",
}));

/** In-memory adapter used today. Replace this implementation with Supabase later. */
export const demoRepository: DemoRepository = {
  async getBySlug(slug) {
    return profiles.find((profile) => profile.slug === slug) ?? null;
  },
  async listActive() {
    return profiles.filter((profile) => profile.status === "active");
  },
};
