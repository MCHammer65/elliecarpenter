# Images

Drop photographs into this folder using **exactly** the filenames below and they
will appear on the site automatically — no code changes needed.

Until a file exists, its frame shows a printed-looking placeholder instead, so
the layout never breaks and the site can go live before every photo is ready.

## Paintings (earlier work, shown on the home page)

| Filename | Where it appears | Shape |
|---|---|---|
| `painting-blue-copper.jpg` | Home — earlier work gallery | Portrait |
| `painting-jellyfish.jpg` | Home — earlier work gallery | Portrait |
| `painting-red-gold.jpg` | Home — earlier work gallery | Portrait |
| `painting-tessellation.jpg` | Home — earlier work gallery | Portrait |
| `study-roses.jpg` | Home — earlier work gallery | Portrait |
| `study-blue-copper.jpg` | Home — earlier work gallery | Portrait |
| `study-teal-gold.jpg` | Home — earlier work gallery | Portrait |
| `study-green-poppies.jpg` | Home — earlier work gallery | Portrait |

Shoot the framed pieces square-on and crop to the frame's outer edge. These are
high-gloss, so photograph them in soft indirect light — a window to one side,
no flash — and step to the side of any reflection rather than shooting straight
into it.

## Grip

| Filename | Where it appears | Suggested crop |
|---|---|---|
| `grip-suitcase-lid.jpg` | Home hero, home featured card, case-study hero | Landscape, ~1600 × 1200 |
| `grip-suitcase-open.jpg` | Case study | Landscape, ~1600 × 1200 |
| `grip-book-credit.jpg` | Case study (the books) | Landscape, ~1600 × 1000 |
| `grip-book-jamaica.jpg` | Case study (the books) | Landscape, ~1600 × 1200 |
| `grip-book-roots.jpg` | Case study (the books) | Landscape, ~1600 × 1200 |
| `grip-dominoes.jpg` | Case study (objects) | Landscape, ~1600 × 1000 |
| `grip-keyring.jpg` | Case study (objects) | Landscape, ~1600 × 1200 |
| `grip-red-stripe.jpg` | Case study (objects) | Landscape, ~1600 × 1200 |
| `grip-exhibition-card.jpg` | Case study (the show) | Portrait, ~1200 × 1500 |
| `grip-installation.jpg` | Case study (the show) | Landscape, ~1600 × 1200 |

## Portrait

| Filename | Where it appears | Suggested crop |
|---|---|---|
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
