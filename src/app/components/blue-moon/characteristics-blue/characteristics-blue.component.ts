import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-characteristics-blue',
  templateUrl: './characteristics-blue.component.html',
  styleUrls: ['./characteristics-blue.component.scss'],
})
export class CharacteristicsBlueComponent implements OnInit {

  public infoCards = [
    {
      image: '/assets/images/blue/characteristics/priv.webp',
      title: 'Privacidad y tranquilidad',
      info: 'Nuestro desarrollo se encuentra en una ubicación privilegiada, rodeado de naturaleza y alejado del bullicio de la ciudad. Esto garantiza a nuestros residentes un ambiente tranquilo y privado para disfrutar de su hogar.',
      button: 'Conoce Nuestros Desarrollos',
    },
    {
      image: '/assets/images/blue/characteristics/acce.webp',
      title: 'Accesibilidad',
      info: 'A pesar de estar ubicados en un entorno tranquilo, Luna Azul Residencial cuenta con excelentes conexiones viales y acceso fácil a importantes vías de comunicación. Esto permite un rápido y conveniente desplazamiento hacia otros puntos de la ciudad.',
      button: 'Conoce Nuestros Desarrollos',
    },
    {
      image: '/assets/images/blue/characteristics/cercanos.webp',
      title: 'Servicios Cercanos',
      info: 'A pocos minutos de nuestro desarrollo encontrarás una amplia gama de servicios como Grand Outlet Riviera Maya la nueva plaza comercial más grande de Latinoamérica, el Aeropuerto Internacional de Cancún a 15 min y una Estación del Tren Maya a 10 min. La playa más cercana está localizada a 20 minutos de Luna Azul Residencial. Estarás cerca de todo lo que necesitas sin tener que alejarte demasiado.',
      button: 'Conoce Nuestros Desarrollos',
    },
    {
      image: '/assets/images/blue/characteristics/pano.webp',
      title: 'Vistas panorámicas',
      info: 'Nuestra ubicación privilegiada nos permite ofrecer impresionantes vistas panorámicas de los alrededores. Disfrutarás de hermosos paisajes naturales y atardeceres inolvidables desde la comodidad de tu hogar.',
      button: 'Conoce Nuestros Desarrollos',
    },
    {
      image: '/assets/images/blue/characteristics/planificado.webp',
      title: 'Desarrollo planificado',
      info: 'Desarrollo planificado: En Luna Azul Residencial nos preocupamos por ofrecer un ambiente residencial de calidad y bien planificado. Contamos con amplias áreas verdes, parques, zonas recreativas y espacios comunes para que nuestros residentes puedan disfrutar al máximo de su entorno.',
      button: 'Conoce Nuestros Desarrollos',
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit(): void {}


  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }
}
