import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint = AppConfig.settings.api.url;
  private apiURL = this.urlEndPoint + 'user/';

  constructor(private http: HttpClient) { }

  create(username,  email, password){
    let form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('username', username);
    form.append('profileId', '3');
    return this.http.post(this.apiURL, form);
  }
}
