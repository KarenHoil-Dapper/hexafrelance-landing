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
      title: 'Amenidades',
      info: 'Más de 20 amenidades y espacios de recreación familiar.',
    },
    {
      icon: '/assets/images/blue/why/ubi.webp',
      title: 'Ubicación',
      info: 'Urbanización con una planeación estratégica y de alto nivel residencial sustentable.',
    },
    {
      icon: '/assets/images/blue/why/mes.webp',
      title: 'mensualidades',
      info: 'Facilidades de pagos y planes a MSI.',
    },
    {
      icon: '/assets/images/blue/why/juridica.webp',
      title: 'Certeza Jurídica',
      info: 'Trabajamos con los mejores profesionales legales para garantizar que tu inversión esté protegida.',
    },
    {
      icon: '/assets/images/blue/why/linea.png',
      title: 'Aparta en Línea',
      info: 'Con nuestro sistema de apartado en línea, puedes asegurar tu propiedad desde la comodidad de tu hogar.',
    },
    {
      icon: '/assets/images/blue/why/financiera.png',
      title: 'Seguridad Financiera',
      info: 'Te ofrecemos opciones de financiamiento seguras y flexibles.',
    },
    {
      icon: '/assets/images/blue/why/referidos.png',
      title: 'Programa de Referidos',
      info: 'Únete a nuestro programa de referidos y comparte las oportunidades inigualables que ofrecemos.',
    },
  ];

}
