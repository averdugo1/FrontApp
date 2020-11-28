import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class EstadiaService {
  
  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'estadias/';

  constructor(private http: HttpClient) { }


  crear(checkin, checkout) {
    let form = new FormData();
    form.append('checkinId', checkin);
    form.append('checkoutId', checkout);
    return this.http.post(this.apiURL, form);
  }


}
