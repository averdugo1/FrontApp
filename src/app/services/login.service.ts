import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'login/';

  constructor(private http: HttpClient) { }

  login(email, password){
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);
    return this.http.post(this.apiURL, form);
  }
}
