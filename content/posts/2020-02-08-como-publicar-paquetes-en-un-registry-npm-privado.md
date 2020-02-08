---
title: "Cómo publicar paquetes en un registry NPM privado"
date: 2020-02-08
categories:
  - Code
tags:
  - npm
  - node
template: post
thumbnail: "../thumbnails/npm.png"
slug: como-publicar-paquetes-en-un-registry-npm-privado
---

En este artículo voy a explicar paso a paso cómo puedes publicar un paquete en un registry privado de NPM. Luego, te daré una rápida explicación de cómo tus usuarios pueden instalar el paquete, sin dejar de poder instalar paquetes desde el registro "normal" de npmjs.org 👌

### ¿Qué es un Registry?

Para resolver los paquetes por nombre y versión, npm (la herramienta CLI) habla con un sitio web de registro. El registro (registry en inglés) más popular está alojado por npm (la compañía) en registry.npmjs.org. 


## Autorizando a NPM

En el registry privado debe haber usuarios con sus respectivas credenciales, pero seguramente también se habrá generado un token de autenticación para poder publicar los paquetes. Este token será utilizado en los siguientes pasos.

## Preparando tu paquete

Para esto ya debes haber [generado el `package.json`](https://docs.npmjs.com/creating-a-package-json-file) con el comando `npm init`.

Hay tres formas de configurar el registry privado en tu paquete.

### Logueándote si tienes usuario y contraseña

```bash
npm login --registry https://your-registry-url/
```

### Creando un archivo `.npmrc`

Crea el archivo `.npmrc` en la raíz del proyecto del paquete npm. Añade la siguiente línea

```
registry=//your-registry-url/:_authToken=00000000-0000-0000-0000-000000000000
```

Reemplaza "your-registry-url" por la url real del registry privado y "00000000-0000-0000-0000-000000000000" por tu token real.

### Usando el CLI

```bash
npm config set '//your-registry-url/:_authToken' '00000000-0000-0000-0000-000000000000'
```

Reemplaza con los datos reales.

## ¡Publica!

Todo lo que queda por hacer es ejecutar

```bash
npm publish
```

## Consumiendo tu paquete

En el proyecto donde tu paquete va a ser utilizado genera un archivo `.npmrc` y agrega:

```
registry=https://your-registry-url/
```

Lo que es bueno es que sin ninguna otra configuración puedes instalar cualquier paquete del registro npm junto con esos. Así que puedes instalar lodash con la configuración anterior desde el registro de npm así como instalar un paquete desde el registro privado.

```bash
npm install <paquete-desde-registry-privado>
npm install lodash # paquete desde el registry de NPM
```

## Pensamientos finales

Como ven no es cosa de otro mundo pero no hay mucha información tan detallada sobre esto, al menos yo tuve que buscar en varias fuentes para hacerlo durante esta semana en el trabajo y por eso es que lo recopilo aquí ✌️

---

¿Tienes alguna otra forma para realizar esto? Me encantaría saber, ¡deja un comentario abajo! 💬👇