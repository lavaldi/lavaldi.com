export default function ProjectCard({ title, description, href, icon }) {
  return (
    <a
      className="w-full mb-4 hover:shadow"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center border border-purple-500 dark:border-gray-800 rounded p-4">
        <div className="h-8 w-8 ml-2 mr-4 text-2xl">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-purple-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}