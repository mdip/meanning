# Meanning Cover Studio

Meanning is a technical-book cover studio built with Next.js. Create
a cover, choose a color and historical figure, position the artwork, and export
the result as a PNG.

## Public-domain artwork

The figures in the editor are cut from public-domain 1788 costume plates in a
Boston Public Library scan held on Internet Archive. Their provenance is
documented in [`public/people/ATTRIBUTION.md`](public/people/ATTRIBUTION.md).

This project does not include book covers, logos, fonts, or illustrations from
Manning, O'Reilly, or any other publisher. If external images are ever added,
use only assets whose licence explicitly permits reuse and modification, and
record their source and licence.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` to view the landing page and
`http://localhost:3000/editor` to open the cover editor.

## Production build

```bash
pnpm build
```

## GitHub Pages

The GitHub Actions workflow deploys the static export to GitHub Pages. It builds
with `NEXT_PUBLIC_BASE_PATH=/meanning`, so public assets and routes are served
correctly from:

```text
https://mdip.github.io/meanning/
```

To reproduce the Pages build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/meanning pnpm build
```
