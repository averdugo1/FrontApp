import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private urlEndPoint: string = 'http://40.117.177.9:8080/api/v1/checkout';

  constructor(private http: HttpClient) { }


  crear(fecha) {
    let form = new FormData();
    form.append('fecha', fecha);
    return this.http.post(this.urlEndPoint, form);
  }


}
