# Andrew Gawthorpe Website

Professional academic website built with static HTML/CSS/JavaScript.

## Directory Structure

```
andygawt-website/
├── index.html          # Homepage with bio and three feeds
├── books.html          # Books page
├── scholarship.html    # Academic publications
├── media.html          # Media appearances and commentary
├── contact.html        # Contact information
├── css/
│   └── style.css       # Professional think-tank styling
├── js/
│   └── media.js        # Media feed filtering
├── data/
│   └── media.json      # Media entries data
└── images/             # Future images/assets
```

## Preview Locally

To preview the site on your computer:

```bash
cd /Users/andygawthorpe/andygawt-website
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

Press `Ctrl+C` to stop the server.

## How Updates Work

### Adding Media Appearances

To add a new media appearance, quote, interview, etc., just send me:
- URL
- Brief description (e.g., "Quoted in NYT on Iran policy")

I'll update `data/media.json` with the new entry in this format:

```json
{
  "date": "2026-03-07",
  "type": "quote",          // article, quote, interview, podcast, tv
  "outlet": "New York Times",
  "title": "Trump's Iran Strategy Shows Cracks",
  "url": "https://...",
  "description": "Quoted on congressional oversight"
}
```

### Updating Homepage Feeds

The three homepage feeds ("Recent Media", "Recent Commentary", "Recent Academic Publications") are currently placeholders. When you're ready to populate them, I'll:

1. Create JSON data files for each feed
2. Add JavaScript to load them dynamically
3. Show the 5 most recent items in each column

### Other Updates

For any other changes (bio updates, new books, publications, etc.), just let me know and I'll update the relevant HTML files.

## Deployment (When Ready)

When you're ready to go live:

1. Create a GitHub account (takes 2 minutes)
2. I'll push this site to a GitHub repository
3. Set up Netlify (free) to auto-deploy from GitHub
4. Point andygawt.com DNS to Netlify
5. Every time I update the site, it auto-deploys in ~30 seconds

**Cost: $0** (GitHub and Netlify are free for this use case)

## Design Notes

- **Professional think-tank aesthetic**: Clean, readable, authoritative
- **Full-width layout**: No sidebar, uses full screen
- **Typography**: Georgia serif for body text, Helvetica for headings
- **Colors**: Navy blue primary, sky blue accents
- **Mobile-responsive**: Works on all devices
- **Fast**: Static HTML loads instantly

## File Editing

To make simple text changes yourself:
- Bio/content: Edit the `.html` files in a text editor
- Styling: Edit `css/style.css`
- Media data: Edit `data/media.json`

But easiest is just to tell me what needs changing!
