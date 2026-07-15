import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// site/base updated once the domain (emproducoes.com.br vs emmusicproducoes.com.br) is confirmed
export default defineConfig({
  integrations: [tailwind()],
});
