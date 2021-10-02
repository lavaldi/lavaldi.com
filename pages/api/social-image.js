const fs = require('fs');
const path = require('path');

const pwd = process.cwd();

const isValidPostSlug = (slug) => {
  return fs.existsSync(path.join(pwd, 'data', 'blog', `${slug}.mdx`));
};


module.exports = (req, res) => {
  const { slug } = req.query;
  const isValid = isValidPostSlug(slug);
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    isValid
  });
};
