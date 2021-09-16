export default {
  global: {
    componenteFormativo: 'Promoción de derechos de niñas, niños y adolescentes',
    descripcionCurso:
      'Se abordará el reconocimiento de niñas, niños y adolescentes como sujetos de derechos, en el contexto nacional e internacional; además se ahondará en el enfoque de protección integral a través del Sistema Nacional de Bienestar Familiar (SNBF) y las políticas públicas orientadas a la prevención de riesgos de vulneración.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Los derechos de las niñas, niños y adolescentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Las niñas, niños y adolescentes como sujetos titulares de derechos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.2',
            titulo: 'Principios y enfoques',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-play-circle',
            numero: '1.3',
            titulo: 'Contexto normativo',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La protección Integral de las niñas, niños y adolescentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El paradigma de la protección integral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'La familia, la sociedad y el Estado como garantes de derecho',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entornos protectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Política Nacional de Infancia y Adolescencia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Política de Estado para el Desarrollo de la Primera Infancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'La Política Nacional de Apoyo y Fortalecimiento a las Familias',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Política Nacional de Discapacidad e Inclusión Social',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Actividad didáctica',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Metodológico y Pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Luis Alfonso Rodríguez Beltrán',
        cargo: 'Consultor',
        centro: 'CORPROGRESO',
        regional: '',
      },
      {
        nombre: 'Martha Yolanda Bustos Ramírez',
        cargo: 'Profesional ICBF',
        centro: 'Instituto Colombiano de Bienestar Familiar',
        regional: '',
      },
      {
        nombre: 'Cristian Camilo Delgado',
        cargo: 'Profesional ICBF',
        centro: 'Instituto Colombiano de Bienestar Familiar',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro para la Comunicación de la Industria Gráfica.',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional',
        centro: 'Centro de Diseño y Metrología.',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de Estilo',
        centro: 'Centro para la comunicación de la Industria Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte Organizacional',
      },
      {
        nombre: [
          'Gilberto Junior Rodríguez Rodríguez',
          'José Jaime Luis Tang Pinzón',
          'Lady Adriana Ariza Luque',
          'Lina Marcela Perez Manchego',
          'Luis A. Arévalo',
          'Luis Gabriel Urueta Álvarez',
          'Oleg Litvin',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: ['Daniel Ricardo Mutis Gómez'],
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: ['María Isabel Román Rueda'],
        cargo: 'Revisor de contenidos',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ACNUR. (2019). Trabajo infantil: qué es, causas y consecuencias.',
      link:
        'https://eacnur.org/blog/trabajo-infantil-que-es-tc_alt45664n_o_pstn_o_pst/',
    },
    {
      referencia:
        'Amnistía Internacional. (s. f.). Derechos de los niños, niñas y adolescentes.',
      link:
        'https://www.es.amnesty.org/en-que-estamos/temas/menores/#:~:text=Las%20ni%C3%B1as%20y%20ni%C3%B1os%20son,convenciones%20internacionales%20que%20los%20desarrollan.&text=Pese%20a%20ello%2C%20millones%20de,derechos%20fundamentales%20en%20diversos%20%C3%A1mbi',
    },
    {
      referencia:
        'Congreso de la República. (2 de agosto de 2016). Ley 1804 de 2016. Por la cual se establece la política de Estado para el Desarrollo Integral de la Primera Infancia de Cero a Siempre y se dictan otras disposiciones.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1804_2016.htm',
    },
    {
      referencia:
        'De Cero a Siempre oficial. (15 de abril de 2016). Desarrollo integral de los niños y las niñas. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=9neE1nWfFw8',
    },
    {
      referencia:
        'De la Iglesia, M., Velázquez, M. E., y Piekarz, W. (2008). Devenir de un cambio: del patronato de menores a la protección integral de los derechos de niños, niñas y adolescentes. Anuario de Investigaciones, 323-327.',
    },
    {
      referencia:
        'Gómez de la Torre, M. (2018). Las implicancias de considerar al niño sujeto de derechos. Revista de Derecho, 14(18), 117-137',
    },
    {
      referencia:
        'Gómez, R. (2012). Aproximaciones a la antropología jurídica: construyendo sociedades justas. Principia Iuris, 17(17), 20-32.',
    },
    {
      referencia:
        'ICBF. (2013). Cartilla ABC. Sistema Nacional de Bienestar Familiar. Instituto Colombiano de Bienestar Familiar.',
    },
    {
      referencia:
        'ICBF. (2013). Concepto 74 de 2013. Obtenido de Instituto Colombiano de Bienestar Familiar – ICBF.',
      link:
        'https://www.icbf.gov.co/cargues/avance/docs/concepto_icbf_0000074_2013.htm',
    },
    {
      referencia:
        'ICBF. (2016). Construyendo juntos entornos protectores. Instituto Colombiano de Bienestar Familiar.',
    },
    {
      referencia:
        'ICBF. (2018). Política Nacional de Infancia y Adolescencia y sus Líneas de Política. Instituto Colombiano de Bienestar Familiar.',
    },
    {
      referencia: 'ICBF. (2019). Manual operativo SNBF.',
      link: 'https://www.icbf.gov.co/manual-operativo-snbf',
    },
    {
      referencia:
        'La Divina Mente Estudio. (19 de enero de 2017). Política Pública de Infancia, ICBF. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=ONpa6dRppJE',
    },
    {
      referencia:
        'Ministerio de la Protección Social – ICBF. (2006). Ley 1098 de 2006. Por la cual se expide el Código de la Infancia y la Adolescencia.',
      link: 'https://icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2017). Política Pública para la Prevención y Erradicación del Trabajo Infantil y la Protección Integral al Adolescente Trabajador.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/58804143/Politica+publica+pdf_version+final_02042018.pdf',
    },
    {
      referencia:
        'Presidencia de la República. (22 de diciembre de 2011). Decreto 4875 de 2011. Por el cual se crea la comisión intersectorial para la atención integral de la primera infancia - AIPI - y la comisión especial de seguimiento para la atención integral a la primera infancia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=45144',
    },
    {
      referencia:
        'Presidencia de la República. (9 de mayo de 2013). Decreto 936 de 2013. Por el cual se reorganiza el Sistema Nacional de Bienestar Familiar, se reglamenta el inciso primero del artículo 205 de la Ley 1098 de 2006 y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53059',
    },
    {
      referencia:
        'República de Colombia. (1991). Constitución Política de Colombia 1991. República de Colombia.',
    },
    {
      referencia:
        'Unicef. (2006). Convención sobre los Derechos del Niño. Unicef.',
    },
  ],
  glosario: [
    {
      termino: 'Interés superior del niño',
      significado:
        'obligatoriedad que tienen todas las instancias sociales y judiciales de satisfacer y hacer cumplir los derechos de niñas, niños y adolescentes al momento de presentarse cualquier situación donde puedan ser vulnerados o puestos en riesgo.',
    },
    {
      termino: 'Interseccionalidad',
      significado:
        'analizar de forma conjunta y no aislada las interacciones y vínculos posibles entre los diversos factores que inciden en el desarrollo de los niños, niñas y adolescentes.',
    },
  ],
  complementario: [
    {
      texto:
        'La Divina Mente Estudio.(19 de enero de 2017). Política Pública de Infancia, ICBF.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ONpa6dRppJE',
    },
    {
      texto:
        'De Cero a Siempre oficial. (15 de abril de 2016). Desarrollo integral de los niños y las niñas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9neE1nWfFw8',
    },
    {
      texto: 'ICBF. (2019). Manual 0perativo SNBF.',
      tipo: 'PDF',
      descarga: 'downloads/complementario/manual_operativo_snbf.pdf',
    },
  ],
}
