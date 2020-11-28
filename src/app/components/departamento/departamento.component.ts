import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from '../departamentos/departamentos';
import { DepartamentoService } from '../departamentos/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  depa:Departamento;
  depa2:any = {};

  constructor( private actRoute: ActivatedRoute,
              private _departamentosService: DepartamentoService ) { 

    this.actRoute.params.subscribe( params => {
      this._departamentosService.getDepartamento( params['id'] ).subscribe(
        (departamentos) => {
          this.depa = departamentos;
        }
      );
    })
  }

  ngOnInit(): void {
  }

}
