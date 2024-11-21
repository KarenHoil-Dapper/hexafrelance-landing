import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-and-how-investment',
  templateUrl: './what-and-how-investment.component.html',
  styleUrls: ['./what-and-how-investment.component.scss']
})
export class WhatAndHowInvestmentComponent implements OnInit {

  public infoCards = [
    {
      icon: '/assets/images/about-us/turismo-icon.png',
      title: 'Turismo todo el año',
      info: 'Descubre la magia de la Riviera Maya durante todo el año. Desde playas soleadas hasta aventuras culturales, siempre hay algo emocionante que explorar.',
      image: '/assets/images/about-us/turismo.webp',
      class: 'turismo',
    },
    {
      icon: '/assets/images/about-us/ubi-icon.png',
      title: 'Ubicación estratégica',
      info: 'Tu Hogar en el Corazón de la Riviera Maya. Acceso fácil a playas, atracciones y servicios de primer nivel.',
      image: '/assets/images/about-us/ubi.webp',
      class: 'ubicacion',
    },
    {
      icon: '/assets/images/about-us/prev-icon.png',
      title: 'Preventa exclusiva',
      info: 'Asegura tu lugar en uno de los desarrollos más esperados de la Riviera Maya. ¡No te lo pierdas!',
      image: '/assets/images/about-us/prev.webp',
      class: 'preventa',
    },
    {
      icon: '/assets/images/about-us/desar-icon.png',
      title: 'Desarrollo Constante',
      info: ' Aprovecha la Oportunidad de Invertir en un Mercado en Crecimiento Constante en la Riviera Maya.',
      image: '/assets/images/about-us/desar.webp',
      class: 'desarrollo',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


  swiperConfig: any = {
    allowTouchMove: true,
    navigation: true,
    autoPlay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // speed: 2500,
    // pagination: {
    //   type: 'fraction',
    // },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      // 1025: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  };

}
