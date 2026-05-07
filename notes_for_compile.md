i have a bunch of md files in a single directory that are linked to each other. how can i start to write a program that would compile them all into a browser app? maybe in local host, maybe something with svelte. what tech stack would you recommend, ans where should i start?12:02 AMClaude responded: 

For a linked Markdown → browser app, here's the stack I'd recommend and why:For a linked Markdown → browser app, here's the stack I'd recommend and why:
Recommended Stack: SvelteKit + mdsvex
SvelteKit is purpose-built for this use case. Combined with mdsvex (Markdown preprocessor for Svelte), you get:

Markdown files treated as first-class routes/components
Inter-file links work naturally via SvelteKit's file-based routing
Fast dev server with hot reload on localhost
Can compile to a static site or SSR app

Why not alternatives?

Astro — also excellent for MD-heavy sites, slightly more complex config
Next.js — heavier, React-focused, more setup for pure MD sites
Vite + marked/remark — more DIY, no routing built in
Obsidian Publish / mdBook — simpler but locked in, less flexible


Where to Start
1. Scaffold the project
bashnpm create svelte@latest my-md-app
cd my-md-app
npm install
npm install -D mdsvex
2. Configure mdsvex in svelte.config.js:
jsimport { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex({ extensions: ['.md'] })]
};
3. Drop your MD files into src/routes/
Each .md file becomes a route automatically. A file at src/routes/my-note.md becomes /my-note.
4. Handle cross-links
If your MD files use [link text](other-file.md) style links, you'll want a small remark plugin to strip the .md extension so SvelteKit's router handles them:
bashnpm install -D remark-mdsvex-relative-images
# or write a small custom remark plugin
5. Add a layout (src/routes/+layout.svelte) for nav, sidebar, or a file tree.

Key Questions That Shape the Architecture
Before going further, a couple of things worth thinking through:

How are the files linked? [text](file.md) relative links, or wiki-style [[filename]] links (like Obsidian)?
Do you need a sidebar/graph view, or just navigable pages?

If you're using [[wiki links]], you'll need a custom remark plugin to transform them — happy to write that for you once you know your link format.