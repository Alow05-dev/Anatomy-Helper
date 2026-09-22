# ANATOMY X — One-file GitHub Pages build

This build intentionally puts the entire app in `index.html`. No CSS folder, JS folder, package manager, framework, import, API, or external asset is required.

## Deploy
1. Put `index.html` in the root of your GitHub repository.
2. GitHub → Settings → Pages.
3. Deploy from branch → `main` → `/ (root)`.
4. Save.

If an earlier version showed the browser's default serif font and an empty model, that indicated the CSS/JavaScript assets were not loading. This one-file build eliminates that failure mode.
