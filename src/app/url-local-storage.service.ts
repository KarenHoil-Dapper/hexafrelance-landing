
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlLocalStorageService {

  constructor(private route: ActivatedRoute) { }

  updateLocalStorageFromURL() {
    this.route.queryParams.subscribe(params => {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          const value = params[key];
          const existingValue = localStorage.getItem(key);
          
          if (!existingValue || existingValue !== value) {
            localStorage.setItem(key, value);
          }
        }
      }
    });
  }

  getValueFromLocalStorage(key: string): string | null {
    const value = localStorage.getItem(key);
    return value !== null ? value : null;
  }
}