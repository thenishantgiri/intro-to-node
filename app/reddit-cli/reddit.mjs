#! /usr/bin/env node
// use "npm install -g" to install the cli in our /usr/bin/

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

const { argv } = yargs(process.argv);

const res = await fetch("https://reddit.com/.json");
const data = await res.json();

const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];

const link = `https://reddit.com${randomPost.data.permalink}`;

if (argv.print || argv.p) {
  console.log(`
    title: ${randomPost.data.title}
    link: ${link}
    `);
} else {
  open(link);
}
