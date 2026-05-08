import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Users/pedro/.website-tools/node_modules/puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ROOT = fileURLToPath(new URL('.', import.meta.url));
const SCREENSHOTS_DIR = join(ROOT, 'temporary screenshots');

if (!existsSync(SCREENSHOTS_DIR)) mkdirSync(SCREENSHOTS_DIR);

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

let n = 1;
while (existsSync(join(SCREENSHOTS_DIR, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++;

const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;
const filepath = join(SCREENSHOTS_DIR, filename);

const browser = await puppeteer.launch({ executablePath: CHROME });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
// Force all reveal elements visible for screenshot
await page.addStyleTag({ content: '.reveal { opacity: 1 !important; transform: none !important; }' });
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved to: temporary screenshots/${filename}`);
