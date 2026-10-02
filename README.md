# Prêt Français

A static website for learners preparing for **NCLC / CLB 5 (CEFR B1)** in French on the
**TCF Canada** or **TEF Canada**. It includes a sequenced course, daily review,
timed mock exams, and the pages you need to sell a subscription.

It is plain HTML, CSS and JavaScript. There is no build step, no framework and no server code.
You upload the folder and it works.

## What's in the box

| Page | What it is |
| --- | --- |
| `index.html` | Landing page |
| `today.html` | **Today**: the learner's hub — continue, daily review, word & mistake of the day, streak, exam countdown, badges, share card, invite, and progress backup (export / import) |
| `learn.html` + `assets/course-*.js` | The French course: 19 research-based modules from pronunciation to B1, each in four steps — **Lessons** (cheat code, examples, and the pronunciation points and common mistakes that belong to each lesson), **Practice** (quick questions per lesson), **Check** (quiz + writing task) and **Done**; plus short TCF speaking task 2 and task 3 kits (lessons and a check only). Each module shows an honest time estimate worked out from its content |
| `assets/course-visuals.js` | A "cheat code" picture at the top of each lesson (formula, conjugation grid, side-by-side, timeline…), built from a short spec per lesson — edit the `data` object to change one |
| `assets/course-practice.js` | "Try it" questions for every lesson (choose or type), the lesson behind each module-check question (`quizLesson`), the lesson each common mistake and pronunciation point sits in (`notes`), and the pool for the A1 / A2 / B1 checkpoints (`learn.html#checkpoint-A1`). Wrong answers are saved by `NCLC.miss()` and come back in Daily review |
| `assets/course-visuals.css` | Styles for the cheat-code pictures, shared by `learn.html` and the PDF cheat sheets |
| `assets/course-writing.js` | The "Write it" task for each module: prompt, word range, live checks (regular expressions, matched with Unicode word boundaries), mistake hints and a model answer |
| `review.html` + `assets/srs.js` | Daily review: spaced repetition over the vocabulary, sentences and mistakes of the modules reached |
| `exam.html` + `exam-data.js` | Mock exam: 20 listening and 20 reading questions (exam or practice mode), 3 writing tasks with a live coach and model answers, 3 speaking tasks with timers and recording; plus a **full mock** in one sitting with an estimated NCLC per skill |
| `prep.html` + `assets/topics.js`, `assets/writing-models.js`, `guide-*.html` | **Exam prep** in one page with three panels (`#speaking`, `#writing`, `#guides`): 60 TCF-style speaking topics with the real timers and recording, writing models at NCLC 4, 5 and 7, and the free exam guides (SEO articles) |
| `quiz.html`, `conjugate.html`, `speak.html`, `roadmap.html`, `topics.html`, `writing.html`, `guides.html` | Small redirect pages so old links keep working (drills → Daily review, conjugator / listen & repeat / grammar reference → the course, the rest → Exam prep) |
| `certificate.html` | Printable certificate of completion, unlocked when all 21 modules are done |
| `whats-new.html` | Changelog — add an entry at the top whenever you ship something |
| `start.html` | 2-minute placement check: 12 questions from A1 to B1 that recommend a starting module and a plan for the learner's test date |
| `cheatsheets.html` + `assets/cheatsheets/` | 21 free PDF cheat sheets (a summary page plus a page of visual cheat codes per module, plus all-in-one), with an optional email sign-up to unlock them |
| `pricing.html` | Plans and Stripe checkout buttons |
| `contact.html` | Support email, billing portal link, FAQ |
| `privacy.html`, `terms.html` | Privacy policy, and terms of service with the refund policy |
| `404.html` | Not-found page |
| `assets/brand/` | The logo: `mark.svg` (speech bubble + the circumflex of *prêt*), `mark-white.svg` for colour/dark backgrounds, `logo.svg` / `logo-white.svg` lockups, and usage notes. The favicon, app icons, link previews and PDFs are generated from these |
| `assets/config.js` | **The one file you edit before launch** |
| `assets/site.css`, `assets/site.js`, `assets/speech.js` | Shared design system, header and footer behaviour, and French text-to-speech |
| `tools/partials.py` | Keeps the shared header and footer identical on every page (optional; see below) |
| `tools/cheatsheets.js` | Rebuilds the cheat-sheet PDFs and previews from the course content |
| `tools/build-index.js` | Rebuilds `assets/course-index.js` (the small course digest used by Today and Daily review) |
| `assets/art/` + `tools/art.py` | The illustrations (one per page, plus guide covers and the landing-page journey). Plain SVG coloured by the art tokens in `site.css`, so they follow light and dark mode; `tools/partials.py` inlines them where a page has `<!-- partial:art NAME -->` |
| `tools/page-previews.js` | Renders a link-preview image per page into `assets/og/` from its illustration |
| `tools/brand-assets.js` | Renders the home-screen icons (`assets/icons/`) and the link-preview image (`assets/og-image.jpg`) |
| `.claude/skills/brag-slim/` | The [`/brag-slim`](https://github.com/latent-spaces/brag) agent skill (MIT): ask Claude Code "let's /brag about this" to make a ~20-second launch video of the site with music and share copy. Output goes to `brag-output/`, which git ignores |

## Before you launch

1. **Edit `assets/config.js`.** Set your brand name, domain, support email, legal
   business name, jurisdiction, prices and refund window. Every page reads these values.
2. **Create your Stripe products.**
   - In Stripe, create a product for each plan with a recurring price (for example
     monthly, and every 3 months).
   - For each price, create a **Payment Link** (Stripe → Payment Links → New). Under
     *After payment*, you can point the confirmation page to `https://your-domain/learn.html`.
   - Paste each link into `plans.monthly.link` and `plans.quarterly.link` in `config.js`.
   - Turn on the **Customer portal** (Stripe → Settings → Billing → Customer portal),
     copy its login link, and paste it into `customerPortal`. This is where subscribers
     cancel and update their card.
   - Until a link is set, its button opens an email to you instead, so nothing is broken.
   - Consider turning on Stripe Tax for GST/HST/QST if you're required to collect it.
3. **When you move to your own domain**, replace `https://krish4512.github.io/nclc5-roadmap` in
   `robots.txt`, `sitemap.xml` and `SITE_URL` in `tools/partials.py` (then run
   `python3 tools/partials.py` so link previews point at the new address).
4. **Read the Privacy Policy and Terms** (`privacy.html`, `terms.html`) and adjust them to
   your business. They reflect exactly what this code does, but they are templates, not legal
   advice. Have a lawyer review them before you take payments.

## Access control (the paywall)

A static site can take payments, but it can't check who has paid, because that needs a
server or a membership service. So by default **every feature is open** (`paywall: false`),
and Stripe only handles billing.

To restrict Pro features (mock exams, writing coach, speaking practice, weak-item review) to
subscribers:

1. Add a membership service that works with static sites and Stripe, such as Memberstack,
   Outseta or Clerk. Or put the site behind your own login.
2. In `config.js`, set `paywall: true` and make `hasPro()` return that service's
   "is this visitor a paying member?" answer.

Non-subscribers then see an upgrade card instead of the Pro feature. Everything in the Free
plan stays open either way.

## Deploying

Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages or an S3 bucket.

- **Netlify / Cloudflare Pages / Vercel:** drag the folder in, or connect this repo, with no
  build command and the root folder as the output directory.
- The site must be served over **http(s)**. Opening the files directly (`file://`) won't work,
  because the practice page loads the roadmap with `fetch`.
- `404.html` sets `<base href="/nclc5-roadmap/">` so it works at any URL depth on GitHub Pages
  (`krish4512.github.io/nclc5-roadmap/`). When you move to your own domain, change it to `/`.
- **GitHub Pages:** the site is published from the `main` branch root. Every push to `main`
  redeploys it within a minute or two. `.nojekyll` tells Pages to serve the files as-is.

To preview locally:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Site structure

Four places in the top menu (defined in `NAV` and `TABS` in `tools/partials.py`):

- **Today** — the daily hub
- **Course** — the modules (Find your level and Cheat sheets are linked from the course page)
- **Review** — Daily review
- **Exam** — Mock exam · Exam prep (the only section with tabs)

The "Aa" button in the header holds the reading settings (theme, text size, easy-read
font, spacing, animations) and, on pages with audio, the French audio speed and voice.

## Editing content

- **Course modules:** edit `assets/course-1.js` … `course-4.js`. Each module is one object
  (`title`, `goals`, `lessons`, `sounds`, `mistakes`, `speak`, `vocab`, `quiz`, `sources`;
  `why` is kept for reference but not shown). A module's `vocab` goes into Daily review automatically.
  When you add or remove a lesson, keep `assets/course-visuals.js` and `assets/course-practice.js`
  (`data`, `quizLesson`, `notes`) in the same order. Modules appear in the order they're pushed, and are numbered automatically.

- **After editing course content**, run `node tools/build-index.js` (Today and Daily review read
  the digest it writes) and `node tools/cheatsheets.js`.
- **Cheat sheets:** they're generated from the course, so after editing a module run
  `node tools/cheatsheets.js` (needs Node and Playwright: `npm i -g playwright`). Each sheet
  is fitted to one Letter page automatically. English glosses come from `assets/course-en.js`.
- **Mistake reports:** every lesson has a "Report a mistake"
  button. Set `feedbackForm` in `assets/config.js` to a form endpoint (e.g. Formspree) to
  receive reports there; left empty, the button opens a pre-filled email to your `email`.
- **Placement check:** the 12 questions live at the top of the script in `start.html`
  (`Q`), each tied to the module it tests. Keep them ordered from easiest to hardest.
- **Email sign-ups for the cheat sheets:** set `leadForm` in `assets/config.js` to a form
  endpoint (Formspree, Mailchimp, ConvertKit, Buttondown…). Leave it empty to let anyone
  download without an email.

- **Mock exam:** edit `exam-data.js`. Each question has `text`, `q`, `options`, `answer`
  (the 0-based index of the correct option) and `why`. Options are shuffled when shown.
- **Header / footer:** they're written into every page between `<!-- partial:… -->` markers.
  Edit the templates in `tools/partials.py` and run `python3 tools/partials.py` to update
  every page. Or edit each page by hand if you prefer.

## Third-party services the site uses

- **Google Fonts** for typefaces.
- **Browser speech** for audio. No keys are needed, and quality depends on
  the voices installed on the device.
- **Stripe** for payments.

The privacy policy discloses each of these. If you add analytics or other services, update it.
