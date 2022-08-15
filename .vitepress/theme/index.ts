import Theme from "vitepress/theme";
import { h } from "vue";
import "../style/index.less";

export default {
  ...Theme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout() {
    return h(Theme.Layout, null, {});
  },
};
