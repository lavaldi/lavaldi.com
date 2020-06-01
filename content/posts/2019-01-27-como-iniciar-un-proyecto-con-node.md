---
title: Cómo iniciar un proyecto con Node.js
date: 2019-01-27
categories:
  - Code
  - Popular
tags:
  - node
template: post
thumbnail: "../thumbnails/node.png"
slug: como-iniciar-un-proyecto-con-node
---

Esta semana me llegó a mi correo un newsletter sobre JavaScript y me pareció muy interesante este artículo llamado en inglés [How to start a Node.js Project](https://philna.sh/blog/2019/01/10/how-to-start-a-node-js-project/) el cual muestra cómo podemos automatizar la creación de nuestros proyectos con Node.js.

Generalmente cuando iniciamos un nuevo proyecto Node.js, usamos `npm` para generar mi proyecto inicial.

```bash
npm init
```

`npm` luego hace algunas preguntas y crea un archivo `package.json`. Entonces empezamos a construir el proyecto.

Luego, inevitablemente, copiamos y pegamos un archivo `.gitignore` del útil repo de plantillas de `.gitignore` de GitHub. Y si recordamos, en realidad crearemos un archivo de `LICENSE` con la licencia de código abierto que pretendía usar.

Esto no es eficiente.

Entonces esta semana Tierney Cyren tuiteó esto:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to start any new Node.js project:<br><br>$ npx license mit &gt; LICENSE<br>$ npx gitignore node<br>$ npx covgen YOUR_EMAIL_ADDRESS<br>$ npm init -y<br><br>You&#39;re ready to start coding.</p>&mdash; Tierney Cyren (@bitandbang) <a href="https://twitter.com/bitandbang/status/1082331715471925250?ref_src=twsrc%5Etfw">January 7, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Estos cuatro comandos hacen todo lo que hacemos manualmente y más, configurando un proyecto para el éxito desde el principio.

- `npx license mit` utiliza el [paquete de licencias](https://www.npmjs.com/package/license) para descargar una licencia de elección, en este caso la licencia MIT.
- `npx gitignore node` utiliza el [paquete gitignore](https://www.npmjs.com/package/gitignore) para descargar automáticamente el archivo `.gitignore` relevante del repositorio de GitHub.
- `npx covgen` utiliza el [paquete covgen](https://www.npmjs.com/package/covgen) para generar el Pacto de Colaboradores y otorgar al proyecto un código de conducta que dará la bienvenida a todos los contribuyentes.
- `npm init -y` acepta todas las opciones predeterminadas que `npm init` te pregunta.

## Personalizando `npm init`

Puedes ver tu configuración `npm` actual ingresando `npm config list` en la línea de comandos. Para ver simplemente la configuración que afecta a `npm init` puedes hacer grep para "init":

```bash
npm config list | grep init
```

Hay una serie de valores predeterminados que puedes establecer; nombre del autor, correo electrónico del autor, url del autor, la licencia y la versión. Para configurarlos, puede ingresarlos en la línea de comandos o usar `npm config edit` para abrir el archivo de configuración en su editor de texto. Sin embargo, la línea de comandos es bastante fácil, puedes configurar los cinco valores predeterminados de esta manera:

```bash
npm set init.author.name "Tu nombre"
npm set init.author.email "tu@email.com"
npm set init.author.url "https://tu-url.com"
npm set init.license "MIT"
npm set init.version "1.0.0"
```

Una vez que hayas personalizado eso a tu gusto, `npm init -y` siempre producirá la configuración correcta.

## Construyendo tu propio init script

Hay algunas mejoras que haría a los comandos de Tierney, aunque agradezco que Twitter lo haya restringido. Aquí hay un guión de bash que he encontrado inspirado en su tweet.

```bash
function node-project {
  git init
  npx license $(npm get init.license) -o "$(npm get init.author.name)" > LICENSE
  npx gitignore node
  npx covgen "$(npm get init.author.email)"
  npm init -y
  git add -A
  git commit -m "Initial commit"
}
```

Al original, he agregado la obtención del tipo de licencia, el nombre del autor y el correo electrónico de los valores predeterminados de `npm init`. También he inicializado un nuevo repositorio de git y confirmado los resultados de este script como el "commit inicial".

Puede tomar esta función y agregarla a tu `~/.bash_profile` o `~/.zshrc`. Luego, desde la línea de comando ejecuta `node-project`. Siéntete libre de agregar o eliminar lo que creas adecuado para crear tu secuencia de comandos de inicialización perfecta.

## Ve a iniciar un nuevo proyecto

Ahora tienes el script perfecto para iniciar un proyecto con Node.js, ¿por qué no crear uno nuevo?
