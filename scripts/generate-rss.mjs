import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '.contentlayer/data';

async function generate() {
  const feed = new RSS({
    title: 'Claudia Valdivieso',
    site_url: 'https://lavaldi.com',
    feed_url: 'https://lavaldi.com/feed.xml'
  });

  allBlogs
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .map((post) => {
      feed.item({
        title: post.title,
        url: `https://lavaldi.com/blog/${post.slug}`,
        date: post.publishedAt,
        description: post.summary
      });
    });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
