# Amisha Nagiya — Data Analyst Portfolio

The personal portfolio of **Amisha Nagiya**, a Data Analyst in retail and e-commerce analytics. It uses a crimson **spider-lily** theme with gold accents and frosted-glass panels, and it's built with React 19, Vite and Tailwind CSS v4.

> Analytics professional with 2 years of experience in merchandising performance, pricing, profitability and inventory planning, working with HRX Sportswear across Myntra and Flipkart. Tools: Excel, SQL, Python, Power BI, Tableau and Looker Studio.

---

## Contents

- [Highlights](#highlights)
- [Site sections](#site-sections)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Editing content](#editing-content)
- [Theme & styling](#theme--styling)
- [Contact form (EmailJS)](#contact-form-emailjs)
- [Deployment (Vercel)](#deployment-vercel)
- [Accessibility](#accessibility)
- [Troubleshooting](#troubleshooting)

---

## Highlights

- 🌺 **Spider-lily theme.** Crimson-on-black lilies sit behind the hero and the contact section, with falling gold sparkles and frosted-glass cards.
- 📊 **Impact numbers up front.** 60% fewer stockouts, 30% revenue growth, 90% less manual reporting, and ₹3–5L recovered per claim cycle.
- 📂 **Project case studies.** Every project card opens a full popup with the problem, the data, step-by-step method, key numbers, findings, use cases and learnings. These are written from her GitHub repos and reports.
- 📞 **Contact that works everywhere.** The Contact Me menu offers Email (opens Gmail), WhatsApp, and a Call panel with Call, Copy number and WhatsApp buttons.
- 📄 **One-click CV download** (PDF).
- 🧰 **Tools list.** A scrolling marquee that expands into a vertical list when you tap **Scroll**.
- ⚙️ **One config file.** All text, links, numbers and projects live in `src/portfolio.config.js`.

---

## Site sections

1. **Hero:** headline "Turning data into decisions that move revenue", intro, Contact Me menu, Download CV, socials (LinkedIn, GitHub, Maven Analytics, Email), profile photo and the tools marquee
2. **Impact strip:** four headline results
3. **About:** bio, quote, four strength cards (Commercial Acumen, Inventory & Assortment, Automation, Stakeholder Partner) and soft skills
4. **Experience:** timeline of Fabrik8 Lifestyle LLP (Data Analyst & MIS Executive), DataPlay (Data Analyst Intern) and OneHash Technologies (IT Intern)
5. **Projects:** case-study cards
   - **Amazon Sales Data Analysis:** Python ETL and EDA, plus a Tableau dashboard ($137.3M revenue across 76 countries)
   - **Master Data Rewards Analysis:** an Excel Power Pivot model that caught triple-credited rewards (₹1.5L in losses averted)
   - **Email/SMS Spam Classifier:** NLP with 10+ models compared, Multinomial Naive Bayes, deployed as a Streamlit app on Render
6. **Skills:** Excel, SQL, Python, BI & Visualization, Analytics, and E-commerce Domain
7. **Education & certification:** PG Program in Data Analytics & ML (Imarticus) and B.Tech CSE (IPS Academy)
8. **Contact:** a contact form, plus Email, WhatsApp, Call, LinkedIn, GitHub and Location cards
9. **Footer:** socials and back-to-top

---

## Tech stack

| Area | Tools |
|---|---|
| UI | React 19, Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), custom CSS animations |
| Icons | lucide-react |
| Email | @emailjs/browser (optional) |
| Hosting | Vercel |

---

## Project structure

```
public/
  amisha.jpg                  profile photo
  lily-bg.jpg                 spider-lily background
  Amisha_Nagiya_Resume.pdf    CV served by "Download CV"
  amazon-dashboard.png        Tableau dashboard (Amazon project)
  favicon.svg

src/
  portfolio.config.js   ← ALL content: profile, socials, stats, about, experience,
                          projects (+ case studies), skills, education, contact links
  App.jsx               page layout and section order
  index.css             theme colours, glass styles, animations
  main.jsx

  components/
    ProjectModal.jsx          project case-study popup
    ContactMenu.jsx           "Contact Me" dropdown (Email / WhatsApp / Call)
    CallPanel.jsx             number + Call / Copy / WhatsApp buttons
    AnimatedBoarderButton.jsx "Download CV" button
    SectionHeader.jsx, Icon.jsx, Button.jsx

  layout/      Navbar.jsx, Footer.jsx
  sections/    Hero, Impact, About, Experience, Projects, Skills, Education, Contact
```

---

## Getting started

Requires **Node.js 20+**.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint
```

---

## Editing content

Everything is in **`src/portfolio.config.js`**, so you never need to touch the components.

| Export | What it controls |
|---|---|
| `profile` | Name, role, headline, intro, photo, CV path, location, availability badge |
| `socials` | Email, phone, LinkedIn, GitHub, Maven Analytics |
| `impactStats` | The four headline numbers |
| `heroSkills` | Tools marquee/list |
| `about` | Bio paragraphs, quote, strength cards, soft skills |
| `experience` | Roles, dates, bullet points, tech tags |
| `projects` | Cards and full case studies (`details`: problem, dataset, steps, metrics, findings, use cases, learnings) |
| `skillGroups` | Skill cards |
| `education` | Degrees and certifications |

**Common updates:**

- **New photo:** replace `public/amisha.jpg` (4:5 portrait works best). Set `photo: null` to show an "AN" initials card instead.
- **New CV:** replace `public/Amisha_Nagiya_Resume.pdf`, keeping the same name or updating `profile.resume`.
- **New project:** add an object to `projects`. Put a screenshot in `public/` and set `image: "./file.png"`, or use `null` to show an icon.
- **Hide the phone number:** remove `phone` from `socials` and the Call items in `ContactMenu.jsx` and `Contact.jsx`.

---

## Theme & styling

- **Colours** are Tailwind v4 tokens at the top of `src/index.css`: crimson `--color-primary: #e8283f`, gold `--color-highlight: #e8b45a`, and a near-black background.
- **The lily background** comes from the `.lily-bg` and `.lily-fade` classes. To change it, replace `public/lily-bg.jpg`.
- **Glass panels** come from the `.glass` and `.glass-strong` utilities.
- **Animations** (falling sparkles, fade-ins, marquee) are in `index.css`.

---

## Contact form (EmailJS)

The form works without any setup. It opens Gmail, or the visitor's email app, with the message already filled in.

To send messages straight from the site, create a free [EmailJS](https://www.emailjs.com/) account and add these in **Vercel → Project → Settings → Environment Variables** (or in a local `.env`):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Never commit `.env`.

---

## Deployment (Vercel)

This repo is connected to **Vercel**, so every push to `main` redeploys the site automatically.

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20+ |

---

## Accessibility

- Visitors whose device asks for reduced motion get a calm page with animations switched off.
- Popups close with Esc, buttons have visible focus, and images have alt text.
- Phone numbers and emails are always shown as text too, so they can be copied.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Old version still showing | Hard refresh: Ctrl+Shift+R, or pull to refresh on a phone |
| Download CV or Call don't work in a preview tool | Previews block downloads and `tel:` links. They work on the real Vercel site. |
| Contact form only opens Gmail | Add the EmailJS environment variables in Vercel and redeploy |

---

© Amisha Nagiya · [LinkedIn](https://www.linkedin.com/in/amisha-nagiya-a22a311b1/) · [GitHub](https://github.com/amisha604) · [Maven Analytics](https://mavenanalytics.io/profile/Amisha-Nagiya/201402439)
