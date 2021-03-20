---
title: "Revertir / Deshacer un commit de un Gist"
date: 2021-03-22
categories:
  - Code
tags:
  - git
template: post
banner: "https://i.imgur.com/qvcdlok.png"
slug: "revertir-deshacer-un-commit-de-un-gist"
---

La vez pasada había agregado a un gist un archivo que no quería que permanezca ahí y en vez de eliminarlo y hacer un commit sobre la eliminación pensé “se podrá hacer hacer un reset al gist? 🤔”… y pues sí, aunque no era precisamente obvio.

Clona el gist como si fuera un repo normal de git:

```bash
# reemplaza el ID del Gist
git clone git@github.com:[GIST_ID].git
```

Trátalo como un repo normal. 

En mi caso, para deshacer el commit hice un:

```bash
git reset --hard HEAD~1
```

Y cuando estuve todo estuvo listo, forcé el push:

```bash
git push -f origin master
```

Y listo!
