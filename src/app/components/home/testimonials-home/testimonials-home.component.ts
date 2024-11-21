import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-testimonials-home',
  templateUrl: './testimonials-home.component.html',
  styleUrls: ['./testimonials-home.component.scss'],
})
export class TestimonialsHomeComponent implements OnInit {
  infoTestimonials = [
    {
      star: 5,
      info: '"Encontré la ubicación perfecta para mi nuevo hogar. ¡Altamente recomendado!"',
      name: 'Alejandra M.',
    },
    {
      star: 5,
      info: '"CCC Group hizo realidad mi sueño de invertir. Me atendieron muy bien y su conocimiento del mercado fue impresionante."',
      name: 'José R.',
    },
    {
      star: 5,
      info: '"Desde el primer contacto, CCC Group demostró un alto nivel de profesionalismo y compromiso. Gracias a ellos, encontré la propiedad ideal para mi familia en Cancún."',
      name: 'Laura G.',
    },
    {
      star: 5,
      info: '⁠"Confiables, honestos y dedicados. Gracias a su asesoramiento, invertí con seguridad en Cancún. Estoy encantado con los resultados."',
      name: 'Carlos S.',
    },
    {
      star: 5,
      info: '"CCC Group superó mis expectativas"',
      name: 'María L.',
    },
    {
      star: 5,
      info: '"Recomendaría CCC Group a cualquier persona que busque invertir en bienes raíces en Cancún. Su conocimiento del mercado y su integridad son insuperables."',
      name: 'Ricardo P.',
    },
    {
      star: 5,
      info: '"Buena atención y muy amables, gracias por todo"',
      name: 'Ana B.',
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
