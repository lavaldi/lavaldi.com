---
title: ¿Cómo cambiar mi variable de entorno PATH en macOS u OS X?
date: 2018-05-18
categories:
  - Code
tags:
  - path
  - macOS
banner: "https://i.imgur.com/A8CMAQX.jpg"
template: post
slug: cambiar-variable-entorno-path
---

Las siguientes instrucciones nos ayudarán a agregar una ruta a nuestra variable de entorno PATH.

1.  Abre la terminal.
2.  Ejecuta el siguiente comando

```bash
sudo nano /etc/paths
```

3.  Ingresa tu password.
4.  Ve a la parte inferior del archivo e ingresa la ruta del folder donde se encuentra lo que deseas agregar.
5.  La ruta se debe ver más o menos así /Users/nombre_de_usuario/Documents/carpeta_contenedora
6.  <kbd>Control-x</kbd> para cerrar.
7.  <kbd>Y</kbd> o <kbd>S</kbd> (según esté tu OS configurado para inglés o español) para guardar.
8.  <kbd>Enter</kbd> para confirmar.
9.  Cierra la Terminal y reiníciela.
10. Ejecuta `echo $PATH`. Deberías ver tu ruta recién agregada en la secuencia de otras rutas ya existentes.
