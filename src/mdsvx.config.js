import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],
  
  // Set the default layout for all .svx and .md files
  layout: {
    _: "./lib/text/doc_layout.svelte"
  }
});

export default config;