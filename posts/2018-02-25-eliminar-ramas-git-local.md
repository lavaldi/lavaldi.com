---
title: Eliminar ramas antiguas de un repositorio Git local
date: 2018-02-25
category: code
tag: [git]
---

Al trabajar con Git, en grupos de varios colaboradores, comunmente implica la creación de varias ramas. Estas ramas se van acumulando en nuestro repositorio local, aunque ya hayan sido eliminadas del repositorio remoto, debido a que las herramientas de Git no hacen este proceso de forma automática, y no existe un comando de Git que lo haga por nosotros.

Sin embargo, con ayuda de algunos útiles comandos, es posible crear una instrucción que nos permita eliminar las ramas locales que hacen referencia a ramas remotas que ya han sido eliminadas:

```bash
git fetch -p && git branch -d `git branch -vv | grep ': gone]' | awk '{print $1}' | xargs`
```

A continuación explico paso a paso lo que hace este conjunto de comandos:

| Paso | Comando         | Descripción                                                                                                                                                                                                                         |
| :--: | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1   | git fetch -p    | Obtiene los cambios más recientes desde el repositorio remoto, y elimina ("corta") las referencias a las ramas remotas que ya no existen.                                                                                           |
|  2   | git branch -vv  | Lista las ramas de forma detallada, lo cual incluye información el vínculo entre las ramas locales y las referencias a las ramas remotas, así como el estado de las ramas remotas.                                                  |
|  3   | grep ': gone]'  | Del listado anterior de ramas, filtra aquellas que contengan el texto ': gone]', es decir, aquellas ramas cuyas ramas remotas vinculadas ya fueron eliminadas. Estas ramas eliminadas poseen el estado gone.                        |
|  4   | awk '{print $1} | De la lista filtrada, obtiene la primera columna, la cual contiene el nombre de la rama local.                                                                                                                                      |
|  5   | xargs           | Convierte las filas de nombres de ramas en una cadena de una sola línea, separando el contenido de cada fila mediante un espacio en blanco.                                                                                         |
|  6   | git branch -d   | Elimina las ramas listadas en el paso anterior. Al utilizar la d minuscula, se indica que no se forzará la eliminación de ramas, lo que previene que se eliminen ramas locales que no hayan sido combinadas (merged) a otras ramas. |

Esta serie de comandos trabaja solamente con el repositorio local, por lo que no hay peligro de afectar el repositorio remoto. Sin embargo, recomiendo que te asegures de haber subido (`push`) los cambios de todas las ramas, para prevenir la eliminación de ramas locales que aún tengan cambios no incluidos en el repositorio remoto.
