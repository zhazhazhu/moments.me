import Theme from "vitepress/theme";
import { h } from "vue";

export default {
  ...Theme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: h(Theme.Layout, null, {
    "home-features-before": () => h("div", "Hello World"),
  }),
};
