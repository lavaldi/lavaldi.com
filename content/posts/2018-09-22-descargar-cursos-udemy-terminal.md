---
title: Descargar cursos de Udemy
date: 2018-09-22
categories:
  - Code
tags:
  - youtube-dl
  - Udemy
background: "https://i.imgur.com/7HUo6j1.jpg"
template: post
thumbnail: '../thumbnails/bash.png'
slug: descargar-cursos-udemy-terminal
---

Hola 👋, hoy quiero compartirles cómo descargar un curso que **compraste** en [Udemy](https://www.udemy.com/) en tu computadora desde la terminar.

## Instalar youtube-dl

Lo primero que tienes que hacer es instalar `youtube-dl`. Para macOS lo puedes hacer la siguiente manera:

```bash
brew install youtube-dl
```

⚠️ Para otros sistemas operativos puedes ver 👉 [http://rg3.github.io/youtube-dl/download.html](http://rg3.github.io/youtube-dl/download.html)

## Instalar ffmpeg

También necesitas instalar `ffmpeg` para que el audio salga junto con el video:

```bash
brew install ffmpeg
```

⚠️ Para otros sistemas operativos puedes ver 👉 [https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg)

## Descargar el curso

Luego para descargar solo ejecuta el siguiente comando:

```bash
youtube-dl -u <email> -p <password> -o "./%(playlist)s/%(chapter_number)s-%(chapter)s/%(autonumber)03d-%(title)s.%(ext)s" https://www.udemy.com/<course_name>/
```

Lo que hace es guardar los videos creando carpetas de acuerdo a las secciones que se tienen en el curso.
