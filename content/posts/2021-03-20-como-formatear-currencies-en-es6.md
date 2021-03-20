---
title: "Cómo formatear currencies en ES6"
date: 2021-03-20
categories:
  - Code
tags:
  - JavaScript
  - NumberFormat
template: post
banner: "https://i.imgur.com/D9SPorK.png"
slug: "como-formatear-currencies-en-es6"
---

Ahora puedes utilizar la instancia `NumberFormat` para formatear cualquier número en un valor monetario.

```js
new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' }
).format(100); // '$100.00'
```

## Entendiendo los parámetros
Hablemos de los parámetros. Se compone de los `locales` y el objeto `options`

```js
new Intl.NumberFormat([locales[, options]])
```

### Locales

Este es la configuración del lenguaje y la región. Está hecho del código del lenguaje y el código del país.

Por ejemplo:

```
en-CA

en = English (lenguaje)
CA = Canada (país)

es-PE

es = Español (lenguaje)
PE = Perú (país)
```

### Options

Hay muchas opciones, pero hablemos de tres en especial: `styles`, `currency` y `minimumFractionDigits`

#### Style

Es la parte fácil. Este es el estilo para su formato de número. Dado que este es un post sobre currencies, nuestra elección sería `currency`. Los 3 valores posibles son:
- decimal (formato numérico simple, el por defecto)
- currency (formato de moneda, lo que queremos usar ahora)
- percent (formato de porcentaje)

```js
const money = 100;

new Intl.NumberFormat('en-US', { currency: 'USD',
  style: 'decimal',
}).format(money); // '100'

new Intl.NumberFormat('en-US', { currency: 'USD',
  style: 'currency',
}).format(money); // '$ 100.00'

new Intl.NumberFormat('en-US', { currency: 'USD',
  style: 'percent',
}).format(money); // '10,000%'
```

#### Currency

Obviamente, hay muchas opciones de monedas. 

He aquí algunos ejemplos:

CAD (dólar canadiense)
USD (dólar estadounidense)
EUR (euro)
CNY (RMB chino)
PEN (soles)

#### minimumFractionDigits

El número mínimo de dígitos de fracción a utilizar. Los valores posibles van de 0 a 20; el valor por defecto para el formato de números y porcentajes es 0; el valor por defecto para el formato de moneda es 2.

```js
new Intl.NumberFormat("en-US", {
	style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
}).format(100); // '$ 100'

```

## Recursos
Para más información puedes revisar los siguientes links:
- [Intl.NumberFormat - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [Intl.NumberFormat() constructor - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters)
- [Current currency & funds code list](https://www.currency-iso.org/en/home/tables/table-a1.html)
