// Central site config — WhatsApp number + pre-filled messages.
// Swap PHONE for the client's real WhatsApp Business number (international format, no +).

export const WHATSAPP_PHONE = '31616045419';

export const waLink = (message: string): string => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
};

// Pre-built CTAs used across the site
export const WA_LINKS = {
  visit: waLink(
    "Hi RVWS Pro! I'd like to request a visit to set up a Google Review system for my business."
  ),
  general: waLink('Hi RVWS Pro! I have a question about your review systems.'),
  standard: waLink(
    "Hi RVWS Pro! I'd like a Solo review system. Let's talk about what I need."
  ),
  premium: waLink(
    "Hi RVWS Pro! I'd like a Duo review system. Let's talk about what I need."
  ),
  custom: waLink(
    "Hi RVWS Pro! I'd like a custom review system. Let's talk about what I need."
  ),
};
