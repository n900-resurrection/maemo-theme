# maemo-theme

A Jekyll theme in the look of the Maemo community web sites (maemo.org, talk.maemo.org): dark header band, tabbed navigation, white content box, orange links, Arial.
Drawn with CSS only (no image sprites), works on GitHub Pages as a remote theme:

```yaml
# _config.yml of the site
remote_theme: n900-resurrection/maemo-theme
plugins: [jekyll-remote-theme]
title_main: N900
title_accent: Resurrection        # shown in orange
description: tagline under the title
nav:
  - { title: Home, url: / }
  - { title: Blog, url: /blog/ }
```

Layouts: `default`, `page`, `post`, `catalogue` (a filterable grid made from `_data/packages.json`) and `package` (the page of one package). The catalogue data comes from
`scripts/mksite.py` of [nokia-n900-apps](https://github.com/n900-resurrection/nokia-n900-apps), which reads the `.deb` files of the repository.

## Licence
The style sheet `assets/css/maemo.css` is a derivative of the style sheets of the Maemo community web site (copies in `reference/original-css/`) and is shared under
**CC BY-SA 3.0**; the rest of the theme is MIT. See [NOTICE.md](NOTICE.md). No logos or artwork of Nokia or Maemo are included.
