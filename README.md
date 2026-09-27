# NCLC 5 Roadmap

A static website for learners preparing for **NCLC / CLB 5 (CEFR B1)** in French on the
**TCF Canada** or **TEF Canada**. It includes a sequenced study roadmap, interactive drills,
timed mock exams, and the pages you need to sell a subscription.

It is plain HTML, CSS and JavaScript. There is no build step, no framework and no server code.
You upload the folder and it works.

## What's in the box

| Page | What it is |
| --- | --- |
| `index.html` | Landing page |
| `learn.html` + `assets/course-*.js` | The French course: 19 research-based modules from pronunciation to B1, each with lessons, pronunciation, common mistakes, a shadowing drill, vocabulary and a self-check; plus TCF speaking task 2 (question framing) and task 3 (opinion template) modules with interactive builders |
| `roadmap.html` | The study roadmap: score bands, exam format, grammar stages with audio, vocabulary banks, checklists, EN⇄FR translator |
| `quiz.html` | Practice drills built from the roadmap's tables: type, multiple choice, flashcards and listen-and-type; streaks, hints, weak-item review |
| `exam.html` + `exam-data.js` | Mock exam: 20 listening and 20 reading questions (exam or practice mode), 3 writing tasks with a live coach and model answers, 3 speaking tasks with timers and recording |
| `pricing.html` | Plans and Stripe checkout buttons |
| `contact.html` | Support email, billing portal link, FAQ |
| `privacy.html`, `terms.html` | Privacy policy, and terms of service with the refund policy |
| `404.html` | Not-found page |
| `assets/config.js` | **The one file you edit before launch** |
| `assets/site.css`, `assets/site.js`, `assets/speech.js` | Shared design system, header and footer behaviour, and French text-to-speech |
| `tools/partials.py` | Keeps the shared header and footer identical on every page (optional; see below) |

## Before you launch

1. **Edit `assets/config.js`.** Set your brand name, domain, support email, legal
   business name, jurisdiction, prices and refund window. Every page reads these values.
2. **Create your Stripe products.**
   - In Stripe, create a product for each plan with a recurring price (for example
     monthly, and every 3 months).
   - For each price, create a **Payment Link** (Stripe → Payment Links → New). Under
     *After payment*, you can point the confirmation page to `https://your-domain/roadmap.html`.
   - Paste each link into `plans.monthly.link` and `plans.quarterly.link` in `config.js`.
   - Turn on the **Customer portal** (Stripe → Settings → Billing → Customer portal),
     copy its login link, and paste it into `customerPortal`. This is where subscribers
     cancel and update their card.
   - Until a link is set, its button opens an email to you instead, so nothing is broken.
   - Consider turning on Stripe Tax for GST/HST/QST if you're required to collect it.
3. **Replace `https://www.example.com`** in `robots.txt` and `sitemap.xml` with your domain.
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

## Editing content

- **Course modules:** edit `assets/course-1.js` … `course-4.js`. Each module is one object
  (`title`, `why`, `goals`, `lessons`, `sounds`, `mistakes`, `speak`, `vocab`, `quiz`, `practice`,
  `sources`). Modules appear in the order they're pushed, and are numbered automatically.

- **Roadmap, drills:** edit the tables in `roadmap.html`. The drills are generated from them.
  A table with `data-quiz="vocab"` becomes a vocabulary set (French in odd columns, English
  in even columns). A table with `data-quiz="conj"` becomes conjugation prompts; add
  `data-quiz-tense` so prompts from different tenses don't collide.
- **Mock exam:** edit `exam-data.js`. Each question has `text`, `q`, `options`, `answer`
  (the 0-based index of the correct option) and `why`. Options are shuffled when shown.
- **Header / footer:** they're written into every page between `<!-- partial:… -->` markers.
  Edit the templates in `tools/partials.py` and run `python3 tools/partials.py` to update
  every page. Or edit each page by hand if you prefer.

## Third-party services the site uses

- **Google Fonts** for typefaces.
- **Translator** (roadmap page): Google Translate's public endpoint, with Lingva and MyMemory
  as fallbacks. These are unofficial, keyless endpoints that can be rate-limited or changed
  at any time. For a commercial site, consider switching `viaGoogle` in `roadmap.html` to a
  paid API (Google Cloud Translation, DeepL) called through your own backend, or removing
  the translator.
- **Browser speech** for audio and dictation. No keys are needed, and quality depends on
  the voices installed on the device.
- **Stripe** for payments.

The privacy policy discloses each of these. If you add analytics or other services, update it.
