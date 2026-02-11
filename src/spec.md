# Specification

## Summary
**Goal:** Build a mobile-first, frontend-only birthday single-page experience for Gray with a celebratory landing page, animated hero GIF carousel, and dynamic “Open when…” mood chat pages.

**Planned changes:**
- Add client-side routing for a landing page (`/`) and dynamic mood pages (`/mood/:slug`) with refresh-safe routing and an unknown-slug not-found state.
- Create a static TypeScript mock data module exporting `Message` and `MoodSection` types plus 5 mood sections (sad, doubt, laugh, celebrate, stressed), used by all pages.
- Implement the landing page design (light/airy/pastel) including: a 3-GIF cross-fade auto-playing hero carousel, a cursive poem section with scroll-triggered progressive reveal, a 5-card “Open when…” navigation grid with hover/tap scale feedback, and two footer placeholder buttons (“Personal Playlist”, “Love Globe”) that only `console.log`.
- Implement mood pages that apply mood-based theming (theme color + background gradient from data) and render a premium chat-thread UI with GIF avatars and bubbles supporting text, audio, and video message types.
- Add animation polish with Framer Motion: route transitions between pages and staggered fade+slide-up message entrance on mood pages.
- Set up global typography using two Google fonts (sans-serif for body; cursive/handwritten for poem and key headings).

**User-visible outcome:** Users can open a polished birthday landing page for Gray, watch an auto-playing cross-fade GIF hero, read a scroll-revealed poem, tap “Open when…” cards to navigate to themed mood pages, and view animated, chat-style message threads with text/audio/video bubbles and looping GIF avatars (with smooth page transitions).
