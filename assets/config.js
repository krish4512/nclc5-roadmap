/* ------------------------------------------------------------------ *
 * SITE CONFIGURATION — the one file to edit before you launch.
 *
 * Everything that identifies your business (name, contact email, legal
 * entity, prices, checkout links) lives here, and every page reads it.
 * See README.md, "Before you launch", for a step-by-step checklist.
 * ------------------------------------------------------------------ */
window.SITE = {
  /* Public product name, shown in the header, titles and emails. */
  brand: "Prêt Français",

  /* Your live domain, no trailing slash. Used in legal pages. */
  url: "https://www.example.com",

  /* Where customers write to you. Shown on Contact, Privacy and Terms. */
  email: "support@example.com",

  /* The legal entity that sells the subscription (you, or your company). */
  legalName: "Your Business Name",

  /* Province / state and country whose laws govern the Terms. */
  jurisdiction: "Ontario, Canada",

  /* Date shown as "Last updated" on the legal pages. */
  legalUpdated: "September 27, 2026",

  /* Days after a customer's first payment in which they can ask for a
     refund. Shown on Pricing and in the Terms. */
  refundDays: "14",

  /* Currency label shown next to prices. */
  currency: "CAD",

  /* ---------------------------------------------------------------- *
   * Plans. `link` is a Stripe Payment Link (https://buy.stripe.com/…).
   * Create one per plan in Stripe → Payment Links, set it to a
   * recurring price, and paste it here. While a link is empty the
   * button falls back to emailing you, so nothing is ever broken.
   * ---------------------------------------------------------------- */
  plans: {
    monthly: {
      name: "Pro Monthly",
      price: "14.99",
      period: "month",
      link: ""
    },
    quarterly: {
      name: "Pro · Exam Season",
      price: "34.99",
      period: "3 months",
      note: "Save 22% vs. monthly",
      link: ""
    }
  },

  /* Stripe customer portal login link (Stripe → Settings → Billing →
     Customer portal). Lets subscribers cancel or update their card. */
  customerPortal: "",

  /* ---------------------------------------------------------------- *
   * Free cheat sheets (cheatsheets.html). To collect email sign-ups
   * before the downloads unlock, paste a form endpoint that accepts a
   * POST with an "email" field — e.g. a Formspree form URL
   * (https://formspree.io/f/xxxx) or a Mailchimp / ConvertKit /
   * Buttondown form action. Leave it empty and the PDFs are simply
   * free to download, no email asked.
   * ---------------------------------------------------------------- */
  leadForm: "",

  /* "Report a mistake" buttons on lessons and drills. Paste a form
     endpoint (a Formspree form URL works) to receive reports there; it
     gets "where", "message", "page" and an optional "email". Leave it
     empty and the button opens a pre-filled email to `email` above. */
  feedbackForm: "",

  /* ---------------------------------------------------------------- *
   * Access control. A static site cannot verify a payment on its own,
   * so by default every feature is open ("paywall: false") and the
   * checkout simply takes payment. When you connect a membership
   * service, set paywall to true and replace hasPro() with its check;
   * Pro-only features then show an upgrade card to everyone else.
   * ---------------------------------------------------------------- */
  paywall: false,
  hasPro: function () { return false; }
};
