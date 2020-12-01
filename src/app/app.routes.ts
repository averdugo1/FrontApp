import { RoutesRecognized } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {DepartamentosComponent } from './components/departamentos/departamentos.component';
import { AboutComponent } from './components/about/about.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ReservasComponent } from './components/reservas/reservas.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'departamentos', component: DepartamentosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'departamento/:id', component: DepartamentoComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'pago', component: PaymentComponent},
    { path: 'contact', component: ContactusComponent},
    { path: 'servicios', component: ServiciosComponent},
    { path: 'reservas', component: ReservasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
/* , { useHash:true } */
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);