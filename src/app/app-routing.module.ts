import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { SalidaComponent } from './salida/salida.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'ingreso', component: RegistroComponent },
  { path: 'salida', component: SalidaComponent },
  { path: 'busqueda', component: ConsultaComponent },
  { path: 'salida/:placa', component: SalidaComponent } 
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }

