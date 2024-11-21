import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DefaultResponse } from 'src/app/models/http.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private sendContactURl:string = `${environment.URL_API}/mail/contact/ccc-group`
  constructor(private http:HttpClient) {
  }


  
}
