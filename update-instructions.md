# How to Update Your Website

## Quick Update Workflow

Whenever you have a new media appearance, article, or quote, just send me a message like:

**"Add to media: Quoted in BBC News on Iran strikes - [URL]"**

or

**"Add to media: Op-ed in The Guardian about Trump's foreign policy - [URL]"**

I'll add it to the site and it will be live within 30 seconds (once deployed to Netlify).

## What I Need

For each media item, tell me:
1. **URL** (required)
2. **Brief description** - I'll infer the outlet and title from the URL, but you can specify if needed
3. **Type** (optional) - If not specified, I'll guess based on description:
   - `article` - Op-eds and articles you wrote
   - `quote` - Articles where you're quoted
   - `interview` - Print/online interviews
   - `podcast` - Podcast appearances
   - `tv` - Television appearances

## Examples

✅ **Good examples:**
- "Quoted in NYT on Iran policy - https://nytimes.com/..."
- "Op-ed in WaPo about democratic backsliding - https://washingtonpost.com/..."
- "BBC News interview on Trump admin - https://bbc.com/..."
- "Guardian article: https://theguardian.com/... "

✅ **Minimal is fine:**
- Just the URL works! I can fill in the rest

## Other Updates

**Bio changes:** "Update bio: I'm now also [...]"

**New publication:** "Add to scholarship: Article title, Journal Name, etc."

**New book:** "Add to books page: [details]"

**Homepage feeds:** When ready to populate the three homepage feeds, let me know which recent items should appear in each

## Current Status

🟢 **Website built** - Ready to preview
⚪ **GitHub setup** - Waiting for you to create account
⚪ **Deployment** - Will set up after GitHub account created
⚪ **Domain transfer** - Will configure after deployment setup

## Preview the Site Now

To see your new site:

```bash
cd /Users/andygawthorpe/andygawt-website
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

Look around, let me know what you think, and tell me any changes you want!
