# Codex Handoff for Josh

Project: The Catcher's Collective website

For moving this project to a new MacBook, start with:

```text
NEW_MAC_TRANSFER_GUIDE.md
```

## Repository and Live Site

- GitHub repo: `git@github.com:CathersCollective/CatchersCollective.git`
- GitHub web URL: `https://github.com/CathersCollective/CatchersCollective`
- Published branch: `gh-pages`
- Source branch: `main`
- GitHub Pages URL: `https://catherscollective.github.io/CatchersCollective/`
- Custom domain: `catcherscollective.com`

GitHub Pages is configured to publish from the `gh-pages` branch at `/root`.

The custom domain has been added through the `CNAME` file:

```text
catcherscollective.com
```

Namecheap DNS should point to GitHub Pages:

```text
A       @      185.199.108.153
A       @      185.199.109.153
A       @      185.199.110.153
A       @      185.199.111.153
CNAME   www    CathersCollective.github.io
```

If HTTPS is not working yet, check GitHub repo Settings -> Pages and wait for the certificate to be issued, then enable "Enforce HTTPS" when available.

## Current Site Files

Main editable files:

- `index.html`
- `styles.css`
- `script.js`

Important assets:

- `assets/brand/catchers-collective-wordmark.svg`
- `assets/photos/josh-receiving-game.jpeg`
- `assets/photos/catchers-collective-hero-people.png`
- `assets/photos/youth-catcher-receiving.png`
- `assets/photos/youth-catcher-blocking.png`
- `assets/photos/youth-catcher-throwing.png`
- `assets/photos/youth-catcher-game-management.png`
- `assets/photos/youth-catcher-leadership.png`
- `assets/photos/youth-baseball-gym-training.png`

## Current Design Direction

The public website is the marketing and lead-generation site. The paid teaching platform may live separately, likely on Teachable, with this site linking to programs once they are ready.

The site should not mention Teachable by name unless Josh decides to expose that publicly.

The current training section is titled:

```text
Training Options for the Developing Athlete
```

It has three tabs:

- Private In Person Lessons
- Online Academy
- Clinics and Camps

### Private In Person Lessons

The Private tab currently has two white cards:

1. `1:1 Training with Josh`
   - `$99 / session`
   - Drop in, pay as you go
   - `$375 / 4-pack`
   - Four 60-minute sessions
   - Checklist:
     - Any pillar training available for 60 minutes
     - Video recap from OnForm after the completed session
     - Best for focused 1:1 instruction, skill correction, and development planning

2. `Group Training Session`
   - `$220 / session`
   - Single session, no commitment
   - `$205 / session`
   - 4-session pack
   - Checklist:
     - 90-minute group training sessions
     - Up to 4 catchers per session
     - Single session is $55 per catcher
     - 4-session pack is $205 total per 90-minute session

The price option boxes should turn green on hover. The parent cards should stay white.

### Online Academy

Currently uses placeholder cards. It should eventually reflect the course/curriculum products that Josh will offer through the teaching platform.

Potential course skeleton from the curriculum PDF:

- 8U: The Catcher's Code: Foundations
- 9-10: The Catcher's Code: Youth
- 11-12: The Catcher's Code: Development I
- 13-14: The Catcher's Code: Development II
- 15-16: The Catcher's Code: Competitive
- 17-18: Elite Signal
- College: Behind the Plate Masterclass

Do not overbuild this section until Josh confirms how he wants the public marketing cards to read.

### Clinics and Camps

Currently displays one full-width seasonal announcement card. It uses the group photo:

```text
assets/photos/catchers-collective-hero-people.png
```

The copy says clinics and camps are seasonal and announced by Coach Josh, with more information added when registration opens.

Keep the photo crop showing all faces, including both coaches on the ends.

## Recent Deployment

Last pushed commit:

```text
6803ca3 Update training programs section
```

That commit was pushed to both:

```text
main
gh-pages
```

## Recommended Development Workflow

Before making edits on Josh's machine:

```bash
git pull origin main
```

Preview locally:

```bash
python3 -m http.server 8014
```

Open:

```text
http://localhost:8014/
```

After approved edits:

```bash
git add index.html styles.css script.js assets
git commit -m "Describe the approved site update"
git push origin main
git push origin main:gh-pages
```

## Collaboration Note

Josh will be the primary editor from his machine and Codex account.

Laramy may still make occasional development updates from her machine. To avoid overwriting each other:

- Always pull from `main` before editing.
- Do not force-push.
- If both machines have edits, commit each person's work separately.
- If there is a conflict, review the file manually instead of discarding changes.
- Keep `main` and `gh-pages` aligned after approved site updates.

## Local Metadata Note

There may be an unstaged `AGENTS.md` metadata change on Laramy's machine. That file is not part of the public website design and should not be treated as a required site update unless intentionally edited.
