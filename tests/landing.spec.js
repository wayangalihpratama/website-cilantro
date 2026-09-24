import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../index.html');
const logoPath = path.resolve(__dirname, '../assets/images/cilantro-logo.jpg');

test('Cilantro Ubud - HTML Structure, Assets & Conversion Integrity', async (t) => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist in stack root');
  assert.ok(fs.existsSync(logoPath), 'cilantro-logo.jpg must exist in assets/images/');
  const html = fs.readFileSync(htmlPath, 'utf8');

  await t.test('includes CDN script tags and font resources', () => {
    assert.ok(html.includes('cdn.tailwindcss.com'), 'Tailwind CSS CDN should be present');
    assert.ok(html.includes('alpinejs'), 'Alpine.js CDN should be present');
    assert.ok(html.includes('fonts.googleapis.com'), 'Google Fonts should be present');
  });

  await t.test('includes Cilantro Ubud branding, logo image, and correct Nyuh Kuning address', () => {
    assert.ok(html.includes('assets/images/cilantro-logo.jpg'), 'Logo image must be referenced');
    assert.ok(html.includes('Cilantro'), 'Cilantro restaurant name must be present');
    assert.ok(html.includes('Ubud'), 'Ubud location must be present');
    assert.ok(html.includes('Nyuh Kuning'), 'Nyuh Kuning address must be present');
  });

  await t.test('includes opening hours: 8:00 AM - 11:00 PM', () => {
    assert.ok(html.includes('8:00 AM') || html.includes('8 AM') || html.includes('8am'), '8:00 AM opening time must be present');
    assert.ok(html.includes('11:00 PM') || html.includes('11 PM') || html.includes('11pm'), '11:00 PM closing time must be present');
  });

  await t.test('includes semantic HTML5 landmarks and key sections', () => {
    assert.ok(html.includes('<header'), 'Header landmark must exist');
    assert.ok(html.includes('<main'), 'Main landmark must exist');
    assert.ok(html.includes('<section id="menu"'), 'Menu section must exist');
    assert.ok(html.includes('<section id="about"'), 'About section must exist');
    assert.ok(html.includes('<section id="vegan"'), 'Vegan dedicated section must exist');
    assert.ok(html.includes('<section id="reviews"'), 'Reviews section must exist');
    assert.ok(html.includes('<section id="location"'), 'Location section must exist');
    assert.ok(html.includes('<footer'), 'Footer landmark must exist');
  });

  await t.test('includes authentic dishes from verified menu PDF', () => {
    assert.ok(html.includes('Huevos Rancheros') || html.includes('Breakfast Burrito'), 'Breakfast dishes must be present');
    assert.ok(html.includes('Jalapeno Poppers') || html.includes('Jalapeño Poppers'), 'Famous Jalapeno Poppers must be present');
    assert.ok(html.includes('Wet Burrito'), 'Wet Burrito must be present');
    assert.ok(html.includes('Jackfruit Carnitas'), 'Vegan Jackfruit Carnitas must be present');
    assert.ok(html.includes('Churros'), 'Churros dessert must be present');
    assert.ok(html.includes('Margarita'), 'Margaritas must be present');
  });

  await t.test('includes correct WhatsApp Click-to-Chat number (+6281246516418)', () => {
    assert.ok(html.includes('6281246516418'), 'Official WhatsApp phone number must exist');
    assert.ok(html.includes('target="_blank"'), 'Outbound links should open in new tab');
    assert.ok(html.includes('rel="noopener noreferrer"'), 'Outbound links must have rel=noopener');
  });

  await t.test('includes responsive Google Maps embed and social media links', () => {
    assert.ok(html.includes('maps.google.com') || html.includes('google.com/maps'), 'Google Maps embed must exist');
    assert.ok(html.includes('aspect-video'), 'Map wrapper should have aspect ratio container');
    assert.ok(html.includes('instagram.com/cilantroubud'), 'Instagram profile link must exist');
    assert.ok(html.includes('facebook.com/cilantroubud8') || html.includes('facebook.com/cilantroubud'), 'Facebook page link must exist');
  });

  await t.test('includes Alpine.js state hooks and modal components', () => {
    assert.ok(html.includes('mobileMenuOpen'), 'Alpine mobile menu state must exist');
    assert.ok(html.includes('activeCategory'), 'Alpine interactive menu tab state must exist');
    assert.ok(html.includes('dietaryFilter'), 'Alpine dietary filter state must exist');
    assert.ok(html.includes('modalOpen'), 'Alpine reservation modal state must exist');
    assert.ok(html.includes('menuModalOpen'), 'Alpine menu lightbox modal state must exist');
    assert.ok(html.includes('x-cloak'), 'x-cloak must be used for layout stabilization');
  });

  await t.test('includes Bali-Mexican Tropical Oasis design tokens & Bistro Board cards', () => {
    assert.ok(html.includes('bistro-card'), 'Bistro card class must be present');
    assert.ok(html.includes('wood-board-pattern'), 'Wood board pattern must be present');
    assert.ok(html.includes('tropical-glow'), 'Tropical glow ambient accents must be present');
    assert.ok(html.includes('setDietaryFilter'), 'setDietaryFilter handler must exist');
  });

  await t.test('includes all 6 official menu page scans and image references', () => {
    for (let i = 1; i <= 6; i++) {
      const imgPath = path.resolve(__dirname, `../assets/images/menu/menu-page-${i}.jpg`);
      assert.ok(fs.existsSync(imgPath), `menu-page-${i}.jpg must exist in assets/images/menu/`);
      assert.ok(html.includes(`assets/images/menu/menu-page-${i}.jpg`), `menu-page-${i}.jpg must be referenced in HTML`);
    }
  });
});

