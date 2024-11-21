import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  secondInfo = {
    image1: '/assets/images/home/socio1.webp',
    image2: '/assets/images/home/socio2.webp',
    title: 'Tu Socio Confiable en Inversiones Inmobiliarias',
    info: 'En CCC Group Incorporated, nos dedicamos a forjar futuros sólidos en el corazón de Cancún. Somos un equipo apasionado de profesionales que entiende el valor de la inversión inteligente y la importancia de elegir el lugar adecuado para establecer un hogar o hacer crecer tu patrimonio.',
    button: 'Conoce Nuestros Desarrollos',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
