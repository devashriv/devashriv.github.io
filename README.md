# Dee's Workspace

A personal portfolio and project showcase for design, engineering, creative coding, and prototyping experiments.

## Project structure

- `index.html` — homepage layout and navigation
- `content/projects.js` — structured metadata for portfolio cards
- `scripts/main.js` — renders project cards from structured content
- `styles/base.css` — shared design tokens and base styles
- `styles/site.css` — page-specific layout and component styling
- `images/` — photography, illustrations, and project thumbnails
- `examples/` — interactive web experiments and demos
- `pdfs/` — project documentation and downloadable files

## Maintenance workflow

### Add or update a project
1. Open `content/projects.js`.
2. Add or edit an item in the appropriate array: `featured`, `code`, or `things`.
3. Include a `title`, `image`, `description`, and one or more `links`.
4. Refresh the homepage in the browser to confirm the card renders correctly.

### Update styling
- Use `styles/base.css` for variables, typography, and shared card styling.
- Use `styles/site.css` for layout and page-level sections.
- Keep colors and spacing consistent by reusing design tokens instead of inline styles.

### Preview locally
Open the site in a browser directly or serve the folder with a simple local web server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Best practices followed

- Content kept separate from HTML structure
- Reusable CSS split into base and site-specific files
- Visual identity retained while reducing inline styling
- Easier future expansion for more projects and case studies

## Deployment
This site is designed for static hosting and works well with GitHub Pages or any static web host.
