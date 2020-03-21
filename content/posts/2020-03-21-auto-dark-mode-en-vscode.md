---
title: "Auto dark mode en VSCode"
date: 2020-03-21
categories:
  - Code
tags:
  - vscode
  - macOS
template: post
thumbnail: "../thumbnails/vsc.png"
slug: "auto-dark-mode-en-vscode"
---

Hola 👋 en este post vamos a ver una característica chévere de VS Code con la cual se puede cambiar automáticamente el tema que tengas de ligth a dark según lo hayas configurado en tu sistema operativo macOS

![Auto dark mode en VS Code](https://i.imgur.com/6LTpTql.gif)

Lo primero que tenemos que hacer es configurar nuestro sistema operativo. Entramos a System Preferences -> General y en Appearance seleccionamos Auto 

![macOS System Preferences -> General](https://i.imgur.com/B7fU1Lf.png)

Luego vamos a VSCode y en nuestro settings.json agregamos

```json
{
  ...
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "A Touch of Lilac Theme",
  "workbench.preferredLightColorTheme": "Horizon Bright",
  "workbench.colorTheme": "Horizon Bright"
}
```

Solo tienes que cambiar `A Touch of Lilac Theme"` por tu dark theme favorito y `"Horizon Bright"` por tu light theme favorito. Esto hará que cuando sea de día se active el light theme y cuando sea de noche se active el dark theme automáticamente 😉

Eso es todo 🎉