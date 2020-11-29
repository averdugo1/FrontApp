import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private _userService: UserService,
    private _personaService: PersonaService) { 
      this.registroForm = fb.group({
        username: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.minLength(4), Validators.email]],
        rut: ['', [Validators.required, Validators.minLength(8)]],
        pass: ['', [Validators.required, Validators.minLength(4)]],
        nombre: ['', [Validators.required, Validators.minLength(4)]],
        apellidos: ['', [Validators.required, Validators.minLength(4)]],
        telefonos: ['', [Validators.required, Validators.minLength(4)]]        
      })
    }

  ngOnInit(): void {
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      console.log("It's valid! ", this.registroForm.value);
      let username = this.registroForm.get("username").value;
      let email = this.registroForm.get("email").value;
      let pass = this.registroForm.get("pass").value;
      let rut = this.registroForm.get("pass").value;
      let nombre = this.registroForm.get("pass").value;
      let apellidos = this.registroForm.get("pass").value;
      let telefono = this.registroForm.get("pass").value;      
      this._userService.create(username, email, pass).subscribe(
        (data:any) => {
          console.log('Created user', data);
          this._personaService.create(rut, nombre, apellidos, telefono, data['userId']).subscribe(
            (data:any) => {
              console.log('Persona created', data);
            }
          );

        }
      );
    } else {
      console.log("It's not valid");
    }
  }

}
