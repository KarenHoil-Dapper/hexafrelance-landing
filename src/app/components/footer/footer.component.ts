import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public routers = [
    {
      name: 'Inicio',
      route: '/inicio',
    },
    {
      name: 'Desarrollo',
      route: '/lunaazulresidencial',
    },
    {
      name: 'Nosotros',
      route: '/nosotros',
    },
    {
      name: 'Inversión',
      route: '/inversion',
    },
    {
      name: 'Contacto',
      route: '/contacto',
    }
  ]
  public url: string = '';
  public isPageBlueMoon: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
  ) {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects.slice(1);
        if (this.url.startsWith('desarrollo/') || this.url === 'desarrollo' || this.url === 'lunaazulresidencial') {
          this.isPageBlueMoon = true;
        } else {
          this.isPageBlueMoon = false;
        }
      }
    });
   }

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
