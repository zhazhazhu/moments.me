import { defineConfig } from "vitepress";

const nav = [
  { text: "HOME", link: "/" },
  { text: "PROJECT", link: "/project/" },
  { text: "ABOUT", link: "/about/" },
];

export default defineConfig({
  lang: "en-US",
  title: "Zhazhazhu",
  srcDir: "moments",
  themeConfig: {
    nav,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});
