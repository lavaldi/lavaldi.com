import Image from 'next/image';

import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';
import Timeline from '@/components/Timeline';

export default function About() {
  return (
    <Container title="About – Claudia Valdivieso">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey! I’m Claudia Valdivieso, christian ✝️, wife 👫, mother 👨‍👩‍👦 and front-end 👩‍💻 (yep, in that order). I'm currently working as a Web UI Developer at&nbsp;
            <ExternalLink href="https://globant.com">
              Globant
            </ExternalLink>
            .
          </p>
          <p>
            I grew up in Trujillo, a city in northern Peru,
            graduated with a bachelor's degree in Computer Science. I spend my free
            time playing with my boy, reading, running, biking, and enjoying time with friends
            and family in Lima - Peru.
          </p>
          <Image src="https://imgur.com/Rz4id1v.gif" alt="Santiago and me" width="698" height="932" layout="responsive" />
        </div>
        <Timeline />
      </div>
    </Container>
  );
}