import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  bannerInfo = {
    title: '¿Por qué invertir en la Riviera Maya?',
    info: 'Descubre las Razones por las que la Riviera Maya es tu Mejor Opción de Inversión.',
    button: 'Conoce Luna Azul',
    class: 'investment',
  }

  secondInfo = {
    image1: '/assets/images/investment/second1.webp',
    image2: '/assets/images/investment/second2.webp',
    title: 'Riviera Maya: Inversión en Paraíso Seguro',
    info: 'La Riviera Maya, con sus playas de arena blanca, aguas cristalinas y rica herencia cultural, se ha convertido en un imán para los inversionistas inteligentes. Más allá de su belleza natural, esta región ofrece un mercado inmobiliario en constante crecimiento y un clima de inversión favorable. La estabilidad política y económica de México, junto con políticas gubernamentales proinversionistas, hacen de la Riviera Maya un destino atractivo para quienes buscan asegurar su patrimonio en un entorno seguro y prometedor.',
    button: 'Conoce Nuestros Desarrollos',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
