import ExternalLink from "./ExternalLink";

export default function ProjectCard({
  title,
  description,
  githubUrl,
  webUrl,
  icon
}) {
  return (
    <div
      className="w-full mb-4 hover:shadow rounded bg-gradient-to-r from-purple-300 via-red-400 to-purple-600 p-0.5"
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-wrap items-center bg-purple-50 dark:bg-black rounded p-4">
        <div className="h-8 w-8 ml-2 mr-4 text-2xl">{icon}</div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-purple-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className="ml-auto flex justify-between w-full mt-2 sm:block sm:w-auto sm:mt-0">
          {githubUrl ? (
            <p className="leading-5 text-gray-700 dark:text-gray-300 text-right">
              <ExternalLink
                className="underline sm:no-underline"
                href={githubUrl}
              >
                GitHub
              </ExternalLink>
            </p>
          ) : null}
          {webUrl ? (
            <p className="leading-5 text-gray-700 dark:text-gray-300 text-right">
              <ExternalLink className="underline sm:no-underline" href={webUrl}>
                Web
              </ExternalLink>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
