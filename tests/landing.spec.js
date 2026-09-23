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
    assert.ok(html.includes('lucide'), 'Lucide Icons CDN should be present');
    assert.ok(html.includes('fonts.googleapis.com'), 'Google Fonts should be present');
  });

  await t.test('includes Cilantro Ubud branding and logo image', () => {
    assert.ok(html.includes('assets/images/cilantro-logo.jpg'), 'Logo image must be referenced');
    assert.ok(html.includes('Cilantro'), 'Cilantro restaurant name must be present');
    assert.ok(html.includes('Ubud'), 'Ubud location must be present');
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

  await t.test('includes core signature dishes and vegan specialties', () => {
    assert.ok(html.includes('Jalapeño Poppers'), 'Famous Jalapeño Poppers item must be present');
    assert.ok(html.includes('Wet Burrito') || html.includes('"Wet" Burrito'), 'Wet Burrito must be present');
    assert.ok(html.includes('Jackfruit Carnitas'), 'Vegan Jackfruit Carnitas must be present');
    assert.ok(html.includes('Margarita'), 'Margaritas must be present');
  });

  await t.test('includes WhatsApp Click-to-Chat CTA links with safe attributes', () => {
    assert.ok(html.includes('https://wa.me/'), 'WhatsApp wa.me links must exist');
    assert.ok(html.includes('target="_blank"'), 'Outbound links should open in new tab');
    assert.ok(html.includes('rel="noopener noreferrer"'), 'Outbound links must have rel=noopener');
  });

  await t.test('includes responsive Google Maps embed and social media links', () => {
    assert.ok(html.includes('maps.google.com') || html.includes('google.com/maps'), 'Google Maps embed must exist');
    assert.ok(html.includes('aspect-video'), 'Map wrapper should have aspect ratio container');
    assert.ok(html.includes('instagram.com/cilantroubud'), 'Instagram profile link must exist');
    assert.ok(html.includes('facebook.com/cilantroubud8'), 'Facebook page link must exist');
  });

  await t.test('includes Alpine.js state hooks and modal components', () => {
    assert.ok(html.includes('mobileMenuOpen'), 'Alpine mobile menu state must exist');
    assert.ok(html.includes('activeCategory'), 'Alpine interactive menu tab state must exist');
    assert.ok(html.includes('modalOpen'), 'Alpine reservation modal state must exist');
    assert.ok(html.includes('x-cloak'), 'x-cloak must be used for layout stabilization');
  });
});
