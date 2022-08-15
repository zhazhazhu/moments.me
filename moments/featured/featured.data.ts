import path from "path";
import { createMarkdownRenderer } from "vitepress";
import { readFiles } from "../utils";

export declare const data: Record<string, any>;

export default {
  watch: "./*.md",
  async load() {
    const md = await createMarkdownRenderer(process.cwd(), {}, "/");
    const files = readFiles(path.resolve(__dirname));
    return [md.render(files[1])];
  },
};
