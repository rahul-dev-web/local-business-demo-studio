export type IndustryContent = {
  eyebrow: string;
  headline: string;
  description: string;
  services: string[];
  trustPoints: string[];
  primaryAction: string;
};

export const industryContent: Record<string, IndustryContent> = {
  restaurant: { eyebrow: "Built for diners", headline: "Turn hungry visitors into bookings and orders.", description: "Show your menu, signature dishes, location and opening hours before a customer ever calls.", services: ["Digital menu", "Table reservations", "WhatsApp orders", "Google Maps"], trustPoints: ["Mobile-first menu", "One-tap calling", "Local discovery", "Fast enquiry flow"], primaryAction: "Book a table" },
  salon: { eyebrow: "Built for appointments", headline: "Make your next appointment one tap away.", description: "Present services, pricing, stylists and your work so customers can choose with confidence.", services: ["Service menu", "Price packages", "Gallery", "Appointment CTA"], trustPoints: ["Service discovery", "Portfolio gallery", "WhatsApp booking", "Location ready"], primaryAction: "Book appointment" },
  gym: { eyebrow: "Built for conversions", headline: "Turn motivation into memberships.", description: "Show programs, trainers, facilities and plans with a clear path to a free trial.", services: ["Programs", "Membership plans", "Trainer profiles", "Free trial"], trustPoints: ["Plan comparison", "Trainer credibility", "Trial CTA", "Mobile-first"], primaryAction: "Start free trial" },
  clinic: { eyebrow: "Built for patient trust", headline: "Give patients clarity before they visit.", description: "Explain specializations, services, timings and appointment options in a professional experience.", services: ["Doctor profile", "Specializations", "Appointments", "Clinic timings"], trustPoints: ["Trust-first design", "Clear services", "Appointment CTA", "Directions"], primaryAction: "Book appointment" },
  coaching: { eyebrow: "Built for admissions", headline: "Turn course interest into enquiries.", description: "Present courses, faculty, results and batches in a focused admissions journey.", services: ["Course catalogue", "Results", "Faculty", "Batch information"], trustPoints: ["Course discovery", "Social proof", "Admission CTA", "Enquiry flow"], primaryAction: "Enquire now" },
  hotel: { eyebrow: "Built for stays", headline: "Make your property easier to choose.", description: "Show rooms, amenities, photos, location and booking intent in one polished experience.", services: ["Room showcase", "Amenities", "Gallery", "Booking CTA"], trustPoints: ["Room discovery", "Visual gallery", "Location", "Direct enquiry"], primaryAction: "Check availability" },
  bakery: { eyebrow: "Built for cravings", headline: "Make your best products impossible to ignore.", description: "Put signature cakes, menus, custom orders and pickup details in front of local customers.", services: ["Product showcase", "Custom orders", "Gallery", "Pickup details"], trustPoints: ["Visual-first design", "Order CTA", "WhatsApp", "Local discovery"], primaryAction: "Place an enquiry" },
  retail: { eyebrow: "Built for local shopping", headline: "Bring your store online without losing its local feel.", description: "Highlight products, offers, store details and easy contact options for nearby customers.", services: ["Product highlights", "Offers", "Store information", "WhatsApp enquiries"], trustPoints: ["Product discovery", "Local reach", "Offer visibility", "Quick contact"], primaryAction: "Visit store" },
  automobile: { eyebrow: "Built for service leads", headline: "Turn vehicle problems into service bookings.", description: "Show services, expertise, packages, location and a fast route to call or WhatsApp.", services: ["Service catalogue", "Packages", "Workshop proof", "Booking CTA"], trustPoints: ["Service clarity", "Trust signals", "Call CTA", "Directions"], primaryAction: "Book a service" },
  "real-estate": { eyebrow: "Built for property enquiries", headline: "Help buyers discover the right property faster.", description: "Present listings, highlights, location and enquiry options in a focused property experience.", services: ["Property listings", "Key details", "Location", "Enquiry CTA"], trustPoints: ["Property discovery", "Clear details", "Lead capture", "Call ready"], primaryAction: "Request details" },
};

export function getIndustryContent(category: string) {
  return industryContent[category.toLowerCase().replace(/\s+/g, "-")];
}
