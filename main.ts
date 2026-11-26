import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const joke = "My cat filed a product recall on me: 'Human fails to open cans at " + "5 a.m.; recommend replacement.'";

writeFileSync("/output/entry.txt", joke, "utf8");
