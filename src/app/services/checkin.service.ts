import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  //private urlEndPoint: string = 'http://40.117.177.9:8080/api/v1/checkin';
  private urlEndPoint: string = 'http://localhost:8080/api/v1/checkin';

  constructor(private http: HttpClient) { }


  crear(fechainicio, pago) {
    let form = new FormData();
    form.append('fecha', fechainicio);
    form.append('pago', pago);
    return this.http.post(this.urlEndPoint, form);
  }


}
