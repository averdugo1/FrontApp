import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamentos';
import { DepartamentoService } from './departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit {

  departamentos: Departamento[];
  verDep: DepartamentoService;


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
    this.router.navigate( ['/departamento', idx]);
  }

  

}
