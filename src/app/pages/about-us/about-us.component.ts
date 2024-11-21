import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  bannerInfo = {
    title: 'Comprometidos con tu patrimonio',
    info: 'Guiamos tu inversión hacia un futuro seguro y próspero en Cancún',
    button: 'Conoce Luna Azul',
    class: 'about',
  }

  secondInfo = {
    image1: '/assets/images/about-us/second1.webp',
    // image2: '/assets/images/home/socio2.webp',
    title: 'El Equipo detrás de CCC Group',
    subtitle: 'Nosotros',
    info: 'El equipo de CCC Group está compuesto por un grupo de inversionistas con amplia experiencia en el sector inmobiliario. Nuestra empresa nació en México y es 100% mexicana, lo que nos permite tener un profundo conocimiento del mercado y las necesidades de nuestros clientes.',
    button: 'Conoce Nuestros Desarrollos',
  }

  thirdInfo = {
    image1: '/assets/images/about-us/second3.webp',
    image2: '/assets/images/about-us/second4.webp',
    title: 'Lo que nos motiva',
    info: 'Nuestro objetivo es superar las expectativas de quienes confían en nosotros para encontrar su hogar ideal o invertir en bienes raíces. Valoramos la confianza que depositan en nosotros y nos esforzamos por garantizar su satisfacción en cada etapa del proceso.',
    info2: 'Estamos aquí para asesorarte y responder cualquier pregunta que puedas tener sobre nuestros servicios y proyectos inmobiliarios. No dudes en contactarnos, ¡estaremos encantados de ayudarte!',
    button: 'Conoce Nuestros Desarrollos',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
