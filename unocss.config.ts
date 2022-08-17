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
    "bottom-line": "b-b-2px m-auto border-color-#b9b9b9",
  },
});
