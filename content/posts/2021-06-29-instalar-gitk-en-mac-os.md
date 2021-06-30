---
title: "Instalar gitk en macOS"
date: 2021-06-29
categories:
  - Code
tags:
  - gitk
  - git
  - macOS
template: post
banner: ""
slug: "instalar-gitk-en-mac-os"
---

Antes de instalar `gitk` tenemos que seguir los siguientes pasos:

1. Primero debemos asegurarnos de tener instalado `git`.

   - Comprobaremos la versión de git con `git --version`. Si es que muestra una versión saltamos al paso 2.
   	- Actualizamos Homebrew con `brew update`.
   	- Instalamos la última versión de Git desde Homebrew con `brew install git`.

2. Luego tenemos que instalar `git-gui` con `brew install git-gui`

Y eso es todo! ya podemos usar `gitk` en nuestra terminal! 🎉
