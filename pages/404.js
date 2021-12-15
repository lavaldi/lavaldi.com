import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

export default function Custom404() {
  return (
    <Container title="404 – Claudia Valdivieso">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-purple-700 dark:text-white">
          404 Not found!
        </h1>
        <div
          style={{
            width: '100%',
            height: 0,
            paddingBottom: '56%',
            position: 'relative'
          }}
        >
          <iframe
            src="https://giphy.com/embed/GDnomdqpSHlIs"
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>¡Ooops! Parece que esta página no existe.</p>
          <p>
            ¿Hiciste clic en un enlace? Por favor,{' '}
            <ExternalLink href="https://twitter.com/lavaldi_">
              házmelo saber en twitter
            </ExternalLink>{' '}
            y trataré de arreglarlo.
          </p>
        </div>
      </div>
    </Container>
  );
}
