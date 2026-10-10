/**
 * Central place for organization details used across the site.
 * Replace the placeholder values below with TMAS Academy's real ones.
 */
export const site = {
  name: 'TMAS Academy',
  tagline: 'Free STEM Education for Everyone',
  /** Contact address used by the Contact page form and footer. */
  email: 'hello@tmasacademy.org',
  /**
   * Link to the community space (Discord, Slack, etc.).
   * While this is empty, "Join" buttons send people to the Contact page instead.
   */
  communityUrl: '',
  /** Optional social links. Leave a value empty to hide it. */
  social: {
    instagram: '',
    github: '',
    youtube: '',
  },
} as const;
