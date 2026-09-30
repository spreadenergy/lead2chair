# alsricos.com — interim landing page

Static placeholder for **Al's Ricos Tacos** (Fresno, CA) until the full site is built.
It has no build step. Its only external dependencies are Google Fonts and the Google Maps embeds.
It is built the same way as `sites/lasplebes.com/`.

## Layout and languages

| Path | What |
|---|---|
| `public_html/index.html` | English page, the default (`/`) |
| `public_html/es/index.html` | Spanish page (`/es/`) |
| `public_html/assets/site.css`, `site.js` | Shared styles; language-choice memory, per-location open/closed badges, year |

**Language redirect.** A small inline script at the top of the English page sends a visitor to `/es/` when the first
English or Spanish entry in their browser's language list is Spanish. Visitors with any other language, with no
JavaScript, and crawlers get English.

**Language switch.** The "Español"/"English" link stores the choice in `localStorage` under the key `ar-lang`. On
later visits to `/`, that choice overrides the browser setting. `/es/` never redirects, so Spanish links can be
shared.

When changing copy, edit **both** pages.

**Hours:**

Each location card has a status `div` followed by a `<table class="hours" data-hours='{"0":[open,close],...}'>`.
The `data-hours` values are decimal hours; 0 is Sunday. `site.js` uses them for that location's open/closed badge.
When hours change, update the visible rows, `data-hours` and the JSON-LD `openingHoursSpecification` on **both** pages.

## Deploy (Hostinger)

This site sits in the same Hostinger account as lasplebes.com. The domain's nameservers were moved to Hostinger on
2026-09-29, but the website still needs to be created in hPanel before anything can be deployed.
After that, deploy the same way as lasplebes.com: through the Hostinger API (upload a zip of `public_html/` and call
the deploy endpoint), or by uploading the contents of `public_html/` in File Manager. In both cases, include the
hidden `.htaccess` and make sure the free SSL certificate is active.

## Business facts used (researched 2026-09-29)

| Fact | Value | Sources | Confidence |
|---|---|---|---|
| Location 1 | 2950 Ventura Ave, Fresno, CA 93721 | Google Business Profile (screenshot shared by SPREAD, 2026-09-29); some listings say "Ventura St" | High |
| Location 1 hours | Every day 9am–8pm | Google Business Profile | High |
| Location 2 | 3069 W Ashlan Ave, Fresno, CA 93722 (corner of N Marks Ave) | Google Business Profile (screenshot shared by SPREAD, 2026-09-29) | High |
| Location 2 hours | Mon–Sat 9:30am–8:30pm; Sun 9:30am–5:30pm | Google Business Profile | High |
| "4003 N Marks Ave" | Appears on Yelp, Nextdoor and hungryfoody. It is almost certainly the Ashlan location, whose Google pin is at Ashlan & Marks. Not used | Web listings | — |
| Phones | Ventura (559) 237-2214; Ashlan (559) 225-2770 | Confirmed by SPREAD, 2026-09-29 (matches Yellow Pages for Ventura and Nextdoor for the Ashlan/"Marks" listing) | High |
| Menu | Tacos (asada, lengua, chile verde), burritos, breakfast burritos, tamales, enchiladas, quesadillas | Yelp, Nextdoor, restaurantguru, goto-where listing | Medium-high |
| Price / reservations | $1–10 per person; no reservations | Google Business Profile | High |
| Online ordering / delivery | None found. Listings say no delivery | restaurantguru | Medium |

## To confirm with the owner

- Logo, photos, social links, and whether there's an ordering link.
