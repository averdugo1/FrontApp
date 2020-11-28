import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cargando = false;


  constructor( private fb: FormBuilder ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      pass: ['', [Validators.required, Validators.minLength(4)]]
    })

   }

  ngOnInit() {
  }

  cargar () {
    if (this.loginForm.valid) {
      
    }
    this.cargando = true;

    console.log(this.loginForm.value);

    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

}