# TMAS Academy

**Free STEM Education for Everyone**

TMAS Academy is a student-led nonprofit organization dedicated to making high-quality STEM education freely accessible to everyone.

This repository contains the source code for the TMAS Academy website, which serves as the public-facing home for our educational resources, books, community, and organization.

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # typecheck and build to dist/
npm run preview    # preview the production build
```

## Website

The website provides:

- Information about TMAS Academy and its mission
- Free STEM books and study guides
- Resources organized by subject and academic level
- Information about the TMAS Academy community
- Ways to get involved with TMAS Academy
- Contact and organization information

Pages: **Home** (`/`), **Books** (`/books`), **Book detail** (`/books/:bookId`), **About** (`/about`), **Community** (`/community`), **Contact** (`/contact`).

## Updating content

- **Books:** edit `src/data/books.ts`. To publish a book, add a `downloadUrl` to it. Books without one show as "Coming soon".
- **Organization details:** edit `src/data/site.ts` (contact email, community link, social links).
- **Colors and type:** design tokens are at the top of `src/index.css`.

## Technology

- React 18
- TypeScript
- Vite
- CSS (no framework)
- React Router 6

## Project structure

```text
src/
├── components/   Navbar, Footer, Layout, BookCard, CurveLab, ...
├── pages/        Home, Books, BookDetail, About, Community, Contact, NotFound
├── sections/     Homepage sections (Hero, Mission, Collections, ...)
├── data/         books.ts, site.ts
├── hooks/        usePageTitle.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deploying

The site uses client-side routing (`BrowserRouter`), so your host must serve `index.html` for all routes.
On Netlify add a `public/_redirects` file containing `/* /index.html 200`; on Vercel add a rewrite to `/index.html`.
