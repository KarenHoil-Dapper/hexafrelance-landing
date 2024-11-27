import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DefaultResponse } from 'src/app/models/http.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private baseUrl: string = `${environment.URL_API}`

  constructor(private http: HttpClient) {
  }

  async getAllProyects() {
    try {
      const response = await firstValueFrom(this.http.get<any>(this.baseUrl + '/projects'));
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }



}
