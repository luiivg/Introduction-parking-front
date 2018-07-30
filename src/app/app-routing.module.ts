import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { SalidaComponent } from './salida/salida.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  { path: 'ingreso', component: RegistroComponent },
  { path: 'salida', component: SalidaComponent },
  { path: 'busqueda', component: ConsultaComponent }  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }

