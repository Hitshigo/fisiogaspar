import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/pedro/.website-tools/node_modules/puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js');

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const DIR = join(ROOT, 'temporary screenshots');
if (!existsSync(DIR)) mkdirSync(DIR);

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

let n = 1;
while (existsSync(join(DIR, `mobile-${n}${label ? '-' + label : ''}.png`))) n++;
const filename = `mobile-${n}${label ? '-' + label : ''}.png`;

const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.addStyleTag({ content: '.reveal { opacity: 1 !important; transform: none !important; }' });
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: join(DIR, filename), fullPage: true });
await browser.close();

console.log(`Mobile screenshot saved to: temporary screenshots/${filename}`);
