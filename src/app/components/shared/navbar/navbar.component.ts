import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  UserName: String;
  UsrTrue: boolean;
  

  constructor(private _loginService : LoginService, private cookies: CookieService, private router : Router) { 
    this.UserName = "";
    this.UserName = localStorage.getItem('UserLogin');
    if(this.UserName == null){
      this.UsrTrue = false;
    }
    else{
      this.UsrTrue = true;
      
    }
  }

  ngOnInit(): void {
  }
  
  
  logOut(){
    localStorage.removeItem('UserLogin');
    //this.router.navigateByUrl('/home');
    window.location.href = '/home';
    console.log("hola");
  }

}
