# 🌮 Cilantro Ubud — Authentic Mexican Cocina & Agave Bar

> Conversion-optimized, zero-build restaurant website for **Cilantro Ubud**, located on Jln. Raya Nyuh Kuning in the cultural heart of Ubud, Bali.

[![Test Suite](https://img.shields.io/badge/Tests-10%2F10%20Passing-emerald)](tests/landing.spec.js)
[![Rating](https://img.shields.io/badge/Google%20Reviews-4.8%20%E2%98%85%20(500%2B)-amber)](https://www.google.com/maps/place/Cilantro+Ubud/@-8.5275181,115.2601778,17z/data=!4m8!3m7!1s0x2dd23d9f8887ba51:0xe115c8808d6cf3e3!8m2!3d-8.5275181!4d115.2601778!9m1!1b1!16s%2Fg%2F11fzfdrz9d)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Overview & Features

- **Branded Experience**: Featuring Cilantro Ubud's iconic sombrero logo, warm Mexican Hacienda & Agave Cantina aesthetics.
- **Interactive Menu Explorer**: Tabbed navigation across 5 culinary categories from the official menu PDF:
  - 🍳 *Breakfast & Brunch* (Huevos Rancheros, Breakfast Burrito, Mexican Omelette, Avocado Toast, Pancakes & Waffles)
  - 🌮 *Tacos & Mexican Mains* (LA Taco, Crispy/Soft Tacos, Wet Burrito, Sizzling Fajitas, Enchiladas, Chimichanga)
  - 🥑 *Snacks, Burgers & Taquitos* (Jalapeño Poppers, Guac & Chips, Cowboys Burger, Taquitos, Crispy Wings)
  - 🌱 *Plant-Based Vegan* (Jackfruit Carnitas Tacos, Crispy Tempe Tacos, Vegan Wet Burrito, Cashew Queso)
  - 🍹 *Cocktails, Beers & Sweets* (Signature Margaritas, Michelada, Churros con Chocolate, Jarritos, Fresh Juices)
- **Official 6-Page Visual Menu Gallery & Lightbox**: Interactive menu photo gallery (`menu_scans` tab) displaying all 6 high-resolution physical menu cards with zoom, full-screen lightbox modal, and next/prev page navigation.
- **Dedicated Vegan Showcase**: Highlighting Ubud's favorite braised jackfruit carnitas, housemade cashew cheese, and dairy-free crema.
- **Social Proof & Community**: 4.8★ Google Maps rating with verified diner quotes, and links to [Instagram (@cilantroubud)](https://www.instagram.com/cilantroubud/) and [Facebook (@cilantroubud8)](https://www.facebook.com/cilantroubud8/).
- **VIP Table Reservation Modal**: Instant table booking popup generating pre-formatted WhatsApp reservation requests.
- **Location & Hours**: Daily **8:00 AM – 11:00 PM** (breakfast served from 8:00 AM) on Jln. Raya Nyuh Kuning, Ubud with a responsive Google Maps embed and direct navigation links.

---

## ⚡ Tech Stack (Zero-Build Philosophy)

- **Structure**: Semantic HTML5 (`index.html`)
- **Styling**: Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) with custom Hacienda color palette
- **Typography**: Google Fonts (`Outfit` for bold display headers + `Playfair Display` + `Plus Jakarta Sans` for body legibility)
- **Interactivity**: Alpine.js via CDN (`https://cdn.jsdelivr.net/npm/alpinejs`)
- **Vector Icons**: Direct inline SVGs for zero latency and guaranteed rendering
- **Test Runner**: Node.js Native Test Runner (`npm test` / `node --test tests/landing.spec.js`)
- **Containerization**: Nginx Alpine via `./dc.sh` Docker wrapper

---

## 🚀 Quickstart & Local Preview

### Option 1: Direct File Open
Open `index.html` directly in any modern web browser. No build steps, no bundling, and no local server required.

### Option 2: Local Docker Preview Server
```bash
# Start Nginx preview server at http://localhost:8080
./dc.sh up -d

# View container logs
./dc.sh logs -f

# Stop server
./dc.sh down
```

### Option 3: Automated Test Execution
```bash
# Run headless unit and landmark assertions
npm test
```

---

## 🌐 1-Push Deployment

### 1. GitHub Pages
This repository includes automated deployment via `.github/workflows/deploy.yml`:
1. In your GitHub repository: **Settings > Pages > Build and deployment > Source** -> Select **GitHub Actions**.
2. Push commits to `main` to trigger live automatic deployment.

### 2. Vercel
Deploy with 1 command or import the repository in your Vercel dashboard:
```bash
npx vercel --prod
```
*Static routing is configured in [`vercel.json`](vercel.json).*

---

## 📍 Restaurant Information

- **Address**: Jln. Raya Nyuh Kuning, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571
- **Opening Hours**: Monday – Sunday, 8:00 AM – 11:00 PM (Breakfast served daily from 8:00 AM)
- **WhatsApp Reservations**: [WhatsApp (+62 812-4651-6418)](https://wa.me/6281246516418?text=Halo%20Cilantro%20Ubud%2C%20I%20would%20like%20to%20reserve%20a%20table)
- **Phone / Delivery**: (0361) 9083390
- **Google Maps**: [Cilantro Ubud on Google Maps](https://www.google.com/maps/place/Cilantro+Ubud/@-8.5275181,115.2601778,17z/data=!4m7!3m6!1s0x2dd23d9f8887ba51:0xe115c8808d6cf3e3!8m2!3d-8.5275181!4d115.2601778!10e9!16s%2Fg%2F11fzfdrz9d)

---

## 📄 Documentation
- **Feature Specification**: [`docs/features/001_cilantro_ubud_website_spec.md`](docs/features/001_cilantro_ubud_website_spec.md)
- **Sprint Backlog**: [`task.md`](task.md)
