const slugify = require('@sindresorhus/slugify');

const date = [
  new Date().getFullYear(),
  ('0' + (new Date().getMonth() + 1)).slice(-2),
  ('0' + new Date().getDate()).slice(-2)
].join('-');

module.exports = {
  helpers: {
    date: s => date,
    slugify: s => slugify(s)
  }
};