import { readFile } from "fs";

readFile(new URL("app.mjs", import.meta.url), "utf-8", (err, data) => {
    if (err) {
        //handle the error
        console.error(err);
    } else {
        //do the task
    }
 });
