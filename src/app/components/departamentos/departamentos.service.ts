import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndPoint:string = 'http://40.117.177.9:8080/api/v1/departamento/all';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> { 
    
    return this.http.get<Departamento[]>(this.urlEndPoint);
  }

  getDepartamento( idx: string ) {
    return this.http.get<Departamento[]>(idx);
  }

  
}