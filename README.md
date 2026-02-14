# 💖 Valentine Frontend Site

A complete, beautiful Valentine's website with 12 interactive pages for photos, stories, love letters, and surprises.

---

## 🚀 Quick Start

Open `index.html` in your browser. Edit each page and add your custom content as noted below.

---

## 📋 Page Guide: Where to Add Your Content

### 1. **entry.html** — Password Entry (Optional)
- **What it is:** A password-protected gate to the site.
- **Edit here:**  
  Line 31: Change `const PASSWORD = 'hernickname';` to your custom password.
- **Where to add files:** None (frontend-only).

---

### 2. **index.html** — Landing Page
- **What it is:** Main hub with links to all pages.
- **Already done:** Navigation grid is set up.
- **Edit here:** Add your headline/opening message if desired.
- **Where to add files:** `audio/valentine.mp3` for background music (optional).

---

### 3. **timeline.html** — Relationship Story
- **What it is:** A timeline of your milestones (how you met, first date, etc.).
- **Edit here:**  
  - Copy/paste more `.milestone` blocks for each memory.
  - Change the date, title, text, and img src for each.
- **Where to add files:** `frontend/valentine/img/timeline1.jpg`, `timeline2.jpg`, etc.

**Example block to copy:**
```html
<div class="milestone">
  <img src="img/timeline1.jpg" alt="milestone photo">
  <div class="milestone-body">
    <strong>Where we met — 2019-06-01</strong>
    <p>Your description here...</p>
  </div>
</div>
```

---

### 4. **letter.html** — Love Letter
- **What it is:** A heartfelt letter from you.
- **Edit here:**  
  Replace the entire text inside the `<article class="letter">` with your letter.
- **Where to add files:** None (text-only).

---

### 5. **song.html** — Our Song
- **What it is:** Embed your special song.
- **Edit here:**  
  - Line 13: Replace the `src=""` with a YouTube/Spotify embed URL, OR  
  - Keep the audio file path and place your song at `audio/our-song.mp3`.
  - Line 17: Add the story of why this song matters.
- **Where to add files:** `audio/our-song.mp3` (optional).

---

### 6. **gallery.html** — Photo & Video Gallery
- **What it is:** Your favorite moments in polaroid-style cards.
- **Edit here:**  
  - Copy/paste the `.polaroid` block and change the `src` and `figcaption`.
- **Where to add files:** Create `frontend/valentine/img/gallery/` and place photos there: `photo1.jpg`, `photo2.jpg`, etc.

**Example block to copy:**
```html
<figure class="polaroid">
  <img src="img/gallery/photo1.jpg" alt="">
  <figcaption>Our first picnic</figcaption>
</figure>
```

---

### 7. **reasons.html** — 14 Reasons I Love You
- **What it is:** Flip cards showing reasons you love her.
- **Edit here:**  
  - Copy/paste the `.reason` block 14 times (or more).
  - Change the number (front) and reason (back) for each.
- **Where to add files:** None (text-only).

**Example block to copy:**
```html
<div class="reason">
  <div class="front">1</div>
  <div class="back">You always make me laugh.</div>
</div>
```

---

### 8. **notes.html** — Love Notes / Envelopes
- **What it is:** Clickable envelopes with little love notes.
- **Edit here:**  
  - Copy/paste more `.envelope` blocks.
  - Change the front text and the `.note-text` message for each.
- **Where to add files:** None (text-only).

**Example block to copy:**
```html
<div class="envelope" data-open="false">
  <div class="envelope-front">Envelope 1</div>
  <div class="note-text" style="display:none">You are my sunshine.</div>
</div>
```

---

### 9. **counter.html** — Relationship Counter
- **What it is:** Live counter showing days/hours together.
- **Edit here:**  
  Line 9: Change `data-start="2020-02-14"` to your relationship start date (YYYY-MM-DD).
- **Where to add files:** None (auto-calculating).

---

### 10. **future.html** — Our Future Plans
- **What it is:** Places to visit, goals, dreams together.
- **Edit here:**  
  - Edit the `<ul class="future-list">` with your plans.
  - Each `<li>` is a future goal or destination.
- **Where to add files:** Photos in `frontend/valentine/img/future/` (optional).

---

### 11. **quiz.html** — Love Quiz
- **What it is:** A fun game testing how well she knows you.
- **Edit here:**  
  - Line 15: Change the question.
  - Line 19: Change the answer check (e.g., `v.includes('lake')` → your custom check).
- **Where to add files:** None (text/logic-only).

---

### 12. **video.html** — Video Message
- **What it is:** Play a video (your recorded message or slideshow).
- **Edit here:**  
  Line 8: Change the `src` to your video path.
- **Where to add files:** Record a video, save as `frontend/valentine/video/surprise.mp4`.

---

### 13. **proposal.html** — The Big Question (Optional)
- **What it is:** "Will you marry me?" reveal (if applicable).
- **Edit here:**  
  - Update the heading/message as desired.
  - Customize the Yes button action (line 25).
- **Where to add files:** None (frontend-only).

---

### 14. **secret.html** — Easter Egg Secret Page
- **What it is:** A hidden page accessible only via special link or click event.
- **Edit here:**  
  - Edit the content as a surprise reveal.
- **How to link to it:** Add a click handler in `js/main.js` or a hidden button.

---

### 15. **surprise1.html, surprise2.html, surprise3.html** — Bonus Surprises
- **What it is:** Three interactive reveals (heart animation, carousel, confetti).
- **Edit here:**  
  - Customize messages or add your own interactive items.
- **Where to add files:** For surprise2 carousel, use `img/photo1.jpg`, etc.

---

## 🎨 File Structure

```
frontend/valentine/
├── index.html              (Main landing page)
├── entry.html              (Password gate)
├── timeline.html           (Story timeline)
├── letter.html             (Love letter)
├── song.html               (Special song)
├── gallery.html            (Photo gallery)
├── reasons.html            (14 reasons flip cards)
├── notes.html              (Love note envelopes)
├── counter.html            (Days together counter)
├── future.html             (Future plans)
├── quiz.html               (Love quiz)
├── video.html              (Video message)
├── proposal.html           (Proposal reveal)
├── secret.html             (Easter egg page)
├── surprise1.html          (Heart reveal)
├── surprise2.html          (Photo carousel)
├── surprise3.html          (Confetti celebration)
├── css/
│   └── style.css           (All styling)
├── js/
│   └── main.js             (All JavaScript)
├── img/                    (← ADD YOUR PHOTOS HERE)
│   ├── timeline1.jpg
│   ├── timeline2.jpg
│   ├── gallery/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   └── future/
│       └── (future destination photos)
├── audio/                  (← ADD YOUR MUSIC/AUDIO HERE)
│   ├── valentine.mp3       (Background music)
│   └── our-song.mp3        (Your special song)
└── video/                  (← ADD YOUR VIDEO HERE)
    └── surprise.mp4        (Your recorded message)
```

---

## ✨ Quick Customization Tips

### Colors
Edit `css/style.css` lines 1:
```css
--pink:#ff6b9f;
--rose:#ff4d83;
--bg:#fff0f6;
```

### Fonts
Edit the font in the `<head>` of any `.html` file.

### Music Toggle
The music button appears on `index.html`. Place an `audio/valentine.mp3` file to enable it.

### Mobile-Friendly
All pages are fully responsive. Test on your phone before sending!

---

## 🔒 Password Protection (Optional)

If you want to use `entry.html` as a gate:

1. Edit `entry.html` line 31 with your password.
2. Replace the `<script src="js/main.js">` reference in other pages to check `localStorage.getItem('valentine_unlocked')`.
3. Link to `entry.html` first instead of `index.html`.

---

## 🎁 What to Add (Priority Order)

1. **Photos** — Add to `img/gallery/` and edit `gallery.html`.
2. **Letter** — Write your heartfelt message in `letter.html`.
3. **Timeline** — Add milestones and photos to `timeline.html`.
4. **Reasons** — Fill in 14 reasons in `reasons.html`.
5. **Audio** — Place a song in `audio/Valentine.mp3` (optional).
6. **Video** — Record a message and save as `video/surprise.mp4` (optional).

---

## 🚀 How to Send It

- **Option 1:** Upload to a free hosting service (Vercel, Netlify, GitHub Pages).
- **Option 2:** Share the folder and have her open `index.html` locally.
- **Option 3:** Deploy with a custom domain (e.g., `foreverwith[hername].com`).

---

## 💡 Pro Tips

- **Handwritten message:** Use a cursive font like `'Dancing Script'` for the letter.
- **Voice narration:** Record yourself reading the love letter and embed audio in `letter.html`.
- **Easter eggs:** Add hidden click handlers in `js/main.js` to reveal the `secret.html` page.
- **Video intro:** Make `surprise.html` play a personal video before the main site.
- **Countdown:** If using for a future date, edit `counter.html` to count down to an event instead.

---

## ✅ Testing Checklist

- [ ] Open `index.html` in browser (or `entry.html` if password-protected).
- [ ] All links navigate correctly.
- [ ] Photos load (check console for 404s).
- [ ] Audio plays (if added).
- [ ] Video plays (if added).
- [ ] Responsive on mobile (test in browser dev tools).
- [ ] Animations are smooth.

---

## 🎉 Final Touch

Before sending, add one personal detail to every page. It's the care that matters.

Enjoy! 💕
