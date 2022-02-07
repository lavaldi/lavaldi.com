import { useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { pick } from '@/lib/utils';
import { allBlogs } from '.contentlayer/data';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(
    (frontMatter) => frontMatter.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Claudia Valdivieso"
      description="what I'm learning as I grow in the programming world."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`Articles, tutorials and more.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-purple-500 focus:border-purple-500 block w-full rounded-md bg-purple-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-purple-700 dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length &&
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        }
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { posts } };
}