import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-what-and-how-about',
  templateUrl: './what-and-how-about.component.html',
  styleUrls: ['./what-and-how-about.component.scss'],
})
export class WhatAndHowAboutComponent implements OnInit {
  public infoCards = [
    {
      title: 'Evaluación de proyectos',
      info: 'Nuestro equipo evalúa meticulosamente cada proyecto para garantizar su viabilidad y potencial. Utilizamos análisis detallados para ofrecerte solo las mejores oportunidades de inversión inmobiliaria.',
      image: '/assets/images/about-us/what1.webp',
    },
    {
      title: 'Alianzas estratégicas',
      info: 'Colaboramos con socios y expertos locales para establecer alianzas sólidas. Estas conexiones nos permiten acceder a propiedades exclusivas y brindarte oportunidades de inversión inigualables en el próspero mercado de Cancún.',
      image: '/assets/images/about-us/what2.webp',
    },
    {
      title: 'Definición del proyecto',
      info: 'Nos enfocamos en crear espacios significativos y sostenibles. Desde el diseño hasta la ejecución, nuestro equipo trabaja arduamente para definir cada proyecto con precisión y cuidado, asegurando que cada inversión tenga un impacto duradero.',
      image: '/assets/images/about-us/what3.webp',
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
