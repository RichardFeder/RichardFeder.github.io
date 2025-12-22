# Local Development Setup

Your website is now set up for local development in VS Code!

## What You Have

- **Location:** `~/Projects/RichardFeder.github.io`
- **Git Repository:** Connected to https://github.com/RichardFeder/RichardFeder.github.io
- **Ruby Version Manager:** rbenv installed with Ruby 3.1.4

## Working with Your Site

### Opening in VS Code

```bash
code ~/Projects/RichardFeder.github.io
```

### Editing Files

Your main content files are:
- `index.html` - Homepage
- `aboutme.md` - About page
- `research.md` / `research_new.md` - Research pages
- `_config.yml` - Site configuration

### Viewing Changes Locally

Due to gem compatibility issues with the old GitHub Pages version, we recommend editing files and pushing to GitHub to see changes. Alternatively, you can view the raw HTML:

```bash
./serve.sh
```

Then open http://localhost:8000 in your browser.

### Making Changes

1. Edit files in VS Code
2. Save your changes
3. Commit and push to GitHub:

```bash
git add .
git commit -m "Your commit message"
git push
```

4. Your changes will appear at https://richardfeder.github.io in a few minutes

## Git Commands

### Check status
```bash
git status
```

### See what changed
```bash
git diff
```

### Undo uncommitted changes
```bash
git checkout -- filename.html
```

### Pull latest from GitHub
```bash
git pull
```

## Notes

- The site uses Jekyll (a static site generator)
- GitHub Pages automatically builds and deploys your site when you push changes
- You have Ruby and rbenv set up, but the older gem versions have compatibility issues
- For complex preview needs, consider updating to a newer GitHub Pages gem version

## Need Help?

- GitHub Pages docs: https://docs.github.com/en/pages
- Jekyll docs: https://jekyllrb.com/docs/
