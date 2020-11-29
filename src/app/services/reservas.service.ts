import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'reservas/';

  constructor(private http: HttpClient) { }


  Crear(fechainicio, fechatermino, iddepa, idpersona, estadia) {
    let form = new FormData();
    form.append('fechaEntrada', fechainicio);
    form.append('fechaSalida', fechatermino);
    form.append('departamentoId', iddepa);
    form.append('personaId', idpersona);
    form.append('estadiaId', estadia);
    return this.http.post(this.apiURL, form);
  }


}
