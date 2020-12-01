import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { PersonaModel } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'persona/';

  constructor(private http: HttpClient) { }

  create(rut, nombre, apellidos, telefono, userId){
    let form = new FormData();
    form.append('rut', rut);
    form.append('nombre', nombre);
    form.append('apellidos', apellidos);
    form.append('telefono', telefono);
    form.append('userId', userId);
    return this.http.post(this.apiURL, form);
  }

  getAll(){
    let url = this.apiURL+'all';
    return this.http.get<PersonaModel[]>(url);
  }
}
