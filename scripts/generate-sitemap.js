const fs = require('fs');

// TODO: Check this https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3760583
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    '!pages/_*.js',
    '!pages/api'
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('data', '')
          .replace('.js', '')
          .replace('.mdx', '');
        const route = path === '/index' ? '' : path;

        return `
                        <url>
                            <loc>${`https://leerob.io${route}`}</loc>
                        </url>
                    `;
      })
      .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();