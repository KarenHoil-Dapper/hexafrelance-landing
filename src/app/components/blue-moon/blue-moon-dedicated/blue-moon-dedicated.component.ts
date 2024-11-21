import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-blue-moon-dedicated',
  templateUrl: './blue-moon-dedicated.component.html',
  styleUrls: ['./blue-moon-dedicated.component.scss']
})
export class BlueMoonDedicatedComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
  }

  public infoCards = [
    '/assets/images/blue/why/swiper1.webp',
    '/assets/images/blue/why/swiper2.webp',
    '/assets/images/blue/why/swiper3.webp',
    '/assets/images/blue/why/swiper4.webp',
    '/assets/images/blue/why/swiper5.webp',
    '/assets/images/blue/why/swiper1.webp',
    '/assets/images/blue/why/swiper2.webp',
    '/assets/images/blue/why/swiper3.webp',
    '/assets/images/blue/why/swiper4.webp',
    '/assets/images/blue/why/swiper5.webp',
  ]


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
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      991: {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
      // 1025: {
      //   slidesPerView: 3,
      //   spaceBetween: 20,
      // },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
    },
  };


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
