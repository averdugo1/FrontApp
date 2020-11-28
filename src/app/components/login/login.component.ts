import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cargando = false;
  
  constructor( private fb: FormBuilder,
    private _loginService : LoginService ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      pass: ['', [Validators.required, Validators.minLength(4)]]
    })       
  }
  
  ngOnInit() {
  }

  cargar () {
    /**
     * "email": "mgoodee0@bing.com",
        "password": "MkGgoDiv4r"
     */
    if (this.loginForm.valid) {
      console.log("It's valid! ", this.loginForm.get('username').value, this.loginForm.get('pass').value);
      this._loginService.login(this.loginForm.get('username').value, this.loginForm.get('pass').value).subscribe(
        (data:any) => {
          document.cookie = "username="+data["email"];
          document.cookie = "profile="+data["profile"];
        }
      );
      
    } else {
      console.log("It's not valid");
    }
    this.cargando = true;    

    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

}