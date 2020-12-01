import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'reservas/';

  constructor(private http: HttpClient) { }

  getReservasByUser( idx: string ):any {
    return this.http.get(this.apiURL+'user/'+idx);
  }
}
