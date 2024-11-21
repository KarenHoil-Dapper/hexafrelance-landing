import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss']
})
export class WhyWeComponent implements OnInit {

  public infocards = [
    {
      image: '/assets/images/home/garantia.png',
      title: 'Garantía',
      info: 'Nuestra promesa de calidad se extiende a todos nuestros desarrollos, ya sea que construyamos hogares o vendamos terrenos. Siempre priorizamos la excelencia.',
    },
    {
      image: '/assets/images/home/seguridad.png',
      title: 'Seguridad',
      info: 'Todos nuestros desarrollos están ubicados en zonas seguras y de alta demanda, garantizando un ambiente pacífico para tu familia.',
    },
    {
      image: '/assets/images/home/servicio.png',
      title: 'Servicio',
      info: 'En CCC Residencial, nos comprometemos a brindar atención personalizada, transparencia y excelencia en cada interacción con nuestros clientes.',
    },
    {
      image: '/assets/images/home/legalidad.png',
      title: 'Legalidad',
      info: 'Con nosotros, no solo estás comprando un terreno, estás invirtiendo en tu futuro de manera segura y confiable.',
    },
  ]

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }

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
