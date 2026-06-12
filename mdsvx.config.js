import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  // Set the default layout for all .svx and .md files
  layout: {
    reference: path.resolve(__dirname, './src/lib/text/ref_layout.svelte'),
    default: path.resolve(__dirname, './src/lib/text/doc_layout.svelte'),
    _: path.resolve(__dirname, './src/lib/text/doc_layout.svelte'),
  }
});

export default config;