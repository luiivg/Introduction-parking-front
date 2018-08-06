import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BotonesComponent } from './botones/botones.component';
import { RegistroComponent } from './registro/registro.component';
import { SalidaComponent } from './salida/salida.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroService} from './registro/registro.service';
import { ConsultaService } from './consulta/service/consulta.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    RegistroComponent,
    SalidaComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegistroService,ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
