import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-blue-moon',
  templateUrl: './why-blue-moon.component.html',
  styleUrls: ['./why-blue-moon.component.scss']
})
export class WhyBlueMoonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  swiperConfig: any = {
    allowTouchMove: true,
    navigation: true,
    autoPlay: true,
    slidesPerView: 4,
    spaceBetween: 14,
    direction: 'vertical',

    // speed: 2500,
    // pagination: {
    //   type: 'fraction',
    // },
    breakpoints: {
      575: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 21,
      },
      // 1025: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      1200: {
        slidesPerView: 4,
        spaceBetween: 21,
      },
    },
  };

  public infoCards = [
    {
      icon: '/assets/images/blue/why/amenidades.webp',
      title: 'Plataforma de confianza',
      info: 'Ofrecemos un espacio seguro donde freelancers y clientes pueden interactuar de manera transparente',
    },
    {
      icon: '/assets/images/blue/why/ubi.webp',
      title: 'Sistema de calificación',
      info: 'Permitimos que los usuarios califiquen proyectos y proporcionen retroalimentación, lo que asegura la calidad',
    },
    {
      icon: '/assets/images/blue/why/mes.webp',
      title: 'Innovación constante',
      info: 'Nos mantenemos a la vanguardia de las últimas tendencias y tecnologías para ofrecer soluciones actualizadas',
    },
    {
      icon: '/assets/images/blue/why/juridica.webp',
      title: 'Comunidad activa',
      info: 'Fomentamos una red de profesionales dispuestos a compartir conocimientos, experiencias y buenas prácticas',
    },

  ];

}
