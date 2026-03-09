# 🎬 YouTube Webpage Clone

My **first HTML & CSS project** — a YouTube homepage clone built from scratch with plain HTML, CSS and a little vanilla JavaScript. No frameworks, no libraries — just the basics, the way I learned them. 🚀

![Demo](demo/demo.gif)

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](screenshots/homepage.png)

### 🔔 Notifications Page
![Notifications](screenshots/notifications.png)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🧭 **Top bar** | YouTube-style header with logo, rounded search bar, mic button, **+ Create** button and profile picture |
| 🔍 **Search bar** | Pill-shaped input with a blue glow when you click inside it |
| 📋 **Sidebar** | Subscriptions, You (History, Playlists, Watch Later...) and Explore sections with real channel logos |
| 🎥 **Video grid** | Responsive CSS Grid that wraps videos automatically, 16:9 thumbnails, channel avatars, view counts |
| 🖱️ **Hover effects** | Videos grow slightly with a soft shadow, sidebar items highlight, cards lift up |
| 🔔 **Notification bell (⭐ unique feature)** | Red badge shows unread count (`2+`). Clicking the bell **clears the badge, saves it in `localStorage`** so it stays cleared, and opens the Notifications page |
| 📱 **Responsive** | On small screens the sidebar hides and videos stack in one column |

### ⭐ The notification feature (my favorite part!)

`youtube.js` listens for a click on the bell button:

1. The red **2+ badge** is removed
2. The count is saved with **`localStorage.setItem()`** — so the browser remembers you read them
3. You are taken to **`notification.html`** with all your notifications

---

## 🛠️ Built With

- **HTML5** — semantic structure, two pages (`index.html`, `notification.html`)
- **CSS3** — Flexbox (sidebar layout), CSS Grid (video cards), transitions, media queries
- **JavaScript (vanilla)** — notification click handling + `localStorage`
- **Font Awesome** — icons (bell, mic, sidebar icons)
- **Roboto** — the same font YouTube uses

---

## 🚀 How to Run

No build tools needed — it's plain HTML!

1. Download or clone this repository
2. Double-click **`index.html`** (or open it in your browser)
3. That's it! Click the 🔔 bell to see the notification feature

> Tip: use **Live Server** in VS Code for auto-reload while editing.

---

## 📁 Project Structure

```
Youtube-Webpage/
├── index.html            # Homepage (video grid)
├── notification.html     # Notifications page
├── youtube.css           # Main styles
├── notification.css      # Notification page styles
├── youtube.js            # Bell button logic (badge + localStorage)
├── profile.jpeg          # Profile picture
├── rightlogo/            # Channel logos & sidebar icons
├── screenshots/          # README screenshots
└── demo/                 # Demo GIF + MP4
```

---

## 😅 Challenges I faced & how I fixed them

**1. Everything rendered in Times (serif) font.**
My first version had no `font-family` at all, so the browser defaulted to Times Roman and it looked nothing like YouTube.
**Fix:** added the Roboto font (the real YouTube font) with a Google Fonts `<link>` and set it on `body`.

**2. Thumbnails and text sat on the same line.**
I used `display: inline` on images, which made the title flow beside the thumbnail instead of below it.
**Fix:** switched the video cards to `inline-block` with `vertical-align: top`, and finally to a proper **CSS Grid** layout with `repeat(auto-fill, minmax(300px, 1fr))` so the grid wraps automatically.

**3. The mic button showed a broken black blob.**
I hotlinked a stock-photo image URL for the mic icon, and it broke at runtime.
**Fix:** replaced it with a Font Awesome icon (`fa-microphone`) — icons from an icon library are far more reliable than hotlinked images.

**4. The notification badge came back after reading notifications.**
`youtube.js` saved the cleared count with `localStorage`, but the homepage still hardcoded `2+` in the HTML — so the badge always returned.
**Fix:** learned that saving the data is only half the job; the page must also **read it back on load**. (And an empty badge showed as a tiny red dot, fixed with a `.badge:empty { display: none }` rule.)

**5. Sidebar items showed bullet points and blue underlined links.**
Default browser styles leaked into my sidebar `<ul>`.
**Fix:** removed list-style, set `text-decoration: none` on the links and styled each row as a flex row with a hover background.

## 📖 What I Learned

- How **Flexbox** and **CSS Grid** work together in one layout
- Why `object-fit: cover` matters for thumbnails
- Making round buttons and pill-shaped search bars with `border-radius`
- The **`localStorage`** API — saving data that survives a page refresh
- Small touches (hover states, transitions, focus rings) make a page feel real
