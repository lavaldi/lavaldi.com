import { useState } from 'react';
import ExternalLink from '@/components/ExternalLink';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-purple-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="prose text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Got Engaged 💍">
        My now fiancé asked me to marry him and I said yes! 🎉
      </Step>
      <Step title="Front-end Developer at UND - Grupo El Comercio">
        Front-end development of the APTiTUS.com portal.
      </Step>
      <Step title="Front-end Developer at Clicks & Bricks">
        Front-end development of the APTiTUS.com portal.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Create Spinity Technologies">
        I created a company with some friends to make video games while we
        supported ourselves developing websites with WordPress, it was a nice
        experience, it didn't last long due to lack of experience and focus.
      </Step>
      <Step title="Web Developer at Bonzzu Inc.">
        Development of web pages with CMS WordPress: templates and plugins
        (HTML, CSS, JS and PHP).
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Web Developer at CLM Developers">
        Front-end and back-end development creating Wordpress sites.
      </Step>
      <Step title="University graduation 🍾">
        I finished college with a bachelor's degree in Computer Science.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="Started at Universidad Nacional de Trujillo 🤓">
        I got into college! Yay!
      </Step>
    </ul>
    <Divider />
    <Year>1990</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-purple-700 dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Publish my second article on escuelafrontend.com">
          This time was about&nbsp;
          <ExternalLink href="https://www.escuelafrontend.com/articulos/diferencias-valor-y-referencia-en-js">
            Value vs References in JavaScript
          </ExternalLink>
          {'.'}
        </Step>
        <Step title="Create a blog for my articles on Christianity">
          You can check it out here
          {' 👉 '}
          <ExternalLink href="https://prosigohacialameta.com">
            prosigohacialameta.com
          </ExternalLink>
          {' (in spanish). '}
        </Step>
        <Step title="Publish my first article on an external page">
          I published an article on&nbsp;
          <ExternalLink href="https://escuelafrontend.com">
            escuelafrontend.com
          </ExternalLink>
          {' about '}
          <ExternalLink href="https://escuelafrontend.com/articulos/hoisting-ejemplos-practicos">
            Hoisting in JavaScript
          </ExternalLink>
          {'.'}
        </Step>
        <Step title="Web UI Developer at Globant 🌐">
          I'm extremely excited about this new role 🤩.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="I became a mom 🤱">
          Great year to have a child, huh? The delivery was a bit difficult but
          God was with us 🙌
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Software Engineer at Able.co 👩‍💻">
          Software development with React and Ruby on Rails (I'm not an expert
          in Rails but I can do some things 😅)
        </Step>
        <Step title="Managing internal tech talks at UND - Grupo El Comercio 🗣️">
          I organize the internal tech talks on my work with my dear friend
          Pedro Pairazamán.
        </Step>
        <Step title="Talk about front-end at Laboratoria">
          With some teammates we went to Laboratoria to talk about the live as
          front-end developers.
        </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Got Married 🥳">
          We had a pretty ceremony with family and friends, and it was better
          than I could have imagined 😌
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
