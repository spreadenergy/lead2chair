# goldstarlaundry.com — landing page

Static landing page for **Goldstar Laundry** ("Gold Star Laundry", sign reads *Goldstar Laundry · Laundromat ·
Lavandería*), a self-service laundromat at 2711 S Western Ave, Los Angeles.
No build step. It is built like `sites/lasplebes.com/`: English at `/`, Spanish at `/es/`, and a
browser-language redirect with a remembered switcher (`localStorage` key `gs-lang`).

## Layout

| Path | What |
|---|---|
| `public_html/index.html` | English page (default) |
| `public_html/es/index.html` | Spanish page |
| `public_html/assets/site.css`, `site.js` | Styles; language memory, open/closed badge (mirrored into the hero), year |
| `public_html/img/` | Photos from the owner's shared Google Photos album (see below) |

**Hours** appear in three places on each page, and both pages must match:

- the visible rows of the hours table;
- the table's `data-hours` attribute, which `site.js` reads to show the open/closed badge;
- the JSON-LD `openingHoursSpecification`.

The last-wash note under the table is plain text.

## Photos

These come from the "Gold Star Laundry" Google Photos album shared by SPREAD on 2026-09-30, which has 87 items.
They were downloaded at web sizes from Google's image servers. EXIF data is already stripped by Google.

| File | Album # | Used for |
|---|---|---|
| `storefront.jpg` | 1 | Hero background, og:image |
| `storefront-dusk.jpg` | 62 | Visit section |
| `dryers.jpg` | 60 | Gallery (large tile) |
| `washer-aisle.jpg` | 87 | Gallery |
| `washers-plant.jpg` | 35 | Gallery |
| `touchscreen.jpg` | 21 | Gallery |
| `washers.jpg` | 16 | Gallery |
| `drum.jpg` | 20 | Gallery |
| `top-loaders.jpg` | 17 | Gallery |
| `payrange.jpg` | 49 | "Pay with your phone" section |

Photos showing identifiable customers or children (for example #41, #46, #52–57 and #84–86) were deliberately
**not** used.

## Business facts used (researched 2026-09-30)

| Fact | Value | Sources | Confidence |
|---|---|---|---|
| Name / branding | Goldstar Laundry; green and gold with a star | Storefront sign and rules sign in the album photos | High |
| Address | 2711 S Western Ave, Los Angeles, CA 90018 | Yelp, both Nextdoor pages, Waze | High |
| Phone | (323) 840-3348 | Nextdoor ("Gold Star Laundry / Lavanderia"), web search | Medium-high |
| Hours | Mon–Thu 6am–9pm; Fri–Sun 6am–10pm; last wash 7:30pm Mon–Thu / 8:30pm Fri–Sun | Nextdoor "Gold Star Laundry / Lavanderia" (the other Nextdoor page says 6am–10pm daily) | Medium: confirm with the Google Business Profile |
| Machines | 60 lb (6-load) and 80 lb (8-load) washers, top-loaders, a wall of stacked dryers, touchscreen washers | Wall signs and machines in the photos | High |
| Payment | Coins, change machine, PayRange app | PayRange sticker and change machines in the photos; Nextdoor | High |
| Amenities | WiFi and restroom for customers, drinks and snacks, laundry supplies, folding tables, TVs, security cameras | Rules sign and photos; Nextdoor | High |
| House rules | Summarized from the bilingual "Rules & Policies" sign | Album photo #39 | High |
| Domain | goldstarlaundry.com: registered 2019, Google Cloud DNS, currently returns a 404 (it points at Google Sites IPs) | DNS/RDAP lookup, 2026-09-30 | High |

## To confirm with the owner

- Hours (the two listings differ on Monday–Thursday closing), ideally from a screenshot of the Google Business Profile.
- Whether they offer wash-and-fold or drop-off service. None was found online, so the page doesn't mention it.
- Where the site should be hosted. The domain's DNS is at Google, not Hostinger.
