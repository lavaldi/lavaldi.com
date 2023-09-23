import Image from "next/image";import smashing from "public/images/home/smashing.jpg";
import family from "public/images/home/family.jpeg";
import laboratoria1 from "public/images/home/laboratoria-1.jpg";
import laboratoria2 from "public/images/home/laboratoria-2.jpg";
import laboratoria3 from "public/images/home/laboratoria-3.jpg";
import gec from "public/images/home/gec.jpeg";
import draftea from "public/images/home/draftea.jpg";
// import avatar from "app/avatar.jpg";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-800 rounded p-1 text-sm inline-flex items-center leading-4 text-purple-900 dark:text-purple-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Hola, soy Claudia Valdivieso 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm christian ✝️, wife 👫, mother 👨‍👩‍👦 and front-end 👩‍💻, and sometimes I
        write about what I learn. I currently work at{" "}
        <Badge href="https://draftea.com">Draftea</Badge> where we are building
        the best fantasy app of Latin America.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-80 mb-4 sm:mb-4">
          <Image
            alt="Me and some friend in a talk for a group of women at Laboratoria in 2018"
            src={laboratoria1}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Yeah, we like to go to Laboratoria to talk about frontend"
            src={laboratoria2}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and some work folks doing tech talks at work"
            src={gec}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-0">
          <Image
            alt="Me and some friend in a talk for a group of women at Laboratoria in 2019"
            src={laboratoria3}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Me and my family in Oxapampa, Peru"
            src={family}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me with the Draftea t-shirt"
            src={draftea}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/lavaldi_"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
