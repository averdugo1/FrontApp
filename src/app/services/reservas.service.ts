import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  //private urlEndPoint: string = 'http://40.117.177.9:8080/api/v1/reservas';
  private urlEndPoint: string = 'http://localhost:8080/api/v1/reservas';

  constructor(private http: HttpClient) { }


  Crear(fechainicio, fechatermino, iddepa, idpersona, estadia) {
    let form = new FormData();
    form.append('fechaEntrada', fechainicio);
    form.append('fechaSalida', fechatermino);
    form.append('departamentoId', iddepa);
    form.append('personaId', idpersona);
    form.append('estadiaId', estadia);
    return this.http.post(this.urlEndPoint, form);
  }


}
