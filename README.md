# Ellie Carpenter — portfolio

A hand-built portfolio site for painter and graphic designer Ellie Carpenter,
covering two bodies of work: her **alcohol ink paintings**, and **Grip**, her
final major project at Leeds Arts University (2024) — an interactive educational
body of work on the Windrush Generation, held inside a vintage suitcase.

Plain HTML, CSS and JavaScript. No build step, no frameworks, no dependencies —
open `index.html` in a browser and it works.

## Structure

```
index.html               Home — hero, selected work, about, contact
projects/paintings.html  Painting gallery — framed works and studies
projects/grip.html       Full case study for Grip
404.html                 Not-found page
assets/css/style.css     The whole design system (tokens at the top)
assets/js/main.js        Nav, image loading, scroll reveals, lightbox
assets/images/           Photographs — see the README in that folder
```

## Running it locally

Open `index.html` directly, or serve the folder so root-relative links behave
exactly as they will in production:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing on GitHub Pages

Settings → Pages → Build and deployment → *Deploy from a branch*, then pick this
branch and the `/ (root)` folder. The site is served as-is; `.nojekyll` stops
GitHub from running Jekyll over it.

## Adding photographs

`assets/images/README.md` lists the exact filenames the site expects. Drop a
file in with the matching name and it appears — until then, that frame shows a
printed-looking placeholder rather than a broken image, so the site is
presentable even with no photos in place.

## Editing the words

The copy lives directly in the HTML. Two things worth knowing:

- **Quoted material is verbatim.** Ellie's exhibition statement, the text printed
  inside the suitcase lid, the engraved domino tag, the book credit page and the
  two book quotations are reproduced as written.
- **The connecting copy is a draft** written around those quotes and the
  photographs — the reasoning about process, binding and exhibition decisions,
  and the description of the painting method and medium, should be read through
  and corrected by Ellie before the site goes public. In particular the paintings
  are described as *alcohol ink*, which was inferred from the photographs.

A commented block in `index.html` (search for `ADDING A NEW PROJECT`) shows how
to add further projects to the work section.

## Credits carried by the site

The Grip case study credits **R.E.K. Phillips** for the 1971 words, the Phillips
family for the photographs taken in Jamaica and England, and Ellie Carpenter for
the design and making. Keep that credit intact in any rewrite.

## Contact details

The site links to LinkedIn and Instagram. There is a commented-out email button
in the contact section of `index.html` — uncomment it and add an address if
Ellie wants one shown.
