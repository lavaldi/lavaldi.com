const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

import { getFileBySlug } from '@/lib/mdx';

const pwd = process.cwd();

const isValidPostSlug = (slug) => {
  return fs.existsSync(path.join(pwd, 'data', 'blog', `${slug}.mdx`));
};

const getBanner = async (title) => {
  const html = `<html>
    <head>
      <style>
        :root {
          --bg: #a599e9;
          --text-bg: #fad000;
          --text-color: #1e1e3f;
          }
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 2rem;
            background-color: var(--bg);
          }
          .banner {
              position: relative;
              text-align: center;
              color: var(--text-color);
              width: 100%;
              height: 100vh;
          }
          .banner__content {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 80%;
          }
          .banner__title {
              margin: 0;
              font-size: 7.5vw;
              color: var(--text-color);
          }
          .banner__title span {
            -webkit-box-decoration-break: clone;
            box-decoration-break: clone;
              background-color: var(--text-bg);
          }
          .banner__url {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 5vw;
              color: var(--text-color);
              font-weight: bold;
          }
      </style>
    </head>
    <body>
      <div class="banner">
          <div class="banner__content">
              <h1 class="banner__title"><span>${title}</span></h1>
              <p class="banner__url">
                  <img src="https://lavaldi.com/static/favicons/favicon-32x32.png" alt="Avatar"/>
                  lavaldi.com
              </p>
          </div>
      </div>
    </body>
  </html>`;

  const browser = await puppeteer.launch({
    args: ['--hide-scrollbars', '--disable-web-security']
  });

  const page = await browser.newPage();

  page.setViewport({ width: 1366, height: 768 }); // 16:9 Aspect Ratio

  await page.setContent(html);

  const screenShotBuffer = await page.screenshot();

  await browser.close();

  return screenShotBuffer;
};

module.exports = async (req, res) => {
  const { slug } = req.query;
  debugger
  const isValid = isValidPostSlug(slug);

  if (!isValid) {
    res.status(404).send('Not found');
    return;
  }

  const post = await getFileBySlug('blog', slug);

  const { title, banner } = post.frontMatter;

  let image = banner;

  if (!image) {
    image = await getBanner(title);
  } else {
    const response = await fetch(image);
    image = await response.buffer();
  }

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': Buffer.byteLength(image)
  });

  res.end(image);
};
