import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import Swal from 'sweetalert2';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-50%)', opacity: 0 }),
        animate('150ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('150ms', style({ transform: 'translateY(-50%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ContactFormComponent implements OnInit {
  urlCompleta: string = '';
  urlParams: any;

  ngOnInit(): void {
    this.urlCompleta = window.location.href;

    // Leer los parámetros de consulta de la URL
    this.route.queryParams.subscribe((params) => {
      //Asignación de parámetros de la URL
      this.urlParams = params;
      //Declaración de constantes
      const empty = '';
      const sourcegoogle = 'Google';
      const sourcefacebook = 'facebook';
      const ads = 'Google Ads';
      const medium = 'Formulario';
      //Asignación de valores del utm_source
      if (this.urlParams['utm_source']) {
        this.form.controls['utm_source'].setValue(ads);
      } else {
        this.form.controls['utm_source'].setValue(sourcegoogle);
      }
      //Asignación de valores del utm_medium
      if (this.urlParams['utm_medium']) {
        this.form.controls['utm_medium'].setValue(this.urlParams['utm_medium']);
      } else {
        this.form.controls['utm_medium'].setValue(medium);
      }
      //Asignación de valores del utm_campaign
      if (this.urlParams['utm_campaign']) {
        this.form.controls['utm_campaign'].setValue(
          this.urlParams['utm_campaign']
        );
      } else {
        this.form.controls['utm_campaign'].setValue(empty);
      }
      //Asignación de valores del utm_adset
      if (this.urlParams['adset']) {
        this.form.controls['adset'].setValue(this.urlParams['adset']);
      } else if (this.urlParams['adset'] === 'undefined') {
        this.form.controls['adset'].setValue(empty);
      } else {
        this.form.controls['adset'].setValue(empty);
      }
      //Asignación de valores del utm_content
      if (this.urlParams['utm_content']) {
        this.form.controls['utm_content'].setValue(
          this.urlParams['utm_content']
        );
      } else {
        this.form.controls['utm_content'].setValue(empty);
      }
      //Asignación de valores del utm_term
      if (this.urlParams['utm_term']) {
        this.form.controls['utm_term'].setValue(this.urlParams['utm_term']);
      } else {
        this.form.controls['utm_term'].setValue(empty);
      }
      //Asignación de valores del utm_gclid
      if (this.urlParams['gclid']) {
        this.form.controls['gclid'].setValue(this.urlParams['gclid']);
      } else {
        this.form.controls['gclid'].setValue(empty);
      }
      //Asignación de valores del wbraid
      if (this.urlParams['wbraid']) {
        this.form.controls['wbraid'].setValue(this.urlParams['wbraid']);
      } else {
        this.form.controls['wbraid'].setValue(empty);
      }
      //Asignación de valores del utm_gbraid
      if (this.urlParams['gbraid']) {
        this.form.controls['gbraid'].setValue(this.urlParams['gbraid']);
      } else {
        this.form.controls['gbraid'].setValue(empty);
      }
      //Asignación de valores del device
      if (this.urlParams['device']) {
        this.form.controls['device'].setValue(this.urlParams['device']);
      } else {
        this.form.controls['device'].setValue(empty);
      }
    });
  }
  form: FormGroup = this.formBuilder.group({
    from_name: '',
    // name: 'Admin',
    email: '',
    phone: '',
    message: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    adset: '',
    utm_content: '',
    utm_term: '',
    gclid: '',
    wbraid: '',
    gbraid: '',
    device: '',
    url: window.location.href,
  });

  async send() {
    
    if (this.form.valid) {
      try {
        emailjs.init('ju8CPZylZOJjwW6_i');
        let response = await emailjs.send(
          'service_1zk6bva',
          'template_s1nf1u4',
          {
            name: this.form.value.from_name,
            //name: this.form.value.name,
            phone: this.form.value.phone,
            email: this.form.value.email,
            message: this.form.value.message,
            utm_source: this.form.value.utm_source,
            utm_medium: this.form.value.utm_medium,
            utm_campaign: this.form.value.utm_campaign,
            utm_adset: this.form.value.adset,
            utm_content: this.form.value.utm_content,
            utm_term: this.form.value.utm_term,
            utm_gclid: this.form.value.gclid,
            utm_wbraid: this.form.value.wbraid,
            utm_gbraid: this.form.value.gbraid,
            device: this.form.value.device,
            zones: 'Luna Azul',
            url: this.form.value.url,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            this.toastr.success(
              '<span class="toast-custom">Mensaje enviado exitosamente</span>',
              '',
              {
                enableHtml: true,
                timeOut: 3000,
                toastClass: 'toast-custom-success',
                progressBar: false,
              }
              
            );
    
            this.form.reset();
            
            setTimeout(() => { 
               this.router.navigate(['/gracias'], { queryParams: null });
            }, 3000);
          }
        })
      
       
      } catch (error) {
        console.error('Error al enviar el email:', error);
        console.error('Formulario inválido');
        this.toastr.error(
          '<span class="toast-custom">Ha ocurrido un error al enviar su mensaje</span>',
          'Inténtelo de nuevo más tarde',
          {
            timeOut: 3000,
            enableHtml: true,
            toastClass: 'toast-custom-error',
            progressBar: false,
          }
        );
      }
    } else {
      this.toastr.warning(
        '<span class="Falta o existe un dato erróneo</span>',
        'Por favor verifique los datos y vuelva a intentarlo',
        {
            timeOut: 3000,
            enableHtml: true,
          toastClass: 'toast-custom-warning',
          progressBar: false,
        }
      );
    }
  }

  public contactForm!: FormGroup;
  public isLoading: boolean = false;
  public invalid: boolean = false;
  public invalidFlag: string = '';
  public invalidCaptcha: string = '';
  public url: string = '';
  public isPageBlueMoon: boolean = false;

  constructor(
    private toastr: ToastrService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,6}$'
          ),
        ],
      ],
      phone: ['', Validators.required],
      message: [''],
    });
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects.slice(1);
        // console.log(this.url);
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

  formValidation() {
    if (this.form.controls['from_name'].errors) {
      this.invalidFlag = 'invalid-name';
      this.invalid = true;
    }
    if (this.form.controls['email'].errors) {
      this.invalidFlag = 'invalid-email';
      this.invalid = true;
    }
    if (this.form.controls['phone'].errors) {
      this.invalidFlag = 'invalid-phone';
      this.invalid = true;
    }
    if (this.form.invalid) {
      this.invalidFlag = 'invalid-all';
      return;
    }
    
  }

  errorMessage(formControl: string): any {
    if (this.form.get(formControl)?.hasError('required')) {
      return `* Requerido.`;
    } else {
      if (this.form.get(formControl)?.hasError('pattern')) {
        return `Email inválido`;
      } else {
        return `* Inválido.`;
      }
    }
  }

  resetValidations(flag?: string) {
    this.invalid = false;
    this.invalidFlag = '';
  }

  goTo(path: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }
}
