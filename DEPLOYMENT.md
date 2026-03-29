# Deployment Guide - Raghav's Portfolio

This guide provides step-by-step instructions to deploy your portfolio on GitHub Pages and make it live on the internet.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Deploy via GitHub Pages (Free & Easy)](#deploy-via-github-pages)
3. [Deploy via Netlify (Alternative)](#deploy-via-netlify)
4. [Deploy via Vercel (Alternative)](#deploy-via-vercel)
5. [Post-Deployment Steps](#post-deployment-steps)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account (Create one at github.com if you don't have)
- ✅ Git installed on your computer
- ✅ Your portfolio files ready (you have them!)
- ✅ Push access to your repository

### Check if Git is Installed

Run in your terminal:
```bash
git --version
```

If installed, you'll see something like: `git version 2.xx.x`

### Install Git (if not installed)

**Windows**: Download from https://git-scm.com/download/win  
**Mac**: `brew install git`  
**Linux**: `sudo apt install git`

---

## Deploy via GitHub Pages (RECOMMENDED)

GitHub Pages is **FREE** and perfect for portfolios. Your site will be available at: `https://yourusername.github.io/Portfolio`

### Step 1: Verify You're in the Right Directory

```bash
cd C:\Users\KIIT\OneDrive\Documents\GitHub\Portfolio
```

### Step 2: Check Git Status

```bash
git status
```

You should see untracked files (your portfolio files).

### Step 3: Configure Git (First Time Only)

Set your Git identity if you haven't already:

```bash
git config --global user.name "Raghav"
git config --global user.email "your.email@example.com"
```

Replace `your.email@example.com` with your actual GitHub email.

### Step 4: Add All Files to Git

```bash
git add .
```

This stages all your portfolio files for commit.

### Step 5: Commit Your Changes

```bash
git commit -m "Initial commit: Complete portfolio website"
```

### Step 6: Verify Your Remote Repository

Check if the remote is already configured:

```bash
git remote -v
```

If configured, you'll see output like:
```
origin  https://github.com/yourusername/Portfolio.git (fetch)
origin  https://github.com/yourusername/Portfolio.git (push)
```

If NOT configured (no output), add it:

```bash
git remote add origin https://github.com/yourusername/Portfolio.git
```

**Replace `yourusername` with your actual GitHub username**

### Step 7: Push to GitHub

For the main branch:

```bash
git branch -M main
git push -u origin main
```

This pushes your portfolio to GitHub.

### Step 8: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/yourusername/Portfolio`
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

**Wait 1-2 minutes** for GitHub to build your site.

### Step 9: Access Your Live Portfolio

Your portfolio will be available at:

```
https://yourusername.github.io/Portfolio
```

Replace `yourusername` with your GitHub username.

---

## Custom Domain (Optional)

If you own a custom domain (e.g., raghavportfolio.com):

1. In GitHub Pages settings, add your domain in the "Custom domain" field
2. Configure DNS records with your domain registrar
3. Follow GitHub's instructions for DNS setup

---

## Deploy via Netlify (ALTERNATIVE)

**Pros**: 
- Easy deployment from GitHub
- Free HTTPS
- Custom domain support
- Automatic deployments on push

### Step 1: Sign Up on Netlify

Visit https://app.netlify.com and sign up with your GitHub account.

### Step 2: Connect Your Repository

1. Click "New site from Git"
2. Select GitHub and authorize Netlify
3. Choose your "Portfolio" repository
4. Click "Deploy site"

**Your site will be live at** a Netlify-provided URL (you can customize it).

### Step 3: Configure Custom Domain (Optional)

In Netlify settings, add your custom domain and configure DNS.

---

## Deploy via Vercel (ALTERNATIVE)

**Pros**: 
- Super fast deployments
- Free hosting
- Great for modern web projects
- Edge functions support

### Step 1: Sign Up on Vercel

Visit https://vercel.com and sign up with your GitHub account.

### Step 2: Import Project

1. Click "Import Project"
2. Select "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"

**Your site will be live** immediately.

### Step 3: Add Custom Domain (Optional)

In Vercel project settings, add your custom domain.

---

## Post-Deployment Steps

After successful deployment, do the following:

### 1. Test Your Live Site

- [ ] Open your portfolio URL in a browser
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Test dark mode toggle
- [ ] Check contact form
- [ ] Verify all images load correctly

### 2. Update Contact Information

In your live portfolio, update:
- [ ] Email address (in contact section)
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Phone number (if desired)

**To update**: Edit `index.html`, commit, and push:
```bash
git add index.html
git commit -m "Update contact information"
git push origin main
```

### 3. Add Real Project Images

- [ ] Take screenshots of your projects
- [ ] Place them in the `images/` folder
- [ ] Reference them in `index.html`
- [ ] Commit and push

### 4. Update Project Details

- [ ] Add real project links
- [ ] Update project descriptions
- [ ] Link to actual GitHub repositories
- [ ] Commit and push

### 5. Create a .gitignore File (Optional)

Create `.gitignore` to exclude unnecessary files:

```
# Optional: files to ignore
node_modules/
.env
.DS_Store
*.log
```

### 6. Set Up Automatic Deployments

**GitHub Pages** deploys automatically whenever you push to the main branch.

**Netlify/Vercel** also automatically deploy on push.

---

## Making Updates to Your Portfolio

After deployment, to update your portfolio:

```bash
# 1. Make changes to your files (HTML, CSS, JavaScript)

# 2. Check what changed
git status

# 3. Stage changes
git add .

# 4. Commit with a message
git commit -m "Describe your changes here"

# 5. Push to GitHub
git push origin main
```

The changes will automatically deploy!

---

## Performance Optimization (Before Deployment)

### Optimize Images

- Use tools like TinyPNG or ImageOptim to compress images
- Use WebP format for better compression
- Resize images to appropriate dimensions

### Minify Code (Optional)

- Minify CSS and JavaScript for production
- Use tools like UglifyJS or Terser

### Test Performance

Use Google PageSpeed Insights: https://pagespeed.web.dev/

---

## Troubleshooting

### Issue 1: "fatal: destination path 'Portfolio' already exists and is not an empty directory"

**Solution**: You're already in the Portfolio directory. Just run:
```bash
git status
```

If not initialized, run:
```bash
git init
```

### Issue 2: "fatal: 'origin' does not appear to be a 'git' repository"

**Solution**: Add the remote:
```bash
git remote add origin https://github.com/yourusername/Portfolio.git
git push -u origin main
```

### Issue 3: GitHub Pages Shows "There is no content yet"

**Solution**:
1. Wait 1-2 minutes for GitHub to process
2. Verify the repository is public (not private)
3. Check that `index.html` is in the root folder
4. Refresh the GitHub Pages settings page

### Issue 4: "fatal: Authentication failed"

**Solution**: 
- Use a Personal Access Token instead of password
- Or set up SSH keys with GitHub
- Or use GitHub CLI: `gh auth login`

### Issue 5: My Changes Aren't Showing Live

**Solution**:
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Hard refresh your browser (Ctrl+F5)
3. Wait 2-3 minutes for deployment to complete
4. Check the "Deployments" tab on GitHub

### Issue 6: 404 Error on GitHub Pages

**Solution**:
- Ensure your URL is correct (case-sensitive on Linux servers)
- Check that `index.html` exists in root
- Verify GitHub Pages is enabled in settings
- Check repository visibility (must be public)

---

## Verify Deployment Success

Your portfolio is successfully deployed when:

- ✅ You can access it via the live URL
- ✅ All pages load without errors
- ✅ Navigation works correctly
- ✅ Images display properly
- ✅ Forms are functional
- ✅ Dark mode toggles work
- ✅ Mobile responsiveness works
- ✅ No console errors (F12 DevTools)

---

## Share Your Portfolio

Once live, share your portfolio with:

- 📧 Email to recruiters and companies
- 💼 LinkedIn profile (add URL to portfolio)
- 📌 GitHub profile (link to your portfolio repo)
- 🐦 Twitter/Social Media
- 💬 Professional networks and communities

---

## Next Steps After Deployment

1. **Add Projects**: Update with real projects and screenshots
2. **Blog Section** (Optional): Add a blog for sharing insights
3. **SEO Optimization**: Add meta tags for search engine visibility
4. **Analytics**: Add Google Analytics to track visitors
5. **Continuous Updates**: Keep your portfolio fresh with new projects

---

## Useful Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Google Analytics Setup](https://support.google.com/analytics/answer/9304153)

---

## Commands Cheat Sheet

```bash
# Git Configuration
git config --global user.name "Your Name"
git config --global user.email "email@example.com"

# Initialize & Commit
git init
git add .
git commit -m "Message"

# Remote Management
git remote add origin <URL>
git remote -v
git branch -M main

# Push & Pull
git push -u origin main
git push origin main
git pull origin main

# Check Status
git status
git log

# Undo Changes
git reset <file>
git checkout -- <file>
```

---

## Support

If you face any deployment issues:

1. Check GitHub Pages documentation
2. Review error messages carefully
3. Search Stack Overflow for solutions
4. Ask in GitHub Discussions or Issues
5. Contact platform support (Netlify, Vercel, etc.)

---

**Happy Deploying! 🚀**

Your portfolio will be live and visible to the world. Keep building amazing projects and updating your portfolio regularly!
