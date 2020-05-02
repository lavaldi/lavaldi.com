---
title: "Pasar argumentos desde la línea de comandos en Node.js"
date: 2020-04-15
categories:
  - Code
tags:
  - node
  - minimist
template: post
thumbnail: "../thumbnails/node.png"
banner: "https://i.imgur.com/GFyfBOp.png"
slug: "pasar-argumentos-desde-la-linea-de-comandos-en-node-js"
---

Puede pasar cualquier número de argumentos al invocar una aplicación Node.js usando

```bash
node app.js
```

Los argumentos pueden ser independientes o tener una clave y un valor.

Por ejemplo:

```bash
node app.js lavaldi
```

o

```bash
node app.js name=lavaldi
```

Esto cambia la forma de recuperar este valor en el código de Node.

La forma en que lo recuperamos es usando el objeto `process` incorporado en Node.

Expone una propiedad `argv`, que es un array que contiene todos los argumentos de invocación de la línea de comandos.

El primer argumento es la ruta completa del comando `node`.

El segundo elemento es la ruta completa del archivo que se está ejecutando.

Todos los argumentos adicionales están presentes desde la tercera posición en adelante.

Puedes iterar sobre todos los argumentos (incluyendo la ruta del nodo y la ruta del archivo) usando un bucle:

```javascript
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Puedes obtener solo los argumentos adicionales creando un nuevo array que excluya los primeros 2 parámetros:

```javascript
const args = process.argv.slice(2);
```

Si tiene un argumento sin un nombre de índice, así:

```bash
node app.js lavaldi
```

Puedes acceder a él usando:

```javascript
const args = process.argv.slice(2);
args[0];
```

En este caso:

```bash
node app.js name=lavaldi
```

`args[0]` es `name=lavaldi`, y debes parsearlo.

Pero, la mejor manera de hacerlo es mediante el uso de una librería llamada [`minimist`](https://www.npmjs.com/package/minimist), que ayuda a lidiar con los argumentos:

```javascript
const minimist = require("minimist");
const args = minimist(process.argv.slice(2);
args.name // lavaldi
```

😉
