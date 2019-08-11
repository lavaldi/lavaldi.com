---
title: Habilitar syntax highlighting en Nano en macOS
date: 2018-11-01
categories:
  - Code
tags:
  - macOS
  - nano
template: post
thumbnail: '../thumbnails/apple.png'
slug: syntax-highlighting-nano
---

La versión básica de Nano que viene con macOS no admite el resaltado de sintaxis. Aquí hay una guía rápida sobre cómo habilitar el resaltado de sintaxis en Nano en macOS.

## Instalar las herramientas de línea de comandos de Xcode

Antes de nada, deberás instalar las herramientas de línea de comandos para Xcode. Esto es necesario para ejecutar los comandos de Brew que usaremos más adelante. Abre una terminal y escribe:

```bash
xcode-select --install
```

## Instalar Homebrew

También necesitarás [Homebrew](https://brew.sh/) para instalar una nueva versión de Nano que hará posible resaltar la sintaxis. [Homebrew](https://brew.sh/) es un administrador de paquetes para macOS, que facilita la instalación, actualización o eliminación de programas. Para instalarlo, ejecuta el siguiente comando:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Instalar o actualizar Nano

Lo último que tenemos que instalar es Nano. Si ya tienes una versión instalada (lo cual es muy probable), ejecuta:

```bash
brew upgrade nano
```

De lo contrario, instálalo con el siguiente comando:

```bash
brew install nano
```

## Habilitar el resaltado de sintaxis

La instalación de Nano creó archivos nanorc para cada idioma en `/usr/local/share/nano`. Si desea habilitar el resaltado de sintaxis para algunos idiomas crea o edita el archivo `~/.nanorc`.

```bash
nano ~/.nanorc
```

y agregar los archivos para los lenguajes que gustes:

```bash
include /usr/local/share/nano/html.nanorc
include /usr/local/share/nano/javascript.nanorc
```

O si desea habilitar el resaltado de sintaxis para todos los lenguajes disponibles, agregue la siguiente línea:

```bash
include /usr/local/share/nano/*.nanorc
```

Y eso es todo, ¡ahora tus archivos tendrán resaltado según el lenguaje que estés usando!
