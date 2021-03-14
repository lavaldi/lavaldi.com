---
title: Cómo limpiar las ramas locales de Git
date: 2020-04-14
categories:
  - Code
tags:
  - git
template: post
banner: "https://i.imgur.com/kwUOgyK.png"
slug: limpiar-ramas-locales-git
---

Cuando se trabaja con Git, es bastante habitual acumular muchas ramas diferentes para las diferentes características en las que estamos trabajando.

Sin embargo, cuando se fusiona (`merge`) con nuestra rama principal, puede que quieras limpiar las ramas no utilizadas para que tu espacio de trabajo en Git esté más organizado.

Como desarrollador, puede ser bastante cansado tener referencias a cientos de ramas diferentes en nuestro repositorio de Git.

Por ello, en este post, vamos a ver algunas de las diferentes formas de limpiar tus ramas locales de Git fácilmente.

## Limpiar las ramas locales de Git individualmente

En primer lugar, deseamos verificar qué ramas ya se han fusionado con la rama principal.

En este caso, vamos a implicar que desea eliminar las ramas locales fusionadas con `master`.

Para verificar las ramas fusionadas, usaremos el comando `git branch` con la opción `–merged`.

```bash
git checkout master

git branch --merged <commit>

  feature
* master
```

Si omites proporcionar el hash del commit, el comando implicará que se refiere a HEAD (también conocido como el último commit de tu rama actual).

Ahora que tienes las ramas locales ya fusionadas con `master`, deberá eliminarlas.

**La forma más fácil de eliminar ramas locales de Git es usar el comando `git branch` con la opción `-d`.**

```bash
git branch -d <branch>
```

La opción `-d` significa `–delete` y se puede usar siempre que la rama que desea limpiar esté completamente fusionada con su rama remota.

**La otra forma de limpiar ramas locales en Git es usar el comando `git branch` con la opción `-D`.**

En este caso, la opción `-D` significa `–delete -force` y se utiliza cuando las ramas locales aún no se fusionan con las ramas remotas.

```bash
git branch -D <branch>
```

## Limpiar todas las ramas locales de Git

En algunos casos, puede ser útil tener una línea para eliminar ramas locales no utilizadas.

Para aquellos que tienen curiosidad, aquí es cómo puede eliminar las ramas locales no utilizadas en una sola línea.

```bash
git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d
```

Antes de ejecutar esto, hagamos una explicación rápida sobre este comando:

- `git branch --merged`: primero, simplemente está enumerando todas las ramas actualmente fusionadas con la rama en la que estás actualmente;
- `egrep -v "(^\*|master|dev)"`: está utilizando la función de coincidencia invertida de grep para excluir cualquier rama que pueda llamarse `master` o `dev`, por si acaso;
- `xargs git branch -d`: estás eliminando todas las ramas mencionadas anteriormente.

> ⚠️ Nota: puedes modificar el comando egrep para incluir tus propias ramas.

Y eso es todo 🎉. Con estos comandos solo hemos borrado las ramas locales sin eliminar (~~dañar~~) las ramas en nuestro repositorio remoto 😌
