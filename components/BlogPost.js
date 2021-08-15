import Link from 'next/link';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ title, summary, publishedAt, slug }) => {

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-purple-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right w-48 mb-4 md:mb-0">
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;