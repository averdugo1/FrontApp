import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndPoint:string = 'http://40.117.177.9:8080/api/v1/departamento';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]> { 
    
    return this.http.get<Departamento[]>(this.urlEndPoint+'/all');
  }

  getDepartamento( idx: string ) {

    var boddy = new FormData();
    let header = new HttpHeaders();
    //let opc = new Option(){}
    /* boddy.append('departamentoId', idx);
    const uploadReq = new HttpRequest('GET', this.urlEndPoint, boddy,  {
      headers: header
    });
    uploadReq.body.append('departamentoId', idx); */
    return this.http.get(this.urlEndPoint+'?departamentoId='+idx);
    
  }

  
}