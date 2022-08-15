import fs from "fs";

export function readFiles(srcDir: string) {
  const examples = fs.readdirSync(srcDir);
  return examples;
}
