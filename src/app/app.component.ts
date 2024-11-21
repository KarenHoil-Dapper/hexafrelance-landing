import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper';
import { NavigationEnd, Router } from '@angular/router';
import { UrlLocalStorageService } from 'src/app/url-local-storage.service';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ccc-group-front';

  public url: string = '';
  // public link: string = 'https://wa.me/+529983295355';
  public link: string = 'https://wa.me/+529983295355?text=Hola,%20quisiera%20saber%20más%20sobre%20Luna%20Azul%20Residencial';
  public isPageBlueMoon: boolean = false;

  constructor(
    private urlLocalStorageService: UrlLocalStorageService,
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
    this.urlLocalStorageService.updateLocalStorageFromURL();

    const utm_medium =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_medium');
    const utm_campaign =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_campaign'); // Cambia 'utm_campaign' por el nombre de tu otro parámetro
    const utm_source =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_source');
    const utm_term =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_term');
    const utm_content =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_content');
    const utm_gclid =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_gclid');
    const utm_wbraid =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_wbraid');
    const utm_gbraid =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_gbraid');
    const utm_adset =
      this.urlLocalStorageService.getValueFromLocalStorage('utm_adset');

    if (utm_medium !== null) {
      // console.log('Valor de route en localStorage:', utm_medium);
    }
    if (utm_campaign !== null) {
      // console.log('Valor de utm_campaign en localStorage:', utm_campaign);
    }
    if (utm_source !== null) {
      // console.log('Valor de utm_source en localStorage:', utm_source);
    }
    if (utm_term !== null) {
      // console.log('Valor de utm_term en localStorage:', utm_term);
    }
    if (utm_content !== null) {
      // console.log('Valor de utm_content en localStorage:', utm_content);
    }
    if (utm_gclid !== null) {
      // console.log('Valor de utm_gclid en localStorage:', utm_gclid);
    }
    if (utm_wbraid !== null) {
      // console.log('Valor de utm_wbraid en localStorage:', utm_wbraid);
    }
    if (utm_gbraid !== null) {
      // console.log('Valor de utm_gbraid en localStorage:', utm_gbraid);
    }
    if (utm_adset !== null) {
      // console.log('Valor de utm_adset en localStorage:', utm_adset);
    }
  }
}
