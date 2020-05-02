---
title: "Lanzar comandos de la terminal al abrir un proyecto en VS Code"
date: 2020-05-02
categories:
  - Code
tags:
  - vscode
template: post
thumbnail: "../thumbnails/vsc.png"
banner: "https://i.imgur.com/CEnh8Y6.png"
slug: "lanzar-comandos-de-la-terminal-al-abrir-un-proyecto-en-vs-code"
---

Estaba leyendo, como usualmente lo hago, los newsletters que me llegan al correo y en uno de esos me topé con un post de [Chris Coyier en CSS Tricks](https://css-tricks.com/some-little-improvements-to-my-vs-code-workflow-workspaces-icons-tasks/) sobre su workflow en VS Code y me pareció interesante la parte en que hablaba de lanzar comandos de la terminal al abrir un proyecto, ya que uno siempre que abre un proyecto y tiene que correr el script `start` o `dev` o `watch` (o el que sea que utilices en tu proyecto) y es una buena forma de automatizar tu workflow ☝️ así que aquí se los comparto!

## Tasks

Para eso se han implementado las tareas. Puedes crearlas de dos formas: Manualmente o desde el menu.

### Manualmente

Para hacerlo manualmente solo tienes que crear tu archivo `tasks.json` dentro de la carpeta `.vscode` y agregar las propiedades que necesites según la [documentación](https://code.visualstudio.com/docs/editor/tasks) 👀

### Desde el menú

La otra opción es seleccionar la opción Configure Tasks o Configure Default Build Task desde el menú Terminal, dependiendo de lo que necesites. Eso mostrará un dropdown para selecionar las tareas escaneadas en tu proyecto. Algo como esto:

![Terminal 👉 Configure Tasks](https://i.imgur.com/fRzPqKE.png)

Al seleccionar una te creará el archivo `tasks.json` dentro de la carpeta `.vscode`. En mi caso:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "dev",
      "problemMatcher": [],
      "label": "npm: dev",
      "detail": "gatsby develop"
    }
  ]
}
```

El cual puedes modificar según tus necesidades siguiendo la [documentación](https://code.visualstudio.com/docs/editor/tasks).

En mi caso yo le agregué estas líneas:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "dev",
      "problemMatcher": [],
      "label": "npm: dev",
      "detail": "gatsby develop",
      // highlight-start
      "presentation": {
        "panel": "shared",
        "showReuseMessage": true,
        "clear": true
      },
      "runOptions": {
        "runOn": "folderOpen"
      }
      // highlight-end
    }
  ]
}
```

Para que no abriera una nueva terminal cada vez que se ejecute la tarea y para que la tarea se lance automáticamente cuando abra el folder en VS Code. Para que suceda esto último (que la tarea automáticamente), la primera vez tienes que lanzarla manualmente (Terminal 👉 Run Task), para que tenga los permisos correctos, entonces funciona automáticamente a partir de ahí ✌️😁

That's all folks!
