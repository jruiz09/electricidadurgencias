// Configuración central del sitio.
// Cambiando estos valores se actualiza todo el sitio (WhatsApp, teléfono, footer, SEO, etc.)

// TODO: reemplazar por el número real de WhatsApp del electricista antes de publicar.
// Se reutiliza temporalmente el número del sitio de referencia (plomería) a pedido del cliente.
const WHATSAPP_NUMBER = "5491136102893";

export const site = {
  brand: "Electricidad Urgencias",
  tagline: "Electricistas matriculados las 24 horas",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: "Hola! Necesito un electricista urgente.",
  phoneDisplay: "+54 9 11 3610-2893",
  phoneHref: "tel:+5491136102893",
  zona: "CABA – GBA Norte – GBA Sur – GBA Oeste",
  year: new Date().getFullYear(),
};

export const whatsappLink = (message = site.whatsappMessage) =>
  `https://api.whatsapp.com/send?phone=${site.whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;
