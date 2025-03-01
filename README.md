# Piano Chord Catalog

A piano chord catalog that uses integer notation and math to display finger positions for various chords. The initial focus was common triad chords, but more may come.

## Why?

This was a project to learn a little bit of angular.

## Deployment

1. Build using Angular: `ng build --output-path docs --base-href /piano-chord-catalog/`
2. Copy the contents of `/docs/browser` and place it in `/docs` (removing the browser subfolder): `mv ./docs/browser/* ./docs`, `rm ./docs/browser/`
3. In `/docs/` copy `index.html` and rename the copy `404.html` for compatibility with GitHub Pages: `cp ./docs/index.html ./docs/404.html`

More on deploying Angular apps can be found [here](https://angular.io/guide/deployment).