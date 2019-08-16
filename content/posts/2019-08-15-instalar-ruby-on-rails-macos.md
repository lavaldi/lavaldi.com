---
title: "Instalar Ruby on Rails en MacOS"
date: 2019-08-15
categories:
  - Code
tags:
  - macOS
  - ruby
  - ruby on rails
  - rbenv
template: post
thumbnail: '../thumbnails/rails.png'
slug: instalar-ruby-on-rails-macos
---

En este tutorial configuraremos un entorno de desarrollo Ruby on Rails en macOS 10.14 Mojave.

## Instalando Homebrew

Lo primero que debemos tener instalado Homebrew, lo cual ya explicamos anteriormente [aquí](/syntax-highlighting-nano/#instalar-homebrew)

## Instalando Ruby

Ahora que tenemos instalado Homebrew, podemos usarlo para instalar Ruby.

Vamos a usar [rbenv](https://github.com/sstephenson/rbenv) para instalar y administrar nuestras versiones de Ruby.

Para hacer esto, ejecuta los siguientes comandos en tu Terminal:

```bash
brew install rbenv ruby-build

# Agrega rbenv a bash para que se cargue cada vez que abra una terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile

# O si tienes zsh
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.zshrc
source ~/.zshrc

# Instalar Ruby
rbenv install 2.6.3
rbenv global 2.6.3
ruby -v
```

## Instalando Rails

Instalar Rails es tan simple como ejecutar el siguiente comando en la Terminal:

```bash
gem install rails -v 6.0.0.rc1
```

Rails ahora está instalado, pero para que podamos usar el ejecutable de rails, necesitamos decirle a rbenv que lo vea:

```bash
rbenv rehash
```

Y ahora podemos verificar que Rails está instalado:

```bash
rails -v
# Rails 6.0.0.rc1
```

## Configurar una base de datos

Vamos a instalar sqlite3 desde homebrew porque no podemos usar la versión integrada con macOS sin tener algunos problemas.

```bash
brew install sqlite3
```

Rails usa sqlite3 como la base de datos predeterminada. Lo más probable es que no quierasusarlo porque está almacenado como un archivo simple en el disco. Probablemente quieras algo más robusto como MySQL o PostgreSQL.

Hay mucha documentación sobre ambos, por lo que puede elegir uno con el que se sienta más cómodo. Si viene de PHP, es posible que ya esté familiarizado con MySQL. Si eres nuevo en las bases de datos, te sugiero que saltes a [configurar PostgreSQL](#postgresql).

### MySQL

Puedes instalar el servidor [MySQL](http://www.mysql.com/) y el cliente desde Homebrew:

```bash
brew install mysql
```

Una vez que este comando haya terminado, le da un par de comandos para ejecutar. Siga las instrucciones y ejecútelas:

```bash
# mysql se ejecutará al iniciar sesión:
brew services start mysql
```

Por defecto, el usuario mysql es `root` sin contraseña. Cuando haya terminado, puede saltar a los [Pasos finales](#pasos-finales).

### PostgreSQL

Puedes instalar el servidor y el cliente de [PostgreSQL](http://www.postgresql.org/) desde Homebrew:

```bash
brew install postgresql
```

Una vez que este comando haya terminado, le da un par de comandos para ejecutar. Siga las instrucciones y ejecútelas:

```bash
# postgresql se ejecutará al iniciar sesión:
brew services start postgresql
```

Por defecto, el usuario postgresql es su nombre de usuario OS X actual sin contraseña. Por ejemplo, mi usuario de OS X es `lavaldi`, por lo que puedo iniciar sesión en postgresql con ese nombre de usuario.

## Pasos finales

Mojave cambió la ubicación de los archivos de encabezado necesarios para compilar extensiones C. Es posible que debas ejecutar el siguiente comando para instalar pg u otras gemas que requieren extensiones C:

```bash
sudo installer -pkg /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg -target /
```

Y ahora, el momento de la verdad. Creemos su primera aplicación Rails:

```bash
rails new myapp

#### Si usas MySQL
rails new myapp -d mysql

#### Si usas Postgres
# Ten en cuenta que deberás cambiar el nombre de usuario en config/database.yml para que sea
# el mismo que su cuenta de usuario OSX. (por ejemplo, el mío es 'lavaldi')
rails new myapp -d postgresql

# Ingresa al directorio de la aplicación
cd myapp

# Si configura MySQL o Postgres con un nombre de usuario/contraseña, modifique el
# archivo config/database.yml para que contenga el nombre de usuario/contraseña que especificó

# Crear la BD
rake db:create

rails server
```

¡Ahora puedes ir a http://localhost:3000 para ver tu nuevo sitio web!

Ahora que tienes la configuración de tu máquina, es hora de comenzar a construir algunas aplicaciones Rails.

Si recibiste un error que decía `Access denied for user 'root'@'localhost' (using password: NO)`, entonces necesitas actualizar el archivo `config/database.yml` para que coincida con el nombre de usuario y la contraseña de la base de datos 😉