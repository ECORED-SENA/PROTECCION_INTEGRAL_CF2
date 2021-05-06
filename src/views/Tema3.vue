<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Entornos protectores

    .crd_complete.mb-5 
      .row.justify-content-center.align-items-center
        .col-auto.me-5
          img(src="@/assets/componentes/infografia.svg", style="width:300px")
        .col
          .titulo-segundo.mb-4
            .h4 Infografía
          p.mb-4 En el siguiente enlace encontrará un recurso infográfico con la definición del concepto de entornos protectores, su relevancia y consolidación en la #[strong Política Nacional de Infancia y Adolescencia]. 

          a.boton.boton--b(:href="obtenerLink('downloads/infografias/infografia_definicion_entornos_protectores.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download  

    .hr--blank

    .titulo-segundo.mb-5
      #t_3_1.h4 3.1 Política Nacional de Infancia y Adolescencia

    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_01.svg", alt="Entornos protectores", style="width:350px;")

      .col-12.col-xl.mb-5.mb-xl-0
        p Para la consolidación de acciones desde la perspectiva de protección integral y entornos protectores se han establecido diferentes iniciativas institucionales que actualmente se encuentran vigentes en el país. La más relevante de ellas es la #[strong Política Nacional de Infancia y Adolescencia (2018-2030)], que surge de la necesidad de implementar acciones precisas y efectivas a nivel territorial en concordancia con el Código de Infancia y Adolescencia. 
          br
          br
          | Esta política tiene como objetivo el contribuir al desarrollo integral de las niñas, niños y adolescentes en todo el territorio nacional, en ese sentido, propone una serie de acciones para generar bienestar, acceso a oportunidades para que estos puedan transformar la realidad de sus comunidades. Todo esto desde el concepto de protección integral, que ya ha sido discutido en apartados anteriores.

    p.mb-5 Para enfocar mejor las acciones contenidas dentro de este marco de acción, se establecen una serie de definiciones sobre los entornos donde aplica la política pública, lo que a su vez refuerza el concepto de entorno protector.     

    .crd_complete.mb-5 
      .row.justify-content-center.align-items-center
        .col-auto.me-5
          img(src="@/assets/componentes/infografia.svg", style="width:300px")
        .col
          .titulo-segundo.mb-4
            .h4 Infografía
          p.mb-4 En términos generales, se define la existencia de seis (6) #[strong entornos protectores básicos para niñas, niños y adolescentes], los cuales se describen en el siguiente enlace. 

          a.boton.boton--b(:href="obtenerLink('downloads/infografias/Entornos_Protectores.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download     

    p.mb-5 Para la consecución de los objetivos que se establecen en los entornos protectores, se plantean una serie de enfoques que ayudan a comprender y analizar de forma más profunda y contextualizada la realidad de las niñas, niños y adolescentes (ICBF, 2018). A continuación, se presentan brevemente los seis (6) enfoques:

    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_02.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque de derechos humanos y el paradigma de la protección integral] 
            br
            | Enfoque rector de esta y de todas las políticas de infancia y adolescencia. Se centra en la dignificación de los niños, niñas y adolescentes a partir de su reconocimiento como sujetos titulares de derechos. 
    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_03.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque de género] 
            br
            | Propone acciones encaminadas a la igualdad de género en ejercicio de derechos, autonomía y condiciones de vida. Es necesario entender que los roles de género, es decir aquellos comportamientos o pautas que una sociedad o comunidad espera que un individuo siga según su género elegido, surgen como un proceso cultural y varían dependiendo de los contextos. En ese sentido, es clave comprender las diferencias que se dan entre cada género y cómo esto afecta el desarrollo de las niñas, niños y adolescentes.  
    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_04.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque diferencial] 
            br
            | Dirige las acciones para comprender la realidad de las niñas, niños y adolescentes desde el reconocimiento de las particularidades de cada individuo y comunidad según sus experiencias, teniendo en cuenta los muchos factores que pueden generar desigualdades. En ese sentido, se deben tener en cuenta variables como edad, etnia, condiciones sociales, económicas, religión, diferencias entre regiones, etc. De esta forma, se deben proponer acciones afirmativas que sirvan para eliminar las inequidades experimentadas por estos factores.
    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_05.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque interseccional] 
            br
            | Analiza de forma conjunta y no aislada las interacciones y vínculos posibles entre los diversos factores que inciden en el desarrollo de las niñas, niños y adolescentes.  
    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_06.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque de desarrollo humano] 
            br
            | Perspectiva que entiende la autonomía de los niños, niñas y adolescentes como un proceso de evolución durante las etapas de vida. La autonomía y la libertad de opinión son fundamentales para el fortalecimiento de la democracia a futuro, en ese sentido, es clave partir de esta base en políticas de infancia y adolescencia. 
    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_07.svg", alt="Enfoque de derechos humanos y el paradigma de la protección integral", style="width:150px;")
      .col
        .c-tarjeta.c-tarjeta--celeste.br-1
          p #[strong Enfoque de curso de vida] 
            br            
            | Perspectiva que privilegia las intervenciones en grupos de edades tempranos debido a los beneficios que esto puede tener para las futuras generaciones, entendiendo las etapas de vida como procesos de tránsito y transición y no como ciclos fijos. Por lo tanto, bajo este enfoque se asume que el cambio en el tiempo es inherente al ser humano. Como enfoque el curso de vida se apoya en tres (3) conceptos: trayectoria, transición y cambio de estado. El primero hace referencia al tipo de vida que cada individuo lleva según su educación, trabajo o vida reproductiva. La transición son aquellos cambios de roles o estados que cada uno tiene que asumir en su vida según los eventos que enfrente. Finalmente, el cambio de estado hace alusión a los eventos o situaciones específicas que producen las transiciones.

    p.text-center.mb-5 Así, se hace necesario revisar en el siguiente esquema los enfoques de la Política Nacional de Infancia y Adolescencia.

    .row.justify-content-center.mb-5
      .col-auto
        h5.mb-5.text-center Enfoques Política Nacional de Infancia y Adolescencia
        figure
          img(src="@/assets/tema_3/img_3_1_08.svg", alt="Enfoques Política Nacional de Infancia y Adolescencia.", style="width:650px;").mb-4
          figcaption Nota: adaptado de ICBF (2018).

    p.mb-4 En términos operativos, y en relación con lo anterior, la Política Nacional de Infancia y Adolescencia propone un modelo de atención integral centrado en acciones que promocionen la autonomía social y política del individuo, servicios configurados a partir de la diversidad y el enfoque diferencia y, finalmente, acciones de restitución y restablecimiento de derechos (ICBF, 2018). 

    .crd_B.crd_B--celeste.mb-4
      p.mb-4 Algo interesante de esta política es que ofrece elementos para determinar cuándo y cómo el desarrollo integral de una niña, niño y adolescente se materializa y se hace efectivo. A estas situaciones y condiciones se les denomina realizaciones y se consideran cumplidas cuando una niña, niño o adolescente: 

      .row.justify-content-center
        .col-auto
          figure
            img(src="@/assets/tema_3/img_3_1_09.svg", alt="Entornos protectores", style="width:450px;")
        .col-12.col-xl
          ul.lista-ul
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Cuenta con una familia que le acoge y acompaña en su desarrollo, junto con los pares, redes y organizaciones sociales y comunitarias.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Disfruta del nivel más alto posible de salud, vive y asume modos, estilos y condiciones de vida saludables y cuenta con óptimas condiciones de alimentación y nutrición.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Participa en procesos de educación y formación integral que desarrollan sus capacidades, potencian el descubrimiento de su vocación y el ejercicio de la ciudadanía.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Construye su identidad desde el respeto y valoración de la diversidad.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Goza y cultiva sus intereses en torno a las artes, la cultura, el deporte, el juego y la creatividad.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Participa y expresa libremente sentimientos, ideas y opiniones y decide sobre todos los asuntos que le atañen.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Realiza prácticas de autoprotección y crece en entornos protectores donde se actúa de manera oportuna y efectiva para la exigibilidad de la garantía de derechos, la prevención frente a situaciones de riesgo o vulneración de estos y su restablecimiento.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Construye su sexualidad de manera libre, autónoma y responsable.

    p.mb-5 Es posible afirmar que las niñas, niños y adolescentes disfrutan de un desarrollo integral y seguro al momento de que las instituciones y la sociedad en general pueden determinar que se cumplen estas realizaciones. Sin embargo, hay una serie de amenazas o riesgos que frecuentemente afectan a esta población e impiden el desarrollo pleno de su potencial. Al momento en que estos riesgos se materializan es muy probable que se vulnere algún derecho a una niña, niño o adolescente. 
      br
      br
      | A continuación, se ofrecen las definiciones de estos conceptos:
    
    h5.text-center.mb-4 Definiciones de amenaza, vulneraciones e inobservancia
    .tabla-b.mb-5     
      table
        caption Nota: adaptado de ICBF (2018).
        thead(style="background-color:#EA3065;")
          tr
            th(style="color:white;").text-center
              | Amenaza
              br
            th(style="color:white;").text-center
              | Vulneraci&oacute;n de derecho
              br
            th(style="color:white;").text-center
              | Inobservancia
              br
        tbody
          tr
            td
              | Situaci&oacute;n de inminente peligro o riesgo para   el ejercicio de derechos de las ni&ntilde;as, ni&ntilde;os y adolescentes.
            td
              | Situaci&oacute;n de da&ntilde;o, perjuicio o lesi&oacute;n que   impide el ejercicio de derechos de ni&ntilde;as, ni&ntilde;as y adolescentes una vez la   amenaza se materializa.   
              br
            td
              | Incumplimiento de los deberes de los actores   responsables del cuidado de ni&ntilde;as, ni&ntilde;os y adolescentes, ya sea Estado,   familia o sociedad   
              br
          tr
            td Ejemplo: presencia de grupos armados.   
            td
              | Ejemplo: violencia sexual ejercida sobre una   ni&ntilde;a, ni&ntilde;o o adolescente por integrantes de un grupo armado.
            td
              | Entidades no realizaron informes de riesgo en   la zona.    
              br

    .hr--blank

    h5.mb-5 Línea de Política Pública para la Prevención y Erradicación del Trabajo Infantil y la Protección Integral al Adolescente Trabajador.

    .bloque-texto-a.bta--cl.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/tema_3/img_3_1_10.svg", alt="alt")         
        .col-lg-7
          .bloque-texto-a__texto.p-4            
            p La Línea de Política Pública para la Prevención y Erradicación del Trabajo Infantil y la Protección Integral al Adolescente Trabajador (2017-2027) es un conjunto de estrategias y que buscan prevenir y erradicar el trabajo infantil y proteger integralmente al adolescente trabajador, siendo las familias la unidad de intervención para este propósito. 

    p.mb-5 Si bien el trabajo es una dimensión que contribuye significativamente a la dignificación de las personas, en el caso de las niñas, niños y adolescentes esto puede llegar convertirse en una amenaza a su desarrollo integral si no se cumplen una serie de condiciones. 
      br
      br
      | Entonces, ¿cuándo se considera que el trabajo infantil es problemático y debe ser erradicado?, cuando se tratan de actividades que implican un peligro para la salud e integridad de las niñas, niños y adolescentes ya sea por las tareas efectuadas o por las condiciones en las que se realizan. Estas actividades son denominadas peores formas de trabajo infantil según la CDN y la Organización Internacional del Trabajo (OIT). Entre ellas se encuentran la esclavitud, la venta y trata de personas, la condición de siervo, trabajos forzosos, reclutamiento en conflictos armados, utilización para prostitución y pornografía y tráfico de estupefacientes. Todas estas actividades están prohibidas por ley y aquellos que utilicen niñas, niños y adolescentes para estos propósitos serán objeto de procesos penales (ICBF, 2018).
      br
      br
      | De todas formas, se debe erradicar cualquier actividad que ponga en riesgo la salud, seguridad y moralidad de los niños así no se encuentren penalizada por ley. 
      br
      br
      | A continuación, se enlistan las formas de trabajo infantil más comunes:

    h5.text-center.mb-4 Tipos de trabajo infantil

    .tabla-custom
      table.mb-5
        caption Nota: adaptado de Organización Internacional del Trabajo (2017).
        thead(style="background-color:#EA3065;")
          tr
            th(style="color:white;").text-center Categor&iacute;as              
            th(style="color:white;").text-center Tipos              
            th(style="color:white;").text-center Actividades
        tbody
          tr
            td(rowspan='2').text-center Trabajos il&iacute;citos   
            td.text-center Explotaci&oacute;n sexual comercial.   
            td
              | - Inducci&oacute;n o est&iacute;mulo a la explotaci&oacute;n.
              br
              br
              | - Asociado a viajes y turismo.
              br
              br
              | - Trata de personas con estos fines.
          tr
            td(style="background-color:white;").text-center Actividades asociadas a esclavitud.   
            td(style="background-color:white;")
              | - Producci&oacute;n y tr&aacute;fico de estupefacientes.
              br
              br
              | - Utilizaci&oacute;n por bandas criminales &ndash;servidumbre.   
              br
              br
              | - Reclutamiento forzoso.
          tr(style="background-color:#F6F6F6;")
            td(rowspan='2').text-center Trabajos peligrosos   
              br
            td.text-center Peligrosos por su naturaleza.   
            td
              | - Miner&iacute;a, trabajo bajo agua, en calle.
              br
              br
              | - Trabajo en alturas.
              br
              br
              | - Trabajo con maquinaria y equipos peligrosos.
              br
              br
              | - Trabajo en medios insalubres (qu&iacute;micos, ruido extremo, entre otros).
          tr(style="background-color:#F6F6F6;")
            td.text-center Peligrosos por sus condiciones.   
            td
              | - Trabajo dom&eacute;stico en hogares de terceros.
              br
              br
              | - Jornada de m&aacute;s de ocho horas laborales.   
              br
              br
              | - Jornadas de trabajo que impiden asistir a la   escuela.    
              br
              br
              | - Horarios nocturnos y sin medidas de seguridad.

    p.mb-5 En términos generales, el trabajo infantil puede tener graves consecuencias a nivel físico en cuanto hay un gran riesgo de lesiones permanentes y daños musculares, a nivel psicológico es posible sufrir estrés, baja autoestima y desesperanza por el futuro, además de un elevado riesgo de deserción escolar (ACNUR, 2019). 
      br
      br
      | A continuación, se ofrece un esquema para comprender mejor la dinámica del trabajo infantil. 

    .row.justify-content-center.mb-5
      .col-auto
        h5.text-center.mb-5 Factores de riesgo y afectaciones del trabajo infantil    
        figure
          img(src="@/assets/tema_3/img_3_1_11.svg", alt="Factores de riesgo y afectaciones del trabajo infantil").mb-4
          figcaption Nota: adaptado de ACNUR (2019). 

    p.mb-5 A nivel nacional las cifras de trabajo infantil presentan un panorama inquietante al encontrarse que para el año 2017 un consolidado de 796.000 niños, niñas y adolescentes estaban en situación de trabajo infantil. La población de adolescentes de 15 a 17 años es aquella que se encuentran más afectada por esta problemática, al concentrar el 19,8 % del total (ICBF, 2018). Teniendo en cuenta todo lo anterior, se hace necesario emprender acciones para la superación de esta problemática. 
      br
      br
      | Por lo tanto, la política de prevención y erradicación del trabajo infantil propone las siguientes acciones frente a esta situación: 

    .row.justify-content-center.mb-5
      .col-12.col-lg-11
        ul.fa-ul
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]] 
            | #[strong Prevenir y promover:] mejorar condiciones de vida en las zonas rurales y vulnerables para reducir brechas de acceso a servicios básicos.
          hr.my-3
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]] 
            | #[strong Fortalecer y articular las instituciones: apoyo a Comité Interinstitucional para la Prevención y Erradicación del Trabajo Infantil (CIETI).] Que se encarga de generar lineamientos y conceptos técnicos para la implementación de acciones a nivel territorial y nacional. Se encuentra liderado por el ICBF y el Ministerio de Trabajo y hace parte del SNBF.
          hr.my-3
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]]
            | #[strong Realizar la gestión de conocimiento de distintas bases de datos:] para evitar falta de información y emprender acciones de mejoría a futuro.
          hr.my-3
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]] 
            | #[strong Realizar acciones de seguimiento y evaluación:] de los casos monitoreados por las instancias pertinentes y las mesas de trabajo.
          hr.my-3
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]] 
            | #[strong Mejorar calidad y cobertura:] de las atenciones para niños, niñas y adolescentes.
          hr.my-3
          li #[span.li--clr.fa-li #[i.fas.fa-angle-right ]] 
            | #[strong Movilización social:] con eje en las familias como actor clave de la implementación de la estrategia. 

    p.mb-5 A continuación, revisar el esquema de la ruta de atención, que le permitirá una mejor comprensión del tema. 

    .row.justify-content-center.mb-5
      .col-auto
        h5.text-center.mb-5 Ruta de atención
        figure
          img(src="@/assets/tema_3/img_3_1_12.svg", alt="Ruta de atención").mb-4
          figcaption Nota: tomado de ICBF (2018).

    p.mb-5 Finalmente, dentro de esta política se incluye la posibilidad de permitir la realización de actividades laborales por parte de adolescentes de 15 a 18 años de edad, en actividades vinculadas a los programas técnicos y tecnológicos que hayan cursado en el SENA o en otros institutos educativos acreditados, sin restricciones de horas a la semana. A esta modalidad de trabajo se le conoce como trabajo protegido y también permite que menores de 14 años puedan desempeñar labores exclusivamente en áreas artísticas, deportivas, recreativas y culturales con un máximo de 14 horas semanales, previa autorización del Inspector del trabajo municipal. 

    h5.mb-5 Línea de Política Pública para la Prevención y Erradicación de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-xl.order-last.order-xl-first
        p Como se mencionó anteriormente, una de las peores formas de trabajo infantil corresponde a la Explotación Sexual Comercial se Niñas, Niños y Adolescentes (ESCNNA). Frente a esto surge la Línea de Política Pública para la Prevención y Erradicación de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (2018-2028) con el fin de consolidar acciones para eliminar este flagelo que vulnera gravemente los derechos de las niñas, niños y adolescentes. 
          br
          br
          | La ESCNNA se puede definir como una violación a los derechos de la niñez donde un adulto ejerce violencia sexual sobre una niña, niño o adolescente a cambio de una remuneración en dinero o en especie para este o para terceros. Así mismo, esto debe ser entendido como un tipo de violencia sexual donde el cuerpo de los menores es tratado como objeto y mercancía en formas similares a la esclavitud. Cabe aclarar que esta explotación también puede darse para la creación de contenido virtual o físico, es decir, pornografía infantil. Estas prácticas pueden desarrollarse en contextos de proxenetismo, por un familiar o amigo cercano de la víctima o en sitios virtuales. Más específicamente, la ESCNNA se ejemplifica a través de las siguientes situaciones: 
      .col-auto.mb-5.mb-xl-0.order-first.order-xl-last
        figure
          img(src="@/assets/tema_3/img_3_1_13.svg", alt="Entornos protectores", style="width:450px;")

    .bloque-texto-a.bta--cl.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/tema_3/img_3_1_14.svg", alt="alt")         
        .col-lg-7
          .bloque-texto-a__texto.p-4            
            ul.lista-ul.lista-ul--separador
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Explotación sexual por dinero.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Pornografía infantil o transmisiones en vivo.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Matrimonios serviles (obligar a una niña, niño o adolescente a casarse con un adulto por conveniencia económica).
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Trata de los menores con fines sexuales.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Explotación sexual en conflictos armados.

    p.mb-5 Es deber de todas las personas denunciar este tipo de prácticas que bajo ningún motivo pueden considerarse una forma de trabajo. 
      br
      br
      | Desde un enfoque diferencial, la ESCNNA es un tipo de violencia basada en género debido a que afecta mayoritariamente a niñas y adolescentes mujeres debido a imaginarios machistas y misóginos que tienden a ver el cuerpo femenino infantil como un objeto sexual, exponiéndolas a un riesgo mucho mayor de violencia y discriminación. 
      br
      br
      | Existen una serie de factores que aumentan el riesgo de que una niña, niño o adolescente sea víctima de ESCNNA y se enlistan a continuación: 

    
    .c-tarjeta.c-tarjeta--celeste.br-1.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-lg-4.mb-4.mb-lg-0
          .c-tarjeta.c-tarjeta--azul.br-1
            h5.text-center.mb-0 A nivel social y cultural
        .col
          ul.lista-ul
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Machismo.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Modelos económicos basados en explotación.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Falsas creencias que legitiman la violencia sexual.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Medios de comunicación que mercantilizan el cuerpo de los adolescentes. 

    .c-tarjeta.c-tarjeta--celeste.br-1.mb-5
      .row.justify-content-center.align-items-center
        .col-12.col-lg-4.mb-4.mb-lg-0
          .c-tarjeta.c-tarjeta--azul.br-1
            h5.text-center.mb-0 A nivel familiar y comunitario
        .col
          ul.lista-ul
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Relaciones familiares jerárquicas: los niños, niñas y adolescentes no son tenidos en cuenta.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Abandono de padres y ausencia de entorno protector.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Maltrato.     

    .c-tarjeta.c-tarjeta--celeste.br-1.mb-3
      .row.justify-content-center.align-items-center
        .col-12.col-lg-4.mb-4.mb-lg-0
          .c-tarjeta.c-tarjeta--azul.br-1
            h5.text-center.mb-0 A nivel individual
        .col
          ul.lista-ul
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Hombres y mujeres dispuestos a pagar por explotar sexualmente a las niñas, niños y adolescentes.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Baja autoestima.
            li 
              i.fas.fa-angle-right.clr-accent--txt
              | Desinformación.

    .crd_C.mb-5
      p Nota: adaptado de Organización Internacional del Trabajo (2017).

    .bloque-texto-a.bta--cl.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5 Finalmente, la política ofrece las siguientes acciones para cumplir con el objetivo de erradicar la explotación sexual comercial de niñas, niños y adolescentes:          
        .col-lg-7
          .bloque-texto-a__texto.p-4            
            ul.lista-ul.lista-ul--separador            
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Promoción de derechos, prevención, participación y movilización social.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Atención y restablecimiento de derechos.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Judicialización, vigilancia y control de los explotadores sexuales.   

    .hr--blank

    h5.mb-5 Línea de política pública de prevención del reclutamiento, utilización, uso y violencia sexual contra niños, niñas y adolescentes por parte de Grupos Armados Organizados (GAO) y Grupos Delictivos Organizados (GDO)

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hDeYDlF2jtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Línea de política pública de prevención del reclutamiento, utilización, uso y violencia sexual contra niños, niñas y adolescentes por parte de Grupos Armados Organizados (GAO) y Grupos Delictivos Organizados (GDO)      

    h5.mb-4 Estrategia de atención integral para niñas, niños y adolescentes con énfasis en la prevención del embarazo adolescente

    p.mb-5 Esta estrategia tiene como objetivo prevenir el embarazo adolescente en niñas, niños y adolescentes promoviendo su desarrollo integral y garantía de derechos. El embarazo adolescente es considerado un complejo fenómeno social y de salud pública debido a que impide la realización del proyecto de vida de las niñas, niños y adolescentes, aumentando así el riesgo de deserción escolar y la no superación de las condiciones de pobreza. 
      br
      br
      | Dentro de este marco se definen las siguientes acciones para la prevención del embarazo adolescente:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-xl.mb-5.mb-xl-0.me-0.me-xl-5
        h6 Transformar la atención
        ul.lista-ul.lista-ul--separador            
          li 
            i.fas.fa-angle-right.clr-accent--txt
            | Pasar de una visión de problema de salud a una visión de desarrollo integral de la niñez y la adolescencia.
          li 
            i.fas.fa-angle-right.clr-accent--txt
            | Fortalecer la educación sexual con enfoque diferencial.
          li 
            i.fas.fa-angle-right.clr-accent--txt
            | Fortalecer el enfoque de autonomía para decidir sobre la propia sexualidad.
          li 
            i.fas.fa-angle-right.clr-accent--txt
            | Garantizar la participación efectiva de niñas, niños y adolescentes en todo el ciclo de formulación de estrategias y planes a nivel territorial.         
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_1_15.svg", alt="Entornos protectores", style="width:350px;")

    .hr--blank

    .titulo-segundo.mb-4
      #t_3_2.h4 3.2 Política de Estado para el Desarrollo de la Primera Infancia

    p.mb-5 En el año 2016 se emitió la Ley 1804 que estableció la Política de Estado para el Desarrollo Integral de la Primera Infancia a través de la política pública de Cero a Siempre. Esto tiene como objetivo el garantizar la protección de los derechos de las niñas niños de cero a seis años, incluyendo a las madres gestantes.
      br
      br
      | De Cero a Siempre brinda una serie de ayudas a las familias en términos de acceso a servicios de: 

    .row.justify-content-center.mb-5
      .col-auto
        figure
          img(src="@/assets/tema_3/img_3_2_01.svg", alt="Política de Estado para el desarrollo de la primer infancia", style="width:850px")

    p.mb-5 La política de Cero a Siempre establece mecanismos de evaluación y monitoreo a todos los menores titulares de sus programas con el fin de determinar la efectividad de las medidas y los incentivos que pueden darse a cada niña o niño y su familia. La gestión de los recursos y los lineamientos técnicos para la ejecución de cada línea de acción se encuentra a cargo de diferentes entidades, dentro de las cuales se destacan el Departamento para la Prosperidad Social, el ICBF y el Ministerio de Educación Nacional. 

    .titulo-segundo.mb-5
      #t_3_3.h4 3.3 La Política Nacional de Apoyo y Fortalecimiento a las Familias

    .bloque-texto-a.bta--cl.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5 En el año 2016 se promulgó la Política Nacional de Apoyo y Fortalecimiento a las Familias para reconocer, promover y fortalecer las capacidades de las familias como sujetos colectivos de derechos y eje fundamental del desarrollo social.   
          p Esta política plantea las siguientes acciones:                   
        .col-lg-7
          .bloque-texto-a__texto.p-4                        
            ul.lista-ul.lista-ul--separador            
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Reconocimiento de la diversidad de las familias y acceso a servicios de seguridad social con atención humanizada y oportuna.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Promover el reconocimiento de las familias como espacios de participación interna y democracia, es decir, que todos y todas puedan participar en las decisiones que toman las familias. 
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Inculcar un enfoque de prevención de riesgos de vulneraciones de derechos dentro de las familias.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Promover la participación social de las familias en asuntos públicos y de gestión en las que se sientan involucradas.

    .hr--blank 

    .titulo-segundo.mb-5
      #t_3_4.h4 3.4 Política Nacional de Discapacidad e Inclusión Social

    .bloque-texto-a.bta--cl.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5 La Política Pública Nacional de Discapacidad e Inclusión Social (PPDIS), busca asegurar el pleno goce de derechos y deberes para las personas con discapacidad, sus familias y cuidadores. Esto desde un enfoque diferencial, territorial e incluyente, integrando igualmente a las niñas, niños y adolescentes con discapacidad.   
          p Esta política plantea las siguientes acciones:                   
        .col-lg-7
          .bloque-texto-a__texto.p-4                        
            ul.lista-ul.lista-ul--separador            
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Transformar la gestión pública y la gestión normativa en pro de los derechos de las personas con discapacidad.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Garantizar el acceso a la justicia y el reconocimiento pleno como sujeto de derechos ante la ley. 
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Permitir la participación en la vida política y la esfera pública.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Acceso a servicios de salud, habilitación y rehabilitación, inclusión laboral y productiva, recreación y deporte, cultura y protección social.
              li 
                i.fas.fa-angle-right.clr-accent--txt
                | Promover el reconocimiento de la diversidad mediante políticas que promuevan la igualdad y la no discriminación. 

    .hr--blank

    .titulo-segundo
      #t_3_4.h4 3.5  Actividad didáctica

    .crd_complete
      .row.justify-content-center.align-items-center
        .col-auto.me-5
          img(src="@/assets/componentes/actividad.svg", style="width:450px")
        .col
          .titulo-segundo.mb-4
            .h4 Promoción de derechos de niñas, niños y adolescentes
          p.mb-4 Mediante la siguiente actividad se busca fortalecer los conocimientos adquiridos sobre la promoción de derechos de niñas, niños y adolescentes. 

          a.boton.boton--b(:href="obtenerLink('downloads/actividades/A1/index.html')" target="_blank" type="application/pdf")
            span Iniciar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
