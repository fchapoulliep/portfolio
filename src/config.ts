/**
 * Contact details shared across the site, so that every link uses the same address
 */
export const CONTACT_EMAIL = "florian.chapoullie-pino@etudiant.univ-lr.fr";

export const RESUME_URL = `${import.meta.env.BASE_URL}experiences/CVChapoulliePinoFlorian.pdf`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/florianpino/";
export const GITHUB_URL = "https://github.com/fchapoulliep";

/**
 * EmailJS identifiers of the contact form. They are public by design: the
 * allowed domains and the reCAPTCHA are set in the EmailJS dashboard.
 */
export const EMAILJS = {
  serviceId: "service_73k4ey1",
  templateId: "template_k5hn2mp",
  publicKey: "oBHTiHRivtj8QSy34",
} as const;

/**
 * Longest message the contact form accepts
 */
export const MESSAGE_MAX_LENGTH = 2000;

/**
 * Minimum delay between two messages sent from the same browser
 */
export const SEND_COOLDOWN_MS = 60_000;
