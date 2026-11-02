# Fundacja Kraina Nestora

Responsive React site for the Fundacja Kraina Nestora and its Centrum Aktywności Seniora.

## Local development

```sh
npm ci
npm run dev
```

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`.

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to `main` or run the workflow manually from the **Actions** tab.

Vite detects the repository name in GitHub Actions and configures the correct asset path for project Pages sites. Repositories named `<owner>.github.io` are built for the root URL.

## Build and lint

```sh
npm run build
npm run lint
```
