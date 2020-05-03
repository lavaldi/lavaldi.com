---
title: "Desplegar tu blog de Gatsby en GitHub Pages (Actions)"
date: 2020-05-06
categories:
  - Code
tags:
  - gatsby
  - github
  - actions
template: post
thumbnail: "../thumbnails/gatsby.png"
banner: "https://i.imgur.com/aLVxRAo.png"
slug: "desplegar-tu-blog-de-gatsby-en-git-hub-pages-actions"
---

Dado que Gatsby genera archivos estáticos, puedes desplegarlos en cualquier lugar. Pero la opción más fácil y rápida sería desplegar tu web en GitHub Pages.

## Desplegar con gh-pages (manualmente)

Gatsby genera su sitio estático cuando ejecuta el comando `gatsby build`.

El único problema aquí es que las páginas de GitHub esperan que los archivos de tu web estén en el directorio raíz, pero Gatsby genera los archivos en el directorio llamado `public`. Por lo tanto, no podemos alojar el código fuente y los archivos públicos en el mismo repositorio.

[`gh-pages`](https://www.npmjs.com/package/gh-pages) es un paquete realmente bueno que te ayuda a desplegar sitios estáticos a un repositorio de GitHub desde cualquier lugar.

### Pasos

- `yarn add gh-pages --dev`
- Luego en tu archivo `package.json` crea los siguientes npm scripts:
  
  ```json
  {
      "scripts": {
        ...
        "clean": "rm -rf public && rm -rf .cache",
        "build": "gatsby build",
        "deploy": "yarn run clean && yarn run build && gh-pages -d public -b master",
        ...
      }
  }
  ```
- Ejecuta el script `yarn deploy` y tu sitio estático estará en funcionamiento en unos segundos 👌

## Desplegar con GitHub Actions

El método anterior desplegabas tu web de Gatsby desde tu máquina cada vez que querías, manualmente, pero una forma de automatizar el desploy de tu sitio es usando GitHub Actions. Para desplegar nuestra web usaremos [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish)

### Pasos

- Crear la carpeta `.github`, dentro de estar crear la carpeta `workflows`
- Crear el archivo `deploy.yml` dentro de la carpeta `workflow`
  ```terminal
  .github
  └── workflows
      └── deploy.yml
  ```
- Crea un [token personal en GitHub](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) checando `repo` para que el action tenga acceso a pushear a tu repositorio.
- Guarda el token como una [variable en secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets). En el código a continuación dicha variable es `ACCESS_TOKEN` pero puedes ponerle el nombre que gustes.
- Luego en el archivo `deploy.yml` agregar el siguiente código
  ```yaml
  name: Gatsby Publish

  on:
    push:
      branches:
        - [brach donde está tu código principal]

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v1
        - uses: enriikke/gatsby-gh-pages-action@v2
          with:
            access-token: ${{ secrets.ACCESS_TOKEN }}
  ```

Lo que hará este action será **desplegar tu sitio cada vez que realices un push** al branch donde está tu código principal.

Puedes ver todas las variables que puedes usar con este action en su [documentación](https://github.com/marketplace/actions/gatsby-publish) 👀

That's all folks! 🎉

Espero haberte ayudado ✌️😊
