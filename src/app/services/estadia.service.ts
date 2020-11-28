import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadiaService {

  //private urlEndPoint: string = 'http://40.117.177.9:8080/api/v1/reservas';
  private urlEndPoint: string = 'http://localhost:8080/api/v1/reservas';

  constructor(private http: HttpClient) { }


  crear(checkin, checkout) {
    let form = new FormData();
    form.append('checkinId', checkin);
    form.append('checkoutId', checkout);
    return this.http.post(this.urlEndPoint, form);
  }


}
