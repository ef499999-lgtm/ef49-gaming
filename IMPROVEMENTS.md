# EF49 — Review Notes

Live site: https://ef499999-lgtm.github.io/ef49-gaming/

> Correction: the first version of this file was written from the page's text only, before
> the JavaScript ran. A few items in it (copyright year, "no results" message, image fallback,
> game links) were already working in the code. This version reflects the real files.

## Already working

- Copyright year is generated in `script.js`
- "No results" message, game links, and a title-card fallback for broken images
- Search plus genre filtering, responsive layout, meta description and theme color

## Done in this update

- [x] **Genre filters** are now built from the game list: all 20 genres, each with a count (was 6 hard-coded buttons)
- [x] **Hero stats** (games and genres) come from the data, so they can't drift out of sync
- [x] **"∞ Ways to play"** replaced with "FREE · to browse"
- [x] **Repeated "100 games"** trimmed from the hero text, button, and subtitle
- [x] **Minecraft card** now shows its title card (before, it showed an empty gradient)
- [x] **Broken Steam images** fall back to the title card via one listener (no inline `onerror`)
- [x] **"No results"** message now names the search and genre, with a "Clear search & filters" button
- [x] **Open Graph and Twitter tags** plus a favicon, for link previews and the browser tab
- [x] **About section** now explains what EF49 is (no accounts, hand-picked, links to store pages)
- [x] **Accessibility:** visible focus outlines, `aria-pressed` on filters, descriptive link labels, larger tiny text, better contrast, reduced-motion support
- [x] **Smaller fixes:** fonts loaded with `<link>` instead of `@import` (faster), game titles HTML-escaped, `noscript` message, year fallback without JS

## Ideas for later

- [ ] Sort options (A–Z, genre) and a "random game" button
- [ ] Favorites saved in `localStorage`
- [ ] Host a few cover images yourself in case the Steam CDN changes
- [ ] A wide `og:image` (1200×630) instead of the logo, for bigger link previews
- [ ] Add more games or a short "why we picked it" line per game
