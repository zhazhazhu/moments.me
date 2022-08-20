import Vue from "@vitejs/plugin-vue";
import fs from "fs-extra";
import matter from "gray-matter";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import Pages from "vite-plugin-pages";
import Markdown from "vite-plugin-vue-markdown";
import SVG from "vite-svg-loader";

export default defineConfig({
  base: "https://cdn.jsdelivr.net/gh/zhazhazhu/moments.me@1.0",
  // base:"https://zhazhazhu.github.io/moments.me",

  resolve: {
    alias: [{ find: "~/", replacement: `${resolve(__dirname, "src")}/` }],
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@vueuse/core",
      "dayjs",
      "dayjs/plugin/localizedFormat",
    ],
  },
  plugins: [
    UnoCSS(),

    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    Pages({
      extensions: ["vue", "md"],
      pagesDir: "pages",
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),

    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),

    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
      dts: "./types/auto-imports.d.ts",
    }),

    Components({
      extensions: ["vue", "md"],
      dts: "./types/components.d.ts",
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),

    Inspect(),

    Icons({
      defaultClass: "inline",
      defaultStyle: "vertical-align: sub;",
    }),

    SVG({
      svgo: false,
    }),
  ],
  server: {
    host: true,
  },
  build: {},
  ssgOptions: {
    formatting: "minify",
    format: "cjs",
  },
});
