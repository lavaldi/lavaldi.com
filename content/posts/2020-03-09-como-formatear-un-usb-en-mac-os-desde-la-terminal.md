---
title: 'Cómo formatear en macOS desde la terminal'
date: 2020-03-09
categories:
  - Code
tags:
  - macOS
  - terminal
  - format
template: post
slug: 'como-formatear-en-mac-os-desde-la-terminal'
---

El año pasado formatié un USB que tenía desde mi Macbook debido a que quería poner ahí unos videos para poder verlos desde la TV. Aquella vez utilicé la aplicación Disk Utility que viene en el sistema operativo y lo hice utilizando el formato MS-DOS(FAT) que se supone sería compatible para la TV así como para usarlo desde el sistema operativo Windows... pues no funcionó, luego usé la opción ExFAT (que se supone también es compatible) y tampoco funcionó 😞 así que dejé ese USB en el olvido...

Hoy volví a encontrar dicho USB y me prepuse formatearlo, como el Disk Utility no me funcionó (porque volví a probar con los formatos antes mencionados) realicé una búsqueda a ver si desde la terminal se podía hacer. Después de una ardua búsqueda en Google de cómo ponerle al USB el formato FAT32 (que no viene en el listado del Disk Utility) al fin di con la solución, la cual escribo a continuación 😉

## Disk utility desde la terminal

El primer paso es usar el comando

```
diskutil list
```

que muestra los detalles de formato de todos los discos duros y dispositivos conectados. Te mostrará algo así

```
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *251.0 GB   disk0
   1:                        EFI EFI                     314.6 MB   disk0s1
   2:                 Apple_APFS Container disk1         250.7 GB   disk0s2

/dev/disk1 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +250.7 GB   disk1
                                 Physical Store disk0s2
   1:                APFS Volume Macintosh HD - Data     220.1 GB   disk1s1
   2:                APFS Volume Preboot                 83.5 MB    disk1s2
   3:                APFS Volume Recovery                526.6 MB   disk1s3
   4:                APFS Volume VM                      5.4 GB     disk1s4
   5:                APFS Volume Macintosh HD            11.0 GB    disk1s5

...

/dev/disk5 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *8.0 GB     disk5
   1:       Microsoft Basic Data LAVALDI                 8.0 GB     disk5s1

```

> Aquí notar que en lugar de
>
> - GUID_partition_scheme debería ser FDisk_partition_scheme
> - "Microsoft Basic Data" debería ser DOS_FAT_32
>
> El uso del Disk Utility no lo cambia a DOS_FAT_32. <br>
> Si bien las memorias pueden ser leídas desde macOS no le pueden leer desde la TV o desde Windows.

Luego debermos ejecutar:

```
sudo diskutil eraseDisk FAT32 LAVALDI MBRFormat /dev/disk5
```

`FAT32` es el formato, `LAVALDI` es el nombre del disco, MBRFormat significa ["Master Boot Record"](https://es.wikipedia.org/wiki/Registro_de_arranque_principal), y `/dev/disk5` es el identificador del dispositivo en el sistema. El identificador `/dev/disk5` es importante para evitar formatear la unidad equivocada.

Tendremos este resultado:

```
Started erase on disk5
Unmounting disk
Creating the partition map
Waiting for partitions to activate
Formatting disk5s1 as MS-DOS (FAT32) with name LAVALDI
512 bytes per physical sector
/dev/rdisk5s1: 15597784 sectors in 1949723 FAT32 clusters (4096 bytes/cluster)
bps=512 spc=8 res=32 nft=2 mid=0xf8 spt=32 hds=255 hid=2048 drv=0x80 bsec=15628288 bspf=15233 rdcl=2 infs=1 bkbs=6
Mounting disk
Finished erase on disk5
```

Entonces la sintáxis básica es:

```
diskutil eraseDisk FILE_SYSTEM DISK_NAME DISK_IDENTIFIER
```

No sé si en el futuro vayan a mejorar estos aspectos en el Disk Utility pero por ahora prefiero usar la terminal.

Si quieres saber más sobre `diskutil` puedes utilizar el comando

```
man diskutil
```

Y buscar `eraseDisk`. O revisar este enlace https://ss64.com/osx/diskutil.html
