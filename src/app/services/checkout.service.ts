import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'checkout/';

  constructor(private http: HttpClient) { }


  crear(fecha) {
    let form = new FormData();
    form.append('fecha', fecha);
    return this.http.post(this.apiURL, form);
  }


}
