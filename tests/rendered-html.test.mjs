import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

/**
 * All four routes prerender to static HTML, so the tests read the build output
 * directly rather than booting a server.
 */
const page = (name) =>
  readFile(new URL(`../.next/server/app/${name}.html`, import.meta.url), "utf8");

/**
 * The RSC flight payload repeats every string inside <script> tags, so anything
 * counting visible copy has to drop the scripts first.
 */
const visibleText = (html) =>
  html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ");

async function stylesheets() {
  const dir = new URL("../.next/static/chunks/", import.meta.url);
  const files = (await readdir(dir)).filter((f) => f.endsWith(".css"));
  const contents = await Promise.all(files.map((f) => readFile(new URL(f, dir), "utf8")));
  return contents.join("\n");
}

test("renders the custom Villa map", async () => {
  const html = await page("index");

  assert.match(html, /map-panel/);
  assert.match(html, /map-logo-badge/);
  assert.match(html, /\/brand\/villa-logo-trimmed\.png/);
  assert.match(html, /\/location\/villa-map\.png/);
  assert.doesNotMatch(html, /map-villa-marker/);
});

test("renders both languages with the right title and lang", async () => {
  const [el, en] = await Promise.all([page("index"), page("en")]);

  assert.match(el, /<title>Villa Τυμπάκι \| Bar, Sushi, Grill &amp; Cocktails<\/title>/);
  assert.match(en, /<title>Villa Tympaki \| Bar, Sushi, Grill &amp; Cocktails<\/title>/);
  assert.match(el, /<main lang="el"/);
  assert.match(en, /<main lang="en"/);
});

test("keeps contact details to two appearances per page", async () => {
  const text = visibleText(await page("index"));
  const count = (needle) => text.split(needle).length - 1;

  assert.equal(count("694 2494413"), 2, "primary phone should appear twice");
  assert.equal(count("Κόκκινου Πύργου 156"), 2, "address should appear twice");
});

test("ships the four stone textures the sections are built on", async () => {
  const css = await stylesheets();

  for (const stone of ["chalk", "sand", "clay", "night"]) {
    assert.match(css, new RegExp(`stone-${stone}\\.jpg`), `stone-${stone} should be referenced`);
  }
});
