import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './service/consulta.service';
import { Vehiculo } from '../registro/vehiculo';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  vehiculos:Array<Vehiculo>;
  constructor(private consulta:ConsultaService) { }

  ngOnInit() {
    this.consulta.consultarVehiculos().subscribe(
      vehiculos => this.vehiculos = vehiculos
    );
     
  }

  
}
