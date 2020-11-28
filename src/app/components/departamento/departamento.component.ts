import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from '../departamentos/departamentos';
import { DepartamentoService } from '../departamentos/departamentos.service';
import { ReservasService } from 'src/app/services/reservas.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { EstadiaService } from 'src/app/services/estadia.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {
  depa:Departamento;
  departamentoId: string;

  constructor(private actRoute: ActivatedRoute,
    private _departamentosService: DepartamentoService,
    private _checkinService: CheckinService,
    private _checkoutService: CheckoutService,
    private _estadiaService: EstadiaService,
    private reservasService: ReservasService ) { 

    this.actRoute.params.subscribe( params => {
      this._departamentosService.getDepartamento( params['id'] ).subscribe(
        (departamentos) => {
          this.departamentoId = params['id'];
          this.depa = departamentos;
        }
      );
    })

    this.depa = {
      "idDepartmento": 1,
      "nombre": "Postman - Test",
      "direccion": "Postman 32",
      "region": "Metropolitana",
      "ciudad": "Santiago",
      "precio": 26000,
      "disponibilidad": false
    }
  }

  ngOnInit(): void {
  }

  reservarDepa() {
    var fechai = '2020/10/14';
    var fechat = '2020/10/16';
    var dias = '23';
    var idPersona = '41';
    var idDepartamento = this.departamentoId;
    var pago = this.depa.precio * 0.1 ;
    // TODO: Crear Checkin, Checkout, Estadia y luego reserva
    this._checkinService.crear(fechai, pago).subscribe(
      (data:any)=> {
        console.log(data);
      }
    );

    this.reservasService.Crear(fechai,fechat,idDepartamento,idPersona,dias).subscribe(
      (data:any)=> {
        console.log(data);
      },
      (err:any)=> {
        console.log(err);
      }
    );
    
    console.log('Ingreso de reserva');
  }

}
