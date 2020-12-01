import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
// Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { DepartamentoService } from './components/departamentos/departamentos.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservasComponent } from './components/reservas/reservas.component';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DepartamentosComponent,
    DepartamentoComponent,
    LoginComponent,
    RegistroComponent,
    PaymentComponent,
    FooterComponent,
    MainComponent,
    ContactusComponent,
    ServiciosComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [
    DepartamentoService,
    AppConfig,
       { provide: APP_INITIALIZER,
         useFactory: initializeApp,
         deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
