import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';
import { NavigationEnd, Router } from '@angular/router';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hexafrelancer';

  public url: string = '';
  public link: string = 'https://wa.me/+5219984131699?text=Hola,%20quisiera%20saber%20más%20sobre%20Luna%20Azul%20Residencial';
  public isPageBlueMoon: boolean = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects.slice(1);
        //console.log(this.url);
        if (
          this.url.startsWith('desarrollo/') ||
          this.url === 'desarrollo' ||
          this.url === 'lunaazulresidencial'
        ) {
          this.isPageBlueMoon = true;
        } else {
          this.isPageBlueMoon = false;
        }
      }
    });
  }

  ngOnInit(): void {

  }
}
