---
title: Instalar el comando `code` de Visual Studio Code en macOS
date: 2018-02-28
categories:
  - Code
tags:
  - vscode
  - code
  - macOS
background: "https://i.imgur.com/A8CMAQX.jpg"
template: post
thumbnail: '../thumbnails/vsc.png'
slug: instalar-comando-code-vscode
---

Como dice la [documentación](https://code.visualstudio.com/docs/setup/mac) de Visual Studio Code lo que debemos hacer es:

1.  Lanzar VS Code.
2.  Abrir la paleta de comandos con <kbd>⇧⌘P</kbd> y escribir 'shell command' para encontrar el comando `Shell Command: Install 'code' command in PATH`.

![Shell Command: Install 'code' command in PATH](https://i.imgur.com/CFGqnSp.gif)

3.  Reinicia tu terminal para que tome efecto el cambio realizado en el `$PATH`. Luego podrás escribir `code` en cualquier carpeta para comenzar a editar archivos en esa carpeta.

## Si eso no funciona...

Si lo mencionado anteriormente no funciona, también puedes hacerlo manualmente ejecutando:

```
sudo ln -fs "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" /usr/local/bin/
```

---

Fuente: [apple.stackexchange.com](https://apple.stackexchange.com/questions/294176/how-to-install-visual-studio-codes-code-command-permanently)
