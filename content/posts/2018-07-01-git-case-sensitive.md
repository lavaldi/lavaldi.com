---
title: ¿Cómo hacer a Git case-sensitive en el renombramiento de archivos?
date: 2018-07-01
categories:
  - Code
tags:
  - git
background: "https://i.imgur.com/8L8ejhH.jpg"
template: post
thumbnail: '../thumbnails/git.png'
slug: git-case-sensitive
---

He cambiado el nombre de algunos archivos agregando mayúsculas en la primera letra, como de app.jsx a App.jsx. Quise commitear estos cambios pero Git no los reconoce. ¿Qué puedo hacer? ¿borrar los archivos y subirlos de nuevo? 🤔.

NO!

Lo que debes hacer es usar [`git mv`](https://git-scm.com/docs/git-mv) para renombrar tus archivos o carpetas.

Git es (desafortunadamente) insensible a las mayúsculas y minúsculas en los nombres de archivos, así que si realizas un cambio en el caso de un nombre de archivo del tipo `app.jsx` a `App.jsx` sin usar `git mv`, no será reconocido.

Entonces lo que debemos hacer es:

```bash
git mv app.jsx App.jsx
```
