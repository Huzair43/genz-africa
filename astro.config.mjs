import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://genz-africa.com",
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
