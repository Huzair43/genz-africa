import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://genz-africa.github.io",
  base: "/genz-africa/",
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
