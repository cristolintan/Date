# Will You Go On A Date With Me? 💕

A cute, mobile-first single-page app that pops the question with playful
animations — a dodging **NO** button, a growing **YES** button, confetti, and a
glassmorphism design in a soft romantic palette.

Built with **React + Vite + Framer Motion**.

---

## ✨ Features

- **The Big Question** with a word-by-word animated reveal
- **Playful buttons**
  - The **NO** button hops to a new spot every time you try to tap it (and shrinks a little)
  - The **YES** button grows bigger with each dodge
  - Friendly, not annoying — NO stays on-screen and cycles cute messages
- **Success screen** with confetti, a beating heart, and your message
- Optional **"See Our Future Adventures"** grid
- Floating-hearts background, glassmorphism cards, elegant typography
- Mobile-first, responsive, fast-loading
- Respects `prefers-reduced-motion`

---

## 🚀 Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:3100
```

Build for production and preview the optimized output:

```bash
npm run build      # outputs to /dist
npm run preview    # serves the build at http://localhost:3100
```

Any static host (Netlify, Vercel, GitHub Pages, etc.) can serve the `dist/`
folder.

---

## 🎨 Make it yours

**1. Text & emojis** — edit [`src/config.js`](src/config.js). It holds the
question, button labels, the cheeky NO messages, the success message, and the
list of future adventures. Nothing else needs touching.

**2. Your photo** — replace [`src/assets/photo.jpg`](src/assets/photo.jpg) with
your image (keep the name), or point the import at a different file in
`src/config.js`. The photo is bundled by Vite so its URL stays correct wherever
the site is hosted:

```js
import photo from './assets/photo.jpg' // ← your image
// ...
photo,                                  // set to `photo: null` to hide it
```

**3. Colors** — tweak the CSS variables at the top of
[`src/styles.css`](src/styles.css) (`--rose`, `--pink-1`, `--lav-1`, …).

---

## 🗂 Project structure

```
.
├── index.html              # app shell + fonts
├── vite.config.js          # dev/preview on port 3100, base:'./' for subpath hosting
├── public/
│   └── heart.svg           # favicon
└── src/
    ├── assets/photo.jpg    # your photo (bundled)
    ├── main.jsx            # React entry
    ├── App.jsx             # stage switch: question ↔ success
    ├── config.js           # 👈 customize everything here
    ├── styles.css          # theme + layout
    └── components/
        ├── BigQuestion.jsx    # the question + YES/NO interaction
        ├── SuccessScreen.jsx  # confetti + success message
        ├── Adventures.jsx     # "future adventures" grid
        └── FloatingHearts.jsx # background hearts
```

Made with ❤️
