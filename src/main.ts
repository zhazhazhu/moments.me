import "@unocss/reset/tailwind.css";
import "github-markdown-css/github-markdown.css";
import "uno.css";
import "./styles/main.css";
import "./styles/markdown.css";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import NProgress from "nprogress";
import autoRoutes from "pages-generated";
import { ViteSSG } from "vite-ssg";
import TouchEvents from "vue3-touch-events";
import App from "./App.vue";

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`,
  };
});

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    app.use(TouchEvents);

    dayjs.extend(LocalizedFormat);

    if (isClient) {
      router.beforeEach(() => {
        NProgress.start();
      });
      router.afterEach(() => {
        NProgress.done();
      });
    }
  }
);
