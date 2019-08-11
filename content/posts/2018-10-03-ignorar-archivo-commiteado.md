---
title: Ignorando un archivo previamente commiteado en git
date: 2018-10-03
categories:
  - Code
tags:
  - git
template: post
thumbnail: '../thumbnails/git.png'
slug: ignorar-archivo-commiteado
---

Si deseas ignorar un archivo que has commiteado en el pasado, deberás eliminar el archivo de tu repositorio y luego agregar una regla en el `.gitignore` para él. El usar la opción `--cached` con `git rm` significa que el archivo se eliminará del repositorio, pero permanecerá en tu directorio de trabajo como un archivo ignorado.

```bash
echo file.md >> .gitignore
git rm --cached file.md
git commit -m "Start ignoring file.md"
```

Puedes omitir la opción `--cached` si deseas eliminar el archivo tanto del repositorio como de tu sistema de archivos local.
