# Pioneer Inspection Website

**Project:** Recreating [pioneerinspection.com](https://www.pioneerinspection.com) using plain HTML, CSS, and JavaScript — no WordPress, no plugins, no monthly fees.

**Built by:** Shannon & Amazon Q  
**For:** Brian Ayotte, Owner — Pioneer Inspection LLC

**Live preview:** [https://shannon-goddard.github.io/pioneer-inspection/](https://shannon-goddard.github.io/pioneer-inspection/)  
**GitHub repo:** [https://github.com/Shannon-Goddard/pioneer-inspection](https://github.com/Shannon-Goddard/pioneer-inspection)

---

## What is HTML, CSS, and JavaScript?

Think of a website like a **person**.

- **HTML** is the **body** — the bones and structure. It decides what's on the page: a heading here, a photo there, a button over here. Just like people come in all shapes (tall, short, wide, narrow), HTML gives the page its shape and content.

- **CSS** is the **outfit** — it dresses the body. Blue jeans and a white shirt. It controls colors, fonts, spacing, and layout. Want the button red? That's CSS. Want the text bigger on mobile? CSS handles it.

- **JavaScript** is the **actions** — it makes things *move and respond*. Waving hello, jumping, reacting when you click something. The sliding hero banner at the top of the page? The hamburger menu on mobile? That's JavaScript doing its thing.

---

## File Structure

```
pioneer/
├── index.html              ← Home page
├── contact.html            ← Contact page
├── team-carousel.html      ← Meet the Team page
├── style.css               ← All styling (colors, fonts, layout)
├── main.js                 ← Slider + mobile nav behavior
├── readme.md               ← This file
├── assets/
│   └── img/               ← All local images
│       ├── logo.png
│       ├── favicon.png
│       ├── Brian-NZ90117-600x700-1.jpg
│       ├── pipes-1920.jpg
│       └── ... (more images)
└── service/
    ├── oq-inspections.html
    ├── cwi-inspections.html
    ├── paving-inspections.html  ← Ghost page (hidden from nav, kept for later)
    └── project-management.html
```

---

## How to Make Common Changes

Every HTML file has comment blocks like this that explain what to edit:
```html
<!-- To change the phone number: edit both the href="tel:..." and the <h4> text -->
```

### Change a color
Open `style.css` — at the very top you'll see:
```css
:root {
  --default-color: #C02830;   /* Red */
  --sec-color: #112160;       /* Navy */
}
```
Change the hex code (e.g. `#C02830`) to any color you want.

### Change a team member photo
In `index.html`, find the `<!-- TEAM -->` section and update:
```html
<img src="assets/img/YOUR-NEW-PHOTO.jpg" alt="Person Name">
```
Just drop the new photo into the `assets/img/` folder first.

### Change the phone number or email
Search the file for the current number/email and replace it. It appears in a few spots (nav, about section, footer).

### Change the slider speed
Open `main.js` — near the top:
```js
const SLIDE_INTERVAL = 5000; // milliseconds (5000 = 5 seconds)
```

---

## Change Checklist
*(Checked off as each item is completed)*

### From Ashley & Brian's email (Sep 18–21)

- [x] Remove Steve Nimblett from Meet the Team
- [x] Remove Dallas Lane from Meet the Team
- [ ] Add a group photo to the Team section *(photo coming around Thanksgiving)*
- [x] Remove NETTCP Paving Inspections from the Services navigation menu
- [x] Keep paving-inspections.html as a **ghost page** (exists but not linked in nav — can be added back later)
- [ ] Replace stock/placeholder images with Brian's own photos *(pending — see note below)*
- [x] Contact page: add company address — 384 Dow Hwy Unit #21, Eliot, ME 03903
- [x] Replace contact email with chamberlanda@pioneerinspection.com
- [x] Fix broken images (removed references to rainmakers.digital URLs)
- [x] Improve load times (removed WordPress/Elementor/plugin overhead entirely)

### Image Note
The images currently in `assets/img/` that came from the original site may include stock photos from a photo bank the previous developer paid for. **Before publishing**, replace any photos you're unsure about with:
- Photos Brian paid a photographer for ✅ (safe to use)
- Free stock photos from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) ✅ (free for commercial use)
- Any photo you personally took ✅

---

## Security & SEO Best Practices
*(Already implemented or planned)*

- [x] Semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`) — helps Google understand the page
- [x] Meta description tag — shows up in Google search results
- [x] Alt text on all images — accessibility + SEO
- [x] Mobile responsive design — Google ranks mobile-friendly sites higher
- [x] No external tracking scripts — faster load, better privacy
- [ ] Add security headers when hosted (X-Frame-Options, Content-Security-Policy) — done at the hosting/GitHub level
- [ ] Submit sitemap to Google Search Console after launch

---

## The Road to Launch

Here's the plan once the site looks good:

1. **GitHub Account** — Think of it as Facebook for developers, but cooler. You'll create a free account at [github.com](https://github.com).

2. **Copy the code** — We'll walk through pasting these files into a GitHub repository. It takes about 10 minutes.

3. **Free hosting** — As long as your repository is public, GitHub will host your website for free. The URL will look something like `https://yourusername.github.io/pioneer` — a little wonky, but fully functional.

4. **Domain redirect** — The last step is pointing `www.pioneerinspection.com` to your GitHub-hosted site. To do that, we just need to know who your **domain provider** is (GoDaddy, Namecheap, Google Domains, etc.). Brian — who do you pay for your domain each year?

5. **Ongoing cost** — After this, your only website cost is your domain registration. If you're paying more than **$50/year**, it's worth moving it to [Squarespace Domains](https://www.squarespace.com/domain-name-search) or [Namecheap](https://www.namecheap.com) for around **$10–$20/year**.

---

*Built with ❤️ by Shannon & Amazon Q*
