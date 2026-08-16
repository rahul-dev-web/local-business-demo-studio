export const studioConfig = {
  name: "YOUR STUDIO",
  whatsapp: "919999999999",
  phone: "+919999999999",
  whatsappMessage:
    "Hi, I saw one of your local business website demos and would like to discuss a website for my business.",
};

export function getWhatsAppUrl(message = studioConfig.whatsappMessage) {
  return `https://wa.me/${studioConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getPhoneUrl() {
  return `tel:${studioConfig.phone}`;
}
