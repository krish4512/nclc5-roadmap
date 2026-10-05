# Launch dashboard: Prêt Français

The owner's view of what's needed to go live and take payments. Updated at the end of every work session.

_Last updated: 2026-10-04_

## Launch checklist

| # | Item | Status | Notes |
|---|---|---|---|
| 1 | QA baseline green (`tools/qa/run.sh`) | done | 13/13 checks pass on `main` |
| 2 | Mistake of the day links to the removed `#mod/mistakes` section | done | [#34](https://github.com/krish4512/nclc5-roadmap/pull/34): now opens the lesson (`#<module>/l<n>`) |
| 3 | `SITE.url` placeholder (`www.example.com`) on Privacy and Terms | done | [#35](https://github.com/krish4512/nclc5-roadmap/pull/35): set to the live github.io address |
| 4 | Canonical links for search engines | done | [#36](https://github.com/krish4512/nclc5-roadmap/pull/36): built from `SITE_URL` in `tools/partials.py` |
| 5 | Support email (`support@example.com`) | **blocked** | Needs owner (see below). Used by Contact, Privacy, Terms and every "Report a mistake" email and payment fallback |
| 6 | Legal name (`Your Business Name`) | **blocked** | Needs owner. Shown in every footer and in Privacy and Terms |
| 7 | Stripe Payment Links: monthly and Exam Season | **blocked** | Needs owner. Until set, Subscribe buttons open an email instead |
| 8 | Stripe Customer Portal link | **blocked** | Needs owner. Until set, "Manage subscription" opens an email |
| 9 | Real Pro gating (`paywall: false`, `hasPro()` always false) | **blocked** | Needs owner's approval of the plan under "Decisions to make" |
| 10 | Privacy and Terms content | done (review) | Already cover Stripe, refunds (14 days, first payment), localStorage-only progress, Quebec consumer law. Must be updated when analytics (11) or Pro keys (9) ship |
| 11 | Privacy-friendly analytics and pricing-button events | todo | Needs owner to choose a provider and create the account |
| 12 | Pricing page vs `config.js` | done | $14.99/month and $34.99/3 months; "Save 22%" is correct (34.99 vs 3 × 14.99 = 44.97) |
| 13 | Custom domain (CNAME, partials, robots, sitemap, og images) | **blocked** | Needs the domain name |
| 14 | Launch video (old brand) | **blocked** | No `brag-output*/` folder is in the repo. Need to know where it is, or re-render from scratch |
| 15 | Launch copy (Reddit, Facebook groups, Product Hunt) in `LAUNCH-COPY.md` | todo | Can be drafted now; prices and links get filled once 7 and 13 are done |

## Blocked on owner: what I need from you

1. **Support email** that customers will write to (for example `bonjour@yourdomain.ca`).
2. **Legal name** of who sells the subscription: your full name, or your registered business name.
3. **Stripe Payment Links** (`https://buy.stripe.com/…`), one each for:
   - Pro Monthly: $14.99 CAD per month, recurring.
   - Pro · Exam Season: $34.99 CAD every 3 months, recurring.
   - Set each link's "after payment" redirect to `https://krish4512.github.io/nclc5-roadmap/pricing.html?paid=1` (we'll change it once the domain is set).
4. **Stripe Customer Portal login link** (Stripe → Settings → Billing → Customer portal).
5. **Yes or no on the Pro gating plan** below, and a free Cloudflare account if yes.
6. **Analytics choice:** Plausible ($9/month and up), or a free option such as Cloudflare Web Analytics or GoatCounter.
7. **Custom domain name**, if you want one at launch.
8. **Where the old launch video lives** (the `brag-output*` folder isn't in the repo).
9. **What's new dates:** entries are dated October 5 to 10, 2026, which is in the future. Should they be redated?

## Decisions to make

**Pro gating on a static site (item 9). Proposal, not built yet:**
- After paying, Stripe sends the buyer back to `pricing.html` with their checkout session.
- A tiny Cloudflare Worker (free tier) asks Stripe whether that session belongs to an active subscription. The Stripe secret key lives only in the Worker's settings, never in this repo.
- If it does, the Worker returns an access key. The site saves it in localStorage with an expiry (for example 7 days), and `SITE.hasPro()` reads it.
- When the key expires, the site quietly asks the Worker again. If the subscription was cancelled, Pro locks.
- To use Pro on a second device, you paste the same key on the Pricing page.
- The free course is unchanged. Only the three existing `NCLC.requirePro` spots (full mock exams, writing coach, speaking practice) are gated.
- Limit: someone could share their key. The Worker can cap how many devices check in per key if that becomes a problem.

## Decisions made

- 2026-10-04: Placeholder site address replaced with the live github.io address. It changes again with the custom domain.
- 2026-10-04: Mistakes with no mapped lesson (7 of 111) link to their module page instead.

## Other improvements found

- `_gallery.html` (an internal illustration gallery) is public and can be indexed. Consider removing it or adding `noindex`.
- Pro features are open to everyone right now while the Pricing page sells them. That's fine until checkout works, but turn the paywall on in the same release as the payment links.

## Next actions

1. Draft `LAUNCH-COPY.md` (prices and links left as marked gaps until the owner supplies them).
2. On the owner's answers: fill in `config.js` (email, legal name, Stripe links), then build the Pro gating Worker.
3. Analytics and the privacy update, then the custom domain.
