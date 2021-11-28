import Link from 'next/link';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import ExternalLink from '@/components/ExternalLink';
import BlogPost from '@/components/BlogPost';
import { getFilesFrontMatter } from '@/lib/mdx';

export default function Home({ lastPosts }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          Hey! I’m Claudia Valdivieso
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm christian ✝️, wife 👫, mother 👨‍👩‍👦 and front-end 👩‍💻, and sometimes I
          write about&nbsp;
          <ExternalLink href="https://prosigohacialameta.com/">
            christianity
          </ExternalLink>
          {', and '}
          <Link href="/blog">
            <a>programming</a>
          </Link>
          {'.  You can read more about me '}
          <Link href="/about">
            <a>here</a>
          </Link>
          {'.'}
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-purple-700 dark:text-white flex justify-between w-full">
          Last Posts{' '}
          <Link href="/blog">
            <a>
              <small className="text-lg underline">view all</small>
            </a>
          </Link>
        </h3>
        {lastPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-purple-700 dark:text-white">
          Side Projects
        </h3>
        <ProjectCard
          title="Prosigo hacia la meta"
          description="Christian blog made it with Gatsby, Theme UI and MDX"
          githubUrl="https://github.com/lavaldi/prosigohacialameta.com"
          webUrl="https://prosigohacialameta.com"
          icon="✝️"
        />
        <ProjectCard
          title="lavaldi.com"
          description="This blog, made it with Next.js, Tailwind CSS and MDX"
          githubUrl="https://github.com/lavaldi/lavaldi.com"
          webUrl="."
          icon="✍️"
        />
        <ProjectCard
          title="Verbs"
          description="A PWA of 1000 English verbs forms made it with next-pwa."
          githubUrl="https://github.com/lavaldi/verbs"
          webUrl="https://verbs.lavaldi.com"
          icon="🇺🇸"
        />
        <ProjectCard
          title="Normalized Styled Components"
          description="An NPM package to get normalize.css as styled-components."
          githubUrl="https://github.com/lavaldi/normalized-components"
          webUrl="https://www.npmjs.com/package/@lavaldi/normalized-components"
          icon="💅"
        />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const lastPosts = await getFilesFrontMatter('blog', 5);

  return { props: { lastPosts } };
}