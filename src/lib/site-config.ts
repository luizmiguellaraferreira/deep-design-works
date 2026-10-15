import { z } from "zod";

// Set a complete international number here, with country and area codes.
export const siteConfig = { whatsappNumber: "+55 12", instagramUrl: "" };
const phoneSchema = z.string().regex(/^[1-9]\d{9,14}$/);
export function getWhatsAppUrl() {
  const phone = siteConfig.whatsappNumber.replace(/[\s()+-]/g, "");
  if (!phoneSchema.safeParse(phone).success) return null;
  const message = "Olá, Luiz! Gostaria de conversar sobre um site para o meu negócio.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}