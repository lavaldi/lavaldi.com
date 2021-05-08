---
title: "2 formas de sincronizar tu configuración de VSCode"
date: 2020-03-25
categories:
  - Code
tags:
  - vscode
  - github
template: post
slug: "2-formas-de-sincronizar-tu-configuracion-de-vsc-ode-en-multiples-maquinas"
---

Derrepente tienes una máquina para el trabajo y una personal o te compraste una máquina nueva y quieres todo tu entorno de desarrollo de VSCode sin tener que estar buscando qué extensiones o temas tenías inatalador e instalar una por una 😫... pues hoy te voy a mostrar 2 formas en que puedes sincronizar VSCode en múltiples máquinas.

# 1. Creando un repositorio de GitHub

> Asegúrate de tener [instalado el comando code](/instalar-comando-code-vscode).

## Obteniendo la lista de extensiones de VSCode

En tu terminar escribe el siguiente comando:

```bash
# UNIX:
code --list-extensions | xargs -L 1 echo code --install-extension

# Windows (PowerShell, e. g. using VSCode's integrated Terminal):
code --list-extensions | % { "code --install-extension $_" }
```

Cuya salida será algo así

```terminal
code --install-extension 2gua.rainbow-brackets
code --install-extension DanielThielking.aws-cloudformation-yaml
code --install-extension aaron-bond.better-comments
code --install-extension adamwalzer.scss-lint
code --install-extension ahmadawais.shades-of-purple
...
```

Esa salida podemos guardarla en un bashero, por ejemplo `vscode-extension-list.sh`, de la siguiente manera:

```bash
code --list-extensions | xargs -L 1 echo code --install-extension > vscode-extension-list.sh
```

A continuación le damos permisos de ejecución:

```bash
chmod +x vscode-extension-list.sh
```

Luego subimos este archivo a nuestro [repositorio de GitHub](https://help.github.com/es/github/getting-started-with-github/create-a-repo).

## Cómo instalar la lista de extensiones en una nueva máquina

[Clonamos el repositorio](https://help.github.com/es/enterprise/2.18/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository) que creamos anteriormente en la máquina donde queremos instalar nuestras extensiones de VSCode y ejecutamos el siguiente comando:

```bash
# UNIX
./vscode-extension-list.sh
```

# 2. La extensión Settings Sync

Esta extensión es exactamente lo que dice su descripción de [GitHub](https://github.com/shanalikhan/code-settings-sync): una herramienta que puede sincronizar la configuración de VSCode en todas las máquinas que desee y de la mano de GitHub lo hace posible.

Y sincroniza todo:

- Archivo de configuración
- Archivo de shortcuts and keymaps
- Carpeta de snippets
- Extensiones VSCode y configuraciones de las extensiones
- Carpeta de espacios de trabajo

## Instalar la extensión

Instálala desde [aquí](vscode:extension/Shan.code-settings-sync) o búscala en el marketplace

![Settings Sync](https://i.imgur.com/WFXCbrs.png)

## Obteniendo el GitHub token

En GitHub ve a: [Settings / Developer settings / Personal access tokens / Generate new token](https://github.com/settings/tokens/new) (ver captura de pantalla a continuación).

![Generate new token in GitHub](https://i.imgur.com/APYvJ8m.png)

![Generate new token in GitHub](https://i.imgur.com/GAAUUsr.png)

Después de generar su nuevo token, copie el hash (en la imagen es la línea negra) del token y guárdalo en un lugar seguro porque nunca más podrás acceder a esta cadena en el futuro.

## Sube tu configuración de VSCode

![Settings Sync upload](https://i.imgur.com/xgXnKDU.png)

De regreso en VSCode, abre la paleta de comandos con <kbd>command</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>, tipea `sync:` y escoge la opción `Sync: Update/Upload Settings`. Se te pedirá agregar el token de GitHub que acaba de copiar.

Ahora que ingresaste el token, todas las configuraciones actuales de VSCode se subirán a un gist de GitHub, y el terminal OUTPUT en VSCode mostrará un mensaje similar a la captura de pantalla a continuación.

```terminal
CODE SETTINGS SYNC UPLOAD SUMMARY
Version: 3.4.3
--------------------
GitHub Token: f699**********
GitHub Gist: 389263be0b040d3f4a5f0ca39*******
GitHub Gist Type: Secret

Restarting Visual Studio Code may be required to apply color and file icon theme.
--------------------
Files Uploaded:
  extensions.json > extensions.json
  keybindings.json > keybindingsMac.json
  settings.json > settings.json

Extensions Ignored:
  No extensions ignored.

Extensions Removed:
  No extensions removed.

Extensions Added:
  a-touch-of-lilac-theme v1.1.0
  auto-close-tag v0.5.6
  auto-dark-mode v0.1.7
  auto-rename-tag v0.1.1
  aws-cloudformation-yaml v0.2.2
  better-comments v2.0.5
  change-case v1.0.0
  code-settings-sync v3.4.3
  ...
  ...
--------------------
Done.
```

Puedes ver que mis archivos de configuración y la configuración de las extensiones se subieron junto con todas las extensiones que estoy usando actualmente en mi VSCode.

## Descarga tu configuración de VSCode

Abrimos nuevamente la paleta de comandos y tipeamos `Sync: Download Settings`, te pedirá el token generado anteriormente, lo ingresamos. A continuación te pedirá el ID del Gist generado cuando subiste tu configuración. ¿Cómo lo obtienes? Pues entrando a gist.github.com/<tu-usuario> o copiándolo de la salida de la terminal OUTPUT en VSCode cuando subiste tu configuración:

```terminal
GitHub Gist: 389263be0b040d3f4a5f0ca39*******
```

> Esto mismo harás después de instalar VSCode y Settings Sync en tu nueva máquina.

¡Ya terminamos! En este punto, es posible que deba cerrar el editor VSCode por completo y volver a abrirlo para que todos los cambios surtan efecto, pero eso debería ser todo.

## Última recomendación

Te recomiendo que agregues estas opciones en tus settings:

```json
{
  "sync.autoDownload": true,
  "sync.autoUpload": true
}
```

Para que no tengas que estar actualizando manualmente el gist 😉

---

Gracias por leer, espero que esto te haya ayudado y si fue así ¡Compartelo con tus amig@s! ✌️😁
