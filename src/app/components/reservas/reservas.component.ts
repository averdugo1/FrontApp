import { Component, OnInit } from '@angular/core';
import { ReservasService } from './reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  userId: string;
  json: any;

  constructor(private reservasService: ReservasService, private router:Router) { }

  ngOnInit(): void {

    this.userId = localStorage.getItem('userId');
    this.reservasService.getReservasByUser(this.userId).subscribe(
      (reservas) =>{
        this.json = reservas;
        console.log(reservas);
      }
    );
  }

}
