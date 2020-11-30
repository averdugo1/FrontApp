import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  email: string;
  message: string;


  constructor() {

  }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.name}`;
    alert('i am submit' + message);

  }


}
