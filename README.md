# 9wolf.github.io

Personal portfolio built with **Astro**, **Tailwind CSS v4**, and **TypeScript**, featuring flicker-free dark/light mode and automated deployment to GitHub Pages.

## Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with class-based dark mode
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Deployment:** GitHub Actions → GitHub Pages

## Development

```bash
# Install dependencies
pnpm install

# Start local dev server (http://localhost:4321)
pnpm dev

# Run TypeScript & Astro diagnostics
pnpm check

# Build production static site into ./dist
pnpm build

# Preview production build locally
pnpm preview
```

## Customizing Content

Update your name, bio, links, skills, and featured projects in `src/data/portfolio.ts`.

## Deploying to GitHub Pages

1. Push your changes to the `main` branch.
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your site to `https://9wolf.github.io`.
