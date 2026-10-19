# EF49 — Site Review & Improvement Checklist

Live site: https://ef499999-lgtm.github.io/ef49-gaming/

## What works

- Strong identity: "Play big. Live the game." with a silver and electric-blue logo on a dark (`#05070d`) theme
- Simple structure: Games, About, and one clear call to action
- Good basics: meta description, theme color, mobile viewport tag, smooth in-page links
- Useful core idea: genre filters plus a search box for a game library

## Fixes

- [ ] **Genre mismatch.** The hero says "10+ genres" but the filter shows only 6 (Shooters, Adventure, RPG, Survival, Racing, Strategy). Add more filters (Sports, Puzzle, Horror, Simulation, Fighting) or change the number.
- [ ] **Copyright line.** It reads "© EF49" with no year. Add the year, or generate it with `new Date().getFullYear()`.
- [ ] **Vague stat.** Replace "∞ Ways to play" with something concrete (e.g. "6 genres", "Solo + co-op").
- [ ] **Steam image hotlinking.** Artwork loads from Steam's CDN and can break. Add a fallback placeholder for failed loads and consider hosting some images locally.
- [ ] **Game card links.** Make sure each game links somewhere (its Steam page or a details view).
- [ ] **Repeated text.** "100 games" appears 3–4 times. Trim it.
- [ ] **Thin About section.** Add one or two sentences on what makes EF49 different from browsing Steam.
- [ ] **Search and filter polish.** Add a friendly "no results" message and clearly highlight the active filter.

## Bigger ideas

- [ ] Sorting (popular, newest, A–Z)
- [ ] "Random game" button
- [ ] Favorites list saved in `localStorage`
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) so links look good on Discord and WhatsApp
- [ ] Accessibility pass: alt text on the logo and game images, enough contrast for light text on the dark background, keyboard-friendly filters

## Quick snippets

### Auto-updating copyright year

```html
<p>© <span id="year"></span> EF49. Made for gamers.</p>
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
```

### Fallback for broken game images

```js
document.querySelectorAll(".game-card img").forEach((img) => {
  img.addEventListener("error", () => {
    img.src = "assets/placeholder.png";
  });
});
```

### Open Graph tags (put inside `<head>`)

```html
<meta property="og:title" content="EF49 — Level Up Your Game" />
<meta property="og:description" content="Discover 100 popular PC games, browse genres, and jump into your next adventure." />
<meta property="og:image" content="https://ef499999-lgtm.github.io/ef49-gaming/assets/ef49-logo.png" />
<meta property="og:type" content="website" />
```

### "No results" message

```js
const visible = [...document.querySelectorAll(".game-card")].filter(
  (card) => card.style.display !== "none"
);
document.getElementById("no-results").hidden = visible.length > 0;
```

Adjust the class names and IDs (`.game-card`, `#no-results`) to match your actual code.

## Note

This review was based on the page's text content only. Visual design, animations, and the game cards themselves were not evaluated.
