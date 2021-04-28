<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/introduccion/intro_01.svg", alt="alt")         
        .col-lg-7
          .bloque-texto-a__texto.p-4            
            p La promoción de los derechos de las niñas, niños y adolescentes implica la comprensión de los principales enfoques y conceptos derivados de la aceptación de estos como sujetos titulares de derechos frente a la ley y la sociedad. En ese sentido, es clave entender el cambio de la visión de la protección de las niñas, niños y adolescentes como objeto tutelar hacia un enfoque integral donde se busca prevenir los principales factores que amenazan sus derechos y limitan sus libertades y autonomía. Igualmente, en el presente componente formativo se exploran los principales derechos existentes.   
    
    
    p Dentro de este contexto, el programa Familias en Acción al entregar un incentivo condicionado a la asistencia a un mínimo del 80 % de las clases del año (educación), busca contribuir a la garantía del ejercicio de los derechos de los niños, niñas y adolescentes, y a la prevención de los principales riesgos asociados a su posible vulneración. La estrategia de alertas en el marco de este programa permite generar avisos oportunos a posibles inobservancias, amenazas y vulneraciones, y promover acciones para su protección y restablecimiento.
      br
      br
      | Posteriormente se profundizan en algunas de las explicaciones y fundamentos trabajados con respecto a la protección integral de niñas, niños y adolescentes dentro del programa Familias en Acción. 

    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
