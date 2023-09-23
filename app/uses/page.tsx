import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        here's my setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>14&quot; Macbook Pro (2021)</li>
          <li>LG HDR 4K</li>
          <li>Logitech MX Vertical Mouse</li>
          <li>Vissles LP85 Keyboard</li>
          <li>Sony SRS-X55</li>
          <li>Custom desk</li>
          <li>Herman Miller Aeron Chair</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>Editor: VSCode</li>
          <li>Theme: Shades of purple / GitHub Light</li>
          <li>Terminal: iTerm / zsh</li>
        </ul>
        <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Sony WH-1000XM5</li>
          <li>Insta360 X3</li>
          <li>iPhone 14 Pro Camera</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>Arc browser</li>
          <li>1Password</li>
          <li>CleanShot X</li>
          <li>Grammarly</li>
          <li>Raycast</li>
          <li>Lunar</li>
          <li>Rocket</li>
          <li>Dato</li>
          <li>Cron</li>
          <li>Jiffy</li>
          <li>Moom</li>
          <li>GitHub Desktop</li>
          <li>Spark</li>
        </ul>
      </div>
    </section>
  );
}
