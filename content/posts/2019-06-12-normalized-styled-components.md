---
title: Normalized styled-components
date: 2019-06-12
categories:
  - Code
tags:
  - react
  - styled-components
  - npm
background: "https://i.imgur.com/Yp1LVnF.jpg"
template: post
thumbnail: '../thumbnails/react.png'
slug: normalized-styled-components
---

Hola amigos 👋

A continuación les presento un paquete de NPM que creé para normalizar los diferentes elementos HTML y usarlos como styled-components, llamado: [@lavaldi/normalized-components](https://www.npmjs.com/package/@lavaldi/normalized-components)

## ¿Por qué creé este paquete?

Bueno, sé que actualmente existen paquetes como [styled-normalize](https://github.com/sergeysova/styled-normalize) o [normalized-styled-components](https://github.com/yldio/normalized-styled-components) que están en el [ecosistema de styled-components](https://www.styled-components.com/ecosystem), pero no servían para lo que yo necesitaba.

- styled-normalize agrega los estilos de normalización de manera global, y
- normalized-styled-components tiene un [issue que he reportado, pero que no han resuelto](https://github.com/yldio/normalized-styled-components/issues/38) por el cuál no he podido implementarlo en mi proyecto.

Lo que yo necesitaba era un paquete que exporte cada elemento HTML como un styled-component. Así que me dije *"manos a la obra"* 💪

## ¿Cómo se usa?

Para usarlo solo tienes que agregarlo a tu `package.json` con npm o con yarn:

```bash
npm install @lavaldi/normalized-components --save-dev
```

o

```bash
yarn add @lavaldi/normalized-components --dev
```

E impórtalo donde deseas usarlo:

```js
import { Button } from '@lavaldi/normalized-components';

export default () => <Button>Click Here!</Button>;
```

Eso es todo!

Ahora ve y dale una estrellita 🌟 en github 😉👉https://github.com/lavaldi/normalized-components