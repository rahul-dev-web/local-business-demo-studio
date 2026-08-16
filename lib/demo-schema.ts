export type IndustryKey =
  | "restaurant"
  | "salon"
  | "gym"
  | "clinic"
  | "coaching"
  | "hotel"
  | "bakery"
  | "retail"
  | "automobile"
  | "real-estate";

export type DemoContact = {
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
};

export type BusinessProfile = {
  id: string;
  slug: string;
  name: string;
  industry: IndustryKey;
  tagline: string;
  contact: DemoContact;
  services: string[];
  branding?: {
    logoUrl?: string;
    accent?: string;
  };
  status: "draft" | "active" | "archived";
};

/**
 * Database-ready contract for personalized demos.
 * The UI depends on this contract rather than a database implementation,
 * so the source can later move from TypeScript data to Supabase without
 * rewriting the presentation layer.
 */
export type DemoRepository = {
  getBySlug(slug: string): Promise<BusinessProfile | null>;
  listActive(): Promise<BusinessProfile[]>;
};

export const INDUSTRY_KEYS: IndustryKey[] = [
  "restaurant",
  "salon",
  "gym",
  "clinic",
  "coaching",
  "hotel",
  "bakery",
  "retail",
  "automobile",
  "real-estate",
];
