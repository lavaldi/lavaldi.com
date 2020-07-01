---
title: Crear subtítulos para tu video
date: 2018-05-20
categories:
  - Code
  - Popular
tags:
  - srt
  - subtitulos
banner: "https://i.imgur.com/H1maXnW.png"
template: post
thumbnail: "../thumbnails/bash.png"
slug: crear-subtitulos-srt
---

Un archivo "SubRip Subtitle", también conocido como SRT (.srt), es uno de los formatos de subtítulos más comunes que se utilizan. Se originó a partir del software de extracción de [DVD SubRip, que "ripea" (extrae) los subtítulos y los tiempos de los videos](https://en.wikipedia.org/wiki/SubRip). En los subtítulos, se usa un formato de archivo de texto, que puede crear fácilmente usando TextEdit (en una Mac) o Notepad (en una PC con Windows).

## ¿Cuáles son las partes de un archivo SRT?

Un archivo SRT consta de cuatro partes:

1. El número del cuadro de subtítulos en secuencia.
2. Códigos de tiempo inicial y final para cuando aparezca el cuadro de subtítulos.
3. El subtítulo en sí.
4. Una línea en blanco para indicar el comienzo de una nueva secuencia de subtítulos.

El formato de tiempo utilizado es **horas: minutos: segundos, milisegundos**, con los milisegundos redondeados a 3 decimales. Cada marca de tiempo está separada por una flecha de dos guiones (`-->`) y una línea en blanco antes de la siguiente secuencia de subtítulos.

## ¿Por qué debería usar un archivo SRT?

Un archivo SRT es el formato más fácil de usar para crear sus propios subtítulos.

La mayoría de los reproductores multimedia, el software de captura de conferencias y el software de grabación de video son compatibles con los archivos de subtítulos SRT.

Algunas de las plataformas más comunes son: Facebook, YouTube, Slideshare, Camtasia, VLC y más.

## Cómo crear su propio archivo SRT

El primer paso para crear un archivo SRT es crear la transcripción de tu video. Usa las instrucciones a continuación para crear tu propio archivo SRT desde cero. Dependiendo del sistema operativo que use (macOS o Windows), las instrucciones son ligeramente diferentes.

1. Abre un nuevo archivo en TextEdit o Notepad.
2. Para comenzar, escribe un "1" para indicar la primera secuencia de subtítulos, luego presiona <kbd>Enter</kbd>.
3. Ingresa el código de tiempo inicial y final usando el siguiente formato: horas: minutos: segundos, milisegundos --> horas: minutos: segundos, milisegundos. Luego presiona <kbd>Enter</kbd>.
4. En la línea siguiente, comienzan tus leyendas. Trata de mantener un límite de 32 caracteres, con 2 líneas por subtítulo para que el espectador no tenga que leer demasiado y el título no ocupe demasiado espacio en la pantalla.
5. Después de la última línea de texto en la secuencia, presiona <kbd>Enter</kbd> dos veces. Asegúrese de dejar una línea en blanco para indicar una nueva secuencia de subtítulos.
6. Debajo de la línea en blanco, escribe "2" y comience su segunda secuencia de subtítulos siguiendo el formato de subtítulos SRT.
7. Repita los pasos hasta que tenga una transcripción completa.

![Ejemplo de archivo SRT](https://i.imgur.com/GLVeC0S.png)

8. Para guardar su archivo como .srt:

**En TextEdit**

- Primero vaya a Formato → Hacer texto sin formato, o use el atajo de teclado: <kbd>Mayús</kbd> + <kbd>Comand</kbd> + <kbd>T</kbd>.
- A continuación, vaya a Archivo → Guardar.
- En "Guardar como", escriba el nombre de su archivo, pero cambie ".txt" a ".srt".
- Desmarque tanto "Ocultar extensión" en la parte inferior izquierda del menú, y "Si no se proporciona ninguna extensión, use ".txt"".

![Ejemplo de archivo SRT](https://i.imgur.com/gr82i4r.png)

**En NotePad**

- Para guardar, vaya a Archivo → Guardar.
- En "Nombre de archivo", escriba el nombre de su transcripción con ".srt" al final.
- En "Guardar como tipo:", selecciona "Todos los archivos".

![Ejemplo de archivo SRT](https://i.imgur.com/D643ppp.jpg)

9. Luego presiona guardar.
10. ¡Felicitaciones! Ahora estás listo para subir tus subtítulos.

---

Fuente: [How to Create a SRT File](https://www.3playmedia.com/2017/03/08/create-srt-file/)
