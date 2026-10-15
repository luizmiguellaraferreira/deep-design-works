import { describe, expect, it } from "vitest";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

describe("WhatsApp contact configuration", () => {
  it("does not publish an incomplete contact number", () => {
    expect(getWhatsAppUrl()).toBeNull();
  });
  it("encodes the message and supports a complete international number", () => {
    const original = siteConfig.whatsappNumber;
    try {
      siteConfig.whatsappNumber = "+55 12 99999-9999";
      const url = getWhatsAppUrl();
      expect(url).not.toBeNull();
      expect(url?.startsWith("https://wa.me/5512999999999?text=")).toBe(true);
      expect(url).not.toContain(" ");
    } finally {
      siteConfig.whatsappNumber = original;
    }
  });
});
