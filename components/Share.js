import useClipboard from 'react-use-clipboard';
import ExternalLink from '@/components/ExternalLink';

export default function Share({ title, url }) {
  const [isCopiedToClipboard, setCopiedToClipboard] = useClipboard(url, {
    successDuration: 1000
  });

  return (
    <div className="flex w-full space-x-1 mt-5">
      <button
        className="inline-flex items-center p-2 border border-gray-200 text-xs leading-4 font-medium rounded text-gray-700 dark:text-gray-300 hover:text-purple-600 focus:outline-none focus:border-purple-300 focus:shadow-outline-blue active:text-gray-800"
        onClick={setCopiedToClipboard}
      >
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
        {isCopiedToClipboard ? 'Copied!' : 'Copy link to clipboard'}
      </button>
      <ExternalLink
        className="inline-flex items-center p-2 border border-gray-200 text-xs leading-4 font-medium rounded text-gray-700 dark:text-gray-300 hover:text-purple-600 focus:outline-none focus:border-purple-300 focus:shadow-outline-blue active:text-gray-800"
        href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
          title + ', post by @lavaldi'
        )}&url=${url}`}
      >
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="-2 -4 24 24"
        >
          <g fill="currentColor">
            <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03 4.02 4.02 0 0 0 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path>
          </g>
        </svg>
        Tweet
      </ExternalLink>
    </div>
  );
}
