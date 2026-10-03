import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const apps = JSON.parse(readFileSync('data/apps.json','utf8'));
const names = new Set();
const urls = new Set();
const closedCategories = new Set();
let category, previousName;
for (const app of apps) {
 for (const field of ['name','url','description','category','platforms','verified','source','evidence']) {
  assert.equal(typeof app[field], 'string', `${app.name}: missing ${field}`);
  assert(app[field].trim(), `${app.name}: empty ${field}`);
  assert(!/[\n\r|]/u.test(app[field]), `${app.name}: invalid markup in ${field}`);
 }
 assert(!/[\[\]<>]/u.test(app.name + app.description), `${app.name}: use plain text`);
 const key = app.name.toLowerCase();
 assert(!names.has(key), `Duplicate name: ${app.name}`);
 names.add(key);
 assert(!urls.has(app.url), `Duplicate URL: ${app.url}`);
 urls.add(app.url);
 for (const field of ['url','source']) {
  const url = new URL(app[field]);
  assert.equal(url.protocol, 'https:', `${app.name}: HTTPS required`);
  assert(!url.username && !url.password && !url.search, `${app.name}: no credentials or tracking queries`);
 }
 assert(/^\d{4}-\d{2}-\d{2}$/.test(app.verified), `${app.name}: invalid review date`);
 const date = new Date(app.verified);
 assert(!Number.isNaN(+date) && date.toISOString().slice(0,10) === app.verified, `${app.name}: invalid date`);
 assert(date <= new Date(), `${app.name}: future review date`);
 assert(/[🍎🪟🐧🌐📱⌨🧩🏠]/u.test(app.platforms), `${app.name}: platform tag missing`);
 assert(app.description.length <= 180, `${app.name}: shorten description`);
 if (app.category !== category) {
  if (category) closedCategories.add(category);
  assert(!closedCategories.has(app.category), `Split category: ${app.category}`);
  category = app.category;
  previousName = undefined;
 }
 if (previousName) assert(previousName.localeCompare(key, 'en') < 0, `${category}: ${app.name} is out of order`);
 previousName = key;
}
assert(apps.length > 0, 'List must not be empty');
console.log(`Validated ${apps.length} unique entries, category ordering, sources, dates, and platforms.`);
