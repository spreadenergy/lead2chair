# lasplebes.com — interim landing page

Static, single-page placeholder for **Las Plebes Tacos y Mariscos** (Fresno, CA) until the full site is built.
No build step, no dependencies beyond Google Fonts and a Google Maps embed.

## Deploy to Hostinger

1. hPanel → **Websites → lasplebes.com → File Manager** (or FTP).
2. Upload the *contents* of `public_html/` into the site's `public_html/` folder
   (`index.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `.htaccess`).
   Remove Hostinger's default `default.php` / parking `index.php` if present.
3. hPanel → **Security → SSL**: make sure the free SSL is active, since `.htaccess` redirects everything to `https://lasplebes.com`.

## Business facts used (researched 2026-09-26)

| Fact | Value | Sources | Confidence |
|---|---|---|---|
| Address | 4326 E Cesar Chavez Blvd, Fresno, CA 93702 | DoorDash, Roadtrippers, Yelp listing title | High |
| Hours | Tue–Fri 10am–6pm; Sat–Sun 9am–5pm; Mon closed | Yahoo Local, Roadtrippers | Medium-high (confirm with owner) |
| Menu categories | Cold bar, hot plates, tacos, seafood, Sinaloan antojitos, soups, Clamatasos | Yahoo Local / listing description | Medium-high |
| Online ordering | DoorDash store 34682316 | DoorDash | High |
| Phone | **Not published** — only one listing gave (559) 252-2133 and it also had the wrong street direction | Yahoo Local | Low — confirm before enabling |

Not the same business: *Taqueria Las Plebes*, 4107 E Jensen Ave (phone (559) 255-5494). Its Facebook page says it is "with" Las Plebes Tacos y Mariscos, so they may be related — confirm with the owner before cross-linking.

## To confirm with the owner before/after launch

- Phone number → uncomment the `tel:` button in `index.html` (search for "Enable once the phone number").
- Hours (hours also live in the JSON-LD block and in the small open/closed script — keep all three in sync).
- Logo, photos, social links, and whether DoorDash is the preferred ordering link.
