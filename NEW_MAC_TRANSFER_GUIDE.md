# New Mac Transfer Guide

Project: The Catcher's Collective website

Last updated: June 9, 2026

## What This Project Is

This is a static website. There is no build system, package install, database connection, or local app server required.

Main site files:

- `index.html`
- `idlife.html`
- `styles.css`
- `script.js`
- `CNAME`
- `assets/`

Planning and handoff files:

- `README.md`
- `CODEX_HANDOFF_FOR_JOSH.md`
- `NEXT_CHAT_SUMMARY.md`
- `SUPABASE_APP_PLAN.md`
- `CURRICULUM_WORKSPACE.md`

## Best Transfer Option: GitHub

The cleanest way to move the project to the new MacBook is GitHub.

Repository:

```text
git@github.com:CathersCollective/CatchersCollective.git
```

GitHub web page:

```text
https://github.com/CathersCollective/CatchersCollective
```

Current working branch:

```text
main
```

Published branch:

```text
gh-pages
```

Live site:

```text
https://catcherscollective.com
```

GitHub Pages fallback URL:

```text
https://catherscollective.github.io/CatchersCollective/
```

## Before Leaving This Mac

From the project folder, check whether anything is not saved to GitHub yet:

```bash
git status
```

If there are changed or new files that should move to the new Mac, save them to GitHub:

```bash
git add .
git commit -m "Prepare project handoff"
git push origin main
```

If the website itself changed and should publish live, also run:

```bash
git push origin main:gh-pages
```

Important: only push to `gh-pages` when the public website is ready to update.

## Set Up On The New MacBook

1. Install Codex.
2. Install Git if macOS prompts for command line tools.
3. Sign in to GitHub in a browser.
4. Set up GitHub access through SSH or GitHub Desktop.

Clone the project:

```bash
cd ~/Documents
git clone git@github.com:CathersCollective/CatchersCollective.git "Catcher's Collective Website"
cd "Catcher's Collective Website"
```

If SSH is not set up yet, use the HTTPS clone instead:

```bash
cd ~/Documents
git clone https://github.com/CathersCollective/CatchersCollective.git "Catcher's Collective Website"
cd "Catcher's Collective Website"
```

After cloning, check the files:

```bash
git status
```

Expected result:

```text
On branch main
nothing to commit, working tree clean
```

## Open The Project In Codex

In Codex on the new MacBook:

1. Open the folder named `Catcher's Collective Website`.
2. Ask Codex to read `README.md`, `CODEX_HANDOFF_FOR_JOSH.md`, and this file.
3. Use `main` for normal edits.
4. Pull the latest work before editing:

```bash
git pull origin main
```

## Preview The Website Locally

Because this is a static website, preview it with Python:

```bash
python3 -m http.server 8014
```

Then open:

```text
http://localhost:8014/
```

Useful pages to check:

```text
http://localhost:8014/
http://localhost:8014/idlife.html
```

Stop the preview server with `Control-C` in the terminal.

## Make And Publish Updates

Normal update flow:

```bash
git pull origin main
```

Edit files, preview locally, then save:

```bash
git add index.html idlife.html styles.css script.js assets README.md CODEX_HANDOFF_FOR_JOSH.md NEXT_CHAT_SUMMARY.md SUPABASE_APP_PLAN.md CURRICULUM_WORKSPACE.md
git commit -m "Describe the site update"
git push origin main
```

Publish to the live website:

```bash
git push origin main:gh-pages
```

After publishing, check:

```text
https://catcherscollective.com
```

GitHub Pages can take a minute or two to update.

## AirDrop Or Google Drive Backup Option

If GitHub access is not ready, transfer the whole folder by AirDrop or Google Drive.

Folder to transfer:

```text
/Users/jordanblack/Documents/Catcher's Collective Website
```

The full project is about 277 MB on this Mac. The `assets/` folder is about 137 MB.

Make sure these items are included:

- `.git/`
- `.gitignore`
- `index.html`
- `idlife.html`
- `styles.css`
- `script.js`
- `CNAME`
- `assets/`
- all `.md` planning and handoff files

If `.git/` is included, the new Mac keeps the project history and GitHub connection.

## Important Notes

- Do not delete or rename `CNAME`; it connects the site to `catcherscollective.com`.
- Do not force-push unless everyone working on the project agrees.
- Always pull from `main` before editing.
- Keep `main` and `gh-pages` aligned after approved website updates.
- The contact form is still front-end placeholder behavior.
- IDLife product buttons are placeholders until final links are available.
- The online academy section is still planning-stage content and should not be overbuilt until the offer is confirmed.

## Quick Verification Checklist

After the new MacBook is set up:

- Project opens in Codex.
- `git status` works.
- `git pull origin main` works.
- Local preview opens at `http://localhost:8014/`.
- Homepage loads.
- IDLife page loads.
- Images and videos load.
- A test change can be committed and pushed to `main`.
- Publishing with `git push origin main:gh-pages` works when ready.
