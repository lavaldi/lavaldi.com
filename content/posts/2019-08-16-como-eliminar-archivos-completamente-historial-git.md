---
title: "Eliminar archivos del historial de git"
date: 2019-08-16
categories:
  - Code
tags:
  - git
template: post
slug: como-eliminar-archivos-completamente-historial-git
---

Hay muchos casos de uso para eliminar un archivo del historial de git

Es sencillo eliminar un archivo del commit o HEAD actual, pero si deseas eliminarlo por completo del historial del repositorio, debes ejecutar un par de comandos.

Pero primero, debes encontrar la ruta del archivo en tu repositorio.

Ejecuta el comando con la ruta del archivo:

```bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch path_to_file" HEAD
```

ℹ️ Esta tarea puede tomar su tiempo dependiendo de cuándo agregaste tu archivo, en qué commit y qué tan antiguo es tu repositorio.

Si deseas sincronizar con el repositorio remoto, solo realiza un git push:

```bash
git push -all
```

Comparte 😉

---

Fuente: [How Remove Files completely from git repository history](https://myopswork.com/how-remove-files-completely-from-git-repository-history-47ed3e0c4c35)
