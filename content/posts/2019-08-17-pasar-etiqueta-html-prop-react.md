---
title: "Pasar una etiqueta HTML como prop en React"
date: 2019-08-17
categories:
  - Code
  - Popular
tags:
  - react
template: post
thumbnail: "../thumbnails/react.png"
slug: pasar-etiqueta-html-prop-react
---

## ¿Puedo pasar una etiqueta HTML como propiedad en React?

La respuesta es sí, y es muy fácil:

```javascript{5}
import React from "react";
import ReactDOM from "react-dom";

const App = props => {
  const { tag: Tag } = props; // 👀 he aquí el truco
  return (
    <div className="App">
      <Tag>Hello 👋</Tag>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App tag="h1" />, rootElement);
```

Ahora `Tag` puede ser cualquier nombre que tu quieras darle. Por ejemplo, puedes cambiarlo por `Element` y tendríamos el mismo resultado:

```javascript{5,8}
import React from "react";
import ReactDOM from "react-dom";

const App = props => {
  const { tag: Element } = props; // 👀
  return (
    <div className="App">
      <Element>Hello 👋</Element>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App tag="h1" />, rootElement);
```

Y eso es todo ✌😁

---

Fuente: [Stack Overflow](https://stackoverflow.com/questions/51871080/can-i-pass-html-tag-as-prop-react)
