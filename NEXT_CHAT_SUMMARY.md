# Catcher's Collective Next Chat Summary

Project folder:

```txt
/Users/laramygregory/Documents/New project 7
```

Local preview:

```txt
http://localhost:8011/?v=20260528-business-plan-current-hero
```

If the preview fails:

```sh
cd "/Users/laramygregory/Documents/New project 7"
python3 -m http.server 8011
```

## Current State

- Static website for Josh Crouch / The Catcher's Collective.
- Main files are `index.html`, `styles.css`, `script.js`, and `idlife.html`.
- Current active logo is `assets/brand/catchers-collective-wordmark.svg`.
- The logo is transparent, with only the home plate interior filled black.
- Do not return to the old badge/helmet logo system unless explicitly requested.

## Latest Merge

Updates from `/Volumes/LC PARTNERS/handoff/HANDOFF_UPDATE.md` were merged into this local build.

The homepage now has the fuller business-plan structure:

- Services / training options strip
- In-person local training section
- Online & virtual coaching pricing
- Scalability note
- Membership tiers
- Development pillars
- Coach Josh
- Recent highlight
- Training locations
- Expanded contact form with online plan options

## Hero Section

The user explicitly asked to leave the current hero page and logo behavior alone.

Hero currently uses:

- Image: `assets/photos/josh-receiving-game.jpeg`
- Headline: `The Catcher's Collective`
- Body: `Pro-level catcher training for athletes who want to receive, throw, block, lead, hit, and think the game with purpose.`
- Buttons: `Request a Lesson` and `Explore Programs`
- No duplicated logo inside the hero content.

## Logo / Header Rules

- Use `assets/brand/catchers-collective-wordmark.svg` for visible logo placements.
- Header logo should remain transparent, not boxed.
- Scrolled header should stay dark or dark translucent so the gold logo remains readable.
- The decorative backdrop logo in the intro/services section is centered with:

```css
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```

## Important User Preferences

- Do not take liberties with unrelated sections.
- If the user asks for one section, change only that section.
- Do not add a logo into the hero unless specifically asked.
- Do not change hero copy unless specifically asked.
- Pictures should keep Josh/player centered and visible.
- Avoid cropping people out of cards.

## Handoff Folder

The local handoff folder has been synced with the merged site:

```txt
/Users/laramygregory/Documents/New project 7/handoff
```

The zip archive may need to be refreshed after future changes:

```txt
/Users/laramygregory/Documents/New project 7/catchers-collective-handoff.zip
```

## Open TODOs

- Connect the lead/contact form to email, CRM, booking, or automation.
- Add real IDLife associate/product links when available.
- Finalize social links.
- Final copy/SEO pass for Murfreesboro, Nashville, Franklin, Brentwood, and Middle Tennessee catcher training.
- Final responsive QA before launch.
