import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from './departamentos';
import { DepartamentoService } from './departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit {

  departamentos: Departamento[];

  constructor(private departamentoService: DepartamentoService, 
            private router:Router) { }

  ngOnInit(): void {
    
    this.departamentoService.getDepartamentos().subscribe(
      (departamentos) => {
        console.log(departamentos);
        this.departamentos = departamentos
      }
    )
  }

  verDepartamento( idx:number ) {
    console.log(idx);
    this.router.navigate( ['/departamento/', idx]);
  }

  

}
