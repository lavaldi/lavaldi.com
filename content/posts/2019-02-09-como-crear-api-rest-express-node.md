---
title: Cómo crear un API REST con Express.js y Node.js
date: 2019-02-09
categories:
  - Code
tags:
  - node
  - babel
  - express
template: post
slug: como-crear-api-rest-express-node
---

> Este tutorial es la parte 3 de 3 en esta serie.<br>
> Parte 1: [Configuración mínima de Node.js con Babel](/node-con-babel)<br>
> Parte 2: [¿Cómo configurar Express.js en Node.js?](/configurar-express-en-node)

Una aplicación Express se usa con más frecuencia como una aplicación backend en una arquitectura cliente-servidor, mientras que el cliente podría escribirse en React.js u otra solución de interfaz popular, el servidor podría escribirse en Express. Ambas entidades dan como resultado una arquitectura cliente-servidor (relación frontend y backend) mientras que el backend sería necesario para la lógica de negocios (A) que no debería ser expuesta como código fuente a la aplicación frontend; de lo contrario, estaría accesible en el navegador, o para (B) establecer conexiones a fuentes de datos de terceros (por ejemplo, bases de datos).

Sin embargo, no confunda la aplicación cliente siempre con el frontend y la aplicación del servidor siempre con el backend aquí. Estos términos no pueden ser intercambiados tan fácilmente. Mientras que una aplicación de interfaz de usuario es generalmente algo que se ve en el navegador, un sistema de fondo generalmente ejecuta una lógica de negocios que no debería estar expuesta en un navegador y, a menudo, también se conecta a una base de datos.

```bash
Frontend -> Backend -> Database
```

Pero, en contraste, los términos cliente y servidor son una cuestión de perspectiva. Una aplicación backend (Backend 1) que consume otra aplicación backend (Backend 2) se convierte repentinamente en una aplicación cliente para la última aplicación de servidor (Backend 2). Sin embargo, la misma aplicación backend (Backend 1) sigue siendo el servidor para otra aplicación cliente que es la aplicación frontend (Frontend).

```javascript
Frontend -> Backend 1 -> Backend 2 -> Database

// Frontend: Cliente del Backend 1
// Backend 1: Servidor para Frontend, también Cliente del Backend 2
// Backend 2: Servidor para Backend 1
```

Si deseas responder a la pregunta del cliente-servidor si alguien te pregunta qué rol desempeña la entidad en una arquitectura cliente-servidor, siempre pregúntate a ¿quién (servidor) le está sirviendo a quién (cliente) y quién (cliente) consume las funcionalidades de quién (backend)?

Esa es la teoría detrás de las arquitecturas cliente-servidor y cómo relacionarse con ellas. Volvamos a ser más prácticos. ¿Cómo se comunican entre sí las aplicaciones cliente y servidor? A lo largo de los años, existieron algunas interfaces de comunicación ([APIs](https://en.wikipedia.org/wiki/Application_programming_interface)) populares entre ambas entidades. Sin embargo, el más popular se llama [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) definida en 2000 por Roy Fielding. Es una arquitectura que aprovecha el [protocolo HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) para permitir la comunicación entre un cliente y una aplicación de servidor. Una aplicación de servidor que ofrece una API REST también se denomina servidor RESTful. Los servidores que no siguen la arquitectura REST en un 100% se denominan RESTish en lugar de RESTful. A continuación, vamos a implementar dicha API REST para nuestra aplicación de servidor Express, pero primero vamos a conocer las herramientas que nos permiten interactuar con una API REST.

## cURL para API REST

Si no has oído hablar de cURL, esta sección te ofrece una breve descripción de qué es cURL y cómo usarlo para interactuar con las API (REST). La definición tomada de [Wikipedia](https://en.wikipedia.org/wiki/CURL) dice: "cURL [...] es un proyecto de software informático que proporciona una biblioteca y una herramienta de línea de comandos para transferir datos usando varios protocolos". Dado que REST es una arquitectura que utiliza HTTP, un servidor que expone una API RESTful puede se consumirá con cURL, porque HTTP es uno de los varios protocolos.

Primero, instalémoslo en la línea de comandos. Por ahora, la guía de instalación es para usuarios de MacOS y Ubuntu, pero creo que al buscar "curl para windows" en línea encontrarás una guía de configuración. En esta guía, utilizaremos Homebrew para instalarlo en MacOS. Si no tienes Homebrew, instátelo con el siguiente comando en la línea de comandos:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

A continuación, instale cURL con Homebrew:

```bash
brew install curl
```

Para Ubuntu:

```bash
sudo apt-get install curl
```

Ahora, inicia el servidor Express que realizamos en las partes anteriores. Una vez que inicies tu aplicación, ejecuta curl `http://localhost:3000` en otra pestaña de la línea de comandos. Asegúrate de que el puerto coincida con tu puerto y que el servidor Express se esté ejecutando. Después de ejecutar el comando, deberías ver "¡Hola Mundo!" impreso en la línea de comandos. Enhorabuena, acabas de consumir tu servidor Express como cliente con algo más que un navegador.

```javascript
Navegador (Cliente) -> Servidor Express
Herramienta de línea de comandos (Cliente con cURL) -> Servidor Express
```

Si accedes a tu aplicación Express en `http://localhost:3000` en el navegador o a través de la línea de comandos con cURL, debería ver el mismo resultado. Ambas herramientas actúan como clientes, mientras que la aplicación Express es su servidor. En las siguientes secciones veremos cómo usar cURL para verificar la API REST de la aplicación Express, que implementaremos en conjunto, en la línea de comandos en lugar de en el navegador.

## Rutas Express: Métodos HTTP y Operaciones REST

Express es una opción perfecta para un servidor cuando se trata de crear y exponer APIs (por ejemplo, API REST, API GraphQL) para comunicarse como cliente con su aplicación de servidor. [Anteriormente](/configurar-express-en-node), ya había implementado una ruta Express, que envía un "¡Hola mundo!", al que ha accedido a través del navegador y cURL en la línea de comandos. Configuraremos más rutas para acomodar una API RESTful para la aplicación Express eventualmente. Agrega las siguientes rutas a tu aplicación Express, mientras que el URI en sí no cambia, pero el método utilizado sí:

```javascript
import 'dotenv/config';
...
import express from 'express';

const app = express();

...

app.get('/', (req, res) => {
  return res.send('Recibió un método GET');
});

app.post('/', (req, res) => {
  return res.send('Recibió un método POST');
});

app.put('/', (req, res) => {
  return res.send('Recibió un método PUT');
});

app.delete('/', (req, res) => {
  return res.send('Recibió un método DELETE');
});

app.listen(process.env.PORT, () =>
  console.log(`¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`),
);
```

Ahora inicia nuevamente el servidor Express en la línea de comandos, si aún no se está ejecutando, y ejecuta cuatro comandos cURL en otra pestaña de la línea de comandos. Debería ver el siguiente resultado:

```bash
curl http://localhost:3000
-> Recibió un método GET

curl -X POST http://localhost:3000
-> Recibió un método POST

curl -X PUT http://localhost:3000
-> Recibió un método PUT

curl -X DELETE http://localhost:3000
-> Recibió un método DELETE
```

Por defecto cURL usará un método HTTP GET. Sin embargo, puedes especificar el método HTTP con el indicador `-X` (o el indicador `--request`). Dependiendo del método HTTP que elijas, accederá a diferentes rutas de la aplicación Express, que hasta ahora representan solo un único endpoint de la API con un URI hasta el momento. Más adelante verás otras adiciones que puedes agregar a tus solicitudes de cURL.

Ese es uno de los aspectos clave de REST: utiliza métodos HTTP para realizar operaciones en URI(s). A menudo, estas operaciones se denominan [operaciones CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) para crear, leer, actualizar y eliminar operaciones. A continuación, veremos qué estas operaciones se utilizan en las URIs (recursos).

## Rutas Express: URIs y recursos

Otro aspecto importante de REST es que cada URI actúa como un recurso. Hasta ahora, solo hemos operado en la URI raíz con las operaciones CRUD. Realmente no representa un recurso en REST. En contraste, un recurso podría ser un recurso de usuario, por ejemplo:

```javascript
...

app.get('/users', (req, res) => {
  return res.send('Método GET en el recurso usuario');
});

app.post('/users', (req, res) => {
  return res.send('Método POST en el recurso usuario');
});

app.put('/users', (req, res) => {
  return res.send('Método PUT en el recurso usuario');
});

app.delete('/users', (req, res) => {
  return res.send('Método DELETE en el recurso usuario');
});

...
```

Con cURL en la línea de comandos, puede recorrer el recurso representado por una URI con diferentes operaciones utilizando nuevamente el endpoint de la API `http://localhost:3000/users`. Verás un resultado similar al anterior, pero esta vez está operando en un recurso llamado usuario. Falta una pieza para que el método HTTP PUT (operación de actualización) y el método HTTP DELETE (operación de eliminación) sean RESTful desde el punto de vista de una URI:

```javascript
...

app.get('/users', (req, res) => {
  return res.send('Método GET en el recurso usuario');
});

app.post('/users', (req, res) => {
  return res.send('Método POST en el recurso usuario');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `Método PUT en el recurso usuario/${req.params.userId}`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `Método DELETE en el recurso usuario/${req.params.userId}`,
  );
});

...
```

Para eliminar o actualizar un recurso de usuario, debe conocer al usuario exacto. Ahí es donde se utilizan identificadores únicos en la programación. En nuestras rutas Express, podemos asignar identificadores únicos con parámetros en la URI. Luego, la función de devolución de llamada mantiene el parámetro en los parámetros del objeto de solicitud. Intenta de nuevo una operación cURL en `/users/1`, `/users/2` u otro identificador con un método HTTP DELETE o UPDATE y verifica que el identificador aparezca en la línea de comandos como salida.

## Darle sentido a REST

Es posible que aún te estés preguntando: *¿Qué valor trae la combinación de URI y métodos HTTP, que constituyen la mayoría de la filosofía REST, a mi aplicación?*

Imaginemos que no solo devolveremos un resultado, como lo hacemos en este momento, sino que actuaríamos correctamente en la operación recibida en su lugar. Por ejemplo, el servidor Express podría estar conectado a una base de datos que almacena las entidades de los usuarios en una tabla de usuarios. Ahora, cuando consume el API REST como cliente (por ejemplo, cURL, navegador o también una aplicación React.js), puede recuperar todos los usuarios de la base de datos con un método HTTP GET en el URI de `/users` o, en el mismo recurso, crear un nuevo usuario con un método HTTP POST.

```bash
// Making sense of the Naming

Método de la ruta Express <=> Método HTTP <=> Operación REST
Camino de la ruta Express <=> URI <=> Recurso REST
```

De repente, podrás leer y escribir datos desde y hacia una base de datos desde una aplicación cliente. Todo lo que lo hace posible es una aplicación de back-end que le permite escribir una interfaz (por ejemplo, API REST) ​​para las operaciones CRUD.

```bash
Cliente -> API REST -> Servidor -> Base de Datos
```

Mientras que es importante notar que la API REST pertenece a la aplicación del servidor. Puede llevar esto siempre un paso más allá al tener varias aplicaciones de servidor que ofrecen API REST. A menudo, vienen con el nombre de microservicios o servicios web, mientras que cada aplicación de servidor ofrece una funcionalidad bien encapsulada. Los servidores ni siquiera tienen que usar el mismo lenguaje de programación, ya que se están comunicando a través de una interfaz independiente del lenguaje de programación. Además, las interfaces (API) no tienen que ser necesariamente API REST.

```bash
       -> API REST -> Servidor -> API GraphQL -> Servidor -> Base de Datos
Cliente
       -> API REST -> Servidor -> Base de Datos
```

Vamos a llevar todo lo que aprendimos en teoría, hasta ahora, un paso más hacia una aplicación real mediante el envío de datos reales a través del cable. Los datos serán datos de muestra, que aún no provendrán de una base de datos, sino que estarán codificados en el código fuente en su lugar:

```javascript
...

let users = {
  1: {
    id: '1',
    username: 'Claudia Valdivieso',
  },
  2: {
    id: '2',
    username: 'Carlos Zárate',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hola Mundo',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'Por el Mundo',
    userId: '2',
  },
};

...
```

Junto a las entidades de usuario, tendremos entidades de mensaje también. Ambas entidades están relacionadas entre sí al proporcionar la información necesaria como identificadores (por ejemplo, un mensaje tiene un creador del mensaje). Así es como un mensaje se asocia con un usuario y cómo usted también recuperaría los datos de una base de datos, mientras que cada entidad (usuario, mensaje) tiene una tabla de base de datos dedicada. Ambos se representan como objetos a los que se puede acceder mediante identificadores.

Comencemos por proporcionar dos rutas para leer la lista completa de usuarios y un solo usuario por identificador:

```javascript
...

let users = { ... };

let messages = { ... };

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.listen(process.env.PORT, () =>
  console.log(`¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`),
);
```

Mientras que seleccionamos un usuario del objeto por identificador para la ruta de usuarios individuales, transformamos el objeto de usuario en una lista de usuarios para la ruta de todos los usuarios. Lo mismo debería ser posible para el recurso de mensaje:

```javascript
...

let users = { ... };

let messages = { ... };

...

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.listen(process.env.PORT, () =>
  console.log(`¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`),
);
```

Pruebe las cuatro rutas con cURL en la línea de comandos. Sólo se trata de leer datos. A continuación, analizaremos las otras operaciones de CRUD para crear, actualizar y eliminar recursos para escribir datos en realidad. Sin embargo, no podremos evitar un middleware Express personalizado y un middleware Express proporcionado por el ecosistema. Es por eso que discutiremos el tema del middleware Express a continuación mientras implementamos las operaciones CRUD que faltan.

## Express Middleware

Veamos cómo se puede implementar un escenario para crear un mensaje en nuestra aplicación Express. Ya que estamos creando un mensaje sin una base de datos, necesitamos una biblioteca auxiliar para generar identificadores únicos para nosotros. Instale esta biblioteca auxiliar desde la línea de comandos:

```bash
npm install uuid
```

Luego, impórtelo en la parte superior de su archivo `src/index.js`:

```javascript
import uuidv4 from 'uuid/v4';
```

Ahora, cree un mensaje con una nueva ruta que use un método HTTP POST:

```javascript
...

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
  };

  messages[id] = message;

  return res.send(message);
});

...
```

Generamos un identificador único para el mensaje con la nueva biblioteca, lo usamos como propiedad en un objeto de mensaje, asignamos el mensaje por identificador en el objeto de mensajes, que es nuestra pseudo base de datos, y devolvemos el nuevo mensaje después de que se haya creado.

Sin embargo, falta algo para el mensaje. Para crear un mensaje, un cliente debe proporcionar la cadena de texto para el mensaje. Afortunadamente, un método HTTP POST permite enviar datos como carga útil en un cuerpo. Es por eso que podemos usar la solicitud entrante (`req`) para extraer una carga útil de la misma.

```javascript
...

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };

  messages[id] = message;

  return res.send(message);
});

...
```

Sin embargo, el acceso directo a la carga útil de una solicitud HTTP POST de esta manera no lo proporciona Express fuera de la caja. O bien, tendría que transformar la carga útil del cuerpo usted mismo o utilizar un middleware dedicado para que esta transformación se realice por usted. Instale y use un middleware conocido para este propósito:

```bash
npm install body-parser
```

A continuación, úselo para su aplicación Express como middleware:

```javascript
...
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

...

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

...
```

El body-parser extrae toda la parte del cuerpo de un flujo de solicitud entrante y lo hace accesible en `req.body` ([Fuente](https://www.quora.com/What-exactly-does-body-parser-do-with-express-js-and-why-do-I-need-it)):

- bodyParser.json(): analiza el texto como JSON y expone el objeto resultante en `req.body`.
- bodyParser.urlencoded(): analiza el texto como datos codificados en la URL (que es la forma en que los navegadores tienden a enviar datos de formularios de los formularios normales establecidos a POST) y expone el objeto resultante (que contiene las claves y los valores) en `req.body`.

Ahora se puede acceder al cuerpo con el texto del mensaje en la solicitud si se envía mediante una solicitud POST normal o una solicitud POST desde un formulario HTML. Ambas formas deberían funcionar ahora. Todos los datos se deben recibir y enviar como carga JSON ahora. Ese es otro aspecto de REST, que en sí mismo no tiene un formati estándar para la carga útil (JSON, XML), pero una vez que hayas elegido un formato, debe atenerse a él para la API completa.

En los últimos pasos, hemos instalado un nuevo middleware para Express y lo hemos puesto a disposición en un nivel de aplicación. Cada solicitud que llega a una de nuestras rutas Express pasa por el middleware. Por lo tanto, todos los datos enviados por un cliente a nuestro servidor están disponibles en la solicitud entrante. Inténtalo creando un mensaje tú mism@. En una solicitud de cURL puede especificar encabezados HTTP con el indicador `-H`, es decir, como decimos que queremos transferir JSON, y los datos como carga útil con el indicador `-d`. Deberías poder crear mensajes de esta manera:

```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hola de nuevo, Mundo"}'
```

Hasta ahora, solo hemos importado middleware de terceros y lo hemos utilizado en un nivel de aplicación. Ahora, construyamos un middleware Express personalizado, que se utiliza en un nivel de aplicación, nosotros mismos. El modelo para un middleware es similar a las funciones Express que hemos visto antes:

```javascript
...

app.use((req, res, next) => {
  // hacer algo
  next();
});

...
```

La función ` next()`, que está disponible como tercer argumento, se llama para indicar que el middleware ha finalizado su trabajo. Esto se vuelve más importante cuando su middleware utiliza funciones asíncronas. En medio de la función de middleware puedes hacer cualquier cosa ahora. Podríamos simplemente realizar un `console.log()` de la hora o hacer algo con la solicitud (`req`) o la respuesta (`res`). En nuestro caso, para crear un mensaje, necesitamos saber de alguna manera quién está creando el mensaje. Hagamos una versión simple de un middleware que determine a un pseudo usuario "autenticado" que envía la solicitud. Entonces es posible agregar a este usuario como creador de mensajes al mensaje:

```javascript
...

app.use((req, res, next) => {
  req.me = users[1];
  next();
});

...

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };

  messages[id] = message;

  return res.send(message);
});

...
```

De repente tendremos acceso al usuario `me` en el objeto de solicitud, que es el usuario autenticado, en nuestras rutas. Este usuario puede ser usado luego para ser asignado como creador del mensaje. Se puede imaginar cómo ese middleware podría usarse más adelante para interceptar cada solicitud entrante para determinar a partir de los encabezados HTTP entrantes si la solicitud proviene de un usuario autenticado o no. Si la solicitud proviene de un usuario autenticado, el usuario se propaga a todas las rutas Express que se utilizarán allí. Así es como el servidor Express puede ser sin estado, mientras que un cliente siempre envía la información del usuario autenticado actualmente.

Ser sin estado (stateless) es otra característica de los servicios REST. Después de todo, debería ser posible crear múltiples instancias de servidor para equilibrar el tráfico entrante de manera uniforme entre los servidores. Si escuchó sobre el término balanceador de carga anteriormente, eso es exactamente lo que se usa cuando tiene varios servidores a su disposición. Es por eso que un servidor no puede mantener el estado (por ejemplo, un usuario autenticado) y el cliente siempre tiene que enviar esta información junto con cada solicitud. Luego, un servidor puede tener un middleware que se encarga de la autenticación en un nivel de aplicación y proporciona el estado de la sesión (por ejemplo, un usuario autenticado) a cada ruta en su aplicación Express.

Ahora que hemos aprendido lo esencial sobre el middleware de nivel de aplicación en Express, implementemos las últimas rutas para completar las rutas de nuestra aplicación. ¿Qué pasa con la operación para eliminar un mensaje:

```javascript
...

app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages;

  messages = otherMessages;

  return res.send(message);
});

...
```

Puedes probarlo con el siguiente comando cURL:

```bash
curl -X DELETE http://localhost:3000/messages/1
```

La operación de actualización en un recurso de mensaje es para que lo implementes como un ejercicio. Lo dejaré para una sección posterior, porque rápidamente plantea un nuevo tema: los permisos. La pregunta: ¿Quién puede editar un mensaje? Solo debería ser posible para el usuario autenticado (`me`) que es el creador del mensaje, ¿verdad?

Por último, como ya tienes a tu disposición el pseudo usuario autenticado debido al middleware de toda la aplicación, también puede ofrecer una ruta dedicada para este recurso:

```javascript
...

app.get('/session', (req, res) => {
  return res.send(users[req.me.id]);
});

...
```

Es la primera vez que rompe las reglas de ser completamente REST, porque se ofrece un endpoint de API para una característica muy específica. No será la primera vez que infrinja las leyes de REST, porque la mayoría de las veces REST no se implementa por completo, sino RESTish. Si quieres profundizar más en REST, hazlo!.

## Modelos modulares en Express como fuentes de datos

En este momento, toda nuestra implementación se encuentra en el archivo `src/index.js`. Sin embargo, en algún momento es posible que desees modularizar los detalles de su implementación y colocarlos en archivos y carpetas dedicados, mientras que el archivo `src/index.js` solo debe preocuparse de poner todo junto e iniciar la aplicación. Antes de sumergirnos en modularizar el enrutamiento, veamos cómo podemos modularizar nuestros datos de muestra primero en los llamados modelos. Desde su carpeta `src` escriba los siguientes comandos para crear una estructura de carpeta/archivo para los modelos.

```bash
mkdir models
cd models
touch index.js
```

La carpeta modelos en una aplicación Express suele ser el lugar donde define sus fuentes de datos. En nuestro caso, son los datos de muestra, pero en otras aplicaciones, por ejemplo, serían las interfaces a la base de datos. En nuestro caso de refactorización, movamos nuestros datos de muestra al nuevo archivo `src/models/index.js`:

```javascript
let users = {
  1: {
    id: '1',
    username: 'Claudia Valdivieso',
  },
  2: {
    id: '2',
    username: 'Carlos Zárate',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hola Mundo',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'Por el Mundo',
    userId: '2',
  },
};

export default {
  users,
  messages,
};
```

Elimine los datos de muestra posteriormente en el archivo `src/index.js`. También importe los modelos en el archivo`src/index.js` ahora y páselos en nuestro middleware personalizado de nivel de aplicación a todas las rutas a través de un objeto de contexto dedicado. Ahí es donde el usuario `me` (autenticado) puede colocarse también. No necesita necesariamente el objeto de contexto como contenedor, pero me pareció una buena práctica mantener todo lo que se pasa a las rutas en un solo lugar.

```javascript
...

import models from './models';

const app = express();

...

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

...
```

Luego, en lugar de tener acceso a los datos de muestra en todas las rutas desde variables externas como antes, lo cual es un efecto secundario innecesario y no mantiene la función pura, queremos usar los modelos (y el usuario autenticado) desde los argumentos de la función ahora.

```javascript
...

app.get('/session', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

app.get('/users', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

...
```

Estamos utilizando el middleware de toda la aplicación para pasar los modelos a todas nuestras rutas en un objeto de contexto. Los modelos viven fuera del archivo `src/index.js` y pueden ser refactorizados a las interfaces reales de la base de datos. A continuación, dado que hicimos que el enrutamiento fuera independiente de todos los efectos secundarios y pasáramos todo lo necesario a través del objeto de solicitud con el objeto de contexto, también podemos mover las rutas a lugares separados.

## Enrutamiento modular con Express Router

Hasta ahora, hemos montado rutas directamente en la instancia de la aplicación Express en el archivo `src/index.js`. Esto se volverá prolijo con el tiempo, ya que este archivo solo debe preocuparse por todos los temas importantes para iniciar nuestra aplicación. No debe revelar detalles de implementación de las rutas. Ahora la mejor práctica sería mover las rutas a una estructura de carpetas/archivos dedicados. Es por eso que queremos darle a cada recurso REST su propio archivo en una carpeta dedicada. Desde su carpeta `src/`, escriba lo siguiente en la línea de comandos para crear una estructura de carpeta/archivo para las rutas modulares:

```javascript
...

import routes from './routes';

const app = express();

...

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

...
```

En nuestro archivo de entrada `src/route/index.js` al módulo de rutas, importe todas las rutas desde sus archivos dedicados (que aún no están definidos) y expórtelos como un objeto. Después, están disponibles en el archivo `src/index.js` como ya los hemos usado.

```javascript
import session from './session';
import user from './user';
import message from './message';

export default {
  session,
  user,
  message,
};
```

Ahora implementemos cada ruta modular. Comience con la ruta de la sesión en el archivo `src/route/session.js` que solo devuelve el pseudo usuario autentificado. Express ofrece Express Router para crear dichas rutas modulares sin montarlas directamente en la instancia de la aplicación Express. Así es como podemos crear rutas modulares en otros lugares que no sean la aplicación Express, pero importarlos más tarde para que se monten en la instancia de la aplicación Express como ya lo hemos hecho en un paso anterior.

```javascript
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});

export default router;
```

A continuación, la ruta user en el archivo `src/route/user.js`. Es bastante similar a la ruta de la sesión:

```javascript
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
```

Observe que no necesitamos definir la URI `/users` (ruta) sino solo las subrutas, porque ya lo hicimos en el proceso de montaje de la ruta en la aplicación Express (checa el archivo `src/index.js`). A continuación, implemente el archivo `src/route/message.js` para definir la última de nuestras rutas modulares:

```javascript
import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = req.context.models.messages;

  req.context.models.messages = otherMessages;

  return res.send(message);
});

export default router;
```

Ahora cada una de nuestras rutas modulares desde Express Router está montada en nuestra aplicación Express con una URI dedicada en el archivo `src/index.js`. Las rutas modulares en la carpeta `src/route` solo se ocupan de las rutas secundarias y los detalles de implementación, mientras que el archivo `src/index.js` se ocupa de la ruta principal y la ruta modular que se usa allí. Al final, no olvides eliminar todas las rutas utilizadas anteriormente del archivo `src/index.js` que movimos a la carpeta `src/route/`.

### Recursos relacionados

[Building a Node.js/TypeScript REST API, Part 1: Express.js](https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1) es un tutorial (en inglés) para aquellos que desean usar TypeScript y en él usa un paquete interesante llamado `winston` que es responsable de registrar (log) las peticiones a nuestra API y las respuestas (y errores) devueltas 👌.

> Este tutorial es la parte 3 de 3 en esta serie.<br>
> Parte 1: [Configuración mínima de Node.js con Babel](/node-con-babel)<br>
> Parte 2: [¿Cómo configurar Express.js en Node.js?](/configurar-express-en-node)
