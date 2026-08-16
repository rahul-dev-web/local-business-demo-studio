export const studioConfig = {
  name: "Rahul Dev Studio",
  whatsapp: "919981977828",
  phone: "+919981977828",
  email: "jarahul989@gmail.com",
  instagram: "https://www.instagram.com/rahul_jha_builds/",
  linkedin: "https://www.linkedin.com/in/rahul-kumar-jha-web-dev",
  github: "https://github.com/rahul-dev-web",
  location: "",
  whatsappMessage:
    "Hi Rahul! 👋 Maine aapke local business website demos dekhe hain. Mujhe apne business ke liye ek professional website banwani hai. Kya hum iske baare mein discuss kar sakte hain?",
};

export function getWhatsAppUrl(message = studioConfig.whatsappMessage) {
  return `https://wa.me/${studioConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getPhoneUrl() {
  return `tel:${studioConfig.phone}`;
}
