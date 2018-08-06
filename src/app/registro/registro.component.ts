import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})

export class RegistroComponent implements OnInit {

  vehiculo: Vehiculo = new Vehiculo();

  constructor() { }

  tiposVehiculo = [
    {name: 'MOTO'},
    {name: 'CARRO'}
  ];

  ngOnInit() {
  }

  public onChange($event): void {
    this.vehiculo.tipoVehiculo = $event.target.value;
  }

}
