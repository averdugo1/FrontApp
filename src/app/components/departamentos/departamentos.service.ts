import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';
import { Departamento } from './departamentos';

@Injectable({
  providedIn: 'root'
})

export class DepartamentoService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'departamento/';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiURL+'all');
    
  }

  getDepartamento( idx: string ): Observable<Departamento> {
    return this.http.get<Departamento>(this.apiURL+idx);
  }
  
}