import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-swiper-blue',
  templateUrl: './swiper-blue.component.html',
  styleUrls: ['./swiper-blue.component.scss'],
})
export class SwiperBlueComponent implements OnInit {
  public infoCards = [
    {
      title: 'Sin comprobante de Ingresos ',
      info: 'Facilitamos tu camino hacia la casa de tus sueños sin complicaciones.',
      span: '¡Descubre la libertad de ser propietario!',
      button: 'Quiero Saber Más',
    },
    {
      title: 'Sin revisar buro',
      info: 'Simplificamos el proceso para que puedas vivir donde mereces. Sin complicaciones, solo posibilidades.',
      span: '¡Hazlo realidad hoy!',
      button: 'Quiero Saber Más',
    },
    {
      title: 'Sin Aval',
      info: 'Eliminamos barreras para que tu sueño de tener casa propia sea real. Sin complicaciones, solo posibilidades.',
      span: '¡Inicia tu nuevo capítulo hoy!',
      button: 'Quiero Saber Más',
    },
    {
      title: 'Planes de financiamiento (MSI)',
      info: 'Hacemos posible tu sueño de tener hogar propio. Comodidad y accesibilidad en cada pago.',
      span: '¡Inicia tu viaje hacia tu nuevo hogar!',
      button: 'Quiero Saber Más',
    },
  ];


  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit(): void {}

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
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      // 1025: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  };
}
