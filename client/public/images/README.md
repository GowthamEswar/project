# Public Images Folder

Place your image files in this folder. Files here are served statically by Vite and can be referenced in code using paths that start with `/images/...`.

Suggested filenames to use across the site:

- logo.png                     (Site logo used in navbar, footer, favicon)
- hero-home.jpg                (Optional home hero background)
- mission-education.jpg        (Education pillar)
- mission-health.jpg           (Emergency health pillar)
- mission-youth.jpg            (Youth empowerment pillar)
- donor-hero.jpg               (Optional donor hero background)
- gallery-1.jpg                (Homepage/gallery image 1)
- gallery-2.jpg                (Homepage/gallery image 2)
- gallery-3.jpg                (Homepage/gallery image 3)

How to reference in code (no import needed):

- In HTML: `<link rel="icon" href="/images/logo.png" />`
- In JSX: `<img src="/images/logo.png" alt="Logo" />`
- In CSS: `background-image: url('/images/hero-home.jpg');`

You can change filenames; just update the paths in components accordingly.
