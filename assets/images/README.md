# Images

Drop photographs into this folder using **exactly** the filenames below and they
will appear on the site automatically — no code changes needed.

Until a file exists, its frame shows a printed-looking placeholder instead, so
the layout never breaks and the site can go live before every photo is ready.

| Filename | Where it appears | Suggested crop |
|---|---|---|
| `grip-suitcase-open.jpg` | Home hero, home featured card, case-study hero, link previews | Landscape, ~1600 × 1200 |
| `grip-exhibition-card.jpg` | Home hero stack, case study (The show) | Portrait, ~1200 × 1500 |
| `grip-book-jamaica.jpg` | Home hero stack, case study (The books) | Landscape, ~1600 × 1200 |
| `grip-book-roots.jpg` | Home work grid, case study (The books) | Landscape, ~1600 × 1200 |
| `grip-dominoes.jpg` | Home work grid, case study (Objects) | Landscape, ~1600 × 1000 |
| `grip-installation.jpg` | Case study (The show) | Landscape, ~1600 × 1200 |
| `ellie-portrait.jpg` | About section | Portrait, ~1000 × 1300 |

## Notes

- **Rotate before uploading.** Photos taken on a phone often carry rotation in
  their EXIF data; browsers do not always honour it. Save them the right way up.
- **Keep files under ~500 KB each.** Export at around 1600 px on the long edge
  at 75–80% JPEG quality. `.webp` also works if you change the extension in the
  HTML to match.
- **The alt text is already written** in the HTML for each of these. If you swap
  in a different photograph, update the `alt` attribute so it still describes
  what is actually shown.
- To add a photo the site does not yet reference, copy an existing
  `<figure class="frame">` block in the HTML and point its `src` here.
