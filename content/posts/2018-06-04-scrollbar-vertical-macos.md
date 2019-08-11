---
title: Mostrar el scrollbar vertical en macOS
date: 2018-06-04
categories:
  - Code
tags:
  - css
  - webkit
  - macOS
background: "https://i.imgur.com/A8CMAQX.jpg"
template: post
thumbnail: '../thumbnails/css.png'
slug: scrollbar-vertical-macos
---

Acabo de toparme con el problema de que macOS oculta las barras de desplazamiento mientras no están en uso, pero la cuestión es que a veces las personas no pueden ver si un div tiene o no una función de desplazamiento.

## La solución

Incluye esto en tu CSS:

```css
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
```

Puedes personalizar la apariencia si lo necesitas.

---

Fuente: [Force the scrollbar back](http://simurai.com/blog/2011/07/26/webkit-scrollbar)
