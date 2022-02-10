import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';

export default function Footer() {
  return (
    <footer className="w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-1 pb-16 sm:grid-cols-4">
        <Link href="/">
          <a className="text-purple-800 hover:text-purple-900 dark:text-gray-500 dark:hover:text-gray-600 transition">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="text-purple-800 hover:text-purple-900 dark:text-gray-500 dark:hover:text-gray-600 transition">
            About
          </a>
        </Link>
        <ExternalLink
          className="text-purple-800 hover:text-purple-900 dark:text-gray-500 dark:hover:text-gray-600 transition"
          href="https://twitter.com/lavaldi_"
        >
          Twitter
        </ExternalLink>
        <ExternalLink
          className="text-purple-800 hover:text-purple-900 dark:text-gray-500 dark:hover:text-gray-600 transition"
          href="https://github.com/lavaldi"
        >
          GitHub
        </ExternalLink>
        {/* <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link> */}
      </div>
    </footer>
  );
}
