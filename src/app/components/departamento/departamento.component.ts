import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Departamento } from '../departamentos/departamentos';
import { DepartamentoService } from '../departamentos/departamentos.service';
import { ReservasService } from 'src/app/services/reservas.service';
import { CheckinService } from 'src/app/services/checkin.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { EstadiaService } from 'src/app/services/estadia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})

export class DepartamentoComponent implements OnInit {
  depa:Departamento;
  departamentoId: string;
  userName:string;
  usrTrue:Boolean;
  isLoaded:Boolean;
  dateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private _departamentosService: DepartamentoService,
    private _checkinService: CheckinService,
    private _checkoutService: CheckoutService,
    private _estadiaService: EstadiaService,
    private reservasService: ReservasService,
    private router:Router ) { 

      this.dateForm = fb.group({
        date_in: ['', [Validators.required]],
        date_out: ['', [Validators.required]]
      })

      this.userName = "";
      this.userName = localStorage.getItem('UserLogin');
      if(this.userName == null){
        this.usrTrue = false;
      } else {
        this.usrTrue = true;      
      }      
    }
    
    ngOnInit(): void {
      this.actRoute.params.subscribe( params => {
        this._departamentosService.getDepartamento( params['id'] ).subscribe(
          (departamentos) => {
            this.departamentoId = params['id'];
            this.depa = departamentos;
            this.isLoaded = true;
          }
        );
      })
    }

  reservarDepa() {    
    var fechai;
    var fechat;
    var idPersona = '41';
    var idDepartamento = this.departamentoId;
    var pago = this.depa.precio * 0.1 ;
    // TODO: Crear Checkin, Checkout, Estadia y luego reserva
    console.log('Ingreso de reserva');

    if(this.dateForm.valid){
      console.log("It's valid!");
      fechai = moment(this.dateForm.get('date_in').value).format('YYYY/MM/DD');
      fechat = moment(this.dateForm.get('date_out').value).format('YYYY/MM/DD');
      console.log(fechai, fechat);
      this._checkinService.crear(fechai, pago).subscribe(
        (data:any)=> {        
          let idCheckin = data['idCheckin'];
          console.log('Checkin ID', idCheckin);
          
          this._checkoutService.crear(fechat).subscribe(
            (data:any)=> {
  
              let idCheckout = data['idCheckout'];
              console.log('Checkout ID', idCheckout);
  
              this._estadiaService.crear(idCheckin, idCheckout).subscribe(
                (data:any)=> {
  
                  let idEstadia = data['idEstadia'];
                  console.log('Estadia ID', idCheckout);
  
                  this.reservasService.Crear(fechai,fechat,idDepartamento,idPersona,idEstadia).subscribe(
                    (data:any)=> {
                      console.log('Reserva', data);
                      this.router.navigate( ['/pago']);
                    },
                    (err:any)=> {
                      console.log(err);
                    }
                  );
                }
              );
            }
          );
        }
      );
    }    
  }

}
