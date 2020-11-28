import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'checkin/';

  constructor(private http: HttpClient) { }


  crear(fechainicio, pago) {
    let form = new FormData();
    form.append('fecha', fechainicio);
    form.append('pago', pago);
    return this.http.post(this.apiURL, form);
  }


}
