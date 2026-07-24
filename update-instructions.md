# Website Update Instructions

## Project Overview

**Site Type:** GitHub Pages (static site)
**Repository:** https://github.com/andygawt/andygawt-website.git
**Deployment:** Changes go live 1-2 minutes after pushing to GitHub

## Critical: How Media Content Works

⚠️ **IMPORTANT:** Media items must be updated in TWO places:

1. **`data/media.json`** - Powers the full media page (media.html)
2. **`index.html`** - Hardcoded content for the homepage feeds

The homepage does NOT dynamically load from media.json. It has hardcoded HTML that must be manually updated.

## Adding New Media Items

### Step 1: Add to data/media.json

Add the new item at the TOP of the array in `data/media.json`:

```json
{
  "date": "2026-07-15",
  "type": "article",
  "outlet": "The Conversation",
  "title": "Article Title Here",
  "url": "https://...",
  "description": "Optional description or leave empty"
}
```

**Types:**
- `article` - Op-eds and articles you wrote
- `interview` - Quoted or interviewed
- `podcast` - Podcast appearances
- `tv` - Television appearances

### Step 2: Add to index.html Homepage Feeds

The homepage has two relevant columns:
- **"Recent Media"** - For interviews/quotes (left column)
- **"Recent Commentary"** - For articles you wrote (right column)

Find the appropriate `<div class="feed-column">` section and add at the TOP:

```html
<div class="feed-item">
    <div class="feed-item-date">July 15, 2026</div>
    <div class="feed-item-title"><a href="URL" target="_blank">Title</a></div>
    <div class="feed-item-outlet">Outlet Name</div>
</div>
```

For quoted/interview items in "Recent Media", add `(quoted)` after the title:
```html
<div class="feed-item-title"><a href="URL" target="_blank">Title</a> (quoted)</div>
```

### Step 3: Commit and Push

```bash
git add data/media.json index.html
git commit -m "Add new media: [brief description]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push
```

Wait 1-2 minutes for GitHub Pages to rebuild. Then refresh the site.

## File Structure

```
andygawt-website/
├── index.html           # Homepage (hardcoded feeds)
├── media.html           # Media page (loads from media.json via JS)
├── books.html           # Books page
├── scholarship.html     # Academic publications
├── contact.html         # Contact info
├── data/
│   └── media.json      # Media items database
├── css/
│   └── style.css       # Styles
└── js/
    └── media.js        # JavaScript for media.html filtering
```

## Common Tasks

### Update Bio
Edit the `<div class="bio-section">` in `index.html`

### Add Scholarship
Edit `scholarship.html` directly

### Add Book
Edit `books.html` directly

### Update Contact Info
Edit `contact.html` directly

## Troubleshooting

**Q: I updated media.json but don't see changes on the homepage**
A: You must also update `index.html`. The homepage doesn't load from JSON.

**Q: Changes aren't showing on the live site**
A: Did you commit and push? Check `git status` to see if changes are staged.

**Q: How do I test locally?**
A: Open `index.html` directly in a browser, or run:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Quick Reference

Current working directory: `/Users/andygawthorpe/andygawt-website`

This is a git repository. Always:
1. Make your edits
2. `git add [files]`
3. `git commit -m "message"`
4. `git push`
5. Wait ~2 minutes for GitHub Pages to deploy
