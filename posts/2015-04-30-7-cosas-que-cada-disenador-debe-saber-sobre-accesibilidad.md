---
title: 7 cosas que cada diseñador debe saber sobre Accesibilidad
date: 2015-04-30 17:08:49.000000000 -05:00
category: code
tag: [accesibilidad, discapacitados, diseño]
---
Accesibilidad permite a las personas con discapacidad puedan percibir, entender, navegar, interactuar y contribuir a la web. Imagina un mundo donde los desarrolladores saben todo lo que hay que saber acerca de la accesibilidad. Se diseña y se construye ... perfectamente! En este mundo, sólo el propio diseño puede hacer que las personas con discapacidad tienen problemas para usar un producto.

Estas directrices cubrirán las principales cosas que hay que saber para que sus productos sean "design-ready" para cumplir con el mínimo de normas en [la Sección 508](http://www.section508.gov/section-508-standards-guide) y la [Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/WCAG20/). El resto será para el desarrollo y las pruebas de calidad.

## 1. La accesibilidad no es una barrera para la innovación. #

La accesibilidad no te obligará a hacer un producto que es feo, aburrido o desordenado. Te introducirá en un conjunto de restricciones para incorporar al considerar tu diseño. Estas restricciones de diseño te darán nuevas ideas para explorar que darán lugar a mejores productos para todos sus usuarios.

Al leer estas directrices, ten en cuenta que nosotros no queremos diseñar para nuestros compañeros de diseño.

Diseña para el conjunto diverso de usuarios que van a interactuar con tus productos.

![Diseño para todos]({{ site.baseurl }}/assets/design-for-all.jpg 'Diseño para todos')
{:.center}

Esto puede incluir a las personas que son ciegos, ceguera al color o tienen baja visión, los que son sordos o tienen dificultades de audición, las personas con problemas de movilidad que pueden ser temporales o permanentes, o personas con discapacidades cognitivas. Diseña para las personas que son jóvenes, viejos, los usuarios avanzados, los usuarios ocasionales, y los que simplemente disfrutar de una experiencia de calidad.

Abrazo estas pautas de accesibilidad como lo haría con cualquier conjunto de restricciones de diseño. Ellos son parte del desafío de crear productos sorprendentes.

## 2. No utilices el color como el único medio de transmisión de información visual. #

Esto ayuda a los usuarios que no pueden, o que tienen dificultad con distinguir un color de otro. Esto incluye a las personas que son ciegas al color (1 de cada 12 hombres, 1 de cada 200 mujeres), con baja visión (1 de cada 30 personas), o son ciegos (1 de cada 188 personas).

> Usa de colores para resaltar o complementar lo que ya es visible.

En este ejemplo que se muestra en escala de grises, ¿cuántos campos dirías que se encuentran en un estado de error?

![¿Cuántos campos se encuentran en un estado de error?]({{ site.baseurl }}/assets/error-state.png '¿Cuántos campos se encuentran en un estado de error?')
*¿Cuántos campos se encuentran en un estado de error?*
{:.center}

La mayoría que ve esto en escala de grises dicen que la respuesta es una, el campo "verificación humana". Eso es porque el triángulo con el signo de exclamación en el interior indica que algo anda mal.

Ahora mira esta misma pantalla en color. ¿Cuántos campos se encuentran en un estado de error?

![Encender el color revela una historia totalmente diferente.]({{ site.baseurl }}/assets/play-color.png 'Encender el color revela una historia totalmente diferente.')
*Encender el color revela una historia totalmente diferente.*
{:.center}

Con el color la respuesta se convierte en, "los cuatro".

Hay muchas maneras aceptables para hacer esta forma visualmente accesible. Podrías poner el icono de triángulo rojo en todos los campos de error. Podrías utilizar el texto para indicar y explicar por qué un determinado campo está en error. Podrías utilizar tooltips, bordes gruesos, texto en negrita, subrayados, cursivas, etc. Las opciones son infinitas, pero la única regla es usar algo más que el color.

¿Cómo diseñar este formulario de registro para que el color no sea el único medio visual de mostrar un campo con un error?

*(Resulta que el problema de accesibilidad que se ha descrito anteriormente en el ejemplo PayPal es causada por el plugin LastPass en mi navegador. Gracias a Tony Amidei de PayPal por señalar esto. Como está diseñado, los iconos de triángulo siempre aparecen en los campos en un estado de error.)*

## 3. Asegurar suficiente contraste entre el texto y el fondo. #

De acuerdo con la [WCAG](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), la relación de contraste entre el texto y el fondo de un texto debe ser de al menos 4,5 a 1. Si la fuente es de al menos 24 px o 19 px en negrita, el mínimo se reduce de 3 a 1.

Esta guía ayuda a los usuarios con baja visión, ceguera al color, o empeoramiento de la visión a ver y leer el texto en la pantalla.

Esto significa que cuando el texto es de 24 px, 19 px negrita, o más grande, el gris más claro que se puede utilizar en un fondo blanco es <span style="color:white;background:#959595;">#959595</span>.

![Color de texto #959595 sobre un fondo blanco.]({{ site.baseurl }}/assets/change-color-959595.png 'Color de texto #959595 sobre un fondo blanco.')
*Color de texto #959595 sobre un fondo blanco.*
{:.center}

Para ver el texto más pequeño, el gris más claro se puede utilizar en un fondo blanco es <span style="color:white;background:#767676;">#767676</span>. Si tienes un fondo gris, el texto debe ser más oscuro.

![Color de texto #767676 sobre un fondo blanco]({{ site.baseurl }}/assets/color-767676-above-white.png 'Color de texto #767676 sobre un fondo blanco')
*Color de texto #767676 sobre un fondo blanco.*
{:.center}

Hay algunas grandes herramientas que pueden ayudar a encontrar una paleta de colores accesibles para tus diseños, incluyendo [Color Safe](http://colorsafe.co/). Existe también un [verificador de contraste de color de WebAIM](http://webaim.org/resources/contrastchecker/), que te permite probar los colores que ya has elegido.

Los logos o elementos actualmente en un estado deshabilitado están exentos de esta norma. Esto incluye botones inactivos o elementos de menú. El placeholder o el texto fantasma de campos de formulario no están exentos de esta norma.

He aquí un ejemplo de un sitio de blogs popular con contraste de texto que está por debajo de los estándares. Sólo el contraste de la letra gigante "M" cumple con las normas.

![Contraste de texto por debajo de los estándares]({{ site.baseurl }}/assets/contrast-text-below-standards.png 'Contraste de texto por debajo de los estándares')
El siguiente ejemplo de la BBC muestra una interfaz de usuario con el paso de combinaciones de colores. Se puede decir que están buscando activamente para aprobar relaciones de contraste, ya que su gris más claro es <span style="color:white;background:#767676;">#767676</span>.

![Un ejemplo de uso de contraste de color.]({{ site.baseurl }}/assets/contrast-color-example.png 'Un ejemplo de uso de contraste de color.')
*Un ejemplo de uso de contraste de color.*
{:.center}

Explora usando combinaciones de alto contraste. Los diseñadores que han pasado por este ejercicio a menudo son sorprendidos por lo mucho que prefieren diseños con mayor contraste. Estoy seguro de que usted también encontrará que el texto se visualiza mejor utilizando el contraste mínimo permitido no en detrimento de sus productos.

Echa un vistazo a [Proyectors Don't Lie](https://medium.com/salesforce-ux/projectors-dont-lie-b85ef628b04) y a [Accessible Interface Design](https://medium.com/salesforce-ux/accessible-interface-design-d80e95cbb2c1) para más información sobre el contraste de colores.

## 4. Proporcionar indicación del enfoque visual para el foco del teclado. #

Tomemos un momento para dar gracias por la hoja de estilos de reset. Sin hojas de estilo de reinicio, sería mucho más difícil crear una experiencia consistente a través de diferentes dispositivos y navegadores.

Ahora vamos a tomar un momento para culpar a las hojas de estilo de reset por jugar un papel en uno de los errores de accesibilidad más difundidos en Internet.

~~~ css
:focus {outline: 0;}
~~~

Esta sola línea de CSS hace que sea casi imposible para un usuario utilizar un sitio web con sólo un teclado. Afortunadamente, muchos de los más populares, incluyendo el de Eric Meyer, se han actualizado eliminando el no-estilo de la pseudo clase :focus.

La intención :focus era lo suficientemente noble: quitar estilos de enfoque por defecto con la intención de que los diseñadores y desarrolladores lo reemplazaran con algo que sea visible y que coincida con el estilo de sus páginas web. Es bastante fácil que no les gustara el borde gris para el focus en IE y Firefox o el halo azul en Chrome.

![Por defecto para el estado focus para Chrome y Firefox]({{ site.baseurl }}/assets/focus-chrome-firefox.png 'Por defecto para el estado focus para Chrome y Firefox')
*Por defecto para el estado focus para Chrome y Firefox*
{:.center}

El problema es que la mayoría de los sitios web no crean sus propios estilos de enfoque. Estos indicadores de enfoque, que son fundamentales para el éxito de los usuarios que usan solo teclado, son en gran medida ausentes en la web.

Como ejercicio rápido de experimentar un sitio web que no siempre proporciona una visualización del enfoque, abre una pestaña y visita el sitio web de la empresa que hace que tu teléfono móvil. Presione la tecla TAB varias veces para navegar a través de la página. ¿Ves un indicador visual de como navegar? Tal vez lo ves para algunos enlaces en la página, pero no todas. Considera el efecto que esto tiene sobre alguien que sólo utiliza un teclado para interactuar con la web.

Si quitas el enfoque predeterminado, reemplazarlo con algo que es *mejor* de lo que proporciona tu navegador.

En el siguiente ejemplo, la BBC utiliza una barra de color para indicar que la sección de enlace está en foco.

![]({{ site.baseurl }}/assets/colorbar-bbc.png)

Twitter utiliza una combinación de enfoque predeterminado y un texto de ayuda para mostrar el teclado. El icono también va de gris a verde. Eso es tres visualizaciones separadas para indicar el foco para los usuarios de teclado.

![]({{ site.baseurl }}/assets/focus-twitter.png)

Al proporcionar tus propios estados de enfoque, sólo asegúrate de quitar el estado predeterminado de modo que no obtengas algo parecido a este ejemplo donde rectángulo azul de Chrome se superpone píldora azul de este menú.

![]({{ site.baseurl }}/assets/overlay-focus.png)

## 5. Tenga cuidado con los formularios. #

En los últimos años hemos experimentado un involución en los campos del formulario. Diseños modernos han renunciado a la tradicional identificación de atributos y affordances interactivos en favor de un enfoque más minimalista. Los formularios de hoy carecen de dos elementos específicos que son vitales para la accesibilidad: bordes claramente definidos y labels visibles.

### Formularios sin Bordes #

A continuación se muestra un ejemplo de una entrada de texto tradicional. Es un rectángulo con un límite definido. Puede ser lleno de color, pero no tiene que ser llenado. También hay un label visible, que en este ejemplo se encuentra a la izquierda del campo.

![]({{ site.baseurl }}/assets/defined-borders.png)

Bordes claramente definidos para los campos del formulario son importantes para los usuarios con problemas de movilidad y las personas con discapacidades cognitivas. Conocer la ubicación y el tamaño del objetivo del clic es importante para las personas que utilizan un dispositivo de puntero estándar o adaptativo. Los usuarios con discapacidades cognitivas pueden tener dificultad para encontrar e interactuar con los campos sin señales visuales comunes.

A continuación se muestra un ejemplo de un campo de búsqueda de una aplicación popular para tomar notas.

![¿Dónde puedo hacer clic si quiero ingresar un término de búsqueda? El cursor se retiró para dar énfasis.]({{ site.baseurl }}/assets/borderless-input.png '¿Dónde puedo hacer clic si quiero ingresar un término de búsqueda? El cursor se retiró para dar énfasis.')
*¿Dónde puedo hacer clic si quiero ingresar un término de búsqueda? El cursor se retiró para dar énfasis.*
{:.center}

Sólo hay una entrada en esta pantalla. ¿Puedes adivinar de los bordes del campo de formulario? Al hacer clic en cualquier lugar de las palabras "search notes" se colocará en el interior de la entrada.

He aquí otro ejemplo de campos de formulario sin bordes de una plataforma de blogs populares. A continuación hay dos campos de entrada en la página. ¿Dónde puedo hacer clic con el fin de entrar en el área de texto "Cuenta tu historia ..."?

![]({{ site.baseurl }}/assets/borderless-form.png)

Esta es la misma imagen de pantalla con un rectángulo azul añadido para mostrar los límites del área de texto. Si hace clic en cualquier lugar por debajo de esta región, no pasa nada.

![]({{ site.baseurl }}/assets/borderless-form-2.png)

A continuación se muestra otro ejemplo de un diseño de toma de notas. Esto tampoco utiliza una visualización de entrada tradicional, pero ofrece a los usuarios con discapacidades más información. El título de la nota va entre las dos líneas horizontales y, el usuario puede hacer clic en cualquier lugar entre las dos líneas de fondo para empezar a escribir su nota.

![]({{ site.baseurl }}/assets/notetaking.png)

¿Puedes pensar en algunas otras opciones para estos diseñadores? ¿Cómo diseñar una toma de notas o aplicación de publicación de blogs?

### Formularios sin labels #

Los labels le dicen al usuario el propósito del campo, mantienen su utilidad cuando el foco se coloca dentro del campo y permanecen incluso después de completar el campo. El texto de placeholder es un pobre sustituto de una etiqueta visual.

Por lo general son de bajo contraste. De los siete ejemplos a continuación, sólo uno tiene suficiente contraste para satisfacer nuestra proporción necesaria de 4,5 : 1.

![Sólo el placeholder de "Search Twitter" tiene el nivel de contraste mínimo requerido.]({{ site.baseurl }}/assets/search-twitter.png)
*Sólo el placeholder de "Search Twitter" tiene el nivel de contraste mínimo requerido.*
{:.center}

El texto de placeholder desaparece. En los siguientes ejemplos, ¿qué se supone que voy a ingresar en el campo de texto? Para el ejemplo de JetBlue ¿debo introducir mi nombre de usuario, mi dirección de correo electrónico, o mi número de TrueBlue? Para el ejemplo Caviar, ¿debería "Empezar" escribiendo en mi comida favorita, un restaurante preferido, o mi dirección? ¿Son los campos de precios para los valores mínimo y máximo, por encima y debajo, o antes y después?

![]({{ site.baseurl }}/assets/input-without-placeholder.png)

Aquí está una manera más accesible de diseñar el campo compuesto precio que se muestra arriba. Vamos a ver las etiquetas, mínimo y máximo, incluso después de que rellene los campos.

![]({{ site.baseurl }}/assets/price-field-compound.png)

## 6. Evita la crisis de identidad de componentes. #

*Q: ¿Cuándo un menú ya no es un menú?
R: Cuando se trata de un diálogo no modal.*

Esta pregunta está en el centro de los mayores problemas de accesibilidad Web de hoy en día. Para entender esto totalmente, considera las [Prácticas de creación para patrones de diseño de la W3C](http://www.w3.org/TR/wai-aria-practices/#aria_ex). Esta es la guía de cómo construir una versión accesible de muchos de los patrones de diseño comunes de hoy en día, incluyendo menús, modales, autocompletado, árboles, tabsets, y muchos otros.

Cada uno de estos patrones tienen un conjunto específico de la semántica HTML esperado, los comportamientos de teclado y el uso del atributo [ARIA](http://www.w3.org/WAI/intro/aria.php). Estos atributos ARIA instruyen a los usuarios de lectores de pantalla en la forma de interactuar con un componente cuando se utiliza el teclado.También proporcionan actualizaciones de estado mientras el usuario está interactuando con un componente. Por ejemplo, instruyen personas que interactúan con un menú para utilizar las teclas de flecha para moverse hacia arriba y abajo en la lista.

Conoce al humilde autocompletar.

![]({{ site.baseurl }}/assets/autocomplete.png)

Aquí es lo mismo, pero con iconos junto a cada elemento de la lista.

![En este autocompletar, se utilizan iconos para el objeto de desambiguación.]({{ site.baseurl }}/assets/autocomplete-2.png)
*En este autocompletar, se utilizan iconos para el objeto de desambiguación.*
{:.center}

Estos son esencialmente el mismo patrón exacto de interfaz de usuario. El usuario escribe en un campo de entrada. Un cuadro de resultados filtrados en el texto introducido aparece a continuación. El usuario puede utilizar las teclas de flecha o el mouse para localizar y seleccionar un elemento de la lista.

El siguiente ejemplo es una función de autocompletar con una crisis de identidad. No sólo se puede filtrar y seleccionar un elemento de una lista por el usuario, se puede optar por editar o eliminar cada elemento de la lista haciendo clic en el icono del lápiz o el bote de basura. La adición de estos dos botones es lo que le da a este autocompletado una crisis de identidad.

![]({{ site.baseurl }}/assets/autocomplete-3.png)
*Un autocompletar con un conjunto de características ocultas que no pueden ser comunicada a la tecnología asistencial a través de técnicas estándar.*
{:.center}

Esto causa problemas de accesibilidad, en parte, porque rompe el formulario con el modelo de interacción de teclado estándar para un autocompletado. En la tecnología de asistencia no siempre se puede comunicar la identidad, la operación, y el estado de los componentes confusos, ya que WAI de la W3C no ha definido una especificación para la comunicación de este tipo de interfaz de usuario.

La misma regla es válida para los menús. En los siguientes ejemplos de Virgin America, mientras tienen una visualización muy similar, sólo el menú desplegable de la derecha es un "menú" real. El de la izquierda es un cuadro de diálogo no modal.

![]({{ site.baseurl }}/assets/dropdown-menu.png)
*El "From" es un menú desplegable. El desplegable "Guests" es un cuadro de diálogo no modal como se define por la WAI de la W3C.*

Un menú es un widget que ofrece al usuario una lista de opciones. Tan pronto como nos ofrecemos múltiples opciones por fila, como el ejemplo de la izquierda lo hace, ya no tenemos un menú. Esto cambia el modelo de interacción de teclado con teclas de flecha, a la utilización de la tecla de tabulación. Cambia cómo se maneja el foco del teclado y a dónde va una vez que la lista desplegable se ha cerrado.

Al contrario que en el ejemplo anterior con completado automático, los cuadros de diálogo no modales, afortunadamente, pueden ser accesibles. Conoce acerca de la diferencia entre ellos y el efecto que tiene sobre la experiencia del usuario. Comprende cómo los cambios menores de diseño podrían dar lugar a cambios en el modelo de la interacción de un usuario. Esto te permitirá elegir el modelo adecuado para tu producto.

## 7. No hagas que la gente ronde por ahí para encontrar cosas. #

Este principio sirve principalmente a personas con discapacidad motriz. Esto incluye a los usuarios de solo teclado que tienen visión, y los que usan herramientas de reconocimiento de voz como [Dragon NaturallySpeaking](http://www.nuance.com/dragon/index.htm) para interactuar con páginas web. Usuarios de teclado y tecnologías de apoyo como Dragon se basan en elementos accionables visibles en la pantalla. Si un enlace o botón no puede ser visto por Dragon, quiere decir que no puede ser "clicado" verbalmente. Si un usuario de sólo teclado no puede ver que existe un botón en una página, ¿cómo podemos esperar que ellos naveguen en el espacio vacío en el que en última instancia aparecerá?

A continuación se muestra una captura de pantalla de Gmail con Dragon Naturally Speaking mostrando una superposición con hipervínculos identificados por números. El usuario puede ahora hablar un número en voz alta y activar un enlace. ¿Qué sucede si un enlace no es visible hasta que una región ponga sobre ella? Tendríamos números que se muestran junto a los espacios vacíos.

![]({{ site.baseurl }}/assets/hyperlink-by-number.png)
*Dragon identifica hipervínculos por número. Diga el número en voz alta para hacer clic en un enlace.*
{:.center}

Entiendo cómo esta práctica de ocultar elementos procesables bajo estados de hover ganó popularidad. Sirve como una solución a la heurística de usabilidad bien establecida que señaló Informático Alan Kay.

> "Simple things should be simple, complex things should be possible."
> — Alan Kay

*"Las cosas simples deben ser simples, cosas complejas deberían ser posible."*

Soy un firme creyente en esta heurística, pero debe aplicarse de una manera que hace que la complejidad sea la misma para todos los usuarios, incluidos aquellos con discapacidades. Por desgracia para la accesibilidad, muchos han tomado esto como lo siguiente, que no es una cita de Alan Kay:

> "Las cosas primarias deben ser visibles, las cosas secundarias que deseas mostrar ponlas en hover."

En lugar de ponerlas en hover, explora alternativas más incluyentes.

* Coloca las cosas secundarias dentro de los menús (o cuadros de diálogo no modales), sin necesidad de utilizar hover.
* Aligera el contraste de los iconos de las cosas secundarias y oscurécelos en hover.
* Utiliza elementos tangibles como triggers para hovers más largos. Un icono de información es un mejor trigger que un espacio en blanco para lanzar un hover lleno de contenido.

He aquí un ejemplo de LinkedIn. A continuación se muestra una captura de pantalla de una página de perfil.

![]({{ site.baseurl }}/assets/linkedin.png)

Esto es lo que sucede después de que hago hover con el mouse sobre la tarjeta del perfil.

![]({{ site.baseurl }}/assets/linkedin-2.png)

De repente hay indicios visuales de que pueda editar de forma individual muchos de los campos de esta página, incluyendo mi nombre, título, trabajos anteriores, la educación e incluso mi foto de perfil. Teniendo esto un paso más allá, cuando se realizar hover sobre mi título, el texto se vuelve azul indicando que estoy dispuesto a hacer clic.

![]({{ site.baseurl }}/assets/linkedin-3.png)

A continuación se muestra una solución a los problemas de accesibilidad que este diseño puede causar en ciertos grupos de usuarios. Tengo los lápices más pequeños que aparecen cerca de los campos. Ellos están siempre presentes.

![]({{ site.baseurl }}/assets/linkedin-4.png)

Cuando se realice hover sobre un campo, el texto se vuelve azul.

![]({{ site.baseurl }}/assets/hover-text-blue.png)

Cuando se presenta este tipo de solución, los diseñadores pueden responder preguntando:

> "Eso es un poco pesado, ¿no?"

Tal vez lo sea, pero es sólo una posible solución a este problema. Además, sólo aparece en mi propia página de perfil. ¿Cuánto tiempo puede uno pasar mirando su propio perfil de LinkedIn? ¿Es este nivel de "peso" de un comercio justo para la accesibilidad universal? ¿Qué otros affordances podemos proporcionar si no nos gusta este uso particular de los lápices?

He aquí otro ejemplo de Evernote. Esta es una vista de la lista de notas. Cuando el mouse del usuario se desplaza sobre una fila, aparecen cuatro iconos de acciones concretas.

![]({{ site.baseurl }}/assets/evernote.png)

Una posible solución sería la de mostrar siempre estos iconos. Podrían ser verde en las filas blancas y revertir en hover.

![]({{ site.baseurl }}/assets/evernote-2.png)

Esta solución también podría ser llamada "pesada", pero recuerda que no estamos diseñando para los diseñadores. Estamos diseñando para un conjunto diverso de usuarios con diferentes necesidades y diferentes tecnologías de acceso a las computadoras.

***

En la superficie puede parecer que la colocación de estos límites en el uso de componentes, los estados de hover, y el diseño visual limita tu creatividad. En todo caso, estas directrices empujan los límites de tu creatividad para encontrar diseños visualmente agradables que permiten el éxito en un conjunto más amplio de usuarios.

Con el enfoque correcto, encontrarás que cualquier desafío de diseño se puede cumplir de una manera que satisfaga las necesidades de sus ejecutivos, equipo de marketing, los seguidores de dribbble y todos sus usuarios, incluyendo aquellos con discapacidades.

***

*Artículo escrito por [Jesse Hausler](https://medium.com/@jessehausler) quien es un veterano del campo accesibilidad 12 años. Actualmente es el Especialista Principal en Accesibilidad Salesforce, donde ha estado durante cuatro años. Todas las imágenes han sido tomadas del artículo original, realizados por [Cordelia McGee-Tubb](https://twitter.com/cordeliadillon).*

***

*[Artículo original escrito en inglés](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b), publicado en Medium, y traducido por [@lavaldi_](https://twitter.com/lavaldi_)*
