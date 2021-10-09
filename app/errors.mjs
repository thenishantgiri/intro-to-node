import { readFile } from "fs/promises";
try {
  const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
} catch (err) {
  console.error(err);
  console.log("yay! our code didn't break");
}
