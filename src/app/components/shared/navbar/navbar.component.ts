import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: String;
  userId: String;
  userName2: String;
  usrTrue: boolean;
  

  constructor(private _loginService : LoginService, private cookies: CookieService, private router : Router) { 
    this.userName = "";
    this.userName = localStorage.getItem('UserLogin');
    if(this.userName == null){
      this.usrTrue = false;
    }
    else{
      this.usrTrue = true;   
      this.userId = localStorage.getItem('userId');
      this.userName2 = localStorage.getItem('username');
    }
  }

  ngOnInit(): void {
  }
  
  
  logOut(){
    localStorage.removeItem('UserLogin');
    localStorage.clear();
    //this.router.navigateByUrl('/home');
    window.location.href = '/home';
    console.log("hola");
  }

}
