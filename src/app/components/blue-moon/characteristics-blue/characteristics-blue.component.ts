import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-characteristics-blue',
  templateUrl: './characteristics-blue.component.html',
  styleUrls: ['./characteristics-blue.component.scss'],
})
export class CharacteristicsBlueComponent implements OnInit {

  public proyects: any[] = [
    // {
    //   id: '1000',
    //   code: 'f230fh0g3',
    //   name: 'Bamboo Watch',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores soluta ratione blanditiis iste, accusamus quisquam ipsam asperiores ab, reprehenderit qui omnis deserunt culpa quidem laudantium iure. Distinctio, sequi beatae?',
    //   image: 'bamboo-watch.jpg',
    //   price: 65,
    //   category: 'Accessories',
    //   quantity: 24,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5
    // },
    // {
    //   id: '1000',
    //   code: 'f230fh0g3',
    //   name: 'Bamboo Watch',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores soluta ratione blanditiis iste, accusamus quisquam ipsam asperiores ab, reprehenderit qui omnis deserunt culpa quidem laudantium iure. Distinctio, sequi beatae?',
    //   image: 'bamboo-watch.jpg',
    //   price: 65,
    //   category: 'Accessories',
    //   quantity: 24,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5
    // },
    // {
    //   id: '1000',
    //   code: 'f230fh0g3',
    //   name: 'Bamboo Watch',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores soluta ratione blanditiis iste, accusamus quisquam ipsam asperiores ab, reprehenderit qui omnis deserunt culpa quidem laudantium iure. Distinctio, sequi beatae?',
    //   image: 'bamboo-watch.jpg',
    //   price: 65,
    //   category: 'Accessories',
    //   quantity: 24,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5
    // },
    // {
    //   id: '1000',
    //   code: 'f230fh0g3',
    //   name: 'Bamboo Watch',
    //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores soluta ratione blanditiis iste, accusamus quisquam ipsam asperiores ab, reprehenderit qui omnis deserunt culpa quidem laudantium iure. Distinctio, sequi beatae?',
    //   image: 'bamboo-watch.jpg',
    //   price: 65,
    //   category: 'Accessories',
    //   quantity: 24,
    //   inventoryStatus: 'INSTOCK',
    //   rating: 5
    // },
  ];

  constructor(
    private service: ContactService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    // this.proyects = [...this.proyects, ...this.proyects,]
    this.getProyects();
  }

  async getProyects() {
    try {
      let response = await this.service.getAllProyects();
      console.log(response);
      this.proyects = response;
    } catch (error) {
      console.log(error);

    }
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

  getDesc(text: any) {
    const limiteCaracteres = 40;
    if (text.length > limiteCaracteres) {
      return text.slice(0, limiteCaracteres) + "...";
    }
    return text.replace(/<\/?p>/g, '');
  }

}
