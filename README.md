# TMAS Academy

**Free STEM Education for Everyone**

TMAS Academy is a student-led nonprofit organization dedicated to making high-quality STEM education freely accessible to everyone.

This repository contains the source code for the TMAS Academy website, which serves as the public-facing home for our educational resources, books, community, and organization.

## Website

The website will provide:

- Information about TMAS Academy and its mission
- Free STEM books and study guides
- Resources organized by subject and academic level
- Information about the TMAS Academy community
- Ways to get involved with TMAS Academy
- Contact and organization information

## Books

The primary educational resources on the website will be TMAS Academy's collection of free STEM books and study guides.

The collection will include:

### AP STEM

Study guides covering AP-level STEM subjects, including:

- AP Chemistry
- AP Biology
- AP Physics
- Additional AP STEM subjects

### Competitive Mathematics

Books designed for students interested in mathematics beyond the standard classroom curriculum, including competitive mathematics and problem solving.

### College-Level STEM

More advanced books covering subjects such as:

- Multivariable Calculus
- Differential Equations and Linear Algebra
- Other advanced STEM topics

The website will provide a centralized way to browse these books, view information about each book, and access the associated educational materials.

## Website Structure

The website will include the following primary sections:

### Home

The homepage will introduce TMAS Academy and provide an overview of its mission, educational offerings, books, and community.

### Books

The Books section will contain the complete TMAS Academy book collection.

Books will be organized by category and subject so that students can easily find relevant material.

### About

The About section will explain TMAS Academy's mission, background, and purpose as a student-led nonprofit organization.

### Community

The Community section will introduce the TMAS Academy student community and provide information about joining and participating in the community.

### Contact

The Contact section will provide ways to contact TMAS Academy and information about getting involved.

## Design

The website will be designed to be:

- Modern and responsive
- Accessible across desktop and mobile devices
- Easy to navigate
- Focused on educational content
- Fast and lightweight
- Consistent across all pages

The design will use a dark, modern visual style while prioritizing readability and usability.

## Technology

The website will be built using:

- React
- TypeScript
- Vite
- CSS
- React Router

Additional libraries may be introduced as the website develops.

## Project Structure

The application will be organized around reusable React components, page-level sections, and centralized educational data.

The general structure will follow:

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/
│   ├── Home.tsx
│   ├── Books.tsx
│   ├── About.tsx
│   ├── Community.tsx
│   └── Contact.tsx
├── sections/
│   └── ...
├── data/
│   └── books.ts
├── App.tsx
├── main.tsx
└── index.css