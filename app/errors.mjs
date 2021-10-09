import { readFile } from "fs/promises";
try {
  const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
} catch (err) {
  throw err;
  console.log("oops! our app crashed!");
}
