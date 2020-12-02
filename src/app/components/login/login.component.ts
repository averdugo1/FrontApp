import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from "ngx-cookie-service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cargando = false;
  UserLogin: String;

  constructor(private fb: FormBuilder,
    private _loginService: LoginService, private router: Router, private cookies: CookieService) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      pass: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit() {
    
  }

  cargar() {
    /**
     * "email": "mgoodee0@bing.com",
        "password": "MkGgoDiv4r"
     */
    if (this.loginForm.valid) {
      
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere porfavor...'
      });
      Swal.showLoading();
      localStorage.setItem('userId', '1');
      localStorage.setItem('username', this.loginForm.get('username').value);
      localStorage.setItem('UserLogin', this.loginForm.get('username').value,);
      Swal.close();
      console.log("It's valid! ", this.loginForm.get('username').value, this.loginForm.get('pass').value);
      console.log("It's valid! ", this.loginForm);
      window.location.href = '/home';
      /* this._loginService.login(this.loginForm.get('username').value, this.loginForm.get('pass').value).subscribe(
        (data:any) => {
          document.cookie = "username="+data["email"];
          document.cookie = "profile="+data["profile"];
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('username', data.username);
          localStorage.setItem('UserLogin', data.email);         
          window.location.href = '/home';
        }
      ); */

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: 'Verifique los datos...'
      });
      console.log("It's not valid");
    }
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  

}