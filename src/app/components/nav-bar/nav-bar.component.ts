import {
  Component, Inject, OnInit, PLATFORM_ID, Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // public navElements = navElements;
  public menu: boolean = false;
  public scrollFlag: string = '';
  public language: string = 'ESP';
  private scrollListener: boolean = true;
  public activeLang = 'es';
  public paddingScrollHeader = '';
  langs: string[] = [];
  public routes: any;
  public url: string = '';
  public isPageBlueMoon: boolean = false;

  public routers = [
    {
      name: 'Inicio',
      route: '/inicio',
    },
    {
      name: 'Desarrollo',
      route: '/hexafrelance',
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

  public routersBlue = [
    {
      name: 'Ultimos proyectos',
      route: 'razones',
    },
    {
      name: 'Compromiso',
      route: 'disponibilidad',
    },
    {
      name: 'Razones',
      route: 'valor',
    },
    {
      name: 'Plataforma',
      route: 'ubicacion',
    },
    {
      name: 'Proyectos',
      route: 'proyectos',
    }
  ]


  public selectedItem: string | null = 'banner'


  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects.slice(1);
        //console.log(this.url);
        if (this.url.startsWith('desarrollo/') || this.url === 'desarrollo' || this.url === 'hexafrelance') {
          this.isPageBlueMoon = true;
        } else {
          this.isPageBlueMoon = false;
        }
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.scrollListener = true;
    this.renderer.listen('window', 'scroll', (e) => {
      if (this.scrollListener) {
        this.scrollFlag =
          e.target.scrollingElement.scrollTop > 75 ? 'scroll' : '';
        this.paddingScrollHeader = '0px';
      }
    });

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

  changeLang(lang: string) {
    this.activeLang = lang;
    // this.translate.use(this.activeLang);
    // this.listenerService.navigateToSameRoute(lang);
    return;
  }


}
