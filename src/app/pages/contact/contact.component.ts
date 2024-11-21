import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  bannerInfo = {
    title: 'Conéctate con Nosotros',
    info: 'Estamos Aquí para Hacer Realidad tus Sueños Inmobiliarios. ¡Contáctanos Hoy Mismo!',
    button: 'Conoce Luna Azul',
    class: 'contact',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
