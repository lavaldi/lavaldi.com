---
title: Cómo deshacer el último commit en Git
date: 2018-02-26
categories:
  - Code
tags:
  - git
background: "https://i.imgur.com/8L8ejhH.jpg"
template: post
thumbnail: '../thumbnails/git.png'
slug: deshacer-ultimo-commit-git
---

Hoy vamos a ver cómo deshacer el último commit de Git sin perder los cambios.

Supongamos que tenemos nuestro repositorio en el siguiente estado:

![Estado inicial](https://i.imgur.com/GgX1oIz.png)

Ejecutamos el siguiente comando:

```bash
git reset HEAD~1
```

Tras lo cual, el estado del repositorio sería:

![Estado final](https://i.imgur.com/8B1vS3H.png)
![Los cambios se mantienen](https://i.imgur.com/f61allZ.png)

Así, el último commit ha desaparecido pero se han mantenido los cambios

### Muy útil pero…

Es muy importante tener en cuenta que estas dos operaciones sobreescriben la historia del repositorio ¡estamos borrando un commit!. Si estamos trabajando en local y no hemos hecho push a nuestro remoto no hay ningún problema. Si ya has subido (`push`) este commit ten en cuenta que le tendrás que pedir a tus compañeron que borren la rama y que la vuelvan a jalar (`fetch`) cuando realices tu commit final.

Espero que te haya resultado útil!
