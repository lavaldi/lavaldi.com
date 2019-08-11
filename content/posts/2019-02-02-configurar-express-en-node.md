---
title: ¿Cómo configurar Express.js en Node.js?
date: 2019-02-02
categories:
  - Code
tags:
  - node
  - babel
  - express
template: post
thumbnail: '../thumbnails/node.png'
slug: configurar-express-en-node
---

> Este tutorial es la parte 2 de 3 en esta serie.<br>
> Parte 1: [Configuración mínima de Node.js con Babel](/node-con-babel)<br>
> Parte 3: [Cómo crear un API REST con Express.js y Node.js](/como-crear-api-rest-express-node)

Express.js es la opción más popular cuando se trata de crear aplicaciones web con Node.js. Express.js, es un framework de aplicaciones web para Node.js, te permite crear aplicaciones de servidor en Node.js. Como una aplicación back-end, es el pegamento entre su aplicación de front-end y una posible base de datos u otras fuentes de datos (API REST, API GraphQL, etc.).

Express.js es intercambiable con otros frameworks de aplicaciones web para el back-end de la misma manera que React.js es intercambiable con Vue.js y Angular.js cuando se trata de aplicaciones front-end. El ecosistema Node.js no ofrece solo una solución, sino varias soluciones que vienen con sus fortalezas y debilidades. Sin embargo, para esta aplicación usaremos un servidor Express, porque es la opción más popular cuando se trata de crear aplicaciones de back-end de JavaScript con Node.js.

La aplicación Node.js [del tutorial anterior](/node-con-babel) viene con una secuencia de comandos para reiniciar su aplicación una vez que el código fuente haya cambiado, Babel para habilitar las funciones de JavaScript que aún no son compatibles con Node.js y las variables de entorno para la información sensible de tu aplicación. Esa es una excelente base para comenzar a utilizar Express.js en Node.js. Continuemos instalando Express.js en la aplicación Node.js desde la línea de comandos:

```bash
npm install express
```

Ahora, en tu archivo `src/index.js`, usa el siguiente código para importar Express.js, para crear una instancia de una aplicación Express y para iniciarla como servidor Express:

```javascript
import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('¡Aplicación de ejemplo escuchando en el puerto 3000!'),
);
```

Una vez que inicies la aplicación en la línea de comandos con `npm start`, deberías poder ver esta salida en la línea de comandos:

```bash
Example app listening on port 3000!
```

Tu servidor Express está en funcionamiento 😎. Todo lo que debería suceder después de que su aplicación Express se haya iniciado entra en una función callback. El método en sí toma otro parámetro como primer parámetro, que es el puerto de la aplicación en ejecución. Es por eso que después de iniciarlo, la aplicación está disponible a través de `http://localhost:3000`. Sin embargo, no debería haber nada disponible en esta URL cuando la veas en tu navegador. A continuación veremos cómo ponerle contenido.

## Rutas en Express.js

En frameworks como Express.js, se pueden crear rutas una vez que se haya creado la instancia de la aplicación. Todas las rutas conforman el enrutamiento completo de la aplicación. Vamos a configurar una sola ruta:

```javascript
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(3000, () =>
  console.log('¡Aplicación de ejemplo escuchando en el puerto 3000!'),
);
```

La ruta apunta a la raíz de tu dominio: `http://localhost:3000/` que también se puede usar como `http://localhost:3000`. Una vez que guardes el archivo, la aplicación debería reiniciarse automáticamente. Puedes verificarlo en la línea de comandos. Luego, checa el navegador en `http://localhost:3000` para ver qué resultado produce. Deberías ver el "¡Hola mundo!" Impreso allí. Eso es todo para tu primera ruta en Express.js. Aprenderemos más sobre las rutas y cómo interactuar con ellas más adelante.

Esencialmente, cada aplicación Express es solo una serie de llamadas de función de enrutamiento y middleware. Acabamos de ver el primero, el enrutamiento con una sola ruta para la URL `http://localhost:3000` o la ruta `/`. Puedes extender la aplicación con URIs adicionales (por ejemplo, `http://localhost:3000/test`) utilizando las rutas en Express.js (por ejemplo, `/test`) como se muestra anteriormente. ¡Inténtalo tú mism@!

## Middleware en Express.js

Si una aplicación de Express consta de enrutamiento y llamadas de funciones de middleware, ¿qué ocurre con las llamadas de funciones de middleware? Hay dos tipos de middleware en Express.js: middleware de nivel de aplicación y middleware de nivel de enrutador. Exploremos un middleware de nivel de aplicación en esta sección con un caso de uso limpio y profundicemos en los otros aspectos del middleware de nivel de aplicación y de nivel de enrutador más adelante.

Al usar Express.js, las personas a menudo se encuentran con el siguiente error en el navegador cuando acceden a su aplicación Express: _"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3000/. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).”_. Lo más probable es que ocurra porque estamos accediendo a un dominio desde un dominio exterior. El intercambio de recursos de origen cruzado (CORS) se inventó para proteger las aplicaciones web en un nivel de dominio. La idea: no debería ser posible acceder a datos de otros dominios. Por ejemplo, una aplicación web con el dominio `https://example.com` no debería poder acceder a otra aplicación web con `https://website.com` de forma predeterminada. Se utiliza para restringir el acceso entre aplicaciones web.

Ahora, podemos permitir CORS agregando este encabezado de CORS faltante, porque eventualmente nos encontraremos con este error al implementar una aplicación cliente que consume para nuestro servidor Express. Sin embargo, dado que no queremos hacer esto manualmente para cada ruta, podemos usar un middleware de nivel de aplicación para agregar el encabezado CORS HTTP a cada solicitud de forma predeterminada. Por lo tanto, podríamos escribir un middleware nosotros mism@s (veremos cómo funciona esto más adelante) o usar una biblioteca de middleware para Express.js que haga el trabajo por nosotros.

```bash
npm install cors
```

A continuación, la utilizaremos como un middleware para toda la aplicación:

```javascript
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(3000, () =>
  console.log('¡Aplicación de ejemplo escuchando en el puerto 3000!'),
);
```

La aplicación Express puede usar literalmente un middleware, proveniente de una biblioteca externa o creada por uno mismo, para extender todas sus rutas (middleware de nivel de aplicación). En este caso, todas las rutas se extienden con encabezados CORS HTTP. Por defecto, todas las rutas son accesibles para todos los dominios ahora. Esto incluye más adelante nuestros dominios de desarrollo de nuestra aplicación cliente consumidora también. Después de todo, esto era solo un adelanto en un middleware en Express. Aprenderemos más sobre middleware de nivel de aplicación y de enrutador, y cómo escribir un middleware por ti mism@, más adelante.

> Nota ⚠️ : No te preocupes demasiado por la configuración de CORS si aún no la has comprendido por completo. Es una de las cosas con las que se enfrentan muchos usuarios de Express por primera vez, tienen que lidiar con la instalación de esta biblioteca ordenada y, a menudo, nunca miran hacia atrás por qué tenían que instalarla y usarla. Si aún no lo entendiste, no te preocupes, pero al momento de implementar tu aplicación en producción, debes configurar una lista blanca de dominios que tengan acceso a tu aplicación de servidor Express. La biblioteca CORS ofrece este tipo de configuración. Tómate un tiempo para investigarla tú mism@.

## Variables de entorno en Express.js

Antes de configurar las variables de entorno para la aplicación Node.js, vamos a usar una variable de entorno para configurar el puerto en lugar de codificarlo en el código fuente. Si no hay tal archivo, crea un nuevo archivo `.env` en tu proyecto. De lo contrario, use el archivo `.env` que ya está allí. Déle un nuevo par de valores clave para definir su puerto:

```javascript
PORT=3000
```

Ahora en tu archivo `src/index.js`, importa el paquete de Node que hace que las variables de entorno estén disponibles en tu código fuente y usa la variable de entorno PORT para iniciar su aplicación Express.

```javascript
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(process.env.PORT, () =>
  console.log(`¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`),
);
```

En lugar de exponer el puerto que se usa en el código fuente, lo has almacenado en un lugar más sensible, en tus variables de entorno. Si está utilizando Git con algo como GitHub, puede excluir que `.env` no se cargue en el repositorio de GitHub agregándolo a su archivo `.gitignore`. Así es como los datos sensibles se mantienen alejados de los repositorios públicos de Git como GitHub. Si implementas tu aplicación en producción con el tiempo, puedes agregar las variables de entorno como un archivo `.env` en el servidor web que sirve a tu aplicación.

Checa el [repositorio de GitHub](https://github.com/lavaldi/simple-node-express-server) 👀. Nos vemos!

> Este tutorial es la parte 2 de 3 en esta serie.<br>
> Parte 1: [Configuración mínima de Node.js con Babel](/node-con-babel)<br>
> Parte 3: [Cómo crear un API REST con Express.js y Node.js](/como-crear-api-rest-express-node)
