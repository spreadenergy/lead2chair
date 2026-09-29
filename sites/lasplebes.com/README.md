# lasplebes.com — interim landing page

Static placeholder for **Las Plebes Tacos y Mariscos** (Fresno, CA) until the full site is built.
No build step, no dependencies beyond Google Fonts and Google Maps embeds.

## Layout and languages

| Path | What |
|---|---|
| `public_html/index.html` | English page, the default (`/`) |
| `public_html/es/index.html` | Spanish page (`/es/`) |
| `public_html/assets/site.css`, `site.js` | Shared styles; language-choice memory, per-location open/closed badges and year |

A small inline script at the top of the English page sends a visitor to `/es/` when the first English or Spanish
entry in their browser's language list (`navigator.languages`) is Spanish. Other languages, no JavaScript and crawlers
get English. Clicking the "Español"/"English" switch stores the choice in `localStorage` (`lp-lang`), which then
overrides the browser setting on later visits to `/`. `/es/` never redirects, so Spanish links can be shared.
Both pages declare `hreflang` alternates, and so does `sitemap.xml`.

When changing copy, edit **both** pages.

## Deploy to Hostinger

### Automatic (GitHub Actions)
`.github/workflows/deploy-lasplebes.yml` uploads `public_html/` over SSH whenever it changes on `main`
(or on demand via **Actions → Deploy lasplebes.com → Run workflow**). This repo is public, so connection
details live only in **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `HOSTINGER_SSH_COMMAND` | The `ssh -p … user@host` line from hPanel → Advanced → SSH Access |
| `HOSTINGER_SSH_PASSWORD` | The SSH password from the same page |
| `HOSTINGER_KNOWN_HOSTS` (optional) | Pinned host key; otherwise scanned on first contact |

Each run first backs up the server's current `public_html` to `~/backups/`, removes Hostinger's `default.php`
parking page, uploads the files, then checks https://lasplebes.com/. Without the secrets the job skips.

### Manual
1. hPanel → **Websites → lasplebes.com → File Manager**.
2. Upload the *contents* of `public_html/` (including the hidden `.htaccess`) into the site's `public_html/`
   and delete Hostinger's `default.php` if present.
3. hPanel → **Security → SSL**: make sure the free SSL is active, since `.htaccess` redirects everything to `https://lasplebes.com`.

## Business facts used (researched 2026-09-26)

| Fact | Value | Sources | Confidence |
|---|---|---|---|
| Address | 4326 E Cesar Chavez Blvd, Fresno, CA 93702 | DoorDash, Roadtrippers, Yelp listing title | High |
| Hours (Cesar Chavez) | Tue–Fri 10am–6pm; Sat–Sun 9am–5pm; Mon closed | Yahoo Local, Roadtrippers; Google profile showed "Closes 6 PM" on a Tuesday | High for Tue; others medium-high |
| Menu categories | Cold bar, hot plates, tacos, seafood, Sinaloan antojitos, soups, Clamatasos | Yahoo Local / listing description | Medium-high |
| Online ordering | DoorDash store 34682316 | DoorDash | High |
| Phone (Cesar Chavez) | (559) 375-1604 | Google Business Profile (screenshot shared by SPREAD, 2026-09-29) | High |
| Second location | 4107 E Jensen Ave, Fresno, CA 93725 (listed online as "Taqueria Las Plebes") | Confirmed by SPREAD 2026-09-29; address on Yelp, Yahoo Local, Yellow Pages | High |
| Jensen phone | (559) 255-5494 | Google Business Profile (screenshot shared by SPREAD, 2026-09-29); matches Yahoo Local, Yellow Pages, Chamber of Commerce | High |
| Jensen hours | Tue–Fri 9:30am–7pm; Sat–Sun 8:30am–5pm; Mon closed (takeout listed as 9am–6pm) | Google Business Profile hours panel (screenshot shared by SPREAD, 2026-09-29) | High |

## To confirm with the owner before/after launch

- Each location's hours appear three times per page, and there are two pages. They are the visible table rows, the table's `data-hours` attribute (which drives the open/closed badge in `assets/site.js`) and the JSON-LD `openingHoursSpecification`. Keep all of them in sync.
- Logo, photos, social links, and whether DoorDash is the preferred ordering link.
