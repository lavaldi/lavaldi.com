---
title: Cómo editar el hosts file en macOS
date: 2018-02-22
categories:
  - Code
tags:
  - macOS
  - High Sierra
  - hosts
background: "https://i.imgur.com/A8CMAQX.jpg"
template: post
thumbnail: '../thumbnails/apple.png'
slug: editar-mac-host
---

Abre la terminal y escribe el siguiente comando:

```bash
sudo nano /etc/hosts
```

Ingresa tu password y luego <kbd>Enter</kbd>.

Normalmente se debe abrir el editor `Nano`, y se debe ver algo así:

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```

Ingresa la IP y el dominio que deseas. Por ejemplo:

```bash
127.0.0.1       local.miproyecto.com
```

Una vez que hayas terminado de configurar, manten presionadas las teclas <kbd>Control</kbd> + <kbd>o</kbd> juntas para guardar el archivo y luego presione la tecla <kbd>Control</kbd> + <kbd>x</kbd> al mismo tiempo para salir.

Luego corre el siguiente comando:

```bash
sudo killall -HUP mDNSResponder
```

Este comando es para eliminar la información de caché de DNS de la Mac para que no se confunda con los cambios realizados en el archivo de hosts.

Y eso es todo! 😉
