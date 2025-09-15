import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const [targetUrl, outputPath] = process.argv.slice(2);

(async () => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: true });
  await browser.close();

  fs.writeFileSync(outputPath, pdf);

  console.log(`PDF generated and saved to ${outputPath}`);
})();