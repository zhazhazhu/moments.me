import "@unocss/reset/tailwind.css";
import "uno.css";
import "./styles/main.css";
import "./styles/markdown.css";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import NProgress from "nprogress";
import autoRoutes from "pages-generated";
import { ViteSSG } from "vite-ssg";
// import VueGridLayout from "vue3-grid-layout";
import App from "./App.vue";

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`,
  };
});

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) return savedPosition;
  else return { top: 0 };
};

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient }) => {
    // app.use(VueGridLayout);
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
