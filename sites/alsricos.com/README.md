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

**Adding hours to a location** (in both pages):

1. Replace the "See hours on Google Maps" line with a status `div` followed by a
   `<table class="hours" data-hours='{"0":[open,close],...}'>`. Copy the markup from `sites/lasplebes.com`. `site.js`
   then shows an open/closed badge for that location automatically.
2. Add `openingHoursSpecification` and `telephone` to that location's JSON-LD entry.

## Deploy (Hostinger)

This site sits in the same Hostinger account as lasplebes.com. The domain's nameservers were moved to Hostinger on
2026-09-29, but the website still needs to be created in hPanel before anything can be deployed.
After that, deploy the same way as lasplebes.com: through the Hostinger API (upload a zip of `public_html/` and call
the deploy endpoint), or by uploading the contents of `public_html/` in File Manager. In both cases, include the
hidden `.htaccess` and make sure the free SSL certificate is active.

## Business facts used (researched 2026-09-29)

| Fact | Value | Sources | Confidence |
|---|---|---|---|
| Location 1 | 2950 Ventura St, Fresno, CA 93721 | Yelp, Yellow Pages (restaurantguru says "Ventura Ave") | High for the location; confirm "St" vs "Ave" |
| Location 2 | 4003 N Marks Ave, Fresno, CA 93722 | Yelp, Nextdoor, hungryfoody | High |
| Phones | **Not published.** Ventura: (559) 237-2214 / 424-3343. Marks: (559) 225-2770 / 226-5069 | Yellow Pages, restaurantguru, Nextdoor, hungryfoody | Low: sources conflict |
| Hours | **Not published.** Sources conflict: Ventura 8:30–9:30 daily vs 9–8 daily vs 10–8; Marks 9–8:30 vs 8:30–10 vs 11–10 | Same as above | Low |
| Menu | Tacos (asada, lengua, chile verde), burritos, breakfast burritos, tamales, enchiladas, quesadillas | Yelp, Nextdoor, restaurantguru, goto-where listing | Medium-high |
| Online ordering / delivery | None found. Listings say no delivery | restaurantguru | Medium |
| Other address | 3069 W Ashlan Ave (phone (559) 243-9011) appears in older listings. SPREAD says there are two locations, so it is not shown | Web search | Treat as closed unless the owner says otherwise |

## To confirm with the owner

- Phone and hours for each location. Google Business Profile screenshots of the hours panel work well.
- "Ventura St" vs "Ventura Ave".
- Logo, photos, social links, and whether there's an ordering link.
