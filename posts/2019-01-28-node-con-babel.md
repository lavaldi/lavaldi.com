---
title: Configuración mínima de Node.js con Babel
date: 2019-01-28
category: code
tag: [node, babel]
---

> Este tutorial es la parte 1 de 3 en esta serie.<br>
> Parte 2: [¿Cómo configurar Express.js en Node.js?](/code/configurar-express-en-node)<br>
> Parte 3: [Cómo crear un API REST con Express.js y Node.js](/code/como-crear-api-rest-express-node)

En estos día un amigo me preguntó sobre cómo hacer para crear un proyecto con Node.js usando la última versión de JavaScript (ES6, ES7, ESNext) y la verdad es que no tenía un bootstrap sobre eso, así que aquí va el post sobre cómo tener una configuración mínima para usar Node.js con Babel.

El proyecto final que implementaremos aquí se puede encontrar en este [repositorio de GitHub](https://github.com/lavaldi/node-babel).

## Configuración del proyecto Node

Para comenzar con un nuevo proyecto, debemos crear una carpeta donde se aloje nuestro proyecto, en la línea de comandos:

```bash
mkdir mi-proyecto
cd mi-proyecto
```

Una vez dentro de la carpeta del proyecto, puedes inicializarlo como proyecto npm. Puedes hacerlo con la configuración por defecto de npm con

```bash
npm init -y
```

> En [Cómo iniciar un proyecto con Node.js](/code/como-iniciar-un-proyecto-con-node) te enseño cómo personalizar y automatizar tu setup de npm de una forma súper cool 😎

Después de configurar tu proyecto npm, puedes instalar paquetes de node (bibliotecas a.k.a librerías 🙈🙊) en tu proyecto con npm. Una vez que instales un nuevo paquete de node, se almacenará en su archivo `package.json`. Después de todo, tu proyecto también es un paquete de node 😉.

A continuación, en la línea de comandos o en tu editor/IDE, crea una carpeta `src/` para el código fuente de tu proyecto. En esta carpeta, crea un archivo `src/index.js` como punto de entrada a su proyecto:

```bash
mkdir src
cd src
touch index.js
```

Para comenzar, introduciremos una declaración `console.log` en el archivo para asegurarnos de que todo se está ejecutando correctamente:

```javascript
console.log('Hola 👋 Node.js.');
```

Vuelve a la línea de comandos, puede ejecutar este archivo con Node.js desde la carpeta raíz de su proyecto:

```bash
node src/index.js
```

Un registro de instrucciones aparece en la línea de comandos después de que se ejecuta el script. Luego, mueve este comandos al archivo `package.json`, porque ahí es donde todas las secuencias de comandos de tu proyecto terminarán finalmente.

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

En la línea de comandos, ejecuta el mismo script que antes, pero con `npm start`. Cada vez que cambie el script de inicio subyacente en los scripts npm del archivo `package.json`, solo necesita escribir `npm start` en la línea de comandos.

## Node con Nodemon

La única preocupación restante es que tenemos que ejecutar el script anterior cada vez que realicemos un cambio en nuestro código fuente. Podemos cambiar esto con un proceso de node que siempre esté en ejecución. Para remediar esto, instalaremos la biblioteca de [nodemon](https://github.com/remy/nodemon) comúnmente utilizada en la línea de comandos como una [dependencia de desarrollo](https://docs.npmjs.com/files/package.json#dependencies) para nuestro proyecto.

```bash
npm install nodemon --save-dev
```

A continuación, intercambia node por nodemon en el script de npm:

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

Cuando ejecutemos la aplicación con `npm start` desde la línea de comandos, debería ejecutarse y también se actualizará con cada nuevo cambio que realicemos en el código fuente. Intenta modificar el código para que lo veas 💪

```javascript
console.log('Hola 👋 ejecutando continuamente Node.js!');
```

Esto es muy chévere 🤙 porque el proceso de node se ejecuta nuevamente una vez que cambia su código, si pasa algún error lo veremos en la línea de comandos y si se soluciona, se ejecuta nuevamente.

## Node con Babel

Con la configuración anterios podríamos desarrollar una aplicación con Node.js normalmente, pero hay más para configurar un proyecto sofisticado Node.js que sea capaz de usar funciones de lenguaje JavaScript recientes (ECMAScript) que no están incluidas en las versiones recientes de Node.js. Ahí es donde [Babel](https://babeljs.io/) se vuelve útil. Puedes instalarlo desde la línea de comandos para las dependencias de desarrollo de su proyecto.

```bash
npm install @babel/core @babel/node --save-dev
```

A continuación, agrégualo a tu script de npm:

```json
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

Nada debería cambiar cuando ejecutes la aplicación de nuevo, piensa que eso es solo la superficie. Bajo el capó, Babel transpila tu código a JavaScript puro. Puedes usar tranquilamente una nueva función o característica de JavaScript, que no se ha introducido en Node.js. Babel se asegura de que Node.js lo entienda. Sin embargo, todavía hay un paso crucial para incluir las próximas funciones de lenguaje con Babel. Puedes activar las diferentes y nuevas funciones de JavaScript agregándolas como ajustes preestablecidos a Babel. Para eso, agregamos el preset de Babel más común:

```bash
npm install @babel/preset-env --save-dev
```

Ahora, en la carpeta raíz del proyecto, crea un archivo `.babelrc` en la línea de comando:

```bash
touch .babelrc
```

En este archivo de configuración para Babel, podemos incluir el preset recientemente instalado para desbloquear las próximas funciones de lenguaje JavaScript.

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Ahora puedes incluir las próximas funciones de JavaScript en su archivo `src/index.js`. Si tienes problemas porque la función que deseas no funciona, verifica si existe un preset de Babel dedicado.

## Plus: Variables de entorno en Node

Es importante establecer datos como claves de API privadas y credenciales de usuario como contraseñas, nombre de usuario y correo electrónico como variables de entorno, pero sin exponerlas en el código fuente. Para esto, colocamos las variables de entorno en un archivo dedicado que está a salvo del acceso externo. El archivo `.env` nos permite configurar las variables de entorno para Node.js como accesibles en el código fuente del proyecto. En la línea de comandos, en la carpeta raíz del proyecto, crea un archivo `.env`:

```bash
touch .env
```

Ahora podemos colocar cualquier par de valores clave que no deseemos en el código fuente en este nuevo archivo.

```
MI_PASSWORD=esteesmipasswordsecreto
```

dotenv es otra biblioteca útil para hacer que las variables de entorno sean accesibles en el código fuente. Primero, los intalaremos como dependencia normal:

```bash
npm install dotenv --save
```

Segundo, hay que importalo en el archivo donde se va a utilizar, en nuestro caso `src/index.js` para inicializarlo. La variable de entorno del archivo `.env` ahora es accesible en el código fuente.

```javascript
import 'dotenv/config';
console.log('Hola 👋 Node.js.');
console.log(process.env.MI_PASSWORD);
```

Vuelve a lanzar `npm start` y verás la variable de entorno en la línea de comandos. Ahora puede almacenar datos sensibles por separado del código fuente.

Ahora, considera el siguiente código para el archivo `src/index.js`, donde se importa una función desde otro archivo de este proyecto.

```javascript
import diAlgo from './mi-otro-archivo.js'

import 'dotenv/config';
```

Si usas una variable de entorno en `src/mi-otro-archivo.js`, no estará definida porque la inicialización del paquete dotenv ocurre después de la importación en el archivo `src/index.js`. Para solucionarlo, hay que inicializar dotenv antes de importar los archivos locales:

```javascript
import 'dotenv/config';

import diAlgo from './mi-otro-archivo.js'
```

Esta es una comprensión básica de las variables de entorno Node.js. Deben usarse para mantener seguros los datos sensibles en las aplicaciones de JavaScript, pero no deben compartirse en los repositorios públicos de GitHub cuando se usa git ⚠️

Hemos terminado! Checa el [repositorio de GitHub](https://github.com/lavaldi/node-babel) 👀

> Este tutorial es la parte 1 de 3 en esta serie.<br>
> Parte 2: [¿Cómo configurar Express.js en Node.js?](/code/configurar-express-en-node)<br>
> Parte 3: [Cómo crear un API REST con Express.js y Node.js](/code/como-crear-api-rest-express-node)
