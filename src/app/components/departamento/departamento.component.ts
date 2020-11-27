import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../departamentos/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  depa:any = {};

  constructor( private actRoute: ActivatedRoute,
              private _departamentosService: DepartamentoService ) { 

    this.actRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.depa = this._departamentosService.getDepartamento( params['id'] );
      console.log(this.depa);
    })
  }

  ngOnInit(): void {
  }

}
