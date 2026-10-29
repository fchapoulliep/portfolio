/**
 * Contact details shared across the site, so that every link uses the same address
 */
export const CONTACT_EMAIL = "florianchapino@gmail.com";

export const RESUME_URL = `${import.meta.env.BASE_URL}experiences/CVChapoulliePinoFlorian.pdf`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/florianpino/";
export const GITHUB_URL = "https://github.com/fchapoulliep";

/**
 * EmailJS identifiers of the contact form. They are public by design (the
 * browser sends them): the allowed domains are set in the EmailJS dashboard,
 * and the account's private key must never appear in this repository.
 */
export const EMAILJS = {
  serviceId: "service_9e35x0b",
  templateId: "template_lf8lawz",
  publicKey: "C5AaqySgCRvvxZqet",
} as const;

/**
 * Longest message the contact form accepts
 */
export const MESSAGE_MAX_LENGTH = 2000;

/**
 * Minimum delay between two messages sent from the same browser
 */
export const SEND_COOLDOWN_MS = 60_000;
