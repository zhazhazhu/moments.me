import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
  rules: [],
  shortcuts: {
    "flex-center": "flex items-center justify-center",
  },
});
