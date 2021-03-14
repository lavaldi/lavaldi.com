---
title: Descargar videos de Frontend Masters
date: 2018-05-19
categories:
  - Code
tags:
  - Frontend Masters
banner: "https://i.imgur.com/A8CMAQX.jpg"
template: post
slug: descargar-curso-frontend-masters
---

> Para este tutorial se requiere que tengas una cuenta en [Frontend Masters](https://frontendmasters.com). Puedes tener una cuenta free (para los cursos gratuitos) o suscribirte por 39USD al mes (para obtener acceso a todos los cursos).

Existe un repo en Gitlab llamado [OS_FrontendMaster-dl](https://gitlab.com/nzsakib/frontendmasters) que sirve para descargar los videos. En el mismo repositorio se describe cómo usar el paquete, pero a mi no me ha funcionado, por eso voy a mostrarte la forma en que sí me funcionó.

## Requerimientos

- Python 2.7
- Google Chrome
- ChromeDriver - WebDriver for Chrome
- Descargar el siguiente repositorio https://gitlab.com/nzsakib/frontendmasters

### Instalar ChromeDriver

La última versión de Chrome webdriver se puede encontrar en el siguiente enlace y la instrucción de instalación también se puede encontrar en la misma página.

https://sites.google.com/a/chromium.org/chromedriver/downloads

Para macOS puedes instalarlo de la siguiente manera sin necesidad de [cambiar el `PATH` manualmente](https://lavaldi.com/cambiar-varieble-entorno-path/):

```bash
brew tap caskroom/cask
brew cask install chromedriver
```

## Instalar dependencias de Python

Ingresa a la carpeta del repositorio

```bash
cd OS_FrontendMaster-dl
```

y ejecuta:

```bash
pip install -r requirements.txt --user
```

El flag `--user` es importante, a mi no me funcionó sin eso.

> Nota: Si no tienes `pip` instálalo usando esta guía para macOS https://lavaldi.com/instalar-pip-mac-os-python/ o aquí https://pip.pypa.io/en/stable/installing/

Si sale un error sobre los paquetes `nose` y `tornado` solo basta con instalarlos así

```bash
sudo easy_install nose
sudo easy_install tornado
```

## Uso

Luego solo tienes que ejecutar la siguiente línea:

```bash
python frontendmasters-dl.py --id YOUR-USERNAME --password YOUR-PASSWORD --course COURSE-ID
```

> Nota: A mi no me funcionó la descarga usando los flags `--mute-audio --high-resolution` por eso no los uso en el comando de arriba

También puedes usarlo así

```bash
python frontendmasters-dl.py
```

E ir llenando los datos que te pida

La ruta de descarga predeterminada es `./Download` dentro del directorio del repositorio.

Así puedes ver tus cursos cuando quieras, incluso si se te venció la suscripción o finalizó la fecha para los cursos gratuitos temporales; además, sin tener internet 😉
