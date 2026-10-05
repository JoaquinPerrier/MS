export const site = {
  name: "Jampe",
  tagline:
    "Construimos el futuro de la presencia digital con ingeniería de precisión y diseño de alto nivel para empresas visionarias.",
  email: "contacto@jampe.com.ar",
  phone: "+34 900 123 456",
  whatsappMessage: "Hola, quiero hacer una consulta.",
} as const;

export function whatsappUrl() {
  const digits = site.phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

export const images = {
  hero: "/Landing.png",
  software: "/DesarrolloSoftwareLanding.jpg",
  branding: "/DesarrolloMarcaLanding.jpg",
  methodology: "/Api.jpeg",
  softwareFactory: "/FabricaServicios.jpg",
  brandingPillar: "/MarketingServicio.jpg",
} as const;

export const navItems = [
  { href: "/", label: "Inicio", match: "home" },
  { href: "/servicios", label: "Servicios", match: "services" },
  { href: "/metodologia", label: "Metodología", match: "methodology" },
] as const;
